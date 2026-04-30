<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $subject = htmlspecialchars($_POST['Subject']);
    $message = htmlspecialchars($_POST['Message']);

    $to = "caroline.lassueur+webcontactform@gmail.com"; // <-- change this
    $headers = "From: $email";

    $fullMessage = "Name: $name\n";
    $fullMessage .= "Email: $email\n";
    $fullMessage .= "Subject: $subject\n\n";
    $fullMessage .= "Message:\n$message";

    if (mail($to, $subject, $fullMessage, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Error sending message.";
    }
}
?>
