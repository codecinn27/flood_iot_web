var express = require('express');
var router = express.Router();
var iot = require('../controllers/iot');

// router.route('/getData')
//     .get(iot.getDataFavoriot);

router.route('/getAyerKerohData')
    .get(iot.getDataAyerKeroh);

router.route('/getDurianTunggalData')
    .get(iot.getDataDurianTunggal);

//for development purpose
// router.route('/getData1')
//     .get(iot.getDataFavoriot1);

    
// router.route('/dashboard/:id')
//     .get(iot.renderingDataFavoriot);

router.route('/dashboard/:id')
    .get(iot.renderingData);

router.route('/datalog/:id')
    .get(iot.dataLogDisplay);

router.route('/notification')
    .get(iot.notificationDisplay);

router.route('/about')
    .get(iot.about);

router.route('/getLatestData')
    .get(iot.getLatestData);
    
router.route('/analysis/:id')
    .get(iot.analysis);

module.exports = router;
