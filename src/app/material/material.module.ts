import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

const MaterialComponent = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatSlideToggleModule
];

@NgModule({
  
  imports: [MaterialComponent],
  exports:[MaterialComponent]
})
export class MaterialModule { }
