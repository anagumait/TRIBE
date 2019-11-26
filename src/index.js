var app = new Vue({
    el: '#app',
    data: {
        //家計簿明細
        houseHoldD: [
            {
                date: '2019/11/23',
                weekNum: '3',
                account: '食費',
                detail: 'パン',
                income: '0',
                spending: '100',
                balance: '10000',
                modeOfPay: '現金',
                owner: 'みどりの',
                conWasInv: '消費'
            },
            {
                date: '2019/11/23',
                weekNum: '3',
                account: '食費',
                detail: 'パン',
                income: '0',
                spending: '100',
                balance: '10000',
                modeOfPay: '現金',
                owner: 'みどりの',
                conWasInv: '消費'
            },
            {
                date: '2019/11/23',
                weekNum: '3',
                account: '食費',
                detail: 'パン',
                income: '0',
                spending: '100',
                balance: '10000',
                modeOfPay: '現金',
                owner: 'みどりの',
                conWasInv: '消費'
            },
            {
                date: '2019/11/23',
                weekNum: '3',
                account: '食費',
                detail: 'パン',
                income: '0',
                spending: '100',
                balance: '10000',
                modeOfPay: '現金',
                owner: 'みどりの',
                conWasInv: '消費'
            },
            {
                date: '2019/11/23',
                weekNum: '3',
                account: '食費',
                detail: 'パン',
                income: '0',
                spending: '100',
                balance: '10000',
                modeOfPay: '現金',
                owner: 'みどりの',
                conWasInv: '消費'
            }
        ]
    },
    methods: {
        //リストへの追加
        doAdd: function(event, value) {
          // ref で名前を付けておいた要素を参照
          var date = this.$refs.date
          // 入力がなければ何もしないで return
          if (!date.value.length) {
            return
          }
          // { 新しいID, コメント, 作業状態 }
          // というオブジェクトを現在の todos リストへ push
          // 作業状態「state」はデフォルト「作業中=0」で作成
          this.houseHoldD.push({
            date: date.value,
            weekNum: '3',
            account: '食費',
            detail: 'パン',
            income: '0',
            spending: '100',
            balance: '10000',
            modeOfPay: '現金',
            owner: 'みどりの',
            conWasInv: '消費'
          })
          // フォーム要素を空にする
          date.value = ''
        }
      }
});