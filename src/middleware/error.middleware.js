const errorHandler = async (err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      status: err.status || 500,
      message: err.message || 'Internal Server Error',
    },
  });

  return next();
};

module.exports = errorHandler;
