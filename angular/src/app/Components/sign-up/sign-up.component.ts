import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../Shared/Services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit {
  authService: AuthService = inject(AuthService);
  private fb = inject(FormBuilder);
  router: Router = inject(Router);
  SignUpForm!: FormGroup;

  ngOnInit(): void {
    this.buildSignUpForm();
  }

  buildSignUpForm(): void {
    this.SignUpForm = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  onSignUpformSubmit(): void {
    if (!this.SignUpForm.valid) {
      return
    }
    try {
      const { email, password } = this.SignUpForm.value;
      this.authService.register(email, password);
      this.router.navigate(['/chat-list'])
    }
    catch (error: any) {
      console.log(error)
    }
  }
}
