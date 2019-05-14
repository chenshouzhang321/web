<template>
  <div class="Addressbook common-content">
    <div class="common-header">
        <el-form ref="form" label-width="70px"  :model="form" style="width:100%;margin-top:10px;padding:5px 20px 20px 0px">
            <el-row :gutter="10">
                <el-col :span="12">
                  <el-form-item label="">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                </el-col>

                <el-col :span="12">
                    <el-button icon="el-icon-search">智能搜索</el-button>
                </el-col>
            </el-row>
            <div v-if="showHightSearch">
            <el-row :gutter="10">
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
            <el-row :gutter="10" >
                <el-col :span="8">
                  <el-form-item label="月份">
                    <el-select v-model="form.月份">
                      <el-option label="1月" value="1"></el-option>
                      <el-option label="2月" value="2"></el-option>
                      <el-option label="3月" value="3"></el-option>
                      <el-option label="4月" value="4"></el-option>
                      <el-option label="5月" value="5"></el-option>
                      <el-option label="6月" value="6"></el-option>
                      <el-option label="7月" value="7"></el-option>
                      <el-option label="8月" value="8"></el-option>
                      <el-option label="9月" value="9"></el-option>
                      <el-option label="10月" value=10"></el-option>
                      <el-option label="11月" value="11"></el-option>
                      <el-option label="12月" value="12"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="类别">
                    <el-select v-model="form.类别">
                      <el-option label="工兵" value="1"></el-option>
                      <el-option label="现役军人家属" value="2"></el-option>
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
            </el-row>
            <el-row :gutter="10" >
                <el-col :span="8">
                  <el-form-item label="是否培训">
                    <el-select v-model="form.是否培训">
                      <el-option label="是" value="1"></el-option>
                      <el-option label="否" value="2"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
                <el-col :span="8">
                  <el-form-item label="军龄">
                    <el-select v-model="form.军龄">
                      <el-option label="3" value="3"></el-option>
                      <el-option label="4" value="4"></el-option>
                      <el-option label="5" value="5"></el-option>
                      <el-option label="6" value="6"></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
            </el-row>
          </div>
        </el-form>
    </div>
    <div class="common-main">
      <el-row>
          <el-col :span="6" style="border-right:1px solid #f0f0f0;padding:10px">
            <el-tree :data="data"   node-key="id"
  :default-expanded-keys="[1]" :props="defaultProps"></el-tree>
          </el-col>
          <el-col :span="18">
              <el-table
                  :data="tableData"
                  stripe
                  size="mini"
                  style="width: 100%">
                  <el-table-column
                    prop="xh"
                    label="序号"
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
                    prop="sjh"
                    label="手机号">
                  </el-table-column>
                  <el-table-column
                    prop="zw"
                    label="职务">
                  </el-table-column>
                  <el-table-column
                    prop="bmmc"
                    label="部门名称">
                  </el-table-column>
                  <el-table-column
                    prop="gh"
                    label="固定电话">
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
          </el-col>
      </el-row>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Addressbook',
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
          xm: '张三',
          xb:'男',
          sjh:'13809009988',
          zw:'科员',
          bmmc:'服务中心',
          gh:'034-99998888'
        }, {
          xh: '2',
          xm: '张三',
          xb:'男',
          sjh:'13809009988',
          zw:'科员',
          bmmc:'服务中心',
          gh:'034-99998888'
        }, {
          xh: '3',
          xm: '张三',
          xb:'男',
          sjh:'13809009988',
          zw:'科员',
          bmmc:'服务中心',
          gh:'034-99998888'
        }, {
          xh: '4',
          xm: '张三',
          xb:'男',
          sjh:'13809009988',
          zw:'科员',
          bmmc:'服务中心',
          gh:'034-99998888'
        },
        {
         xh: '5',
         xm: '张三',
         xb:'男',
         sjh:'13809009988',
         zw:'科员',
         bmmc:'服务中心',
         gh:'034-99998888'
       }
        ],

        data: [{
            label: '退役军人事业厅',
            id:1,
            children: [
            {label: '机构人事管理处'},
            {label: '政策法规管理处'},
            {label: '思想政治和权益维护管理处'},
            {label: '政策法规管理处'},
            {label: '服务中心'}
              ]
          }],
          defaultProps: {
            children: 'children',
            label: 'label'
          }
    }
  },
  methods:{
      changeHightSearchState:function()
      {
          this.showHightSearch=!this.showHightSearch;
      },
      add:function()
      {
          this.$router.push({path: '/workbenches/insuranceconnectionDetail'});
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped>
  //  @import "./index.scss";
</style>
