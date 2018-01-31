<template>
  <div class="camera">
    <video ref="camera">
    </video>
  </div>
</template>

<script>
import { mounted } from './camera'

export default {
  name: 'camera',
  mounted
}
</script>

<style>
.camera video {
  height: 100%;
  width: 100%;
}
</style>
