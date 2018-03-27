const routing: { [index: string]: any; } = {
  helloIndex: {
    method: 'get',
    uri: '/',
    controller: 'Controller/HelloController:index',
    middlewares: [],
  },
};

export default routing;
