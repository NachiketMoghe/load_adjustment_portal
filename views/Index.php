<?php

$HOD= $_POST["HOD"];
$Day= $_POST["Day"]; 
$Date= $_POST["Date"];
$Faculty_Name= $_POST["Faculty_Name"]; 
$E_Code= $_POST["E_Code"]; 
$Course_Name= $_POST["Course_Name"]; 
$Substitute= $_POST["Substitute"]; 
$Slot= $_POST["Slot"]; 
$type= $_POST["type"];
$Duration= $_POST["Duration"];
$Year= $_POST["Year"];
$Branch= $_POST["Branch"];
$Division= $_POST["Division"];
$Batch= $_POST["Batch"];

$str1= "HOD: ".$HOD."<br>Day:".$Day."<br>Date:".$Date;
$str2= "Faculty Name: ".$Faculty_Name."<br>Employee Code:".$E_Code."<br>Course Name:".$Course_Name;
$str3= "Substitute: ".$Substitute."<br>Slot:".$Slot."<br>Type:".$type."<br>Duration:".$Duration."<br>Year: ".$Year;
$str4= "Branch:".$Branch."<br>Division:".$Division."<br>Batch:".$Batch;

$email="viraj.joshi@somaiya.edu";
require_once('C:\xampp\htdocs\PHPMailer\PHPMailerAutoload.php');

$mail= new PHPMailer();
$mail->isSMTP();
$mail->SMTPAuth = true;
$mail->SMTPSecure= 'ssl';
$mail->Host = 'smtp.gmail.com';
$mail->Port = '465';
$mail->isHTML();
$mail->Username = 'loadportalsomaiya@gmail.com';
$mail->Password = 'Internship@123';
$mail->SetFrom('LoadPortal.com');
$mail->Subject = 'Load Form';
$mail->Body = "Form Details:<br>".$str1."<br>".$str2."<br>".$str3."<br>".$str4."<br>";
$mail->AddAddress($email);

$mail->Send();



?>