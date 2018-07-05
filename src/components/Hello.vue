<template>
  <div class="hello">
{{this.$route.params.name}}
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  beforeCreate(){
        console.log('Hello beforeCreate')
      },
      created(){
        console.log('Hello created')
      },
      beforeMount(){
        console.log('Hello beforeMount')
      },
      mounted(){
        console.log('Hello mounted')
      },
      beforeUpdate(){
        console.log('Hello beforeUpdate')
      },
      updated(){
        console.log('Hello updated')
      },
      beforeDestroy(){
        console.log('Hello beforeDestroy')
      },
      destroyed(){
        console.log('Hello destroyed')
      }
}
</script>

