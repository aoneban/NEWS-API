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
    id: string;
    name: string;
    description: string;
    url: string;
    category: string;
    language: string;
    country: string;
}

export interface Option {
  apiKey: string;
}
