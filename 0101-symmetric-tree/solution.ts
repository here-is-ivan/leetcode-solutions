// Description: Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).
// Link: https://leetcode.com/problems/symmetric-tree/

// Time complexity: O(n)
// Space complexity: O(n)

function isSymmetric(root: TreeNode | null): boolean {
  const bfs = (root1, root2) => {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    if (root1.val !== root2.val) return false;

    return bfs(root1.left, root2.right) && bfs(root1.right, root2.left);
  };

  return bfs(root.left, root.right);
}
