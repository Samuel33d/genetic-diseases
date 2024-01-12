const app = require('./app');
const { envs } = require('./config/enviroments/enviroments');
const { authenticated, syncUp } = require('./config/database/database');


const main = async () => {

    try {
        await authenticated();
        await syncUp();
    } catch (error) {
        console.log(error)
    }
}

main()


app.listen(envs.PORT, () => {
    console.log("Server running on port: " + envs.PORT);
});