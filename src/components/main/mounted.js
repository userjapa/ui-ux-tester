export default function () {
  const PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection
  this.$socket.emit('testClient', 'Fala memo')

  let pcCamera = new PeerConnection({iceServers: [{urls: 'stun:stun.services.mozilla.com'}]})
  let pcScreen = new PeerConnection({iceServers: [{urls: 'stun:stun.services.mozilla.com'}]})

  pcCamera.onsignalingstatechange = e => {
    console.log('Offerer Camera changed state: ', pcCamera.signalingState)
  }

  pcScreen.onsignalingstatechange = e => {
    console.log('Offerer Camera changed state: ', pcScreen.signalingState)
  }

  this.$data.pc.camera = new PeerConnection({iceServers: [{urls: 'stun:stun.services.mozilla.com'}]})
  this.$data.pc.screen = new PeerConnection({iceServers: [{urls: 'stun:stun.services.mozilla.com'}]})
}
