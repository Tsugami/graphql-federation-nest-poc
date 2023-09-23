import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { User } from 'src/graphql';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly postsService: PostsService) {}

  @ResolveField('posts')
  public posts(@Parent() user: User) {
    return this.postsService.findOneByAuthorId(user.id);
  }
}
