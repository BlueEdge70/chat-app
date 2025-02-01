import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WebSocketService } from './Shared/Services/web-socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  // private websocketService: WebSocketService = inject(WebSocketService);

  // Comment the web socket code for now. will move to this module once we finish other todo's

  // ngOnInit(): void {
  //   this.initializeSocketConnection();
  // }

  // ngOnDestroy() {
  //   this.disconnectSocket();
  // }

  // // Initializes socket connection
  // initializeSocketConnection() {
  //   this.websocketService.connectSocket('message');
  // }

  // // Receives response from socket connection 
  // receiveSocketResponse() {
  //   this.websocketService.receiveStatus().subscribe((receivedMessage: string) => {
  //     console.log(receivedMessage);
  //   });
  // }

  // // Disconnects socket connection
  // disconnectSocket(): any {
  //   return this.websocketService.disconnetSocket();
  // }
}
