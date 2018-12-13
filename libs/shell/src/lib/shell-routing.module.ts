import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell/shell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ShellComponent }])
  ],
  exports: [RouterModule]
})
export class ShellRoutingModule {}
