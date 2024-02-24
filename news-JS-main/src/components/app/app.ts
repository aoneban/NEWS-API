import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { IItemsData, ISource } from '../../types/interfaces';

class App {

    public controller: AppController
    public view: AppView

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        const elem = document.querySelector('.sources') as HTMLElement;
        elem.addEventListener('click', (e: object) => this.controller.getNews(e, (data: IItemsData) => this.view.drawNews(data)));
        this.controller.getSources((data: ISource) => this.view.drawSources(data));
    }
}

export default App;

