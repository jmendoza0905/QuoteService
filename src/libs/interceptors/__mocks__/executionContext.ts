const req = {
  url: 'url',
  method: 'TEST',
  params: 'params',
  query: 'query',
  route: 'route',
};

const res = {
  url: 'url',
  req,
};

const switchToHttp = () => jest.fn();
switchToHttp.getRequest = jest.fn(() => req);
switchToHttp.getResponse = jest.fn(() => res);

const executionContext = {
  switchToHttp,
};

export default executionContext;
