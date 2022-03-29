require('dotenv').config();

const client_username = process.env.CLIENT_USERNAME;
const client_password = process.env.CLIENT_PASSWORD;

module.exports = {
    client_username,
    client_password
}