import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom, take } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StudentService {
	baseUrl: string = 'http://localhost:8001';

	constructor(private client: HttpClient) {}

	async getStudentById(id: string) {
		let student$ = this.client.get<Student>(`${this.baseUrl}/students/${id}`);

		// The old way, but toPromise() is deprecated
		// return student$.pipe(timeout(2000)).toPromise();

		// The new way
		let p = lastValueFrom(student$.pipe(take(1)));
		return p.catch((e) => {
			console.log('getStudentById promise failed:', e);
			throw e;
		});
	}
}

export interface Student {
	id: string;
	firstName: string;
	lastName: string;
	dateOfBirth: Date | string;
	email: string;
	phoneNumber: string;
	address: Address;
}
export interface Address {
	street: string;
	city: string;
	province: string;
	country: string;
	postalCode: string;
}
