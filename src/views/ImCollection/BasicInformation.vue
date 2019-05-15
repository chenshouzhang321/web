<template>
  <div class="BasicInformation common-content">
    <div class="common-header">基本信息</div>
    <div class="common-main">
      <el-container >
          <el-aside width="150px"  >
              <div class="imgCls">
                  <i class="el-icon-plus icon"></i>
              </div>
              <div style="text-align:center">近照</div>
          </el-aside>
          <el-container >
              <el-form ref="form" label-width="100px" size="mini" :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
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

                      <el-col :span="12">
                        <el-form-item label="证件类型">
                          <el-select v-model="form.zjlx" placeholder="证件类型">
                            <el-option label="身份证" value="1"></el-option>
                            <el-option label="其它证" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="证件号">
                          <el-input v-model="form.zhengjinhao" placeholder="18位数字"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row :gutter="10">
                      <el-col :span="6">
                        <el-form-item label="邮编">
                          <el-input v-model="form.yb"></el-input>
                        </el-form-item>
                      </el-col>
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
                        <el-form-item label="发证机关">
                          <el-select v-model="form.fzjg" placeholder="发证机关">
                            <el-option label="济南公安局" value="1"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="有效期">
                            <el-date-picker type="date" placeholder="选择日期" v-model="form.yxq" ></el-date-picker>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row :gutter="10">
                      <el-col :span="12">
                        <el-form-item label="户籍地址">
                          <el-input v-model="form.hjdz"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item label="居住地址">
                          <el-input v-model="form.jzdz"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row :gutter="10">
                      <el-col :span="6">
                        <el-form-item label="学历">
                          <el-select v-model="form.xueli" placeholder="学历">
                            <el-option label="本科生" value="1"></el-option>
                            <el-option label="博士生" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="学位">
                          <el-select v-model="form.xuewei" placeholder="学位">
                            <el-option label="博士" value="1"></el-option>
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
                        <el-form-item label="政治面貌">
                          <el-select v-model="form.zzmb">
                            <el-option label="中国共产党员" value="1"></el-option>
                            <el-option label="中国共青团员" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                  </el-row>

                  <el-row :gutter="10">
                      <el-col :span="8">
                        <el-form-item label="手机号">
                          <el-input v-model="form.sjh"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="家庭电话">
                          <el-input v-model="form.jtdh"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="工作电话">
                          <el-input v-model="form.gzdh"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>

                  <el-row :gutter="10">
                      <el-col :span="8">
                        <el-form-item label="QQ号">
                          <el-input v-model="form.qqh"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="微信号">
                          <el-input v-model="form.weixinh"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="电子邮箱">
                          <el-input v-model="form.email"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row :gutter="10" >
                      <el-col :span="8">
                        <el-form-item label="个人特殊爱好">
                          <el-input v-model="form.grtsah"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                      <el-form-item label-width="2px">
                      <el-checkbox-group v-model="form.check_grtsah">
                        <el-checkbox label="参战" name="type"></el-checkbox>
                        <el-checkbox label="参试(涉核)" name="type"></el-checkbox>
                        <el-checkbox label="参与重大任务" name="type"></el-checkbox>
                      </el-checkbox-group>
                      </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item label="参加工作时间">
                          <el-date-picker type="date" placeholder="选择日期" v-model="form.cjgzsj" ></el-date-picker>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <div class="title">类别信息</div>
                  <el-row :gutter="10" style="border:1px solid #f0f0f0;margin-bottom:20px;margin:0px 0px 20px 0px;">
                      <el-col :span="24">
                        <el-form-item label="">
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
                  <el-row :gutter="10">
                      <el-col :span="12" style="text-align:center">
                        全日制学历
                      </el-col>
                      <el-col :span="12" style="text-align:center">
                        继续教育学历
                      </el-col>
                  </el-row>
                  <el-row :gutter="10" style="margin-top:10px">
                      <el-col :span="12"  >
                          <el-row style="position:relative">
                            <el-col :span="12" >
                              <el-form-item label="开始日期">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.qr_data_start" ></el-date-picker>
                              </el-form-item>

                            </el-col>
                            <div class="imgzp">
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
                      <el-col :span="12" >
                        <el-row style="position:relative">
                          <el-col :span="12" >
                            <el-form-item label="开始日期">
                              <el-date-picker type="date" placeholder="选择日期" v-model="form.jx_data_start" ></el-date-picker>
                            </el-form-item>
                          </el-col>
                          <div class="imgzp">
                              <i class="el-icon-plus"></i>
                          </div>
                          </el-row >
                          <el-row >
                            <el-col :span="12" >
                              <el-form-item label="结束日期">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.jx_data_end" ></el-date-picker>
                              </el-form-item>
                            </el-col>
                          </el-row>
                          <el-row >
                            <el-col :span="12" >
                              <el-form-item label="教学机构">
                                <el-input v-model="form.jx_jxjg"></el-input>
                              </el-form-item>
                            </el-col>
                            <el-col :span="12" >
                              <el-form-item label="专业">
                                <el-input v-model="form.jx_zhuangye"></el-input>
                              </el-form-item>
                            </el-col>
                          </el-row>
                        </el-col>
                  </el-row>
                  <el-row :gutter="10">
                      <el-col :span="6">
                        <el-form-item label="住访状态">
                          <el-select v-model="form.region" placeholder="住访状态">
                            <el-option label="自建房" value="1"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="始建时间">
                          <el-date-picker type="date" placeholder="选择日期" v-model="form.sjsj" ></el-date-picker>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="面积">
                          <el-input v-model="form.mj"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="房屋架构">
                          <el-input v-model="form.fwjg"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row :gutter="10">
                      <el-col :span="8">
                        <el-form-item label="上年度家庭收入">
                          <el-select v-model="form.sqdjtsr" placeholder="上年度家庭收入">
                            <el-option label="20万以上" value="1"></el-option>
                            <el-option label="30万以上" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">&nbsp;</el-col>
                      <el-col :span="8">
                        <el-form-item label="上年度个人收入">
                          <el-select v-model="form.sqdjtsr" placeholder="上年度个人收入">
                            <el-option label="20万以上" value="1"></el-option>
                            <el-option label="30万以上" value="2"></el-option>
                          </el-select>
                        </el-form-item>
                      </el-col>
                      <el-col :span="4">&nbsp;</el-col>
                  </el-row>
                  <el-row :gutter="10">
                      <el-col :span="8">
                        <el-form-item label="享受社会救助">
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
                        <el-form-item label="个案帮扶主体">
                          <el-input v-model="form.个案帮扶主体"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="个案帮扶方式" label-width="150px">
                          <el-input v-model="form.个案帮扶方式"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="个案帮扶方式">
                          <el-input v-model="form.个案帮扶方式"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6">
                        <el-form-item label="帮扶金额">
                          <el-input v-model="form.帮扶金额"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>

                  <el-row :gutter="10">
                      <el-col :span="4">
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
                      <el-col :span="21">
                          <el-row :gutter="2">
                              <el-col :span="4">
                                <el-form-item label="视力残疾" label-width="70px">
                                  <el-select v-model="form.视力残疾" >
                                    <el-option label="无" value="1"></el-option>
                                    <el-option label="有" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="4">
                                <el-form-item label="听力残疾" label-width="70px">
                                  <el-select v-model="form.听力残疾" >
                                    <el-option label="无" value="1"></el-option>
                                    <el-option label="有" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="4">
                                <el-form-item label="语言残疾" label-width="70px">
                                  <el-select v-model="form.语言残疾" >
                                    <el-option label="无" value="1"></el-option>
                                    <el-option label="有" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="4">
                                <el-form-item label="肢体残疾" label-width="70px">
                                  <el-select v-model="form.肢体残疾" >
                                    <el-option label="无" value="1"></el-option>
                                    <el-option label="有" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="4">
                                <el-form-item label="智力残疾" label-width="70px">
                                  <el-select v-model="form.智力残疾" >
                                    <el-option label="无" value="1"></el-option>
                                    <el-option label="有" value="2"></el-option>
                                  </el-select>
                                </el-form-item>
                              </el-col>
                              <el-col :span="4">
                                <el-form-item label="精神残疾" label-width="70px">
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
                      <el-col :span="3" style="text-align:right">
                        残疾证件照片：
                      </el-col>
                      <el-col :span="21">
                          <el-row :gutter="15">
                              <el-col :span="4">
                                <div class="imgzp zjz">
                                    <i class="el-icon-plus"></i>
                                </div>
                              </el-col>

                          </el-row>
                      </el-col>
                  </el-row>

                  <el-row :gutter="2" style="margin-top:10px" type="flex"  justify="center" align="middle">
                      <el-col :span="3" style="text-align:right">
                        残疾证件号码：
                      </el-col>
                      <el-col :span="21">
                          <el-row :gutter="10">
                              <el-col :span="4">
                                <el-input size="mini" v-model="form.残疾证件号码1" ></el-input>
                              </el-col>

                          </el-row>
                      </el-col>
                  </el-row>

                  <el-row :gutter="2" style="margin-top:10px" type="flex"  justify="center" align="middle">
                      <el-col :span="3" style="text-align:right">
                        证件有效期：
                      </el-col>
                      <el-col :span="21">
                          <el-row :gutter="10">
                              <el-col :span="4">
                                <el-date-picker type="date" placeholder="选择日期" v-model="form.证件有效期1" ></el-date-picker>
                              </el-col>

                          </el-row>
                      </el-col>
                  </el-row>
                  <el-row :gutter="2" style="margin-top:10px" type="flex"  justify="center" align="middle">
                      <el-col :span="3" style="text-align:right">
                        是职业病评残：
                      </el-col>
                      <el-col :span="21">
                          <el-row :gutter="10">
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.是职业病评残1"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.是职业病评残2"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.是职业病评残3"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.是职业病评残4"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.是职业病评残5"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.是职业病评残6"></el-checkbox>
                              </el-col>
                          </el-row>
                      </el-col>
                  </el-row>

                  <el-row :gutter="2" style="margin-top:10px" type="flex"  justify="center" align="middle">
                      <el-col :span="3" style="text-align:right">
                        配置辅助器具：
                      </el-col>
                      <el-col :span="21">
                          <el-row :gutter="10">
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.配置辅助器具1"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.配置辅助器具2"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.配置辅助器具3"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.配置辅助器具4"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.配置辅助器具5"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.配置辅助器具6"></el-checkbox>
                              </el-col>
                          </el-row>
                      </el-col>
                  </el-row>
                  <el-row :gutter="2" style="margin-top:10px" type="flex"  justify="center" align="middle">
                      <el-col :span="3" style="text-align:right">
                        享受残疾人补贴：
                      </el-col>
                      <el-col :span="21">
                          <el-row :gutter="10">
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.享受残疾人补贴1"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.享受残疾人补贴2"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.享受残疾人补贴3"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.享受残疾人补贴4"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.享受残疾人补贴5"></el-checkbox>
                              </el-col>
                              <el-col :span="4" style="text-align:center">
                                <el-checkbox v-model="form.享受残疾人补贴6"></el-checkbox>
                              </el-col>
                          </el-row>
                      </el-col>
                  </el-row>

              </el-form>
          </el-container>
      </el-container>
      <el-row :gutter="2" style="padding:10px;border-top:1px solid #f0f0f0;">
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
  name: 'BasicInformation',
  data () {
    return {
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
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./BasicInformation.scss";
</style>
