import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, catchError, filter, Subscription, tap, throwError } from 'rxjs';

import { User } from '../core/models/user';

const uri = '../../assets/data/CountryCodes.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {

  private user$$ = new BehaviorSubject<undefined | null | User>(undefined);
  user$ = this.user$$.asObservable().pipe(filter((value): value is User | null => value !== undefined));
  user: User | null = null;
  subscription: Subscription;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => {
      this.user = user;
    })
  }

  getAllPrefix() {
    return this.http.get(`${uri}`);
  }
  register(username: string, email: string, password: string, rePassword: string, tel?: string
  ) {
    return this.http.post<User>('/api/register', { username, email, password, rePassword, tel }).pipe(
      tap((user) => this.user$$.next(user))
    );
  }
  login(email: string, password: string) {
    return this.http.post<any>('/api/login', { email, password }).pipe(
      tap((user) => this.user$$.next(user)));
  }
  logout() {
    return this.http.post<void>('/api/logout', {})
      .pipe(tap(() => this.user$$.next(null)));;
  }
  getProfile() {
    return this.http.get<User>('/api/users/profile')
      .pipe(
        tap(user => this.user$$.next(user)),
        catchError((err) => {
          this.user$$.next(null);
          return throwError(() => err);
        })
      );
  }
  setProfile(username: string, email: string, tel?: string) {
    return this.http.put<User>('/api/users/profile', { username, email, tel })
      .pipe(tap(user => this.user$$.next(user)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
