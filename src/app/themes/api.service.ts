import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  loadAllThemes() {
    return this.http.get(`${baseUrl}/themes`);
  }

  loadAllPosts(limit: number) {
    return this.http.get(`${baseUrl}/posts?limit=${limit}`);
  }
}
