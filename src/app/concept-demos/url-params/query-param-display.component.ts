import { Component } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/angular';

@Component({
	selector: 'app-query-param-display',
	standalone: true,
	imports: [],
	template: `
		<h4>Querystring Parameters</h4>
		<p>The parameter value was: {{ value }}</p>
	`,
	styles: ``,
})
export class QueryParamDisplayComponent {
	value: string | number = '';

	constructor(public globals: UIRouterGlobals) {
		this.value = globals.params['value'];
	}
}
