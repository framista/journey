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
    const data = new Date(2017, 3, 4);
    const result = formatTimeAgo(data);
    expect(result).toBe(expectedData);
  });
  it('should return 4 days ago', () => {
    const expectedData = '4 days ago';
    const data = new Date(2020, 3, 1);
    const result = formatTimeAgo(data);
    expect(result).toBe(expectedData);
  });
});
