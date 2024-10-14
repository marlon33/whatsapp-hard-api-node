const express = require('express');
const router = express.Router();
const instanceRoutes = require('./instance.route');
const messageRoutes = require('./message.route');
const miscRoutes = require('./misc.route');
const groupRoutes = require('./group.route');
//const managerRoutes = require('./manager.route');


router.get('/', (req, res) => res.send({
    "status":"success",
    "error":false,
    "data":[
        {
            "api":"whatsapp api",
            "version": "v1.6.2"
        }
    ],
    "time": new Date()
}));

router.get('/status', (req, res) => res.send({
    "status":"Success",
    "version":"v1.6.2",
    "time": new Date()
}));
router.use('/instance', instanceRoutes);
router.use('/message', messageRoutes);
router.use('/group', groupRoutes);
router.use('/misc', miscRoutes);
//router.get('/', (req, res) => res.redirect('/manager/login'));
//router.use('/manager', managerRoutes); // Adiciona as rotas de gerenciamento aqui

module.exports = router;
