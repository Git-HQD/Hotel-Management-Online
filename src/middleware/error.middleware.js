const errorHandler = async (err, req, res, next) => {
  const errorStatus = err.status || 500;
  
  res.status(errorStatus).json({
    error: {
      errorStatus,
      message: err.message || 'Internal Server Error',
    },
  });

  return next();
};

module.exports = errorHandler;
