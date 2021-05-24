import { ApiProperty } from '@nestjs/swagger';
import {
	IsString,
    IsEnum,
	IsNotEmpty,
} from 'class-validator';
import { ComicName } from '../../shared/utils/constants';
export class HeroComicDto {
	@ApiProperty({ example: "Comic name eigther MAR or DC" })
    @IsEnum(ComicName)
	@IsString()
    @IsNotEmpty()
	readonly comicName: ComicName;
}