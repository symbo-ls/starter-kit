export const WineMaking = {
  extends: 'ProjectType',
  state: {
    data: [
      {
        text: `Georgia, the ancient birthplace of wine
      has long been celebrated for its rich winemaking
      heritage and renowned hospitality. At the heart of Georgian
      viticulture lies the Kakheti region, with Shilda
      as an essential and integral part of its legacy.`
      },
      {
        text: `By employing local talent and honoring the
      time-honored methods of winemaking, Shilda not only
      preserves a treasured national tradition but also
      proudly contributes to its enduring legacy.`
      },
      {
        text: `The Shilda wine factory combines centuries-old
      Georgian winemaking traditions with state-of-the-art
      facilities and energy-efficient technologies,
      ensuring the highest standards of production`
      }
    ]
  },
  Caption: {
    text: 'WineMaking'
  },
  ProjectPreview: {
    Grid: {
      children: (element, state) => state.data
    }
  },
  ProjectSet: {
    Grid: {
      children: [
        {
          Img: {
            src: 'Bitmap 2.png'
          },
          Hgroup: {
            H: {
              text: 'SHILDA Winery'
            },
            P: {
              text: `Founded in 2015, Shilda Wiery
              builds upon Georgia's deep-rooted winemaking
              heritage, which spans thousands of years. Located
              in the village of Shilda in the Kakheti region,
              the winery is equipped with state-of-the-art italian
              and French energy-efficient tegnologies`
            }
          }
        },

        {
          Img: {
            src: 'Bitmap 3.png'
          },
          Hgroup: {
            H: {
              text: 'Kirke'
            },
            P: {
              text: `Kirke is a distinguished label within
              the prestigious Shilda Winery, offering an exceptional
              selection of four premium products: Otskhanuri Sapere, Saperavi,
              Goddess Blend, and Pure Vodka.`
            }
          }
        },

        {
          Img: {
            src: 'Bitmap 4.png'
          },
          Hgroup: {
            H: {
              text: 'Literman'
            },
            P: {
              text: `LiterMAN is a wine brand designed for the
              adventurous and dynamic lifestyle of the new
              generation. It brings a fresh, vibrant energy
              to the wine scene, making it the perfect
              companion for lively gatherings and unforgettable
              moments. LiterMAN seeks to break free from
              the traditional complexities`
            }
          }
        }
      ]
    }
  }
}
