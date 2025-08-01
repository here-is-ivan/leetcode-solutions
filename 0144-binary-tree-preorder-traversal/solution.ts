// Description: Given the root of a binary tree, return the preorder traversal of its nodes' values.
// Link: https://leetcode.com/problems/binary-tree-preorder-traversal/

// Time complexity: O(n)
// Space complexity: O(h)

function preorderTraversal(root: TreeNode | null): number[] {
  const values = [];

  const dfs = (currentNode) => {
    if (currentNode) {
      values.push(currentNode.val);
    } else {
      return;
    }

    if (currentNode.left) {
      dfs(currentNode.left);
    }

    if (currentNode.right) {
      dfs(currentNode.right);
    }
  };

  dfs(root);
  return values;
}
