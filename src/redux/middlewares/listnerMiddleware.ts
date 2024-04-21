import { createListenerMiddleware } from "@reduxjs/toolkit";

const listener = createListenerMiddleware();

export { listener };

export const listernerMiddelware = listener.middleware;
