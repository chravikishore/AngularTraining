import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneway',
  templateUrl: './oneway.component.html',
  styleUrls: ['./oneway.component.css']
})
export class OnewayComponent implements OnInit {

  a: number = 10;
  b: number = 10;

  constructor() { }

  ngOnInit() {
  }

}
