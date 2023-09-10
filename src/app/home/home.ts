import { Paginator } from '../shared/paginator';

export interface SocialLink {
	name: string;
	logo: string;
	url: string;
}

export interface Education {
	institution: string;
	location: string;
	study_area: string;
	study_type: string;
	start_date: Date;
	end_date: Date;
	gpa: string;
	description: string;
	date_created: Date;
}

export interface Work {
	company: string;
	location: string;
	position: string;
	website: string;
	start_date: Date;
	end_date: Date;
	date_created: Date;

	highlights: [string];
}

export interface SkillKeyword {
	name: string;
}

export interface Skill {
	name: string;
	description: string;
	keywords: [SkillKeyword];
}

export interface Service {
	name: string;
	logo: string;
	description: string;
	id: number;
}

export interface TechnicalSkill {
	percentage: number;
	skill_keyword: string;
}

export interface ProfessionalSkill {
	percentage: number;
	name: string;
	id: number;
}

export interface Project {
	id: number; // TODO: uuid strings 
	image: string;
	name: string;
	date?: Date;

	keywords?: [string];
}

export interface Pricing {
	id: number; // TODO: uuid strings 
	price: number;
	name: string;
	description?: string;

	keywords?: [string];
}

export interface Article {
	id: number; // TODO: uuid strings 
	image: string;
	title: string;
	date_created: Date;
	user: string;
	content_text: string;
}

export interface Profile {
	id: number; // TODO: uuid strings 
	image: string;
  first_name: string;
  second_name: string;
  description: string;
  cv_file: string;
  email_1: string;
  email_2: string;
  address: string;
  phone_number_1: string;
  phone_number_2?: string;

  created?: string;
  complete?: number;

  social_links?: [SocialLink];
  education?: [Education];
  work?: [Work];
  skills?: [Skill];
  services?: [Service];
  technical_skills?: [TechnicalSkill];
  professional_skills?: [ProfessionalSkill];
  project_highlights?: [Project];
  pricing?: [Pricing];
  article_highlights?: [Article];
}

export interface Message {
	first_name: string;
  last_name?: string;
  email: string;
  message: string;
}

export interface ProfessionalSkillList extends Paginator {
  results: [ProfessionalSkill];
}

/*
*/