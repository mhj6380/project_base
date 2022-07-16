import { Logger } from '@nestjs/common';
import { OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

interface JoinRoomPayload {
  readonly room_key: string;
}

@WebSocketGateway({ serveClient: true, namespace:'/',transports:['websocket'] })
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server
  private logger: Logger = new Logger('AppGateway');
 
  @SubscribeMessage('msgToServer') 
  handleMessage(client: Socket, payload: any): void { 
    this.server.to(payload.room_key).emit('msgToClient', payload, client.id);
  }
 
  @SubscribeMessage('joinRoom') 
  handleJoinRoom(client: Socket, payload: JoinRoomPayload): void { 
    console.log("JOIN ROOM",payload.room_key); 
    client.join(payload.room_key); 
  }


  afterInit(server: Server) {
    this.logger.log('Init');
  }

  handleConnection(client: Socket) {
    this.logger.log(`Client connected: ${client.id}`); 
  }

  handleDisconnect(client: Socket) {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
