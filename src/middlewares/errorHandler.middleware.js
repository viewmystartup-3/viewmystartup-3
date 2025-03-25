function errorHandler(err, req, res, next) {
  const message = err.message;

  res.status(500).send(message);
}

module.exports = errorHandler;
