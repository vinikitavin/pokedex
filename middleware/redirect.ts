import { ServerMiddleware } from '@nuxt/types';

const myServerMiddleware: ServerMiddleware = (req, res, next) => {
  const redirects = [
    {
      from: '/',
      to: '/router'
    }
  ];
  const redirect = redirects.find(r => r.from === req.url);
  if (redirect) {
    res.writeHead(301, { Location: redirect.to });
    res.end();
  } else {
    next();
  }
};
export default myServerMiddleware;
