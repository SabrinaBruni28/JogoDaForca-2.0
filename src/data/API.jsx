const API = {
  comidas: {
    name: "Comidas",
    url: "https://www.themealdb.com/api/json/v1/1/search.php?s=",
    extractor: "mealdb",
  },

  bebidas: {
    name: "Bebidas",
    url: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=",
    extractor: "cocktaildb",
  },

  objetos: {
    name: "Objetos",
    url: "https://dummyjson.com/products",
    extractor: "dummyjson",
  },

  paises: {
    name: "Países",
    url: "https://restcountries.com/v3.1/all?fields=name",
    extractor: "countries",
  },

  animais: {
    name: "Animais",
    url: "https://pt.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Categoria:Animais&cmlimit=100&format=json&origin=*",
    extractor: "wikipediaCategory",
  },

  filmes: {
    name: "Filmes",
    url: "https://pt.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Categoria:Filmes&cmlimit=100&format=json&origin=*",
    extractor: "wikipediaCategory",
  },

  artistas: {
    name: "Artistas",
    url: "https://pt.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Categoria:Músicos&cmlimit=100&format=json&origin=*",
    extractor: "wikipediaCategory",
  },
};

export default API;
