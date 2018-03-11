<template>
  <div class="screen">
    <video ref="screen" autoplay>
    </video>
  </div>
</template>

<script>
import { props, mounted } from './screen'

export default {
  name: 'Screen',
  props,
  mounted
}
</script>

<style>
.screen video {
  height: 100%;
  width: 100%;
}
</style>
