import {
  AfterViewChecked, Component, ContentChildren, ElementRef, Input,
  QueryList
} from '@angular/core';
import {AlphaCellComponent} from './alpha-cell';
import {AlphaListComponent} from "./alpha-list";

@Component({
    selector: 'ion-alpha-section',
    template: `
      <div class="alpha-section" [class.alpha-section-current]="_current">
            <!-- group-->
            <div class="alpha-section-index" >
              {{index}}
            </div>

            <!--分组下的详细内容-->
            <div class="alpha-section-main">
              <ng-content>

              </ng-content>
            </div>
        </div>
    `,
  styles: [`
    .alpha-section-index{
      margin: 0;
      padding: 2px 10px 2px 10px;
      background-color: #f4f4f4;
      /*border-bottom: 1px solid #dedede;*/
    }

    .alpha-section-main{
      /*border-bottom: 1px solid #dedede;*/
    }

    .alpha-section-current .alpha-section-index{
        position: sticky;
        position: -webkit-sticky;
        top: 0px;
        left: 0px;
        width: 100%;
        z-index: 3;
        transform: translateZ(0px);
    }
  `]
})
export class AlphaSectionComponent implements AfterViewChecked {

  _current=false;

  @Input() index: string;

  @ContentChildren(AlphaCellComponent) _listOfAlphaCell: QueryList<AlphaCellComponent>;

  constructor(public elementRef: ElementRef) { }

  getElementRef():ElementRef{
    return this.elementRef;
  }

  ngAfterViewChecked(): void {
  }

}
