export const closeModal = function closeModal() {
    this.lookup('ModalCard').state.set({}, {
      preventUpdate: true
    })

    this.state.root.update({
      activeModal: false
    }, {
      onlyUpdate: 'ModalCard'
    })

    document.body.style.overflow = 'hidden auto'
  }