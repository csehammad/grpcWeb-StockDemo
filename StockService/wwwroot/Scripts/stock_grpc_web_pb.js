/**
 * @fileoverview gRPC-Web generated client stub for stock
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.stock = require('./stock_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stock.StockClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.stock.StockPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stock.Empty,
 *   !proto.stock.Product>}
 */
const methodDescriptor_Stock_GetAllProducts = new grpc.web.MethodDescriptor(
  '/stock.Stock/GetAllProducts',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.stock.Empty,
  proto.stock.Product,
  /**
   * @param {!proto.stock.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stock.Product.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stock.Empty,
 *   !proto.stock.Product>}
 */
const methodInfo_Stock_GetAllProducts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stock.Product,
  /**
   * @param {!proto.stock.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stock.Product.deserializeBinary
);


/**
 * @param {!proto.stock.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stock.Product>}
 *     The XHR Node Readable Stream
 */
proto.stock.StockClient.prototype.getAllProducts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stock.Stock/GetAllProducts',
      request,
      metadata || {},
      methodDescriptor_Stock_GetAllProducts);
};


/**
 * @param {!proto.stock.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.stock.Product>}
 *     The XHR Node Readable Stream
 */
proto.stock.StockPromiseClient.prototype.getAllProducts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/stock.Stock/GetAllProducts',
      request,
      metadata || {},
      methodDescriptor_Stock_GetAllProducts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.stock.Product,
 *   !proto.stock.Result>}
 */
const methodDescriptor_Stock_AddProduct = new grpc.web.MethodDescriptor(
  '/stock.Stock/AddProduct',
  grpc.web.MethodType.UNARY,
  proto.stock.Product,
  proto.stock.Result,
  /**
   * @param {!proto.stock.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stock.Result.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.stock.Product,
 *   !proto.stock.Result>}
 */
const methodInfo_Stock_AddProduct = new grpc.web.AbstractClientBase.MethodInfo(
  proto.stock.Result,
  /**
   * @param {!proto.stock.Product} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.stock.Result.deserializeBinary
);


/**
 * @param {!proto.stock.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.stock.Result)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.stock.Result>|undefined}
 *     The XHR Node Readable Stream
 */
proto.stock.StockClient.prototype.addProduct =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/stock.Stock/AddProduct',
      request,
      metadata || {},
      methodDescriptor_Stock_AddProduct,
      callback);
};


/**
 * @param {!proto.stock.Product} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.stock.Result>}
 *     Promise that resolves to the response
 */
proto.stock.StockPromiseClient.prototype.addProduct =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/stock.Stock/AddProduct',
      request,
      metadata || {},
      methodDescriptor_Stock_AddProduct);
};


module.exports = proto.stock;

