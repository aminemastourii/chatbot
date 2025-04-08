import { Type } from "class-transformer";
import { IsArray, IsNotEmpty, IsString, ValidateNested } from "class-validator";

export class CreateChatCompletionRequest {
    @IsArray()
    @ValidateNested({ each: true }) // Validates each item in the array
    @Type(() => ChatCompletionMessage) // Transforms plain objects into class instances
     messages :ChatCompletionMessage[];
}

export class ChatCompletionMessage {
    @IsString()
    @IsNotEmpty ()
    role: string;

    @IsString()
    @IsNotEmpty ()
    content: string;
}