const btnOpenVideo = document.querySelectorAll('.recipes_video-content')
const islandsPopup = document.getElementById('popup')

function poPup(){
    islandsPopup.classList.add('show-popup')
}
btnOpenVideo.forEach(b => b.addEventListener('click', poPup))

const btnCloseVideo = document.getElementById('popup-close')

btnCloseVideo.addEventListener('click', ()=> {
    islandsPopup.classList.remove('show-popup')
})