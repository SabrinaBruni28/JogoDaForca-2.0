const randomItem = (array) => array[Math.floor(Math.random() * array.length)];

const extractors = {
  // Random Word API
  random: (data) => data?.[0] ?? null,

  // Datamuse (quando usar)
  datamuse: (data) => (data?.length ? randomItem(data).word : null),

  // TheMealDB
  mealdb: (data) =>
    data?.meals?.length ? randomItem(data.meals).strMeal : null,

  // TheCocktailDB
  cocktaildb: (data) =>
    data?.drinks?.length ? randomItem(data.drinks).strDrink : null,

  // DummyJSON (produtos, objetos)
  dummyjson: (data) =>
    data?.products?.length ? randomItem(data.products).title : null,

  // REST Countries
  countries: (data) => {
    if (!Array.isArray(data) || !data.length) return null;
    return randomItem(data)?.name?.common ?? null;
  },

  // Wikipedia - categoria (CORRETO para seu uso)
  wikipediaCategory: (data) => {
    const items = data?.query?.categorymembers;
    if (!items?.length) return null;

    const filtered = items.filter(
      (item) =>
        !item.title.startsWith("Categoria:") && !item.title.includes("listas"),
    );

    return filtered.length ? randomItem(filtered).title : null;
  },

  // Array local (fallback)
  array: (data) => (Array.isArray(data) ? randomItem(data) : null),
};

export default extractors;
