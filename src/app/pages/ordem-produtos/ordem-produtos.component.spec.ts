import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OrdemProdutosComponent } from './ordem-produtos.component';

describe('OrdemProdutosComponent', () => {
  let component: OrdemProdutosComponent;
  let fixture: ComponentFixture<OrdemProdutosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdemProdutosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdemProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
