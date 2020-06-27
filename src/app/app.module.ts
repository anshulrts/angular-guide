import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './first-component/first-component.component';
import { PropertyAndEventBindingComponentComponent } from './property-and-event-binding-component/property-and-event-binding-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    PropertyAndEventBindingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
