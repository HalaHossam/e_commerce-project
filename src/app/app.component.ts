import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  public name = "E-commerce" ;
  onClick(){
    console.info("E-commerce@gmail.com")
  }
}
