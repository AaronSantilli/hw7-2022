var video;

video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.autoplay = false;
	video.loop = false;
	video.load();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%'
});

 document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play();
 });

 document.querySelector("#pause").addEventListener("click", function() {
 	console.log("Pause Video");
	video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
    video.playbackRate*=.90;
	console.log('Speed is', video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
    video.playbackRate*= 1.10;
	console.log('Speed is', video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead ten seconds");
    video.currentTime += 10
	console.log('Video Time is', video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    if (video.muted == false) {
	video.muted = true;
	console.log('Video is muted')
	}

	else { 
		video.muted = false
		console.log('video is not muted')
	}
});

document.querySelector("#slider").addEventListener("change", function() {
    video.volume = this.value / 100;
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
	console.log('Video Volume is', video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool');
	console.log('Video style is vintage');
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool');
	console.log('Video style is orginal');
});

