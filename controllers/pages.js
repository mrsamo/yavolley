exports.index = (req, res) => {
    res.render('page/main', {});
};

exports.error404 = (req, res) => {
    res.sendStatus(404);
};