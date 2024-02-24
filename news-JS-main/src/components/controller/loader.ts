import { Option } from "../../types/interfaces";

class Loader {
    public baseLink: string;
    public options: Option;

    constructor(baseLink: string, options: Option) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp(
        { endpoint, options = {} }: { endpoint: string, options?: Record<string, number> },
        callback: { (): void; (arg0: string): string; }
    ) {
        this.load('GET', endpoint, callback, options);
    }

    public errorHandler(res: Response) {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw new Error(res.statusText);
        }
    
        return res;
    }

    protected makeUrl(options: string[], endpoint: string): string {
        const urlOptions: string[] | ConcatArray<string>[] = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
    
        if (Array.isArray(urlOptions)) {
            urlOptions.forEach((value) => {
                url += `${value}&`;
            });
        } else {
            Object.keys(urlOptions).forEach((key: string) => {
                url += `${key}=${urlOptions[key]}&`;
            });
        }
    
        return url.slice(0, -1);
    }

    protected load(method: string, endpoint: string, callback: { (): void; (arg0: string): string; }, options = {}) {
        fetch(this.makeUrl(options as string [], endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
