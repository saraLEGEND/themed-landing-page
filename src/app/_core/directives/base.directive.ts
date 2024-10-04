import { Directive, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive()
export abstract class BaseDirective implements OnDestroy {

  private destroy$ = new Subject<void>();

  /**
   * When this method is called, it triggers the `takeUntil` logic in components.
   */
  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  /**
   * Helper function to use `takeUntil` directly with observables.
   */
  takeUntilDestroy<T>() {
    return takeUntil<T>(this.destroy$);
  }
}
