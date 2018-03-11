export default {
  createAnswerError: function (error) {
    console.warn('Failed to Create Answer: ', error)
  },
  setLocalDescriptionError: function (error) {
    console.warn('Failed to Set Local Description: ', error)
  },
  setRemoteDescriptionError: function (error) {
    console.warn('Failed to Set Remote Description: ', error)
  }
}
