import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loginPopVal:boolean = false;
  regPopVal:boolean = false;
  userLoggedId:boolean = false;
  userNotLoggedId:boolean = true;
  loggedInUserName:string = '';
  active:string = '';

  ngOnInit() {
    let nameFrmStorage:object = JSON.parse(localStorage.getItem(this.loginData));
    this.doLogin(nameFrmStorage, 'pageLoad');
  }

  lname:string = '';
  pwd:string = '';
  loginData:string = 'loginData';

  loginPopUp(ev) {
    if(this.regPopVal) {
      this.regPopVal = !this.regPopVal;
    }
    this.loginPopVal = !this.loginPopVal;
  }
  regPopUp(ev) {
    if(this.loginPopVal) {
      this.loginPopVal = !this.loginPopVal;
    }
    this.regPopVal = !this.regPopVal;
  }

  doRegister(val) {
    console.log(val.lname);
    console.log(val.pwd);
    let loginObj = {lname: val.lname, pwd: val.pwd};
    localStorage.setItem(this.loginData, JSON.stringify(loginObj));
    alert('Register successfully');
    this.regPopVal = !this.regPopVal;

  }

  doLogin(val, mode) {
    let nameFrmStorage:object = JSON.parse(localStorage.getItem(this.loginData));
    console.log(nameFrmStorage);
    if (nameFrmStorage != null){
    if(nameFrmStorage['lname'] === val.lname && nameFrmStorage['pwd'] === val.pwd){
      if(mode != 'pageLoad'){
        alert('Login successful');
      } 
        this.userLoggedId = true;
        this.userNotLoggedId = false;
        this.loggedInUserName = nameFrmStorage['lname'];
    } else {
      alert('Login failed.!');
    }
  } else {
    if(mode != 'pageLoad') {
      alert('Cant find user, Please register');
    }
  }


  }
}
