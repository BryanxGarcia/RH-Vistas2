import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEppTorresComponent } from './list-epp-torres.component';

describe('ListEppTorresComponent', () => {
  let component: ListEppTorresComponent;
  let fixture: ComponentFixture<ListEppTorresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListEppTorresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEppTorresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
