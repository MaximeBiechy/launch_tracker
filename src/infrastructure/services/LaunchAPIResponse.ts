export interface LaunchAPIResponse {
    results: {
        id: string;
        name: string;
        net: string;
        image: {
            image_url?: string;
            thumbnail_url?: string;
        };
    }[];
}
