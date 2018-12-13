import { async, TestBed } from '@angular/core/testing';
import { SecurityModule } from './auth.module';

describe('SecurityModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SecurityModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SecurityModule).toBeDefined();
  });
});
