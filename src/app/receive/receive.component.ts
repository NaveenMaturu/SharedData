import { Component, OnInit } from '@angular/core';
import {SharedService} from '../shared.service';


@Component({
  selector: 'app-receive',
  templateUrl: './receive.component.html',
  styleUrls: ['./receive.component.css']
})
export class ReceiveComponent implements OnInit {
skype:any
  constructor(private sharedService : SharedService) { 

       this.sharedService.stream$.subscribe(this.receiveMessage.bind(this));
	   
	   }

  ngOnInit() {
  }
  
   receiveMessage(a) {
	  
	   this.skype=a
       console.log(a); // your message from Appcomponent 
    }

}
