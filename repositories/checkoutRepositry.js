import Repository, { baseUrl, serializeQuery } from './Repository';

class ProductRepository {
    async getCheckoutRecords(id) {
        const reponse = await Repository.get(
            `${baseUrl}/checkouts?user._id=${id}`
        )
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async getSingleCheckout(id) {
        const reponse = await Repository.get(`${baseUrl}/checkouts/${id}`)
            .then((response) => {
                return response.data;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
    async makeCheckout(data) {
        let jwt = JSON.parse(
            JSON.parse(localStorage.getItem('persist:Find-a-Plant'))?.auth
        )?.jwt;
        console.log(data);
        const reponse = await Repository.post(`${baseUrl}/checkouts`, data, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
            .then((response) => {
                return response.data;
            })
            .catch((error) => {
                console.log('ERROR', error.response);
                return { error: JSON.stringify(error) };
            });
        return reponse;
    }
}

export default new ProductRepository();
