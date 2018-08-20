import { environment } from '../../../environments/environment';
import {Producto} from '../../model/producto';
import {ProductoService} from '../../providers/producto.service';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  title = 'Diligencie su Pedido';
  logo = require('../../../assets/images/logo.png');
  //environment.baseUrlAssets + 'images/logo.png';
  private productos$: Observable<Producto[]>;

  profileForm = this.fb.group({
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    tipoDocumento: ['', Validators.required],
    identificacion: ['', Validators.required],
    direccion: ['', Validators.required],
    fecha: ['', Validators.required]
  });

  constructor(private productoService: ProductoService, private fb: FormBuilder) {}

  ngOnInit() {
    this.productos$ = this.productoService.getProductos();
  }

  getProductosSeleccionados() {
    return this.productoService.getProductosSeleccionados();
  }

  count() {
    return this.productoService.countSeleccionados();
  }

  suma() {
    return this.productoService.precioTotalProductosSeleccionados();
  }

}
