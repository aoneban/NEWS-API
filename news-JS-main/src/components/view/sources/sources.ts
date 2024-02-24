import './sources.css';

class Sources {
    draw(data: any) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as any;

        data.forEach((item: any) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true);

            sourceClone.querySelector('.source__item-name').textContent = item.name;
            sourceClone.querySelector('.source__item').setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const elem = document.querySelector('.sources') as HTMLElement
        elem.append(fragment);
    }
}

export default Sources;
