import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent{
// State for the submit button
  isSubmitting = false;
  successMessage = false;

  // Data for the FAQ section
  faqs = [
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 30 countries. Shipping times vary by location."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day no-questions-asked return policy on all hardware."
    },
    {
      question: "Can I track my order?",
      answer: "Absolutely. You will receive a tracking link via email once your item ships."
    }
  ];

  // Simulate sending a message
  submitForm(event: Event) {
    event.preventDefault(); // Stop page reload
    this.isSubmitting = true;

    // Simulate API delay
    setTimeout(() => {
      this.isSubmitting = false;
      this.successMessage = true;
      // Reset after 3 seconds
      setTimeout(() => this.successMessage = false, 5000);
    }, 2000);
  }
}