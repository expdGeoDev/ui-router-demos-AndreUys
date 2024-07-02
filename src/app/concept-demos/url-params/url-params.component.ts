import { Component } from '@angular/core';
import { UIRouterModule } from '@uirouter/angular';

@Component({
	selector: 'app-url-params',
	standalone: true,
	imports: [UIRouterModule],
	templateUrl: './url-params.component.html',
	styles: ``,
})
export class UrlParamsComponent {
	today = new Date();
}
