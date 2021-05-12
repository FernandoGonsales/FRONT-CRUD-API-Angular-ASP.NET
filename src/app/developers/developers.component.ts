import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Developer } from '../models/Developer';
import { DevelopersService } from './developers.service';


@Component({
  selector: 'app-developers',
  templateUrl: './developers.component.html',
  styleUrls: ['./developers.component.css']
})
export class DevelopersComponent implements OnInit {

  public developerForm: FormGroup;
  public title = 'Desenvolvedores';
  public developerSelected: Developer;
  public developers: Developer[];
  public modo = 'post';

  constructor(private fb: FormBuilder,
              private developerService: DevelopersService) { 
    this.formGroup();
  }

  ngOnInit() {
    this.loadDevelopers();
  }

  loadDevelopers() {
    this.developerService.getAll().subscribe(
      (developers: Developer[]) => {
        this.developers = developers;
      },
      (erro: any) => {
        console.error(erro);
      }
    );
  }

  formGroup() {
    this.developerForm = this.fb.group({
      id: [''],
      nome: ['', Validators.required],
      sexo: ['', Validators.required],
      idade: ['', Validators.required],
      hobby: ['', Validators.required],
      dataNascimento: ['', Validators.required]
    });
  }

  saveDeveloper(developer: Developer) {
    (developer.id === 0) ? this.modo = 'post' : this.modo = 'put';

    this.developerService[this.modo](developer).subscribe(
    (retorno: Developer) => {
      console.log(retorno);
      this.loadDevelopers();
    },
    (erro: any) => {
      console.log(erro);
    }
    );
  }

  deleteDeveloper(id: number) {
    this.developerService.delete(id).subscribe(
      (model: any) => {
        console.log(model)
        this.loadDevelopers();
      },
      (erro: any) => {
        console.error(erro)
      }
    );
  }

  developerSubmit() {
    this.saveDeveloper(this.developerForm.value);
  }

  developerSelect(developer: Developer) {
    this.developerSelected = developer;
    this.developerForm.patchValue(developer);
  }

  newDeveloper() {
    this.developerSelected = new Developer();
    this.developerForm.patchValue(this.developerSelected);
  }

  voltar() {
    this.developerSelected = null;
  }

}
