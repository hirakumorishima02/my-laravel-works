const url = [
    {id: 1, url: '/static/images/invoice/1.png'},
    {id: 1, url: '/static/images/invoice/2.png'},
    {id: 1, url: '/static/images/invoice/3.png'},
    {id: 1, url: '/static/images/invoice/4.png'},
    {id: 2, url: '/static/images/ordermade/1.png'},
    {id: 2, url: '/static/images/ordermade/2.png'},
    {id: 2, url: '/static/images/ordermade/3.png'},
    {id: 3, url: '/static/images/oldbook/1.png'},
    {id: 3, url: '/static/images/oldbook/2.png'},
    {id: 4, url: '/static/images/mapapp/1.png'},
    {id: 4, url: '/static/images/mapapp/2.png'},
    {id: 4, url: '/static/images/mapapp/3.png'},
    ]

const database = [
    {
        id : 1,
        name : "Invoice'n to do",
        url :  'https://invoice-andtodo.herokuapp.com/',
        githuburl: 'https://github.com/hirakumorishima02/invoice_and_todo',
        content : '請求書と仕事管理が同時にできるアプリです。' ,
        photo :  url,
    },
    {
        id : 2,
        name : "App Order Made",
        url : 'http://order-made-matching.herokuapp.com/',
        githuburl: 'https://github.com/hirakumorishima02/order_made_apps',
        content : 'オーダーメイドアプリを作ってほしい人と安価でいいのでアプリ作りを請け負いたいエンジニアのマッチングサイトです。' ,
        photo : url,
    },
    {
        id : 3,
        name : "Old Book Store",
        url : 'https://old-book-store04.herokuapp.com',
        githuburl: 'https://github.com/hirakumorishima02/book_store_2',
        content : '我が家にある古本を売っています。' ,
        photo : url,
    },
    {
        id : 4,
        name : "ShareHouse Australia",
        url : 'https://sharehouse-australia.herokuapp.com',
        githuburl: 'https://github.com/hirakumorishima02/sharehouse',
        content : 'オーストラリアのシェアハウスを位置情報から探せるサイトです。' ,
        photo : url,
    },
    
    ]
    
export default {
    fetch(id) { return database },
    find(id) { return database.find(el => el.id === id) },
    asyncFind(id, callback) {
        setTimeout(() => {
            callback(database.find(el => el.id === id), 1000)
        })
    }
}