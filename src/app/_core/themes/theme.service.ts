import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Theme } from './theme.enum';

@Injectable({ providedIn: 'root' })
export class ThemeService {

  private activeTheme = new BehaviorSubject<Theme>(Theme.LIGHT);

  get theme$(): Observable<Theme> {
    return this.activeTheme.asObservable();
  }

  setTheme(theme: Theme): void {
    this.activeTheme.next(theme);
  }
}
