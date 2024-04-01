import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEppPostesComponent } from './list-epp-postes.component';

describe('ListEppPostesComponent', () => {
  let component: ListEppPostesComponent;
  let fixture: ComponentFixture<ListEppPostesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEppPostesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEppPostesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
