import { LoginGuard } from './login.guard';

describe('Auth.Guard', () => {
  it('should create an instance', () => {
    // @ts-ignore
    expect(new LoginGuard()).toBeTruthy();
  });
});
