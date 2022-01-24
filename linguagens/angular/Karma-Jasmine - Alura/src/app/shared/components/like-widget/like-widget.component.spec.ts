import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LikeWidgetComponent} from './like-widget.component';
import {LikeWidgetModule} from './like-widget.module';

describe(LikeWidgetComponent.name, () => {
  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should auto-generate ID during ngOnInit when (@Input id) is NOT assigned', () => {
    expect(component.id).toBeTruthy();
  });

  it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
    const someId = 'someId';
    component.id = someId;
    expect(component.id).toBe(someId);
  });

  it('Should compare the prefix when the user changes it', () => {
    const prefix = 'calopsita';
    component.prefix = prefix;
    expect(component.prefix).toBe(prefix);
  });

  it(`#${LikeWidgetComponent.prototype.like.name}` +
      ' should trigger (@Output liked) when called', () => {
    spyOn(component.liked, 'emit');
    component.like();
    expect(component.liked.emit).toHaveBeenCalled();

  });

});
