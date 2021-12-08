import ContactController from "../../src/controllers/ContactController.js";

export default function(server){
    server.post('/api/contact',
        ContactController.sendContact);
};