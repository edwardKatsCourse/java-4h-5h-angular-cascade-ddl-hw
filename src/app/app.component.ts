import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //имя:тип = чему равняется

  names:string[] = [];

  nameToAdd: string;

  addName() {
    this.names.push(this.nameToAdd);
    this.nameToAdd = '';
  }

  deleteName(valueFromChildEvent) {
    this.names = this.names.filter(name => name !== valueFromChildEvent);
  }


  title = 'cascadeDropDown';
  chosenCountryName: string;

  changeCountry(chosenCountry) {
    this.chosenCountryName = chosenCountry;
  }

  getCities() {
    if (!this.chosenCountryName) {
      return [];
    }

    return this.counties
      .find(country => country.countryName === this.chosenCountryName)
      .cities;
  }


  counties = [
    {
      countryName: 'Israel',
      cities: ['Tel-Aviv', 'Haifa']
    },
    {
      countryName: 'Australia',
      cities: ['Sydney', 'Kanberra']
    }
  ]
}
