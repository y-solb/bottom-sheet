"use strict";
class BottomSheet extends HTMLElement {
    constructor() {
        super();
        this.defaultVh = 0; // default height of .sheet__wrapper (vh)
        this.beforeVh = 0; // height of .sheet__wrapper before change (vh)
        this.sheetHeight = 0; // height of .sheet__wrapper (vh)
        this.mobileVh = window.innerHeight * 0.01; // 1vh
    }
    connectedCallback() {
        this.setAttribute("aria-hidden", "true");
        this.renderBottomSheet();
    }
    renderBottomSheet() {
        const id = this.getAttribute("id");
        this.className = "customBottomsheet";
        if (!isMobile) {
            this.classList.add("_modal");
        }
        const overlayDiv = document.createElement("div");
        overlayDiv.className = "overlay";
        const sheetWrapperDiv = document.createElement("div");
        sheetWrapperDiv.className = "sheet__wrapper";
        const headerDiv = document.createElement("header");
        headerDiv.className = "controls";
        headerDiv.innerHTML = `
      <div class="draggable-area">
            <div class="draggable-thumb"></div>
          </div>
      <div class="title__wrapper">
        <span class="title">${this.getAttribute("title")}</span>
      </div>
    `;
        const contentDiv = this.querySelector(`#${id} > main`);
        contentDiv.className = `${contentDiv.className} content`;
        const styleLink = document.createElement("link");
        styleLink.setAttribute("rel", "stylesheet");
        styleLink.setAttribute("href", "../style/style.css");
        sheetWrapperDiv.appendChild(headerDiv);
        sheetWrapperDiv.appendChild(contentDiv);
        this.appendChild(overlayDiv);
        this.appendChild(sheetWrapperDiv);
        this.appendChild(styleLink);
        this.querySelector(".overlay").addEventListener("click", () => {
            this.closeSheet();
        });
        if (isMobile) {
            const draggableAreaDiv = this.querySelector(".draggable-area");
            let dragPosition = 0;
            const onTouchStart = (event) => {
                dragPosition = event.touches[0].clientY;
                sheetWrapperDiv.classList.add("not-selectable");
            };
            const onTouchMove = (event) => {
                if (dragPosition === 0)
                    return;
                const y = event.touches[0].clientY;
                const deltaY = dragPosition - y;
                const deltaHeight = (deltaY / window.innerHeight) * 100;
                this.setSheetHeight(this.sheetHeight + deltaHeight);
                dragPosition = y;
            };
            const onTouchEnd = () => {
                dragPosition = 0;
                sheetWrapperDiv.classList.remove("not-selectable");
                if (this.sheetHeight < this.beforeVh - 5) {
                    this.closeSheet();
                }
                else if (this.sheetHeight > this.defaultVh + 10) {
                    this.setSheetHeight(100);
                }
                else {
                    this.setSheetHeight(this.defaultVh);
                }
                this.beforeVh = this.sheetHeight;
            };
            draggableAreaDiv.addEventListener("touchstart", onTouchStart, {
                passive: true,
            });
            this.addEventListener("touchmove", onTouchMove, { passive: true });
            this.addEventListener("touchend", onTouchEnd, { passive: true });
        }
    }
    setSheetHeight(heightVh) {
        const sheetWrapper = this.querySelector(".sheet__wrapper");
        if (!isMobile)
            return;
        this.sheetHeight = Math.max(0, Math.min(100, heightVh));
        sheetWrapper.style.height = `${this.sheetHeight * this.mobileVh}px`;
        if (this.sheetHeight === 100) {
            sheetWrapper.classList.add("fullscreen");
        }
        else {
            sheetWrapper.classList.remove("fullscreen");
        }
    }
    setIsSheetShown(isShown) {
        this.setAttribute("aria-hidden", String(!isShown));
        if (isShown) {
            document.body.classList.add("no-scroll");
        }
        else {
            const shownBottomSheet = Array.from(document.querySelectorAll("bottom-sheet")).find((el) => el.ariaHidden === "false");
            if (!shownBottomSheet) {
                document.body.classList.remove("no-scroll");
            }
        }
    }
    openSheet() {
        if (this.defaultVh === 0) {
            const sheetWrapperDiv = this.querySelector(".sheet__wrapper");
            if (this.getAttribute("vh")) {
                this.defaultVh = Number(this.getAttribute("vh"));
            }
            else {
                this.defaultVh = Number((sheetWrapperDiv.offsetHeight / window.innerHeight) * 100);
            }
        }
        this.beforeVh = this.defaultVh;
        this.setSheetHeight(this.defaultVh);
        this.setIsSheetShown(true);
    }
    openFullSheet() {
        this.beforeVh = 100;
        this.setSheetHeight(100);
        this.setIsSheetShown(true);
    }
    closeSheet() {
        this.setSheetHeight(0);
        this.setIsSheetShown(false);
    }
    fullSheet() {
        this.beforeVh = 100;
        this.setSheetHeight(100);
    }
}
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
customElements.define("bottom-sheet", BottomSheet);
