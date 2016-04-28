class ProductService{
  constructor($q, $http){
    this._$q = $q;
    this._$http = $http;
    this.key="MDoyYzI2NDM1Ni0wYzg0LTExZTYtYWQzYi1mM2JiZDQ0MDEyODM6M3BWZG13cFQzQWhJY3RzWFRzY0ZXR0JuOW91NVNiQnlBajVH";
    // this.products = [];
  }

  all(){
    // let key="MDoyYzI2NDM1Ni0wYzg0LTExZTYtYWQzYi1mM2JiZDQ0MDEyODM6M3BWZG13cFQzQWhJY3RzWFRzY0ZXR0JuOW91NVNiQnlBajVH";
    console.log("in your all")
    // return new this._$q((resolve, reject) => {

    return this._$http.get(`https://lcboapi.com/products?access_key=${this.key}`);
  }

  get(id){
    return this._$http.get(`https://lcboapi.com/products/${id}?access_key=${this.key}`)
  }

  search(terms){
    return this._$http.get(`https://lcboapi.com/products?q=${terms}&access_key=${this.key}`)
  }

}



export default ProductService;
