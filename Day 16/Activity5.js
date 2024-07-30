// Task 9 : Write a recursive function to perform an in-order traversal of a binary tree.Log the result for a few test cases.

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inOrderTraversal(root) {
    if (root === null) {
        return [];
    }
    return [...inOrderTraversal(root.left), root.value, ...inOrderTraversal(root.right)];
}

// Test cases
const testCase1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
const testCase2 = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(6, new TreeNode(5), new TreeNode(7)));
const testCase3 = new TreeNode(10, null, new TreeNode(20, new TreeNode(15), null));

console.log(inOrderTraversal(testCase1)); // Output: [2, 1, 3]
console.log(inOrderTraversal(testCase2)); // Output: [1, 2, 3, 4, 5, 6, 7]
console.log(inOrderTraversal(testCase3)); // Output: [10, 15, 20]

// Task 10 : Write a recursive function to calculate the depth of  a binary tree . Log the result few test cases .
class TreeNode1 {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function calculateDepth(root) {
    if (root === null) {
        return 0;
    }
    const leftDepth = calculateDepth(root.left);
    const rightDepth = calculateDepth(root.right);
    return 1 + Math.max(leftDepth, rightDepth);
}

// Test cases
const testCase5 = new TreeNode1(1, new TreeNode1(2), new TreeNode1(3));
const testCase6 = new TreeNode1(4, new TreeNode1(2, new TreeNode1(1), new TreeNode1(3)), new TreeNode1(6, new TreeNode1(5), new TreeNode1(7)));
const testCase7 = new TreeNode1(10, null, new TreeNode1(20, new TreeNode1(15), null));
const testCase8 = null; // Empty tree

console.log(calculateDepth(testCase5)); // Output: 2
console.log(calculateDepth(testCase6)); // Output: 3
console.log(calculateDepth(testCase7)); // Output: 3
console.log(calculateDepth(testCase8)); // Output: 0
