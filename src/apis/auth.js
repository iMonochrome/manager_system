import retryHandleApis from "../configs/handleApis";

export const userLogin = (data) => {
  return retryHandleApis("/login", "POST", data);
};