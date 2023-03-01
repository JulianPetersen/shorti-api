require ('dotenv').config();

//prod
// export default {
//     SECRET: 'shorti-api',
//     host: 'http://shorti.store',
//     port: process.env.APP_PORT
// }

//desarrollo
export default {
    SECRET: 'shorti-api',
    host: process.env.APP_HOST,
    port: process.env.APP_PORT
}
