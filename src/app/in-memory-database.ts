import { InMemoryDbService } from 'angular-in-memory-web-api';
import { from } from 'rxjs';
import { Categoria } from './pages/categoria/shared/categoria.model';
import { Entry } from './pages/entries/shared/entry.module';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        const categorias: Categoria[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa'},
            {id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
            {id: 3, name: 'Lazer', description: 'Cinema, parque, praias'},
            {id: 4, name: 'Sálario', description: 'Recebimento de sálario'},
            {id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'},
        ];

        const entries: Entry[] = [
            {id: 1, name: 'Gás de Cozinha', categoryId: categorias[0].id, category: categorias[0], paid: true, date: '14/10/2018', amount: '70,80', type: 'expense', description: 'Qualquer descrição para essa despesa'} as Entry,
            {id: 2, name: 'Suplementos', categoryId: categorias[1].id, category: categorias[1], paid: true, date: '14/10/2018', amount: '15,80', type: 'expense', description: 'Qualquer descrição para essa despesa'} as Entry,
            {id: 3, name: 'Sálario da Empresa X', categoryId: categorias[4].id, category: categorias[4], paid: true, date: '01/10/2018', amount: '3000,80', type: 'revenue', description: 'Qualquer descrição para essa despesa'} as Entry
        ];

        return { categorias, entries };
    }

}