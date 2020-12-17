// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: stock.proto
// </auto-generated>
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace StockServices.Protos {
  public static partial class Stock
  {
    static readonly string __ServiceName = "stock.Stock";

    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    static readonly grpc::Marshaller<global::StockServices.Protos.Empty> __Marshaller_stock_Empty = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::StockServices.Protos.Empty.Parser));
    static readonly grpc::Marshaller<global::StockServices.Protos.Product> __Marshaller_stock_Product = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::StockServices.Protos.Product.Parser));
    static readonly grpc::Marshaller<global::StockServices.Protos.Result> __Marshaller_stock_Result = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::StockServices.Protos.Result.Parser));

    static readonly grpc::Method<global::StockServices.Protos.Empty, global::StockServices.Protos.Product> __Method_GetAllProducts = new grpc::Method<global::StockServices.Protos.Empty, global::StockServices.Protos.Product>(
        grpc::MethodType.ServerStreaming,
        __ServiceName,
        "GetAllProducts",
        __Marshaller_stock_Empty,
        __Marshaller_stock_Product);

    static readonly grpc::Method<global::StockServices.Protos.Product, global::StockServices.Protos.Result> __Method_AddProduct = new grpc::Method<global::StockServices.Protos.Product, global::StockServices.Protos.Result>(
        grpc::MethodType.Unary,
        __ServiceName,
        "AddProduct",
        __Marshaller_stock_Product,
        __Marshaller_stock_Result);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::StockServices.Protos.StockReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of Stock</summary>
    [grpc::BindServiceMethod(typeof(Stock), "BindService")]
    public abstract partial class StockBase
    {
      public virtual global::System.Threading.Tasks.Task GetAllProducts(global::StockServices.Protos.Empty request, grpc::IServerStreamWriter<global::StockServices.Protos.Product> responseStream, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      public virtual global::System.Threading.Tasks.Task<global::StockServices.Protos.Result> AddProduct(global::StockServices.Protos.Product request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(StockBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_GetAllProducts, serviceImpl.GetAllProducts)
          .AddMethod(__Method_AddProduct, serviceImpl.AddProduct).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, StockBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_GetAllProducts, serviceImpl == null ? null : new grpc::ServerStreamingServerMethod<global::StockServices.Protos.Empty, global::StockServices.Protos.Product>(serviceImpl.GetAllProducts));
      serviceBinder.AddMethod(__Method_AddProduct, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::StockServices.Protos.Product, global::StockServices.Protos.Result>(serviceImpl.AddProduct));
    }

  }
}
#endregion