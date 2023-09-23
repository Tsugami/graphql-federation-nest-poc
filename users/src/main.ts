import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GraphQLFederationDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const definitionsFactory = new GraphQLFederationDefinitionsFactory();
  definitionsFactory.generate({
    typePaths: ['./src/**/*.graphql'],
    path: join(process.cwd(), 'src/graphql.ts'),
    outputAs: 'interface',
  });

  await app.listen(3000);
}
bootstrap();
