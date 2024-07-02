import { Component } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/angular';

@Component({
	selector: 'app-basic-param-display',
	standalone: true,
	imports: [],
	template: `
		<h4>Basic Parameters</h4>
		<p>The parameter value was: {{ value }}</p>
	`,
	styles: ``,
})
export class BasicParamDisplayComponent {
	value: string | number = '';

	constructor(public globals: UIRouterGlobals) {
		this.value = globals.params['value'];
	}
}
