class ProductController{
  constructor(ProductService, $http, $stateParams){
    this._$http = $http;
    this._ProductService = ProductService;
    this._$stateParams = $stateParams;
    this.id = this._$stateParams.id;
    this.product = "";
    this.viewProduct();

  }

  viewProduct() {
    this._ProductService.get(this.id)
      .then((response) =>{
        // console.log(response);
        this.product = response.data.result;
        console.log(this.product);
      });
    }

}

export default ProductController;
