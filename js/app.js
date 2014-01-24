var App = Ember.Application.create({
	LOG_TRANSITIONS: true
});

App.Router.map(function(){
	// this.route('about', { path: '/aboutus' });
	this.route('about');
	this.resource('products');
	this.resource('product', { path: '/products/:title' });
});

App.ProductsRoute = Ember.Route.extend({
	model: function() {
		return App.PRODUCTS;
	}
});

App.ProductRoute = Ember.Route.extend({
	model: function(params) {
		return App.PRODUCTS.findBy('title', params.title);
	}
});

App.IndexController = Ember.Controller.extend({
	productsCount: 6,
	logo: 'icon.png',
	time: function() {
		return (new Date()).toDateString()
	}.property()
});

App.PRODUCTS = [
  {
    title: 'Flint',
    price: 99,
    description: 'Flint is a hard, sedimentary cryptocrystalline form of the mineral quartz, categorized as a variety of chert.',
    isOnSale: true,
    image: 'images/products/flint.png'
  },
  {
    title: 'Kindling',
    price: 249,
    description: 'Easily combustible small sticks or twigs used for starting a fire.',
    isOnSale: false,
    image: 'images/products/kindling.png'
  }
];


