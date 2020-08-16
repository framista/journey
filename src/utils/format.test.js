import { formatDate } from './format';

describe('format date', () => {
  it('should return formatted date', () => {
    const expectedData = '12.06.2015';
    const data = { day: 12, month: 6, year: 2015 };
    const result = formatDate(data);
    expect(result).toBe(expectedData);
  });
});
