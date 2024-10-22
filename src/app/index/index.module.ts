import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { IndexRoutingModule } from './index.routing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    IndexRoutingModule,
    SlickCarouselModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class IndexModule { }
