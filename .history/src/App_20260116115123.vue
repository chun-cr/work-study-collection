<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created(){
    console.log(this.$options.data)
  },
  props: {
    initialValue: {
      type: Number,
      default: 0
    }
  },
  data(){
    console.log('data执行时的this:',this)
    console.log(this === window)
    console.log(this.$options.name)
    console.log(typeof this.$emit)

    console.log(this.initialValue)
    return {
      count: this.initialValue || 0,
      timestamp: this.getCurrentTime()
    }
  },
  methods:{
    getCurrentTime(){
      return Date.now()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
