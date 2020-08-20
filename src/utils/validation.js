export const validateLocation = (location) => {
  if (/^(\s|\d)/.test(location)) {
    return 'The location should start with a letter';
  } else if (location.length < 3 || location.length > 60) {
    return 'The location should contain min 3 and max 60 characters';
  }
  return '';
};

export const validateStartDate = ({ day, month, year }) => {
  const monthLength = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
    monthLength[1] = 29;
  }
  if (day > monthLength[month - 1]) {
    return 'Not correct date';
  } else if (new Date(year, month - 1, day) > new Date()) {
    return "Date shouldn't be from future";
  } else {
    return '';
  }
};

export const validateDescription = (description) => {
  return description.length > 300
    ? 'The description should contain max 300 characters'
    : '';
};

export const validateTravellingCompanion = (member, membersAmount) => {
  if (membersAmount > 15) {
    return 'You cannot add more travelling companions';
  } else if (member.length < 3) {
    return 'The travelling companion should contain at least 3 characters';
  } else if (member.length > 15) {
    return 'The travelling companion should contain max 15 characters';
  } else {
    return '';
  }
};

export const validateImageFile = (filename, fileSize) => {
  const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
  if (!allowedExtensions.test(filename)) {
    return 'Not correct type of image file';
  } else if (fileSize > 1000) {
    return 'Too big image';
  }
  return '';
};

export const checkErrors = (errorJourney) => {
  for (let key in errorJourney) {
    if (errorJourney[key]) {
      return true;
    }
  }
  return false;
};
