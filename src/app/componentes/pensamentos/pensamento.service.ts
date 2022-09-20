import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PensamentoService {
  constructor(private http: HttpClient) {}

  private readonly API = 'http://localhost:3000/pensamentos';

  public listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API);
  }

  public criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.http.post<Pensamento>(this.API, pensamento);
  }

  public excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.delete<Pensamento>(url);
  }

  public buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`;
    return this.http.get<Pensamento>(url);
  }

  public editar(pensamento: Pensamento): Observable<Pensamento> {
    const url = `${this.API}/${pensamento.id}`;
    return this.http.put<Pensamento>(url, pensamento);
  }
}
