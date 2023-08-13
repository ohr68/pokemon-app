import { getApiClient } from '../helpers/request-helper';

export const api = getApiClient();

async function ApiRequest(
    endPoint: string,
    data: any,
    method: string,
    requestOptions: any = {}
): Promise<any> {
    return new Promise((resolve, reject) => {

        if (method === 'get' || method === 'delete') {
            data = {
                ...requestOptions,
                ...data
            }
        }

        api[method](endPoint, data)
            .then((result: any) => {
                const { data } = result;

                if (data.status === false) {
                    return reject(data);
                }

                return resolve(data);
            })
            .catch((error: any) => {
                console.error(error);

                if (error?.response && error?.response.data) {

                    if (error.response.status === 500) {
                        return reject("Ocorreu um erro interno.");
                    }

                    if (!error.response.data.message) {
                        return reject(error.response.data || "Erro de conexao." );
                    }

                    return reject(error.response.data.message);
                } else {
                    return reject("Erro de conexao.");
                }
            });
    });
}

export const apiPost = (endPoint: string, data: any) => {
    return ApiRequest(endPoint, data, 'post');
}

export const apiDelete = (endPoint: string, data: any) => {
    return ApiRequest(endPoint, data, 'delete');
}

export const apiGet = (endPoint: string, data: any, requestOptions: any) => {
    return ApiRequest(endPoint, data, 'get', requestOptions);
}

export const apiPut = (endPoint: string, data: any) => {
    return ApiRequest(endPoint, data, 'put');
}