import { Component, Injector } from '@angular/core';
import { Validators } from '@angular/forms';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';
import { BaseResourceFormComponent } from 'src/app/shared/components/base-resource-form/base-resource-form.component';

@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent extends BaseResourceFormComponent<Categoria> {

  constructor(
    protected categoryService: CategoriaService,
    protected injector: Injector
  ) {
    super(injector, new Categoria(), categoryService, Categoria.fromJson);
  }

  protected buildResourceForm() {
    this.resourceForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  protected creatingPageTitle(): string {
    return 'Cadastro de Nova Categoria';
  }

  protected editionPageTitle(): string {
    return 'Edição de Categoria';
  }
}