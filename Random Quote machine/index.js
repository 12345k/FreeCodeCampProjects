function next() {
  document.getElementById("quote").innerHTML="";
  // var rand = Math.floor(Math.random() * 10);
  var num = Math.floor(Math.random() * 20);
  $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]="+num+"&callback=", function(a) {
  $("#quote").append(a[0].content + "<p>— " + a[0].title + "</p>")
  });
}
