import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import swal from'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  faBars = faBars;
  titularAlerta:string = "Tu mensaje ha sido enviado. Te contactaremos en breve."
  constructor() { }

  ngOnInit(): void {
  }

  enviarMensaje(){
  
    swal.fire('Envio exitoso...', this.titularAlerta, 'success');
  }

}
