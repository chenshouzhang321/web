<template>
  <div class="excellentsupportdetail common-content">
    <div class="common-header">申请优扶</div>
    <div class="common-main">
      <div class="setpsdiv">
        <el-steps :active="active" finish-status="success">
          <el-step title="基本信息">1</el-step>
          <el-step title="县级审批">2</el-step>
          <el-step title="市级审批">3</el-step>
          <el-step title="省级审批">4</el-step>
        </el-steps>
      </div>
      <div class="excellentmain">
        <el-form ref="form" label-width="100px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
            <el-row :gutter="10" style="border-bottom:1px solid #f0f0f0;">
                <el-col :span="8">
                  <el-form-item label="类别：">
                    <el-radio-group v-model="form.类别">
                      <el-radio :label="1">伤残军人</el-radio>
                      <el-radio :label="2">伤残民兵民工</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
            </el-row>

            <div class="title">伤残情况</div>
            <div class="excellentone" v-if="form.类别==1">
              <el-row :gutter="10" type="flex"  justify="center" align="end" >
                  <el-col :span="6">
                      <el-form-item label="伤残等级">
                        <el-select v-model="form.伤残等级">
                          <el-option label="1级" value="1"></el-option>
                          <el-option label="2级" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                   </el-col>

                    <el-col :span="6">
                        <el-form-item label="伤残部位">
                          <el-input v-model="form.伤残部位"></el-input>
                        </el-form-item>
                     </el-col>
                     <el-col :span="6">
                         <el-form-item label="伤残证件照片">
                           <div class="imgzp">
                               <i class="el-icon-plus"></i>
                           </div>
                         </el-form-item>
                      </el-col>
                      <el-col :span="6">
                          <el-form-item label="负伤时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.负伤时间"></el-date-picker>
                          </el-form-item>
                       </el-col>
                </el-row>

                <el-row :gutter="10" >
                    <el-col :span="6">
                        <el-form-item label="负伤地点">
                          <el-input v-model="form.负伤地点"></el-input>
                        </el-form-item>
                     </el-col>

                      <el-col :span="6">
                          <el-form-item label="负伤时所在部队">
                            <el-input v-model="form.负伤时所在部队"></el-input>
                          </el-form-item>
                       </el-col>
                       <el-col :span="6">
                           <el-form-item label="伤残证件号码">
                             <el-input v-model="form.伤残证件号码"></el-input>
                           </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="评残时间">
                              <el-date-picker type="date" placeholder="选择日期" v-model="form.评残时间"></el-date-picker>
                            </el-form-item>
                         </el-col>
                  </el-row>

                  <el-row :gutter="10" >
                      <el-col :span="8">
                          <el-form-item label="是否精神病评残">
                            <el-select v-model="form.是否精神病评残">
                              <el-option label="是" value="1"></el-option>
                              <el-option label="否" value="2"></el-option>
                            </el-select>
                          </el-form-item>
                       </el-col>

                        <el-col :span="8">
                            <el-form-item label="伤残性质">
                              <el-select v-model="form.伤残性质">
                                <el-option label="因公" value="1"></el-option>
                                <el-option label="意外" value="2"></el-option>
                              </el-select>
                            </el-form-item>
                         </el-col>
                         <el-col :span="8">
                             <el-form-item label="是否职业病评残">
                               <el-select v-model="form.是否职业病评残">
                                 <el-option label="矽肺" value="1"></el-option>
                                 <el-option label="参试" value="2"></el-option>
                                 <el-option label="其它" value="3"></el-option>
                                 <el-option label="否" value="4"></el-option>
                               </el-select>
                             </el-form-item>
                          </el-col>
                    </el-row>
            </div>
            <div class="excellentone" v-if="form.类别==2">
              <el-row :gutter="10" >
                <el-col :span="8">
                    <el-form-item label="伤残性质">
                      <el-select v-model="form.伤残性质">
                        <el-option label="因公" value="1"></el-option>
                        <el-option label="意外" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                 </el-col>
                  <el-col :span="8">
                      <el-form-item label="伤残等级">
                        <el-select v-model="form.伤残等级">
                          <el-option label="1级" value="1"></el-option>
                          <el-option label="2级" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                   </el-col>

                    <el-col :span="8">
                        <el-form-item label="伤残部位">
                          <el-input v-model="form.伤残部位"></el-input>
                        </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="伤残证件">
                           <el-input v-model="form.伤残证件"></el-input>
                         </el-form-item>
                      </el-col>
                      <el-col :span="8">
                          <el-form-item label="伤残证件有效期">
                            <el-date-picker type="date" placeholder="伤残证件有效期" v-model="form.伤残证件有效期"></el-date-picker>
                          </el-form-item>
                       </el-col>
                </el-row>

                <el-row :gutter="10" >
                    <el-col :span="8">
                        <el-form-item label="评残时间">
                          <el-date-picker type="date" placeholder="评残时间" v-model="form.评残时间"></el-date-picker>
                        </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="伤残证件号">
                           <el-input v-model="form.伤残证件号"></el-input>
                         </el-form-item>
                      </el-col>
                      <el-col :span="8">
                          <el-form-item label="是否精神病评残">
                            <el-select v-model="form.是否精神病评残">
                              <el-option label="是" value="1"></el-option>
                              <el-option label="否" value="2"></el-option>
                            </el-select>
                          </el-form-item>
                       </el-col>
                  </el-row>
            </div>
            <el-row :gutter="10" class="rowCls" >
                <el-col :span="8">
                    <el-form-item label="是否配置辅助器具" label-width="120px">
                      <el-select v-model="form.是否配置辅助器具">
                        <el-option label="是" value="1"></el-option>
                        <el-option label="否" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                 </el-col>

                  <el-col :span="8">
                      <el-form-item label="孤老情况">
                        <el-select v-model="form.孤老情况">
                          <el-option label="是" value="1"></el-option>
                          <el-option label="否" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                   </el-col>

              </el-row>
              <el-row :gutter="10" class="rowCls" >
                  <el-col :span="8">
                      <el-form-item label="供养情况" label-width="120px">
                        <el-select v-model="form.供养情况">
                          <el-option label="分散供养" value="1"></el-option>
                          <el-option label="集中供养" value="2"></el-option>
                        </el-select>
                      </el-form-item>
                   </el-col>

                    <el-col :span="8">
                        <el-form-item label="供养单位">
                          <el-select v-model="form.供养单位">
                            <el-option label="荣康医院" value="1"></el-option>
                            <el-option label="复退军人精神病院" value="2"></el-option>
                            <el-option label="复退军人慢性病疗养院" value="3"></el-option>
                            <el-option label="综合性优抚医院" value="4"></el-option>
                            <el-option label="光荣院" value="5"></el-option>
                            <el-option label="社会福利机构" value="6"></el-option>
                            <el-option label="其他" value="7"></el-option>
                          </el-select>
                        </el-form-item>
                     </el-col>
                     <el-col :span="8">
                         <el-form-item label="地址">
                           <el-input v-model="form.地址"></el-input>
                         </el-form-item>
                      </el-col>
                </el-row>
                <div class="title">待遇情况</div>
                <div class="excellentone">
                  <el-row :gutter="10" >
                      <el-col :span="8">
                          <el-form-item label="银行名称">
                            <el-input v-model="form.银行名称"></el-input>
                          </el-form-item>
                       </el-col>

                        <el-col :span="8">
                            <el-form-item label="银行账号">
                              <el-input v-model="form.银行账号"></el-input>
                            </el-form-item>
                         </el-col>
                         <el-col :span="8">
                             <el-form-item label="合计">
                               <el-input v-model="form.合计"></el-input>
                             </el-form-item>
                          </el-col>
                          <el-col :span="8">
                              <el-form-item label="金额一">
                                <el-input v-model="form.金额一"></el-input>
                              </el-form-item>
                           </el-col>
                           <el-col :span="8">
                               <el-form-item label="金额二">
                                 <el-input v-model="form.金额二"></el-input>
                               </el-form-item>
                            </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                           <el-col :span="8">
                               <el-form-item label="金额三">
                                 <el-input v-model="form.金额三"></el-input>
                               </el-form-item>
                            </el-col>
                            <el-col :span="8">
                                <el-form-item label="是否社会化发放">
                                  <el-select v-model="form.是否社会化发放">
                                    <el-option label="分散供养" value="1"></el-option>
                                    <el-option label="集中供养" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                             </el-col>
                  </el-row>
                </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExcellentSupportDetail',
  data () {
    return {
      active: 0,
      form:{
        类别:1
      }
    }
  },
  methods:{

  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./ExcellentSupportDetail.scss";
</style>
