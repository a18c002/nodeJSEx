<template>
  <div class="navbar">
      <ul>
          <li v-for="(list,list_ind) in ListData" :key="list_ind" :style="`width: calc(100% / ${ListData.length})`" @click="gotoPage(list.path)">
            {{ list.name }}
          </li>
      </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      ListData: [
        {name: '標籤1',path: '/',disable: false},
        {name: '標籤2',path: '/about',disable: false},
        {name: '標籤3',path: '/page',disable: false}
      ]
    }
  },
  mounted(){

  },
  methods:{
    gotoPage(path){
      this.$router.push({path: path})
    }
  }
}
</script>

<style lang="sass">
.navbar
  height: $navbarHeight 
  padding: 17.5px 5px
  box-shadow: 2px 0px 5px 1px #D4D4D4
  ul
    display: flex
    li
      text-align: center
      vertical-align: middle
      cursor: pointer
      border: solid 1px #ddd
</style>

