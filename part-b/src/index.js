import dotenv from "dotenv";
import app from "./app.js";
import db from "./models/index.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

db.sequelize.sync()
    .then(() => {
        console.log("Database synced successfully.");

        app.listen(PORT, () => {
            console.log("Server on port =", PORT);
        });
    })
    .catch((err) => {
        console.error("Unable to sync database:", err);
    });