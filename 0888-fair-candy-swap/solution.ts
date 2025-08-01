// Description: Alice and Bob have a different total number of candies. You are given two integer arrays aliceSizes and bobSizes where aliceSizes[i] is the number of candies of the ith box of candy that Alice has and bobSizes[j] is the number of candies of the jth box of candy that Bob has.
// Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.
// Return an integer array answer where answer[0] is the number of candies in the box that Alice must exchange, and answer[1] is the number of candies in the box that Bob must exchange. If there are multiple answers, you may return any one of them. It is guaranteed that at least one answer exists.

// Link: https://leetcode.com/problems/fair-candy-swap/description/

// Time complexity: O(n*m)
// Space complexity: O(n + m)

function fairCandySwap(aliceSizes: number[], bobSizes: number[]): number[] {
  const totalAliceCandies = aliceSizes.reduce((acc, cur) => acc + cur, 0);
  const totalBobCandies = bobSizes.reduce((acc, cur) => acc + cur, 0);

  const aliceValues = new Set(aliceSizes);
  const bobValues = new Set(bobSizes);

  for (const aliceValue of aliceValues) {
    for (const bobValue of bobValues) {
      if (
        totalAliceCandies - aliceValue + bobValue ===
        totalBobCandies - bobValue + aliceValue
      ) {
        return [aliceValue, bobValue];
      }
    }
  }

  return [-1, -1];
}
