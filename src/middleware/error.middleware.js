const notFound = async (req, res, next) => {
  const error = new Error(`Not Found = ${req.originalUrl}`);
  res.status(404);

  next(error);
};

const errorHandler = async (err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
};

module.exports = { notFound, errorHandler };
