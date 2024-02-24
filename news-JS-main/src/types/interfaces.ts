export interface IItemsData {
    articles: string;
    urlToImage: string;
    author: string;
    source: { name: string,
              id: null,
            };
    publishedAt: string;
    title: string;
    description: string;
    url: string;
}

export interface ISource {
  sources: string;
  id: string;
  name: string;
}

export interface Option {
  apiKey: string;
}
