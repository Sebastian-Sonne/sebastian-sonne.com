function redirectToLicense() {
    window.location.href = 'https://github.com/sebastian-sonne/sebastian-sonne.com/blob/main/LICENSE';
}

function downloadLicense() {
    if (confirm('You will download the full LICENSE file. Confirm to proceed.')) {
        window.location.href = '/LICENSE';
    }
}