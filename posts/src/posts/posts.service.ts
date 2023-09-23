import { Injectable } from '@nestjs/common';
import { Post } from 'src/graphql';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    { authorId: '1', id: '1', title: 'Lorem Ipsum' },
    { authorId: '1', id: '2', title: 'Foo' },
    { authorId: '2', id: '3', title: 'Bar' },
    { authorId: '2', id: '4', title: 'Hello World' },
  ];

  findOneByAuthorId(authorId: string) {
    return this.posts.filter((post) => post.authorId === authorId);
  }

  findOne(postId: string) {
    return this.posts.find((post) => post.id === postId);
  }

  findAll() {
    return this.posts;
  }
}
