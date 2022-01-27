const cron = require('node-cron');
const {generateDemoData} = require("./init/demo");

cron.schedule('* 1 * * 7', async () =>  {
    console.log('generating demo data');
    await generateDemoData();
});