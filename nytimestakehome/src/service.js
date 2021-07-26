
export const getArticles = (section) => {
    return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=GC461gcvXxhgStyDDJUdCZTri42DqRuF`)
    .then(response => response.json())
  }