<template>
<el-container style="height:100%">
<el-aside width="210px" style="background:#393C4F" >

<div style="background:#002140;height:40px;line-height;40px;position:relative">
  <div style="
  background: rgb(66, 85, 104);
height: 30px;
text-align: center;
width: 90%;
color: rgba(255, 255, 255, 0.7);
line-height: 30px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);">山东省退役军人服务平台</div>
</div>
<el-menu :default-active="path"  :router="true" style="width:100%"   background-color="#393C4F" text-color="hsla(0,0%,100%,.65)" active-text-color="#fff">
  <el-submenu index="1">
      <template slot="title">
         <i class="el-icon-view"></i>
         <span slot="title">信息采集平台</span>
     </template>
     <el-menu-item index="/imCollection/basicInformation" >基本信息</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">业务工作平台</span>
     </template>
  </el-submenu>
  <el-submenu index="3">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">任务管理平台</span>
     </template>
  </el-submenu>
  <el-submenu index="4">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">统计查询平台</span>
     </template>
  </el-submenu>
  <el-submenu index="5">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">图像存储平台</span>
     </template>
  </el-submenu>
  <el-submenu index="6">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">政策智库</span>
     </template>
  </el-submenu>
</el-menu>
</el-aside>

<el-container style="background:#f0f2f5">
<el-header style=" font-size: 12px;background:#fff">
  <el-row type="flex" align="middle" justify="center" style="height:100%">
    <el-col :span="12"><i @click="changeAside" style="font-size:18px" class="el-icon-s-fold"></i></el-col>
    <el-col :span="12"></el-col>
  </el-row>
</el-header>
<el-main style="margin-top:2px;background:#fff;padding:0px">
  <div class="breadcrumb_div">
    <el-breadcrumb separator="/" >
        <el-breadcrumb-item  v-for=" bread in breads">{{bread.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <router-view/>
</el-main>
</el-container>
</el-container>
</template>

<script>
export default {
  name: 'Main',
  data(){
    return {
    }
  },
  computed:{
    isCollapse:{
      get() {
         return this.$store.state.app.isCollapse;
       }
    },
    path:{
      get() {
         return this.$route.path;
       }
    },
    breads:{
      get()
      {
        return this.$route.matched;
      }
    }
  },
  methods:{
      changeAside:function(){
        this.$store.dispatch("ToggleSideBar")
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

.breadcrumb_div{
  padding:15px 20px;
  background:#fff;
}
.el-menu-item:focus, .el-menu-item:hover{
background:none;
}
</style>
