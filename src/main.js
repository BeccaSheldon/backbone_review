//Exercise 1

// var DrinkView = Backbone.View.extend({
//   initialize: function (options) {
//     this.name = options.name;
//   },

//   render: function () {
//     console.log('You should drink', this.name);
//   }
// });

// var sprite = new DrinkView({
//   name: 'Sprite'
// });
// sprite.render();

// var water = new DrinkView({
//   name: 'Water'
// });
// water.render();


//Exercise 2

// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button>I don\'t do anything :(</button>');
//   }
// });

// var view = new ButtonView({
//     el: $('.button-view')
// });
// view.render();


//Exercise 3

// var ButtonView = Backbone.View.extend({
//   render: function () {
//     $(this.el).html('<button>This doesn\'t do anything</button>');
//   }
// });

// var view = new ButtonView({
//   el: $('.big-button')
// });
// view.render();


// Exercise 4

// var stockTemplate = _.template('<b><%= name %>:</b> <%= price %>');

// var StockView = Backbone.View.extend({
//     initialize: function(options) {
//         this.name = options.name;
//         this.price = options.price;
//     },
//     render: function() {
//         $(this.el).html('<p>Name: ' + this.name + ' </br> Price: ' + this.price + ' </p>')
//     }
// });

// var aapl = new StockView({
//   name: 'AAPL',
//   price: 380,
//   el: $('.stock-price:eq(0)')
// });
// var goog = new StockView({
//   name: 'GOOG',
//   price: 800,
//   el: $('.stock-price:eq(1)')
// });
// aapl.render()
// goog.render();


// Exercise 5

// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({
//   className: 'dress',

//   initialize: function (options) {
//     this.color = options.color;
//     this.price = options.price;
//   },

//   render: function () {
//     var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//     $(this.el).html(newDressHtml);
//   }
// });

// var dressOne = new DressView({
//   color: 'green',
//   price: 14.99
// });
// var dressTwo = new DressView({
//   color: 'red',
//   price: 18.99
// });

// dressOne.render();
// dressTwo.render();
// $('body').append(dressOne.el);
// $('body').append(dressTwo.el);


// Exercise 6

// var buttonTemplateHtml = $('#templates .button').html();
// var buttonTemplate = _.template(buttonTemplateHtml);


// var ButtonView = Backbone.View.extend({

//   render: function () {
//     var newButtonHtml = buttonTemplate({ buttonText: 'backbone iz coo' });
//     $(this.el).html(newButtonHtml);
//   }
// });

// var newButton = new ButtonView({});

// newButton.render();
// $('body').append(newButton.el);


// Exercise 7

// var profileTemplateHtml = $('#templates .profile').html();
// var profileTemplate = _.template(profileTemplateHtml);

// var ProfileView = Backbone.View.extend({
//     initialize: function (options) {
//     this.name = options.name;
//     this.age = options.age;
//     },

//     render: function () {
//         var profileTemplateHtml = profileTemplate({name: this.name, age: this.age});
//         $(this.el).html(profileTemplateHtml);
//     }
// });
// var profileView = new ProfileView({
//   name: 'Bob',
//   age: '45'
// });

// profileView.render();
// $('body').append(profileView.el);


// Exercise 8

// var dressTemplateHtml = $('#templates .dress').html();
// var dressTemplate = _.template(dressTemplateHtml);

// var DressView = Backbone.View.extend({

//   events: {
//     'click button.buy': 'buy'
//   },

//   initialize: function (options) {
//     this.color = options.color;
//     this.price = options.price;
//   },

//   render: function () {
//     var newDressHtml = dressTemplate({ color: this.color, price: this.price });
//     $(this.el).html(newDressHtml);
//   },

//   buy: function () {
//     alert('You bought it for $' + this.price);
//   }
// });

// var dressOnSaleYo = new DressView({
//   color: 'burnt orange',
//   price: 59.99
// });
// dressOnSaleYo.render();
// $('body').append(dressOnSaleYo.el);


// Exercise 9

// var pingServer = _.extend({}, Backbone.Events);

// var StudentView = Backbone.View.extend({
//   initialize: function (options) {
//   },

//   ping: function () {
//     pingServer.trigger('ping', this.name);
//   }
// });

// var InstructorView = Backbone.View.extend({
//   totalPings: 0,

//   initialize: function (options) {
//     this.listenTo(pingServer, 'ping', this.recordPop);
//   },

//   recordPop: function (name) {
//     this.totalPings += 1;
//     console.log("ping!");
//   }
// });

// var alice = new StudentView({ name: 'Alice' });
// var bob = new StudentView({ name: 'Bob' });
// var instructor = new InstructorView({ name: 'Dr. Professor' });

// alice.ping();
// alice.ping();
// console.log('Instructor should have 2 pings:', instructor.totalPings);
// bob.ping();
// bob.ping();
// bob.ping();
// bob.ping();
// bob.ping();
// console.log('Instructor should have 7 pings:', instructor.totalPings);



// Indi Exercise 1

// var DiscountView = Backbone.View.extend({
//   initialize: function (options) {
//     this.price = options.price;
//   },

//   getDiscountedPrice: function () {
//     return this.price / 2;
//   }
// });

// var discount = new DiscountView({
//   price: 50
// });

// console.log('Discount should be half:', discount.getDiscountedPrice());

// Indi Exercise 2

var productTemplateHtml = $('#templates .product').html();
var productTemplate = _.template(productTemplateHtml);

var ProductView = Backbone.View.extend({
  events: {
    'click h3': 'onTitleClick'
  },
  initialize: function (options) {
    this.name = options.name;
  },

  render: function () {
    var productTemplateHtml = productTemplate();
    $(this.el).html(productTemplateHtml);
  },

  onTitleClick: function () {
    console.log('You clicked a title!');
  }
});

var product = new ProductView({
  name: 'Dry Erase Marker'
});

$('body').append( product.render('.nameclass').el);
