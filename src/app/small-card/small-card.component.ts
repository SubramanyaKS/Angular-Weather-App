import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    styleUrls: ['./small-card.component.css'],
    standalone: false
})
export class SmallCardComponent{
  @Input()
  title!: string;
  @Input()
  value!: string;
  @Input()
  className!:string;
}
