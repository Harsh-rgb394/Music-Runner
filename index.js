const button=document.getElementById("main-btn");
const audio=document.getElementById("audio-data");


const img=document.getElementById("img");


const artist=document.getElementById("artist_name");
const song=document.getElementById("song_name");
const prev=document.getElementById("prev");
const forw=document.getElementById("forw");

const input=document.querySelector('input[type="range"]')

const startime=document.getElementById("startime");
const endtime=document.getElementById("endtime");

const gif=document.getElementById("gif");

const songs=[
    {
        songname:"Mhane Godyan Lelyo",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/01Mhane Godyan Lelyo.mp3"
    },
    {
        songname:"Lahariyo",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/02Lahariyo.mp3"
    },
    {
        songname:"Dakiya",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/03Dakiya.mp3"
    },
    {
        songname:"Geega Tharo Paino",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/06Geega Tharo Paino.mp3"
    },
    {
        songname:"Holiya Mein Ude Re",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/06Holiya Mein Ude Re.mp3"
    },
    {
        songname:"Ud Ud Re",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/09Ud Ud Re.mp3"
    },
    {
        songname:"Run Jhun Baje Ghoogra",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/10Run Jhun Baje Ghoogra.mp3"
    },
    {
        songname:"Kangsiyo",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/01Kangsiyo.mp3"
    },
    {
        songname:"Dheere Chaal Ae Panhihari",
        songartist:"Veena Music",
        songimage:"./images/logo_img2.png",
        songmusic:"./songs/02Dheere Chaal Ae Panihari.mp3"
    }
]

// for audiio and progessbar 


let mouseslider=false;

audio.addEventListener("loadeddata",()=>{
    input.value=0;
    const totalduration=formatTime(audio.duration);
    endtime.innerText=totalduration;
    
})

audio.addEventListener("timeupdate",()=>{
    if(!mouseslider){
        input.value=audio.currentTime/audio.duration *100;
    }
    const intialtime=formatTime(audio.currentTime);
    startime.innerText=intialtime;
})



input.addEventListener("change",()=>{
    const progress=input.value/100;
    audio.currentTime=(audio.duration||0)*progress;

    const updatetime=audio.currentTime;

    updatetime=formatTime(updatetime);

    startime.innerText=updatetime;

    
})

input.addEventListener("mousedown",()=>{
    mouseslider=true;
})

input.addEventListener("mouseup",()=>{
    mouseslider=false;
})


const formatTime=(seconds)=>{
    const minutes=Math.floor(seconds/60);
    const secondstime=Math.floor(seconds%60);
    return `${minutes}:${secondstime < 10 ? '0' : ''}${secondstime}`;
}




let isplaying=false;

const forplay=()=>{
    isplaying=true;
    audio.play();
    button.classList.replace("fa-play","fa-pause");
    gif.style.opacity=1;
    img.classList.add("anime")
}

const forpuase=()=>{
    isplaying=false;
    audio.pause();
    button.classList.replace("fa-pause","fa-play");
    gif.style.opacity=0;
    img.classList.remove("anime")
}


button.addEventListener("click",()=>{
    if(isplaying){
        forpuase();
    }
    else{
        forplay();
    }
})


const loadingsongs=(songs)=>{
    artist.innerText=songs.songartist;
    song.innerText=songs.songname;
    audio.src=songs.songmusic,
    img.src=songs.songimage
}

// loadingsongs(songs[1]);
let songindex=0;

const nextsong=()=>{
    songindex=(songindex+1)%songs.length;
    loadingsongs(songs[songindex]);
    forplay();

}

const prevsong=()=>{
    songindex=(songindex-1+songs.length)%songs.length;
    loadingsongs(songs[songindex]);
    forplay();

}

forw.addEventListener("click",nextsong);
prev.addEventListener("click",prevsong);





// audio.addEventListener("ended",()=>{
     
//     button.classList.replace("fa-pause","fa-play");
//     input.value=0;

//     startime.innerText="0.00";

//     // if(repeatnode==="one"){
//     //     audio.currentTime=0;
//     //     audio.play();

//     // }
//     // else if(repeatnode==="none"){
//     //     isplaying=false;
//     //     updateiconcolour();

//     // }
// })

// for repeating function 
let repeatnode=0;
const repeat_button=document.getElementById("icon-btn");

repeat_button.addEventListener("click",()=>{

    switch (repeatnode) {
        case 0:
            repeat_button.style.color="blue";
            repeatnode=1;
            break;
        case 1:
            repeat_button.style.color="black";
            repeatnode=0;
            break;
        // case 2:
        //     repeat_button.style.color="black";
        //     repeatnode=0;
        //     break;
        default:
            break;
    }
})


audio.addEventListener("ended",()=>{

    switch (repeatnode) {
        case 0:
            button.classList.replace("fa-pause","fa-play");
            audio.currentTime=0;
            input.value=0;
            gif.style.opacity=0;
            img.classList.remove("anime")
            
            break;
        case 1:
            audio.currentTime=0;
            input.value=0;
            forplay();
            
            
            break;
       
        default:
            break;
    }
})






let flag=false;

const like_button=document.getElementById("like-btn");



like_button.addEventListener("click",()=>{
    
  
    flag=!flag;
    updatelikeicon();
})

const updatelikeicon=()=>{
    like_button.style.color=flag?"red":"black";
}







