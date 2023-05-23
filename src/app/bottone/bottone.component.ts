import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-bottone',
  templateUrl: './bottone.component.html',
  styleUrls: ['./bottone.component.css']
})
export class BottoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  cliccato = false;

  @Output()
  change: EventEmitter<boolean> = new EventEmitter<boolean>();

  click(){
    this.cliccato = true;
    this.change.emit(this.cliccato);
  }

}
