        function videoPlay() {
            var video = document.getElementById("video");
            video.volume = 0.2, 0;
            video.play()
        }
    
    /*document.getElementById('video').play();
    document.getElementById('video').muted=false;
    document.getElementById('video').volume=0.1;*/
    
    function toggleMute() {
    var myAudio = document.getElementById('video');
    myAudio.muted = !myAudio.muted;
    }

    var unmute = document.getElementById('unmute');
    console.log(unmute);
    if(unmute){
        unmute.addEventListener('click', function(unmute){
            unmute.target.classList.toggle('mute');
    }) 
    }