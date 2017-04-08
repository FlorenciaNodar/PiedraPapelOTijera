import { Component } from '@angular/core';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
  constructor() {}

  	public usuario ={nombre:""};
	clicked(event){
	console.log(event);
	}
}
