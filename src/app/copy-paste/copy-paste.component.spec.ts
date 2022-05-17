import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxTabsModule } from 'igniteui-angular';
import { CopyPasteComponent } from './copy-paste.component';

describe('CopyPasteComponent', () => {
  let component: CopyPasteComponent;
  let fixture: ComponentFixture<CopyPasteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopyPasteComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxIconModule, IgxButtonModule, IgxRippleModule, IgxTabsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyPasteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
