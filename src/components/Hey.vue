<template>
  <div class="hello">
{{this.$route.params.name}}
  </div>
</template>

<script>
export default {
  name: 'Hey',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  beforeCreate(){
        console.log('Hey beforeCreate')
      },
      created(){
        console.log('Hey created')
      },
      beforeMount(){
        console.log('Hey beforeMount')
      },
      mounted(){
        console.log('Hey mounted')
      },
      beforeUpdate(){
        console.log('Hey beforeUpdate')
      },
      updated(){
        console.log('Hey updated')
      },
      beforeDestroy(){
        console.log('Hey beforeDestroy')
      },
      destroyed(){
        console.log('Hey destroyed')
      }
}
</script>

