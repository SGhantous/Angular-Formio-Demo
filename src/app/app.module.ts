import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './core/components/components.module';
import { FormioAppConfig } from '@formio/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [
    { provide: FormioAppConfig, useValue: {
      appUrl: 'https://example.form.io',
      apiUrl: 'https://api.form.io'
    }},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
