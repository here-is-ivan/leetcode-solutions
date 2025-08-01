// Description: Given the root of a binary tree, return the inorder traversal of its nodes' values.
// Link: https://leetcode.com/problems/binary-tree-inorder-traversal/description/

// Time complexity: O(n)
// Space complexity: O(h)

function inorderTraversal(root: TreeNode | null): number[] {
  const nodeValues = [];
  if (!root) return nodeValues;

  const dfs = (currentRoot) => {
    if (currentRoot.left) {
      dfs(currentRoot.left);
    }

    nodeValues.push(currentRoot.val);

    if (currentRoot.right) {
      dfs(currentRoot.right);
    }
  };

  dfs(root);
  return nodeValues;
}
