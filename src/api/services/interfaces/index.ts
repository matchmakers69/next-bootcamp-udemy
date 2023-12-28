import { type PRICE, type Cuisine, type Location } from "@prisma/client";

export interface Restaurant {
	id: number;
	name: string;
	main_image: string;
	images: string[];
	description: string;
	cuisine: Cuisine;
	location: Location;
	open_time: string;
	close_time: string;
	slug: string;
	price: PRICE;
	location_id: number;
	cuisine_id: number;
	created_at: Date;
	updated_at: Date;
}

export interface RestaurantSubset {
	id: number;
	name: string;
	main_image: string;
	cuisine: Cuisine;
	location: Location;
	price: PRICE;
	slug: string;
}

export interface RestaurantDetailsSubset {
	id: number;
	name: string;
	images: string[];
	description: string;
	slug: string;
}
