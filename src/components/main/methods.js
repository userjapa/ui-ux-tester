const SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription

export default {
  callbackCamera: function (stream) {
    this.$data.pc.camera.addStream(stream)
    this.$socket.emit('cameraReady')
  },
  callbackScreen: function (stream) {
    this.$data.pc.screen.addStream(stream)
    this.$socket.emit('screenReady')
  },
  createOfferError: function (error) {
    console.warn('Failed to Create Offer: ', error)
  },
  setLocalDescriptionError: function (error) {
    console.warn('Failed to Set Local Description: ', error)
  },
  setRemoteDescriptionError: function (error) {
    console.warn('Failed to Set Remote Description: ', error)
  },
  createOfferCamera: function (id) {
    this.$data.pc.camera.createOffer(
      offer => {
        this.$data.pc.camera.setLocalDescription(
          new SessionDescription(offer),
          () => {
            this.$socket.emit('clientOfferCamera', {
              offer: offer,
              to: id
            })
          },
          this.setLocalDescriptionError
        )
      },
      this.createOfferError
    )
  },
  createOfferScreen: function (id) {
    this.$data.pc.screen.createOffer(
      offer => {
        this.$data.pc.screen.setLocalDescription(
          new SessionDescription(offer),
          () => {
            this.$socket.emit('clientOfferScreen', {
              offer: offer,
              to: id
            })
          },
          this.setLocalDescriptionError
        )
      },
      this.createOfferError
    )
  }
}
