import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoAppBodyComponent } from './proto-app-body.component';

describe('ProtoAppBodyComponent', () => {
  let component: ProtoAppBodyComponent;
  let fixture: ComponentFixture<ProtoAppBodyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtoAppBodyComponent]
    });
    fixture = TestBed.createComponent(ProtoAppBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
