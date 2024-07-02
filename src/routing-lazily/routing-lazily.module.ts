import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingLazilyHomeComponent } from './routing-lazily-home/routing-lazily-home.component';
import { UIRouterModule } from '@uirouter/angular';
import { routingLazilyRouting } from './routing-lazily-routing';

@NgModule({
	declarations: [RoutingLazilyHomeComponent],
	imports: [CommonModule, UIRouterModule.forChild({ states: routingLazilyRouting })],
})
export class RoutingLazilyModule {
	constructor() {
		console.log('RoutingLazilyModule');
	}
}
