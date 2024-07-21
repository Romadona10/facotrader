import { Component } from '@angular/core';
import { MarketTile } from '../shared/market-tile interface';

@Component({
  selector: 'app-marketanalysis',
  templateUrl: './marketanalysis.component.html',
  styleUrls: ['./marketanalysis.component.scss']
})
export class MarketanalysisComponent {

  showForm: boolean = false;

  marketTiles: MarketTile[] = [
    {
      name: 'tradingview',
      imageUrl: 'http://tradingview.com/favicon.ico',
      link: 'http://tradingview.com'
    },
    {
      name: 'coinmarketcap',
      imageUrl: 'http://coinmarketcap.com/favicon.ico',
      link: 'http://coinmarketcap.com'
    },
    {
      name: 'x',
      imageUrl: 'http://x.com/favicon.ico',
      link: 'http://x.com'
    },
    {
      name: 'telegram',
      imageUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAADACAMAAAB/Pny7AAAAaVBMVEX///8Aru3m8/oApOwAq+2QzvN3xPIAqewAp+wApet3xfH5/f4ArOzz+/3P7frt+P13yfKX1vW85Pjb8fqr3vXG6Pk1te6J0fRZwvFLt+8wsu5Duu+g2/V9zPJsxfKo2vVkv/Di9/u05PVZsr8QAAAF0klEQVR4nO2di3KjIBRAQ8IupqIRxUd8Jen/f+SCJk2bKGR35WHmnm1nZ5zWyRkULnC53WwAAAAAAAAAAAAAAAAAAAAAAAAAAADuRHHKWdklH7//lY8rv5OkKxlP48iNScaqY13XCFGK/x9KKULidseKZbZNQt7QK2gxxvth2vDQokrU1mRJi0enoG6tPW5xExgzufrsm9iKyqGl2KyKBNP2YMGlI4abZYSSzrjNtt/bUJHs+61Zl0NCbLkgRBKjbROWFl6XO7g02UefkJX35QZFJ3MucWPVRdiY66HDzupDNth0ph60tLbcMEKmTs24RJ3FnuwG6cwENnFhvWFE0xRm3pqTg4YRTWOkQ9v2TmSwkTggc/GUyefMxGQtD1y4IBTky7uErSuZdvmhxknHLDHROUe99eF/BPfLyxwaVzLN8hOBrZvOTHZny/fNWzcqEgMyjhpGNI0BGUedmejODMg4GmbEQGNAxtqqzCN7kPFUZrceGbkhot5LWIuMsKiPXXtKVKsL65ChGB2TMcCPFTYrkKGYFn379TnL+WHMhMxuWRV0Zvm3cDibv73nMpTUCf85G45WKoP3DYsfw/rLKmVIUKXb5+lWvD4ZuifJ9FZ/Ot+/+ClDA8TmZo1sTb2ZHOQrxaJRtR4ZYdIkysU8xaTcLxmM67NuI1yxJeeTDMbHLtUtsFwUN/BHBpOKxfolyVixjuWJDCW05xOvSsROD37cdxnRE3f51POVn5+W9jvLU4C/lKFBzbKp8TEqa0z6h5bpfZYhu4IfJl+VuKKUNA+WoWpP3q0MFW/9zE5kxETwT4rHyxfV2q9DGTkT7ubGx6wiFOHm+brtafNLMhTXDbvM3OLARbNQXD2/SVyVxuJIhuKiP82Oj1m/p6LhplKVmOquLmRkpmiZzo6PB14Q+RBO7oN1fslQjJVDfdbJJ4micqrhQlXPbF+GoMmh/kbEKzq4sMmZWVR5JENxMjnUf/3uuMhH8bTLJlOmflmWIfOvioQX4/Lr7CZ4qtxitCtDWuVvJnj8qDs+9xNcmftlV2an2tvO8LhLRYPP2Z8pFSq2ZYL5lonYNTmd1vMuoSpmtv/OsGzy/Q+H8GVwKRSLGdGHMsXAdtdMioTHT0t721Nx/ZS4UWXzZOp8CevjDCUikmE8v9z7qyjtrxGXCMeU6Xy5Ol/CTTiDUdGXfAwDDjwp8JeLOmVMk8jqKmoW8Vnd9B0rk3ONb58QV5q1mVZ9U7fzGTpY3S5Mhfw/+aVOMXI+bf7O3PTmRpSsRoYkujtn5/XIqGOdjTxhsB6ZXnfnXJOV75EMorqUca5J/vJKptGsNesy2X2SEXEZU32cgy4t1ysZMfT0itBsq0vL9UtGLkHNTJg3ujmzfzKycWZjTe1JFu9kZBhaTt841/2qfzJITnomg+dcl2HkpYyY9Ewsz+gPTPgpI2yqpzEnUiRneS0j5gP145izrXRnDLyVER3Bw5iTaQ/l+isj+4EfY06qTf72WUYGBPcxJ9Q+ZX7LiEftyG79QKs/YuC3jGycawWT9oW6Ir7LDBmnFWPNKyUs/JcR4OC1IimrkHmVtzrY8FYyK0iffx0TJ5ucHdMycebsrU4DunIxck7znU7QujvbrNve+RcZN1Un5GL18jL66a0pmXL5I/RvValhk7tqGQM1NN6ruonVOm13DFVse6eKQJu4cDDSYEO1mpx0ziY65oHcftNgVTbUfxGW9ou1mStxqN3kWtylMVgiWJ1MubxLPZvWuQAhs1tHkxmtdRx1FiO0wFA9wC8Oib3as2artUqicm+nKvDe1AjznZBTC4MnoZZqg2cVMdwPYKJJ61ySz2bZUu3fkTXbm/mMbgOEvC9kIubi1ecxRUVvtfr8QHZKzseiqIfsC4wJEV9E/I+HbzL8G76+rgxXxyvk/jNkvCj/LEBxPJ6Tk/W/CzASZXnKW1b+WoCStac0nzymCgAAAAAAAAAAAAAAAAAAAAAAAADAX/EHhvZyJOq+MDkAAAAASUVORK5CYII=',
      link: 'http://telegram.org'
    }
  ];

  newTile: MarketTile = {
    name: '',
    imageUrl: '',
    link: ''
  };



  navigateTo(url: string): void {
    window.open(url, '_blank');
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  addMarketTile(): void {
    if (this.newTile.name && this.newTile.imageUrl && this.newTile.link) {
      this.marketTiles.push({ ...this.newTile });
      this.newTile = {
        name: '',
        imageUrl: '',
        link: ''
      };
      this.showForm = false;
    }
  }
}
