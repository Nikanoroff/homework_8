Vue.component('basket-goods-item', {
    props: ['item'],
    data: function () {
        return {
            style: {
                padding: '10px',
                display: 'grid',
                gridTemplateColumns: 'min-content 1fr min-content'
            }
        }
    },
    template: `
      <div class="basket-goods-item" :style="style">
        <div>{{ item.title }}</div>
        <div></div>
        <div>{{ item.price }}</div>
      </div>
    `
});