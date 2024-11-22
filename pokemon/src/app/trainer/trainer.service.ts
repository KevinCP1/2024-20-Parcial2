import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrainerService {
  private allUrl = 'https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/trainers.json';

  constructor(private http: HttpClient) {}

  getAllTrainers(): Observable<any> {
    return this.http.get<any>(this.allUrl);
  }

  getTrainerDetail(id: number): Observable<any> {
    const detailUrl = `https://raw.githubusercontent.com/2603-Uniandes/jsons/refs/heads/main/2024-20%20Pokemon/${id}/trainers.json`;
    return this.http.get<any>(detailUrl);
  }
}
