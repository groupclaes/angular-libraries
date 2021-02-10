import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PcmArtikelFotoComponent } from './pcm-artikel-foto.component';

describe('PcmArtikelFotoComponent', () => {
  let component: PcmArtikelFotoComponent;
  let fixture: ComponentFixture<PcmArtikelFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcmArtikelFotoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmArtikelFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
