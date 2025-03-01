import { ApiProperty } from "@nestjs/swagger";
import { Post } from "@prisma/client";

export class PostEntity implements Post {
    @ApiProperty()
    id: string;
    
    @ApiProperty()
    title: string;
    
    @ApiProperty()
    content: string;
    
    @ApiProperty()
    authorId: string;
    
    @ApiProperty()
    createdAt: Date;
    
    @ApiProperty()
    updatedAt: Date;
}
