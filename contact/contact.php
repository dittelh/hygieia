<?php
/**
 * Koden er taget fra et tidligere projekt som Ditte har været med til https://github.com/Thom9521/todo-app/blob/master/server/Lists/SharedLists/SendMail.php
 * 26-05-2022
 *  */ 

$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$birthYear = $_POST['birthYear'];
$message = $_POST['message'];


// Lige nu er mailen ikke sat op med hygieias mail, derfor står Dittes mail der i stedet. 
// Det er noget der skal skiftes ud
// $toEmail = "neeliya@hygieia.dk";
$toEmail = "dittehansen143@gmail.com";

    // Subject for mail
    $subject = "Kontaktform fra Hygieia.dk";

    // Message in mail
    $message = "En kunde har udfyldt kontaktformen på Hygieia.dk.<br><br>
                Navn: $name<br>
                Email: $email<br>
                Telefon nr.: $number<br>
                Fødselsår: $birthYear<br>
                Besked: $message<br><br>";

    // Prepare headers for mail
    // $headers =  "From: Hygieia <info@hygieia.dk>\r\n";
    $headers =  "From: Hygieia <ditte@devditte.dk>\r\n";
    $headers .= "Reply-To: $name <$email>\r\n";
    // $headers .= "Return-Path: Hygieia <info@hygieia.dk>\r\n";
    $headers .= "Return-Path: Hygieia <ditte@devditte.dk>\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    // Send mail
    if (mail($toEmail, $subject, $message, $headers) ) {
     // Redirect back with success popup
        header('Location: contact.html?success=1');
    } else {
        // Redirect back with success popup
        header('Location: contact.html?success=0');
    }