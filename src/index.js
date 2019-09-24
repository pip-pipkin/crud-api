import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import morgan from 'morgan'
import config from './config/config'
import router from './routes'
import logger from './logger'

const startServer = async () => {
  const app = express();
  // Enable Cors
  app.use(cors())

  // Enable JSON body parser
  app.use(express.json())

  app.enable('trust proxy');

  app.use(morgan('tiny'))

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
      logger.error(err);
      process.exit(1)
      return
    }

    logger.info(`
    ################################################
    🛡️  Server listening on port: ${config.port} 🛡️ 
    ################################################
  `)
  })
}

startServer()