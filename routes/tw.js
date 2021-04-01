const express = require('express');
const { Model } = require('mongoose');
const tw = require('../models/tw');
const twModel = require('../models/tw');

const Router = express.Router();

// let tws = [{
//     msg: "Ceci est un twitt",
//     author: "Fanny LOCHU"
// },{
//     msg: "Ceci est un twitt",
//     author: "Fanny LOCHU"
// },{
//     msg: "Ceci est un twitt",
//     author: "Fanny LOCHU"
// }];

// GET: /api/tws
Router.get('/api/tws', (req, res, next) => {
    twModel.find()
    .then(tws => { res.status(200).send(tws) })
    .catch(error => { next(error) });
});

// GET: /api/:twId
Router.get('/api/tws/:twId', (req, res, next) => {
    const id = req.params.twId

    twModel.findOne({_id: id})
    .then(tw => { 
        if(tw === null)
            res.status(200).send("Twitt non trouvé") 
        res.status(200).send(tw) 
    })
    .catch(error => { next(error) });
});


// POST: /api/tws
Router.post('/api/tws', (req, res, next) => {
    console.log(req.body);
    const tw = new twModel({
        body: req.body.body
    });

    tw.save()
    .then(tw => { res.status(200).send(tw) })
    .catch(error => { next(error) });
});

// PATCH /api/tws/:twId
Router.patch('/api/tws/:twId', (req, res, next) => {
    const id = req.params.twId

    twModel.updateOne({_id: id}, {$set: {body: req.body.body}})
    .then(tw => { res.status(200).send("Twitt modifié") })
    .catch(error => { next(error) });
});

// DELETE: /api/tws/:twId
Router.delete('/api/tws/:twId', (req, res, next) => {
    const id = req.params.twId

    twModel.remove({_id: id})
    .exec()
    .then(result => { res.status(202).send('Twitt supprimé') })
    .catch(error => { next(error) });
});

module.exports = Router;