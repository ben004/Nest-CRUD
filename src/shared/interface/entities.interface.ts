import { ComicName } from '../utils/constants'
export interface HeroRo {
    heroName: string;
    power: string;
    id: number;
    comics: ComicName;
    createdAt: Date;
    updatedAt: Date;
}