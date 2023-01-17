const requestButton = document.querySelector(".request-button");
const showButton = document.querySelector(".show-button");

function onGranted() {
    requestButton.style.background = "green";
}

function onDenied() {
    requestButton.style.background = "red";
}

requestButton.onclick = function() {
    Push.Permission.request(onGranted, onDenied);
}

showButton.onclick = function() {
    Push.create("Cloudflare.com May be down in your area.", {
        body: "Cloudflare.com is a Key Component in this website",
        icon: "cloudflare-logo.webp",
        timeout: 1000,
        onClick: function() {
            console.log(this);
        }
    });
};
