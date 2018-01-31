export default function () {
  const camera = this.$refs['camera']

  if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    navigator.mediaDevices.getUserMedia({
      video: true
    })
      .then(stram => {
        camera.src = window.URL.createObjectURL(stram)
        camera.play()
      })
  }
}
