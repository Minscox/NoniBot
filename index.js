const Bot = require('./Bot');
const componentManager = require('./manager/componentManager')
const embedManager = require('./manager/embedManager')
new Bot(new embedManager(), new componentManager);