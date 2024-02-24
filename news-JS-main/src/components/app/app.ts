import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {

    controller: AppController;
    view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const elem = document.querySelector('.sources') as any;
        elem.addEventListener('click', (e: any) => this.controller.getNews(e, (data: any) => this.view.drawNews(data)));
        this.controller.getSources((data: any) => this.view.drawSources(data));
    }
}

export default App;
