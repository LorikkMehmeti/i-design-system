import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { popperVariation, TippyModule, tooltipVariation } from '@ngneat/helipopper';
import { TOOLTIP_VARIATION } from './shared/utilities/constants';
import { DropdownTriggerForDirective } from './shared/directives/dropdown-trigger.directive';
import { DropdownComponent } from './shared/components/dropdown/dropdown.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ReversePipe } from './shared/pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    AccordionItemComponent,
    BreadcrumbComponent,
    DropdownTriggerForDirective,
    DropdownComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    HttpClientModule,
    OverlayModule,
    AngularSvgIconModule.forRoot(),
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: {...tooltipVariation, ...TOOLTIP_VARIATION},
        popper: popperVariation,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
