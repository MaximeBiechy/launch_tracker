import {Agency} from "./Agency";

export interface Launch {
    id: string,
    name: string,
    date: string,
    thumbnail_url: string | null,
    image_url: string | null,
    agency: Agency;
}