import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
