import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitComponent } from './tuit.component';

describe('TuitComponent', () => {
  let component: TuitComponent;
  let fixture: ComponentFixture<TuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TuitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
