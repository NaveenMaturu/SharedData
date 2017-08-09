import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SharedService {
a: any=[];

    private _stream$ = new Rx.BehaviorSubject("");
    public stream$ = this._stream$.asObservable();

    send(msg : string) {
		this.a.push(JSON.parse(msg));
      this._stream$.next(JSON.stringify(this.a));
	 
    }
	
}

