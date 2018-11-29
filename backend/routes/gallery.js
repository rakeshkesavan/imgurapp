const express = require("express");
const axios = require("axios");
// const Constants = require('../constants/constants');

const router = express.Router();

router.get('/', (req, res, next) => {
    console.log("testt");

    let { imgurGallery, imgurSort, imgurWindow, galleryViralCheck } = req.body;

    let url = `https://api.imgur.com/3/gallery/${imgurGallery}/${imgurSort}/${imgurWindow}0?showViral=${galleryViralCheck}.json`;

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
        url: 'https://api.imgur.com/3/gallery/hot/viral/0.json',
        headers: { 'authorization': 'Client-ID b6d1641389367c5' }
    }).then(function (response) {
        //console.log(response.data);
        res.status(200).send(response.data);
    }).catch(function (error) {
        console.log(error);
    });

});

module.exports = router;