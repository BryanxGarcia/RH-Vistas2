import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEpptorresComponent } from './agregar-epptorres.component';

describe('AgregarEpptorresComponent', () => {
  let component: AgregarEpptorresComponent;
  let fixture: ComponentFixture<AgregarEpptorresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgregarEpptorresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarEpptorresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
