<template>
  <div class="home">
    <h1>This is an Home page</h1>
  </div>
</template>

<script>
export default {
  mounted(){
    this.getApi()
  },
  methods: {
    getApi(){
      axios('http://localhost:7777/test',{
        method: 'post',
        headers:{'Content-Type': 'application/json'},
        withCredentials: true
      }).then((res) => {
        console.log(res)
      })
    }
  }
}
</script>
