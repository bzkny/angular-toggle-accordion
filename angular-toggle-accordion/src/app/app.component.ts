import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  public hidden: boolean = true;
  public show: boolean = true;

hide() {
  this.hidden = !this.hidden;
  this.show = !this.show;
}
showAgain(){
  this.hidden = !this.hidden;
}
ngOnInit(){
  console.log('initially hidden is ' +  this.hidden);
}

}