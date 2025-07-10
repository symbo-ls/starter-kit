export const fetchReleases = s => {
      const username = 'symbo-ls'
      const repoName = 'smbls'
      const accessToken = '{{ GITHUB_KEY }}' // Optional

      const apiUrl = `https://api.github.com/repos/${username}/${repoName}/releases`

      const headers = accessToken ? {
        Authorization: `token ${accessToken}`
      } : {}



      window.fetch(apiUrl, {
          headers
        })
        .then(response => response.json())
        .then(releases => {
          // Sort the releases by published date in descending order
          releases.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))

          // Extract the last three releases
          const lastThreeReleases = releases.slice(0, 3)
          s.update(lastThreeReleases)
        })
        .catch(error => {
          console.error('Error fetching GitHub releases:', error)
        })
    }