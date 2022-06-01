import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = '';
  length = 0;
  includeUppercase = false;
  includeNumbers = false;
  includeSymbols = false;

  onChangeLength(target: EventTarget) {
    const value = (<HTMLInputElement>target).value;
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    else{
      this.length=0;
    }
  }
  onChangeUseUppercase() {
    this.includeUppercase = !this.includeUppercase;
  }
  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }
  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }
  generatePassword() {
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '1234567890';
    const symbols = '!@#$%^&*()';

    let validChars = 'abcdefghijklmnopqrstuvwxyz';

    if (this.includeUppercase) {
      validChars += uppercaseLetters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }
    let generatePassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatePassword += validChars.substring(index, index + 1);;
    }
    this.password = generatePassword
  }
  getPassword() {
    return this.password;
  }
}
