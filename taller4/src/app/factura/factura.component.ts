
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Factura } from './factura.model';
import { Items } from './items.model';
import {NgbModal, ModalDismissReasons, NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  items: Items[] = [];
  facturas: Factura[] = [];
  nombre = "";
  precio=0;
  idFactura=0;
  cliente="";
  fecha = "";
  id=20210;
  idFact=0;
  sinFactura:boolean=true;
  desabilitadoBtnFact=true;
  desabilitadoBtnItem=true;
 
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
 ////-----------funviones que validan los formularios-------------------
  validarFormFact(){
    try{
      
      if(this.fecha!="" && this.cliente!=""){
        this.desabilitadoBtnFact=false
      }
      else{
        this.desabilitadoBtnFact=true
      }

     
    }
    catch(e){
      console.log("An error occurred on validarFormFact=>",e)
    }
  }

  validarFormItem(){
    try{
      
      if(this.nombre!="" && this.precio!=0){
     
        this.desabilitadoBtnItem=false
      }
      else{
        this.desabilitadoBtnItem=true
      }
    
     
    }
    catch(e){
      console.log("An error occurred on validarFormItem=>",e)
    }
  }

  ///--------funciones que abren los popup---------------------------
  openAgregarItem(idF: number,content: any){
    try{
      
      this.idFact=idF;
      console.log(idF)
      this.desabilitadoBtnItem=true;
      this.modalService.open(content)
     
    }
    catch(e){
      console.log("An error occurred on openAgregarItem=>",e)
    }
  }
  verItem(idFact:number,content: any){
    try{
      
      var buscarFactura=this.facturas.find(facturita=>facturita.id==idFact)
      if(buscarFactura==undefined){
        alert("el id de factura no existe")
      }
      else{
        this.items=buscarFactura.items;
        this.modalService.open(content)
      }
     console.log(this.items)
    }
    catch(e){
      console.log("An error occurred on verItem=>",e)
    }
  }

///----------funcion agregar items a un factura------------------------
  agregarItem(idFact:number){
    try{
      let item = new Items(this.nombre,this.precio,idFact)
      var buscarFactura=this.facturas.find(facturita=>facturita.id==idFact)
      if(buscarFactura==undefined){
        alert("el id de factura no existe")
      }
      else{
        buscarFactura.items.push(item)
        this.nombre="";
        this.precio=0;
        this.desabilitadoBtnItem=true;
        
      }
     console.log(this.facturas)
    }
    catch(e){
      console.log("An error occurred on agregarItem=>",e)
    }
  }

///----------funcion agrega una factura al sistema---------------------
  crearFactura(){
    try{
      let factura = new Factura(this.fecha,this.cliente,this.id,[])
      this.facturas.push(factura);
      this.id=this.id+1;
      this.sinFactura=false;
      this.fecha="";
      this.cliente="";
      this.desabilitadoBtnFact=true
      
    }
    catch(e){
      console.log("An error occurred on crearFactura=>",e)
    }
    
  }

}
