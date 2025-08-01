// Description: Given a binary tree, find its minimum depth.
// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
// Note: A leaf is a node with no children.

// Link: https://leetcode.com/problems/minimum-depth-of-binary-tree/description/

// Time complexity: O(n)
// Space complexity: O(h)

function minDepth(root: TreeNode | null): number {
  if (!root) return 0;

  let minDepth = Infinity;

  const dfs = (currentNode, currentDepth) => {
    if (!currentNode.left && !currentNode.right) {
      minDepth = Math.min(minDepth, currentDepth);
    }

    if (currentNode.left && minDepth > currentDepth + 1) {
      dfs(currentNode.left, currentDepth + 1);
    }

    if (currentNode.right && minDepth > currentDepth + 1) {
      dfs(currentNode.right, currentDepth + 1);
    }
  };

  dfs(root, 1);
  return minDepth;
}
