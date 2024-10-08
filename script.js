function playMedia(box, startTime) {
    let video = box.querySelector('.background-video');
    let audio = box.querySelector('.background-audio');
    console.log('Playing media from:', startTime); // Debugging log
    video.style.display = 'block';
    audio.style.display = 'block';
    video.currentTime = startTime; // Set the starting time for video
    audio.currentTime = startTime; // Set the starting time for audio
    video.play();
    audio.play();
}

function pauseMedia(box) {
    let video = box.querySelector('.background-video');
    let audio = box.querySelector('.background-audio');
    console.log('Pausing media'); // Debugging log
    video.style.display = 'none';
    audio.style.display = 'none';
    video.pause();
    audio.pause();
}
