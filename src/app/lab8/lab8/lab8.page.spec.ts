import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lab8Page } from './lab8.page';

describe('Lab8Page', () => {
  let component: Lab8Page;
  let fixture: ComponentFixture<Lab8Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Lab8Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
