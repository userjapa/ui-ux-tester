export default function () {
  const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection

  // CREATE CONNECTION FOR CAMERA
  let pcCamera = new PeerConnection({ iceServers: [{ url: 'stun:stun.services.mozilla.com' }] })

  // CREATE CONNECTION FOR SCREEN
  let pcScreen = new PeerConnection({ iceServers: [{ url: 'stun:stun.services.mozilla.com' }] })

  // Add Stream for Camera
  pcCamera.ontrack = function (obj) {
    console.log('Got Answer Camera!')
    let camera = document.getElementById('camera-watch')
    if (!camera.mozSrcObject) {
      camera.srcObject = obj.streams[0]
    } else {
      camera.mozSrcObject = obj.streams[0]
    }
  }

  // Add Stream for Screen
  pcScreen.ontrack = function (obj) {
    console.log('Got Answer Screen!')
    let screen = document.getElementById('screen-watch')
    if (!screen.mozSrcObject) {
      screen.srcObject = obj.streams[0]
    } else {
      screen.mozSrcObject = obj.streams[0]
    }
  }

  pcCamera.onsignalingchange = e => {
    console.log('Answerer Camera signal changed: ', pcCamera.signalingstate)
  }

  pcScreen.onsignalingchange = e => {
    console.log('Answerer Screen signal changed: ', pcScreen.signalingstate)
  }

  this.$data.pc.camera = pcCamera
  this.$data.pc.screen = pcScreen
}
