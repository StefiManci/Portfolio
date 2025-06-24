import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestBook } from './guest-book';

describe('GuestBook', () => {
  let component: GuestBook;
  let fixture: ComponentFixture<GuestBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GuestBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuestBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
