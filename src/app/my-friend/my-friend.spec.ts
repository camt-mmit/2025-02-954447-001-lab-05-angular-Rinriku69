import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFriend } from './my-friend';

describe('MyFriend', () => {
  let component: MyFriend;
  let fixture: ComponentFixture<MyFriend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyFriend]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFriend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
