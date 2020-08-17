import { formatDate, formatTimeAgo } from './format';
import { set, reset } from 'mockdate';

describe('format date', () => {
  it('should return formatted date', () => {
    const expectedData = '12.06.2015';
    const data = { day: 12, month: 6, year: 2015 };
    const result = formatDate(data);
    expect(result).toBe(expectedData);
  });
});

describe('format time ago', () => {
  const date = '2020-04-04T18:09:12.451Z';
  beforeEach(() => {
    set(date);
  });
  afterEach(() => {
    reset();
  });
  it('should return 5 minutes ago', () => {
    const expectedData = '5 minutes ago';
    const currentDate = new Date();
    const data = new Date().setMinutes(currentDate.getMinutes() - 5);
    const result = formatTimeAgo(data);
    expect(result).toBe(expectedData);
  });
  it('should return 3 years', () => {
    const expectedData = '3 years ago';
    const currentDate = new Date();
    const data = new Date().setFullYear(currentDate.getFullYear() - 3);
    const result = formatTimeAgo(data);
    expect(result).toBe(expectedData);
  });
});
