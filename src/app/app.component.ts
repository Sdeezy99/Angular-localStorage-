import { Component } from '@angular/core';
import { LocalstorageService } from 'src/assets/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SessionApp';
  constructor(private localstore: LocalstorageService)
  {}

  savetoLocalStorage()
  {
    this.localstore.setItem("myKey", "Welcome to session App")
  }

  retrieveLocalStorage()
  {
    const value = this.localstore.getItem("myKey")
    console.log(value);
  }

  saveUser()
  {
    this.localstore.saveData("userid","AdminUser") 
  }

  getUserId()
  {
    console.log(this.localstore.getData("userid"))
  }
}
