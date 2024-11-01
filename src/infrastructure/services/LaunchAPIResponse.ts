export interface LaunchAPIResponse {
    id: string;
    name: string;
    net: string;
    image: any;
    results: Array<{
        id: string;
        name: string;
        net: string;
        image: {
            image_url: string;
        };
    }>;
}
