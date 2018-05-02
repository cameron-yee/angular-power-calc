import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IFrameResizeComponent } from './i-frame-resize.component';

describe('IFrameResizeComponent', () => {
  let component: IFrameResizeComponent;
  let fixture: ComponentFixture<IFrameResizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IFrameResizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IFrameResizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
