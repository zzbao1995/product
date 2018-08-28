import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observe',
  templateUrl: './observe.component.html',
  styleUrls: ['./observe.component.css']
})
export class ObserveComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(
      url => console.log('The URL:', url)
    );
    // tslint:disable-next-line:prefer-const
    let observable = Observable.create(function subscribe(observer) {
      let id = setInterval(() => {
        observer.next('hi');
      }, 1000);
    });
    // observable.subscribe(value => console.log(value));
  }

}
