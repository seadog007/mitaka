import { throttle } from "throttle-debounce";

export function onsSlectionChange() {
  const selection = window.getSelection();
  const text: string = selection.toString().trim();
  let link;
  if (selection.rangeCount > 0) {
    const range = window.getSelection().getRangeAt(0).startContainer.parentElement;
    if (range !== null && range.hasAttribute("href")) {
      link = range.getAttribute("href");
    }
  }
  const selected = link || text;
  if (selected !== "") {
    chrome.runtime.sendMessage({
      request: "updateContextMenu",
      selection: selected,
    });
  }
};

if (typeof document !== "undefined") {
  document.addEventListener("selectionchange", throttle(100, onsSlectionChange));
}
