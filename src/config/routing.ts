const routing: { [index: string]: any; } = {
  helloIndex: {
    method: 'get',
    uri: '/',
    controller: 'Controller/HelloController:index',
    middlewares: [],
  },
  helloPost: {
    method: 'post',
    uri: '/hello',
    controller: 'Controller/HelloController:post',
    middlewares: [],
  },
  helloPut: {
    method: 'put',
    uri: '/hello',
    controller: 'Controller/HelloController:put',
    middlewares: [],
  },
  helloDelete: {
    method: 'delete',
    uri: '/hello',
    controller: 'Controller/HelloController:delete',
    middlewares: [],
  },
};

export default routing;
