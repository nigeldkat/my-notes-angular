import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotemembersComponent } from './notemembers.component';

describe('NotemembersComponent', () => {
  let component: NotemembersComponent;
  let fixture: ComponentFixture<NotemembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotemembersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotemembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
