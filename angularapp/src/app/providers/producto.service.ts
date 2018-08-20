import {environment} from '../../environments/environment';
import {Producto} from '../model/producto';
import {PRODUCTOS_MOCK} from './productos-mock';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { isUndefined } from 'util';

@Injectable()
export class ProductoService {

  private urlbase = environment.urlbase;
  private urlProductos = 'productos';
  private productosSubject = new BehaviorSubject([]);
  private productosServer: Producto[];

  constructor(private http: HttpClient) {}

  getProductos(): Observable<Producto[]> {
    return this.productosSubject.asObservable();
  }

  private refresh() {
    // Emitir los nuevos valores para que todos los que dependan se actualicen.
    this.productosSubject.next(this.productosServer);
  }

  loadData() {
    if (environment.usemock) {
      this.productosServer = PRODUCTOS_MOCK;
    } else {
      this.loadDataServer()
    }
    this.refresh();
  }

  loadDataServer() {
    this.http
      .get<Producto[]>(this.urlbase + this.urlProductos).
      subscribe(res => {
        this.productosServer = res;
        this.refresh();
      });
  }

  countSeleccionados() {
    return this.getProductos()
      .map(productos => {
        const seleccionados = isUndefined(productos) ? [] : productos.filter(prod => prod.seleccionado);
        return seleccionados.length;
      });
  }

  getProductosSeleccionados() {
    return this.getProductos()
      .map(productos => {
        return  isUndefined(productos) ? productos : productos.filter(prod => prod.seleccionado);
      });
  }

  precioTotalProductosSeleccionados() {
    return this.getProductos()
      .map(productos => {
        return isUndefined(productos) ? 0 : productos.filter(prod => prod.seleccionado).reduce((a, prod) => a + prod.precio, 0);
      });
  }

}
