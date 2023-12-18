declare class BottomSheet extends HTMLElement {
    defaultVh: number;
    beforeVh: number;
    sheetHeight: number;
    mobileVh: number;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderBottomSheet(): void;
    setSheetHeight(value: number): void;
    setIsSheetShown(value: boolean): void;
    openSheet(): void;
    openFullSheet(): void;
    closeSheet(): void;
    fullSheet(): void;
}
declare const isMobile: boolean;
