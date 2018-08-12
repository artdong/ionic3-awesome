import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage({name: 'page-echart-pie'})
@Component({
  selector: 'page-echart-pie',
  templateUrl: 'echart-pie.html'
})
export class EchartPiePage {
  option: object;

  constructor() {
    this.option = {
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
            {value: 335, name: '直接访问'},
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
  }

  ionViewWillEnter() {
    // this.drawPieChart();
  }

  // drawPieChart() {
  //   const pieChart = echarts.init(this.element.nativeElement.querySelector('#pieChart'));
  //   const option = {
  //     title: {
  //       text: 'Pie Chart',
  //       x: 'center'
  //     },
  //     tooltip: {
  //       trigger: 'item',
  //       formatter: '{a} <br/>{b} : {c} ({d}%)'
  //     },
  //     legend: {
  //       orient: 'vertical',
  //       left: 'left',
  //       data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
  //     },
  //     label: {
  //       normal: {
  //         formatter: '{b}:{c}: ({d}%)',
  //         textStyle: {
  //           fontWeight: 'normal',
  //           fontSize: 15
  //         }
  //       }
  //     },
  //     // label: {  // 饼图图形上的文本标签
  //     //   normal: {
  //     //     show: true,
  //     //     position: 'inner', // 标签的位置
  //     //     textStyle: {
  //     //       fontWeight: 300,
  //     //       fontSize: 16    // 文字的字体大小
  //     //     },
  //     //     formatter: '{d}%'
  //     //   }
  //     // },
  //     series: [
  //       {
  //         name: '',
  //         type: 'pie',
  //         radius: '55%',
  //         center: ['50%', '60%'],
  //         data: [
  //           {value: 335, name: '直接访问'},
  //           {value: 310, name: '邮件营销'},
  //           {value: 234, name: '联盟广告'},
  //           {value: 135, name: '视频广告'},
  //           {value: 1548, name: '搜索引擎'}
  //         ],
  //         itemStyle: {
  //           emphasis: {
  //             shadowBlur: 10,
  //             shadowOffsetX: 0,
  //             shadowColor: 'rgba(0, 0, 0, 0.5)'
  //           }
  //         }
  //       }
  //     ]
  //   };
  //   pieChart.setOption(option);
  // }
}
