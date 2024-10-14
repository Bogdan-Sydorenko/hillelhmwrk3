let userLink = ''
function enterLink() {
    userLink = prompt('Enter a link')
    if (userLink && !userLink.startsWith('http')) {
        userLink = 'https://' + userLink
    }
}

function activateLink () {
    if (userLink) {
        window.location.href = userLink
    }else {
        console.log("First enter the link.")
    }
}

document.querySelector('#promptButton').addEventListener('click', enterLink)
document.querySelector('#linkButton').addEventListener('click', activateLink)
