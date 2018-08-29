import { HttpDeptModule } from './http-dept.module';

describe('HttpDeptModule', () => {
  let httpDeptModule: HttpDeptModule;

  beforeEach(() => {
    httpDeptModule = new HttpDeptModule();
  });

  it('should create an instance', () => {
    expect(httpDeptModule).toBeTruthy();
  });
});
