const mongoose = require('mongoose')

const url = `mongodb+srv://student:kmit123@cluster0.mwifk43.mongodb.net/himalayas?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

    // Mountain model
const peak = mongoose.model('peaks', {

    name: { type: String },
    height: { type: Number },
    location: { type: String }

});


peak.find( function (err, docs) {
    if (err){
        console.log(err);
        mongoose.disconnect();
    }
    else{
        console.log("result : ", docs);
        mongoose.disconnect();
    }
});