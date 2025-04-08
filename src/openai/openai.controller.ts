import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CreateChatCompletionRequest } from './dto/ChatCompletion.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
    constructor(private readonly openaiService: OpenaiService) {}

    @Post('ChatCompletion')
    async chatCompletion(@Body()body : CreateChatCompletionRequest) {

       this.openaiService.createChatCompletion(body.messages);
    }
}
