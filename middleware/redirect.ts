import { ServerMiddleware } from '@nuxt/types';
// import { ROUTES } from '@/types';

const myServerMiddleware: ServerMiddleware = (req, res, next) => {
  enum ROUTES {
    MAIN = '/',
    HOME= '/home'
  }
  const redirect = ROUTES.MAIN === req.url;
  if (redirect) {
    res.writeHead(301, { Location: ROUTES.HOME });
    res.end();
  } else {
    next();
  }
};
export default myServerMiddleware;
