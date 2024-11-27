<?php

namespace App\Services;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use App\Events\FailedLoginAttempt;
use App\Models\User;

class LoginService
{
    public function handleLogin($request)
    {
        $key = 'login|' . $request->email;

        if (RateLimiter::tooManyAttempts($key, 5)) {
            return [
                'data' => ['message' => 'Too many login attempts. Please try again later.'],
                'status' => 429
            ];
        }

        if (!Auth::attempt($request->only(['email', 'password']))) {
            RateLimiter::hit($key, 60);

            if (RateLimiter::attempts($key) === 3) {
                $this->sendFailedAttemptNotification($request->email);
            }

            return [
                'data' => ['message' => 'Wrong Email or Password'],
                'status' => 401
            ];
        }

        RateLimiter::clear($key);

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return [
            'data' => ['user' => $user, 'token' => $token],
            'status' => 200
        ];
    }

    private function sendFailedAttemptNotification($email)
    {
        $user = User::where('email', $email)->first();
        if ($user) {
            event(new FailedLoginAttempt($user));
        }
    }
}
