// Description: Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
// A leaf is a node with no children.

// Link: https://leetcode.com/problems/path-sum/description/

// Time complexity: O(n)
// Space complexity: O(h)

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  const dfs = (currentNode, currentTarget) => {
    if (!currentNode) {
      return false;
    }

    const newTargetValue = currentTarget - currentNode.val;

    if (!currentNode.left && !currentNode.right) {
      return newTargetValue === 0;
    }

    return (
      dfs(currentNode.left, newTargetValue) ||
      dfs(currentNode.right, newTargetValue)
    );
  };

  return dfs(root, targetSum);
}
