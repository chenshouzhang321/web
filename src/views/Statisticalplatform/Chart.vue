<template>
  <div class="Home common-content">
    <div class="common-header">图表</div>
    <div class="common-main">
    <el-row style="width:100%;height:300px;" >
        <el-col span="12" style="border-right:1px solid #f0f0f0">
          <div :id="chartId2" style="width:100%;height:300px;"></div>
        </el-col>
        <el-col span="12">
          <div :id="chartId3" style="width:100%;height:300px;"></div>
        </el-col>
    </el-row>
      <el-row style="width:100%;height:500px;border-top: 2px solid rgb(240, 240, 240);">
          <el-col span="24" style="border-right:1px solid #f0f0f0">
            <div :id="chartId" style="width:100%;height:500px;"></div>
          </el-col>
      </el-row>
      <el-row style="width:100%;height:300px;border-top: 2px solid rgb(240, 240, 240);">
          <el-col span="24">
            <div :id="chartId4" style="width:100%;height:300px;"></div>
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
      imgUrl:require("../../images/user.png"),
      chartId:'chartId1',
      chartId2:'chartId12',
      chartId3:'chartId13',
      chartId4:'chartId14',
      option:{
                    chart: {
                        type: 'line'
                    },
                    title: {
                        text: '业务统计'//表头文字
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
                    		spacing : [40, 0 , 40, 0]
                    	},
                    	title: {
                    		floating:true,
                    		text: '17670'
                    	},
                    	tooltip: {
                    		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    	},
                    	series: [{
                    		type: 'pie',
                    		innerSize: '50%',
                    		name: '市场份额',
                    		data: [
                    			{name:'退役士兵',   y: 72},
                    			{name:'军队转干部',   y: 3},
                    			{name:'烈士遗属',   y: 1},
                    			{name:'残疾民兵民工',   y: 1},
                    			{name:'残疾军人',   y: 1},
                    			{name:'复员军人',   y: 1},
                    			{name:'三红',   y: 2},
                    			{name:'无军籍退休人员',   y: 2},
                    			{name:'军退离退休干部',   y: 2}
                    		]
                    	}]
            },

        option3:{
	chart: {
		polar:true,
		type: 'line'
	},
	title: {
		text: '主要困难统计',
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
option4:{
	chart: {
		type: 'bar'
	},
	title: {
		text: ' 各类人员情况'
	},
	xAxis: {
		categories: ['退休军人', '干部', '残惨人士', '烈士遗属', '三红'],
		title: {
			text: null
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: '人口总量 (个)',
			align: 'high'
		},
		labels: {
			overflow: 'justify'
		}
	},
	tooltip: {
		valueSuffix: ' 百万'
	},
	plotOptions: {
		bar: {
			dataLabels: {
				enabled: true,
				allowOverlap: true // 允许数据标签重叠
			}
		}
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'top',
		x: -40,
		y: 100,
		floating: true,
		borderWidth: 1,
		backgroundColor: '#FFFFFF',
		shadow: true
	},
	series: [{
		name: '2016 年',
		data: [107, 31, 635, 203, 2]
	}, {
		name: '2017 年',
		data: [133, 156, 947, 408, 6]
	}, {
		name: '2018 年',
		data: [973, 914, 4054, 732, 34]
	}]
}

    }

  },
  mounted() {
      var self=this;
      window.setTimeout(function(){
        HighCharts.chart(self.chartId, self.option)
        HighCharts.chart(self.chartId2, self.option2)
        HighCharts.chart(self.chartId3, self.option3)
        HighCharts.chart(self.chartId4, self.option4);
        let myChart = self.$echarts.init(document.getElementById(self.chartId),'shine');

        var option = {
    title : {
        text: '2011山东GDP（亿元）',
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
            dataView : {show: true, readOnly: false}
        }
    },
    series : [
        {
            name: '2011全国GDP分布',
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
            name:'2011全国GDP对比',
            type:'pie',
            roseType : 'area',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            center: [document.getElementById('chartId1').offsetWidth - 250, 225],
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
      myChart.setOption(option);
      myChart.on("mapselectchanged", function (param){
    var selected = param.batch[0].selected;

    var mapSeries = option.series[0];
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
    option.legend.data = legendData;
    option.series[0].data = mapSeries.data;
    option.series[1].data = data;
    myChart.setOption(option, true);
    });
      },1000)

        },
  methods:{
      changeSetpState:function()
      {
        if (this.active++ > 0) this.active = 0;
      }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "./Chart.scss";
</style>
