
let bucketList = []
let i = 0
let seeList = false
let doneWithAdd = false

while (doneWithAdd == false){
    let addItem = prompt("Add a new item to your bucket list.")
    bucketList[i].push(addItem)
    doneWithAdd = confirm("Are you done adding items?")
}
alert(`Here is your bucket list: ${bucketList[i]}.`)

bucketList[i] = confirm("Want to see your bucket list?")
if (seeList == false)
    alert(`Here is your bucket list: ${bucketList[i]}.`)
else
    alert("Add a new item to your bucket list.")

