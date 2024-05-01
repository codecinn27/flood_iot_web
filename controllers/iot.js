
module.exports.dashboardPage = (req,res)=>{
    res.render('iot/dashboard');
}

module.exports.switchCollection = async (req,res, next)=>{
    const {id} = req.params;
    console.log("collection name: ",id);
    let locationName;
    switch(id){
        case 'ayerkeroh':
            locationName = "Ayer Keroh";
            break;
        case 'duriantunggal':
            locationName = "Durian Tunggal";
            break;
        case 'alorgajah':
            locationName = "Alor Gajah";
            break;
        default:
            return res.status(400).json({ error: 'Invalid collection id' });
    }
    const data = {id, locationName}
    //can called data.locationName 
    res.render('iot/dashboard',  { data});
}

module.exports.dataLogDisplay = async(req,res,next)=>{
    const {id} = req.params;
    console.log("collection name: ",id);
    let locationName;
    switch(id){
        case 'ayerkeroh':
            locationName = "Ayer Keroh";
            break;
        case 'duriantunggal':
            locationName = "Durian Tunggal";
            break;
        case 'alorgajah':
            locationName = "Alor Gajah";
            break;
        default:
            return res.status(400).json({ error: 'Invalid collection id' });
    }
    const data = {id, locationName}
    //can called data.locationName 
    res.render('iot/datalog',  { data}); 
}

module.exports.notificationDisplay =(req,res)=>{

    //store value using session
    // https://youtu.be/GihQAC1I39Q?si=eRTkXeeawOS7I1ij
    res.render('iot/notification');
}