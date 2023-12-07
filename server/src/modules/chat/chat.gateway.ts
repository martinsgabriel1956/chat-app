import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
} from '@nestjs/websockets';
import { ChatService } from './chat.service';
import { CreateChatDto } from './dto/create-chat.dto';

@WebSocketGateway(8080, {
  namespace: 'chat',
  transports: ['websocket'],
  cors: {
    origin: '*',
  },
})
export class ChatGateway {
  constructor(private readonly chatService: ChatService) {}
  @SubscribeMessage('createChat')
  async handleMessage(@MessageBody() createChatDto: CreateChatDto) {
    return await this.chatService.create(createChatDto);
  }
  h;
}
