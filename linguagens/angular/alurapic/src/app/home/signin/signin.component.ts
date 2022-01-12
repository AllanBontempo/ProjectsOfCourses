import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../core/auth/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, AfterViewInit {

  fromUrl!: string;
  loginForm!: FormGroup;
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.buildForm();
    this.getQueryParams();
  }

  ngAfterViewInit() {
    this.platformDetectorService.isPlatformBrowser() &&
    this.userNameInput.nativeElement.focus();
  }

  login() {
    const userName = this.loginForm.controls['userName'].value;
    const password = this.loginForm.controls['password'].value;

    this.authService.authenticate(userName, password)
      .subscribe(() => {
          this.fromUrl ? this.router.navigateByUrl(this.fromUrl)
            : this.router.navigate(['user', userName]);
        },
        (err) => {
          console.log(err);
          this.loginForm.reset();
          alert('Invalid user name or password!');
          this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
        });
  }

  buildForm() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  validate(name: string): boolean {
    const nameHasError = this.loginForm.get(name)?.hasError('required');
    return nameHasError ? nameHasError : false;
  }

  getQueryParams(): void {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.fromUrl = params['fromUrl'];
      });
  }


}
