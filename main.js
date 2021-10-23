// https://api.github.com/users/marcusvirtuoso

const linksSocialMedia = {
  github: 'marcusvirtuoso',
  youtube: 'marcus',
  facebook: 'marcus',
  instagram: 'marcus',
  twitter: 'marcus'
}

function changeSocialMediaLinks() {
  //document.getElementById('userName').textContent = 'Olivia'
  userName.textContent = 'Olivia'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com.br/${linksSocialMedia[social]}`
    console.log(li.children[0].href)
    //console.log(li.getAttribute('class'))
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      profile.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
