const donate = require("../models/donation");

// confirm the paymentIntent
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

exports.donate = ('/pay', async (request, response) => {
    console.log(request.body);
    try {
        // Create the PaymentIntent
        let intent = await stripe.paymentIntents.create({
            payment_method: request.body.payment_method_id,
            description: "Test payment",
            amount: request.body.amount * 100,
            currency: 'usd',
            confirmation_method: 'manual',
            confirm: true
        });

        console.log(intent);
        // Send the response to the client
        response.send(generateResponse(intent, request.body.name, request.body.amount));
    } catch (e) {
        // Display error on client
        return response.send({ error: e.message });
    }
});

const generateResponse = (intent, name, amount) => {
    if (intent.status === 'succeeded') {
        // The payment didn’t need any additional actions and completed!
        // Handle post-payment fulfillment

        const donation = new donate({
            fullName: name,
            Amount: amount,
            Method: intent.payment_method_types[0]
        });

        donation.save();

        return {
            success: true
        };
    } else {
        // Invalid status
        return {
            error: 'Invalid PaymentIntent status'
        };
    }
};

// request handlers
// app.get('/', (req, res) => {
//   res.send('Stripe Integration! - Clue Mediator');
// });


exports.fetchAll = (req, res) => {
    donate.find().then(async result => {

        res.json({
            status: 201,
            message: "Data of the donations",
            donation: result,
        });
    });
}