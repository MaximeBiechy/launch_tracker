import {Launch} from "../../domain/entities/Launch";
import axios from "axios";
import {BASE_API_URL} from "../../shared/constants/constants";
import {LaunchAPIResponse} from "./LaunchAPIResponse";
import {LaunchPresenter} from "../../interfaces/presenters/LaunchPresenter";
import {ILaunchRepository} from "../../domain/repositories/ILaunchRepository";
import {NotFoundError} from "../../domain/exceptions/NotFoundError";
import {ExternalAPIError} from "../../domain/exceptions/ExternalAPIError";

export class LaunchAPIService implements ILaunchRepository {

    async getAllLaunches(): Promise<Launch[]> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/?ordering=net`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async getAllUpcomingLaunches(): Promise<Launch[]> {
        try {
            const limit = 20;
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/upcoming/?limit=${limit}`);
            return LaunchPresenter.toEntities(response.data.results);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    async getLaunch(id: string): Promise<Launch> {
        try {
            const response = await axios.get<LaunchAPIResponse>(`${BASE_API_URL}/launches/${id}`);
            return LaunchPresenter.toEntity(response.data);
        } catch (error: any) {
            this.handleError(error);
        }
    }

    private handleError(error: any): never {
        if (error.response) {
            const status = error.response.status;

            if (status === 404) {
                throw new NotFoundError('Launch not found : ' + error.message);
            } else if (status === 429) {
                const retryAfter = error.response.headers['retry-after']; // Nombre de secondes à attendre
                throw new ExternalAPIError(
                    retryAfter
                        ? `Trop de requêtes envoyées. Réessayez dans ${retryAfter} secondes.`
                        : "Trop de requêtes envoyées. Réessayez plus tard."
                );
            } else {
                throw new ExternalAPIError(`API error : ${error.response.statusText}`);
            }
        } else if (error.request) {
            throw new Error(`Aucune réponse du serveur. Vérifiez votre connexion.`);
        } else {
            throw new Error(`Erreur inattendue : ${error.message}`);
        }
    }

}