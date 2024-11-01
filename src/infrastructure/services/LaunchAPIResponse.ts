export interface LaunchAPIResponse {
    results: Array<{
        id: string;
        name: string;
        net: string;
        image: {
            image_url: string;
        };
    }>;
}
