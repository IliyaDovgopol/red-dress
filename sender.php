<?php
    $name = $_POST['name'];
	$phone = $_POST['phone'];
    $email = $_POST['email'];

	$to = "iliya2005dovgopol@gmail.com"; 
	$date = date ("d.m.Y"); 
	$time = date ("h:i");
	$from = $email;
	$subject = "Заявка з сайту";

	
	$msg="
    Ім'я: $name /n
    Телефон: $phone /n
    Пошта: $email"; 	
	mail($to, $subject, $msg, "From: $from ");

?>

<p>Привіт, форма відправлена</p>