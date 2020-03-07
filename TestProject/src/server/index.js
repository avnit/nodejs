const express = require('express'),
    os = require('os'),
    util = require("util"),
    router = express.Router();


router.post("/", validation(user.validate),async(req,res,nexr) => {
    try {
        console.log(`user controller called to add new user to the database ${util.inspect(rq.body)}`);

    }
    catch(error){
        next(error);
    }
});
const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(process.env.PORT || 9080, () => console.log(`Listening on port ${process.env.PORT || 9080}!`));
