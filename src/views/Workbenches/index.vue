<template>
  <div class="ServiceCenter common-content">
    <div class="common-header">服务中心站</div>
    <div class="common-main">
      <el-row type="flex"  justify="center" align="middle">
        <el-col span="8">
          <el-button
            >
            自主就业
          </el-button>
        </el-col>
        <el-col span="8">
          <el-button
            >
            就业创业
          </el-button>
        </el-col>
        <el-col span="8">
          <el-button
            >
            走访慰问
          </el-button>
        </el-col>
      </el-row>
      <el-row type="flex"  justify="center" align="middle">

        <el-col span="8">
          <el-button
          type="primary"
            @click="add($event,'/workbenches/excellentSupport')"
            >
            帮扶解困
          </el-button>
        </el-col>
        <el-col span="8">
          <el-button
            type="primary"
            @click="add($event,'/workbenches/insuranceconnection')"
            >
            保险接续
          </el-button>
        </el-col>
        <el-col span="8">
          <el-button
            >
            权益保障
          </el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiceCenter',
  data () {
    return {
    }
  },
  methods:{
      add:function(e,url){
        console.log(this,e)
        this.$router.push({path: url});
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./index.scss";
</style>
