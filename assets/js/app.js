var sideMenuFolder = document.querySelector('.sideMenuFolder');
var sideMenuHome = document.querySelector('.sideMenuHome');
var crossHome = document.querySelector('#crossHome');
var crossFolder = document.querySelector('#crossFolder');
var borderChecking = 0;
var openChecking = 0;

function checkBorder(target){
    for (let i = 0; i < target.classList.length; i++) {
        if(target.classList[i] === 'borderNone'){
            borderChecking = 1
        }
    }
    if(borderChecking === 0){
        setTimeout(() => {
            target.classList.toggle('borderNone');
        }, 500);
    }
    else{
        target.classList.toggle('borderNone');
        borderChecking = 0;
    }
}
function checkOtherOpen(firstTarget, crossTarget ){
    for (let i = 0; i < firstTarget.classList.length; i++) {
        if(firstTarget.classList[i] === 'open'){
            openChecking = 1;
        }
    }
    console.log(openChecking);
    if (openChecking === 1) {
        firstTarget.classList.toggle('open');
        firstTarget.classList.toggle('hide');
        crossTarget.classList.toggle('crossRotate');
        openChecking = 0;
        checkBorder(firstTarget);
    }
}
document.querySelector('#homeSvg').addEventListener('click', function() {
    crossHome.classList.toggle('crossRotate');
    sideMenuHome.classList.toggle('hide');
    sideMenuHome.classList.toggle('open');
    checkOtherOpen(sideMenuFolder, crossFolder);
    checkBorder(sideMenuHome);
});
document.querySelector('#folderSvg').addEventListener('click', function() {
    crossFolder.classList.toggle('crossRotate');
    sideMenuFolder.classList.toggle('hide');
    sideMenuFolder.classList.toggle('open');
    checkOtherOpen(sideMenuHome, crossHome);
    checkBorder(sideMenuFolder);
});
