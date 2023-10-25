import { Subscriber } from './model/subscriber.model';
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from "rxjs";
import { SubscriberService } from './services/subscribers.service';

@Component({
    selector: 'app-subscribers-page',
    templateUrl: './subscribers-page.component.html',
    styleUrls: ['./subscribers-page.component.css'],
    providers: [ SubscriberService ] 
})

export class SubscribersPageComponent implements OnInit {
    sub!: Subscription;
    username: string = 'Subscriber List';
    subscribers: Subscriber[] = [];
    subscriberForm!: FormGroup;
    errorMessage: string = "";

    constructor(private fb: FormBuilder, private SubscriberService: SubscriberService) { }

    ngOnInit(): void {
        this.subscriberForm = this.fb.group({
            id: null,
            username: ['', Validators.required],
            address: '',
            email: [null, Validators.required]
        });
        this.getAllSubscribers();
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getAllSubscribers() {
        this.SubscriberService.getAllSubscribers().subscribe((storeOwner: Subscriber[]) => {
            this.subscribers = storeOwner;
        });
    }

    submit() {
        console.log('Submit was called on subscriber form: ', this.subscriberForm.value);
        this.reset();
    }

    add(subscriber: Subscriber) {
        console.log(subscriber);
        this.SubscriberService.createSubscriber(subscriber).subscribe(() => {
            console.log("Subscriber created");
            this.getAllSubscribers();
        });
    }

    update(subscriber: Subscriber) {
        this.SubscriberService.updateSubscriber(subscriber).subscribe(() => {
            console.log("Subscriber with id " + subscriber.id + " updated");
            this.getAllSubscribers();
        })
    }

    edit(subscriber: Subscriber) {
        let id = subscriber.id;
        console.log('id to be edited', id);
        this.subscriberForm.patchValue({
            id: subscriber.id,
            username: subscriber.username,
            address: subscriber.address,
            email: subscriber.email,
        });
    }

    delete(subscriber: Subscriber) {
        this.SubscriberService.deleteSubscriber(subscriber).subscribe(() => {
            console.log("Subscriber deleted");
            this.getAllSubscribers();
        });
    }

    reset() {
        this.subscriberForm.reset();
    }
}