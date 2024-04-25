import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoAppHeaderComponent } from './proto-app-header.component';

describe('ProtoAppHeaderComponent', () => {
  let component: ProtoAppHeaderComponent;
  let fixture: ComponentFixture<ProtoAppHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtoAppHeaderComponent]
    });
    fixture = TestBed.createComponent(ProtoAppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
