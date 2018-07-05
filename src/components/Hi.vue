<template>
  <div class="hello">
{{this.$route.params.name}}
  </div>
</template>

<script>
export default {
  name: 'Hi',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  beforeCreate(){
        console.log('Hi beforeCreate')
      },
      created(){
        console.log('Hi created')
      },
      beforeMount(){
        console.log('Hi beforeMount')
      },
      mounted(){
        console.log('Hi mounted')
      },
      beforeUpdate(){
        console.log('Hi beforeUpdate')
      },
      updated(){
        console.log('Hi updated')
      },
      beforeDestroy(){
        console.log('Hi beforeDestroy')
      },
      destroyed(){
        console.log('Hi destroyed')
      }
}
</script>

