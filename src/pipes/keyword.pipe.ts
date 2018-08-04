import { Pipe, Injectable, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'keyword'
})
@Injectable()
export class KeywordPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(val: string, keyword: string): any {
    const Reg = new RegExp(keyword, 'i');
    if (val) {
      const res = val.replace(Reg, `<span style="color: red;">${keyword}</span>`);
      console.log(res);
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}
