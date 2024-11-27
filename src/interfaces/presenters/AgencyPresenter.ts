import {Agency} from "../../domain/entities/Agency";

export class AgencyPresenter {

    static toEntity(apiAgencyData: any): Agency {
        return {
            id: apiAgencyData.id,
            name: apiAgencyData.name,
            country_name: apiAgencyData.country?.name || null,
            description: apiAgencyData?.description || null,
            ceo: apiAgencyData?.administrator || null,
            founding_year: apiAgencyData?.founding_year || null,
            image_url: apiAgencyData.social_logo?.thumbnail_url || null
        }
    }

    static toEntities(apiAgencyData: any[]): Agency[] {
        return apiAgencyData.map(this.toEntity);
    }
}