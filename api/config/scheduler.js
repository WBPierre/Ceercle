const cron = require('node-cron');
const {generateDemoData} = require("./init/demo");
const {activateCompanies} = require('../src/services/Scheduler');

cron.schedule('* 1 * * 7', async () =>  {
    console.log('generating demo data');
    await generateDemoData();
});

cron.schedule('0 8 * * *', async () => {
    await activateCompanies();
})