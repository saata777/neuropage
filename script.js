document.addEventListener("DOMContentLoaded", () => {
    const openPanelButton = document.getElementById("open-panel");
    const closePanelButton = document.getElementById("close-panel");
    const leftPanel = document.getElementById("left-panel");
    const mainContent = document.getElementById("main-content");

    // Открыть панель
    openPanelButton.addEventListener("click", () => {
        leftPanel.style.left = "0";
        mainContent.style.opacity = "0.5";
    });

    // Закрыть панель
    closePanelButton.addEventListener("click", () => {
        leftPanel.style.left = "-100%";
        mainContent.style.opacity = "1";
    });
});
