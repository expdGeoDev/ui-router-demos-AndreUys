import { Component } from '@angular/core';
import { StateService, UIRouterModule } from '@uirouter/angular';

@Component({
	selector: 'app-programmatic-routing',
	standalone: true,
	imports: [UIRouterModule],
	templateUrl: './programmatic-routing.component.html',
	styles: ``,
})
export class ProgrammaticRoutingComponent {
	constructor(private stateService: StateService) {}

	handleLinkClick(event: MouseEvent) {
		event.preventDefault();
		this.stateService.go('conceptDemos.routeOne');
	}

	handleButtonClick() {
		this.stateService.go('conceptDemos.routeTwo');
	}

	handleParamsClick(event: MouseEvent, param: number) {
		event.preventDefault();
		this.stateService.go('conceptDemos.urlParams.typedNumber', { numericValue: param });
	}
}
