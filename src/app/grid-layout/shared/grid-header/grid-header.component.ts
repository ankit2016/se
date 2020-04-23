import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grid-header',
  templateUrl: './grid-header.component.html',
  styleUrls: ['./grid-header.component.scss']
})
export class GridHeaderComponent implements OnInit {
  openTool: boolean = false;
  @Output() refreshGridConfig: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  openGridConfigTool() {
    try {
      this.openTool = !this.openTool;
    } catch (error) {
      console.log(error);
    }
  }
  refreshGrid() {
    try {
      this.refreshGridConfig.emit();
    } catch (error) {
      console.log(error);
    }
  }

}
