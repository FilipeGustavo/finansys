import { InMemoryDbService } from 'angular-in-memory-web-api';
import { from } from 'rxjs';
import { Categoria } from './pages/categoria/shared/categoria.model';

export class InMemoryDatabase implements InMemoryDbService {

    createDb() {
        const categorias: Categoria[] = [
            {id: 1, name: 'Moradia', description: 'Pagamentos de contas da casa'},
            {id: 2, name: 'Saúde', description: 'Plano de saúde e remédios'},
            {id: 3, name: 'Lazer', description: 'Cinema, parque, praias'},
            {id: 4, name: 'Sálario', description: 'Recebimento de sálario'},
            {id: 5, name: 'Freelas', description: 'Trabalhos como freelancer'},
        ];

        return { categorias };
    }

}