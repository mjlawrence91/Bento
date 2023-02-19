console.log('get-playlists: Loaded.')

const clientId = 'f1a27b146083485985a8b955e5bc0348' // Your client id
const redirectUri = 'http://192.168.0.63:8080/' // Your redirect uri
const scopes = 'user-read-private user-read-email playlist-read-private'
const state = 'demonsrunwhenagoodmangoestowar'

const spotifySignIn = document.querySelector('#spotify-button')
const currentUrl = new URL(location.href)

// if (currentUrl.hash) {
// const signInResponse = Object.fromEntries(
//   currentUrl.hash
//     .slice(1)
//     .split('&')
//     .map(param => param.split('='))
// )

// localStorage.setItem('spotify-response', JSON.stringify(signInResponse))

// spotifySignIn.classList.add('hidden')

const response = await fetch('https://api.spotify.com/v1/me/playlists', {
  headers: {
    authorization: 'Bearer BQCmfQ06v2qMcVxs-6sOmeeYP0aAHnx4cGmRHwfzDmds18_YjV4viuM21kgtDyPB-zqnns1zC9WzjX3kCNKrvo-EN626SDze-dYdsxAUkk6Ikh7RR_RxsXt2LBS9nzsvBPMUlsqdQnHBo2iScYl_vOObp04Z86DQiHrAxm3pWTSm880lDhHV_PUiA0kUySa5_OJwJmWh344'
  }
})
  .then(res => res.json())
  .then(res => res.items.map(item => ({
    name: item.name,
    link: item.external_urls.spotify
  })))
  .then(res => res.filter(item => item.name !== 'Discover Weekly'))

console.log(JSON.stringify(response))
// console.log(response)
// }

// spotifySignIn.addEventListener('click', () => {
//   const authorizeUrl = new URL('https://accounts.spotify.com/authorize')

//   authorizeUrl.searchParams.append('response_type', 'token')
//   authorizeUrl.searchParams.append('client_id', clientId)
//   authorizeUrl.searchParams.append('scope', scopes)
//   authorizeUrl.searchParams.append('redirect_uri', redirectUri)
//   authorizeUrl.searchParams.append('state', state)

//   location.href = authorizeUrl
// })
