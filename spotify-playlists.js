const spotifyPlaylists = [{ name: 'Your Top Songs 2022', link: 'https://open.spotify.com/playlist/37i9dQZF1F0sijgNaJdgit' }, { name: 'Summer chill', link: 'https://open.spotify.com/playlist/4sASdRzeBKsXAOjHmpeaEM' }, { name: 'Cocktails', link: 'https://open.spotify.com/playlist/5EgCuQmBYiBxWS38QxOBK5' }, { name: 'Flower Kings', link: 'https://open.spotify.com/playlist/2JAxGlSZjFzIDG3SBu3ydx' }, { name: 'Acoustic Night', link: 'https://open.spotify.com/playlist/6tV0FdR0rgpWUL4Dy2ud9F' }, { name: 'Mark Knopfler', link: 'https://open.spotify.com/playlist/5U469nM95vLKf3BDtfvSwF' }, { name: 'Steely Dan', link: 'https://open.spotify.com/playlist/3PoZx2nSp1PmESL4QqiiCx' }, { name: 'Ziltoid the Omniscient', link: 'https://open.spotify.com/playlist/4XWkVsdgvjJWNd7FpG7nJr' }, { name: 'Steven Wilson', link: 'https://open.spotify.com/playlist/3uwoDvv4iFuQ55lDP2QRo6' }, { name: 'David Gray', link: 'https://open.spotify.com/playlist/5tZ1Mo3UIjyF4wMTfmpwg2' }, { name: 'Toy Matinee', link: 'https://open.spotify.com/playlist/63NOxepGKK6MRyQQ4fWjRH' }, { name: 'King Crimson', link: 'https://open.spotify.com/playlist/1aQbI6JJbzvnts0jIT4j8o' }, { name: 'Pink Floyd', link: 'https://open.spotify.com/playlist/2BpoixErDDVYD1s6UfdvM2' }, { name: 'Wedding', link: 'https://open.spotify.com/playlist/12D0mQ1L7btgMd7dDn5mma' }, { name: 'My Shazam Tracks', link: 'https://open.spotify.com/playlist/29TuebMPAslLnZWYTzEwa3' }, { name: 'Depressing Folk', link: 'https://open.spotify.com/playlist/3wPGXPO82TziCGw2u7EkNc' }, { name: 'Nostalgia', link: 'https://open.spotify.com/playlist/45tEkqcSvUC7YdNmEQVZQU' }, { name: "FHL's Super Awesome Playlist", link: 'https://open.spotify.com/playlist/0xkItqXj7edPO5mqHblhwk' }]

window.shufflePlaylists = (noOfPlaylists) => {
  const displayPlaylists = new Set()

  while (displayPlaylists.size < noOfPlaylists) {
    const rand = Math.floor(Math.random() * spotifyPlaylists.length)

    displayPlaylists.add(
      spotifyPlaylists.at(rand)
    )
  }

  return [...displayPlaylists]
}
