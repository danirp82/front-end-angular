import { InitialsNamePipe } from './initials-name.pipe';

describe('InitialsNamePipe', () => {
  it('create an instance', () => {
    const pipe = new InitialsNamePipe();
    expect(pipe).toBeTruthy();
  });

  it('expect pipe return string with initials name', () => {
    const pipe = new InitialsNamePipe();
    expect(pipe.transform('test user')).toBe('TU');
  })
});
