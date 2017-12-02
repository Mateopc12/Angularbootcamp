import { IItem } from './item/item.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  items: IItem[] = [{'id': 1, 'firstName': 'Kareem', 'lastName': 'Shelper', 'email': 'kshelper0@wp.com', 'gender': 'Male', 'isValid': false, 'birthday': '2017-01-14 13:08:52'}, {'id': 2, 'firstName': 'Aurelia', 'lastName': 'Northing', 'email': 'anorthing1@biblegateway.com', 'gender': 'Female', 'isValid': true, 'birthday': '2017-02-18 22:34:32'}, {'id': 3, 'firstName': 'Marcello', 'lastName': 'Tubb', 'email': 'mtubb2@amazon.com', 'gender': 'Male', 'isValid': false, 'birthday': '2017-10-03 22:46:47'}, {'id': 4, 'firstName': 'Edna', 'lastName': 'Farnall', 'email': 'efarnall3@163.com', 'gender': 'Female', 'isValid': true, 'birthday': '2017-02-25 21:27:26'}, {'id': 5, 'firstName': 'Rod', 'lastName': 'Wigfield', 'email': 'rwigfield4@baidu.com', 'gender': 'Male', 'isValid': false, 'birthday': '2016-12-15 10:26:03'}, {'id': 6, 'firstName': 'Marrissa', 'lastName': 'Harewood', 'email': 'mharewood5@gravatar.com', 'gender': 'Female', 'isValid': true, 'birthday': '2017-08-10 16:52:26'}, {'id': 7, 'firstName': 'Adena', 'lastName': 'Daile', 'email': 'adaile6@si.edu', 'gender': 'Female', 'isValid': false, 'birthday': '2017-03-30 16:09:28'}, {'id': 8, 'firstName': 'Thomas', 'lastName': 'Arrowsmith', 'email': 'tarrowsmith7@mozilla.com', 'gender': 'Male', 'isValid': false, 'birthday': '2017-09-30 05:11:12'}, {'id': 9, 'firstName': 'Paule', 'lastName': 'McGunley', 'email': 'pmcgunley8@mit.edu', 'gender': 'Female', 'isValid': true, 'birthday': '2017-03-27 17:49:51'}, {'id': 10, 'firstName': 'Domenico', 'lastName': 'Kach', 'email': 'dkach9@nytimes.com', 'gender': 'Male', 'isValid': true, 'birthday': '2017-07-28 22:14:55'}];
  constructor() { }

  ngOnInit() {
  }

  removeItem (item: IItem) {
    this.items = this.items.filter(obj => obj !== item);
  }

}
