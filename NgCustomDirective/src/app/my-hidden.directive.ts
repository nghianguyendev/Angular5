import { Directive, Renderer, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[myHidden]'
})
export class MyHiddenDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @Input() myHidden: boolean;

  ngOnInit() {
    // Use renderer to render the emelemt with styles
    console.log(this.myHidden)
    if (this.myHidden) {
      console.log('hide');
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    }
  }

}
