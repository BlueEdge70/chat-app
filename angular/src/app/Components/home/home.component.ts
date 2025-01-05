import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  chats = [
    { id: 1, name: 'Team Angular', lastMessage: 'Let’s finish the UI today!', messages: [] },
    { id: 2, name: 'Frontend Devs', lastMessage: 'Code review at 3 PM', messages: [] },
    { id: 3, name: 'Personal Chat', lastMessage: 'Hey! What’s up?', messages: [] }
  ];

  activeChat: number | null = null;
  currentChat: any = null;
  newMessage = '';

  selectChat(chatId: number) {
    this.activeChat = chatId;
    this.currentChat = this.chats.find(chat => chat.id === chatId);
  }

  sendMessage() {
    if (this.newMessage.trim() && this.currentChat) {
      this.currentChat.messages.push({ text: this.newMessage, sender: 'You' });
      this.newMessage = '';
    }
  }

  leaveChat() {
    this.activeChat = null;
    this.currentChat = null;
  }
}
