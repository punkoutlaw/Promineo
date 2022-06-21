<?php
if(!isset($_POST["submit"]))
{
    echo "Error; please submit the form!";
}

//Collect
$name = $_POST["name"];
$visitor_email = $_POST["email"];
$message = $_POST["message"];

//Validate
if(empty($name)||empty($visitor_email))
{
    echo "Your name & email are needed!",
    exit;
}
$email_from = "info@feudalerockband.com";
$email_subject = "New Inquiry";
$email_body = "A new email hase been received from $name.\n".
    "email address: $visitor email\n".
    "This is the message: \n $message".

$to = "info@feudalerockband.com";
$headers = "From: $email_form \r\n";

//Send Email
mail($to,$email_subject,$email_body,$headers);