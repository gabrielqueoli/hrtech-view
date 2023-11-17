import { Component } from '@angular/core';

@Component({
  selector: 'app-tela-holerites',
  templateUrl: './tela-holerites.component.html',
  styleUrls: ['./tela-holerites.component.css']
})
export class TelaHoleritesComponent {

}

document.addEventListener('DOMContentLoaded', function () {
    const selectYear = document.getElementById('selectYear');
    const meses = document.querySelectorAll('.mes');
    const limparSelecao = document.getElementById('limparSelecao');
    const selecionarTudo = document.getElementById('selecionarTudo');
    const mesesSelecionados = document.querySelector('.meses-selecionados');
    const visualizarHolerites = document.getElementById('visualizarHolerites');
    const gerarPDF = document.getElementById('gerarPDF');

    // Adicione a lógica interativa conforme necessário
});
