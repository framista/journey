import { sortByDate } from './sort';

describe('test sort by date', () => {
  it('should return object by date descending', () => {
    const expectedData = [
      { startDate: { day: 1, month: 5, year: 2020 } },
      { startDate: { day: 8, month: 4, year: 2020 } },
      { startDate: { day: 1, month: 4, year: 2020 } },
      { startDate: { day: 1, month: 4, year: 2019 } },
    ];
    const data = [
      { startDate: { day: 1, month: 4, year: 2020 } },
      { startDate: { day: 1, month: 5, year: 2020 } },
      { startDate: { day: 1, month: 4, year: 2019 } },
      { startDate: { day: 8, month: 4, year: 2020 } },
    ];
    const result = sortByDate(data);
    expect(result).toEqual(expectedData);
  });
});
