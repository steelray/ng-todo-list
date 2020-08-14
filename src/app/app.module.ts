import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminGuardService } from '@core/service/guard/admin.guard';
import { GuestGuardService } from '@core/service/guard/guest.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AdminGuardService, GuestGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
