// It can be of two form, one is try-catch another is promises.

// promises method

const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

// try catch method
// const asyncHandler = (func) => async (req, res, next, err) => {
//   try {
//     func();
//   } catch (error) {
//     res.status(err.code || 500).json({
//       status: false,
//       message: err.message,
//     });
//   }
// };

// export { asyncHandler };
