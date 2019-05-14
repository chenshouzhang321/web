<template>
  <div class="ImCollection common-content">
    <div class="common-header">
        <el-form ref="form" label-width="40px"  :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
            <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item label="">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-button icon="el-icon-search">智能搜索</el-button>
                    <el-button v-if="!showHightSearch" @click="changeHightSearchState" icon="el-icon-arrow-down" >高级搜索</el-button>
                    <el-button v-if="showHightSearch" @click="changeHightSearchState" icon="el-icon-arrow-up" >高级搜索</el-button>
                </el-col>
            </el-row>
            <el-row :gutter="10" v-if="showHightSearch">
                <el-col :span="4">
                  <el-form-item label="">
                    <el-select v-model="form.lx">
                      <el-option label="年龄" value="1"></el-option>
                      <el-option label="出生日期" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="">
                    <el-select v-model="form.大于">
                      <el-option label=">" value="1"></el-option>
                      <el-option label=">=" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="">
                      <el-input v-model="form.zhi1"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="">
                    <el-select v-model="form.小于">
                      <el-option label="<" value="1"></el-option>
                      <el-option label="<=" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="4">
                  <el-form-item label="">
                      <el-input v-model="form.zhi2"></el-input>
                  </el-form-item>
                </el-col>
            </el-row>
        </el-form>
    </div>
    <div class="common-main">
      <div class="common-header" style="text-align:right;border-bottom: 1px solid #f0f0f0;">
        <el-button
          @click="add"
          icon="el-icon-plus"
          size="mini"
          >
          新增
        </el-button>
        <el-button
        size="mini"
          >
          导出
        </el-button>
        <el-button
        size="mini"
          >
          导入
        </el-button>
      </div>
      <el-table
          :data="tableData"
          stripe
          size="mini"
          style="width: 100%">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="xh"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="zp"
            label="照片"
            width="50">
            <template slot-scope="scope">
              <img class="userImg" :src="imgUrl" />
              </template>
          </el-table-column>
          <el-table-column
            prop="xm"
            width="80"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="xb"
            width="50"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="sfzh"
            label="身份证号">
          </el-table-column>
          <el-table-column
            prop="rylb"
            label="人员类别">
          </el-table-column>
          <el-table-column
            prop="cjrq"
            label="采集日期">
          </el-table-column>
          <el-table-column
            prop="sqzt"
            label="申请状态">
          </el-table-column>
          <el-table-column
            prop="ryzt"
            label="人员状态">
          </el-table-column>
          <el-table-column
            prop="chaozuo"
            label="操作"
            width="200"
            >
            <template slot-scope="scope">
                <el-button
                  size="small">
                  删除
                </el-button>
                <el-button
                  size="small">
                  打印
                </el-button>
              </template>
          </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :small="true"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400">
        </el-pagination>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImCollection',
  data () {
    return {
      imgUrl:require('../../images/user.png'),
      form:{
        zhi1:30,
        zhi2:40,
        大于:"1",
        小于:"2",
        lx:"1"
      },
      showHightSearch:false,
      tableData: [{
          xh: '1',
          zp: '',
          xm: '王小虎',
          xb:'男',
          sfzh:'330928382387444',
          rylb:'人员类别',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          ryzt:'正常'
        }, {
          xh: '2',
          zp: '',
          xm: '王小虎',
          xb:'男',
          sfzh:'330928382387444',
          rylb:'人员类别',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          ryzt:'正常'
        }, {
          xh: '3',
          zp: '',
          xm: '王小虎',
          xb:'男',
          sfzh:'330928382387444',
          rylb:'人员类别',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          ryzt:'正常'
        }, {
          xh: '4',
          zp: '',
          xm: '王小虎',
          xb:'男',
          sfzh:'330928382387444',
          rylb:'人员类别',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          ryzt:'正常'
        }]
    }
  },
  methods:{
      changeHightSearchState:function()
      {
          this.showHightSearch=!this.showHightSearch;
      },
      add:function()
      {
          this.$router.push({path: '/imCollection/basicInformation'});
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./index.scss";
</style>
