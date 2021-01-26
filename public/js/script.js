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