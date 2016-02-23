(function () {
    var app = angular.module('store-directvies', []);

    app.directive('productTitle', function () {
        return {
            restrict: 'E',
            templateUrl: './product-title.html'
        }
    });
    app.directive('productDescription', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-description.html'
        };
    });

    app.directive('productSpecs', function () {
        return {
            restrict: 'A',
            templateUrl: 'product-specs.html'
        };
    });

    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 1;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber;
                }
            },
            controllerAs: 'GalleryController'
        };
    });

    app.directive('productTabs', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-tabs.html',
            controller: function () {
                this.tab = 1;
                this.isSet = function (tabNumber) {
                    return this.tab === tabNumber;
                }
                this.setTab = function (selectTab) {
                    this.tab = selectTab;
                }
            },
            controllerAs: 'PanelController'
        };
    });

    app.directive('productReviews', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-reviews.html',
            controller: function () {
                this.review = {};
                this.addReview = function (product) {
                    product.reviews.push(this.review);
                    this.review = {};
                };
            },
            contollerAs: 'ReviewController'
        }
    });
})();