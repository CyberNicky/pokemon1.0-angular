import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  name:string = 'BULBASSAUR'
  attributesTypes:string[] = ['FIRE', 'ROCK']
  constructor(){

  }
  ngOnInit(): void {
   
  }

}
