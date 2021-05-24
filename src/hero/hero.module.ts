import { Module } from '@nestjs/common';
import { HeroService } from './hero.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HeroController } from './hero.controller';
import { Hero } from 'src/db/entities/hero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hero])],
  providers: [HeroService],
  controllers: [HeroController],
  exports: [HeroService]
})
export class HeroModule {}
