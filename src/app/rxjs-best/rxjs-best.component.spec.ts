import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBestComponent } from './rxjs-best.component';

describe('RxjsBestComponent', () => {
  let component: RxjsBestComponent;
  let fixture: ComponentFixture<RxjsBestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxjsBestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsBestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
