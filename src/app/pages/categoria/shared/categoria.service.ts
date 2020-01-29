import { Injectable, Injector } from '@angular/core';
import { Categoria } from './categoria.model';
import { BaseResourceService } from 'src/app/shared/services/base-resource.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService extends BaseResourceService<Categoria> {

  constructor(protected injector: Injector) {
    super('api/categorias', injector, Categoria.fromJson);
   }
}