import { ArticleDeptModule } from './article-dept.module';

describe('ArticleDeptModule', () => {
  let articleDeptModule: ArticleDeptModule;

  beforeEach(() => {
    articleDeptModule = new ArticleDeptModule();
  });

  it('should create an instance', () => {
    expect(articleDeptModule).toBeTruthy();
  });
});
