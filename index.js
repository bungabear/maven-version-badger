const express = require('express');
const xml2js = require('xml2js');
const axios = require('axios');
const openBadge = require('openbadge');
const app = express();
const PORT = process.env.PORT | 80;

app.get('/', async function (req, res) {
    let url = req.query['url'];
    try{
        if(!url){
            throw "No url";
        }

        if(!url.endsWith('.xml')){
            if(!url.endsWith('/')){
                url = url + '/';
            }
            url = url + 'maven-metadata.xml';
        }

        // console.log(url);
        let response = await axios.get(url);
        if(response.status != 200){
            throw "Status not 200";
        }

        let data = response.data;
        let parser = xml2js.Parser();
        let jso = await parser.parseStringPromise(data);
        let id = jso.metadata.artifactId
        let version = jso.metadata.versioning[0].release;
        openBadge({text: [`${id}`, `${version}`]}, function (err, badgeSvg) {
            /* TODO: Check for err */
            res.set('Content-Type', 'image/svg+xml');
            res.send(badgeSvg);
        });
        
    } catch(e){
        console.error(e);
        openBadge({text: ["Not", "Found"], color: { right: '#d64'}}, function (err, badgeSvg) {
            /* TODO: Check for err */
            res.set('Content-Type', 'image/svg+xml');
            res.send(badgeSvg);
        });
    }
});

app.listen(PORT, function(){
    console.log('maven version badger start');
})