// Description: Given the root of a binary tree, return the postorder traversal of its nodes' values.
// Link: https://leetcode.com/problems/binary-tree-postorder-traversal/description/

// Time complexity: O(n)
// Space complexity: O(h)

function postorderTraversal(root: TreeNode | null): number[] {
  const nodeValues = [];
  if (!root) return nodeValues;

  const dfs = (currentNode) => {
    if (currentNode.left) dfs(currentNode.left);
    if (currentNode.right) dfs(currentNode.right);
    nodeValues.push(currentNode.val);
  };

  dfs(root);
  return nodeValues;
}