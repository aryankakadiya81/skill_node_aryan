// const tokenObj = require('../Token/token');

// const middleware = (req, res, next) => {
//     if (tokenObj.token == req.headers.token) 
//     {
//         next();
//     }
//     else 
//     {
//         res.json({ msg: "Fail in module....!" });
//     }
// };

// module.exports = middleware;

// -----------------------------------------------------------------

const tokenObj = require('../Token/token');
const jsonwebtoken = require("jsonwebtoken");


const middleware = (req, res, next) => {
    if (tokenObj.token == req.headers.token)
    {
     
        jsonwebtoken.verify(tokenObj.token, 'skill', function(err, decoded) 
        {
            if(err)
            {
                res.json({token:"expire"});
            }
            else
            {
                console.log(decoded);
                next();
                res.json({token:"valid"});
            }
        });
    }
    else 
    {
        res.json({ msg: "fail in module.....!" })
    }
}
module.exports = middleware;