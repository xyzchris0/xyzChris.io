document.addEventListener('DOMContentLoaded', function() {
    const headerContainer = document.createElement('div');
    headerContainer.innerHTML = document.querySelector('script[src*="header.html"]').innerHTML;
    document.body.insertBefore(headerContainer, document.body.firstChild);
});
