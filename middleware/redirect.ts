import { ServerMiddleware } from '@nuxt/types';

const myServerMiddleware: ServerMiddleware = (req: any, res: any, next: Function) => {
  const redirects = [
    {
      from: '/',
      to: '/home'
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
