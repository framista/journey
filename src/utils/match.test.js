import { matchText } from './match';

describe('test match text', () => {
  it('should return true, if the values of keys contains selected text and ignoring letters case in object', () => {
    const data = {
      location: 'Szczecin',
      startDate: { day: 1, month: 1, year: 2020 },
      description: 'A wonderful week in Szczecin. Following dreams',
      travellingCompanion: ['Kasia', 'Tomek', 'Marta', 'Adrianna'],
      imageFile: '',
    };
    const result = matchText('follow', data);
    expect(result).toBeTruthy();
  });
  it('should return false, if any values of keys do not contain selected text', () => {
    const data = {
      location: 'Szczecin',
      startDate: { day: 1, month: 1, year: 2020 },
      description: '',
      travellingCompanion: ['Kasia', 'Tomek', 'Marta', 'Adrianna'],
      imageFile: '',
    };
    const result = matchText('week', data);
    expect(result).toBeFalsy();
  });
});
