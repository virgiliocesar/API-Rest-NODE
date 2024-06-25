import app from "./src/app.js"

const PORT = 3000;

//* listen to the door 3000
app.listen(PORT, () => {
    console.log(`server running at address http://localhost:${PORT}`);
})
