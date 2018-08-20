import {Producto} from '../../model/producto';
import {ProductoService} from '../../providers/producto.service';
import {Component, OnInit, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatalogoComponent implements OnInit {

  constructor(private productoService: ProductoService) {}

  ngOnInit() {

  }

  getProductos() {
    return this.productoService.getProductos();
  }

}
