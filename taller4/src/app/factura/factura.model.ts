import { Items } from "./items.model";

export class Factura{

    constructor(public fecha:string,public cliente:string,public id:number, public items:Items[]){

    }
}