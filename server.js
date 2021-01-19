// load the things we need
const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
// res.render() will look in a "views" folder for the view, so we only need to define "pages/index" when the full path is "views/pages/index"

// index page (http://localhost:8080/)
app.get('/', (req, res) => {
    const mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    const tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', (req, res) => {
    res.render('pages/about');
});

app.listen(8080);
console.log('8080 is the magic port');
