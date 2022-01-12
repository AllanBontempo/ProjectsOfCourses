import { FormGroup } from "@angular/forms";

export const userNamePassword: null | Object = (formGroup: FormGroup) => {
  const userName = formGroup.controls['userName'].value;
  const password = formGroup.controls['password'].value;

  if (password.trim() + userName.trim()) {
    return userName != password ? null
      : { userNamePassword: true };
  } else {
    return null;
  }

};
