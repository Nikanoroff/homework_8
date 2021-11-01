import { GET_GOODS_URL, ADD_GOOD_URL, GET_BASKET_GOODS_URL } from './constants';

import service from './services';



// ----------root-------------------

const app = new Vue({
  el: '#app',
  data: {
    styles: {
      border: "1px solid blue"
    },
    goods: [],
    filteredGoods: [],
    basketGoods: [],
    basketCardVision: false,
    search: ''
  },


  mounted: function () {
    service('GET', GET_GOODS_URL).then((goods) => {
      this.goods = goods;
      this.filteredGoods = goods;
    })
    service('GET', GET_BASKET_GOODS_URL).then((basketGoods) => {
      this.basketGoods = basketGoods;
    })
  },


  methods: {
    filterGoods: function (event) {
      this.filteredGoods = this.goods.filter(({ title }) => {
        return new RegExp(this.search, 'i').test(title);
      })
    },
    openCard: function () {
      this.basketCardVision = true;
    },
    closeCard: function () {
      this.basketCardVision = false;
    },
    addGood: function ({ title, price, id }) {
      service('PATCH', ADD_GOOD_URL, JSON.stringify({
        id,
        title,
        price
      })).then((_basketGoods) => {
        this.basketGoods = _basketGoods;
      })
    }
  }



});


