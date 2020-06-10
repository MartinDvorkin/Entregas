const fs = require('fs');
const path = require('path');
const userController = {
    index: function(req, res){
return res.send('Te has registrado con exito!')
    },

    view: function(req, res){
    return res.render('index')
    },

    show: function(req, res){
      
let user = {
    id:"",
    ...req.body,
}

let users = fs.readFileSync(path.join(__dirname, '..', 'data', 'data.json'),'utf-8');
users = JSON.parse(users);
//users.push(user);
 users = [...users, user];

users = JSON.stringify(users, null, " ");

fs.writeFileSync(path.join(__dirname, '..', 'data', 'data.json'), users);

return res.redirect('/');

    
    }
}


module.exports = userController;