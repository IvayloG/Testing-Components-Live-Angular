import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxInputGroupModule, IgxIconModule, IgxDateTimeEditorModule, IgxSliderModule, IgxChipsModule, IgxButtonModule, IgxRippleModule, IgxButtonGroupModule, IgxSwitchModule, IgxCheckboxModule, IgxRadioModule, IgxAvatarModule } from 'igniteui-angular';
import { InputsComponent } from './inputs.component';

describe('InputsComponent', () => {
  let component: InputsComponent;
  let fixture: ComponentFixture<InputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxInputGroupModule, IgxIconModule, IgxDateTimeEditorModule, IgxSliderModule, IgxChipsModule, IgxButtonModule, IgxRippleModule, IgxButtonGroupModule, IgxSwitchModule, IgxCheckboxModule, IgxRadioModule, IgxAvatarModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
