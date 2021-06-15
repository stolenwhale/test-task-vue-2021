import data from '../../api/data';
import names from '../../api/names';

export default {
  state: () => ({
    data,
    names,
    exchange: 80,
  }),
  mutations: {},
  actions: {},
  getters: {
    catalogList: state => {
      let list = [];

      state.data.Value.Goods.forEach((item) => {
        const itemGroupId = item.G;
        const itemGroupName = state.names[item.G].G;
        const itemId = item.T;
        const itemName = state.names[itemGroupId].B[itemId].N;

        const isGroupExist = list.filter(item => item.id === itemGroupId).length;
        const price_rub = parseInt(item.C.toFixed(2)) * state.exchange;

        const itemObj = {
          id: itemId,
          name: itemName,
          price: item.C,
          price_rub: price_rub,
          quantity: item.P
        };

        if (!isGroupExist) {
          list.push({
            id: item.G,
            name: itemGroupName,
            items: [
              itemObj
            ]
          })
        } else {
          list.find(item => item.id === itemGroupId).items.push(itemObj)
        }
      });

      return list;
    }
  }
}
