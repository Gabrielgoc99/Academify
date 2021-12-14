import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarAlunoComponent } from './components/Adicionar-Aluno/adicionar-aluno.component';
import { AlunoTableComponent } from './components/Aluno-Table/aluno-table.component';
import { ListarAlunoComponent } from './components/Listar-Aluno/listar-aluno.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DeletarAlunoComponent } from './components/Deletar-Aluno/deletar-aluno.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PrincipalComponent } from './components/Principal/principal.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { FooterComponent } from './components/Footer/footer.component';
import {MatToolbarModule} from "@angular/material/toolbar";

@NgModule({
  declarations: [
    AppComponent,
    AdicionarAlunoComponent,
    AlunoTableComponent,
    ListarAlunoComponent,
    DeletarAlunoComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent, PrincipalComponent, NavbarComponent]
})
export class AppModule { }
