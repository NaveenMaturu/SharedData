import { Component } from '@angular/core';
import {SharedService} from './shared.service';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THD';
  
	a: any=[];
	name;
	email;
	constructor(private sharedService : SharedService) {
	   
   }
  /*  constructor(private sharedService : SharedService,public http: Http) {
	   console.log('hello world');
   this.getData();
   this.getNaveen();
   }
	private apiURL = "assets/data.json"
	data: any ={};
	getData(){
	return this.http.get(this.apiURL)
   .map(response=>response.json())
  }
  getNaveen(){
   this.getData().subscribe(data =>{
   //console.log(JSON.stringify(data));
    this.a = JSON.stringify(data)
     console.log(this.a);
})}
 */
 /* sendMessage(msg: string) {
		this.sharedService.send(msg);
	  } */
sendMessage(){
	
	   this.a.push({name:this.name,email:this.email});
	  //console.log(JSON.stringify(this.a));
	   this.sharedService.send(JSON.stringify(this.a));
	
}	  

}
