import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ShocketioService {
  constructor(private socket: Socket) {}

  sendEmit(event: string) {
    this.socket.emit(event);
  }

  onListen(event: string) {
    return this.socket.fromEvent(event).pipe(map((data) => data));
  }

  disconnect() {
    this.socket.disconnect();
  }

  connect() {
    this.socket.connect();
  }
}
