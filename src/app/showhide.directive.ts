import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
	selector: '[show-hide]',
	host: {
		'(mouseover)' : 'mouseover()',
		'(mouseout)' : 'mouseout()'
	}
})
export class ShowHideDirective {
	constructor(private el: ElementRef, private renderer: Renderer) {};

	mouseover() {
		this.el.nativeElement.lastElementChild.style.display = 'block';
	}

	mouseout() {
		this.el.nativeElement.lastElementChild.style.display = 'none';
	}

}