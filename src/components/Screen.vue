<template>
  <div class="screen">
    <video ref="screen">
    </video>
  </div>
</template>

<script>
import { mounted } from './screen'

export default {
  name: 'capture-screen',
  mounted
}
</script>

<style>
.screen canvas {
  height: 100%;
  width: 100%;
}
</style>
