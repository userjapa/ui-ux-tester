<template>
  <div class="dad">
    <div class="son">
      <Camera>
      </Camera>
    </div>
    <div class="son">
      <Screen>
      </Screen>
    </div>
  </div>
</template>

<script>
import { components } from './main'

export default {
  name: 'main',
  components
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
}
</style>
