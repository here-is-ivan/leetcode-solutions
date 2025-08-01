// Description: Given the root of a binary tree, return all root-to-leaf paths in any order.
// A leaf is a node with no children.

// Link: https://leetcode.com/problems/binary-tree-paths/description/

// Time complexity: O(n)
// Space complexity: O(h)

function binaryTreePaths(root: TreeNode | null): string[] {
  if (!root) return [];

  const paths = new Array<string>();

  const dfs = (currentNode: TreeNode, currentPath: string) => {
    const endPath = currentPath + currentNode.val;
    const continuePath = currentPath + currentNode.val + '->';

    if (!currentNode.left && !currentNode.right) {
      paths.push(endPath);
    }

    if (currentNode.left) {
      dfs(currentNode.left, continuePath);
    }

    if (currentNode.right) {
      dfs(currentNode.right, continuePath);
    }
  };

  dfs(root, '');
  return paths;
}
