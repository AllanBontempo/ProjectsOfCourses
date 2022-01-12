import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserNotTakenValidatorService} from "./user-not-taken.validator.service";
import {NewUser} from "./new-user";
import {SignupService} from "./signup.service";
import {Router} from "@angular/router";
import {PlatformDetectorService} from "../../core/platform-detector/platform-detector.service";
import {userNamePassword} from "./username-password.validator";

@Component({
  selector: 'app-singup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit, AfterViewInit {

  signupForm!: FormGroup;
  @ViewChild('emailInput') emailInput!: ElementRef<HTMLInputElement>;

  constructor(
    private fb: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) {
  }

  ngOnInit(): void {
    this.construirForm();
  }

  ngAfterViewInit() {
    this.platformDetectorService.isPlatformBrowser() &&
    this.emailInput.nativeElement.focus();
  }

  construirForm() {
    this.signupForm = this.fb.group({
      userName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(30),
          Validators.pattern(/[a-z0-9_\-]+$/)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ]
      ],
      password: ['',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    },
      {
        validators: userNamePassword
      }

    );
  }

  validate(name: string, error: string): boolean {
    const nameHasError = this.signupForm.get(name)?.hasError(error);
    return nameHasError ? nameHasError : false;
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    console.log(newUser);
    this.signupService.signup(newUser)
      .subscribe(() => this.router.navigate(['']), (err) => console.log(err));
  }

}
