<template>
<el-container style="height:100%">
<el-aside width="250px" style="background:#393C4F;    position: relative;
    overflow: hidden;" >

<div style="background:#002140;height:40px;line-height;40px;
position:absolute;
top:0px;
left:0px;
width:100%;
z-index:100000;
">
 <router-link to="/home">
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
transform: translate(-50%,-50%);">山东省退役军人服务保障信息化应用中心</div>
</router-link>
</div>

<el-menu :default-active="path"  :router="true" style="width:100%;
padding-top: 40px;
overflow: auto;
height: 100%;
"   background-color="#393C4F" text-color="hsla(0,0%,100%,.65)" active-text-color="#fff">
  <el-submenu index="1">
      <template slot="title">
         <i class="el-icon-view"></i>
         <span slot="title">信息采集平台</span>
     </template>
     <el-menu-item index="/imCollection/basic" >基本信息</el-menu-item>
  </el-submenu>
  <el-submenu index="2">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">业务工作平台</span>
     </template>
     <el-menu-item index="/workbenches/1" >机构人事管理</el-menu-item>
     <el-menu-item index="/workbenches/2" >政策法规管理</el-menu-item>
     <el-menu-item index="/workbenches/3" >思想政治和权益维护管理</el-menu-item>
     <el-menu-item index="/workbenches/4" >规划财务管理</el-menu-item>
     <el-menu-item index="/workbenches/5" >移交安置管理</el-menu-item>
     <el-menu-item index="/workbenches/6" >就业创业管理</el-menu-item>
     <el-menu-item index="/workbenches/7" >军休服务管理</el-menu-item>
     <el-menu-item index="/workbenches/8" >优抚褒扬纪念管理</el-menu-item>
     <el-menu-item index="/workbenches/9" >双拥工作管理</el-menu-item>
     <el-menu-item index="/workbenches/serviceCenter" >服务中心（站）工作</el-menu-item>
  </el-submenu>
  <el-submenu index="3">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">任务管理平台</span>
     </template>
     <el-menu-item index="/task/taskpush" >任务推送</el-menu-item>
     <el-menu-item index="/task/supervisioninspection" >督导督查</el-menu-item>
  </el-submenu>
  <el-submenu index="4">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">统计查询平台</span>
     </template>
     <el-menu-item index="/statisticalplatform/search" >查询</el-menu-item>
     <el-menu-item index="/statisticalplatform/chart" >图表</el-menu-item>
     <el-menu-item index="/statisticalplatform/1" >报表</el-menu-item>
     <el-menu-item index="/statisticalplatform/addressbook" >通讯录</el-menu-item>
  </el-submenu>
  <el-submenu index="5">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">图像存储平台</span>
     </template>
     <el-menu-item index="/imageService/1" >图像来源</el-menu-item>
     <el-menu-item index="/imageService/2" >管理</el-menu-item>
  </el-submenu>
  <el-submenu index="6">
      <template slot="title">
         <i class="el-icon-s-tools"></i>
         <span slot="title">政策智库平台</span>
     </template>
     <el-menu-item index="/policythinktank/1" >政策法规</el-menu-item>
     <el-menu-item index="/policythinktank/2" >在线答疑</el-menu-item>
     <el-menu-item index="/policythinktank/3" >政策模型</el-menu-item>
  </el-submenu>
</el-menu>
</el-aside>

<el-container style="background:#f0f2f5" direction="vertical">
<el-header style=" font-size: 12px;background:#fff" v-if="path!='/home'">
  <el-row type="flex" align="middle" justify="center" style="height:100%">
    <el-col :span="12"><i @click="changeAside" style="font-size:18px" class="el-icon-s-fold"></i></el-col>
    <el-col :span="12"></el-col>
  </el-row>
</el-header>
<el-main style="margin-top:2px;background:#fff;padding:0px">
  <div class="breadcrumb_div" v-if="path!='/home'">
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
