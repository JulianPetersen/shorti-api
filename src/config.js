require ('dotenv').config();
import nodemailer from 'nodemailer'

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


export const transporter = nodemailer.createTransport({
    host:"c2241352.ferozo.com",
    port:465,
    secure:true,
    auth:{
        user:'contacto@friggdd.site',
        pass:'8bu1NJaNEv'
    }
});
