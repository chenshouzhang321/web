<template>
  <div class="addSupervisioninspection common-content">
    <div class="common-header">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="日常任务" name="first"></el-tab-pane>
        <el-tab-pane label="重点任务" name="second"></el-tab-pane>
        <el-tab-pane label="临时任务" name="third"></el-tab-pane>
      </el-tabs>
    </div>
    <div class="common-main">
      <div class="common-header" style="text-align:right">
      <el-form ref="form" label-width="40px"  :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
          <el-row :gutter="10">
              <el-col :span="12">
                <el-form-item label="">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12" style="text-align:left">
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
            prop="rwmc"
            label="任务名称">
          </el-table-column>
          <el-table-column
            prop="dx"
            label="对象">
          </el-table-column>
          <el-table-column
            prop="lb"
            label="类别">
            <template slot-scope="scope">
                <span v-if="activeName=='first'">例行任务</span>
                <span v-if="activeName=='second'">重点任务</span>
                <span v-if="activeName=='third'">临时任务</span>
              </template>
          </el-table-column>
          <el-table-column
            prop="create"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="zt"
            label="进行中">
          </el-table-column>
          <el-table-column
            prop="chaozuo"
            label="操作"
            width="200"
            >
            <template slot-scope="scope">
                <el-button
                  @click="add"
                  size="small">
                  督查
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
        :small="true"
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
  name: 'addSupervisioninspection',
  data () {
    return {
      activeName: 'first',
      form:{
        zhi1:30,
        zhi2:40,
        大于:"2",
        小于:"2",
        lx:"1"
      },
      showHightSearch:false,
      tableData: [{
          rwmc: '八一走访慰问',
          dx:'济南市',
          xh:1,
          zt:'进行中',
          create: '2019-03-04',
        }, {
        rwmc: '春节走访慰问',
        create: '2019-02-04',
        dx:'青岛市',
        xh:2,
        zt:'进行中',
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
          this.$router.push({path: '/task/addSupervisioninspection'});
      },
      handleClick:function(tab, event) {
        console.log(this.activeName)
        console.log(tab, event);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  //  @import "./index.scss";
</style>
