import 'dotenv/config'
import express from 'express'
import config from './config/config'
import cors from 'cors'
import router from './routes';

const startServer = async () => {
  const app = express();
  // Enable Cors
  app.use(cors())

  // Enable JSON body parser
  app.use(express.json())

  app.enable('trust proxy');

  // Health Checks
  app.get('/status', (req, res) => {
    res.status(200).end();
  })

  app.head('/status', (req, res) => {
    res.status(200).end()
  })


  app.use('/api', router)

  /// catch 404 and forward to error handler
  app.use((req, res, next) => {
    const err = new Error('Not Found');
    err['status'] = 404;
    next(err);
  });

  app.use((err, req, res) => {
    res.status(err.status || 500);
    res.json({
      errors: {
        message: err.message,
      },
    });
  });


  app.listen(config.port, err => {
    if (err) {
      console.log(err);
      process.exit(1)
      return
    }

    console.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️ 
    ################################################
  `)
  })
}

startServer()