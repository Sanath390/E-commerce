const express = require('express');
const app = express();
// const queryUsers = require('./dbConnection_user-info');
const queryPrice = require('./dbConnection_price-info');
const crypto = require('crypto');
// const jwt = require('jsonwebtoken');
// const secret = crypto.randomBytes(32).toString('base64'); // Generates a 32-byte random secret
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require('cors');


const jwtCheck = auth({
    audience: 'http://f&v.example.com',
    issuerBaseURL: 'https://dev-0nnos6wnxu18mro0.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

// console.log(app);
app.use(cors({
    origin: 'http://localhost:3000', // Your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());
app.use(jwtCheck);

app.get("/",
    (req, res) => {
        res.status(200).json({
            success: true,
            message: "Welcome to my e-commerce server"
        })
    }
)

app.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});

app.get("/prices",
    async (req, res) => {
        try {
            const result = await queryPrice.SelectQuery();
            res.status(200).json({
                success: true,
                message: result
            })
        } catch (error) {
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
)


app.listen(5000, () => {
    console.log('server listening on port 5000')
})

app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        custom: true,
        message: err.message
    })
})
