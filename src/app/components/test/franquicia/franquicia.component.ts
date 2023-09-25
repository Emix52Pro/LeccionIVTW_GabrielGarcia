import { Component, OnInit } from '@angular/core';
import { FranquiciaserviceService } from 'src/app/services/test/franquiciaservice.service';

@Component({
  selector: 'app-franquicia',
  templateUrl: './franquicia.component.html',
  styleUrls: ['./franquicia.component.css']
})
export class FranquiciaComponent implements OnInit {
  //variables
  franquicias:any=[];


  constructor(private franquicia_Service:FranquiciaserviceService ){

  }

  ngOnInit(): void {

   this.listarFranquicias();
}

eliminarFranquicia(id_franquicia:string){
  this.franquicia_Service.deleteFranquicia(id_franquicia).subscribe(
    res=>{
      window.alert("Franquicia eliminada correctamente");
      this.listarFranquicias();
    },
    err=>{
      window.alert("Error al eliminar la franquicia");

    }

  )
}

listarFranquicias(){
  this.franquicia_Service.getFranquicias().subscribe(
    res=>{
      this.franquicias=res;
      console.log(this.franquicias);},
    err=>{console.log(err);}
   );
}

}
