import { Component, OnInit } from '@angular/core';
import { GridLayoutService } from './grid-layout.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.scss']
})
export class GridLayoutComponent implements OnInit {
  public gridList: any;
  selectedGrid: any;
  openGridInfo: boolean;
  gridConfig: any;
  gridWidth: any;
  gridHeight: any;
  gridMargin: any;
  constructor(
    private gridService: GridLayoutService,
    private _router: Router
  ) {
    this.gridList = JSON.parse(localStorage.getItem('gridList'));
    console.log(this.gridList);
    this.setGridConfig();
  }

  ngOnInit() {
  }

  /**
   * Method for add like/dislike
   */
  submitRating(currentRating, _itemIndex, givenRating) {
    try {
      setTimeout(() => {
        if (currentRating === 0) {
          this.gridList[_itemIndex] = givenRating;
        } else if (currentRating > 0 && givenRating === 1) {
          this.gridList[_itemIndex] = 0;
        } else if (currentRating > 0 && givenRating === 2) {
          this.gridList[_itemIndex] = givenRating;
        }
        localStorage.setItem('gridList', JSON.stringify(this.gridList));
      }, 300);
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method for open the info popups
   * @param index to get to know which tile get clicked
   */
  getInfo(index) {
    try {
      this.selectedGrid = index;
      this.openGridInfo = true;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method for close tile info popup
   */
  closeInfoPopup() {
    try {
      this.openGridInfo = false;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method for fetch tile css info from localStorage and 
   * assign it to class variable which is bind with HTML
   */
  setGridConfig() {
    try {
      this.gridConfig = JSON.parse(localStorage.getItem('gridConfig'));

      this.gridWidth = this.gridConfig.width;
      this.gridHeight = this.gridConfig.heigth;
      this.gridMargin = this.gridConfig.margin;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * Method for navigate to the tile details page
   * @param item contains the click tile info
   */
  gotoGridDetail(item) {
    try {
      this.gridService.navigatedGrid = item;
      this._router.navigate(['grid-detail']);
    } catch (error) {
      console.log(error);
    }
  }
}
