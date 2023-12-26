export declare class BottomSheet extends HTMLElement {
    defaultVh: number;
    beforeVh: number;
    sheetHeight: number;
    readonly mobileVh: number;
    constructor();
    connectedCallback(): void;
    renderBottomSheet(): void;
    setSheetHeight(heightVh: number): void;
    setIsSheetShown(isShown: boolean): void;
    openSheet(): void;
    openFullSheet(): void;
    closeSheet(): void;
    fullSheet(): void;
}
