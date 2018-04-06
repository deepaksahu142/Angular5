import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  showPopup: boolean;
  dropDownText: boolean;
  defaultText: string = 'Deepak kumar sahu';
  trueFalseBoolean: boolean = true;
  serverText: boolean = false;
  serverName = 'test';
  retVal;
  retClass;
  public myArrayColors = ['red', 'green', 'blue', 'yellow'];
  buttonClicked() {
    this.dropDownText = true;
  }
  openPopup() {
    this.dropDownText = false;
    this.showPopup = true;
  }
  hidePopup() {
    this.showPopup = false;
  }
  deleteData() {
    this.showPopup = false;
    setTimeout(() => {
      alert('Hooray Data got deleted');
    }, 1000);
  }
  onCreateServer() {
    this.serverText = true;
  }
 onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  constructor() {
    this.showPopup = false;
    this.dropDownText = false;

    setTimeout(() => {
      this.trueFalseBoolean = false;
    }, 1000);
  }

  ngOnInit() {
  }

  public setValue(val: number) {
    if ( val === 1) {
      this.retVal = {'color': 'orange', 'font-size': '18px'};
    }

    if ( val === 2) {
      this.retVal = {'color': 'red', 'font-size': '20px'};
    }

    if ( val === 3) {
      this.retVal = {'color': 'blue', 'font-size': '21px'};
    }

    if ( val === 4) {
      this.retVal = {'color': 'grey', 'font-size': '22px'};
    }
    if ( val === 5) {
      this.retVal = {'color': 'green', 'font-size': '23px'};
    }
  }

   public chooseeClass(val: number) {
    if ( val === 1) {
      this.retClass = {'first': true, 'second': false};
    }

    if ( val === 2) {
      this.retClass = {'first': false, 'second': true};
    }
   }

  getTheme() {
    return this.retVal;
  }

  getClass() {
    return this.retClass;
  }

}
