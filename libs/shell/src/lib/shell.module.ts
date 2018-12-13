import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './components/shell/shell.component';
import { ShellRoutingModule } from './shell-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, ShellRoutingModule, MatToolbarModule, MatIconModule],
  declarations: [ShellComponent]
})
export class ShellModule {}
