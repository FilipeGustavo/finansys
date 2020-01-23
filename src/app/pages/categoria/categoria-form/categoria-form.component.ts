import { Component, OnInit, AfterContentChecked } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Categoria } from '../shared/categoria.model';
import { CategoriaService } from '../shared/categoria.service';
import { switchMap } from 'rxjs/operators';
import toastr from 'toastr';
import { error } from 'util';



@Component({
  selector: 'app-categoria-form',
  templateUrl: './categoria-form.component.html',
  styleUrls: ['./categoria-form.component.scss']
})
export class CategoriaFormComponent implements OnInit, AfterContentChecked {

  currentAction: string;
  categoryForm: FormGroup;
  pageTitle: string;
  serverErrorMessages: string[] = null;
  submittingForm: boolean = false;
  category: Categoria = new Categoria();

  constructor(
    private categoryService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
  }

  ngAfterContentChecked() {
    this.setPageTitle();
  }

  submitForm() {
    this.submittingForm = true;

    if (this.currentAction === 'new') {
      this.createCategory();
    } else {
      this.updateCategory();
    }
  }

  private createCategory() {
    const category: Categoria = Object.assign(new Categoria(), this.categoryForm.value);

    this.categoryService.create(category).subscribe(
      res => this.actionsForSuccess(res),
      error => this.actionsForError(error)
    );
  }

  private updateCategory() {
    const category: Categoria = Object.assign(new Categoria(), this.categoryForm.value);
    this.categoryService.update(category).subscribe(
      res => this.actionsForSuccess(res),
      error => this.actionsForError(error)
    );
  }

  private actionsForSuccess(category: Categoria) {
    toastr.success('Solicitação processada com sucesso.');

    this.router.navigateByUrl('categorias', { skipLocationChange: true }).then(
      () => this.router.navigate(['categorias', category.id, 'edit'])
    );
  }

  private actionsForError(error: any) {
    toastr.error('Ocorreu um erro ao processar a sua solicitação');

    this.submittingForm = false;

    if (error.status === 422) {
      this.serverErrorMessages = JSON.parse(error._body).errors;
    } else {
      this.serverErrorMessages = ['Falha na comunicação com o servidor. Por favor tente mais tarde.'];
    }
  }

  setPageTitle() {
    if (this.currentAction === 'new') {
      this.pageTitle = 'Cadastrar Nova Categoria';
    } else {
      this.pageTitle = 'Editar Categoria';
    }
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
    } else {
      this.currentAction = 'edit';
    }
  }

  private buildCategoryForm() {
    this.categoryForm = this.formBuilder.group({
      id: [null],
      name: [null, [Validators.required, Validators.minLength(2)]],
      description: [null]
    });
  }

  private loadCategory() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(params => this.categoryService.getById(+params.get('id')))
      ).subscribe(
        (category) => {
          this.category = category;
          this.categoryForm.patchValue(category); // binds loaded category data to categoryForm
        },
        (error) => alert('Ocorreu um erro no servidor, tente mais tarde.')
      );
    }
  }

}
