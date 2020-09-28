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
  var count = 0;

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function getSpookyFriend() {
    // Prepare our spooky variables
    var spookyUrls = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTaMQR6brlU6ATGZmhsDPqs8_8T_wshseEPHw&usqp=CAU",
      "https://cdn.iconscout.com/icon/free/png-512/ghost-creature-face-fairy-tale-fantasy-monster-37768.png",
      "https://cdn.iconscout.com/icon/free/png-512/ghost-94-450461.png",
    ];

    var transform = `translate(-50%, -50%) rotate(${Math.round(
      Math.random() * 10 - 5
    )}deg)`;
    if (Math.random() > 0.5) {
      transform += " scaleX(-1)";
    }

    // Create a container for our haunted friend
    var div = document.createElement("div");
    div.style.position = "fixed";
    div.className = "__spooky_friend";
    div.style.zIndex = 187000; // B00
    div.style.outline = 0;
    div.onclick = add;

    // TODO: add the great pumpkin at the center of the screen
    // Position our friend on the screen
    div.style.top = Math.round(Math.random() * 100) + "%";
    div.style.left = Math.round(Math.random() * 100) + "%";
    div.style.transform = transform;
    div.style.MozTransform = transform;
    div.style.webkitTransform = transform;

    var url = getRandomElement(spookyUrls);

    // Create the image element
    var img = document.createElement("img");
    img.style.opacity = 0;
    img.style.transition = "all 0.1s linear";
    img.alt = "A spooky, haunted friend";
    img.onload = function () {
      img.style.opacity = 1;
    };
    img.setAttribute("src", url);

    const onMouseEvent = (angle, size) => () => {
      const transform =
        "rotate(" + angle + "deg) scale(" + size + "," + size + ")";
      img.style.transform = transform;
      img.style.MozTransform = transform;
      img.style.webkitTransform = transform;
    };

    const mouseOverAngle = Math.round(Math.random() * 20 - 10);
    const mouseOverSize = 1 + Math.round(Math.random() * 10) / 100;
    div.onmouseover = onMouseEvent(mouseOverAngle, mouseOverSize);

    const mouseOutAngle = Math.round(Math.random() * 6 - 3);
    const mouseOutSize = 0.9 + Math.round(Math.random() * 10) / 100;
    div.onmouseout = onMouseEvent(mouseOutAngle, mouseOutSize);

    div.appendChild(img);
    return div;
  }

  function add(options) {
    count += 1;

    var body = document.getElementsByTagName("body")[0];
    var div = getSpookyFriend();
    body.appendChild(div);

    // TODO: spooky css after 5 clicks
    // TODO: update spooky counter

    var event = new Event("boo");
    document.dispatchEvent(event);
  }

  function loop(options) {
    add();
    setInterval(add, 1000);
  }

  return {
    add,
    loop,
  };
})();
