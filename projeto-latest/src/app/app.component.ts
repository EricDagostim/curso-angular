import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from "./components/template/template-control-flow/template-control-flow.component";
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NewComponentComponent, TemplateBindingComponent, TemplateVariablesComponent, TemplateControlFlowComponent, TemplateDeferrableViewsComponent],
    template: `
  <!-- <router-outlet></router-outlet> -->
  <!-- <app-template-binding/>   -->
  <!-- <app-template-variables/> -->
  <!-- <app-template-control-flow/> -->
  <h1>Curso de angular</h1>
  <h2>Deferrable Views</h2>
  <app-new-component/>

  <app-template-deferrable-views/>
  `,
})

export class AppComponent {
  title = 'projeto-latest';
}