import { Component, signal } from '@angular/core';

@Component({
  standalone: true,
  imports: [],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export class ControlFlowComponent {

  public showContent = signal(false);

  public toggleContent() {
    this.showContent.update( value => !value);
  }

}
