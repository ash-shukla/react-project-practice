export const responseObject = (
  data = null,
  isSuccess = null,
  message = null
) => {
  console.log("response", data, isSuccess, message);
  return {
    data,
    isSuccess,
    message: message ? message.replace(/[^a-zA-Z0-9 ]/g, "") : null,
  };
};
