const urlImages = "https://source.unsplash.com/600x600/?";

function search() {
  var input = document.getElementById("searchInput").value;
  console.log(input);

  var img = document.querySelectorAll("#gambar");
  for (var i = 0; i < img.length; i++) {
    img[i].src = urlImages + input + "&sig=" + i;
    console.log(img[i].src);
  }

  if (input == "") {
    for (var i = 0; i < img.length; i++) {
      img[i].src = urlImages + i;
      console.log(img[i].src);
    }
  }
}

function category() {
    var input = document.getElementById("categoryInput").value;
    console.log(input);
  
    var img = document.querySelectorAll("#gambar");
    for (var i = 0; i < img.length; i++) {
      img[i].src = urlImages + input + "&sig=" + i;
      console.log(img[i].src);
    }
  
    if (input == "") {
      for (var i = 0; i < img.length; i++) {
        img[i].src = urlImages + i;
        console.log(img[i].src);
      }
    }
  }