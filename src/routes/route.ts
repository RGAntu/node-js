import type { IncomingMessage, ServerResponse } from "http";
import { productController } from "../controller/product.controller";

export const routeHandler = (req: IncomingMessage, res: ServerResponse) => {

    // console.log(req)
// console.log(req.url); // "/", "/user", "/products"
// console.log(req.method) // "GET", "POST", "DELETE"
const url = req.url;
const method = req.method;

if(url === "/" && method === "GET"){
    // console.log("this is root folder");
    res.writeHead(200,{"content-type" : "application/json"});
    res.end(JSON.stringify({message: " This is root Route"}));
}else if (url?.startsWith('/products')){
    productController(req,res)
}
else{
    res.writeHead(404,{"content-type": "application/json"});
    res.end(JSON.stringify({message: "Route not found."}));
}
}