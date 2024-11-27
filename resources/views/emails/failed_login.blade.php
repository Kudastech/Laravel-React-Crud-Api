<!DOCTYPE html>
<html>
<head>
    <title>Failed Login Attempt Notification</title>
</head>
<body>
    <p>Dear {{ $name }},</p>

    <p>We noticed multiple failed login attempts to your account. Below are the details of the attempts:</p>

    <ul>
        <li><strong>Email:</strong> {{ $email }}</li>
        <li><strong>IP Address:</strong> {{ $ip }}</li>
        <li><strong>Time:</strong> {{ $time }}</li>
    </ul>

    <p>If this wasn't you, we recommend securing your account by changing your password immediately.</p>

    <p>If you need assistance, please contact our support team.</p>

    <p>Best regards,<br>
    Kudastech</p>
</body>
</html>
