<template>
  <div class="Addtask common-content">
    <div class="common-header">新建任务</div>
    <div class="common-main">
      <div class="excellentmain">
        <el-form  ref="form"  label-width="100px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
          <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="任务类型">
                  <el-select v-model="form.任务类型">
                    <el-option label="走访慰问" value="1"></el-option>
                    <el-option label="安置" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
          </el-row>
          <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="任务名称">
                      <el-input v-model="form.任务名称"></el-input>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                <el-form-item label="发送对象">
                      <el-input v-model="form.发送对象"></el-input>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                <el-form-item label="任务内容">
                      <el-input type="textarea" v-model="form.任务内容"></el-input>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12">
                <el-form-item label="截止时间">
                      <el-date-picker type="date"  v-model="form.截止时间"></el-date-picker>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10">
                <el-col :span="12" style="text-align:center">
                  <el-button
                    icon="el-icon-position"
                    size="small">
                    推送
                  </el-button>
                </el-col>
            </el-row>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Addtask',
  data () {
    return {
      active: 0,
      form:{
      }
    }
  },
  methods:{
      changeSetpState:function()
      {
        if (this.active++ > 0) this.active = 0;
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./Addtask.scss";
</style>
