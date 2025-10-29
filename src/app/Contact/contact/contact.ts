import { Component } from '@angular/core';
import { Footer } from "../../Shared/footer/footer";
import {FormsModule} from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
@Component({
  selector: 'app-contact',
  imports: [ Footer ,FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

  Name: string = '';
  Time: string = '';
  Message: string = '';
  Title: string = '';
  Email: string = '';
  isSending: boolean = false;

  private serviceID = 'service_7y11srf';
  private templateID = 'template_ky7k7vb';
  private publicKey = '94d0ckBKN2jKSJRgJ';

  sendEmail(event: Event) {
    event.preventDefault(); 
    this.isSending = true;

    const templateParams = {
      name: this.Name,
      time: this.Time,
      message: this.Message,
      title: this.Title,
      email: this.Email
    };

    emailjs.send(this.serviceID, this.templateID, templateParams, this.publicKey)
      .then(() => {
        alert('✅ Message sent successfully!');
        this.Name = '';
        this.Time = '';
        this.Message = '';
        this.Title = '';
        this.Email = '';
        this.isSending = false;
      })
      .catch((error) => {
        console.error('Email send error:', error);
        alert('❌ Failed to send message. Please try again.');
        this.isSending = false;
      });
  }


}
