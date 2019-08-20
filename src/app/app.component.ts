import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TraK Train 123';
  clickMessage = "";
  a: number = 10;
  b: number = 0;
  
  get c() { 
    return this.a + this.b;
  }

  onClickMe() { 
    //this.c = this.a + this.b;
  }
}
