import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { PcmWebsiteCategoryImageComponent } from './pcm-website-category-image.component';

describe('PcmWebsiteCategoryImageComponent', () => {
  let component: PcmWebsiteCategoryImageComponent;
  let fixture: ComponentFixture<PcmWebsiteCategoryImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcmWebsiteCategoryImageComponent],
      imports: [
        RouterTestingModule
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteCategoryImageComponent);
    component = fixture.componentInstance;

    component.categories = [{
      id: 315, name: { nl: 'UITRUSTING WERKHUIS', fr: 'EQUIPEMENT D\'ATELIER' }, description: { nl: '', fr: '' }
    }, {
      id: 345, name: { nl: 'SNIJGERIEF EN TOEBEHOREN', fr: 'COUTELLERIE ET ACCESSOIRES' }, description: { nl: '', fr: '' }
    }, {
      id: 434, name: { nl: 'KLEDIJ EN VERZORGING', fr: 'VETEMENTS ET SOINS' }, description: { nl: '', fr: '' }
    }, {
      id: 837, name: { nl: 'ALGEMEEN KEUKENGERIEF', fr: 'USTENSILES DE CUISINE' }, description: { nl: '', fr: '' }
    }, {
      id: 893, name: { nl: 'SPECIFIEK SLAGERIJMATERIAAL', fr: 'MATERIEL SPECIFIQUE DE BOUCHERIE' }, description: { nl: '', fr: '' }
    }, {
      id: 915, name: { nl: 'ONDERHOUD', fr: 'ENTRETIEN' }, description: { nl: '', fr: '' }
    }, {
      id: 1662, name: { nl: 'KOOPJES', fr: 'BONNES AFFAIRES' }, description: { nl: '', fr: '' }
    }, {
      id: 969, name: { nl: 'VERPAKKING', fr: 'EMBALLAGE' }, description: { nl: '', fr: '' }
    }, {
      id: 1030, name: { nl: 'PARTY EN BUFFET', fr: 'PARTY ET BUFFET' }, description: { nl: '', fr: '' }
    }, {
      id: 288, name: { nl: 'VOEDING', fr: 'ALIMENTATION' }, description: { nl: '', fr: '' }
    }, {
      id: 419, name: { nl: 'DARMEN', fr: 'BOYAUX' }, description: { nl: '', fr: '' }
    }, {
      id: 212, name: { nl: 'UITRUSTING WINKEL', fr: 'EQUIPEMENT MAGASIN' }, description: { nl: '', fr: '' }
    }]
    component.culture = 'nl'
    component.company = 'dis'

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud have requirements for and div#categories-list-linked element', () => {
    const compiled = fixture.debugElement.nativeElement

    expect(component.link).toEqual(true)
    expect(component.newPage).toEqual(false)

    expect(compiled.querySelector('div#categories-list-linked')).toBeTruthy()
  })

  it('should have 12 child elements under list with correct href and text', () => {
    const compiled = fixture.debugElement.nativeElement
    const element = compiled.querySelector('div#categories-list-linked')
    const elements = element.getElementsByTagName('a')

    expect(component.categories.length).toEqual(12)
    expect(elements.length).toEqual(12)

    for (let i = 0; i < 12; i++) {
      const elem = elements[i];
      const name = elem.querySelector('h4')
      expect(name.innerText).toEqual(component.categories[i].name[component.culture])
    }
  })
});
