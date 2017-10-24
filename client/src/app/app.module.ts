import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { ContatoComponent } from './contato/contato.component';
import { ContatoService } from './contato/contato.service';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
     ModalModule.forRoot()
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
