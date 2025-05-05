// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// isPhoneNumber Tests
test('Valid phone number with area code in parentheses', () => {
  expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});

test('Valid phone number without area code', () => {
  expect(isPhoneNumber('456-7890')).toBe(true);
});

test('Invalid phone number: single digit', () => {
  expect(isPhoneNumber('5')).toBe(false);
});

test('Invalid phone number: empty string', () => {
  expect(isPhoneNumber('')).toBe(false);
});

// isEmail Tests
test('Valid email: UCSD student email', () => {
  expect(isEmail('yuy080@ucsd.edu')).toBe(true);
});

test('Valid email: generic Gmail address', () => {
  expect(isEmail('test@gmail.com')).toBe(true);
});

test('Invalid email: missing @ symbol', () => {
  expect(isEmail('hello.com')).toBe(false);
});

test('Invalid email: missing top-level domain', () => {
  expect(isEmail('test@test')).toBe(false);
});

// isStrongPassword Tests
test('Valid strong password: letters and numbers', () => {
  expect(isStrongPassword('abc123')).toBe(true);
});

test('Valid strong password: max allowed length with underscores', () => {
  expect(isStrongPassword('a1234567890_abc')).toBe(true);
});

test('Invalid strong password: exceeds max length', () => {
  expect(isStrongPassword('abcdefghijklmnopqrstuvwxyz')).toBe(false);
});

test('Invalid strong password: empty string', () => {
  expect(isStrongPassword('')).toBe(false);
});

// isDate Tests
test('Valid date: single-digit month and day', () => {
  expect(isDate('5/4/2025')).toBe(true);
});

test('Valid date: two-digit month and day', () => {
  expect(isDate('05/04/2025')).toBe(true);
});

test('Invalid date: missing year', () => {
  expect(isDate('5/4')).toBe(false);
});

test('Invalid date: non-numeric month', () => {
  expect(isDate('May/4/2025')).toBe(false);
});

// isHexColor Tests
test('Valid hex color: 6-digit with #', () => {
  expect(isHexColor('#A1BC3F')).toBe(true);
});

test('Valid hex color: 3-digit without #', () => {
  expect(isHexColor('abc')).toBe(true);
});

test('Invalid hex color: 4-digit with #', () => {
  expect(isHexColor('#ABCD')).toBe(false);
});

test('Invalid hex color: too long (7 characters)', () => {
  expect(isHexColor('1234567')).toBe(false);
});
