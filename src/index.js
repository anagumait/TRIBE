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
        ],
        newDate: ''
    },
    methods: {
        doAdd: function(e){
            this.houseHoldD.push(
                {
                    date: this.newDate,
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
            );
            this.newDate = '';
        }
    }
});