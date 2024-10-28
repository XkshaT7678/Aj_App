document.addEventListener("DOMContentLoaded", function () {
    // Display loading screen
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
        openTab("about-institute"); // Default tab
    }, 2000); // 2 seconds loading time
});

// Tab Navigation
function openTab(tabId) {
    document.querySelectorAll(".tab-content").forEach(tab => {
        tab.classList.add("hidden");
    });
    document.getElementById(tabId).classList.remove("hidden");
}

// Password Protection
function checkPassword() {
    const password = document.getElementById("password").value;
    if (password === "110085") {
        document.getElementById("video-content").classList.remove("hidden");
        document.getElementById("password").style.display = "none";
    } else {
        alert("Incorrect Password!");
    }
}
