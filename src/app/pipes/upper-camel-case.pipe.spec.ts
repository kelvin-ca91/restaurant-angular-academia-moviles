import { UpperCamelCasePipe } from './upper-camel-case.pipe';

describe('UpperCamelCasePipe', () => {
  it('create an instance', () => {
    const pipe = new UpperCamelCasePipe();
    expect(pipe).toBeTruthy();
  });
});
