import html2canvas from 'html2canvas'

export default function () {
  const screen = this.$refs['screen']
  const context = screen.getContext('2d')
  let draw = new Image()

  draw.onload = () => {
    context.drawImage(draw, 0, 0, screen.parentNode.offsetWidth, screen.parentNode.offsetWidth)
  }

  function drawImage () {
    let source = null
    html2canvas(document.body)
      .then(canvas => {
        source = canvas.toDataURL('image/png')
        console.log(source)
        draw.src = source
      })
  }
  drawImage()

  setInterval(() => {
    drawImage()
  }, 5000)
}
