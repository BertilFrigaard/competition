require("dotenv").config();

import app from "./app";

app.listen(process.env.PORT, () => {
    console.log(`Server is now listening on port ${process.env.PORT}`);
});

process.on("SIGINT", async () => {
    console.log("Server closed");
    process.exit(0);
});
