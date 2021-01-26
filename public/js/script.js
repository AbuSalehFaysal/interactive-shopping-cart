let firstPlusButton = document.getElementById("first-plus-button");
firstPlusButton.addEventListener("click", function () {
    let mobileValue = document.getElementById("mobile-value").value;
    let mobileValueNum = parseFloat(mobileValue);
    let newMobileValue = mobileValueNum + 1;
    console.log(newMobileValue);
    document.getElementById("mobile-value").value = newMobileValue;
});

let firstMinusButton = document.getElementById("first-minus-button");
firstMinusButton.addEventListener("click", function () {
    let mobileValue = document.getElementById("mobile-value").value;
    let mobileValueNum = parseFloat(mobileValue);
    if (mobileValueNum > 0) {
        let newMobileValue = mobileValueNum - 1;
        console.log(newMobileValue);
        document.getElementById("mobile-value").value = newMobileValue;
    }
});

let secondPlusButton = document.getElementById("second-plus-button");
secondPlusButton.addEventListener("click", function () {
    let coverValue = document.getElementById("cover-value").value;
    let coverValueNum = parseFloat(coverValue);
    let newCoverValue = coverValueNum + 1;
    console.log(newCoverValue);
    document.getElementById("cover-value").value = newCoverValue;
});

let secondMinusButton = document.getElementById("second-minus-button");
secondMinusButton.addEventListener("click", function () {
    let coverValue = document.getElementById("cover-value").value;
    let coverValueNum = parseFloat(coverValue);
    if (coverValueNum > 0) {
        let newCoverValue = coverValueNum - 1;
        console.log(newCoverValue);
        document.getElementById("cover-value").value = newCoverValue;
    }
});