import {
  validateLocation,
  validateStartDate,
  validateDescription,
  validateTravellingCompanion,
  validateImageFile,
  checkErrors,
} from '../utils/validation';
import { set, reset } from 'mockdate';

describe('validate location', () => {
  it('should return empty string if location starts with letter and has more than 3 and less than 60 characters', () => {
    const result = validateLocation('Szczecin');
    expect(result).toBe('');
  });
  it('should return message if location starts with number', () => {
    const expectedMessage = 'The location should start with a letter';
    const result = validateLocation('1szczecin');
    expect(result).toBe(expectedMessage);
  });
  it('should return message if location starts with whitespace', () => {
    const expectedMessage = 'The location should start with a letter';
    const result = validateLocation(' szczecin');
    expect(result).toBe(expectedMessage);
  });
  it('should return message if location is less than 3 characters', () => {
    const expectedMessage =
      'The location should contain min 3 and max 60 characters';
    const result = validateLocation('as');
    expect(result).toBe(expectedMessage);
  });
  it('should return message if location is longer than 60 characters', () => {
    const expectedMessage =
      'The location should contain min 3 and max 60 characters';
    const result = validateLocation('a'.repeat(61));
    expect(result).toBe(expectedMessage);
  });
});

describe('validate start date', () => {
  const date = '2020-04-04T18:09:12.451Z';
  beforeEach(() => {
    set(date);
  });
  afterEach(() => {
    reset();
  });
  it('should return empty string if date is correct', () => {
    const date = { day: 4, month: 4, year: 2020 };
    const result = validateStartDate(date);
    expect(result).toBe('');
  });
  it('should return message if date is from future', () => {
    const date = { day: 5, month: 4, year: 2020 };
    const expectedMessage = "Date shouldn't be from future";
    const result = validateStartDate(date);
    expect(result).toBe(expectedMessage);
  });
  it('should return message if day is not belong to month', () => {
    const date = { day: 31, month: 4, year: 2019 };
    const expectedMessage = 'Not correct date';
    const result = validateStartDate(date);
    expect(result).toBe(expectedMessage);
  });
  it('should return message if day equals 29 and year is not a leap', () => {
    const date = { day: 29, month: 2, year: 2019 };
    const expectedMessage = 'Not correct date';
    const result = validateStartDate(date);
    expect(result).toBe(expectedMessage);
  });
});

describe('validate description', () => {
  it('should return empty string if description has less than 30 characters', () => {
    const result = validateDescription('Szczecin');
    expect(result).toBe('');
  });
  it('should return empty string if description is empty', () => {
    const result = validateDescription('');
    expect(result).toBe('');
  });
  it('should return empty string if description is equal 300 characters', () => {
    const result = validateDescription('a'.repeat(300));
    expect(result).toBe('');
  });
  it('should return error message if description is longer than 300 characters', () => {
    const expectedMessage = 'The description should contain max 300 characters';
    const result = validateDescription('a'.repeat(301));
    expect(result).toBe(expectedMessage);
  });
});

describe('validate travelling companion', () => {
  it('should return empty string if length of member is between 3 and 15 and there is equal or less than 15 members', () => {
    const result = validateTravellingCompanion('David', 13);
    expect(result).toBe('');
  });
  it('should return error message if there is more than 15 members', () => {
    const expectedMessage = 'You have too many travelling companions';
    const result = validateTravellingCompanion('Joe', 16);
    expect(result).toBe(expectedMessage);
  });
  it('should return error message if the length of member is less than 3 characters', () => {
    const expectedMessage =
      'The travelling companion should contain at least 3 characters';
    const result = validateTravellingCompanion('Me', 13);
    expect(result).toBe(expectedMessage);
  });
  it('should return error message if the length of member is more than 15 characters', () => {
    const expectedMessage =
      'The travelling companion should contain max 15 characters';
    const result = validateTravellingCompanion('a'.repeat(16), 13);
    expect(result).toBe(expectedMessage);
  });
});

describe('validate image file', () => {
  it('should return empty string if filename extension is jpg and filesize is equal or less than 1000', () => {
    const result = validateImageFile('C:\fakepathdance.jpg', 1000);
    expect(result).toBe('');
  });
  it('should return empty string if filename extension is jpeg and filesize is equal or less than 1000', () => {
    const result = validateImageFile('C:\fakepathdance.jpeg', 1000);
    expect(result).toBe('');
  });
  it('should return empty string if filename extension is png and filesize is equal or less than 1000', () => {
    const result = validateImageFile('C:\fakepathdance.png', 1000);
    expect(result).toBe('');
  });
  it('should return error message if filename extension is not correct', () => {
    const expectedMessage = 'Not correct type of image file';
    const result = validateImageFile('C:\fakepathdancepng.mp3', 1000);
    expect(result).toBe(expectedMessage);
  });
  it('should return error message if filesize is greater than 1000', () => {
    const expectedMessage = 'Too big image';
    const result = validateImageFile('C:\fakepathdancepng.png', 1001);
    expect(result).toBe(expectedMessage);
  });
});

describe('check if there are errors', () => {
  it('should return false if the values of keys in object are empty', () => {
    const data = {
      location: '',
      startDate: '',
      description: '',
      travellingCompanion: '',
      imageFile: '',
    };
    const result = checkErrors(data);
    expect(result).toBeFalsy();
  });
  it('should return true if one of the values of keys in object is not empty', () => {
    const data = {
      location: '',
      startDate: '',
      description: '',
      travellingCompanion: '',
      imageFile: 'Too big image',
    };
    const result = checkErrors(data);
    expect(result).toBeTruthy();
  });
});
