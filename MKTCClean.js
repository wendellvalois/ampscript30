contentBuilderLabels = document.querySelectorAll("li ul li div.tree-branch-header")

for (let index = 2; index < contentBuilderLabels.length; index++) {
    contentBuilderLabels[index].remove()
}