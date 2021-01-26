let firstPlusButton = document.getElementById("first-plus-button");
firstPlusButton.addEventListener("click", function () {
    let mobileValue = document.getElementById("mobile-value").value;
    let mobileValueNum = parseFloat(mobileValue);
    let newMobileValue = mobileValueNum + 1;
    console.log(newMobileValue);
    document.getElementById("mobile-value").value = newMobileValue;
    let newMobilePriceNum = 1219 * newMobileValue;
    document.getElementById("mobile-price").innerText = newMobilePriceNum;
    let coverPrice = document.getElementById("cover-price").innerText;
    let coverPriceNum = parseFloat(coverPrice);
    document.getElementById("sub-total").innerText = newMobilePriceNum + coverPriceNum;
    document.getElementById("total").innerText = newMobilePriceNum + coverPriceNum;

});

let firstMinusButton = document.getElementById("first-minus-button");
firstMinusButton.addEventListener("click", function () {
    let mobileValue = document.getElementById("mobile-value").value;
    let mobileValueNum = parseFloat(mobileValue);
    if (mobileValueNum > 0) {
        let newMobileValue = mobileValueNum - 1;
        console.log(newMobileValue);
        document.getElementById("mobile-value").value = newMobileValue;
        let newMobilePriceNum = 1219 * newMobileValue;
        document.getElementById("mobile-price").innerText = newMobilePriceNum;
        let coverPrice = document.getElementById("cover-price").innerText;
        let coverPriceNum = parseFloat(coverPrice);
        document.getElementById("sub-total").innerText = newMobilePriceNum + coverPriceNum;
        document.getElementById("total").innerText = newMobilePriceNum + coverPriceNum;
    }
});

let secondPlusButton = document.getElementById("second-plus-button");
secondPlusButton.addEventListener("click", function () {
    let coverValue = document.getElementById("cover-value").value;
    let coverValueNum = parseFloat(coverValue);
    let newCoverValue = coverValueNum + 1;
    console.log(newCoverValue);
    document.getElementById("cover-value").value = newCoverValue;
    let newCoverPriceNum = 59 * newCoverValue;
    document.getElementById("cover-price").innerText = newCoverPriceNum;
    let mobilePrice = document.getElementById("mobile-price").innerText;
    let mobilePriceNum = parseFloat(mobilePrice);
    document.getElementById("sub-total").innerText = newCoverPriceNum + mobilePriceNum;
    document.getElementById("total").innerText = newCoverPriceNum + mobilePriceNum;
});

let secondMinusButton = document.getElementById("second-minus-button");
secondMinusButton.addEventListener("click", function () {
    let coverValue = document.getElementById("cover-value").value;
    let coverValueNum = parseFloat(coverValue);
    if (coverValueNum > 0) {
        let newCoverValue = coverValueNum - 1;
        console.log(newCoverValue);
        document.getElementById("cover-value").value = newCoverValue;
        let newCoverPriceNum = 59 * newCoverValue;
        document.getElementById("cover-price").innerText = newCoverPriceNum;
        let mobilePrice = document.getElementById("mobile-price").innerText;
        let mobilePriceNum = parseFloat(mobilePrice);
        document.getElementById("sub-total").innerText = newCoverPriceNum + mobilePriceNum;
        document.getElementById("total").innerText = newCoverPriceNum + mobilePriceNum;
    }
});
