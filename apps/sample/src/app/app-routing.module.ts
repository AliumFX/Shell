import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { SignInComponent } from '@alium/auth';

/** APP ROUTES */
const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
    loadChildren: '@alium/shell#ShellModule'
  },
  {
    path: 'sign-in',
    component: SignInComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
