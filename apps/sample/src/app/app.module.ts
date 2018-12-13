import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { AX_ENVIRONMENT } from '@alium/core';
import { environment } from './../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@alium/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule, AuthModule, BrowserModule, NxModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    /** ENVIRONMENT */
    { provide: AX_ENVIRONMENT, useValue: environment }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
