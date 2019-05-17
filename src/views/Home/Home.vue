<template>
  <div class="Home common-content">
    <div class="common-header">
      <el-row>
        <el-col span="4">主页</el-col>
        <el-col span="20" style="text-align:right">登录人：王利民 | 登录时间：2019-05-04</el-col>
      </el-row>
    </div>
    <div class="common-main">
      <el-row class="summery">
        <el-col span="1.5"><img :src="imgUrl"></el-col>
          <el-col span="14" style="font-family: SourceHanSansSC-regular;font-size: 28px;font-weight: bold;color:#E51C23">山东省退役军人信息化应用中心</el-col>
      </el-row>
      <el-row style="width:100%;margin-top:5px;height:300px;padding-bottom:10px;border-bottom:1px solid #f0f0f0">
          <el-col span="4" style="border-right:1px solid #f0f0f0">
            <div class="zzbar">工作动态</div>
            <el-row class="zzrow" type="flex"  justify="center" align="middle">
              <el-col span="6" style="text-align:center"><span class="radiusicon"></span></el-col>
              <el-col span="12">部委工作动态</el-col>
              <el-col span="6">20条</el-col>
            </el-row>
            <el-row class="zzrow" type="flex"  justify="center" align="middle">
              <el-col span="6" style="text-align:center"><span class="radiusicon"></span></el-col>
              <el-col span="12">省级工作动态</el-col>
              <el-col span="6">10条</el-col>
            </el-row>
            <el-row class="zzrow" type="flex"  justify="center" align="middle">
              <el-col span="6" style="text-align:center"><span class="radiusicon"></span></el-col>
              <el-col span="12">市工作动态</el-col>
              <el-col span="6">25条</el-col>
            </el-row>
            <el-row class="zzrow" type="flex"  justify="center" align="middle">
              <el-col span="6" style="text-align:center"><span class="radiusicon"></span></el-col>
              <el-col span="12">县工作动态</el-col>
              <el-col span="6">25条</el-col>
            </el-row>
            <el-row type="flex"  justify="center" align="middle">
              <el-col span="12" style="text-align:center">待办</span></el-col>
              <el-col span="12" style="text-align:center">已办</el-col>
            </el-row>
            <el-row  type="flex"  justify="center" align="middle">
              <el-col span="12" style="text-align:center">15</span></el-col>
              <el-col span="12" style="text-align:center">122</el-col>
            </el-row>
          </el-col>
          <el-col span="20" >
            <div  :id="echartId" style="width:100%;height:300px;"></div>
          </el-col>
      </el-row >

        <el-row style="width:100%;height:300px;">

            <el-col span="12">
              <el-tabs v-model="activeName" @tab-click="handleClick">
              <el-tab-pane label="光荣牌悬挂" name="first"></el-tab-pane>
              <el-tab-pane label="困难救助" name="second"></el-tab-pane>
              <el-tab-pane label="保险接续" name="third"></el-tab-pane>
              <el-tab-pane label="就业创业" name="fourth"></el-tab-pane>
            </el-tabs>
              <div :id="chartId4" style="width:100%;height:300px;"></div>
            </el-col>
            <el-col span="12" style="border-left:1px solid #f0f0f0">
                <div :id="chartId2" style="width:100%;height:300px;"></div>
            </el-col>

        </el-row>
      <el-row style="width:100%;overflow:hidden;height:300px;padding-top:10px;border-top:1px solid #f0f0f0">
          <el-col span="6">
            <div :id="chartId3" style="height:300px;"></div>
          </el-col>
          <el-col span="18" style="border-left:1px solid #f0f0f0">
              <div :id="chartId" style="width:100%;height:300px;"></div>
          </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import HighCharts from 'highcharts'
import highchartsMore from 'highcharts/highcharts-more';
import  'echarts/theme/shine.js'
import 'echarts/map/js/province/shandong.js';
  highchartsMore(HighCharts);
export default {
  name: 'Home',
  data () {
    return {
      activeName:'first',
      imgUrl:require("../../images/logo.jpg"),
      echartId:'echartId',
      chartId:'chartId1',
      chartId2:'chartId12',
      chartId3:'chartId13',
      chartId4:'chartId14',
      option:{
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: '柜台业务办理量'//表头文字
                    },
                    xAxis: {//x轴显示的内容
                        categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
　　　　　　　　　　　　　　　　　　　　　　　　plotbands:[{//可以显示一个方块，如果需要的话可以更改透明度和颜色
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　from:4.5,
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　to:6.5,
　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　color:'rgba(68,170,213,0)'//透明度和颜色
　　　　　　　　　　　　　　　　　　　　　　　　　　　　}]
                                                 },

                        yAxis: {//y轴显示的内容
                        title: {
                            text: '人数'
                        }
                    },
                    plotOptions: {
                        line: {
                            dataLabels: {
                                enabled: true // 开启数据标签
                            },
                            enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                        }
                    },
                    series: [{//两条数据
                        name: '退伍军人',
                        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
                    }]
                },
                option2:{
	chart: {
		type: 'column'
	},
	title: {
		text: ''
	},
	xAxis: {
		categories: ['德州市','枣庄市','临沂市','日照市','潍坊市','烟台市','威海市', '济南市', '青岛市', '聊城市', '滨州市','莱芜市','泰安市','济宁市','荷泽市']
	},
	yAxis: {
		allowDecimals: false,
		min: 0,
		title: {
			text: '光荣牌悬挂'
		}
	},
	tooltip: {
		formatter: function () {
			return '<b>' + this.x + '</b><br/>' +
				this.series.name + ': ' + this.y + '<br/>' +
				'总量: ' + this.point.stackTotal;
		}
	},
	plotOptions: {
		column: {
			stacking: 'normal'
		}
	},
	series: [{
		name: '总量',
		data: [5, 3, 4, 7, 2,5, 3, 4, 7, 2,5, 3, 4, 7, 2,1],
		stack: 'male' // stack 值相同的为同一组
	}, {
		name: '完成量',
		data: [3, 4, 4, 2, 5,3, 4, 4, 2, 5,3, 4, 4, 2, 5,1],
		stack: 'male'
	}]
},

        option3:{
	chart: {
		polar:true,
		type: 'line'
	},
	title: {
		text: '主要诉求统计',
		x: -80
	},
	pane: {
		size: '80%'
	},
	xAxis: {
		categories: ['就业', '创业', '生活', '住房',
					 '医疗', '养老','教育','其它'],
		tickmarkPlacement: 'on',
		lineWidth: 0
	},
	yAxis: {
		gridLineInterpolation: 'polygon',
		lineWidth: 0,
		min: 0
	},
	tooltip: {
		shared: true,
		pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
	},
	legend: {
		align: 'right',
		verticalAlign: 'top',
		y: 70,
		layout: 'vertical'
	},
	series: [{
		name: '就业',
		data: [400, 300, 200, 100, 50, 10],
		pointPlacement: 'on'
	}, {
		name: '创业',
		data: [800, 500, 200, 100, 50, 10],
		pointPlacement: 'on'
	}]
},


    }

  },
  mounted() {
      var self=this;
      window.setTimeout(function(){
        HighCharts.chart(self.chartId, self.option)
        HighCharts.chart(self.chartId4, self.option2)

        var colors = HighCharts.getOptions().colors,
    categories = [
      "来电",
      "来访",
      "网络留言",
      "转交待办",
      "来函"
    ],
    data = [
      {
        "y": 12.74,
        "color": colors[2],
        "drilldown": {
          "name": "来电1",
          "categories": [
            "来电 v65.0",
            "来电 v64.0",
            "来电 v63.0",
            "来电 v62.0",
            "来电 v61.0",
            "来电 v60.0",
            "来电 v59.0",
            "来电 v58.0",
            "来电 v57.0",
            "来电 v56.0",
            "来电 v55.0",
            "来电 v54.0",
            "来电 v51.0",
            "来电 v49.0",
            "来电 v48.0",
            "来电 v47.0",
            "来电 v43.0",
            "来电 v29.0"
          ],
          "data": [
            1,
            2,
            1,
            1,
            3
          ]
        }
      },
      {
        "y": 10.57,
        "color": colors[1],
        "drilldown": {
          "name": "来访",
          "categories": [
            "来访 v58.0",
            "来访 v57.0",
            "来访 v56.0",
            "来访 v55.0",
            "来访 v54.0",
            "来访 v52.0",
            "来访 v51.0",
            "来访 v50.0",
            "来访 v48.0",
            "来访 v47.0"
          ],
          "data": [
            1.02,
            7.36,
            0.35,
            0.11,
            0.1,
            0.95,
            0.15,
            0.1,
            0.31,
            0.12
          ]
        }
      },
      {
        "y": 7.23,
        "color": colors[0],
        "drilldown": {
          "name": "网络留言",
          "categories": [
            "网络留言 v11.0",
            "网络留言 v10.0",
            "网络留言 v9.0",
            "网络留言 v8.0"
          ],
          "data": [
            6.2,
            0.29,
            0.27,
            0.47
          ]
        }
      },
      {
        "y": 5.58,
        "color": colors[3],
        "drilldown": {
          "name": "转交待办",
          "categories": [
            "转交待办 v11.0",
            "转交待办 v10.1",
            "转交待办 v10.0",
            "转交待办 v9.1",
            "转交待办 v9.0",
            "转交待办 v5.1"
          ],
          "data": [
            3.39,
            0.96,
            0.36,
            0.54,
            0.13,
            0.2
          ]
        }
      },
      {
        "y": 4.02,
        "color": colors[5],
        "drilldown": {
          "name": "来函",
          "categories": [
            "来函 v16",
            "来函 v15",
            "来函 v14",
            "来函 v13"
          ],
          "data": [
            2.6,
            0.92,
            0.4,
            0.1
          ]
        }
      }
    ],
    browserData = [],
    versionsData = [],
    i,
    j,
    dataLen = data.length,
    drillDataLen,
    brightness;
  // Build the data arrays
  for (i = 0; i < dataLen; i += 1) {
    // add browser data
    browserData.push({
      name: categories[i],
      y: data[i].y,
      color: data[i].color
    });
    // add version data
    drillDataLen = data[i].drilldown.data.length;
    for (j = 0; j < drillDataLen; j += 1) {
      brightness = 0.2 - (j / drillDataLen) / 5;
      versionsData.push({
        name: data[i].drilldown.categories[j],
        y: data[i].drilldown.data[j],
        color: HighCharts.Color(data[i].color).brighten(brightness).get()
      });
    }
  }
          HighCharts.chart(self.chartId2, {
    chart: {
      type: 'pie'
    },
    title: {
      text: '信访'
    },
    yAxis: {
      title: {
        text: 'Total percent market share'
      }
    },
    plotOptions: {
      pie: {
        shadow: false,
        center: ['50%', '50%']
      }
    },
    tooltip: {
      valueSuffix: '%'
    },
    series: [{
      name: 'Browsers',
      data: browserData,
      size: '30%',
      dataLabels: {
        formatter: function () {
          return this.y > 5 ? this.point.name : null;
        },
        color: '#ffffff',
        distance: -30
      }
    }, {
      name: 'Versions',
      data: versionsData,
      size: '80%',
      innerSize: '60%',
      dataLabels: {
        formatter: function () {
          // display only if larger than 1
          return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
            this.y + '%' : null;
        }
      },
      id: 'versions'
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 400
        },
        chartOptions: {
          series: [{
            id: 'versions',
            dataLabels: {
              enabled: false
            }
          }]
        }
      }]
    }
  })
        HighCharts.chart(self.chartId3, self.option3);
        let myChart = self.$echarts.init(document.getElementById(self.echartId),'shine');

        var optionU = {
    title : {
        text: '',
        subtext: ''
    },
    tooltip : {
        trigger: 'item'
    },
    legend: {
        x:'right',
        selectedMode:false,
        data:['济南市','德州市','青岛市']
    },
    dataRange: {
        orient: 'horizontal',
        min: 0,
        max: 55000,
        text:['高','低'],           // 文本，默认为数值文本
        splitNumber:0
    },
    toolbox: {
        show : true,
        orient: 'vertical',
        x:'right',
        y:'center',
        feature : {
            mark : {show: true},
            dataView : {show: false, readOnly: false}
        }
    },
    series : [
        {
            name: '退伍军人分布',
            type: 'map',
            mapType: '山东',
            mapLocation: {
                x: 'left'
            },
            selectedMode : 'multiple',
            itemStyle:{
                normal:{label:{show:true}},
                emphasis:{label:{show:true}}
            },
            data:[
                {name:'德州市', value:605.83, selected:true},
                {name:'济南市', value:1670.44, selected:true},
                {name:'青岛市', value:2102.21, selected:true},
                {name:'聊城市', value:2522.66},
                {name:'滨州市', value:5020.37},
                {name:'淄博市', value:5701.84},
                {name:'莱芜市', value:6610.05},
                {name:'泰安市', value:8893.12},
                {name:'济宁市', value:10011.37},
                {name:'荷泽市', value:6610.83},
                {name:'枣庄市', value:11237.55},
                {name:'临沂市', value:11307.28},
                {name:'日照市', value:11702.82},
                {name:'潍坊市', value:11720.87},
                {name:'烟台市', value:12512.3},
                {name:'威海市', value:12582},

            ]
        },
        {
            name:'退伍军人分布',
            type:'pie',
            roseType : 'area',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            center: [document.getElementById('echartId').offsetWidth - 250, 225],
            radius: [30, 120],
            data:[
                {name: '德州市', value: 16251.93},
                {name: '济南市', value: 19195.69},
                {name: '青岛市', value: 53210.28}
            ]
        }
    ],
    animation: false
};
      console.log(111)
      myChart.setOption(optionU);

      myChart.on("mapselectchanged", function (param){
    var selected = param.batch[0].selected;

    var mapSeries = optionU.series[0];
    var data = [];
    var data1=[];

    var legendData = [];
    var name;
    for (var p = 0, len = mapSeries.data.length; p < len; p++) {
        name = mapSeries.data[p].name;
        //mapSeries.data[p].selected = selected[name];
        if(mapSeries.data[p].name==param.batch[0].name)
        {
          mapSeries.data[p].selected=!mapSeries.data[p].selected;
        }
        if (selected[name]) {
            data.push({
                name: name,
                value: mapSeries.data[p].value
            });
            legendData.push(name);
        }
    }
    optionU.legend.data = legendData;
    optionU.series[0].data = mapSeries.data;
    optionU.series[1].data = data;
    myChart.setOption(optionU, true);
    });
      },500)

        },
  methods:{
      changeSetpState:function()
      {
        if (this.active++ > 0) this.active = 0;
      },
      handleClick:function(tab, event) {
        var u=parseInt(tab.index)
        var _option2=JSON.parse(JSON.stringify(this.option2));
        _option2.series.map(item=>{
            item.data.map(iu=>{
              return iu+u;
            })
        })
        _option2.yAxis.title.text=tab.label;
        HighCharts.chart(this.chartId4, _option2)
       console.log(tab, event);
     }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./Home.scss";
</style>
