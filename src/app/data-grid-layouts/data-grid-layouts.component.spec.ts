import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxGridModule } from 'igniteui-angular';
import { DataGridLayoutsComponent } from './data-grid-layouts.component';

describe('DataGridLayoutsComponent', () => {
  let component: DataGridLayoutsComponent;
  let fixture: ComponentFixture<DataGridLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridLayoutsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxGridModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
