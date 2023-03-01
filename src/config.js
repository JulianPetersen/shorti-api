require ('dotenv').config();

export default {
    SECRET: 'shorti-api',
    host: 'http://shorti.store',
    port: process.env.APP_PORT
}