<template>
  <div class="hello common-content">
    <div class="common-header">报表发送</div>
    <div class="common-main">
      <h1 @click="testclick">{{ msg +this.$store.state.app.count }}</h1>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: `测度`
    }
  },
  methods:{
      testclick:function(e){
        console.log(this,e)
        this.$store.dispatch("ToggleSideBar",5)
        //this.$router.push({path: '/',query:{id:5}});
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
