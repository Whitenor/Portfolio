document.querySelector('#homeSvg').addEventListener('click', function() {
    document.querySelector('#crossHome').classList.toggle('crossRotate');
    document.querySelector('.sideMenuHome').classList.toggle('hide');
});
document.querySelector('#folderSvg').addEventListener('click', function() {
    document.querySelector('#crossFolder').classList.toggle('crossRotate');
});
