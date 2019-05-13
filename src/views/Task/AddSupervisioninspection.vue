<template>
  <div class="AddSupervisioninspection common-content">
    <div class="common-header">督查</div>
    <div class="common-main">
      <div class="excellentmain">
        <div class="SupervisionTitle">八一慰问任务</div>
        <el-form  ref="form"  label-width="100px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
          <el-row :gutter="10">
              <el-col :span="2">
                一、
                </el-form-item>
              </el-col>
              <el-col :span="3">
                督查人：王小虎
                </el-col>
                <el-col :span="8">
                <el-form-item label="督查时间">
                      <el-date-picker type="date"  v-model="form.督查时间"></el-date-picker>
                </el-form-item>
                </el-col>
                <el-col :span="8">
                <el-form-item label="督查内容">
                      <el-input  v-model="form.督查内容"></el-input>
                </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="10" >
                <el-col :span="2">
                  &nbsp;
                  </el-form-item>
                </el-col>
                <el-col :span="3">
                  督查人：张三
                  </el-col>
                  <el-col :span="8">
                  <el-form-item label="时间">
                        <el-date-picker type="date"  v-model="form.时间"></el-date-picker>
                  </el-form-item>
                  </el-col>
                  <el-col :span="8">
                  <el-form-item label="回复内容">
                        <el-input  v-model="form.回复内容"></el-input>
                  </el-form-item>
                  </el-col>
              </el-row>
              <el-row :gutter="10" style="border-top: 2px solid rgb(240, 240, 240);">
                  <el-col :span="2">
                    二、
                    </el-form-item>
                  </el-col>
                  <el-col :span="3">
                    督查人：王小虎
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="督查时间">
                          <el-date-picker type="date"  v-model="form.督查时间1"></el-date-picker>
                    </el-form-item>
                    </el-col>
                    <el-col :span="8">
                    <el-form-item label="督查内容">
                          <el-input  v-model="form.督查内容1"></el-input>
                    </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="10" >
                    <el-col :span="2">
                      &nbsp;
                      </el-form-item>
                    </el-col>
                    <el-col :span="3">
                      督查人：李四
                      </el-col>
                      <el-col :span="8">
                      <el-form-item label="时间">
                            <el-date-picker type="date"  v-model="form.时间1"></el-date-picker>
                      </el-form-item>
                      </el-col>
                      <el-col :span="8">
                      <el-form-item label="回复内容">
                            <el-input  v-model="form.回复内容1"></el-input>
                      </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                    <el-col :span="24" style="text-align:center">
                    <el-button
                      type="primary">
                       确定
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
  name: 'AddSupervisioninspection',
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
    @import "./AddSupervisioninspection.scss";
</style>
