import { Component, ElementRef } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import * as echarts from 'echarts';

@IonicPage({name: 'page-echarts'})
@Component({
  selector: 'page-echarts',
  templateUrl: 'echarts.html'
})
export class EchartsPage {
  pie_option: object;
  column_option: object;
  line_option: object;
  bar_option: object;
  pieChart: any;

  constructor(private element: ElementRef) {
    let that = this;
    window.onresize = function() {
      that.pieChart.resize();
    };
  }

  ionViewWillEnter() {
    this.pie_option = {
      title: {
        text: 'Pie Chart',
        x: 'center'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
      },
      label: {
        normal: {
          formatter: '{b}:{c}: ({d}%)',
          textStyle: {
            fontWeight: 'normal',
            fontSize: 15
          }
        }
      },
      // label: {  // 饼图图形上的文本标签
      //   normal: {
      //     show: true,
      //     position: 'inner', // 标签的位置
      //     textStyle: {
      //       fontWeight: 300,
      //       fontSize: 16    // 文字的字体大小
      //     },
      //     formatter: '{d}%'
      //   }
      // },
      series: [
        {
          name: '',
          type: 'pie',
          radius: '55%',
          center: ['50%', '60%'],
          data: [
            {value: 335, name: '二维码（可跳转）', url: 'page-qrcode', params: {userId: 100001}},
            {value: 310, name: '邮件营销'},
            {value: 234, name: '联盟广告'},
            {value: 135, name: '视频广告'},
            {value: 1548, name: '搜索引擎'}
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    this.column_option = {
      title: {text: 'Column Chart'},
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }],
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          // 每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组
          color: (params) => {
            let colorList = ['#4f81bd', '#c0504d', '#9bbb59', '#604a7b', '#948a54', '#e46c0b'];
            return colorList[params.dataIndex];
          }
        }
      }
    };
    this.line_option = {
      title: {
        text: 'Line Chart'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['邮件营销', '联盟广告', '搜索引擎']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
      },
      label: {
        normal: {
          show: true,
          position: 'top'
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '邮件营销',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
          name: '联盟广告',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
          name: '搜索引擎',
          type: 'line',
          stack: '总量',
          data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
    this.bar_option = {
      title: {
        text: 'Bar Chart',
        subtext: ''
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        data: ['2011年', '2012年']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        data: ['巴西', '印尼', '美国', '印度', '中国', '世界人口(万)']
      },
      label: {
        normal: {
          show: true,
          position: 'right'
        }
      },
      series: [
        {
          name: '2011年',
          type: 'bar',
          data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '2012年',
          type: 'bar',
          data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
      ]
    };
    this.drawPieEchart(this.pie_option);
  }

  drawPieEchart(option) {
    this.pieChart = echarts.init(this.element.nativeElement.querySelector('#pieChart'));
    this.pieChart.setOption(option);
    this.pieChart.off('click');
    this.pieChart.on('click', (params) => {
       console.log('params: ' + JSON.stringify(params.data));
    });
  }
}
