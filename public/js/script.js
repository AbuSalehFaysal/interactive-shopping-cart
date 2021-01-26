// ===================================
// Net Price of Cart Products
// ===================================
const netMobilePrice = 1219;
const netCoverPrice = 59;

// =======================================================================
// Function of Adding Product Quantity, Price and Update Total Price
// =======================================================================
function increaseValue(mobileValueParam, mobilePriceParam, coverPriceParam, subTotalParam, totalParam, netPrice) {
    let mobileValue = document.getElementById(mobileValueParam).value;
    let mobileValueNum = parseFloat(mobileValue);
    let newMobileValue = mobileValueNum + 1;
    console.log(newMobileValue);
    document.getElementById(mobileValueParam).value = newMobileValue;
    let newMobilePriceNum = netPrice * newMobileValue;
    document.getElementById(mobilePriceParam).innerText = newMobilePriceNum;
    let coverPrice = document.getElementById(coverPriceParam).innerText;
    let coverPriceNum = parseFloat(coverPrice);
    document.getElementById(subTotalParam).innerText = newMobilePriceNum + coverPriceNum;
    document.getElementById(totalParam).innerText = newMobilePriceNum + coverPriceNum;
}

// =======================================================================
// Function of Subtracting Product Quantity, Price and Update Total Price
// =======================================================================
function decreaseValue(mobileValueParam, mobilePriceParam, coverPriceParam, subTotalParam, totalParam, netPrice) {
    let mobileValue = document.getElementById(mobileValueParam).value;
    let mobileValueNum = parseFloat(mobileValue);
    if (mobileValueNum > 0) {
        let newMobileValue = mobileValueNum - 1;
        console.log(newMobileValue);
        document.getElementById(mobileValueParam).value = newMobileValue;
        let newMobilePriceNum = netPrice * newMobileValue;
        document.getElementById(mobilePriceParam).innerText = newMobilePriceNum;
        let coverPrice = document.getElementById(coverPriceParam).innerText;
        let coverPriceNum = parseFloat(coverPrice);
        document.getElementById(subTotalParam).innerText = newMobilePriceNum + coverPriceNum;
        document.getElementById(totalParam).innerText = newMobilePriceNum + coverPriceNum;
    }
}

//========================================================
// Adding Mobile Quantity, Price and Updating Total Price
//========================================================
let firstPlusButton = document.getElementById("first-plus-button");
firstPlusButton.addEventListener("click", function () {
    increaseValue("mobile-value", "mobile-price", "cover-price", "sub-total", "total", netMobilePrice)
});

//=============================================================
// Subtracting Mobile Quantity, Price and Updating Total Price
//=============================================================
let firstMinusButton = document.getElementById("first-minus-button");
firstMinusButton.addEventListener("click", function () {
    decreaseValue("mobile-value", "mobile-price", "cover-price", "sub-total", "total", netMobilePrice);
});

//========================================================
// Adding Cover Quantity, Price and Updating Total Price
//========================================================
let secondPlusButton = document.getElementById("second-plus-button");
secondPlusButton.addEventListener("click", function () {
    increaseValue("cover-value", "cover-price", "mobile-price", "sub-total", "total", netCoverPrice)
});

//=============================================================
// Subtracting Cover Quantity, Price and Updating Total Price
//=============================================================
let secondMinusButton = document.getElementById("second-minus-button");
secondMinusButton.addEventListener("click", function () {
    decreaseValue("cover-value", "cover-price", "mobile-price", "sub-total", "total", netCoverPrice);
});
