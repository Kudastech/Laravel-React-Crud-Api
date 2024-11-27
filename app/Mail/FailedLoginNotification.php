<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class FailedLoginNotification extends Mailable
{
    use Queueable, SerializesModels;

    public $user;

    /**
     * Create a new message instance.
     */
    public function __construct($user)
    {
        $this->user = $user;
        
    }

    /**
     * Build the message.
     */
    public function build()
    {
        return $this->subject('Failed Login Attempt Notification')
                    ->view('emails.failed_login')
                    ->with([
                        'name' => $this->user->name,
                        'email' => $this->user->email,
                        'ip' => request()->ip(),
                        'time' => now()->toDateTimeString(),
                    ]);
    }
}
