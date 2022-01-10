import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PhotoService} from "../photo/photo.service";
import {Router} from "@angular/router";
import {AlertService} from "../../shared/components/alert/alert.service";
import {UserService} from "../../core/user/user.service";
import {HttpEvent, HttpEventType} from "@angular/common/http";
import {finalize} from "rxjs";

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.css']
})
export class PhotoFormComponent implements OnInit {

  photoForm!: FormGroup;
  file!: File;
  previewFile!: string;
  percentDone: number = 0;

  constructor(
    private fb: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
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
      .pipe(finalize(() => {
        this.router.navigate(['/user', this.userService.getUserName()]);
      }))
      .subscribe((event: HttpEvent<any>) => {
        if (event.type === HttpEventType.DownloadProgress) {
          this.percentDone = Math.round(100 * event.loaded / (event.total as number));
        } else if (event.type === HttpEventType.Response ){
          this.alertService.success('Upload complete!');
        }
      } , err => this.alertService.danger('Upload error!', true));
  }

  saveFile(event: any) {
    this.file = event.target.files[0];
    this.handleFile(this.file);
  }

  handleFile(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event: any) => this.previewFile = event.target.result;
  }

}
