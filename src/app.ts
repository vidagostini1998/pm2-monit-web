import express from 'express';
import pm2Lib from './pm2Lib';
import socketIO from './socketIO';

require('dotenv').config();

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.redirect('/index.html');
});

app.get('/miners', async (req, res) => {
  res.json(await pm2Lib.getProcesses());
});

app.put('/miners/:filename/:action(start|restart|stop)', async (req, res) => {
  try {
    const { filename, action } = req.params;

    switch (action) {
      case 'start':
        res.json(await pm2Lib.startProcess(filename));
        break;
      case 'restart':
        res.json(await pm2Lib.restartProcess(filename));
        break;
      case 'stop':
        res.json(await pm2Lib.stopProcess(filename));
        break;
      default:
        return res.status(400).json({ message: `${action} is not supported!` });
    }
  } catch (error:any) {
    res.status(500).json({ message: (error[0] || error).message });
  }
});


const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';

const httpServer = app.listen(Number(PORT), HOST,() => {
  console.log(`[Server] Listening on ${HOST}:${PORT}`);
});

socketIO.init(httpServer);
