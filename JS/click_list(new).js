var mydata;
    var Anime_json;

    total_list.onclick = function () {
        // 第一次點擊，獲取資料並顯示內容
        Anime_json = new XMLHttpRequest();
        Anime_json.onload = function () {
            mydata = JSON.parse(Anime_json.responseText);
            for (var i = 0; i < mydata.length; i++) {
                document.getElementById('start_end').innerHTML += `<div>${mydata[i].start_end}</div>`;
                document.getElementById('title').innerHTML += `<div>${mydata[i].title}</div>`;
                document.getElementById('original_name').innerHTML += `<div>${mydata[i].original}</div>`;
                document.getElementById('Production_Company').innerHTML += `<div>${mydata[i].Production}</div>`;
                document.getElementById('Episode').innerHTML += `<div>${mydata[i].Episode}</div>`;
            }
        };
        Anime_json.open('GET', "../json/table1-3.json");
        Anime_json.send();

    };
    var lastClickTime = 0; // 记录上一次点击按钮的时间戳

    random_list.onclick = function () {
        var currentTime = new Date().getTime(); // 获取当前时间的时间戳
        if (currentTime - lastClickTime < 10000) {
            // 不满10秒，显示预备好的图片
            document.getElementById('start_end').innerHTML = '<img src="../img/take a rest.gif" alt="">';
            document.getElementById('title').innerHTML = "";
            document.getElementById('original_name').innerHTML = "";
            document.getElementById('Production_Company').innerHTML = "";
            document.getElementById('Episode').innerHTML = "";
        } else {
            // 超过10秒，正常显示数据
            Anime_json = new XMLHttpRequest();
            Anime_json.onload = function () {
                mydata = JSON.parse(Anime_json.responseText);
                var myrandom = Math.random();
                var look_anime = Math.floor(myrandom * mydata.length) + 1;
                //清除
                document.getElementById('start_end').innerHTML = "";
                document.getElementById('title').innerHTML = "";
                document.getElementById('original_name').innerHTML = "";
                document.getElementById('Production_Company').innerHTML = "";
                document.getElementById('Episode').innerHTML = "";
                //新增
                document.getElementById('start_end').innerHTML += `<div>${mydata[look_anime].start_end}</div>`;
                document.getElementById('title').innerHTML += `<div>${mydata[look_anime].title}</div>`;
                document.getElementById('original_name').innerHTML += `<div>${mydata[look_anime].original}</div>`;
                document.getElementById('Production_Company').innerHTML += `<div>${mydata[look_anime].Production}</div>`;
                document.getElementById('Episode').innerHTML += `<div>${mydata[look_anime].Episode}</div>`;
            }
            Anime_json.open('GET', '../json/table1-3.json', true);
            Anime_json.send();
        }
        lastClickTime = currentTime; // 更新上一次点击按钮的时间戳
    }