(function(){
    var app = angular.module('store', [ ]);
    
    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    app.controller('PanelController', function() {
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab) {
            return this.tab === checkTab;
        };
    });
    
    app.directive('productTitle', function() {
       return {
           restrict: 'E',
           templateUrl: './product-title.html'
       } 
    });
    
    app.controller('ReviewController', function() {
       this.review = {};
       this.addReview = function(product) {
           product.reviews.push(this.review);
           this.review = {};
       };
    });
    
    app.controller('ShoppingController', function() {
       this.cart = {};
       this.addPurchase = function(cart) {
           cart.push(this.product);
           this.cart = {};
       };
    });
    
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
    }]
})();
