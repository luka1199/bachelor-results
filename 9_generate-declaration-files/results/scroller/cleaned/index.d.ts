export = Scroller;

declare class Scroller {
	constructor(callback?: undefined,options?: undefined);
	setDimensions(clientWidth: number, clientHeight: number, contentWidth: number, contentHeight: number): void;
	__computeScrollMax(zoomLevel?: number): void;
	scrollTo(left: number, top: number, isAnimated?: boolean, zoom?: number): void;
	__publish(left: number, top: number, zoom: number, isAnimated?: boolean): void;
	getValues(): object;
	zoomTo(level: number, isAnimated?: boolean, fixedLeft?: number, fixedTop?: number, callback?: undefined): void;
	getScrollMax(): object;
	setSnapSize(width: number, height: number): void;
	doTouchStart(touches: Array<any> | Scroller.I__touches, timeStamp: number): void;
	doTouchMove(touches: Array<any> | Scroller.I__touches__2 | Scroller.I__touches, timeStamp: number, scale?: undefined): void;
	doTouchEnd(timeStamp: number): void;
	__startDeceleration(timeStamp: number): void;
	doMouseZoom(wheelDelta: number, timeStamp: null, pageX: number, pageY: number): void;
	getPoint(scrollLeft: number, scrollTop: number): object;
	__stepThroughDeceleration(render: boolean): void;
	zoomBy(factor: number, isAnimated?: undefined, originLeft?: undefined, originTop?: undefined, callback?: undefined): void;
	scrollBy(left: number, top: number, isAnimated?: undefined): void;
}

declare namespace Scroller {
	export interface I__options {
		'animationDuration': number;
		'zooming': boolean;
		'snapping': boolean;
		'paging': boolean;
		'scrollingX': boolean;
		'scrollingY': boolean;
	}

	export interface I__0 {
		'pageX': number;
		'pageY': number;
	}

	export interface I__touches {
		'0': I__0;
		'length': number;
	}

	export interface I__0__1 {
		'pageX': number;
		'pageY': number;
	}

	export interface I__touches__2 {
		'0': I__0__1 | I__0 | object;
		'length': number;
	}

}