import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ion-alpha-cell',
    template: `
      <div class="alpha-cell">
        <div class="alpha-cell-item">
          <ng-content></ng-content>
        </div>
      </div>
    `,
    styles: [`
      .alpha-cell{
        background-color: #fff;
        padding-left:10px
      }

      .alpha-cell-item{
        box-sizing: border-box;
        color: inherit;
        min-height: 40px;
        display: block;
        overflow: hidden;
        position: relative;
        text-decoration: none;
        border-bottom: 1px solid #F2F4F7;
        width: 100%;
        display: flex;
        align-items: center;
      }
    `]
})
export class AlphaCellComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
