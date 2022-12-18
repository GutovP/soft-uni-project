import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { format } from 'path';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent implements OnInit {
  newThemeForm = this.fb.group({
    themeName: ['', [Validators.required, Validators.minLength(5)]],
    postText: ['', [Validators.required, Validators.minLength(10)]],
  });
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void { }

  newThemeHandler(form: FormGroup) {
    if (form.invalid) {
      return;
    }
    console.log(this.newThemeForm.value);
  }
}
