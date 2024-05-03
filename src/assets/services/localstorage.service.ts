import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js'


@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {


  private keys = "12345";

  constructor() { }


  public saveData(keys: string, data:string):void
  {
    localStorage.setItem(keys, this.encrypt(data))
  } 

  // get data from local storage and decrypt it to plain text
  public getData(keys:string):string | null
  {
    let data = localStorage.getItem(keys)|| " ";
    return this.decrypt(data);
  }

    // remove data from local storage
  public removeData()
  {
    localStorage.clear();
  }

  private encrypt(txt: string):string
  {
    return CryptoJS.AES.encrypt(txt, this.keys).toString();
  }

  private decrypt(txtToDecrypt: string): string
  {
    return CryptoJS.AES.decrypt(txtToDecrypt,this.keys).toString(CryptoJS.enc.Utf8);
  }

  setItem(key: string, value:any):void
  {
    localStorage.setItem(key,value)
  }
  
  getItem(key: string): string|null
  {
    return localStorage.getItem(key);
  }
  // Remove one item from local storage
  removeItem(key: string): void
  {
    localStorage.removeItem(key)
  }
  // Clear items in the local storage
  clearAll():void
  {
    localStorage.clear()
  }
  
}
