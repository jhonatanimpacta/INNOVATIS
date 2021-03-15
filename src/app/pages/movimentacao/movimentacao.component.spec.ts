import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { movimentacaoComponent } from './movimentacao.component';

describe('movimentacaoComponent', () => {
  let component:movimentacaoComponent;
  let fixture: ComponentFixture<movimentacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ movimentacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(movimentacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
