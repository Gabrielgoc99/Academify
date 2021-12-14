import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aluno } from '../models/aluno.model';
const baseUrl = 'http://localhost:8080/api/aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${baseUrl}/listar`);
  }

  getTotal(): Observable<number> {
    return this.http.get<number>(`${baseUrl}/getTotal`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get(`${baseUrl}/get/${id}`);
  }

  create(data: Aluno): Observable<any> {
    return this.http.post(`${baseUrl}/incluir`, data);
  }

  update(data: Aluno): Observable<any> {
    return this.http.put(`${baseUrl}/editar`, data);
  }

  delete(data: Aluno): Observable<any> {
    return this.http.post(`${baseUrl}/remover`, data);
  }
}
