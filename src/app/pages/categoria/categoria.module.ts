import { NgModule } from '@angular/core';

import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';
import { CategoriaFormComponent } from './categoria-form/categoria-form.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoriaListComponent, CategoriaFormComponent],
  imports: [
    SharedModule,
    CategoriaRoutingModule,
  ]
})
export class CategoriaModule { }
