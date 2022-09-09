const {Sequelize} = require("sequelize")

module.exports = new Sequelize(
    'da3r9dbh5p33u6', // Название БД
    'jflkbjlagssohy', // Пользователь
    '1baffb55afce508c55bd669d43b8c2fe51be2f8163c629a8a14cfe597f0b6bc7', // Пароль
    {
        dialect: 'postgres',
        host: 'ec2-52-30-159-47.eu-west-1.compute.amazonaws.com',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        port: '5432,
    },
)
