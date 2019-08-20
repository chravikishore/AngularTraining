import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.css']
})
export class TwowayComponent implements OnInit {

  a: number = 10;
  b: number = 10;

  get c() {
    return this.a + this.b;
  }

  constructor() { }

  ngOnInit() {
  }

}
