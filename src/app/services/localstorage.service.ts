import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  saveData(key: string, data: any) {
    localStorage.setItem(key, data);
  }
  getData(key: string) {
    return localStorage.getItem(key);
  }
  deleteData(key: string): boolean {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (e) {
      return false;
    }
  }
  clearStorage(): boolean {
    try {
      localStorage.clear();
      return true;
    } catch (err) {
      return false;
    }
  }
}
