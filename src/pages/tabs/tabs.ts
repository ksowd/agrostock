import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'BuyPage';
  tab2Root = 'SellPage';
  tab3Root = 'ExchangePage';
  tab4Root = 'RentPage';

  constructor() {

  }
}
