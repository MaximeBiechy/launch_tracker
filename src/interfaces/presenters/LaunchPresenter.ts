import { Launch } from "../../domain/entities/Launch";
import {AgencyPresenter} from "./AgencyPresenter";

export class LaunchPresenter {
    static toEntity(apiLaunchData: any): Launch {
        return {
            id: apiLaunchData.id,
            name: apiLaunchData.name,
            date: apiLaunchData.net,
            image_url: apiLaunchData.image?.image_url || null,
            thumbnail_url: apiLaunchData.image?.thumbnail_url || null,
            agency: AgencyPresenter.toEntity(apiLaunchData.launch_service_provider),
        };
    }

    static toEntities(apiLaunchDataArray: any[]): Launch[] {
        return apiLaunchDataArray.map(this.toEntity);
    }
}
