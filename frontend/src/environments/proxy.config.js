const proxy = [
    {
      context: '/api',
      target: 'http://54.90.39.27:5000',
      pathRewrite: {'^/api' : ''}
    }
  ];
  module.exports = proxy;