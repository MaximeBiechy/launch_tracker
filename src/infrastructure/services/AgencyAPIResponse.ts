export interface AgencyAPIResponse {
    results: {
        id: string;
        name: string;
        country: {
            name: string;
        };
        description: string;
        administrator?: string;
        founding_year: number;
        social_logo: {
            image_url?: string;
        };
    }[];
}