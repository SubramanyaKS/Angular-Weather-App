import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-small-card',
    templateUrl: './small-card.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent{
  @Input()
  title!: string;
  @Input()
  value!: string;
  @Input()
  className!:string;
}
