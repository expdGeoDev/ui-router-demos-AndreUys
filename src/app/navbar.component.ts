import { Component } from '@angular/core';
import { SrefStatus, UIRouterModule } from '@uirouter/angular';

@Component({
	selector: 'app-navbar',
	standalone: true,
	imports: [UIRouterModule],
	template: `
		<div class="row">
			<div class="col">
				<nav class="navbar navbar-expand-md bg-primary-subtle">
					<div class="collapse navbar-collapse">
						<ul class="navbar-nav">
							<li
								class="nav-item"
								(uiSrefStatus)="handleLiChange($event, 'conceptDemos')"
							>
								<a
									uiSref="conceptDemos"
									uiSrefActive="active"
									[attr.aria-current]="ariaCurrentStates['conceptDemos']"
									class="nav-link"
								>
									Concept Demos
								</a>
							</li>
							<li
								class="nav-item"
								(uiSrefStatus)="handleLiChange($event, 'routingLazily')"
							>
								<a
									uiSref="routingLazily"
									uiSrefActive="active"
									[attr.aria-current]="ariaCurrentStates['routingLazily']"
									class="nav-link"
								>
									Lazy-load Routing
								</a>
							</li>
							<li
								class="nav-item"
								(uiSrefStatus)="handleLiChange($event, 'realWorld')"
							>
								<a
									uiSref="realWorld"
									uiSrefActive="active"
									[attr.aria-current]="ariaCurrentStates['realWorld']"
									class="nav-link"
								>
									Real-world example
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</div>
	`,
	styles: ``,
})
export class NavbarComponent {
	handleLiChange(event: SrefStatus, linkName: string) {
		// Only run this when event.active is true
		if (!event.active) return;

		// Reset everything to false, briefly.
		for (let key of Object.keys(this.ariaCurrentStates)) {
			this.ariaCurrentStates[key] = false;
		}

		// Update the appropriate value
		this.ariaCurrentStates[linkName] = 'page';
	}

	ariaCurrentStates: { [key: string]: boolean | string } = {
		conceptDemos: false,
		realWorld: false,
		routingLazily: false,
	};
}
