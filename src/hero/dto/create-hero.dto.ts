import { ApiProperty } from '@nestjs/swagger';
import {
	MaxLength,
	MinLength,
	IsNotEmpty,
} from 'class-validator';
export class CreateHeroDto {
	@ApiProperty({ example: 'Contact Information', description: 'List of Fields' })
	@MinLength(2)
	@MaxLength(50)
    @IsNotEmpty()
	readonly heroName: string;

	@ApiProperty({ example: 'leads', description: 'One of several objective types available in CRM' })
	@MinLength(2)
	@MaxLength(50)
    @IsNotEmpty()
	readonly power: string;
}
