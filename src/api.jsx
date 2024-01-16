export const Api_Url = "https://api.jikan.moe/v4/";

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
    url: Api_Url + "top/anime",
    options: {
      method: "GET",
    },
  };
}
