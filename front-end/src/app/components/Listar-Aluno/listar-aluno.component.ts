import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/models/aluno.model';
import {MatDialog} from '@angular/material/dialog';
import {AlunoService} from '../../services/aluno.service'
import { DeletarAlunoComponent } from '../Deletar-Aluno/deletar-aluno.component';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataHoraCadastro', 'matricula', 'nascimento', 'nome', 'actions'];

  dataSource: Aluno[] = [];
  error: any = null;
  isLoading: boolean = false;

  constructor(private alunoService : AlunoService, public dialog: MatDialog) {
    this.getAlunos();
  }

  getAlunos(): void {
    this.isLoading = true;

    this.alunoService.getAll()
      .subscribe({
        next: (data) => {
          this.dataSource = data;
        },
        error: (e) => this.error = e,
      }).add(() => {
        this.isLoading = false;
      });
  }

  openDialog(aluno: Aluno): void {
    const dialogRef = this.dialog.open(DeletarAlunoComponent, {
      width: '30rem',
      data: aluno
    });

    dialogRef.afterClosed().subscribe(result => {
      this.getAlunos();
    });
  }

  ngOnInit(): void {
  }
}
