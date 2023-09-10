import { Paginator } from '../shared/paginator';

export interface Keyword {
	id: number;
	technology: string;
}

export interface Image {
	id: number;
	picture: string;
}

export interface Project {
	id: number; // TODO: uuid strings 
	image: string;
	name: string;
	date?: Date;
	description?: string;
	url?: string;
	video_url?: string;

	keywords?: [Keyword];
	images?: [Image];
}


export interface ProjectList extends Paginator {
  results: [Project];
}

export interface KeywordList extends Paginator {
  results: [Keyword];
}
