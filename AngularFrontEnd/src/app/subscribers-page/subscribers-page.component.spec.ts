import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribersPageComponent } from './subscribers-page.component';

describe('SubscribersPageComponent', () => {
  let component: SubscribersPageComponent;
  let fixture: ComponentFixture<SubscribersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribersPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
