const stripe = require('stripe')(
    'sk_test_51H9Z3SGua4sGZhQQhiq0tdwSwOQMOMyT6YfeyIb4MCsurdra6wsbAPaqa1HpPP1Jx0gOAvLB5GRWpneWa7x1Ia9j00khvV3745'
);

export default async function handler(req, res) {
    try {
        console.log('---------------------');
        const charge = await stripe.charges.create({
            amount: 5.0,
            // source: `pm_1IlZnsGua4sGZhQQTa1oFuz2`,
            source: 'tok_visa',
            currency: 'USD',
            // payment_method_types: ['card'],
            description: 'First Test Charge',
        });
        // const paymentIntent = await stripe.paymentIntents.create({
        //     amount: 2000,
        //     currency: 'usd',
        //     payment_method_types: ['card'],
        //   });
        console.log('Checkout', charge);
    } catch (error) {
        console.log('In erroe', error);
    }
    res.status(200).json({ name: 'John Doe' });
}
