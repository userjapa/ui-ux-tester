<template>
  <div class="container">
    <div class="watch">
      <video id="camera-watch" autoplay></video>
    </div>
    <div class="watch screen">
      <video id="screen-watch" autoplay></video>
    </div>
  </div>
</template>

<script>
import { data, methods, sockets, mounted } from './watch'

export default {
  name: 'Watch',
  data,
  methods,
  sockets,
  mounted
}
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  width: 900px;
  max-width: 90%;
  margin: 0 auto;
}

.watch {
  border: 2px solid #ddd;
  margin-bottom: 50px;
}

.screen {
  border-color: aliceblue;
}
</style>
