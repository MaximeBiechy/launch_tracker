import {Agency} from "./Agency";

export interface Launch {
    id: string,
    name: string,
    date: string,
    image_url: string | null,
    agencies: Agency[];
}