import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoAppComponent } from './proto-app.component';

describe('ProtoAppComponent', () => {
  let component: ProtoAppComponent;
  let fixture: ComponentFixture<ProtoAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtoAppComponent]
    });
    fixture = TestBed.createComponent(ProtoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
