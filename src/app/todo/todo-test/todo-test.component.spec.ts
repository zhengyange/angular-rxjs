import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTestComponent } from './todo-test.component';

describe('TodoTestComponent', () => {
  let component: TodoTestComponent;
  let fixture: ComponentFixture<TodoTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
