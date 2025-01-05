import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private webSocket: Socket;
  constructor() {
    this.webSocket = new Socket({
      url: "",
      options: {}
    })
  }

  // this method is used to start connection/handhshake of socket with server
  connectSocket(message: any) {
    this.webSocket.emit("message", message);
  }

  // this method is used to get response from server
  receiveStatus(): Observable<any> {
    return this.webSocket.fromEvent('/get-response');
  }

  disconnetSocket() {
    this.webSocket.disconnect();
  }
}
