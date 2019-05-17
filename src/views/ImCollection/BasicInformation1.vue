<template>
  <div class="BasicInformation1 common-content">
    <div class="common-main">
    <el-form ref="form" :label-position="left" label-width="80px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
      <el-row type="flex"  justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">基本信息</el-col>
            <el-col :span="20">
                <el-container>
                    <el-aside width="150px"  >
                        <div class="imgCls">
                            <i class="el-icon-plus icon"></i>
                        </div>
                        <div style="text-align:center;margin-bottom:20px;">近照</div>
                        <div class="imgzp">
                            <i class="el-icon-plus"></i>
                        </div>
                        <div class="imgzp">
                            <i class="el-icon-plus"></i>
                        </div>
                    </el-aside>
                    <el-container direction="vertical" style="padding-right:20px" >
                      <el-row :gutter="10" >
                          <el-col :span="6">
                            <el-form-item label="姓名">
                              <el-input v-model="form.name"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="性别">
                              <el-select v-model="form.sex" placeholder="性别">
                                <el-option label="男" value="1"></el-option>
                                <el-option label="女" value="2"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="出身日期">
                              <el-date-picker type="date" placeholder="选择日期" v-model="form.chushengriqi" ></el-date-picker>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="籍贯">
                              <el-select v-model="form.jg" placeholder="籍贯">
                                <el-option label="山东" value="1"></el-option>
                                <el-option label="江苏" value="2"></el-option>
                                <el-option label="北京" value="3"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                      </el-row>
                      <el-row :gutter="10">
                        <el-col :span="6">
                          <el-form-item label="民族">
                            <el-select v-model="form.mz" placeholder="民族">
                              <el-option label="空" value="1"></el-option>
                              <el-option label="汉族" value="2"></el-option>
                              <el-option label="少数民族" value="3"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                          <el-col :span="6">
                            <el-form-item label="证件类型">
                              <el-select v-model="form.zjlx" placeholder="证件类型">
                                <el-option label="身份证" value="1"></el-option>
                                <el-option label="其它证" value="2"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="证件号">
                              <el-input v-model="form.zhengjinhao" placeholder="18位数字"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="学历">
                              <el-select v-model="form.xueli" placeholder="学历">
                                <el-option label="本科生" value="1"></el-option>
                                <el-option label="博士生" value="2"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                      </el-row>

                      <el-row :gutter="10"  >
                        <el-col :span="6">
                          <el-form-item label="政治面貌">
                            <el-select v-model="form.zzmb">
                              <el-option label="中国共产党员" value="1"></el-option>
                              <el-option label="中国共青团员" value="2"></el-option>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="6">
                          <el-form-item label="婚烟状况">
                            <el-select v-model="form.hyzk" placeholder="婚烟状况">
                              <el-option label="已婚" value="1"></el-option>
                              <el-option label="未婚" value="2"></el-option>
                            </el-select>
                          </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="手机号">
                              <el-input v-model="form.sjh"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="电子邮箱">
                              <el-input v-model="form.email"></el-input>
                            </el-form-item>
                          </el-col>

                      </el-row>
                      <el-row :gutter="10" v-if="form.zzmb=='1'" >
                        <el-col :span="6">
                          <el-form-item label="入党时间">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.入党时间" ></el-date-picker>
                          </el-form-item>
                        </el-col>
                          <el-col :span="6">
                            <el-form-item label="党龄">
                              <el-input v-model="form.党龄"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="所在支部">
                              <el-input v-model="form.所在支部"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                              <el-radio-group v-model="form.党费">
                                <el-radio :label="1">按时足额缴纳党费</el-radio>
                                <el-radio :label="2">正常参加组织生活</el-radio>
                              </el-radio-group>
                          </el-col>

                      </el-row>
                        <el-row :gutter="10" >
                          <el-col :span="12">
                            <el-form-item label="个人爱好">
                              <el-input v-model="form.grtsah"></el-input>
                            </el-form-item>
                          </el-col>
                          <el-col :span="12">
                            <el-form-item label="居住地址">
                              <el-input v-model="form.jzdz"></el-input>
                            </el-form-item>
                          </el-col>
                        </el-row>
                        <el-row :gutter="10" >
                          <el-col :span="24">
                          <el-form-item label="服役履历">
                          <el-checkbox-group v-model="form.check_grtsah">
                            <el-checkbox label="参战" name="type"></el-checkbox>
                            <el-checkbox label="参试(涉核)" name="type"></el-checkbox>
                            <el-checkbox label="参与重大任务" name="type"></el-checkbox>
                          </el-checkbox-group>
                          </el-form-item>
                          </el-col>
                        </el-row>
                        <el-row :gutter="10">
                            <el-col :span="4" style="text-align:center" >
                              <el-button size="mini" @click="handleCheck($event,'1')">生活状态</el-button>
                            </el-col>
                            <el-col :span="4" style="text-align:center">
                              <el-button size="mini" @click="handleCheck($event,'2')">身体状态</el-button>

                            </el-col>
                            <el-col :span="4" style="text-align:center" >
                              <el-button size="mini"  @click="handleCheck($event,'3')">家庭成员详情</el-button>

                            </el-col>
                            <el-col :span="4" style="text-align:center" >
                              <el-button size="mini"  @click="handleCheck($event,'4')">社会保险详情</el-button>

                            </el-col>
                            <el-col :span="4" style="text-align:center" >
                              <el-button size="mini"  @click="handleCheck($event,'5')">教育学历</el-button>

                            </el-col>
                            <el-col :span="4" style="text-align:center" >
                              <el-button size="mini"  @click="handleCheck($event,'6')">更多</el-button>

                            </el-col>
                        </el-row>
                          <div label="生活状况" class="labDiv" name="1" v-if="activeName=='1'">
                              <el-row :gutter="10">
                                  <el-col :span="6">
                                    <el-form-item label="住房状态" label-width="100px">
                                      <el-select v-model="form.region" placeholder="住房状态">
                                        <el-option label="自建房" value="shanghai"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="始建时间">
                                      <el-date-picker type="date" placeholder="选择日期" v-model="form.始建时间" style="width: 100%;"></el-date-picker>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="面积">
                                      <el-input v-model="form.面积"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="房屋架构">
                                      <el-input v-model="form.fwjg"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10">
                                  <el-col :span="12">
                                    <el-form-item label="上年度家庭收入" label-width="100px">
                                      <el-select v-model="form.sqdjtsr" placeholder="上年度家庭收入">
                                        <el-option label="20万以上" value="1"></el-option>
                                        <el-option label="30万以上" value="2"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="12">
                                    <el-form-item label="上年度个人收入" label-width="100px">
                                      <el-select v-model="form.sqdjtsr" placeholder="上年度个人收入">
                                        <el-option label="20万以上" value="1"></el-option>
                                        <el-option label="30万以上" value="2"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10">
                                  <el-col :span="8">
                                    <el-form-item label="享受社会救助" label-width="100px">
                                      <el-select v-model="form.享受社会救助" placeholder="享受社会救助">
                                        <el-option label="无" value="1"></el-option>
                                        <el-option label="有" value="2"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="享受国家抚恤补助金" label-width="150px">
                                      <el-select v-model="form.享受国家抚恤补助金" placeholder="享受国家抚恤补助金">
                                        <el-option label="否" value="1"></el-option>
                                        <el-option label="是" value="2"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="金额">
                                      <el-input v-model="form.jiner"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10">
                                  <el-col :span="6">
                                    <el-form-item label="个案帮扶主体" label-width="100px">
                                      <el-input v-model="form.个案帮扶主体"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="个案帮扶方式" label-width="150px">
                                      <el-input v-model="form.个案帮扶方式"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="个案帮扶时间段" label-width="100px">
                                      <el-input v-model="form.个案帮扶时间段"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="帮扶金额">
                                      <el-input v-model="form.帮扶金额"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10">
                                  <el-col :span="4" label-width="100px">
                                    <el-form-item label="悬挂光荣牌">
                                      <el-switch v-model="form.悬挂光荣牌"></el-switch>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="悬挂时间" label-width="150px">
                                      <el-date-picker type="date" placeholder="选择日期" v-model="form.悬挂时间" ></el-date-picker>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="12">
                                    <el-form-item label="悬挂地址">
                                      <el-input v-model="form.悬挂地址"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10">
                                  <el-col :span="8">
                                    <el-form-item label="轮养时间">
                                      <el-date-picker type="date" placeholder="选择日期" v-model="form.轮养时间" ></el-date-picker>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="10">
                                    <el-form-item label="轮养地点" label-width="150px">
                                      <el-input v-model="form.轮养地点"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="6">
                                    <el-form-item label="轮养次数">
                                      <el-input v-model="form.轮养次数"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                          </div>
                          <div label="生活状况" class="labDiv" name="1" v-if="activeName=='2'">
                          <el-row :gutter="10">
                              <el-col :span="8">
                                <el-form-item label="健康状况">
                                  <el-select v-model="form.健康状况" placeholder="健康状况">
                                    <el-option label="健康" value="1"></el-option>
                                    <el-option label="不健康" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="8">
                                <el-form-item label="疾病种类" label-width="150px">
                                  <el-select v-model="form.疾病种类" placeholder="疾病种类">
                                    <el-option label="三高" value="1"></el-option>
                                    <el-option label="两高" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="8">
                                <el-form-item label="">
                                  <el-checkbox-group v-model="form.jizl_detail">
                                    <el-checkbox label="孤老" name="type"></el-checkbox>
                                    <el-checkbox label="享受护理" name="type"></el-checkbox>
                                  </el-checkbox-group>
                                </el-form-item>
                              </el-col>
                          </el-row>
                          <el-row :gutter="2" >
                              <el-col :span="3" style="text-align:right">
                                退役后残疾：
                              </el-col>
                              <el-col :span="24">
                                  <el-row :gutter="2">
                                      <el-col :span="4">
                                        <el-form-item label="视力" label-width="50px">
                                          <el-select v-model="form.视力残疾" >
                                            <el-option label="无" value="1"></el-option>
                                            <el-option label="有" value="2"></el-option>
                                          </el-select>
                                        </el-form-item>
                                      </el-col>
                                      <el-col :span="4">
                                        <el-form-item label="听力" >
                                          <el-select v-model="form.听力残疾" label-width="50px">
                                            <el-option label="无" value="1"></el-option>
                                            <el-option label="有" value="2"></el-option>
                                          </el-select>
                                        </el-form-item>
                                      </el-col>
                                      <el-col :span="4">
                                        <el-form-item label="语言" label-width="50px">
                                          <el-select v-model="form.语言残疾" >
                                            <el-option label="无" value="1"></el-option>
                                            <el-option label="有" value="2"></el-option>
                                          </el-select>
                                        </el-form-item>
                                      </el-col>
                                      <el-col :span="4">
                                        <el-form-item label="肢体" label-width="50px">
                                          <el-select v-model="form.肢体残疾" >
                                            <el-option label="无" value="1"></el-option>
                                            <el-option label="有" value="2"></el-option>
                                          </el-select>
                                        </el-form-item>
                                      </el-col>
                                      <el-col :span="4">
                                        <el-form-item label="智力" label-width="50px">
                                          <el-select v-model="form.智力残疾" >
                                            <el-option label="无" value="1"></el-option>
                                            <el-option label="有" value="2"></el-option>
                                          </el-select>
                                        </el-form-item>
                                      </el-col>
                                      <el-col :span="4">
                                        <el-form-item label="精神" label-width="50px" >
                                          <el-select v-model="form.精神残疾" >
                                            <el-option label="无" value="1"></el-option>
                                            <el-option label="有" value="2"></el-option>
                                          </el-select>
                                        </el-form-item>
                                      </el-col>
                                  </el-row>
                              </el-col>
                          </el-row>
                          <el-row :gutter="2" type="flex"  justify="center" align="middle">
                              <el-col :span="8">
                                <el-form-item label="精神残疾" label-width="70px">
                                  <div class="imgzp zjz">
                                      <i class="el-icon-plus"></i>
                                  </div>
                                </el-form-item>
                              </el-col>
                              <el-col :span="8">
                                <el-form-item label="残疾证件号码1" label-width="100px">
                                    <el-input size="mini" v-model="form.残疾证件号码1" ></el-input>
                                </el-form-item>
                              </el-col>
                              <el-col :span="8">
                                <el-form-item label="证件有效期1" label-width="100px">
                                    <el-date-picker type="date" placeholder="选择日期" v-model="form.证件有效期1" ></el-date-picker>
                                </el-form-item>
                              </el-col>
                          </el-row>
                          <el-row :gutter="10">
                              <el-col :span="8">
                                <el-form-item label="评残时间">
                                  <el-date-picker type="date" placeholder="选择日期" v-model="form.评残时间" ></el-date-picker>
                                </el-form-item>
                              </el-col>
                              <el-col :span="16">
                                <el-form-item label="">
                                  <el-checkbox-group v-model="form.职业病评残">
                                    <el-checkbox label="职业病评残" name="type"></el-checkbox>
                                    <el-checkbox label="享受残疾人两项补贴" name="type"></el-checkbox>
                                  </el-checkbox-group>
                                </el-form-item>
                              </el-col>
                          </el-row>
                          <el-row :gutter="10">
                              <el-col :span="4">
                                  <el-form-item label="配置辅助器具" label-width="100px">
                                    <el-checkbox-group v-model="form.配置辅助器具">
                                      <el-checkbox label="" name="type"></el-checkbox>
                                    </el-checkbox-group>
                                  </el-form-item>
                              </el-col>
                              <el-col :span="8">
                                <el-form-item label="配置时间">
                                  <el-date-picker type="date" placeholder="选择日期" v-model="form.配置时间" ></el-date-picker>
                                </el-form-item>
                              </el-col>
                              <el-col :span="6">
                                <el-form-item label="配置方式">
                                  <el-select v-model="form.配置方式" >
                                    <el-option label="个人配置" value="1"></el-option>
                                    <el-option label="公司配置" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="6">
                                <el-form-item label="配置部门">
                                  <el-input size="mini" v-model="form.配置部门" ></el-input>
                                </el-form-item>
                              </el-col>
                          </el-row>
                          </div>
                          <div label="生活状况" class="labDiv"name="1" v-if="activeName=='3'">
                              <el-row :gutter="10">
                                  <el-col :span="3">关系</el-col>
                                  <el-col :span="3">姓  名</el-col>
                                  <el-col :span="3">性  别</el-col>
                                  <el-col :span="4">出生日期</el-col>
                                  <el-col :span="4">证件号</el-col>
                                  <el-col :span="3">民族</el-col>
                                  <el-col :span="4">工作单位</el-col>
                              </el-row>
                              <el-row :gutter="10" style="margin-top:10px;">
                                  <el-col :span="3">
                                      <el-select size="mini" v-model="form.关系1" placeholder="关系">
                                        <el-option label="夫妻" value="1"></el-option>
                                        <el-option label="子女" value="2"></el-option>
                                      </el-select>
                                  </el-col>
                                  <el-col :span="3">
                                      <el-input size="mini" v-model="form.姓名1"></el-input>
                                  </el-col>
                                  <el-col :span="3">
                                    <el-select size="mini" v-model="form.性别1" >
                                      <el-option label="男" value="1"></el-option>
                                      <el-option label="女" value="2"></el-option>
                                    </el-select>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-date-picker size="mini" type="date" placeholder="选择日期" v-model="form.出身日期1" ></el-date-picker>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-input size="mini" v-model="form.证件号1"></el-input>
                                  </el-col>
                                  <el-col :span="3">
                                      <el-select size="mini" v-model="form.民族1" >
                                        <el-option label="汉族" value="1"></el-option>
                                        <el-option label="白族" value="2"></el-option>
                                      </el-select>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-input size="mini" v-model="form.工作单位1"></el-input>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10" style="margin-top:10px;">
                                  <el-col :span="3">
                                      <el-select size="mini" v-model="form.关系2" placeholder="关系">
                                        <el-option label="夫妻" value="1"></el-option>
                                        <el-option label="子女" value="2"></el-option>
                                      </el-select>
                                  </el-col>
                                  <el-col :span="3">
                                      <el-input size="mini" v-model="form.姓名2"></el-input>
                                  </el-col>
                                  <el-col :span="3">
                                    <el-select size="mini" v-model="form.性别2" >
                                      <el-option label="男" value="1"></el-option>
                                      <el-option label="女" value="2"></el-option>
                                    </el-select>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-date-picker size="mini" type="date" placeholder="选择日期" v-model="form.出身日期2" ></el-date-picker>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-input size="mini" v-model="form.证件号2"></el-input>
                                  </el-col>
                                  <el-col :span="3">
                                      <el-select size="mini" v-model="form.民族2" >
                                        <el-option label="汉族" value="1"></el-option>
                                        <el-option label="白族" value="2"></el-option>
                                      </el-select>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-input size="mini" v-model="form.工作单位2"></el-input>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10" style="margin-top:10px;">
                                  <el-col :span="3">
                                      <el-select size="mini" v-model="form.关系3" placeholder="关系">
                                        <el-option label="夫妻" value="1"></el-option>
                                        <el-option label="子女" value="2"></el-option>
                                      </el-select>
                                  </el-col>
                                  <el-col :span="3">
                                      <el-input size="mini" v-model="form.姓名3"></el-input>
                                  </el-col>
                                  <el-col :span="3">
                                    <el-select size="mini" v-model="form.性别3" >
                                      <el-option label="男" value="1"></el-option>
                                      <el-option label="女" value="2"></el-option>
                                    </el-select>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-date-picker size="mini" type="date" placeholder="选择日期" v-model="form.出身日期3" ></el-date-picker>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-input size="mini" v-model="form.证件号3"></el-input>
                                  </el-col>
                                  <el-col :span="3">
                                      <el-select size="mini" v-model="form.民族3" >
                                        <el-option label="汉族" value="1"></el-option>
                                        <el-option label="白族" value="2"></el-option>
                                      </el-select>
                                  </el-col>
                                  <el-col :span="4">
                                    <el-input size="mini" v-model="form.工作单位3"></el-input>
                                  </el-col>
                              </el-row>
                          </div>
                          <div label="生活状况" class="labDiv" name="1" v-if="activeName=='4'">
                              <el-row :gutter="10" >
                                  <el-col :span="8">
                                    <el-form-item label="养老保险类型" label-width="100px">
                                      <el-select v-model="form.养老保险类型">
                                        <el-option label="无" value="1"></el-option>
                                        <el-option label="社何" value="2"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="缴纳中断时段" label-width="100px">
                                      <el-select v-model="form.缴纳中断时段">
                                        <el-option label="无" value="1"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="现参保地" >
                                      <el-input v-model="form.现参保地"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10" >
                                  <el-col :span="8">
                                    <el-form-item label="医疗保险类型" label-width="100px">
                                      <el-select v-model="form.医疗保险类型">
                                        <el-option label="未参加" value="1"></el-option>
                                        <el-option label="已参加" value="2"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="缴纳中断时段" label-width="100px">
                                      <el-select v-model="form.缴纳中断时段1">
                                        <el-option label="无" value="1"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="现参保地">
                                      <el-input v-model="form.现参保地1"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                          </div>
                          <div label="生活状况" class="labDiv" name="1" v-if="activeName=='5'">
                              <el-row :gutter="10" >
                                  <el-col :span="24">
                                    <el-radio-group v-model="form.教育学历">
                                      <el-radio :label="1">全日制学历</el-radio>
                                      <el-radio :label="2">继续教育学历</el-radio>
                                    </el-radio-group>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10" style="margin-top:10px">
                                  <el-col :span="24"  >
                                      <el-row style="position:relative">
                                        <el-col :span="12" >
                                          <el-form-item label="开始日期">
                                            <el-date-picker type="date" placeholder="选择日期" v-model="form.qr_data_start" ></el-date-picker>
                                          </el-form-item>

                                        </el-col>
                                        <div class="imgzp1">
                                            <i class="el-icon-plus"></i>
                                        </div>
                                        </el-row >
                                        <el-row >
                                          <el-col :span="12" >
                                            <el-form-item label="结束日期">
                                              <el-date-picker type="date" placeholder="选择日期" v-model="form.qr_data_send" ></el-date-picker>
                                            </el-form-item>
                                          </el-col>
                                        </el-row>
                                        <el-row >
                                          <el-col :span="12" >
                                            <el-form-item label="教学机构">
                                              <el-input v-model="form.qr_jxjg"></el-input>
                                            </el-form-item>
                                          </el-col>
                                          <el-col :span="12" >
                                            <el-form-item label="专业">
                                              <el-input v-model="form.qr_zhuangye"></el-input>
                                            </el-form-item>
                                          </el-col>
                                        </el-row>
                                  </el-col>
                              </el-row>
                          </div>
                        <div label="生活状况" class="labDiv" name="1" v-if="activeName=='6'">
                              <el-row :gutter="10" >
                                  <el-col :span="8">
                                    <el-form-item label="邮编">
                                      <el-input v-model="form.yb"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                      <el-form-item label="学位" >
                                      <el-select v-model="form.xuewei" placeholder="学位">
                                        <el-option label="博士" value="1"></el-option>
                                      </el-select>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="8">
                                    <el-form-item label="家庭固话" >
                                      <el-input v-model="form.家庭固话"></el-input>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                              <el-row :gutter="10" >
                                  <el-col :span="5">
                                    <el-form-item label="工作电话">
                                      <el-input v-model="form.工作电话"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="5">
                                    <el-form-item label="微信号">
                                      <el-input v-model="form.微信号"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="5">
                                    <el-form-item label="QQ号">
                                      <el-input v-model="form.QQ号"></el-input>
                                    </el-form-item>
                                  </el-col>
                                  <el-col :span="9">
                                    <el-form-item label="参加工作时间" label-width="120px">
                                      <el-date-picker type="date" placeholder="选择日期" v-model="form.参加工作入伍时间" ></el-date-picker>
                                    </el-form-item>
                                  </el-col>
                              </el-row>
                          </div>
                    </el-container>
                </el-container>
            </el-col>
      </el-row>
      <el-row type="flex"  justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">身份类别</el-col>
            <el-col :span="20" style="padding-top:20px;">
              <el-form-item label="" label-width="20px">
                <el-checkbox-group v-model="form.check_gzrenyuan">
                  <el-checkbox label="军队专业干部" name="type"></el-checkbox>
                  <el-checkbox label="退役士兵" name="type"></el-checkbox>
                  <el-checkbox label="军队离退休干部和退休士官" name="type"></el-checkbox>
                  <el-checkbox label="军队无军籍离退休退职职工" name="type"></el-checkbox>
                  <el-checkbox label="“三红”人员" name="type"></el-checkbox>
                  <el-checkbox label="在乡老复员军人" name="type"></el-checkbox>
                  <el-checkbox label="复员干部" name="type"></el-checkbox>
                  <el-checkbox label="伤残军人" name="type"></el-checkbox>
                  <el-checkbox label="伤残民兵民工" name="type"></el-checkbox>
                  <el-checkbox label="因公牺牲军人遗属" name="type"></el-checkbox>
                  <el-checkbox label="病故军人遗属" name="type"></el-checkbox>
                  <el-checkbox label="现役军人家属" name="type"></el-checkbox>
                  <el-checkbox label="其他优抚对象" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
      </el-row>
      <el-row type="flex"  justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">主要诉求</el-col>
            <el-col :span="20">
              <el-row style="margin-top:20px;" >
                  <el-col :span="6">
                  <el-form-item label="" label-width="20px">
                    <el-checkbox-group v-model="form.主要困难">
                      <el-checkbox label="主要困难" name="type"></el-checkbox>
                      <el-checkbox label="主要诉求" name="type"></el-checkbox>
                    </el-checkbox-group>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="具体诉求">
                    <el-input v-model="form.具体诉求"></el-input>
                  </el-form-item>
                  </el-col>
              </el-row>

            </el-col>
      </el-row>
      <el-row type="flex"  justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">采集过程</el-col>
            <el-col :span="20">
              <el-row style="margin-top:20px;" >
                <el-col :span="5">
                  <el-form-item label="对象确认签字" label-width="100px">
                    <el-input v-model="form.对象确认签字"></el-input>
                  </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="变动类型">
                      <el-select v-model="form.hyzk" placeholder="变动类型">
                        <el-option label="无变动" value="1"></el-option>
                        <el-option label="有变动" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="变动时间">
                      <el-date-picker type="date" placeholder="选择日期" v-model="form.变动时间" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                  </el-col>
                  <el-col :span="9">
                    <el-button size="mini" style="margin-left:20px">采集人信息</el-button>
                    <el-button size="mini" style="margin-left:20px">审核人信息</el-button>
                  </el-col>
              </el-row>

            </el-col>
      </el-row>
      </el-form>
      <el-row :gutter="2" style="padding:10px;">
          <el-col :span="12" style="text-align:center">
            <el-button size="medium" @click="save">暂 存</el-button>
          </el-col>
          <el-col :span="12" style="text-align:center">
            <el-button size="medium" @click="save">保 存</el-button>
          </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BasicInformation1',
  data () {
    return {
      activeName:"10",
      msg: `测度`,
      form:{
        check_grtsah:[],
        check_gzrenyuan:[],
        jizl_detail:[]
      }
    }
  },
  methods:{
      testclick:function(e){
        console.log(this,e)
        this.$store.dispatch("ToggleSideBar",5)
      },
      save:function(e){
          this.$message({
            message: '保存成功',
            center: true,
            type: 'success'
          });
        console.log(this.form)
      },
      handleCheck:function(e,i)
      {
        if(this.activeName==i)
        {
          this.activeName="";
        }else{
          this.activeName=i;
        }

      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./BasicInformation1.scss";
</style>
