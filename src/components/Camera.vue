<template>
  <div class="camera">
    <video ref="camera" autoplay>
    </video>
  </div>
</template>

<script>
import { props, mounted } from './camera'

export default {
  name: 'Camera',
  props,
  mounted
}
</script>

<style>
.camera video {
  height: 100%;
  width: 100%;
}
</style>
