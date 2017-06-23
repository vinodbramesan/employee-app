import { EmployeeAppPage } from './app.po';

describe('employee-app App', () => {
  let page: EmployeeAppPage;

  beforeEach(() => {
    page = new EmployeeAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
