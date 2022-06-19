import { UiModule } from './ui/ui.module';
import { AdminModule } from './admin/admin.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AdminModule, UiModule],
  providers: [
    { provide: 'baseUrl', useValue: 'https://localhost:5001/api', multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
