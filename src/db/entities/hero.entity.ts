import { Column, Entity, Index } from 'typeorm';
import { ComicName } from '../../shared/utils/constants';
import { Base } from './base.entity';
import { HeroRo } from '../../shared/interface/entities.interface'

@Entity()
export class Hero extends Base {
	@Column({ type: 'varchar', length: 50, name: 'first_name' })
	name: string;

	@Column({ nullable: true, type: 'varchar', length: 50, name: 'last_name' })
	power: string;

	@Index()
	@Column({ type: 'varchar', length: 100 })
	comicName: ComicName;

	toResponseObject (): HeroRo {
		const { id, name, power, comicName, createdAt, updatedAt } = this;
		return {
			id,
			heroName: name,
			power: power,
			comics: comicName,
			createdAt,
			updatedAt,
		}
	}
}
