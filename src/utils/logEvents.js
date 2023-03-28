const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");

const logEvents = async (message) => {
  const dateTime = `${new Date()}`;
  const logItem = `${dateTime}\t ${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "../../logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "../../logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "../../logs", "eventLog.txt"),
      logItem
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvents;
