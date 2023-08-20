console.log("welcme to Spotify");

// intialization of variables

let songIndex=0;
let audioElement=new Audio("Let-Me-Love-You(PagalWorld).mp3");
let audioElement2=new Audio("As-It-Was(PagalWorld).mp3");

let audioElement3=new Audio("Dandelions(PagalWorld).mp3");

// let audioElement=new Audio("C:\Users\Hp\song\song\Let-Me-Love-You(PagalWorld).mp3");
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songName=document.getElementById('songName');
let songItem=Array.from(document.getElementsByClassName('songItem'));
// let audioElement=new Audio();


let songs=[
    {songName:"Let me Love You", filePath:"C:\Users\Hp\Music\music\Let-Me-Love-You(PagalWorld).mp3", coverPath:""},
    // {songName:"Let me Love You", filePath:"Let-Me-Love-You(PagalWorld).mp3" , coverPath:""},

    {songName:"As it was", filePath:"C:\Users\Hp\Music\music\As-It-Was(PagalWorld).mp3" , coverPath:"C:\Users\Hp\Downloads\as it was.jpg"},

    {songName:"Dandelions", filePath:"C:\Users\Hp\Music\music\Dandelions(PagalWorld).mp3", coverPath:"C:\Users\Hp\Downloads\dandelions.jpg"},

    // {songName:"Until i found you", filePath:"C:\Users\Hp\song\song\Until-I-Found-You(PagalWorld).mp3", coverPath:"C:\Users\Hp\Downloads\until-song.jpg"},

    {songName:"Untill i found you", filePath:"", coverPath:""},

    {songName:"Baby", filePath:"", coverPath:""},

    {songName:"Alone", filePath:"", coverPath:""},
    {songName:"Faded", filePath:"", coverPath:""},
    
]

songItem.forEach((element,i) => {
    // console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByTagName("songName")[0].innerText=songs[i].songName;

});
// audioElement.play();
// audioElement2.play();

// audioElement3.play();


// handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        audioElement2.pause();
        audioElement3.pause();
        masterSongName.innerText="Let me love you";
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=100;
    }
    else{
        audioElement.pause();
        audioElement2.pause();
        audioElement3.pause();
        // masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

// listen to events
audioElement.addEventListener('timeupdate', ()=>{
   console.log('timeupdate');
   // update seekbar
   progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
   console.log(progress);
   myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

audioElement2.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress=parseInt((audioElement2.currentTime/audioElement2.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
 })
 
 myProgressBar.addEventListener('change', ()=>{
     audioElement2.currentTime=myProgressBar.value * audioElement2.duration/100;
 })

 audioElement3.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    // update seekbar
    progress=parseInt((audioElement3.currentTime/audioElement3.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
 })
 
 myProgressBar.addEventListener('change', ()=>{
     audioElement3.currentTime=myProgressBar.value * audioElement3.duration/100;
 })

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        if(audioElement.paused || audioElement.currentTime<=0){
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
        }
        else{
            audioElement2.pause();
            masterPlay.classList.remove('fa-play-circle');
            masterPlay.classList.add('fa-pause-circle');
        }
        
    })   
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
      console.log(e.target);
      makeAllPlays();


      songIndex=parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      masterSongName.innerText=songs[songIndex].songName;
      
      audioElement.src=`songs/${songIndex+1}.mp3`;
      audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity=100;

      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
      
    })
})

document.getElementById('next').addEventListener('click',()=>{
    // if(songIndex>=6){
    //     songIndex=0
    // }
    // else{
    // songIndex+=1;
    // }
    // masterSongName.innerText=songs[songIndex].songName;

    //    audioElement.src='songs/${songIndex+1}.mp3';
      audioElement.currentTime=0;
    //   audioElement2.play();
    //   gif.style.opacity=100;
    masterSongName.innerText="As it was";
    audioElement2.play();
    audioElement.pause();
    audioElement3.pause();
    masterPlay();
      gif.style.opacity=100;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    // if(songIndex<=0){
    //     songIndex=0
    // }
    // else{
    // songIndex-=1;
    // }
    // masterSongName.innerText=songs[songIndex].songName;
    //    audioElement.src='songs/ ${songIndex+1} .mp3';
    masterSongName.innerText="Dandelions";
      audioElement.currentTime=0;
      audioElement3.play();
      gif.style.opacity=100;
      audioElement2.pause();
      audioElement.pause();
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
})