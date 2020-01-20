import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../shared/categoria.service';
import { Categoria } from '../shared/categoria.model';
import { error } from 'protractor';

@Component({
  selector: 'app-categoria-list',
  templateUrl: './categoria-list.component.html',
  styleUrls: ['./categoria-list.component.scss']
})
export class CategoriaListComponent implements OnInit {

  categories: Categoria[] = [];

  constructor(private categoryService: CategoriaService) { }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      res => this.categories = res,
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteCategory(categoria: any) {

    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.categoryService.delete(categoria.id).subscribe(
        () => this.categories = this.categories.filter(x => x !== categoria),
        error => alert('Erro ao tentar excluir categoria')
      );
    }
  }

}
