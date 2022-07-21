<?php
if(isset($_POST['mailform'])) {
   if(!empty($_POST['lastName']) AND !empty($_POST['mail']) AND !empty($_POST['messageForm']) AND !empty($_POST['firstName']) AND !empty($_POST['phone'])) {
        $header="MIME-Version: 1.0\r\n";
        $header.='From:"nom_d\'expediteur"<votre@mail.com>'."\n";
        $header.='Content-Type:text/html; charset="uft-8"'."\n";
        $header.='Content-Transfer-Encoding: 8bit';
        $message='
        <html>
            <body>
                <div align="center">
            
                <u>Nom de l\'expéditeur :</u>'.$_POST['lastName'].'<br />
                <u>Prénom de l\'expéditeur :</u>'.$_POST['firstName'].'<br />
                <u>Téléphone de l\'expéditeur :</u>'.$_POST['phone'].'<br />
                <u>Mail de l\'expéditeur :</u>'.$_POST['mail'].'<br />
                <br />
                '.nl2br($_POST['messageForm']).'
            
                </div>
            </body>
        </html>
        ';
        mail("antoine.pironsio@gmail.com", "Sujet du message", $message, $header);
        $msg="Votre message a bien été envoyé !";
        $_POST['lastName']='';
        $_POST['firstName']='';
        $_POST['phone']='';
        $_POST['mail']='';
        $_POST['messageForm']='';
   } else {
      $msg="Tous les champs doivent être complétés !";
   }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Ceci est le portfolio de Antoine Piron, rassemblant ces compétences ainsi que certains projets sur lequel il a pu travailler">
    <link rel="stylesheet" href="assets/css/style.min.css">
    <link rel="shortcut icon" href="assets/img/ico.png" type="image/x-icon">
    <title>Antoine Piron</title>
</head>
<body>
    <div id="main" class="flexNormal jcfsaic">
        <header class="flexColumn jcsbaic">
            <nav>
                <ul class="flexColumn jcsbaic">
                    <li class="flexNormal jccaic">
                        <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" id="homeSvg">
                            <path d="M26 23.5307V13.8683C26.0001 13.1961 25.8612 12.5309 25.5919 11.9136C25.3226 11.2962 24.9285 10.7396 24.4337 10.278L15.2175 1.67496C14.7533 1.24151 14.1388 1 13.5 1C12.8612 1 12.2467 1.24151 11.7825 1.67496L2.56625 10.278C2.07153 10.7396 1.67744 11.2962 1.40812 11.9136C1.1388 12.5309 0.999928 13.1961 1 13.8683V23.5307C1 24.1856 1.26339 24.8137 1.73223 25.2768C2.20107 25.7398 2.83696 26 3.5 26H23.5C24.163 26 24.7989 25.7398 25.2678 25.2768C25.7366 24.8137 26 24.1856 26 23.5307Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M13.4852 23.4853V17.4853M13.4852 17.4853V11.4853M13.4852 17.4853H19.4852M13.4852 17.4853H7.48523" stroke="white" stroke-linecap="round" id="crossHome" class="crossTransition"/>
                        </svg>                        
                    </li>
                    <li class="flexNormal jccaic">
                        <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg" id="folderSvg">
                            <path d="M14 20V16M14 16V12M14 16H18M14 16H10" stroke="white" stroke-linecap="round" id="crossFolder" class="crossTransition"/>
                            <path d="M26 21.4444V8.66667C26 7.98889 25.7366 7.33888 25.2678 6.85962C24.7989 6.38036 24.163 6.11111 23.5 6.11111H15.045C14.5806 6.1111 14.1254 5.97887 13.7305 5.72926C13.3355 5.47965 13.0163 5.12251 12.8087 4.69789L11.6913 2.41322C11.4836 1.98841 11.1642 1.63114 10.769 1.38152C10.3738 1.13189 9.91833 0.999779 9.45375 1H3.5C2.83696 1 2.20107 1.26925 1.73223 1.74851C1.26339 2.22776 1 2.87778 1 3.55556V21.4444C1 22.1222 1.26339 22.7722 1.73223 23.2515C2.20107 23.7308 2.83696 24 3.5 24H23.5C24.163 24 24.7989 23.7308 25.2678 23.2515C25.7366 22.7722 26 22.1222 26 21.4444Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>  
                    </li>
                    <li class="flexNormal jccaic">
                        <img src="assets/img/envelop.svg" alt="Enveloppe menant à la page de contact" id="envelopSvg">
                    </li>
                    <li class="flexNormal jccaic">
                        <a href="https://www.linkedin.com/in/antoine-piron/" target="_blank">
                            <img src="assets/img/linkedin.svg" alt="Logo de Linkedin menant à la page de Antoine Piron" id="linkedinSVG">
                        </a>
                    </li>
                    <li class="flexNormal jccaic">
                        <a href="https://github.com/Whitenor" target="_blank">
                            <img src="assets/img/github.svg" alt="Logo de github menant au profil de Antoine Piron" id="githubSVG">
                        </a>
                    </li>
                </ul>
            </nav>
            <div>Copyrigth © 2022 Antoine Piron</div>
        </header>
        <section id="sideMenuHomeFolder" class="flexNormal">
            <div class="sideMenuHome hide borderNone">
                <ul>
                    <li id="aboutMenuButton"><h2>À Propos</h2></li>
                    <li id="formationsMenuButton"><h2>Formations</h2></li>
                    <li id="techAndComp"><h2>Technologies & Compétences</h2></li>
                </ul>
            </div>
            <div class="sideMenuFolder hide borderNone">
                <ul>
                    <li><h2 id="popCode">popCode</h2></li>
                    <li><h2 id="Creative">Creative</h2></li>
                    <li><h2 id="Capgemen">Capgemen</h2></li>
                    <li><h2 id="Technews">Technews</h2></li>
                    <li><h2 id="Allojyve">Allojyve</h2></li>
                </ul>
            </div>
        </section>
        <section id="content">
            <section class="about flexColumn jcsaaic active">
                <div class="rowTextAboutTitle flexColumn jcsaaic">
                    <h1>Antoine Piron</h1>
                    <h2>“Si il n'y a pas de difficultés, ce n’est pas drole”</h2>
                    <div class="textAbout flexColumn jcsaaic">
                        <p>Voila comment je peux expliquer mon envie d’apprendre. </p>
                        <p>Toujours à la recherche de nouvelles choses à apprendre , de nouvelles façons de travailler, cela m’as amené dans le développement Web avec une préférence pour le back end , bien que je sois aussi formé pour le front-end.</p>
                    </div>
                </div>
                <div class="rowButton flexNormal jcsaaic">
                    <div class=" flexNormal jccaic" id="technoButtonAbout">Technologies</div>
                    <div class=" flexNormal jccaic" id="projectButtonAbout">Projets</div>
                    <div class=" flexNormal jccaic" id="contactButtonAbout">Contacts</div>
                </div>
            </section>
            <section class="formations flexNormal jcsaaic none">
                <div class="card flexColumn jcsaaic">
                    <p>Titre Professionnel</p> 
                    <p>Développeur Web et Web Mobile</p>
                     <p>Access Code School</p>
                    </div>
                <div class="card flexColumn jcsaaic">
                    <p>Formation préqualifiante</p>
                    <p>Futur dév</p>
                    <p>OnlineFormaPro</p>
                </div>
                <div class="card flexColumn jcsaaic">
                    <p>Brevet de Technicien Supérieur</p>
                    <p>SIO option SISR</p>
                    <p>Lycée Fulbert, Chartres</p>
                </div>
                <div class="card flexColumn jcsaaic">
                    <p>Baccalauréat Professionnel</p>
                    <p>SEN option TR</p>
                    <p>Lycée Sully, Nogent Le Rotrou</p>
                </div>
            </section>
            <section class="techAndComp flexColumn jcsaaic none">
                <div class="technologiesBlock flexColumn jccaic">
                    <p>Technologies en cours d'apprentissage:</p>
                    <div class="techno flexNormal">
                        <div class="flexNormal">
                            <p>HTML</p>
                            <div class="barHTML">
                                <div class="fill"></div>
                            </div>
                        </div>
                        <div class="flexNormal">
                            <p>CSS</p>
                            <div class="barCSS">
                                <div class="fill"></div>
                            </div>
                        </div>
                        <div class="flexNormal">
                            <p>JavaScript</p>
                            <div class="barJS">
                                <div class="fill"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="technoFutur">
                    <p>Technologies en objectif d'apprentissage:</p>
                    <p> PHP, Laravel, base de Symfony, base de ReactJS, VueJs, base d'AngularJS</p>
                </div>
                <div class="otherComp flexNormal">
                    <div class="language">
                        <p>Langues parlées et lues:</p>
                        <ul>
                            <li>Français (Langue maternelle)</li>
                            <li>Anglais (écrit fluide , oral en amélioration)</li>
                        </ul>
    
                    </div>
                    <div class="compDivers">
                        <p>Compétences autres pouvant être utile:</p>
                        <ul>
                            <li>Base de configuration de serveur Linux</li>
                            <li>Organisation partiel des taches</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="project none flexNormal">
                <div class="card" id="popCode">
                    <img src="assets/img/popcode.jpg" alt="Screenshot de popCode" id="screenpopCode">
                    <p id="titlepopCode">popCode</p>
                </div>
                <div class="card" id="Creative">
                    <img src="assets/img/creative.jpg" alt="Screenshot de l'intégration Creative ACS" id="screenCreative">
                    <p id="titleCreative">Creative ACS</p>
                </div>
                <div class="card" id="Capgemen">
                    <img src="assets/img/capgemen.jpg" alt="Screenshot de l'intégration de Capgemen" id="screenCapgemen">
                    <p id="titleCapgemen">Capgemen</p>
                </div>
                <div class="card" id="Technews">
                    <img src="assets/img/technews.jpg" alt="Screenshot de Technews, un blog conçu sous Wordpress" id="screenTechnews">
                    <p id="titleTechnews">Technews</p>
                </div>
                <div class="card" id="Allojyve">
                    <img src="assets/img/allojyve.jpg" alt="Screenshot d'Allojyve, une intégration entièrement crée en javascript à partir d'une div unique et utilisant une API" id="screenAllojyve">
                    <p id="titleAllojyve">Allojyve</p>
                </div>
            </section>
            <section class="contact none flexColumn jcsaaic">
                <h1>Contacts</h1>
                <p>contactez moi via ce formulaire</p>
                <form class="form flexNormal jcsbaic" method="POST" action="">
                    <div class="leftCol flexColumn jcsbaic">
                        <input type="text" name="firstName" placeholder="Prénom" value="<?php if(isset($_POST['firstName'])) { echo $_POST['firstName']; } ?>" id="firstName">
                        <input type="text" name="lastName" placeholder="Nom" value="<?php if(isset($_POST['lastName'])) { echo $_POST['lastName']; } ?>" id="lastName">
                        <input type="tel" name="phone" placeholder="Téléphone" value="<?php if(isset($_POST['phone'])) { echo $_POST['phone']; } ?>" id="phone">
                        <input type="email" name="mail" placeholder="Email" value="<?php if(isset($_POST['mail'])) { echo $_POST['mail']; } ?>" id="mail">
                        <input type="submit" value="Envoyer" name="mailform">
                    </div>
                    <textarea name="messageForm" id="messageForm" placeholder="Votre message ..."><?php if(isset($_POST['messageForm'])) { echo $_POST['messageForm']; } ?></textarea>
                </form>
                <p id="validateForm"><?php if(isset($msg)) {echo $msg;}?></p>
                <p>Ou bien via ces moyens:</p>
                <div class="rowContact flexNormal">
                    <p>Tel: <a href="tel:+33767149691">07.67.14.96.91</a></p>
                    <p>Email: <a href="mailto:antoine.pironsio@gmail.com" target="_blank">antoine.pironsio@gmail.com</a></p>
                    <p>Linkedin: <a href="https://www.linkedin.com/in/antoine-piron/" target="_blank">Antoine Piron</a></p>
                </div>
            </section>
        </section>
        <section class="modal none">
            <div class="firstModalRow">
                <div class="leftBlock">
                    <div class="leftCol">
                        <h2 class="titleProjectModal"></h2>
                        <img src="" alt="">
                    </div>
                    <div class="rightCol">
                        <p class="durationProject"></p>
                        <p class="typeProject"></p>
                        <p class="technoProject"></p>
                    </div>
                </div>
                <div class="rightBlock">
                    <p class="closeModal">X</p>
                </div>
            </div>
            <div class="secondModalRow">
                <p class="descriptionProject"></p>
                <a href="#" class="linkProject" target="_blank"></a>
            </div>
        </section>
    </div>
    <script src="assets/js/app.js"></script>
    <script src="https://code.iconify.design/2/2.2.1/iconify.min.js"></script>
</body>
</html>