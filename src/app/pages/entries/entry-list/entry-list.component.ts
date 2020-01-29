import { Component, OnInit } from '@angular/core';
import { EntryService } from '../shared/entry.service';
import { Entry } from '../shared/entry.model';
import { error } from 'protractor';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.scss']
})
export class EntryListComponent implements OnInit {

  entries: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit() {
    this.entryService.getAll().subscribe(
      res => this.entries = res.sort((a, b) => b.id - a.id),
      error => alert('Erro ao carregar a lista')
    );
  }

  deleteEntry(entry: any) {

    const mustDelete = confirm('Deseja realmente excluir este item?');

    if (mustDelete) {
      this.entryService.delete(entry.id).subscribe(
        () => this.entries = this.entries.filter(x => x !== entry),
        error => alert('Erro ao tentar excluir entry')
      );
    }
  }

}
