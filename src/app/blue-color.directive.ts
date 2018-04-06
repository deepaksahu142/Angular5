import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appBlueColor]'
})
export class BlueColorDirective {

  constructor(elemRef: ElementRef) {
    elemRef.nativeElement.style.color = 'green';
  }

}
