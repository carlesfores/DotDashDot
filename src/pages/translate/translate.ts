import {Component, SimpleChanges} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TranslatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-translate',
  templateUrl: 'translate.html',
})
export class TranslatePage {

  request: string = '';
  requestSplit: Array<string> = [];
  response: string = '';
  action: number = 0;
  actions: Array<string> = [
      "Text to Morse",
      "Morse to Array",
      "Mixed content"
  ];
  error: boolean = false;
  errorMessage: string = '';
  errorMessages: Array<string> =[
      "Something goes wrong.",
      "Mixed content"
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TranslatePage');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  checkLength () {
    (this.request.length > 0) ? this.checkContent() : this.response = '';
  }

  checkContent() {

    this.clearErrorMEssage();

    if(/^[a-z0-9_ ]+$/i.test(this.request)) {
      this.action = 0;
    } else if (/^[.\-_ ]+$/i.test(this.request)) {
      this.action = 1;
    } else {
      this.action = 2;
    }

    switch (this.action) {

      case 0:
        this.mapToMorse();
        break;

      case 1:
        this.maptToText();
        break;

      case 2:
        this.showErrorMessage(this.errorMessages[1]);
        break;

      default:
        this.showErrorMessage(this.errorMessages[0]);
        break;

    }

  }

  mapToMorse () {
    this.requestSplit = this.request.split("");
    this.response = this.requestSplit.join("/");
  }

  maptToText () {
    this.requestSplit = this.request.split("");
    this.response = this.requestSplit.join("-");
  }

  showErrorMessage (msg: string) {
    this.error = true;
    this.errorMessage = msg;
  }

  clearErrorMEssage() {
    this.error = false;
    this.errorMessage = '';
  }


}
