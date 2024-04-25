import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProtoAppComponent } from './proto-app/proto-app.component';
import { ProtoAppHeaderComponent } from './proto-app/proto-app-header/proto-app-header.component';
import { ProtoAppBodyComponent } from './proto-app/proto-app-body/proto-app-body.component';
import { ProtoAppFooterComponent } from './proto-app/proto-app-footer/proto-app-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProtoAppComponent,
    ProtoAppHeaderComponent,
    ProtoAppBodyComponent,
    ProtoAppFooterComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
