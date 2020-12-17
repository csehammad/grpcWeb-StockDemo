const { Product, Empty, Result } = require('./stock_pb');
const { StockClient } = require('./stock_grpc_web_pb');

var client = new StockClient(window.location.origin);

var txtName = document.getElementById('name');
var txtCode = document.getElementById('code');
var btnAddProduct = document.getElementById('addProduct');
var trProducts = document.getElementById('trProducts');
 

var getAllProducts = document.getElementById('getAllProducts');
 

//var streamInput = document.getElementById('stream');
var resultText = document.getElementById('result');
//var streamingCall = null;

getAllProducts.onclick = function () {
    trProducts.innerHTML = "";
    getProductsStream();

};

 
btnAddProduct.onclick = function () {
   
    var request = new Product();
    request.setName(txtName.value);
    request.setCode(txtCode.value);

    client.addProduct(request, {}, (err, response) => {
        console.log(response);
     
        resultText.innerHTML = htmlEscape(response.getMsg());
    });

    
};

 
function getProductsStream () {
   

            var request = new Empty();
       
    streamingCall = client.getAllProducts(request, {});
    streamingCall.on('data', function (response) {
        console.log("stream started");
        trProducts.innerHTML += "<tr><td>" + htmlEscape(response.getName()) + "</td><td>" + htmlEscape(response.getCode())+"</td></tr>";
    });

    streamingCall.on('end', function () {
        console.log("Stream ended");
        });
   
};
 
function htmlEscape(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
}