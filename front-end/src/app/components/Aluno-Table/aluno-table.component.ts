import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Aluno } from 'src/app/models/aluno.model';
import { AlunoService } from 'src/app/services/aluno.service';
import {FormControl} from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'app-aluno-table',
  templateUrl: './aluno-table.component.html',
  styleUrls: ['./aluno-table.component.css'],
})
export class AlunoTableComponent implements OnInit {

  aluno?: Aluno = undefined;
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
    this.routeSub = this.route.params.subscribe(params => {
      this.getAlunoById(params['id']);
    });
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

  getAlunoById(id: number): void {
    this.isLoading = true;

    this.alunoService.getById(id)
      .subscribe({
        next: (data) => {
          this.aluno = data;

          const newDate = new Date(data.nascimento ?? new Date());

          this.setDateForm(newDate);
        },
        error: (e) => {
          this.error = e;
          this._snackBar.open("Erro ao buscar!", "Ok");
        },
      }).add(() => {
        this.isLoading = false;
      });
  }

  onClickCancel(): void {
    this._location.back();
  }

  setDateForm(newDate: Date): void {
    this.date = newDate;
    this.serializedDate = new FormControl(newDate.toISOString());
  }

  onClickUpdate(): void {
    this.isLoading = false;

    if (this.aluno) {
      this.alunoService.update(this.aluno)
      .subscribe({
        next: (data) => {
          this._snackBar.open("Edição de Aluno Concluída!", "Ok");
        },
        error: (e) => {
          this.error = e;
          this._snackBar.open("Erro ao Editar Aluno, tente novamente!", "Ok");
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

  onChangeForm(type: keyof Aluno, event: Event): void {
    const input = event.target as HTMLInputElement;

    if (this.aluno) {
      this.aluno = {
        ...this.aluno,
        [type]: input.value
      }
    }
  }

  onChangeFormDate(event: MatDatepickerInputEvent<Date>): void {
    if (this.aluno && event.value) {
      this.aluno = {
        ...this.aluno,
        nascimento: event.value.toLocaleDateString("en-US")
      }
    }
  }
}
