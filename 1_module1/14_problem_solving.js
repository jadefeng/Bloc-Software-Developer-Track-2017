// Part 1: 

// Prototype for a product
var Product = {
  isPackaged: false,
  isLoaded: false,
  color: "uncolored",
  paint: function (color) {
    // The Painting Station will paint the product the desired color.
    console.log("Painting product " + color + ".");
    this.color = color;
    console.log("Product painted " + color + ".");
  },
  package: function (shippingType) {
    // The Packaging Station will package the product for the shipping type specified.
    // E.g. Next Day Shipping
    console.log("Packaging product for " + shippingType + ".");
    this.shippingType = shippingType;
    this.isPackaged = true;
    console.log("Product packaged for " + shippingType + ".");
  },
  loadOnTruck: function () {
    // The Loading Station will load the product on a truck to be shipped
    // to the customer.
    console.log("Loading product onto truck.");
    this.isLoaded = true;
    console.log("Product loaded onto the truck.");
  }
};

var order = function (color, shippingType) {
  // Creation Station: basic product is created.

  // Object.create will create a new object that has Product as
  // the prototype of that object. This means that any property lookups
  // performed will look first at the instance and then at Product.
  var product = Object.create(Product);

  console.log("Basic product created.");

  // Painting Station: product is painted.
  product.paint(color);

  // Packaging Station: product is packaged to be shipped.
  product.package(shippingType);

  // Loading Station: product is loaded onto a truck.
  product.loadOnTruck;

  return product;
};

// Following the output, the console.log() does not execute for the loadOnTruck() function as "Leading product onto truck" does not run in the output. 

// The problem is that product.loadOnTruck was not called. The syntax for calling that function is wrong: Line 46 should actually be:

// product.loadOnTruck();


/////////////////////////

// Part 2:

// Prototype for a product
var Product = {
  isPackaged: false,
  isLoaded: false,
  color: "uncolored",
  paint: function (color) {
    // The Painting Station will paint the product the desired color.
    console.log("Painting product " + color + ".");
    this.color = color;
    console.log("Product painted " + color + ".");
  },
  package: function (shippingType) {
    // The Packaging Station will package the product for the shipping type specified.
    // E.g. Next Day Shipping
    console.log("Packaging product for " + shippingType + ".");
    this.shippingType = shippingType;
    this.isPackaged = true;
    console.log("Product packaged for " + shippingType + ".");
  },
  loadOnTruck: function () {
    // The Loading Station will load the product on a truck to be shipped
    // to the customer.
    console.log("Loading product onto truck.");
    this.isLoaded = true;
    console.log("Product loaded onto the truck.");
  }
};

var order = function (color, shippingType) {
  // Creation Station: basic product is created.

  // Object.create will create a new object that has Product as
  // the prototype of that object. This means that any property lookups
  // performed will look first at the instance and then at Product.
  var product = Object.create(Product);

  console.log("Basic product created.");

  // Painting Station: product is painted.
  product.paint(color);

  // Packaging Station: product is packaged to be shipped.
  product.package();

  // Loading Station: product is loaded onto a truck.
  product.loadOnTruck();

  return product;
};

// The problem is that "shippingType" is undefined when it is called. In this circumstance, the first check is whether it is declared as a variable in the order() function, where it is. Then, looking at the function in further detail, we can see that the shippingType variable is not included in line 106, where it should be added.

// Hence, shippingType is undefined here. To correct this, line 106 should be:

// product.package(shippingType);