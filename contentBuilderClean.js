// ContentBuilderLabels = document.querySelectorAll("#contentmain-toggle-panel-main-contentfolders > div > div > div > div > ul > li.tree-branch.tree-open > ul > li > div.tree-branch-header > button.tree-branch-name > span.tree-label");

// for (let index = 1; index < ContentBuilderLabels.length; index++) {
//     ContentBuilderLabels[index].innerText = "None"
// }

contentBuilderLabels = document.querySelectorAll("li ul li div.tree-branch-header")

for (let index = 1; index < contentBuilderLabels.length; index++) {
    contentBuilderLabels[index].remove()
}