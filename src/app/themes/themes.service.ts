import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Theme } from '../core/models/theme';
import { Post } from '../core/models/post';

const baseUrl = environment.baseUrl;

@Injectable({
  providedIn: 'root',
})
export class ThemesService {
  constructor(private http: HttpClient) {}

  loadAllThemes(): Observable<Theme[]> {
    return this.http.get<Theme[]>(`${baseUrl}/themes`);
  }

  loadAllPosts(limit: number): Observable<Post[]> {
    return this.http.get<Post[]>(`${baseUrl}/posts?limit=${limit}`);
  }
}
