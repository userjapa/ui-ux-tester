const SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription

export default {
  connect: function () {
    console.log(`User ${this.$socket.id} Connected to Socket - Watch`)
  },
  clientReady: function (id) {
    // const call = window.confirm(`Call User ${id}?`)
    // if (call) {
    setTimeout(() => {
      this.$socket.emit('callClient', {
        to: id
      })
    }, 2500)
    // }
  },
  watcherOfferCamera: function (data) {
    this.$data.pc.camera.setRemoteDescription(
      new SessionDescription(data.offer),
      () => {
        this.$data.pc.camera.createAnswer(
          answer => {
            this.$data.pc.camera.setLocalDescription(
              new SessionDescription(answer),
              () => {
                this.$socket.emit('watcherAnswerCamera', {
                  answer: answer,
                  to: data.socket
                })
              },
              this.setLocalDescriptionError
            )
          },
          this.createAnswerError
        )
      },
      this.setRemoteDescriptionError
    )
  },
  watcherOfferScreen: function (data) {
    this.$data.pc.screen.setRemoteDescription(
      new SessionDescription(data.offer),
      () => {
        this.$data.pc.screen.createAnswer(
          answer => {
            this.$data.pc.screen.setLocalDescription(
              new SessionDescription(answer),
              () => {
                this.$socket.emit('watcherAnswerScreen', {
                  answer: answer,
                  to: data.socket
                })
              },
              this.setLocalDescriptionError
            )
          },
          this.createAnswerError
        )
      },
      this.setRemoteDescriptionError
    )
  }
}
