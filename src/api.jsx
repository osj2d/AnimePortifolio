export const Api_Url = "https://api.jikan.moe/v4/";

function Space(value) {
  return value.replaceAll(" ", "%20");
}

export function SEASSON_GET() {
  return {
    url: Api_Url + "seasons/now",
    options: {
      method: "GET",
    },
  };
}
export function TOP_ANIME_GET() {
  return {
    url: Api_Url + "top/anime?limit=10",
    options: {
      method: "GET",
    },
  };
}
export function TOP_MANGA_GET() {
  return {
    url: Api_Url + "top/manga?limit=10",
    options: {
      method: "GET",
    },
  };
}
export function ANIME_ID_GET(id) {
  return {
    url: Api_Url + `anime/${id}`,
    options: {
      method: "GET",
    },
  };
}
export function MANGA_ID_GET(id) {
  return {
    url: Api_Url + `manga/${id}`,
    options: {
      method: "GET",
    },
  };
}
export function SEARCH_GET(tipo,value) {
  value = value.replaceAll(" ", "%20");
  return {
    url: Api_Url + `${tipo}?q=${value}`,
    options: {
      method: "GET",
    },
  };
}
