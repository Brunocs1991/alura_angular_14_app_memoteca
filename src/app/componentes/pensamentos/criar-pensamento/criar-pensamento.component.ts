import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.scss'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    autoria: 'Dev',
    modelo: 'modelo1',
  };

  constructor() {}

  ngOnInit(): void {}

  criarPensamento() {
    alert('Novo pensamento criado');
  }
  cancelar() {
    alert('Evento cancelado');
  }
}
