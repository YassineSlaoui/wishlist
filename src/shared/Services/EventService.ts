import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

class eventObj {
    public eventName!: string;
    public payload: any;
}

@Injectable({
    providedIn: 'root'
})
export class EventService {
    private subject = new Subject();

    emit(eventName: string, payload: any) {
        this.subject.next({ eventName, payload });
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((receivedObj: any) => {
            if (eventName === receivedObj.eventName) {
                callback(receivedObj.payload);
            }
        })
    }

}