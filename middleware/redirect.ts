import { ServerMiddleware } from '@nuxt/types';

export enum ROUTES {
  MAIN = '/',
  HOME= '/home'
}

const myServerMiddleware: ServerMiddleware = (req, res, next) => {
  const redirect = ROUTES.MAIN === req.url;
  if (redirect) {
    res.writeHead(301, { Location: ROUTES.HOME });
    res.end();
  } else {
    next();
  }
};
export default myServerMiddleware;
