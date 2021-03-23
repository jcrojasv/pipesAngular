import { Component } from '@angular/core';
import { interval } from 'rxjs';


interface Usuario {
  nombre: string;
  genero: string;
}

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  usuarios: Usuario[] = [
    {
      nombre: 'Patricia',
      genero: 'femenino',
    },
    {
      nombre: 'Juancarlos',
      genero: 'masculino'
    }
  ];

  indexUsuario: number = 0;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['María', 'Valeria', 'Scarlet'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarCliente() {
    this.indexUsuario = this.indexUsuario ? 0 : 1;
  }

  eliminarCliente() {
    if (this.clientes.length) {
      this.clientes.pop();
    }
  }

  validarClientes() {
    let buttonClass: string = 'p-button-sm p-button-outlined';
    return this.clientes.length
      ? `${buttonClass} p-button-danger`
      : `${buttonClass} p-button-secondary`
  }

  goTo(url: string) {
    window.location.href = url;
  }

  // key value pipe
  personas = {
    nombre: 'Juancarlos',
    edad: '43',
    direccion: 'Santiago, Chile'
  }

  // json pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Spiderman',
      vuela: false
    }
  ]

  // Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
