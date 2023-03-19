
function startApp(containerVideo, contentVideoPlayer) {
  const bgFull = document.createElement('div')
  bgFull.classList.add('bg-full')
  let isFullScreen = false
  
  const btn = document.createElement('div')
  btn.classList.add('btn-fullscreen')
  btn.innerText = 'FULL'
  containerVideo.appendChild(btn)
  
  btn.onclick = function() {
    if(!isFullScreen) {
      isFullScreen = true
      bgFull.classList.add('bg-full')
      document.body.appendChild(bgFull)
      bgFull.appendChild(containerVideo)
      const videoStream = document.querySelector('.vjs-tech')
      videoStream.style.width = '100%'
      videoStream.style.height = '100%'
    } else {
        isFullScreen = false
        contentVideoPlayer.appendChild(containerVideo)
        bgFull.remove()
    }
  }

  document.addEventListener('keyup', event => {
    if(event.key === 'Escape' && isFullScreen){  
      isFullScreen = false
      contentVideoPlayer.appendChild(containerVideo)
      bgFull.remove()
    }
  })

}
  
const interval = setInterval(() => { 
  const containerVideo = document.querySelector('.video-player--video-wrapper--1L212')
  
  if(containerVideo) {
    const contentVideoPlayer = containerVideo.parentElement
    clearInterval(interval)
    startApp(containerVideo, contentVideoPlayer)
  }
}, 50)
 