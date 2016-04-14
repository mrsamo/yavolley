const pages = require('./controllers/pages');

module.exports = function (app) {
    app.get('/', pages.index);
    app.all('*', pages.error404);

    app.use((err, req, res) => {
        console.error(err);
        res.sendStatus(500);
    });
};
