using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Grpc.Core;
using StockServices.Protos;

namespace StockServices.Services
{
    public class StockService : Stock.StockBase
    {

         public static List<Product> _allProducts = new List<Product>();
       

        public override Task<Result> AddProduct(Product request, ServerCallContext context)
        {
             
                if (string.IsNullOrEmpty(request.Name))
                    return Task.FromResult<Result>(new Result { Msg = "Product Name Can't be nulled", Status = false });

                if (_allProducts.FirstOrDefault(f => f.Code == request.Code) != null)
                    return Task.FromResult<Result>(new Result { Msg = "Product is already Added", Status = false });



                _allProducts.Add(request);

                return Task.FromResult<Result>(new Result { Msg = "Added. Total Products: "+_allProducts.Count.ToString(), Status = true });

        }
        

        public override async Task GetAllProducts(Empty request, IServerStreamWriter<Product> responseStream, ServerCallContext context)
        {
             
                foreach (var each in _allProducts)
                {
                    
                    await responseStream.WriteAsync(each);
                }
            
        }


    }
}
