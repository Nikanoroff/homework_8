Vue.component('goods-item', {
    props: ['item'],
    template: `
        <div class="goods-item">
           <div>{{ item.title }}</div>
           <div>
              {{ item.price }}
           </div>
           <div>
              <custom-button @click="$emit('click', item)">добавить</custom-button>
           </div>
        </div>
    `,
});