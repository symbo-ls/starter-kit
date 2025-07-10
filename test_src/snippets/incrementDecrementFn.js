export const incrementDecrementFn = (ACTION, element, state) => {
      const activeNumber = state.activeNumber
      if (ACTION === 'INCREMENT' && activeNumber + 1 <= state.range[1]) {
        state.update({
          activeNumber: activeNumber + 1
        })
      } else if (ACTION === 'DECREMENT' && activeNumber - 1 >= state.range[0]) {
        state.update({
          activeNumber: activeNumber - 1
        })
      }
    }