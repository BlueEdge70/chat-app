import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Shared/Services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit {

  authService: AuthService = inject(AuthService);
  private fb = inject(FormBuilder);
  router: Router = inject(Router);
  SignInForm!: FormGroup;

  ngOnInit(): void {
    this.buildSignInForm();
  }

  buildSignInForm(): void {
    this.SignInForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  onSignInFormSubmit(): void {
    if (!this.SignInForm.valid) {
      return
    }
    try {
      const { email, password } = this.SignInForm.value;
      this.authService.login(email, password);
      this.router.navigate(['/chat-list'])
    }
    catch (error: any) {
      console.log(error)
    }
  }
}
