import { Injectable } from '@nestjs/common';
import { Hero } from 'src/db/entities/hero.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHeroDto } from './dto/intex';
import { ComicName } from 'src/shared/utils/constants';
import { HeroRo } from 'src/shared/interface/entities.interface';

@Injectable()
export class HeroService {
    constructor(
        @InjectRepository(Hero)
		private readonly heroRepository: Repository<Hero>,
    ) {}

    async createHero(data: CreateHeroDto, comicName: ComicName) {
        const { heroName, power } = data;
        const hero = new Hero();
        hero.name = heroName;
        hero.power = power;
        hero.comicName = comicName;
        await this.heroRepository.save(hero);

        return true;
    }

    async getHero(): Promise<HeroRo[]> {
        const heros: Hero[] = await this.heroRepository.find({
            where: {
                isDeleted: false,
            }
        })

        return heros.map((hero: Hero) => hero.toResponseObject());
    }

    async getHeroById(id: number): Promise<HeroRo> {
        const hero: Hero = await this.heroRepository.findOne({
            where: { isDeleted: false, id }
        });

        return hero.toResponseObject();
    }

    async deleteHeroById(id: number): Promise<string> {
        const hero: Hero = await this.heroRepository.findOne({
            where: { isDeleted: false, id }
        });
        hero.isDeleted = true;
        hero.updatedAt = new Date();

        await this.heroRepository.save(hero);

        return 'Record deleted successfully';
    }

    async updateHeroById(id: number, data: CreateHeroDto, comicName: ComicName): Promise<HeroRo> {
        const { heroName, power } = data;
        const hero: Hero = await this.heroRepository.findOne({
            where: { isDeleted: false, id }
        });
        hero.name = heroName;
        hero.power = power;
        hero.comicName = comicName;
        await this.heroRepository.save(hero);

        return hero.toResponseObject();
    }
    
}
