import { DatetimeformatPipe } from './datetimeformatpipe.pipe';

describe('DatetimeformatpipePipe', () => {
  it('create an instance', () => {
    const pipe = new DatetimeformatPipe("vn");
    expect(pipe).toBeTruthy();
  });
});
