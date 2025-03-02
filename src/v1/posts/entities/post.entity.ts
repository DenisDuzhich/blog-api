import { ApiProperty } from '@nestjs/swagger';
import { Post } from '@prisma/client';
import { UserEntity } from 'src/v1/users/entities/user.entity';

export class PostEntity implements Post {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  content: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty({ required: false, type: UserEntity })
  author?: UserEntity;
  constructor({ author, ...data }: Partial<PostEntity>) {
    Object.assign(this, data);
    if (author) {
      this.author = new UserEntity(author);
    }
  }

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
