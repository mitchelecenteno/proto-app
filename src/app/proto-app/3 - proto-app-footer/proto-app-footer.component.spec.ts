import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtoAppFooterComponent } from './proto-app-footer.component';

describe('ProtoAppFooterComponent', () => {
  let component: ProtoAppFooterComponent;
  let fixture: ComponentFixture<ProtoAppFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProtoAppFooterComponent]
    });
    fixture = TestBed.createComponent(ProtoAppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
