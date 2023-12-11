let currentTheme = "Light"

var r = document.querySelector(':root');
var rs = getComputedStyle(r);

function themeChange() {

    var bodyTag = document.body;
    var hOneTag = document.querySelectorAll("h1");
    var articleTag = document.querySelectorAll("article");
    var detailsTags = document.querySelectorAll("details");
    var navTag = document.querySelector("nav");
    var footerTag = document.querySelector("footer");
    
    if (currentTheme == "Light") {
        bodyTag.style.backgroundImage = "url('../media/background_image_dark.jpg')";
        hOneTag.forEach(colorHeaders);
        articleTag.forEach(colorArticles);
        detailsTags.forEach(colorDetailTags);
        navTag.style.backgroundColor = rs.getPropertyValue("--element-color-dark");
        footerTag.style.backgroundColor = rs.getPropertyValue("--element-color-dark");
        currentTheme = "Dark"
    } else {
        bodyTag.style.backgroundImage = "url('../media/background_image.jpg')";
        hOneTag.forEach(colorHeaders);
        articleTag.forEach(colorArticles);
        detailsTags.forEach(colorDetailTags);
        navTag.style.backgroundColor = rs.getPropertyValue("--element-color-light");
        footerTag.style.backgroundColor = rs.getPropertyValue("--element-color-light");
        currentTheme = "Light"
    }
}

function colorHeaders(item, index) {
    if (currentTheme == "Light") {
        item.style.color = rs.getPropertyValue("--header-color-dark");
        item.style.textShadow = rs.getPropertyValue("--header-shadow-dark");
    } else {
        item.style.color = rs.getPropertyValue("--header-color-light");
        item.style.textShadow = rs.getPropertyValue("--header-shadow-light");
    }
};

function colorArticles(item, index) {
    if (currentTheme == "Light") {
        item.style.backgroundColor = rs.getPropertyValue("--element-color-dark");
    } else {
        item.style.backgroundColor = rs.getPropertyValue("--element-color-light");
    }
};

function colorDetailTags(item, index) {
    if (currentTheme == "Light") {
        item.style.backgroundColor = rs.getPropertyValue("--element-color-dark-darker");
    } else {
        item.style.backgroundColor = rs.getPropertyValue("--element-color-light-darker");
    }
};