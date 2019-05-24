<template>
  <div class="BasicInformation1 common-content">
    <div class="common-main">
    <el-form ref="form"  :label-position="left" label-width="80px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
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
                            <el-form-item label="出生日期">
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
                          <el-col :span="8">
                            <el-form-item label="服役履历">
                              <el-select v-model="form.服役履历">
                                <el-option label="参战" value="1"></el-option>
                                <el-option label="战役名称1" value="2"></el-option>
                                <el-option label="战役名称2" value="3"></el-option>
                                <el-option label="战役名称3" value="4"></el-option>
                                <el-option label="战役名称4" value="5"></el-option>
                                <el-option label="战役名称5" value="6"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="5">
                            <el-form-item label="" label-width="2px">
                              <el-select v-model="form.服役履历1">
                                <el-option label="参试(涉核)" value="1"></el-option>
                                <el-option label="是" value="2"></el-option>
                                <el-option label="否" value="3"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="5">
                            <el-form-item label="" label-width="2px">
                              <el-select v-model="form.服役履历2" >
                                <el-option label="参与重大任务" value="1"></el-option>
                                <el-option label="重大军事演习" value="2"></el-option>
                                <el-option label="1976年唐山地震救援" value="3"></el-option>
                                <el-option label="1998年抗洪" value="4"></el-option>
                                <el-option label="2003年抗击非典" value="5"></el-option>
                                <el-option label="2008年汶川512地震救援" value="6"></el-option>
                                <el-option label="2008年抗击南方冰" value="7"></el-option>
                                <el-option label="雪灾害" value="8"></el-option>
                                <el-option label="国庆首都阅兵" value="9"></el-option>
                                <el-option label="抗战胜利70周年阅兵" value="10"></el-option>
                                <el-option label="朱日和阅兵" value="11"></el-option>
                                <el-option label="维稳处突" value="12"></el-option>
                                <el-option label="奥运会安保及执行任务" value="13"></el-option>
                                <el-option label="亚丁湾护航" value="14"></el-option>
                                <el-option label="海外维和" value="15"></el-option>
                              </el-select>
                            </el-form-item>
                          </el-col>
                          <el-col :span="6">
                            <el-form-item label="时长">
                              <el-input v-model="form.时长"></el-input>
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
                <el-checkbox-group v-model="check_gzrenyuan">
                  <el-checkbox label="军队转业干部" name="type"></el-checkbox>
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
      <el-row type="flex" v-if="isjz"  justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">军队转业干部</el-col>
            <el-col :span="20" style="padding:20px;">
              <el-row style="margin-top:20px;" >
                  <el-col :span="24">
                  <el-form-item label="分配类型">
                    <el-radio-group v-model="form.分配类型">
                    <el-radio :label="2">计划分配</el-radio>
                      <el-radio :label="1">自主择业</el-radio>
                    </el-radio-group>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                  <el-col :span="6">
                    <el-form-item label="入伍地" >
                      <el-input v-model="form.入伍地"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="入伍时间" >
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.入伍时间" ></el-date-picker>
                  </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="退役时间" >
                  <el-date-picker type="date" placeholder="选择日期" v-model="form.退役时间" ></el-date-picker>
                </el-form-item>
                </el-col>
              <el-col :span="6">
                <el-form-item label="军龄" >
                  <el-input v-model="form.军龄"></el-input>
                </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                  <el-col :span="6">
                    <el-form-item label="部队代号" >
                      <el-input v-model="form.部队代号"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="兵种" >
                    <el-input v-model="form.兵种"></el-input>
                  </el-form-item>
              </el-col>
              <el-col :span="6">
                <el-form-item label="原部别" >
                  <el-select v-model="form.原部别" >
                    <el-option label="东部战区" value="1"></el-option>
                    <el-option label="西部战区" value="2"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
                <el-col :span="6">
                  &nbsp;
                  </el-col>
              </el-row>
              <el-row>
                  <el-col :span="24">
                    <el-form-item label="退役前任职情况" label-width="100px" >
                      <el-radio-group v-model="form.退役前任职情况">
                        <el-radio :label="1">行政职务</el-radio>
                        <el-radio :label="2">专业技术职务</el-radio>
                        <el-radio :label="3">管理类文职干部</el-radio>
                        <el-radio :label="4">军衔文职</el-radio>
                      </el-radio-group>
                    </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                  <el-col :span="6">
                    <el-form-item label="职务名称"  >
                      <el-input v-model="form.职务名称"></el-input>
                    </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="行政待级"  >
                     <el-select v-model="form.行政待级" >
                       <el-option label="排职" value="1"></el-option>
                       <el-option label="副连职" value="2"></el-option>
                       <el-option label="正连职" value="3"></el-option>
                     </el-select>
                   </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="任职时间"  >
                     <el-date-picker type="date" placeholder="选择日期" v-model="form.任职时间" ></el-date-picker>
                   </el-form-item>
                 </el-col>
                  <el-col :span="6">
                    <el-form-item label=""  >
                      <el-checkbox-group v-model="form.领导职务">
                        <el-checkbox label="领导职务" name="type"></el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                </el-col>
              </el-row>

              <el-row>
                 <el-col :span="6">
                   <el-form-item label="立功受奖"  >
                     <el-select v-model="form.立功受奖" >
                       <el-option label="八一勋章" value="1"></el-option>
                       <el-option label="大军区以上荣誉" value="2"></el-option>
                     </el-select>
                   </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="立功受奖证件" label-width="100px"  >
                     <el-input v-model="form.立功受奖证件"></el-input>
                   </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="边远地区"  >
                    <el-select v-model="form.边远地区" >
                      <el-option label="艰苦边远地区服役一类区服役时长" value="1"></el-option>
                      <el-option label="艰苦边远地区服役二类区服役时长" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="特殊岗位"  >
                    <el-select v-model="form.特殊岗位" >
                      <el-option label="飞行" value="1"></el-option>
                      <el-option label="舰艇" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row>
                 <el-col :span="6">
                   <el-form-item label="法律职业资格" label-width="100px" >
                     <el-select v-model="form.法律职业资格" >
                       <el-option label="转业时任军事法官检察官" value="1"></el-option>
                       <el-option label="曾任军事法官检察官" value="2"></el-option>
                     </el-select>
                   </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="参战时长" label-width="100px"  >
                     <el-input v-model="form.参战时长"></el-input>
                   </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="战役名称" label-width="100px"  >
                    <el-input v-model="form.战役名称"></el-input>
                  </el-form-item>
               </el-col>
                <el-col :span="6">
                  &nbsp;
                </el-col>
              </el-row>
              <el-row>
                 <el-col :span="12">
                   <el-form-item label="转业年度"  >
                     <el-date-picker type="date" placeholder="选择日期" v-model="form.转业年度" ></el-date-picker>
                   </el-form-item>
                 </el-col>
                 <el-col :span="12">
                   <el-form-item label="证件号码" label-width="100px"  >
                     <el-input v-model="form.证件号码45"></el-input>
                   </el-form-item>
                </el-col>
              </el-row>
              <div class="title">安置地</div>
              <el-row style="margin-top:20px">
                 <el-col :span="6">
                   <el-form-item label="安置地"  >
                     <el-input v-model="form.安置地"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="省内单位性质" label-width="100px"   >
                     <el-select v-model="form.省内单位性质">
                       <el-option label="政法委员会" value="1"></el-option>
                       <el-option label="人民法院" value="2"></el-option>
                     </el-select>
                   </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="安排领导职务" label-width="100px"   >
                    <el-select v-model="form.安排领导职务">
                      <el-option label="领导职务" value="1"></el-option>
                      <el-option label="非领导职务" value="2"></el-option>
                      <el-option label="未明确职务" value="3"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
               <el-col :span="6">
                 <el-form-item label=""  >
                   <el-checkbox-group v-model="form.领导班子任职">
                     <el-checkbox label="领导班子任职" name="type"></el-checkbox>
                   </el-checkbox-group>
                 </el-form-item>
             </el-col>
              </el-row>
              <el-row >
                 <el-col :span="6">
                   <el-form-item label="安置职务等级"  label-width="100px" >
                     <el-select v-model="form.安置职务等级">
                       <el-option label="正厅级" value="1"></el-option>
                       <el-option label="副厅级" value="2"></el-option>
                     </el-select>
                   </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="安置日期"   >
                     <el-date-picker type="date" placeholder="选择日期" v-model="form.安置日期" ></el-date-picker>
                   </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="发出报到通知日期" label-width="120px"  >
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.发出报到通知日期" ></el-date-picker>
                  </el-form-item>
               </el-col>
               <el-col :span="6">
                 <el-form-item label="报到日期"   >
                   <el-date-picker type="date" placeholder="选择日期" v-model="form.报到日期" ></el-date-picker>
                 </el-form-item>
              </el-col>

              </el-row>
              <el-row >
                 <el-col :span="6">
                   <el-form-item label="随迁家属姓名"  label-width="100px" >
                     <el-input v-model="form.随迁家属姓名"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="证件号"   >
                     <el-input v-model="form.证件号44545"></el-input>
                   </el-form-item>
                </el-col>
                <el-col :span="12">
                  &nbsp;
               </el-col>
              </el-row>
              <el-row >
                 <el-col :span="8">
                   <el-form-item label="随迁家属原单位"  label-width="100px" >
                     <el-input v-model="form.随迁家属原单位"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="8">
                   <el-form-item label="原职务"   >
                     <el-input v-model="form.原职务"></el-input>
                   </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="单位性质">
                    <el-select v-model="form.单位性质" placeholder="性别">
                      <el-option label="机关单位" value="1"></el-option>
                      <el-option label="参公单位" value="2"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
              </el-row>
              <el-row >
                 <el-col :span="8">
                   <el-form-item label="随迁家属安置单位"  label-width="120px" >
                     <el-input v-model="form.随迁家属安置单位"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="8">
                   <el-form-item label="安置职务"   >
                     <el-input v-model="form.安置职务"></el-input>
                   </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="岗位性质">
                    <el-select v-model="form.岗位性质" placeholder="性别">
                      <el-option label="机关单位" value="1"></el-option>
                      <el-option label="参公单位" value="2"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
              </el-row>
              <el-row >
                 <el-col :span="8">
                   <el-form-item label="随迁户数"  label-width="100px" >
                     <el-input v-model="form.随迁户数"></el-input>
                   </el-form-item>
                 </el-col>
                 <el-col :span="8">
                   <el-form-item label="随迁落户户数" label-width="120px"  >
                     <el-input v-model="form.随迁落户户数"></el-input>
                   </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="随迁人数">
                    <el-input v-model="form.随迁人数"></el-input>
                  </el-form-item>
               </el-col>
              </el-row>
              <el-row >
                 <el-col :span="6" style="text-align:center">
                  <el-form-item label="" label-width="2px"   >
                   <el-checkbox-group v-model="form.岗前培训">
                     <el-checkbox label="岗前培训" name="type"></el-checkbox>
                   </el-checkbox-group>
                    </el-form-item>
                 </el-col>
                 <el-col :span="6">
                   <el-form-item label="退档日期"   >
                     <el-date-picker type="date" placeholder="选择日期" v-model="form.退档日期" ></el-date-picker>
                   </el-form-item>
                </el-col>
                <el-col :span="6" style="text-align:center">
                <el-form-item label="" label-width="2px"   >
                  <el-checkbox-group v-model="form.属于复员改办转业军队转业干部">
                    <el-checkbox label="属于复员改办转业军队转业干部" name="type"></el-checkbox>
                  </el-checkbox-group>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="单位性质">
                    <el-select v-model="form.单位性质" >
                      <el-option label="档案材料不全" value="1"></el-option>
                      <el-option label="档案不符合安置规定" value="2"></el-option>
                      <el-option label="部队撤回档案" value="3"></el-option>
                    </el-select>
                  </el-form-item>
               </el-col>
              </el-row>
              <el-row >
                 <el-col :span="24" >
                  <el-form-item label="安置备注"   >
                     <el-input type="textarea" v-model="form.安置备注"></el-input>
                    </el-form-item>
                 </el-col>
              </el-row>
            </el-col>
      </el-row>
      <el-row type="flex" v-if="issh"   justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">“三红”人员</el-col>
            <el-col :span="20" style="padding:10px;">
              <el-row style="margin-top:20px;" >
                  <el-col :span="6">
                    <el-form-item label="类别">
                      <el-select v-model="form.三红类别">
                        <el-option label="退伍红军老战士" value="1"></el-option>
                        <el-option label="西路军红军老战士" value="2"></el-option>
                        <el-option label="红军失散人员" value="3"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                    <el-col :span="6">
                      <el-form-item label="入伍时间" >
                        <el-date-picker type="date" placeholder="选择日期" v-model="form.三红入伍时间" ></el-date-picker>
                      </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="退伍时间"  >
                      <el-date-picker type="date" placeholder="选择日期" v-model="form.三红退伍离休退休时间" ></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :span="5">
                  <el-form-item label="原单位">
                    <el-input v-model="form.三红原单位"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row >
                  <el-col :span="5">
                    <el-form-item label="档案">
                      <el-input v-model="form.三红档案"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="7">
                    <el-form-item label="证件（章）">
                      <div class="imgzp">
                          <i class="el-icon-plus"></i>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="立功卡片">
                      <div class="imgzp">
                          <i class="el-icon-plus"></i>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="证明材料照片" label-width="100px">
                      <div class="imgzp">
                          <i class="el-icon-plus"></i>
                      </div>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row >
                  <el-col :span="6">
                    <el-form-item label="其它">
                      <el-input v-model="form.三红其它"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="6">
                    <el-form-item label="城乡区分">
                        <el-select v-model="form.城乡区分" >
                          <el-option label="城市" value="1"></el-option>
                          <el-option label="农村" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                  </el-col>

              </el-row>
              <div class="title">待遇情况</div>
              <el-row style="margin-top:20px;" >
                  <el-col :span="5">
                    <el-form-item label="银行名称">
                      <el-input v-model="form.三红银行名称"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="银行账号">
                      <el-input v-model="form.三红银行账号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="7">
                    <el-form-item label="待遇总计(元)" label-width="120px">
                      <el-input v-model="form.三红待遇总计元"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="7">
                    <el-form-item label="是否社会化发放" label-width="120px">
                      <el-select v-model="form.是否社会化发放" >
                        <el-option label="是" value="1"></el-option>
                        <el-option label="否" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
              </el-row>
              <el-row  >
                  <el-col :span="7">
                    <el-form-item label="在乡人员待遇情况" label-width="120px">
                      <el-select v-model="form.在乡人员待遇情况" >
                        <el-option label="分散供养" value="1"></el-option>
                        <el-option label="集中供养" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="供养单位" >
                      <el-select v-model="form.供养单位" >
                        <el-option label="荣康医院" value="1"></el-option>
                        <el-option label="复退军人精神病院" value="2"></el-option>
                        <el-option label="复退军人慢性病疗养院" value="3"></el-option>
                        <el-option label="综合性优抚医院" value="4"></el-option>
                        <el-option label="光荣院" value="5"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="7">
                    <el-form-item label="地址(具体到街道)" label-width="120px">
                      <el-input v-model="form.地址具体到街道"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="5">
                    <el-form-item label="孤老情况" >
                      <el-select v-model="form.孤老情况" >
                        <el-option label="是" value="1"></el-option>
                        <el-option label="否" value="2"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
              </el-row>
            </el-col>
      </el-row>
      <el-row type="flex" v-if="isccjr"  justify="center" align="middle" class="rowitem">
            <el-col :span="4" style="text-align:center">伤残军人</el-col>
            <el-col :span="20" style="padding:10px;">
              <el-row style="margin-top:20px;" >
                <el-col :span="6">
                  <el-form-item label="伤残性质">
                    <el-select v-model="form.伤残性质">
                      <el-option label="因公" value="1"></el-option>
                      <el-option label="因病" value="2"></el-option>
                      <el-option label="因战" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="伤残等级">
                    <el-select v-model="form.伤残等级">
                      <el-option label="1级" value="1"></el-option>
                      <el-option label="2级" value="2"></el-option>
                      <el-option label="3级" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="伤残部位">
                    <el-input v-model="form.伤残部位"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="伤残证件">
                    <div class="imgzp">
                        <i class="el-icon-plus"></i>
                    </div>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row  >
                <el-col :span="6">
                  <el-form-item label="伤残证件号码" label-width="110px">
                    <el-input v-model="form.伤残证件号码"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="负伤时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.负伤时间" ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="负伤地点">
                    <el-input v-model="form.负伤地点"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="负伤时所在部队" label-width="120px">
                    <el-input v-model="form.负伤时所在部队"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row  >
                <el-col :span="8">
                  <el-form-item label="评残时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.评残时间" ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否精神病评残" label-width="120px"  >
                    <el-select v-model="form.是否精神病评残" >
                      <el-option label="是" value="1"></el-option>
                      <el-option label="否" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="是否职业病评残" label-width="120px" >
                    <el-select v-model="form.是否职业病评残" >
                      <el-option label="矽肺" value="1"></el-option>
                      <el-option label="参试" value="2"></el-option>
                      <el-option label="其他" value="3"></el-option>
                      <el-option label="否" value="4"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row  >
                <el-col :span="6">
                  <el-form-item label="是否配置辅助器具" label-width="120px">
                    <el-select v-model="form.是否配置辅助器具" >
                      <el-option label="假肢" value="1"></el-option>
                      <el-option label="矫形器" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4" style="padding:0px 5px">
                    <el-select size="mini" v-model="form.假肢" >
                      <el-option label="假肢" value="1"></el-option>
                      <el-option label="装饰性假手" value="2"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="5" style="padding:0px 5px">
                    <el-select size="mini" v-model="form.移动辅助器械" >
                      <el-option label="移动辅助器械" value="1"></el-option>
                      <el-option label="助形器（室内型）" value="2"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="4" style="padding:0px 5px">
                    <el-select size="mini" v-model="form.假肢" >
                      <el-option label="假肢" value="1"></el-option>
                      <el-option label="装饰性假手" value="2"></el-option>
                    </el-select>
                </el-col>
                <el-col :span="5" style="padding:0px 5px">
                    <el-select size="mini" v-model="form.生活类辅助器械" >
                      <el-option label="生活类辅助器械" value="1"></el-option>
                      <el-option label="耳背助听器" value="2"></el-option>
                    </el-select>
                </el-col>
              </el-row>
              <el-row  >
                <el-col :span="6">
                  <el-form-item label="配置时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.配置时间" ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="孤老情况">
                    <el-select v-model="form.孤老情况1" >
                      <el-option label="是" value="1"></el-option>
                      <el-option label="否" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="原服务单位">
                    <el-input v-model="form.原服务单位6"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="供养情况">
                    <el-select v-model="form.供养情况3" >
                      <el-option label="分散供养" value="1"></el-option>
                      <el-option label="集中供养" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row  >
                <el-col :span="6">
                  <el-form-item label="供养单位">
                    <el-select v-model="form.供养单位7" >
                      <el-option label="荣康医院" value="1"></el-option>
                      <el-option label="复退军人精神病院" value="2"></el-option>
                      <el-option label="复退军人慢性病疗养院" value="3"></el-option>
                      <el-option label="综合性优抚医院" value="4"></el-option>
                      <el-option label="光荣院" value="5"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="供养地址">
                    <el-input v-model="form.供养地址6"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="伤残变动时间">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.伤残变动时间" ></el-date-picker>
                  </el-form-item>
                </el-col>
                <el-col :span="6">
                  <el-form-item label="变动伤残等级">
                    <el-select v-model="form.变动伤残等级">
                      <el-option label="1级" value="1"></el-option>
                      <el-option label="2级" value="2"></el-option>
                      <el-option label="3级" value="3"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
              </el-row>
              <el-row  >
                <el-col :span="7">
                  <el-form-item label="变动伤残证件" label-width="120px">
                  <div class="imgzp">
                      <i class="el-icon-plus"></i>
                  </div>
                  </el-form-item>
                </el-col>
              </el-row>
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
      isjz:false,
      issh:false,
      isccjr:false,
      check_gzrenyuan:[],
      form:{
        check_grtsah:[],
        jizl_detail:[]
      }
    }
  },
  watch:{
    check_gzrenyuan(newVal,oldVal){
          console.log(newVal,oldVal)
          if(newVal.indexOf("军队转业干部")>-1)
          {
            this.isjz=true;
            this.activeName="10"
          }else{
            this.isjz=false;
          }
          if(newVal.indexOf("“三红”人员")>-1)
          {
            this.issh=true;
            this.activeName="10"
          }else{
            this.issh=false;
          }
          if(newVal.indexOf("伤残军人")>-1)
          {
            this.isccjr=true;
            this.activeName="10"
          }else{
            this.isccjr=false;
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

      },
      validate:function(e)
      {
      console.log(e)
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./BasicInformation1.scss";
</style>
