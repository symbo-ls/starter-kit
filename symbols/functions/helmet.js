export const helmet = function helmet(param = {}) {
  const META_TAGS = {
    title: {
      tag: 'title'
    },
    description: {
      tag: 'meta',
      attr: 'name',
      key: 'description'
    },
    keywords: {
      tag: 'meta',
      attr: 'name',
      key: 'keywords'
    },
    image: {
      tag: 'meta',
      attr: 'property',
      key: 'og:image'
    },
    url: {
      tag: 'meta',
      attr: 'property',
      key: 'og:url'
    },
    siteName: {
      tag: 'meta',
      attr: 'property',
      key: 'og:site_name'
    },
    type: {
      tag: 'meta',
      attr: 'property',
      key: 'og:type'
    },
    locale: {
      tag: 'meta',
      attr: 'property',
      key: 'og:locale'
    },
    robots: {
      tag: 'meta',
      attr: 'name',
      key: 'robots'
    }
  }

  const createQuery = (obj) => {
    if (obj.tag && !obj.attr && !obj.key) {
      return obj.tag
    } else if (obj.tag && obj.attr && obj.key) {
      return `${obj.tag}[${obj.attr}="${obj.key}"]`
    } else {
      throw new Error('Invalid object format')
    }
  }

  const createMetaElement = (key, content) => {
    const metaObj = META_TAGS[key]
    if (!metaObj) return

    const domElement = document.createElement(metaObj.tag)

    if (metaObj.attr) {
      domElement.setAttribute(metaObj.attr, metaObj.key)
    }

    const head = document.head || document.querySelector('head')
    head.appendChild(domElement)

    return domElement
  }

  if (!this.call('isObject', param)) return

  for (const key in param) {
    const metaObj = META_TAGS[key]
    if (!metaObj) continue

    const metaQuery = createQuery(metaObj)
    const domElement = document.querySelector(metaQuery) || createMetaElement(key, param[key])
    if (!domElement) continue

    const state = this.state
    if (this.call('isObject', state.root)) state.root.$helmet = param

    if (key === 'title') {
      domElement.textContent = param[key]
    } else {
      domElement.setAttribute('content', param[key])
    }
  }
}