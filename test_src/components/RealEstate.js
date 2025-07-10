export const RealEstate = {
  extends: 'ProjectType',
  Caption: {
    text: 'Real Estate'
  },
  ProjectPreview: {
    Grid: {
      children: [
        {
          text: `Real estate is a key component
          of Smart Capital Group's diversified
          investment portfolio, holding a prominent
          position within the company's strategy`
        },
        {
          text: `Currently, in collaboration with
          partner companies, the group is actively
          involved in four ongoing projects located
          in Tbilisi and its surrounding areas.`
        },
        {
          text: `These projects include expansive
          residental complexes as well as the development
          of an exclusive private settlement, meticulously designed
          to cater to the needs of modern urban living `
        }
      ]
    }
  },
  ProjectSet: {
    Grid: {
      children: [
        {
          Img: {},
          Hgroup: {
            H: {
              text: 'Agregati Project'
            },
            P: {
              text: `The Agregati Project spans 4.6 hectares
                and includes a modern residental complex
                featuring contemporary living spaces,
                leisure areas, and retail shops`
            }
          }
        },

        {
          Img: {
            src: 'Bitmap 6.png'
          },
          Hgroup: {
            H: {
              text: 'Project Nadareishvili'
            },
            P: {
              text: `The Nadareishvili Project offers a serene
                  and secure residential environment in Samgori,
                  with a prime location that ensures convenience
                  and accessibility Situated just a 12-minute metro
                  ride from Freedom Square and only 2 minutes
                  from the main Tbilisi highway the 
                  development is also 13 minutes drive`
            }
          }
        },

        {
          Img: {
            src: 'Bitmap 7.png'
          },
          Hgroup: {
            H: {
              text: 'Bodbe Hotel'
            },
            P: {
              text: `Bodbe Hotel is a contemporary Georgian
                  hospitality project that celebrates the rich
                  cultural heritage of Kakheti. Drawing inspiration from local
                  traditions, the hotel seamlessly integrates modern
                  operational practices, positioning itself in line 
                  with global hospitality trends`
            }
          }
        }
      ]
    }
  }
}
