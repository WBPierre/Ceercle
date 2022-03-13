const cron = require('node-cron');
const {generateDemoData} = require("./init/demo");
const {activateCompanies, updateSlackStatus, sendSlackReminder} = require('../src/services/Scheduler');

cron.schedule('* 1 * * 7', async () =>  { // At 1am every sunday
    console.log('generating demo data');
    await generateDemoData();
});

cron.schedule('0 * * * *', async () => { // 0 * * * * (Every hour at min 0)
    await activateCompanies();
    //await updateSlackStatus();
})

cron.schedule('0 16 * * 5', async () => {
    await sendSlackReminder();
})