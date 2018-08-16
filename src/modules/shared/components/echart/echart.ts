import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as echarts from 'echarts';

@Component({
  selector: 'echart',
  templateUrl: 'echart.html'
})
export class EchartComponent {
  eChart: any;

  constructor(private navCtrl: NavController,
              private element: ElementRef) {
  }

  @Input() option;

  ngAfterViewInit() {
    if (this.option) {
      this.drawEchart(this.option);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('option' in changes) {
      if (this.option) {
        this.drawEchart(this.option);
      }
    }
  }

  drawEchart(option) {
    this.eChart = echarts.init(this.element.nativeElement.querySelector('#eChart'));
    this.eChart.setOption(option);
    this.eChart.off('click');
    this.eChart.on('click', (params) => {
      console.log('params: ' + JSON.stringify(params.data));
      if (params.data.url) {
        this.navCtrl.push(params.data.url);
      }
    });
  }
}
