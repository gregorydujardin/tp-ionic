import { Component } from '@angular/core';

import { ListePage } from '../liste/liste';
import { CartePage } from '../carte/carte';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabListe = ListePage;
  tabCarte = CartePage;

  constructor() {

  }
}
