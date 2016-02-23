(function () {
    var app = angular.module('gemStore', ['store-directvies']);


    app.controller('StoreController', function () {
        this.products = gems;
    });
    /*
    //  Service
    app.controller('StoreController', ['$http', function($http) {
        
        var store = this;
        
        store.products = [];
        $http.get('./store-product.json').success(function(data) {
           store.products = data;
        });
    }]);
    */

    /*
    app.controller('PanelController', function () {
        this.tab = 1;

        this.selectTab = function (setTab) {
            this.tab = setTab;
        };

        this.isSelected = function (checkTab) {
            return this.tab === checkTab;
        };
    });
    */

    /*
    app.controller('ReviewController', function () {
        this.review = {};
        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });
    */

    app.controller('ShoppingController', function () {
        this.cart = {};
        this.addPurchase = function (cart) {
            cart.push(this.product);
            this.cart = {};
        };
    });
    /*
    var gems = [{
        name: 'Dodecahedron',
        price: 2.95,
        simpleDescription: 'In geometry, a dodecahedron is any polyhedron with twelve flat faces.',
        description: 'In geometry, a dodecahedron (Greek δωδεκάεδρον, from δώδεκα dōdeka "twelve" + ἕδρα hédra "base", "seat" or "face") is any polyhedron with twelve flat faces. The most familiar dodecahedron is the regular dodecahedron, which is a Platonic solid. There are also three regular star dodecahedra, which are constructed as stellations of the convex form. All of these have icosahedral symmetry, order 120. The pyritohedron is an irregular pentagonal dodecahedron, having the same topology as the regular one but pyritohedral symmetry while the tetartoid has tetrahedral symmetry. The rhombic dodecahedron, seen as a limiting case of the pyritohedron has octahedral symmetry. The elongated dodecahedron and trapezo-rhombic dodecahedron variations, along with the rhombic dodecahedra are space-filling. There are a large number of other dodecahedra.',
        canPurchase: true,
        soldOut: false,
        images: [
            {
                url: 'http://placehold.it/350x150',
                description: '圖片1'
            },
            {
                url: 'http://placehold.it/350x150',
                description: '圖片2'
            },
            {
                url: 'http://placehold.it/350x150',
                description: '圖片3'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: 'I love this product!',
                author: 'joe@thomas.com'
            },
            {
                stars: 1,
                body: 'This product sucks',
                author: 'tim@hater.com'            
            },
            {
                stars: 5,
                body: 'This product awesome',
                author: 'tim@awesome.com'            
            }
        ]
    },
    {
        name: 'Pentagonal Gem',
        price: 5.95,
        simpleDescription: 'In geometry, a pentagon is any five-sided polygon or 5-gon.',
        description: 'In geometry, a pentagon (from the Greek πέντε pente and γωνία gonia, meaning five and angle) is any five-sided polygon or 5-gon. The sum of the internal angles in a simple pentagon is 540°. A pentagon may be simple or self-intersecting. A self-intersecting regular pentagon (or star pentagon) is called a pentagram.',
        canPurchase: true,
        soldOut: false,
        images: [{
            url: 'http://placehold.it/350x150',
            description: '圖片1'
        },
        {
            url: 'http://placehold.it/350x150',
            description: '圖片2'
        },
        {
            url: 'http://placehold.it/350x150',
            description: '圖片3'
        }],
        reviews: [
            {
                stars: 3,
                body: 'I think this gem was jusct OK, could honestly use more shine, IMO.',
                author: 'JimmyDean@sausage.com'
            },
            {
                stars: 4,
                body: 'Any gem with 12 faces is for me!',
                author: 'gensRock@alyssaNicoll.com'
            }
        ]
    }];
    */
    var gems = [
        {
            "name": "Azurite",
            "description": "Some gems have hidden qualities beyond their luster, beyond their shine... Azurite is one of those gems.",
            "shine": 8,
            "price": 110.50,
            "rarity": 7,
            "color": "#CCC",
            "faces": 14,
            "images": [
                "images/gem-02.gif",
                "images/gem-05.gif",
                "images/gem-09.gif"
            ],
            "reviews": []
        },
        {
            "name": "Bloodstone",
            "description": "Origin of the Bloodstone is unknown, hence its low value. It has a very high shine and 12 sides, however.",
            "shine": 9,
            "price": 22.90,
            "rarity": 6,
            "color": "#EEE",
            "faces": 12,
            "images": [
                "images/gem-01.gif",
                "images/gem-03.gif",
                "images/gem-04.gif"
            ],
            "reviews": []
        },
        {
            "name": "Zircon",
            "description": "Zircon is our most coveted and sought after gem. You will pay much to be the proud owner of this gorgeous and high shine gem.",
            "shine": 70,
            "price": 1100,
            "rarity": 2,
            "color": "#000",
            "faces": 6,
            "images": [
                "images/gem-06.gif",
                "images/gem-07.gif",
                "images/gem-08.gif"
            ],
            "reviews": []
        }
    ];

})();
