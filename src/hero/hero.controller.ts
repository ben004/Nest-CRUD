import {
	Controller,
	Post,
	Body,
	Res,
	HttpStatus,
	Query,
	UsePipes,
	ValidationPipe,
	Param,
	ParseIntPipe,
	Put,
	Delete,
	Get,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { HeroService } from './hero.service';
import { CreateHeroDto, HeroComicDto } from './dto/intex';
import { HeroRo } from 'src/shared/interface/entities.interface';

@ApiTags('Heros')
@Controller('hero')
export class HeroController {
    constructor(
        private readonly heroService: HeroService,
    ) {}

    /**
	 * Add hero
	 * @param createHeroDto
	 * @param heroComicDto
	 * @param res
	 */
	@Post('/')
	@ApiResponse({
		status: HttpStatus.CREATED,
		isArray: true,
		description: 'The record has been successfully created.',
	})
	async create(
        @Body() createHeroDto: CreateHeroDto,
        @Query() { comicName }: HeroComicDto,
        @Res() res: any
    ): Promise<any> {
		const response = await this.heroService.createHero(createHeroDto, comicName);
		return res.success(HttpStatus.CREATED, response);
	}

	    /**
	 * Get hero
	 * @param createHeroDto
	 * @param heroComicDto
	 * @param res
	 */
		 @Get('/all')
		 @ApiResponse({
			 status: HttpStatus.OK,
			 isArray: true,
			 description: 'Get all heros',
		 })
		 async get(
			 @Res() res: any
		 ): Promise<any> {
			 const response: HeroRo[] = await this.heroService.getHero();
			 return res.success(HttpStatus.CREATED, response);
		 }

	    /**
	 * Get hero
	 * @param createHeroDto
	 * @param heroComicDto
	 * @param res
	 */
		 @Get('/:id')
		 @ApiResponse({
			 status: HttpStatus.OK,
			 isArray: true,
			 description: 'Get Hero By ID',
		 })
		 async getById(
			@Param('id', new ParseIntPipe()) id: number,
			 @Res() res: any
		 ): Promise<any> {
			 const response: HeroRo = await this.heroService.getHeroById(id);
			 return res.success(HttpStatus.CREATED, response);
		 }

	 /**
	 * Delete hero
	 * @param id
	 * @param res
	 */
	@Delete('/:id')
	@ApiResponse({
		status: HttpStatus.OK,
		isArray: true,
		description: 'Delete hero by ID',
	})
	async delete(
		@Param('id', new ParseIntPipe()) id: number,
        @Res() res: any
    ): Promise<any> {
		const response: string = await this.heroService.deleteHeroById(id);
		return res.success(HttpStatus.CREATED, response);
	}

}
