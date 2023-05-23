import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-elimina',
  templateUrl: './elimina.component.html',
  styleUrls: ['./elimina.component.css']
})
export class EliminaComponent implements OnInit {

  @Input()
  cliccato = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();


  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


  click(){
    this.cliccato = true;
    this.change.emit(this.cliccato);
  }

}
