//
//   .-')     _ (`-.                           .-. .-')
//   ( OO ).  ( (OO  )                          \  ( OO )
//  (_)---\_)_.`     \ .-'),-----.  .-'),-----. ,--. ,--.   ,--.   ,--.
//  /    _ |(__...--''( OO'  .-.  '( OO'  .-.  '|  .'   /    \  `.'  /
//  \  :` `. |  /  | |/   |  | |  |/   |  | |  ||      /,  .-')     /
//   '..`''.)|  |_.' |\_) |  |\|  |\_) |  |\|  ||     ' _)(OO  \   /
//  .-._)   \|  .___.'  \ |  | |  |  \ |  | |  ||  .   \   |   /  /\_
//  \       /|  |        `'  '-'  '   `'  '-'  '|  |\   \  `-./  /.__)
//   `-----' `--'          `-----'      `-----' `--' '--'    `--'
//

var spooky = (function () {
  var count = parseInt(localStorage.getItem("_spooky_count")) || 0;
  let init_count = count;

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function add(options) {
    count += 1;

    // Prepare our spooky variables
    var spookyUrls = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaMQR6brlU6ATGZmhsDPqs8_8T_wshseEPHw&usqp=CAU",
      "https://cdn.iconscout.com/icon/free/png-512/ghost-creature-face-fairy-tale-fantasy-monster-37768.png",
      "https://cdn.iconscout.com/icon/free/png-512/ghost-94-450461.png",
      "https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724__340.jpg",
      "https://cdn.pixabay.com/photo/2017/07/26/19/54/fantasy-2542946__340.jpg",
      "https://cdn.pixabay.com/photo/2016/09/02/22/45/pumpkin-1640465_1280.png",
      "https://cdn.pixabay.com/photo/2013/07/13/12/04/death-159120_1280.png",
      "https://cdn.pixabay.com/photo/2016/06/16/08/31/night-1460872_1280.png",
      "https://cdn.pixabay.com/photo/2016/06/16/09/34/death-1460981_1280.png",
      "https://cdn.pixabay.com/photo/2016/06/14/14/09/skeleton-1456627_1280.png",
      "https://cdn.pixabay.com/photo/2017/11/07/00/59/skull-2925329_1280.png",
      "https://cdn.pixabay.com/photo/2016/09/02/22/52/vector-1640482_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/05/20/13/evil-1801297_1280.png",
      "https://cdn.pixabay.com/photo/2016/10/27/16/04/ghosts-1775548_1280.png",
      "https://cdn.pixabay.com/photo/2016/09/02/22/59/vector-1640524_1280.png",
      "https://cdn.pixabay.com/photo/2016/10/27/16/04/spirit-1775547_1280.png",
      "https://cdn.pixabay.com/photo/2017/08/28/22/30/halloween-2691540_1280.png",
      "https://cdn.pixabay.com/photo/2017/01/31/20/32/cartoon-2027047_1280.png",
      "https://cdn.pixabay.com/photo/2020/09/04/04/25/halloween-5542805_1280.png",
      "https://cdn.pixabay.com/photo/2014/12/22/00/06/tree-house-576796_1280.png",
      "https://cdn.pixabay.com/photo/2016/04/01/00/13/halloween-1298060_1280.png",
      "https://cdn.pixabay.com/photo/2016/11/11/20/03/animal-1817643_1280.png",
      "https://cdn.pixabay.com/photo/2013/07/13/10/18/ghost-156969_1280.png",
      "https://cdn.pixabay.com/photo/2017/09/12/17/14/halloween-2742962_1280.png",
      "https://cdn.pixabay.com/photo/2012/04/13/00/35/ghost-31324_1280.png",
      "https://cdn.pixabay.com/photo/2018/09/25/12/50/halloween-witch-3702171_1280.png",
      "https://cdn.pixabay.com/photo/2014/04/03/09/58/mummy-309452_1280.png",
      "https://cdn.pixabay.com/photo/2014/03/24/13/42/house-294108_1280.png",
      "https://cdn.pixabay.com/photo/2013/07/12/16/38/halloween-151311_1280.png",
      "https://cdn.pixabay.com/photo/2016/06/15/11/44/halloween-1458811_1280.png",
      "https://cdn.pixabay.com/photo/2019/07/15/06/59/halloween-cat-4338697_1280.png",
      "https://cdn.pixabay.com/photo/2019/11/06/15/30/halloween-4606433_1280.png",
      "https://cdn.pixabay.com/photo/2014/12/21/23/34/tree-575577_1280.png",
      "https://cdn.pixabay.com/photo/2019/11/06/15/30/halloween-4606435_1280.png",
    ];
    var sizeType = "px";
    var randomHeight = Math.random() * 0.75;
    var windowHeight = 768;
    var windowWidth = 1024;
    var height = 0;
    var width = 0;
    var doc = document.documentElement;
    var transform = "translate(-50%, -50%)";

    // Create a container for our haunted friend
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.className = "__spooky_friend";
    div.style.zIndex = 143143;
    div.style.outline = 0;
    div.onclick = add;

    // Get window width/height
    if (typeof window.innerHeight === "number") {
      windowWidth = window.innerWidth;
      windowHeight = window.innerHeight;
    } else if (doc && doc.clientHeight) {
      windowWidth = doc.clientWidth;
      windowHeight = doc.clientHeight;
    } else {
      sizeType = "%";
      height = Math.round(height * 100) + sizeType;
    }

    let gp_url =
      "https://img.pngio.com/hd-its-the-great-pumpkin-charlie-brown-clip-art-pictures-great-pumpkin-charlie-brown-png-900_820.png";
    let grandpumpkin = count - init_count == 15 ? gp_url : false;
    if (grandpumpkin) {
      div.style.top = "50%";
      div.style.left = "50%";
      div.style.zIndex = 143143143;
    } else {
      // Position our friend on the screen
      div.style.top = Math.round(Math.random() * 100) + "%";
      div.style.left = Math.round(Math.random() * 100) + "%";
      transform += " rotate(" + Math.round(Math.random() * 10 - 5) + "deg)";

      if (Math.random() > 0.5) {
        transform += " scaleX(-1)";
      }
    }

    div.style.transform = transform;
    div.style.MozTransform = transform;
    div.style.webkitTransform = transform;

    var url = grandpumpkin || getRandomElement(spookyUrls);

    // Create the image element
    var img = document.createElement("img");
    img.style.opacity = 0;
    img.style.transition = "all 0.1s linear";
    img.alt = "A spooky, haunted friend";
    img.onload = function () {
      img.style.opacity = 1;
    };
    img.setAttribute("src", url);
    img.style.maxWidth = windowWidth / 5 + "px";

    div.onmouseover = function () {
      var size = 1 + Math.round(Math.random() * 10) / 100;
      var angle = Math.round(Math.random() * 20 - 10);
      var result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";

      img.style.transform = result;
      img.style.MozTransform = result;
      img.style.webkitTransform = result;
    };

    div.onmouseout = function () {
      var size = 0.9 + Math.round(Math.random() * 10) / 100;
      var angle = Math.round(Math.random() * 6 - 3);
      var result = "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
      img.style.transform = result;
      img.style.MozTransform = result;
      img.style.webkitTransform = result;
    };

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(div);
    div.appendChild(img);

    if (count - init_count == 5) spooky_css();
    update_counter();

    var event = new Event("boo");
    document.dispatchEvent(event);
  }
  function update_counter() {
    let p = document.getElementById("__spooky_counter");
    if (p == null) {
      p = document.createElement("p");
      p.id = "__spooky_counter";
      p.style.position = "fixed";
      p.style.bottom = "5px";
      p.style.left = "0px";
      p.style.right = "0px";
      p.style.zIndex = "1000000000";
      p.style.color = "#FC4C02";
      p.style.textAlign = "center";
      p.style.fontSize = "24px";
      p.style.fontFamily =
        "'Comic Sans MS', 'Comic Sans', 'Marker Felt', serif"; // Change this with something that fits the theme
      p.style.textTransform = "uppercase";
      let body = document.getElementsByTagName("body")[0];
      body.appendChild(p);
    }

    if (count == 1) {
      p.innerHTML = "You Spookyfied!";
    } else {
      p.innerHTML = "You spookyfied " + count + " times!";
    }
    localStorage.setItem("_spooky_count", count);
  }

  function spooky_css() {
    let existing = document.getElementById("_spooky_css");
    if (existing) return;
    let css = document.createElement("style");
    css.id = "_spooky_css";
    css.innerHTML = `@import url("https://fonts.googleapis.com/css?family=Amatic+SC:400,700");
    body {
      font-family: 'Amatic SC', sans-serif;!important
      font-size: large;!important
    }`;
    document.head.append(css);
  }

  function loop(options) {
    add(options);

    setInterval(function () {
      add(options);
    }, 1500);
  }

  return {
    add,
    loop,
  };
})();
