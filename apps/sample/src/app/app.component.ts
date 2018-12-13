import { Component, Inject } from '@angular/core';
import { AX_ENVIRONMENT, Environment } from '@alium/core';

@Component({
  selector: 'sample-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample';

  constructor(@Inject(AX_ENVIRONMENT) public env: Environment) {}
}
