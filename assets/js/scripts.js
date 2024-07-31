function ticketingSystem() {
    window.open("https://github.com/kausikrstnj/Zen-class-Ticketing-system-for-query-resolving-frontend", "_blank");
}
function BootstrapCertificate() {
    window.open('./assets/images/BootstrapCertificate.png', '_blank');
}
function CSS3Certificate() {
    window.open('./assets/images/CSS3Certificate.png', '_blank');
}
function FSDCertificate() {
    window.open('./assets/images/FSDCertificate.png', '_blank');
}
function HTML5Certificate() {
    window.open('./assets/images/HTML5Certificate.png', '_blank');
}
function JavascriptCertificate() {
    window.open('./assets/images/JavascriptCertificate.png', '_blank');
}
function MongoDBCertificate() {
    window.open('./assets/images/MongoDBCertificate.png', '_blank');
}
function MySQLCertificate() {
    window.open('./assets/images/MySQLCertificate.png', '_blank');
}
function NodeJsCertificate() {
    window.open('./assets/images/NodeJsCertificate.png', '_blank');
}
function ReactJSCertificate() {
    window.open('./assets/images/ReactJSCertificate.png', '_blank');
}
document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('.footerButton1');

    contactButton.addEventListener('click', function () {
        const email = 'kausikrstnj@gmail.com';
        const subject = 'Contact Me';
        const body = 'Hello Kausik,\n\nI would like to get in touch with you regarding...'; // Optional body text

        window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
});
