const express = require('express');
const recordRoutes = express.Router();

const dbo = require('./db');

recordRoutes.route('/get-episode').get(async (_, res) => {
  const dbConnect = dbo.getDb();

  const todaysEp = await dbConnect.collection(process.env.COLLECTION_NAME).findOne();

  return res.json(todaysEp);
});

module.exports = recordRoutes;
