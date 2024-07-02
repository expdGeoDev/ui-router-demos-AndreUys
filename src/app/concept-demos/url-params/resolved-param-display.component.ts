import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-resolved-param-display',
	standalone: true,
	imports: [],
	template: `
		<h4>Resolved Parameters</h4>
		<p>The parameter value was: {{ value }}</p>
	`,
	styles: ``,
})
export class ResolvedParamDisplayComponent {
	@Input()
	value: string | number = '';
}
