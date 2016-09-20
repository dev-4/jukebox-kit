function loadSong1(){
    var sourceVid=document.getElementById('bg');
	sourceVid.src='video/data.mp4';

    var player=document.getElementById('player');
    
    var sourceOgg=document.getElementById('player');
    sourceOgg.src='sound/ogg/killers.ogg';
    
    var sourceMp3=document.getElementById('player');
    sourceMp3.src='sound/mp3/killers.mp3';
    
    player.load(); //just start buffering (preload)
    player.play(); //start playing
}
function loadSong2(){
    var sourceVid=document.getElementById('bg');
	sourceVid.src='video/data.mp4';

    var player=document.getElementById('player');
    
    var sourceOgg=document.getElementById('player');
    sourceOgg.src='sound/ogg/hitman.ogg';
    
    var sourceMp3=document.getElementById('player');
    sourceMp3.src='sound/mp3/hitman.mp3';
    
    player.load();
    player.play();
}
function loadSong3(){
    var sourceVid=document.getElementById('bg');
	sourceVid.src='video/data.mp4';

    var player=document.getElementById('player');
    
    var sourceOgg=document.getElementById('player');
    sourceOgg.src='sound/ogg/corruption.ogg';
    
    var sourceMp3=document.getElementById('player');
    sourceMp3.src='sound/mp3/corruption.mp3';
    
    player.load();
    player.play();
}
function easterEgg(){
    var sourceVid=document.getElementById('bg');
    sourceVid.src='video/snf.mp4';

    var player=document.getElementById('player');

    var sourceOgg=document.getElementById('player');
    sourceOgg.src='sound/ogg/travolta.ogg';

    var sourceMp3=document.getElementById('player');
    sourceMp3.src='sound/mp3/travolta.mp3';

    player.load();
    player.play();
}