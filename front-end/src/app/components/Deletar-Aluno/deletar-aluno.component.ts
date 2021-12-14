import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { ListarAlunoComponent } from '../Listar-Aluno/listar-aluno.component';

@Component({
  selector: 'app-confirm-delete-student',
  templateUrl: './deletar-aluno.component.html',
  styleUrls: ['./deletar-aluno.component.css']
})
export class DeletarAlunoComponent implements OnInit {

  error: any = null;

  constructor(
    public dialogRef: MatDialogRef<ListarAlunoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Aluno,
    private studentService : AlunoService,
    private _snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

  dismissModal(): void {
    this.dialogRef.close();
  }

  onClickDelete(aluno: Aluno): void {
    this.studentService.delete(aluno)
      .subscribe({
        next: (data) => {
          this._snackBar.open("Aluno deletado!", "Ok");
        },
        error: (e) => {
          this.error = e;
          this._snackBar.open("Erro! Aluno não deletado!", "Ok");
        },
      }).add(() => {
        this.dialogRef.close();
      });
  }
}
