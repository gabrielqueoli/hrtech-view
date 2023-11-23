import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-holerite',
  templateUrl: './pagina-holerite.component.html',
  styleUrls: ['./pagina-holerite.component.css']
})
export class PaginaHoleriteComponent {
  mesesSelecionados: string[] = [];
  anoSelecionado!: number | null;

  meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  selecionarMes(mes: string) {
    if (!this.mesesSelecionados.includes(mes)) {
      this.mesesSelecionados.push(mes);
    } else {
      this.mesesSelecionados = this.mesesSelecionados.filter(item => item !== mes);
    }
  }

  selecionarTodos() {
    this.meses.forEach(mes => {
      if (!this.mesesSelecionados.includes(mes)) {
        this.mesesSelecionados.push(mes);
      }
    });

    if (this.anoSelecionado !== null && !this.mesesSelecionados.includes(this.anoSelecionado.toString())) {
      this.mesesSelecionados.push(this.anoSelecionado.toString());
    }
  }

  limparSelecao() {
    this.mesesSelecionados = [];
    this.anoSelecionado = null;
  }

  onChangeAnoSelecionado(event: any) {
    this.anoSelecionado = event.target.value !== '' ? parseInt(event.target.value, 10) : null;
  }
}