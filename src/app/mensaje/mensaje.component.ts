import { Component, OnInit } from '@angular/core';
import { Mensaje } from './mensaje'; 
import { MensajeService } from './mensaje.service';
import { Clipboard } from '@angular/cdk/clipboard'; // npm install @angular/cdk --legacy-peer-deps  y entrar al archivo package.json modifivar la version del "@angular/cdk": "^17.1.2" por la que se esta trabajando en angular nuevamente actulizar con npm install
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css','./responsive.component.css']
})
export class MensajeComponent implements OnInit{

  mensaje:Mensaje = new Mensaje();
  respuesta!:string;
  public errores: string[] = [];
  

  constructor(private mensajeService:MensajeService, private clipboard:Clipboard){}

  ngOnInit(): void {}

  encriptar(){
  this.mensajeService.encriptar(this.mensaje).subscribe(
    (respuesta)=>{
      this.respuesta = respuesta.mensaje
      console.log('Texto encriptado: ', this.respuesta);
      Swal.fire('Mensaje encriptado', `Mensaje encriptado con éxito`, 'success');
    }
  )
  }

  desencriptar(){
  const mensajeEncriptados: Mensaje[] = [{ mensaje : this.respuesta}];

  this.mensajeService.desencriptar(mensajeEncriptados).subscribe(
    (respuesta)=>{
      this.respuesta = respuesta[0].mensaje;
      console.log('Texto desencriptado: ', this.respuesta);
      Swal.fire('Mensaje desencriptado', `Mensaje desencriptado con éxito`, 'success');
    }
  )
  }

  copiar(){
    if(this.respuesta){
      this.clipboard.copy(this.respuesta);
      console.log("Texto copiado al portapapeles: "+this.respuesta)
      Swal.fire('Mensaje copiado','', 'success');
    }
  }
}
