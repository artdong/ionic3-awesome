import { Component, ElementRef, Input, SimpleChanges } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as echarts from 'echarts';

@Component({
  selector: 'echart',
  templateUrl: 'echart.html'
})
export class EchartComponent {

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
    const eChart = echarts.init(this.element.nativeElement.querySelector('#eChart'));
    eChart.setOption(option);
  }
}
