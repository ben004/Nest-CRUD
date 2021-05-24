import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import { HeroModule } from './hero/hero.module';
import * as ormconfig from './ormconfig'
import { ResponseMiddleware } from './shared/middleware/response.middleware';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig),HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
		consumer
			.apply( ResponseMiddleware)
			.forRoutes({ path: '*', method: RequestMethod.ALL });
	}
}
