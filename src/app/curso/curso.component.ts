import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Curso } from './curso';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  // URL base
  url = "http://localhost/api/php/";

  vetor!:Curso[];

  curso = new Curso();

  constructor(private http: HttpClient, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.selecao();
  }

  cadastro() {
    this.cursoService.cadastrarCurso(this.curso).subscribe(
      (res:Curso[]) => {

        this.vetor = res;
        this.curso.nomeCurso;
        this.curso.valorCurso;

        this.selecao();

      }
    )
  }

  selecao() {
    this.cursoService.obterCursos().subscribe(
      (res: Curso[]) => {
        this.vetor = res;
      }
    )
  }

  alterar(): void {
    alert("alterar")
  }

  remover(): void {
    alert("remover")
  }

}
