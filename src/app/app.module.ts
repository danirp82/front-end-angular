import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DetailComponent } from './pages/detail/detail.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';

import { AuthInterceptor } from './core/auth.interceptor';

import { environment } from '../environments/environment';

import { APP_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { ClientsEffects } from './state/effects/clients.effects';
import { CompanyPipe } from './shared/pipes/company.pipe';
import { CardComponent } from './shared/components/card/card.component';
import { InitialsNamePipe } from './shared/pipes/initials-name.pipe';
import { ModalComponent } from './shared/components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    SpinnerComponent,
    CompanyPipe,
    CardComponent,
    InitialsNamePipe,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(APP_REDUCERS, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([ClientsEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
