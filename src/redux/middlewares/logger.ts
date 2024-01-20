import { Middleware } from "@reduxjs/toolkit";

const logger: Middleware = (store) => (next) => (action) => {
  console.log("current State", store.getState());
  console.log("action", action);

  next(action);
  console.log("updated State", store.getState());
};

export default logger;
