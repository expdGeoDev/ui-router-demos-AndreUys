import { Component } from '@angular/core';
import { UIRouterGlobals } from '@uirouter/angular';

@Component({
	selector: 'app-typed-param-display',
	standalone: true,
	imports: [],
	template: `
		<h4>Typed Parameters</h4>
		<ul>
			<li>String Value: {{ stringValue || 'N/A' }}</li>
			<li>Numeric (int) Value: {{ numericValue || 'N/A' }}</li>
			<!-- Can't use || because boolean false fails it, but ?? only triggers on null or undefined-->
			<li>Boolean Value: {{ booleanValue ?? 'N/A' }}</li>
			<li>Date Value: {{ dateValue || 'N/A' }}</li>
			<li>RegExp Value: {{ patternValue || 'N/A' }}</li>
		</ul>
	`,
	styles: ``,
})
export class TypedParamDisplayComponent {
	stringValue: string;
	numericValue: number;
	// Allows printing "N/A" when there's no value set
	booleanValue: boolean | null;
	patternValue: string;
	dateValue: Date;

	constructor(public globals: UIRouterGlobals) {
		this.stringValue = globals.params['stringValue'];
		this.numericValue = globals.params['numericValue'];
		this.booleanValue = globals.params['booleanValue'];
		this.dateValue = globals.params['dateValue'];
		this.patternValue = globals.params['patternValue'];
	}
}
