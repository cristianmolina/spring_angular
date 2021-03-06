import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { PaginainicioComponent } from './views/paginainicio/paginainicio.component';

import { AppRoutingModule } from './app.routing.module';
import { ProductoService } from './providers/producto.service';
import { CatalogoComponent } from './views/catalogo/catalogo.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
import { PedidoComponent } from './views/pedido/pedido.component';
import { ProductoComponent } from './views/producto/producto.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PaginainicioComponent,
    CatalogoComponent,
    ProductoComponent,
    PedidoComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
