import { Component, Input } from '@angular/core';
import { Student } from './student.service';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-async-resolved-param-display',
	standalone: true,
	imports: [CommonModule],
	template: `
		<h4>Asynchronously Resolved Parameters</h4>
		<p>Student details</p>
		<ul *ngIf="student">
			<li>ID: {{ student.id }}</li>
			<li>First Name: {{ student.firstName }}</li>
			<li>Last Name: {{ student.lastName }}</li>
			<li>Date of Birth: {{ student.dateOfBirth }}</li>
			<!--			<li>City: {{ student.address.city }}</li>-->
			<!--			<li>State/Province: {{ student.address.province }}</li>-->
		</ul>
	`,
	styles: ``,
})
export class AsyncResolvedParamDisplayComponent {
	@Input()
	student: Student | undefined;
}
