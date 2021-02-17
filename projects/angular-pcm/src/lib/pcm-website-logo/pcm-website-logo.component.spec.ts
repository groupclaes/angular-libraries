import { ComponentFixture, TestBed } from '@angular/core/testing'
import { PcmWebsiteLogoComponent } from './pcm-website-logo.component'

describe('PcmWebsiteLogoComponent', () => {
  let component: PcmWebsiteLogoComponent
  let fixture: ComponentFixture<PcmWebsiteLogoComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PcmWebsiteLogoComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PcmWebsiteLogoComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should contain img element', () => {
    const compiled = fixture.debugElement.nativeElement

    expect(compiled.querySelector('img')).toBeTruthy()
  })

  it('should render img element with src and alt set', () => {
    const compiled = fixture.debugElement.nativeElement
    const element = compiled.querySelector('img')

    expect(element.src).toEqual('https://pcm.groupclaes.be/v3/content/gro/website/logo/100')
    expect(element.alt).toEqual('gro Logo')
  })
})
