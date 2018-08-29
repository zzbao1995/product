import { FormDeptModule } from './form-dept.module';

describe('FormDeptModule', () => {
  let formDeptModule: FormDeptModule;

  beforeEach(() => {
    formDeptModule = new FormDeptModule();
  });

  it('should create an instance', () => {
    expect(formDeptModule).toBeTruthy();
  });
});
