const { createClient } = microcms;

const construction_index = document.getElementById('construction');

function printConstruction_index(res) {
  res.contents.forEach(obj => {
    const title = obj.title;
    const cat = obj.category[0];
    const address = obj.address;
    const tags = obj.tag;
    const image = obj.image;

    construction_index.innerHTML +=
      "<h2>" + title + "</h2>"
      + "<div>" + cat + "</div>"
      + "<address>" + address + "</address>";

    str_tags = "";
    tags.forEach(tag => {
      str_tags += "<span>" + tag + "</span>";
    });
    construction_index.innerHTML += str_tags;

    str_image = image.url;
    str_image_thumb = image.url + "?w=450";
    construction_index.innerHTML += 
    "<img src=\"" + str_image + "\">"
    + "<img src=\"" + str_image_thumb + "\">";
    
  });
}

const client = createClient({
  serviceDomain: "e9f871rxzi", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "gmyXJaUvoLo7kE3m6KmG9GsSEIECV7yomZko",
  // customFetcher: fetch.bind(globalThis), // Provide a custom `fetch` implementation as an option
});

client
  .get({
    endpoint: 'construction',
  })
  .then((res) => printConstruction_index(res));
