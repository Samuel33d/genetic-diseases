const { Sequelize } = require('sequelize');
const { envs } = require('../enviroments/enviroments')

const sequelize = new Sequelize(envs.DB_URI, {
    logging: false
})

const authenticated = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const syncUp = async () => {
    try {
        await sequelize.sync()
        console.log("Connection has been synced succesfully.")
    } catch (error) {
        console.log(error)
    }
}

module.exports = { authenticated, syncUp, sequelize }

