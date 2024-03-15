import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoTuitComponent } from './nuevo-tuit.component';

describe('NuevoTuitComponent', () => {
  let component: NuevoTuitComponent;
  let fixture: ComponentFixture<NuevoTuitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuevoTuitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NuevoTuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
