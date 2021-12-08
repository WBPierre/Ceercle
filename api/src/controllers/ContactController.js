import Contact from "../models/Contact.js";

const ContactController = {
    async sendContact(req, res){
        res.send(req.body)
    }
}

export default ContactController;