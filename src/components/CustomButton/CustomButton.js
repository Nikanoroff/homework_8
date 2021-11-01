Vue.component('custom-button', {
    data: function () {
        return {
            style: {
                backgroundImage: 'linear-gradient(45deg, #6ab1d7 0%, #33d9de 50%, #002878 100%',
                border: '3px solid #002878',
                padding: '10px',
                borderRadius: '50px',
                cursor: 'pointer'
            }
        }
    },
    template: `
      <button :style="style" @click="$emit('click')">
        <slot></slot>
      </button>
    `
})
