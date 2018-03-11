export default function () {
  const camera = this.$refs['camera']
  const constraints = {
    audio: true,
    video: true
  }
  const success = stream => {
    if (!camera.mozSrcObject) {
      camera.srcObject = stream
    } else {
      camera.mozSrcObject = stream
    }
    if (this.callback) {
      this.callback(stream)
    }
    camera.muted = true
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
