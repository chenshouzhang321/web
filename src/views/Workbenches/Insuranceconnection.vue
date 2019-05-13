<template>
  <div class="Insuranceconnectiondetail common-content">
    <div class="common-header">申请保险接续 <el-button size="medium" class="nextBTN" @click="changeSetpState">下一步</el-button></div>
    <div class="common-main">
      <div class="setpsdiv">
        <el-steps :active="active">
          <el-step title="基本信息">1</el-step>
          <el-step title="审批">2</el-step>
        </el-steps>
      </div>
      <div class="excellentmain" v-if="active==0">
        <el-form  ref="form"  label-width="100px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
            <div class="title">单位信息</div>
            <div class="excellentone" v-if="form.类别==1">
              <el-row :gutter="10">
                  <el-col :span="12">
                    <el-form-item label="">
                      <el-radio-group v-model="form.是否安置">
                        <el-radio :label="1">有安置单位</el-radio>
                        <el-radio :label="2">无安置单位</el-radio>
                      </el-radio-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                      <el-form-item label="负伤时间">
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.负伤时间"></el-date-picker>
                      </el-form-item>
                   </el-col>
              </el-row>
              <el-row :gutter="10" type="flex"  justify="center" align="end" >
                  <el-col :span="12">
                      <el-form-item label="原安置单位">
                        <el-input v-model="form.原安置单位"></el-input>
                      </el-form-item>
                   </el-col>
                    <el-col :span="12">
                        <el-form-item label="原安置单位主管部门">
                          <el-input v-model="form.原安置单位主管部门"></el-input>
                        </el-form-item>
                     </el-col>
                </el-row>

                <el-row :gutter="10" >
                    <el-col :span="24">
                        <el-form-item label="现所在单位">
                          <el-input v-model="form.现所在单位"></el-input>
                        </el-form-item>
                     </el-col>
                  </el-row>
            </div>
                <div class="title">养老保险</div>
                <div class="excellentone">
                  <el-row :gutter="10" >
                        <el-col :span="24">
                          <el-form-item label="">
                            <el-radio-group v-model="form.缴费记录">
                              <el-radio :label="1">有缴费记录</el-radio>
                              <el-radio :label="2">无缴费记录</el-radio>
                            </el-radio-group>
                          </el-form-item>
                        </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                            <el-col :span="12">
                                <el-form-item label="开始缴费时间">
                                  <el-date-picker type="date" placeholder="选择日期" v-model="form.缴费时间1"></el-date-picker>
                                </el-form-item>
                             </el-col>
                             <el-col :span="12">
                                 <el-form-item label="最后缴费时间">
                                   <el-date-picker type="date" placeholder="选择日期" v-model="form.缴费时间2"></el-date-picker>
                                 </el-form-item>
                              </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                      <el-col :span="12">
                          <el-form-item label="缴费地点">
                            <el-input v-model="form.缴费地点"></el-input>
                          </el-form-item>
                       </el-col>
                       <el-col :span="12">
                           <el-form-item label="缴费单位">
                             <el-input v-model="form.缴费单位"></el-input>
                           </el-form-item>
                        </el-col>
                    </el-row>
                </div>
                <div class="title">医疗保险</div>
                <div class="excellentone">
                  <el-row :gutter="10" >
                        <el-col :span="24">
                          <el-form-item label="">
                            <el-radio-group v-model="form.医疗缴费记录">
                              <el-radio :label="1">有缴费记录</el-radio>
                              <el-radio :label="2">无缴费记录</el-radio>
                            </el-radio-group>
                          </el-form-item>
                        </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                            <el-col :span="12">
                                <el-form-item label="缴费时间">
                                  <el-date-picker type="date" placeholder="选择日期" v-model="form.缴费时间1"></el-date-picker>
                                </el-form-item>
                             </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                      <el-col :span="12">
                          <el-form-item label="缴费地点">
                            <el-input v-model="form.医疗缴费地点"></el-input>
                          </el-form-item>
                       </el-col>
                       <el-col :span="12">
                           <el-form-item label="缴费单位">
                             <el-input v-model="form.医疗缴费单位"></el-input>
                           </el-form-item>
                        </el-col>
                    </el-row>
                </div>
        </el-form>
      </div>


    </el-form>
    </div>
      <div class="excellentmain" v-if="active==1">
          <div class="excellentItem">
            <div class="excellentItem_bar">审批</div>
            <el-form  ref="form"  label-width="100px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form-item label="是否通过">
                          <el-radio-group v-model="form.是否通过1">
                            <el-radio :label="1">是</el-radio>
                            <el-radio :label="2">否</el-radio>
                          </el-radio-group>
                        </el-form-item>
                      </el-col>
                </el-row>
                <el-row :gutter="10">
                    <el-col :span="24">
                        <el-form-item label="审批意见" >
                          <el-input type="textarea"  v-model="form.审批意见1"></el-input>
                        </el-form-item>
                      </el-col>
                </el-row>
            </el-form>
          </div>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'InsuranceconnectiondetailDetail',
  data () {
    return {
      active: 0,
      form:{
        类别:1
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
    @import "./InsuranceconnectionDetail.scss";
</style>
