import { CONFIG } from "app/config";
import { IDisposable } from "app/Core/IDisposable";
import { IRenderable } from "app/Core/IRenderable";

export class Scene implements IDisposable, IRenderable {
    protected root: HTMLElement;

    public constructor(
        protected container: HTMLElement
    ) {
        //
    }

    public dispose(): void {
        this.root.remove();
    }
    public render(): HTMLElement {
        if (this.container.contains(this.root)) {
            throw new Error("Element is already rendered in its container");
        }
        this.container.appendChild(this.root);
        return this.root;
    }

    protected createRoad(): HTMLElement {
        const road: HTMLDivElement = document.createElement('div');

        road.style.position = 'absolute';
        road.style.bottom = '0px';
        road.style.left = CONFIG.scene.road.shiftX + 'px';
        road.style.width = CONFIG.scene.road.length + 'px';
        road.style.height = CONFIG.scene.road.width + 'px';
        road.style.backgroundColor = CONFIG.scene.road.color;
        // road.style.transform


        return road;
    }

}
