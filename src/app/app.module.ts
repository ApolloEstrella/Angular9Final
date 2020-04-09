import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { BlockchainComponent } from './components/blockchain/blockchain.component';

import { addCoinReducer } from './../../src/app/reducer/blockchain.reducer';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';    

import { ReactiveFormsModule } from '@angular/forms';
import { FormbuilderComponent } from './components/formbuilder/formbuilder.component';

const appRoutes: Routes = [
  { path: 'register', component: RegisterFormComponent },  
  { path: 'blockchain', component: BlockchainComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'formbuilder', component: FormbuilderComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    BlockchainComponent,
    ReactiveFormComponent,
    FormbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({blockchain: addCoinReducer}),
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }, // <-- debugging purposes only
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
