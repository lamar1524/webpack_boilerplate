import { getMocks, sliceMocks } from './index.tsx';

// getMocks() test
test('Checking if results mocks are being generated properly', () => {
  expect(getMocks().length).toBe(150);
});
// sliceMocks() test
test('Checking if results mocks are being sliced properly', () => {
  expect(sliceMocks(getMocks(),1).length).toBe(9);
  // last page is not divisible by 9, so it must be shorter. In this case it's 6
  expect(sliceMocks(getMocks(), 17).length).toBe(6);
});
