const express = require("express");
const axios = require("axios");
// const Constants = require('../constants/constants');

const router = express.Router();

router.post('/', (req, res, next) => {

    let { section, sort, showViral, window } = req.body;

    // console.log(req);

    // let url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}0?showViral=${showViral}.json`;
    let url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/0?showViral=${showViral}`;

    console.log(url);

    // let f = fetch(
    //     url,
    //     {
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Client-ID b6d1641389367c5'
    //         }
    //     },
    //     function (error, meta, body) {
    //         res.send(body)
    //     });

    let config = {
        headers: { 'Authorization': 'Client-ID b6d1641389367c5' }
    };

    //res.status(200).json({ success: "true" });

    axios({
        method: 'get',
        url: url,
        headers: { 'authorization': 'Client-ID b6d1641389367c5' }
    }).then(function (response) {
        //console.log(response.data);
        res.status(200).send(response.data);
    }).catch(function (error) {
        console.log(error);
    });

});

module.exports = router;