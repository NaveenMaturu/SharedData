import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';



@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css']
})
export class OtherComponent implements OnInit {



	a: any=[];
	name;
	email;
  constructor(private sharedService : SharedService) { }

  ngOnInit() {
  }
transferMessage(){
	
	   this.a.push({village:this.name,District:this.email});
	  //console.log(JSON.stringify(this.a));
	   this.sharedService.send(JSON.stringify(this.a));
	
}
}
