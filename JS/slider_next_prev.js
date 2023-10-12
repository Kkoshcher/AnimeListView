var sliderMain = document.getElementById("slider_main");
var sliderBox = sliderMain.getElementsByClassName("scroll_img");
var sliderNext = document.getElementById("next");
var sliderPrev = document.getElementById("prev");
var sliderIndex = document.getElementById("slider_index")
var currentIndex = 0;

// 輪播圖
function showSlide(index) {
    if (index >= sliderBox.length) {
        index = 0;
    } else if (index < 0) {
        index = sliderBox.length - 1;
    }

    // 隱藏所有圖片
    for (var i = 0; i < sliderBox.length; i++) {
        sliderBox[i].style.display = "none";
    }

    // 顯示目前圖片
    sliderBox[index].style.display = "block";

    currentIndex = index;
    updateIndexIcons()
}

// 點擊切換到下一張圖片
sliderNext.onclick = function () {
    showSlide(currentIndex + 1);
};

// 點擊切換到上一張圖片
sliderPrev.onclick = function () {
    showSlide(currentIndex - 1);
};

//添加index
function sliderIndexIcon() {
    for (var i = 0; i < sliderBox.length; i++) {
        var indexIcon = document.createElement('span');
        indexIcon.classList.add('slider_index_icon');
        indexIcon.textContent = i + 1;
        sliderIndex.appendChild(indexIcon);
        indexIcon.addEventListener('click', function () {
            var s_index = Array.from(sliderIndex.children).indexOf(this);
            showSlide(s_index);
        })
    }
    var indexIcons = sliderIndex.getElementsByClassName('slider_index_icon');
    indexIcons[0].classList.add('current');
}

//在index上面添加CSS
function updateIndexIcons() {
    var indexIcons = sliderIndex.getElementsByClassName('slider_index_icon');
    for (var i = 0; i < indexIcons.length; i++) {
        if (i === currentIndex) {
            indexIcons[i].classList.add('current'); 
        } else {
            indexIcons[i].classList.remove('current'); 
        }
    }
}
// 自動切換图片的函數
function autoSlide() {
    showSlide(currentIndex + 1);
}

intervalId = setInterval(autoSlide, 5000);

showSlide(currentIndex);

sliderIndexIcon();