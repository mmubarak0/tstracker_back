import express, { IRouter } from 'express';
const router = express.Router();

import userRoute from './user.route';
import transactionRoute from './transaction.route';

/**
 * Function contains Application routes
 *
 * @returns router
 */
const routes = (): IRouter => {
  router.get('/', (req, res) => {
    res.json('Welcome');
  });
  router.use('/users', new userRoute().getRoutes());
  router.use('/transactions', new transactionRoute().getRoutes());

  return router;
};

export default routes;
