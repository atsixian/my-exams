const getSeason = curDate => {
    // Jan - April, May - August, August - December
    const curMonth = curDate.getMonth();
    let result = "Fall";
    if (curMonth < 4) {
      result = "Winter";
    } else if (curMonth < 7) {
      result = "Summer";
    }
    return result;
};
module.exports = getSeason;