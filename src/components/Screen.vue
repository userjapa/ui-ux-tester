<template>
  <div class="screen">
    <canvas ref="screen"></canvas>
  </div>
</template>

<script>
import { mounted } from './screen'

export default {
  name: 'screen',
  mounted
}
</script>

<style>
.screen canvas {
  height: 100%;
  width: 100%;
}
</style>
