import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/app/core/models/user';
import { emailDomains } from 'src/app/shared/constants';
import { emailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  showEditMode = false;
  formSubmitted = false;
  profileForm!: FormGroup;

  creteForm(formValue: any) {
    this.profileForm = this.fb.group({
      username: [formValue.username, [Validators.required, Validators.minLength(5)]],
      email: [formValue.email, [Validators.required, emailValidator(emailDomains)]],
      prefix: [formValue.prefix],
      tel: [formValue.tel],
    });
  }
  get user() {
    const { username, email, tel: telephone } = this.authService.user!;
    const [prefix, ...tel] = telephone.split(' ');
    return {
      username, email, tel: tel.join(' '), prefix,
    };
  }
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.profileForm.setValue(this.user);
  }

  ngOnInit(): void { }

  toggleEditMode(): void {
    this.showEditMode = !this.showEditMode;
    if (this.showEditMode) {
      this.formSubmitted = false;
    }
  }

  saveProfile(): void {
    this.formSubmitted = true;
    if (this.profileForm.invalid) {
      return;
    }
    const { username, email, ext, tel } = this.profileForm.value;
    this.authService.setProfile(username, email, ext + ' ' + tel).subscribe(() => {
      this.toggleEditMode();
    })

  }
}
