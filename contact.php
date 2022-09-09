<?php
    ini_set('display_errors', 1); 
    error_reporting(E_ALL);
    // $test = json_decode(file_get_contents('php://input'), true);
    if (isset($_POST['firstName'])) {
        $firstname = $_POST['firstName'];
        $lastname = $_POST['lastName'];
        $mail = $_POST['mail'];
        $messageForm = $_POST['message'];
        $phone = $_POST['phone'];
        var_dump($firstname);
        var_dump($lastname);
        var_dump($mail);
        var_dump($phone);
        var_dump($messageForm);
        if(!empty($firstname)&&!empty($lastname)&&!empty($mail)&&!empty($messageForm)&&!empty($phone)){
                $header = "MIME-Version: 1.0\r\n";
                $header.= 'From: Contact Form Portfolio'."\n";
                $header.= 'Content-Type:text/html; charset="UTF-8"'."\n";
                $header.= 'Content-Transfer-Encoding: 8bit';
                $message= '
                <html>
                    <body>
                        <div align="center">
                        <u>Nom de l\'expéditeur :</u>'.$lastname.'<br />
                        <u>Prénom de l\'expéditeur :</u>'.$firstname.'<br />
                        <u>Téléphone de l\'expéditeur :</u>'.$phone.'<br />
                        <u>Mail de l\'expéditeur :</u>'.$mail.'<br />
                        <br />
                        '.nl2br($messageForm).'
                        </div>
                    </body>
                </html>
                ';

                mail("antoine.piron@a-piron.fr", "Sujet du message", $message, $header);
                echo json_encode('Donnée bien récupérée');
        }  else{
            echo json_encode('Echec de la récupération des données + '.' '.$firstname.' '.$lastname.' '.$mail.' '.$messageForm.' '.$phone);
        }
    }
?>