import { Blockchain } from './blockchain.model';
import { AppState } from '../../app.state';
import { Component, OnInit } from '@angular/core';
import { Store, select  } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.css']
})
export class BlockchainComponent implements OnInit {


  blockchain: Observable<Blockchain[]>;

  constructor(private store: Store<{blockchain: Blockchain[]}>) { 
    
    this.blockchain = store.pipe(select(state => state.blockchain)); 
    console.log(this.blockchain)
  }

   

  addCoin(Item: any) {
    this.store.dispatch({
      type: 'ADD_COIN',
      payload: <Blockchain>{
        name: Item.name,
        price: Item.price
      }
    }); 
  } 

  getCoins() {
    
    //this.block = this.store.select('block')
    var x = this.blockchain
    return x 
  }

  ngOnInit(): void {
  }

}
