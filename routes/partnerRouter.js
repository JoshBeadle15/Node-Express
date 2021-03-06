const express = require('express');
const partnerRouter = express.Router();

partnerRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end('Will send all the partnerss to you');
})
.post((req, res) => {
    res.end(`Will add the partners: ${req.body.name} with description: ${req.body.description}`);
})
.put((req, res) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /partnerss');
})
.delete((req, res) => {
    res.end('Deleting all partnerss');
});

partnerRouter.route('/:partnersId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res) => {
    res.end(`Will send details of the partners: ${req.params.partnersId} to you`);
})
.post((req, res) => {
    res.end(`POST operation not supported on /partnerss/${req.params.partnersId}`);
})
.put((req, res) => {
    res.write(`Updating partner: ${req.params.partnerId}\n`);
    res.end(`Will update partner: ${req.body.name}
        with description: ${req.body.description}`);
})
.delete((req, res) => {
    res.end(`Deleting partner: ${req.params.partnerId}`);
});

module.exports = partnerRouter;