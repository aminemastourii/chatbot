import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/ChatCompletion.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
    constructor(private readonly openaiService: OpenaiService) {}

    @Post('chatCompletion')
    async chatCompletion(@Body()body : CreateChatCompletionRequest) {

       return this.openaiService.createChatCompletion(body.messages);
    }
}
