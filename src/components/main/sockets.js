const SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription

export default {
  connect: function () {
    console.log(`User ${this.$socket.id} Connected to Socket - Client`)
  },
  testServer: function (val) {
    console.log(val, ' -> From Server')
  },
  clientAnswerCamera: function (data) {
    this.$data.pc.camera.setRemoteDescription(
      new SessionDescription(data.stream),
      () => {
        if (!this.answers.camera) {
          this.createOfferCamera(data.socket)
          this.answers.camera = true
        }
      },
      this.setRemoteDescriptionError
    )
  },
  clientAnswerScreen: function (data) {
    this.$data.pc.screen.setRemoteDescription(
      new SessionDescription(data.stream),
      () => {
        if (!this.answers.screen) {
          this.createOfferScreen(data.socket)
          this.answers.screen = true
        }
      },
      this.setRemoteDescriptionError
    )
  },
  watcherCall: function (data) {
    this.createOfferCamera(data.socket)
    this.createOfferScreen(data.socket)
  }
}
