import {
  // Args,
  // ID,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from 'src/graphql';

@Resolver('Post')
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  // @Query('findPost')
  // findPost(@Args({ name: 'id', type: () => ID }) id: string) {
  //   return this.postsService.findOne(id);
  // }

  @Query('Posts')
  getPosts() {
    return this.postsService.findAll();
  }

  @ResolveField('user')
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
