import angular from 'angular';
import config from './config';
import productController from './controllers/product';
import productsController from './controllers/products';
import productService from './service'


let products = angular.module('tiy.products', []);

products.config(config);
products.controller('ProductsController', productsController);
products.controller('ProductController', productController);
products.service('ProductService', productService)


export default products;
