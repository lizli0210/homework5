// Add js here.
let video = document.querySelector('.video');
var videoVolme = document.getElementById('volume');
var videoSlider = document.getElementById('slider')
video.autoplay = false;
video,loop = false;
video.load();
videoVolme.innerText=videoSlider.value;



function playVideo(){
    video.play();
}
let play_button=document.getElementById('play');
play_button.addEventListener('click',playVideo);

function pauseVideo(){
    video.pause();
}
let pause_button=document.getElementById('pause')
pause_button.addEventListener('click',pauseVideo);

const normal_rate=1.0;
const slow_rate=0.5;
const fast_rate=2.0;

function videoSlow(){
    if(video.playbackRate==fast_rate){
        video.playbackRate=normal_rate;
    }
    else if (video.playbackRate==normal_rate){
        video.playbackRate=slow_rate;
    }
    else if (video.playbackRate==slow_rate){
        alert("Video is at slowest speed!");
    }
}
let slow_down_button=document.getElementById('slower');
slow_down_button.addEventListener("click",videoSlow);

function videoFast(){
    if(video.playbackRate==fast_rate){
        alert("Video is at fastest speed!");
    }
    else if (video.playbackRate==normal_rate){
        video.playbackRate=fast_rate;
    }
    else if (video.playbackRate==slow_rate){
        video.playbackRate=normal_rate;
    }
}

let fast_button=document.getElementById('faster');
fast_button.addEventListener("click",videoFast);

function skipAhead(){
    if(video.currentTime + 15 >= video.duration ){
        video.load();
    }
    else {
        video.currentTime += 15;}
}
let skip_button=document.getElementById('skip');
skip_button.addEventListener('click',skipAhead)

//
function videoMute(){
    if(video.muted==true){
        video.muted=false;
        videoSlider.value=100;
        videoVolme.innerText=videoSlider.value;
        document.getElementById('mute').innerText='Mute';
        console.log(volumeslider.value);
    }
    else if (video.muted==false) {
        video.muted=true;
        document.getElementById('mute').innerHTML='UnMute';
        videoSlider.value=0;
        videoVolme.innerText=videoSlider.value;
    }
}

let mute_video=document.getElementById('mute');
mute_video.addEventListener('click',videoMute);

videoSlider.addEventListener('change', function(){
    videoVolme.innerText = videoSlider.value;
});