import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MasksService {

  public mobile = [/0/,/(6|7)/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/,/\d/];

  constructor() { }
}
