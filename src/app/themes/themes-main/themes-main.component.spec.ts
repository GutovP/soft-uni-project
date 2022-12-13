import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainThemesComponent } from './themes-main.component';

describe('MainThemesComponent', () => {
  let component: MainThemesComponent;
  let fixture: ComponentFixture<MainThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainThemesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
