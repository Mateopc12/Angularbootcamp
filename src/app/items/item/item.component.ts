import { IItem } from './item.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() url: string;
  @Input() item: IItem;
  @Output() remove = new EventEmitter<IItem>();

  constructor() { }

  ngOnInit() {
  }

  removeItem(item: IItem) {
    this.remove.emit(item);
  }

}
