import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalInvoicesComponent } from './total-invoices.component';

describe('TotalInvoicesComponent', () => {
  let component: TotalInvoicesComponent;
  let fixture: ComponentFixture<TotalInvoicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalInvoicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
