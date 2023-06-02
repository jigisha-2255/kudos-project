import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendAKudoComponent } from './send-a-kudo.component';

describe('SendAKudoComponent', () => {
  let component: SendAKudoComponent;
  let fixture: ComponentFixture<SendAKudoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendAKudoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SendAKudoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
