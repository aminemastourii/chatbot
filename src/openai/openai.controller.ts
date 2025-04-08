import { Body, Controller, Post } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/ChatCompletion.request';

@Controller('openai')
export class OpenaiController {
    @Post('ChatCompletion')
    async chatCompletion(@Body()body : CreateChatCompletionRequest) {
       
    }
}
