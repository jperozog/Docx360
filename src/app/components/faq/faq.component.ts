import { Component, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import swal from'sweetalert2';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FAQComponent implements OnInit {
  faBars = faBars;
  listapreguntas:any = []
  tituloSeleccionado:string = ""
  contenidoSeleccionado:string = ""
  titularAlerta:string = "Tu mensaje ha sido enviado. Te contactaremos en breve."
  general: any = [
    {
      id: 1,
      pregunta: "¿Requiero de conocimientos mínimos en materia fiscal y contable para aprovechar docX360 al máximo?",
      contenido: "No, docX360 es una app para facilitar la toma de decisiones de cualquier persona interesada o responsable de las operaciones de un RFC. "
    },
    {
      id: 2,
      pregunta: "¿Cómo obtienen y sincronizan mi información con el SAT? ",
      contenido: "Al registrar tu RFC y CIEC nos autorizas a descargar toda la información que tiene el SAT de tu RFC. Una vez que docX360 valida que los datos registrados son correctos, descargamos y clasificamos toda tu información para configurar los diversos paneles y reportes que ofrece docX360. Nuestro valor radica en los diversos algoritmos que desarrollamos para ayudarte a identificar posibles discrepancias y cruzar información con otros sistemas que utilices, para la toma de decisiones y en la preparación de los diversos informes que presentas al SAT. "
    },
    {
      id: 3,
      pregunta: "¿Es seguro compartir mi información fiscal a través de docX360? ",
      contenido: "Absolutamente. Contamos con seguridad SSL que garantiza que nuestro sitio es seguro y que la información viaja encriptada (usuario, contraseña y número de tarjeta). Además de sistemas de seguridad informática que funcionan bajo los estándares más estrictos. Si te quieres obtener información más detalla al respecto te sugerimos contactarnos."
    },
    {
      id: 4,
      pregunta: "¿docX360 puede sustituir a mi contador?",
      contenido: "Al contrario, docX360 es una herramienta de apoyo para el contador y todas aquellas personas responsables de la administración de un RFC. Por la forma en la que presenta la información,facilita/agiliza la id "
    }
  ]

  fiscal: any = [
    {
      id: 1,
      pregunta: "Si docX360 es un espejo del SAT ¿Eso significa que también puede monitorear y auditar mis percepciones y salidas en cuentas bancarias para identificar discrepancias fiscales en mis declaraciones? ",
      contenido: "Por el momento, únicamente descargamos los estados de cuenta pero no relacionamos o indexamos cada uno de los depósitos o retiros en dicha cuenta. Este servicio estará disponible en el 2021, así como la descarga y clasificación de algunos tipos de declaración para, cada día, facilitarla identificación de posibles discrepancias.  "
    },
    {
      id: 2,
      pregunta: "La mayoría de mis gastos, son a través de compañías en el extranjero; los comprobantes (invoices) que me emiten no generan IVA pero sí son deducibles, ¿docx360 también consideraestos invoices en sus reportes?  ",
      contenido: "No, salvo que haya sido emitido algún tipo de CFDI para el manejo de ciertas operaciones en el extranjero. Tratándose de facturas por servicios o compra de equipos, el responsable de la administración (contador generalmente) debe cargar manualmente estos gastos, ya que no aparecen en ningún registro del SAT"
    },
    {
      id: 3,
      pregunta: "Si la mayoría de mis transacciones son con compañías extranjeras ¿docX360 también es recomendable para mí? ",
      contenido: "Definitivamente. Con el simple hecho de tener un RFC, docX360 puede ser de gran ayuda para conocer detalles de la operación del RFC. Incluso para garantizar que alguien no haga mal uso de mi RFC. "
    },
    {
      id: 4,
      pregunta: "¿La nómina de mi empresa también será sincronizada de forma automática o requiere un proceso adicional? ",
      contenido: "docX360 lo considera uno de los servicios más relevantes para nuestros usuarios. docX360 tiene un panel para el manejo exclusivo de remuneraciones (nómina, asimilables y honorarios)  "
    },
    {
      id: 5,
      pregunta: "¿docX360 genera alertas automáticas en casos de CFDIs inválidos, proveedores en listas negras o discrepancias fiscales?  ",
      contenido: "Al ingresar a tu cuenta en docX360 podrás conocer el estatus CFDIs, vigentes o cancelados; clientes y proveedores que aparecen en las listas negras del SAT, entre otras. En breve podrás configurar las notificaciones que desees recibir, así como la periodicidad. "
    },
    {
      id: 6,
      pregunta: "Los reportes de mi contador difieren con los de docX360 ¿A qué se debe? ¿Puede haber errores en docX360?  ",
      contenido: "Nuestro margen de error puede ser del 2% en empresas que rebasan 500 mil CFDIs y del 1 % en empresas o personas con menos de 20 mil."
    }
  ]

  pagos: any = [
    {
      id: 1,
      pregunta: "¿Qué métodos de pago aceptan? ",
      contenido: "Transferencias y tarjetas de débito o crédito   "
    },
    {
      id: 2,
      pregunta: "¿Puedo subir o bajar el nivel de mi plan una vez iniciada la suscripción?",
      contenido: "No, ya que docX360 opera bajo un modelo de procesamiento de datos, por lo que una vez autorizada tu suscripción el servicio quedará activo por todo el año fiscal en curso. "
    },
    {
      id: 3,
      pregunta: "¿Requieren tarjeta de crédito para iniciar la prueba gratuita?",
      contenido: "No. Una vez que registras tu RFC, docX360 descargara el 100% de los comprobantes que tenga tu cuenta del mes anterior al de tu registro. Lo anterior para que puedas conocer los beneficios. Tendrás acceso al 100% de la funcionalidad. "
    },
    {
      id: 4,
      pregunta: "¿Hay costos adicionales por agregar empleados a la nómina de mi empresa? ",
      contenido: "Ninguno.   "
    },
    {
      id: 5,
      pregunta: "Si termino con mi suscripción ¿ustedes eliminan mis datos fiscales de su base de datos?   ",
      contenido: "No, deberás enviar una carta solicitando el borrado físico de tus datos para evitar cualquier problema en el futuro. "
    }
  ]

  constructor() { }

  ngOnInit(): void {
    this.listapreguntas = this.general
  }

  listaPreguntas(pregunta:string){
    this.tituloSeleccionado = ""
    this.contenidoSeleccionado = ""
    if(pregunta == "general"){
      this.listapreguntas = this.general
    }
    if(pregunta == "fiscal"){
      this.listapreguntas = this.fiscal
    }
    if(pregunta == "pagos"){
      this.listapreguntas = this.pagos
    }
  }

  seleccionarPregunta(id:number){


    
    this.listapreguntas.forEach((e:any) => {
        if (e["id"] == id) {
          this.tituloSeleccionado = e["pregunta"]
          this.contenidoSeleccionado = e["contenido"]

          let selected = document.getElementById(e["id"].toString());

          let a = e["id"] + 100;

          let selected2 = document.getElementById(a.toString());

          selected?.setAttribute("style", "padding-left:1%; padding-right:1%;    box-shadow: rgba(22, 27, 29, 0.25) 0px 4px 16px;border-radius:5px; margin-top:1%;");
          selected2?.setAttribute("style", "color:#01A0E2");
        }else{
          let selected = document.getElementById(e["id"].toString());

          let a = e["id"] + 100;

          let selected2 = document.getElementById(a.toString());

          selected?.setAttribute("style", "padding-left:0; padding-right:0;    box-shadow: none;border-radius:0 px;margin-top:0 %; ");
          selected2?.setAttribute("style", "color:gray");
        }
    });
    
  }

  enviarMensaje(){
  
    swal.fire('Envio exitoso...', this.titularAlerta, 'success');
  }

}
