import { ConceptDemosComponent } from './concept-demos/concept-demos.component';
import { RealWorldComponent } from './real-world/real-world.component';
import { UrlParamsComponent } from './concept-demos/url-params/url-params.component';
import { DemoRouteOneComponent } from './concept-demos/demo-route-one.component';
import { DemoRouteTwoComponent } from './concept-demos/demo-route-two.component';
import { Ng2StateDeclaration, Transition } from '@uirouter/angular';
import { BasicParamDisplayComponent } from './concept-demos/url-params/basic-param-display.component';
import { ResolvedParamDisplayComponent } from './concept-demos/url-params/resolved-param-display.component';
import { QueryParamDisplayComponent } from './concept-demos/url-params/query-param-display.component';
import { TypedParamDisplayComponent } from './concept-demos/url-params/typed-param-display.component';
import { AsyncResolvedParamDisplayComponent } from './concept-demos/url-params/async-resolved-param-display.component';
import { StudentService } from './concept-demos/url-params/student.service';
import { ProgrammaticRoutingComponent } from './concept-demos/programmatic-routing.component';

export const appRouting: Ng2StateDeclaration[] = [
	{
		name: 'conceptDemos',
		url: '/concept-demos',
		component: ConceptDemosComponent,
	},
	{
		name: 'realWorld',
		url: '/real-world',
		component: RealWorldComponent,
	},
	{
		name: 'conceptDemos.routeOne',
		url: '/route-one',
		component: DemoRouteOneComponent,
	},
	{
		name: 'conceptDemos.routeTwo',
		url: '/route-two',
		component: DemoRouteTwoComponent,
	},
	{
		name: 'conceptDemos.urlParams',
		url: '/url-params',
		component: UrlParamsComponent,
	},
	{
		name: 'conceptDemos.urlParams.basic',
		url: '/basic/:value',
		component: BasicParamDisplayComponent,
	},
	{
		name: 'conceptDemos.urlParams.query',
		url: '/query?value',
		component: QueryParamDisplayComponent,
		params: {
			value: {
				type: 'query',
				value: 'Default value',
			},
		},
	},
	{
		name: 'conceptDemos.urlParams.typedString',
		url: '/typed/string/:stringValue',
		component: TypedParamDisplayComponent,
		// Use the `params` config when you want to fully configure a param
		params: {
			stringValue: {
				type: 'string',
				value: 'Value from config',
			},
		},
	},
	{
		name: 'conceptDemos.urlParams.typedNumber',
		// If you just need the type, you can use {name:type}
		url: '/typed/number/{numericValue:int}',
		component: TypedParamDisplayComponent,
	},
	{
		name: 'conceptDemos.urlParams.typedBoolean',
		url: '/typed/boolean/{booleanValue:bool}',
		component: TypedParamDisplayComponent,
	},
	{
		name: 'conceptDemos.urlParams.typedDate',
		url: '/typed/boolean/{dateValue:date}',
		component: TypedParamDisplayComponent,
	},
	{
		name: 'conceptDemos.urlParams.typedPattern',
		// Five-letter word, first letter capitalized
		// The .* allows more characters after the above
		url: '/typed/pattern/{patternValue:[A-Z][a-z]{4}.*}',
		component: TypedParamDisplayComponent,
	},
	{
		name: 'conceptDemos.urlParams.resolved',
		url: '/resolved/:value',
		component: ResolvedParamDisplayComponent,
		resolve: [
			{
				token: 'value',
				deps: [Transition],
				resolveFn: (t: Transition) => t.params()['value'],
			},
		],
	},
	{
		name: 'conceptDemos.urlParams.asyncResolved',
		url: '/async-resolved/:id',
		component: AsyncResolvedParamDisplayComponent,
		resolve: [
			{
				token: 'student',
				deps: [Transition, StudentService],
				resolveFn: (t: Transition, dao: StudentService) => {
					return dao.getStudentById(t.params()['id']);
				},
			},
		],
	},
	{
		name: 'conceptDemos.programmaticRouting',
		url: '/programmatic-routing',
		component: ProgrammaticRoutingComponent,
	},
	{
		name: 'routingLazily.**',
		url: '/routing-lazily',
		loadChildren: () =>
			import('../routing-lazily/routing-lazily.module').then((m) => m.RoutingLazilyModule),
	},
];
