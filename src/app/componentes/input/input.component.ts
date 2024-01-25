import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {

  origin: any = '';
  destination: any = '';
  idaChecked: boolean = false;
  idaYRegresoChecked: boolean = false;
  fechaIda: string = '';
  fechaRegreso: string = '';

  constructor(private ApiService: ApiService) { }

  submitForm() {
    if (this.isValid()) {
      // Solo realiza la solicitud si el formulario es válido
      this.ApiService.getData().subscribe(response => {
        console.log('Respuesta de la API:', response);
        // Aquí puedes procesar la respuesta según tus necesidades
      });
    } else {
      console.log('El formulario no es válido. No se realizará la solicitud.');
    }
  }

  flightRoute: any; // Declara una propiedad para almacenar la respuesta de la ruta de vuelo

// ...

getFlightRoute() {
  if (this.isValid()) {
    // Solo realiza la solicitud si el formulario es válido
    this.ApiService.getFlightRoute(this.origin, this.destination).subscribe((response: any) => {
      console.log('Respuesta de la API:', response);
      this.flightRoute = response;
    });
  } else {
    console.log('El formulario no es válido. No se realizará la solicitud del API.');
  }
}

  onOriginChange() {
    this.origin = this.origin.toUpperCase();
  }

  onDestinationChange() {
    this.destination = this.destination.toUpperCase();
  }

  onCheckboxChange(checkbox: string) {
    if (checkbox === 'ida') {
      this.idaYRegresoChecked = false;
    } else if (checkbox === 'idaYRegreso' && this.idaChecked) {
      this.idaChecked = false;
    }
  }

  // Funciones para controlar la visibilidad de los campos de fecha
  verFechaIda(): boolean {
    return this.idaChecked || this.idaYRegresoChecked;
  }

  verFechaRegreso(): boolean {
    return this.idaYRegresoChecked;
  }

  // Ajuste: función para validar si el formulario es válido
  isValid(): boolean {
    // Ajusta la lógica según tus criterios de validación
    return (
      this.origin &&
      this.destination &&
      this.origin !== this.destination &&
      ((this.idaChecked && this.fechaIda) || (this.idaYRegresoChecked && this.fechaIda && this.fechaRegreso))
    );
  }
}
