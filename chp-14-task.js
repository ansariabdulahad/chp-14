let btn = document.querySelector('button');
let input = document.querySelector('input');
let video = document.querySelector('video');
let img = document.querySelector('img');
let result = document.querySelector('.result');

btn.onclick = () => {
    let inputValue = input.value.toLowerCase();
    if (inputValue === 'a') {
        video.src = "./Assets/video/Apple.mp4";
        img.src = "./Assets/images/apple.jpg";
        result.innerHTML = "A is for APPLE";
    }
    else if (inputValue === 'b') {
        video.src = "./Assets/video/baby.mp4";
        img.src = "./Assets/images/baby.jpg";
        result.innerHTML = "B is for BABY";
    }
    else if (inputValue === 'c') {
        video.src = "./Assets/video/candy.mp4";
        img.src = "./Assets/images/candy.jpg";
        result.innerHTML = "C is for CANDY";
    }
    else if (inputValue === 'd') {
        video.src = "./Assets/video/diamond.mp4";
        img.src = "./Assets/images/diamond.jpg";
        result.innerHTML = "D is for DIAMOND";
    }
    else if (inputValue === 'e') {
        video.src = "./Assets/video/elephant.mp4";
        img.src = "./Assets/images/elephant.jpg";
        result.innerHTML = "E is for ELEPHANT";
    }
    else if (inputValue === 'f') {
        video.src = "./Assets/video/fairy.mp4";
        img.src = "./Assets/images/fairy.jpg";
        result.innerHTML = "F is for FAIRY";
    }
    else if (inputValue === 'g') {
        video.src = "./Assets/video/glasses.mp4";
        img.src = "./Assets/images/glasses.jpg";
        result.innerHTML = "G is for GLASSES";
    }
    else if (inputValue === 'h') {
        video.src = "./Assets/video/hen.mp4";
        img.src = "./Assets/images/hen.jpg";
        result.innerHTML = "h is for HEN";
    }
    else if (inputValue === 'i') {
        video.src = "./Assets/video/igloo.mp4";
        img.src = "./Assets/images/igloo.jpg";
        result.innerHTML = "I is for IGLOO";
    }
    else if (inputValue === 'j') {
        video.src = "./Assets/video/jelly.mp4";
        img.src = "./Assets/images/jelly.jpg";
        result.innerHTML = "J is for JELLY";
    }
    else if (inputValue === 'k') {
        video.src = "./Assets/video/keyboard.mp4";
        img.src = "./Assets/images/keyboard.jpg";
        result.innerHTML = "K is for KEYBOARD";
    }
    else if (inputValue === 'l') {
        video.src = "./Assets/video/ladybug.mp4";
        img.src = "./Assets/images/ladybug.jpg";
        result.innerHTML = "L is for LADYBUG";
    }
    else if (inputValue === 'm') {
        video.src = "./Assets/video/monkey.mp4";
        img.src = "./Assets/images/monkey.jpg";
        result.innerHTML = "M is for MONKEY";
    }
    else if (inputValue === 'n') {
        video.src = "./Assets/video/needle.mp4";
        img.src = "./Assets/images/needle.jpg";
        result.innerHTML = "N is for NEEDLE";
    }
    else if (inputValue === 'o') {
        video.src = "./Assets/video/orange.mp4";
        img.src = "./Assets/images/orange.jpg";
        result.innerHTML = "O is for ORANGE";
    }
    else if (inputValue === 'p') {
        video.src = "./Assets/video/pony.mp4";
        img.src = "./Assets/images/pony.jpg";
        result.innerHTML = "P is for PONY";
    }
    else if (inputValue === 'q') {
        video.src = "./Assets/video/queen.mp4";
        img.src = "./Assets/images/queen.jpg";
        result.innerHTML = "Q is for QUEEN";
    }
    else if (inputValue === 'r') {
        video.src = "./Assets/video/rainbow.mp4";
        img.src = "./Assets/images/rainbow.jpg";
        result.innerHTML = "R is for RAINBOW";
    }
    else if (inputValue === 's') {
        video.src = "./Assets/video/spider.mp4";
        img.src = "./Assets/images/spider.jpg";
        result.innerHTML = "S is for SPIDER";
    }
    else if (inputValue === 't') {
        video.src = "./Assets/video/tiger.mp4";
        img.src = "./Assets/images/tiger.jpg";
        result.innerHTML = "T is for TIGER";
    }
    else if (inputValue === 'u') {
        video.src = "./Assets/video/umbrella.mp4";
        img.src = "./Assets/images/umbrella.jpg";
        result.innerHTML = "U is for UMBRELLA";
    }
    else if (inputValue === 'v') {
        video.src = "./Assets/video/violen.mp4";
        img.src = "./Assets/images/violen.jpg";
        result.innerHTML = "V is for VIOLEN";
    }
    else if (inputValue === 'w') {
        video.src = "./Assets/video/wale.mp4";
        img.src = "./Assets/images/wale.jpg";
        result.innerHTML = "W is for WALE";
    }
    else if (inputValue === 'x') {
        video.src = "./Assets/video/xylophone.mp4";
        img.src = "./Assets/images/xylophone.jpg";
        result.innerHTML = "X is for XYLOPHONE";
    }
    else if (inputValue === 'y') {
        video.src = "./Assets/video/yoyo.mp4";
        img.src = "./Assets/images/yoyo.jpg";
        result.innerHTML = "Y is for YOYO";
    }
    else if (inputValue === 'z') {
        video.src = "./Assets/video/zebra.mp4";
        img.src = "./Assets/images/zebra.jpg";
        result.innerHTML = "Z is for ZEBRA";
    }
    else {
        video.src = "./Assets/video/else-alphabet.mp4";
        img.src = "./Assets/images/learn alphabet.jpg";
        result.innerHTML = "Oops you have choose the wrong Alphabet !"
    }
}