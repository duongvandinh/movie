let slide1 = document.getElementById('1')
let slide2 = document.getElementById('2')
let slide3 = document.getElementById('3')

let dot1 = document.getElementById('dot1')
let dot2 = document.getElementById('dot2')
let dot3 = document.getElementById('dot3')


dot1.onclick = function(){
    slide1.classList.add('active')
    slide2.classList.remove('active')
    slide3.classList.remove('active')
    dot1.classList.add('dot-active')
    dot2.classList.remove('dot-active')
    dot3.classList.remove('dot-active')
}
dot2.onclick = function(){
    slide2.classList.add('active')
    slide3.classList.remove('active')
    slide1.classList.remove('active')
    dot1.classList.remove('dot-active')
    dot2.classList.add('dot-active')
    dot3.classList.remove('dot-active')
}
dot3.onclick = function(){
    slide3.classList.add('active')
    slide2.classList.remove('active')
    slide1.classList.remove('active')
    dot1.classList.remove('dot-active')
    dot2.classList.remove('dot-active')
    dot3.classList.add('dot-active')
}
let menu = document.querySelector('.toggle')
let push = document.querySelector('.push-menu')
    menu.onclick = function(){
        menu.classList.toggle('active')
        push.classList.toggle('push_menu-open')
    }