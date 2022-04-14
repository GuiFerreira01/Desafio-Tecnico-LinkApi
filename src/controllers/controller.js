const services = require('../services/Services')

class Controller {
    async listUsers(req, res) {
        try {
            const User = await services.searchUsers()
 
            return res.status(200).json(User)
        } catch (err) {
            console.log(err);
            return res.status(400).json({ error: err });
        }
    };
}


module.exports = new Controller();
