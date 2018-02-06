export default function () {
  const camera = this.$refs['camera']
  const constraints = {
    audio: true,
    video: true
  }
  const success = stream => {
    camera.src = window.URL.createObjectURL(stream)
    camera.onloadedmetadata = e => {
      camera.play()
    }
  }
  const err = error => {
    console.log('Failed to get User Media: ', error)
  }

  if ('getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia(constraints)
      .then(success)
      .catch(err)
  } else {
    console.warn('getUserMedia is not Supported')
  }
}
