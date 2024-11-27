<?php

namespace App\Listeners;


use App\Events\FailedLoginAttempt;
use App\Mail\FailedLoginNotification;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendFailedLoginEmail
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(FailedLoginAttempt $event): void
    {
        $user = $event->user;
         // Log the email sending attempt
         try {
            // Log the email sending attempt
            Log::info('Sending failed login notification.', [
                'email' => $user->email,
                'ip' => request()->ip(),
                'time' => now()->toDateTimeString(),
            ]);

            // Send the email
            Mail::to($user->email)->send(new FailedLoginNotification($user));

            // Log success
            Log::info('Failed login notification sent successfully.', ['email' => $user->email]);
        } catch (\Exception $e) {
            // Log the exception
            Log::error('Failed to send failed login notification.', [
                'email' => $user->email,
                'error' => $e->getMessage(),
            ]);
        }
    }
}
