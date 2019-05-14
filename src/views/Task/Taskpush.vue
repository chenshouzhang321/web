<template>
  <div class="ImCollection common-content">
    <div class="common-header">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="例行任务" name="first"></el-tab-pane>
        <el-tab-pane label="重点任务" name="second"></el-tab-pane>
    </el-tabs>
    </div>
    <div class="common-main">
      <div class="common-header" style="text-align:right;border-bottom: 1px solid #f0f0f0;">
        <el-button
          @click="add"
          icon="el-icon-plus"
          size="mini"
          >
          新建任务
        </el-button>
      </div>
      <el-table
          :data="tableData"
          stripe
          size="mini"
          style="width: 100%">
          </el-table-column>
          <el-table-column
            prop="rwmc"
            label="任务名称">
          </el-table-column>
          <el-table-column
            prop="lb"
            label="类别">
            <template slot-scope="scope">
                <span v-if="activeName=='first'">例行任务</span>
                <span v-if="activeName=='second'">重点任务</span>
              </template>
          </el-table-column>
          <el-table-column
            prop="create"
            label="创建时间">
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
  name: 'ExcellentsupportIndex',
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
          create: '2019-03-04',
        }, {
        rwmc: '春节走访慰问',
        create: '2019-02-04',
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
          this.$router.push({path: '/task/addtask'});
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
