import { Launch } from "../../domain/entities/Launch";

export class LaunchPresenter {
    static toEntity(apiLaunchData: any): Launch {
        return {
            id: apiLaunchData.id,
            name: apiLaunchData.name,
            date: apiLaunchData.net,
            image_url: apiLaunchData.image?.image_url || null
        };
    }

    static toEntities(apiLaunchDataArray: any[]): Launch[] {
        return apiLaunchDataArray.map(this.toEntity);
    }
}
