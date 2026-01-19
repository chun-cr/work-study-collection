function inorderTraversal(root){
    const result = []
    function traverse(node){
        if (node === null) return
        traverse(node.left)
        result.push(node.val)
        traverse(node.right)
    }
    traverse(root)
    return result
}
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
const tree1 = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);
console.log(inorderTraversal(tree1));