import Repository, { baseUrl, serializeQuery } from './Repository';

class PaymentRepositry {
    async getClientSecret({ amount, currency }) {
        const reponse = await Repository.post(
            `${baseUrl}/create-payment-intent`,
            { amount, currency }
        )
            .then((response) => {
                return response.data.paymentIntent;
            })
            .catch((error) => ({ error: JSON.stringify(error) }));
        return reponse;
    }
}

export default new PaymentRepositry();
