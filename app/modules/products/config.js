function config($stateProvider){
  $stateProvider
  .state('products', {
    url: '/',
    controller: 'ProductsController as productsCtrl',
    template: require('./views/products.html')
  })
  .state('product', {
    url: '/product/:id',
    controller: 'ProductController as productCtrl',
    template: require('./views/product.html')
  });
}


export default config;
