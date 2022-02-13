// code your solution here
function superbowlWin(records) {
    const winRecord = records.find(element => element.result === "W")
    if (typeof winRecord === "object") {
        return winRecord.year
    }
}
