<template>
  <div class="ImCollection common-content">
    <div class="common-header">
        <el-form ref="form" label-width="40px"  :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
            <el-row :gutter="10">
                <el-col :span="18">
                  <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="6">
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
      <div class="common-header" style="text-align:right">
        <el-button
          @click="add"
          icon="el-icon-plus"
          >
          申请优扶
        </el-button>
        <el-button
          >
          Excel导出
        </el-button>
        <el-button
          >
          Excel导入
        </el-button>
      </div>
      <el-table
          :data="tableData"
          stripe
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
          </el-table-column>
          <el-table-column
            prop="xm"
            label="姓名">
          </el-table-column>
          <el-table-column
            prop="xb"
            label="性别">
          </el-table-column>
          <el-table-column
            prop="sfzh"
            label="身份证号">
          </el-table-column>
          <el-table-column
            prop="scjb"
            label="伤残级别">
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
            prop="fxje"
            label="抚恤金额">
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
console.log(555)
export default {
  name: 'ExcellentsupportIndex',
  data () {
    return {
      form:{
        zhi1:30,
        zhi2:40,
        大于:"2",
        小于:"2",
        lx:"1"
      },
      showHightSearch:false,
      tableData: [{
          xh: '1',
          zp: '',
          xm: '张三',
          xb:'男',
          sfzh:'330928382387444',
          scjb:'2级',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          fxje:'2000'
        }, {
          xh: '2',
          zp: '',
          xm: '张三',
          xb:'男',
          sfzh:'330928382387444',
          scjb:'2级',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          fxje:'2000'
        }, {
          xh: '3',
          zp: '',
          xm: '张三',
          xb:'男',
          sfzh:'330928382387444',
          scjb:'2级',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          fxje:'2000'
        }, {
          xh: '4',
          zp: '',
          xm: '张三',
          xb:'男',
          sfzh:'330928382387444',
          scjb:'2级',
          cjrq:'2019-03-04',
          sqzt:'审核中',
          fxje:'2000'
        },
        {
         xh: '5',
         zp: '',
         xm: '张三',
         xb:'男',
         sfzh:'330928382387444',
         scjb:'2级',
         cjrq:'2019-03-04',
         sqzt:'审核中',
         fxje:'2000'
       }
        ]
    }
  },
  methods:{
      changeHightSearchState:function()
      {
          this.showHightSearch=!this.showHightSearch;
      },
      add:function()
      {
          this.$router.push({path: '/workbenches/excellentSupportDetail'});
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  //  @import "./index.scss";
</style>
