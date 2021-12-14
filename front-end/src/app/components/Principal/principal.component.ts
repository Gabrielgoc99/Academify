import { Component, OnInit } from '@angular/core';
import { AlunoService } from 'src/app/services/aluno.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  isLoading: boolean = false;
  error: any = null;
  totalAlunos: number = 0;

  constructor(private alunoService : AlunoService) {
    this.getTotalAlunos();
  }

  getTotalAlunos(): void {
    this.isLoading = true;

    this.alunoService.getTotal()
      .subscribe({
        next: (data) => {
          this.totalAlunos = data;
        },
        error: (e) => this.error = e,
      }).add(() => {
        this.isLoading = false;
      });
  }

  ngOnInit(): void {
  }

}
