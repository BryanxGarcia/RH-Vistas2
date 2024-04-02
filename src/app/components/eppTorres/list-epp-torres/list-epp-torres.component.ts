import { Component, OnInit } from '@angular/core';
import { Epptorres } from '../../../interfaces/eppTorres';

@Component({
  selector: 'app-list-epp-torres',
  templateUrl: './list-epp-torres.component.html',
  styleUrl: './list-epp-torres.component.css'
})
export class ListEppTorresComponent implements OnInit{
  Listaepptorres: Epptorres[] =[];
  p=10;
  constructor(){}


  ngOnInit(): void {
  }

  eliminarItem(PKepptorres: number){

  }
  verDetalles(PKepptorres: number){

  }
}
