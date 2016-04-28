class ProductsController{
  constructor($state, ProductService, $http){
    this._$state = $state;
    this._ProductService = ProductService;
    this.products=[];
    this.terms="";

    this._ProductService.all()
      .then((response) =>{
        this.products = response.data.result;
        // console.log(this.products);
      })
      .catch((error) => {
        console.error("Error " + error);
      });

  }

  search() {
    this._ProductService.search(this.terms)
      .then((response) =>{
        // console.log(response);
        this.products = response.data.result;
      });

  }



}

export default ProductsController;
