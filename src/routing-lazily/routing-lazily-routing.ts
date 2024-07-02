import { DemoRouteOneComponent } from '../app/concept-demos/demo-route-one.component';
import { DemoRouteTwoComponent } from '../app/concept-demos/demo-route-two.component';
import { RoutingLazilyHomeComponent } from './routing-lazily-home/routing-lazily-home.component';
import { Ng2StateDeclaration } from '@uirouter/angular';

export const routingLazilyRouting: Ng2StateDeclaration[] = [
	{
		name: 'routingLazily',
		url: '/routing-lazily',
		component: RoutingLazilyHomeComponent,
	},
	{
		name: 'routingLazily.routeOne',
		url: '/route-one',
		component: DemoRouteOneComponent,
	},
	{
		name: 'routingLazily.routeTwo',
		url: '/route-two',
		component: DemoRouteTwoComponent,
	},
];
