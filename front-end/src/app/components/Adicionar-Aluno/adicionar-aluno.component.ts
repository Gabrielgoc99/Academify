import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { toISOFormat } from 'src/app/helpers/func';

@Component({
  selector: 'app-adicionar-aluno',
  templateUrl: './adicionar-aluno.component.html',
  styleUrls: ['./adicionar-aluno.component.css']
})
export class AdicionarAlunoComponent implements OnInit {

  aluno: Aluno = new Aluno();
  private routeSub: Subscription = new Subscription();
  isLoading: boolean = false;
  error: any = null;

  date = new Date();
  serializedDate = new FormControl(null);

  constructor(private route: ActivatedRoute,
    private alunoService : AlunoService,
    private _location: Location,
    private _snackBar: MatSnackBar
    ) { }

    ngOnInit(): void {
    }

    onClickCancel(): void {
      this._location.back();
    }

    setDateForm(newDate: Date): void {
      this.date = newDate;
      this.serializedDate = new FormControl(newDate.toISOString());
    }

    onClickCreate(): void {
      this.isLoading = false;

      if (this.aluno) {
        this.aluno.id = Math.random();
        this.aluno.dataHoraCadastro = toISOFormat(new Date());
        this.alunoService.create(this.aluno)
        .subscribe({
          next: (data) => {
            this._snackBar.open("Aluno adicionado com sucesso!", "Ok");
          },
          error: (e) => {
            this.error = e;
            this._snackBar.open("Erro ao adicionar aluno, tente novamente!", "Ok");
          },
        }).add(() => {
          if (this.error == null) {
            this.onClickCancel();
          } else {
            this.isLoading = true;
          }
        });
      }
    }

    onChangeFormDate(event: MatDatepickerInputEvent<Date>): void {
      if (this.aluno && event.value) {
        this.aluno = {
          ...this.aluno,
          nascimento: event.value.toLocaleDateString("pt-BR")
        }
      }
    }
}
