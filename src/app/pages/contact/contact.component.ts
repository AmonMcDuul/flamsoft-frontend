import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
    contactForm!: FormGroup;
    showContactFields = false;
    showConfirmation = false;

    constructor(private emailService: EmailService) {}

    ngOnInit(): void {
      // Initialize the form group with controls
      this.contactForm = new FormGroup({
        idea: new FormControl('', [Validators.required]),
        name: new FormControl(''),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
        honeypot: new FormControl('')
      });
  
      this.contactForm.get('idea')?.valueChanges.subscribe(value => {
        this.showContactFields = value.trim().length > 0;
      });
    }
  
    onSubmit(): void {
      if (this.contactForm.get('honeypot')?.value !== '')  {
        return;
      }
      if (this.contactForm.valid) {

        const subject = `Flamsoft Contact Form Submission from ${this.contactForm.get('name')?.value}`;
        const body = `Name: ${this.contactForm.get('name')?.value}\nEmail: ${this.contactForm.get('email')?.value}\nTelephone: ${this.contactForm.get('phone')?.value}\n\nMessage:\n${this.contactForm.get('idea')?.value}`;
    
        this.emailService.sendEmail(subject, body).subscribe(
          response => {
            console.log('Email sent successfully', response);
            this.resetForm();
            this.showConfirmation = true;
        
            setTimeout(() => {
              this.showConfirmation = false;
            }, 10000); 
          },
          error => {
            console.error('Error sending email', error);
          }
        );
      }
    }
  
    resetForm(): void {
      this.contactForm.reset();
      this.showContactFields = false;
    }
  }