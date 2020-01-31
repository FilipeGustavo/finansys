import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

import { RelatorioRoutingModule } from './relatorio-routing.module';
import { RelatorioComponent } from './relatorio/relatorio.component';


@NgModule({
  declarations: [RelatorioComponent],
  imports: [
    SharedModule,
    RelatorioRoutingModule,
  ]
})
export class RelatorioModule { }
