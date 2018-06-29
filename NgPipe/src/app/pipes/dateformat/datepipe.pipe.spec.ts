import { DateformatPipe } from "./datepipe.pipe";


describe('DateformatPipe', () => {
  it('create an instance', () => {
    const pipe = new DateformatPipe("vn");
    expect(pipe).toBeTruthy();
  });
});
