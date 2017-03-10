import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysStoreComponent } from './sys-store.component';

describe('SysStoreComponent', () => {
  let component: SysStoreComponent;
  let fixture: ComponentFixture<SysStoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysStoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
