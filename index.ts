import app from './src/app';

const port = 8000;

app.listen(port, () => {
    console.log(`Weather app listening at http://localhost:${port}`);
});