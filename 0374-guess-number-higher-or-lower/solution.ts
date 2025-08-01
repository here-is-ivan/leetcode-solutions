// Description: We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:
// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).

// Return the number that I picked.

// Link: https://leetcode.com/problems/guess-number-higher-or-lower/description/

// Time complexity: O(log n)
// Space complexity: O(1)

function guessNumber(n: number): number {
  let least = 0;
  let most = n;

  while (least <= most) {
    const pick = Math.floor((least + most) / 2);
    const guessOutput = guess(pick);

    if (guessOutput === -1) {
      most = pick - 1;
    } else if (guessOutput === 1) {
      least = pick + 1;
    } else {
      return pick;
    }
  }

  return -1;
}
