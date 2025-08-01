// Description: Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
// - I can be placed before V (5) and X (10) to make 4 and 9.
// - X can be placed before L (50) and C (100) to make 40 and 90.
// - C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Link: https://leetcode.com/problems/roman-to-integer/description/

// Time complexity: O(n)
// Space complexity: O(1)

function romanToInt(s: string): number {
  const romanValues = new Map<string, number>();
  romanValues.set('I', 1);
  romanValues.set('V', 5);
  romanValues.set('X', 10);
  romanValues.set('L', 50);
  romanValues.set('C', 100);
  romanValues.set('D', 500);
  romanValues.set('M', 1000);

  let totalValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanValues.get(s[i])!;
    const previousValue = romanValues.get(s[i + 1]) || 0;

    if (previousValue > currentValue) {
      totalValue -= currentValue;
    } else {
      totalValue += currentValue;
    }
  }

  return totalValue;
}
