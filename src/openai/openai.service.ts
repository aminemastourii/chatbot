import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat';
import { ChatCompletionMessage } from './dto/ChatCompletion.request';

@Injectable()
export class OpenaiService {
    constructor(private readonly openai :OpenAI) {}

    async createChatCompletion(messages:ChatCompletionMessage[]){
        return await this.openai.chat.completions.create({
            messages: messages as  ChatCompletionMessageParam[] ,
            model: 'gpt-4'
    });
}
}
