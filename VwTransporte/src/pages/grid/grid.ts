import { Component } from '@angular/core';


@Component({
  selector: 'page-grid',
  templateUrl: 'grid.html'
})
export class Grid {
  constructor() {}

  public usuario ={nombre:""};
	clicked(event){
	console.log(event);
	}
}
