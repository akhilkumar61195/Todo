import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



export const apiUrls = {
  Employees: {
    employees: `${environment.apiUrl}/api/v1/employees`
  },
}

@Injectable({
  providedIn: 'root'
})


export class DataService {
  
  constructor(private http: HttpClient) { }
  
  getEmployees(): Observable<any> {
    
    return this.http.get(`${apiUrls.Employees.employees}`).pipe(map(response => response));
  }

}
