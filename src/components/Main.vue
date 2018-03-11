<template>
  <div class="dad">
    <div class="son">
      <Camera :callback="callbackCamera">
      </Camera>
    </div>
    <div class="son">
      <Screen :callback="callbackScreen">
      </Screen>
    </div>
  </div>
</template>

<script>
import { data, methods, components, sockets, mounted } from './main'

export default {
  name: 'Main',
  data,
  methods,
  components,
  sockets,
  mounted
}
</script>

<style>
.dad {
  display: flex;
}

.son {
  border: 1px solid black;
  flex-basis: 400px;
  flex-grow: 1;
  max-width: 50%;
}
</style>
