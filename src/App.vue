<template>
  <div id="app">
    <NotHere v-if="!isProjectPage"/>
    <Connect v-else-if="!isConnect"/>
    <Dash v-else/>
  </div>
</template>

<script>
import Connect from '../src/components/Connect'
import NotHere from '../src/components/NotHere'
import Dash from '../src/components/Dash'

export default {
  data () {
    return {
      isProjectPage: true,
      isConnect: false
    }
  },
  components: { Connect, NotHere, Dash }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  padding: 1rem;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: #36393F;
  color: white;
}
</style>
