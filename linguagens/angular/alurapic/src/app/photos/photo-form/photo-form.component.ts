import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo/photo.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;
  file!: File;

  constructor(
    private fb: FormBuilder,
    private photoService: PhotoService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.construirForm()
  }

  construirForm() {
    this.photoForm = this.fb.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    })
  }

  validate(name: string, error: string): boolean {
    const nameHasError = this.photoForm.get(name)?.hasError(error);
    return nameHasError ? nameHasError : false;
  }

  upload() {
    const dados = this.photoForm.getRawValue();
    dados.file = this.file;
    this.photoService.upload(dados.description, dados.allowComments, dados.file)
      .subscribe(() => this.router.navigate(['']));

  }

  // @ts-ignore
  saveFile(event) {
    this.file = event.target.files[0];
  }

}
