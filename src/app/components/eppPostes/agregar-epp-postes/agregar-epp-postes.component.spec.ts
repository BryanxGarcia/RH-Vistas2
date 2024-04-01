import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEppPostesComponent } from './agregar-epp-postes.component';

describe('AgregarEppPostesComponent', () => {
  let component: AgregarEppPostesComponent;
  let fixture: ComponentFixture<AgregarEppPostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEppPostesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEppPostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
