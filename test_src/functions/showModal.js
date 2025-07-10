export const showModal = function showModal(path) {
    let currentState

    if (path) {
      currentState = this.call('getInObjectByPath', this.state.root, path)
    } else {
      currentState = this.state.parse()
    }

    currentState = this.call('deepClone', currentState)

    this.lookup('ModalCard').state.set(currentState, {
      preventUpdate: true
    })
    this.state.root.update({
      activeModal: true
    }, {
      onlyUpdate: 'ModalCard'
    })

    document.body.style.overflow = 'hidden'
  }