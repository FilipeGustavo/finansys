import { Component, OnInit, Injector } from '@angular/core';
import { CategoriaService } from '../shared/categoria.service';
import { Categoria } from '../shared/categoria.model';
import { BaseResourceListComponent } from 'src/app/shared/components/base-resource-list/base-resource-list.component';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent extends BaseResourceListComponent<Categoria> {

  constructor(private categoryService: CategoriaService)
               {
                super(categoryService);
               }
}
