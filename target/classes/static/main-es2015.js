(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<body class=\"body\">\n<h1 align=\"center\">XWIGGY | Add A New Item</h1>\n<br><br><br>\n<form (ngSubmit)=\"onSubmit()\">\n\n  <div class=\"container\" style=\"height: 35px;\">\n    <div *ngIf=\"present==false\" class=\"alert alert-danger alert-box\" align=\"center\" style=\"width: 75%; margin: auto;\">\n      <strong>Item ID Not Unique!</strong>\n    </div>\n    <div *ngIf=\"present\" class=\"alert alert-success alert-box\" align=\"center\" style=\"width: 75%; margin: auto;\">\n      <strong>Item ID Unique</strong>\n    </div>\n  </div>\n<br><br><br>\n<div class=\"container\" align=\"center\">\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label style=\"text-align: right\">Item ID</label></div>\n    <div class=\"col-sm-3\"><input placeholder=\"Item Id\" type=\"text\" minlength=\"3\" maxlength=\"3\"\n                                 [(ngModel)]=\"newFoodItems.id\" name=\"id\" required=\"required\"></div>\n    <div class=\"col-sm-3\"><button type=\"button\" (click)=\"checkAvailability()\"><span>Check Availability</span></button></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label style=\"text-align: right\">Item Name</label></div>\n    <div class=\"col-sm-3\"><input placeholder=\"Item Name\" type=\"text\" minlength=\"2\" maxlength=\"20\"\n                                 [(ngModel)]=\"newFoodItems.name\" name=\"name\" required=\"required\"></div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label>Price (INR)</label></div>\n    <div class=\"col-sm-3\"><input placeholder=\"Price\" type=\"number\"\n                                 name=\"price\" [(ngModel)]=\"newFoodItems.price\" required=\"required\" min=\"0\"></div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label>Available Quantity</label></div>\n    <div class=\"col-sm-3\"><input placeholder=\"Available Quantity\" type=\"number\"\n                                 name=\"quantity\" [(ngModel)]=\"newFoodItems.quantityAvailable\" required=\"required\" min=\"0\"></div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label>Food Image</label></div>\n    <div class=\"col-sm-3\"><input type=\"file\" (change)=\"onFileSelected($event)\"></div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label>Or</label></div>\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-3\"></div>\n    <div class=\"col-sm-3\"><label>Food Image URL</label></div>\n    <div class=\"col-sm-3\"><input type=\"text\" placeholder=\"Paste The Url\" name=\"fileDataF\" [(ngModel)]=\"newFoodItems.fileDataF\"></div>\n    <div class=\"col-sm-3\"></div>\n  </div>\n  <br><br>\n  <div class=\"row\">\n    <div class=\"col-sm-4\"></div>\n    <div class=\"col-sm-4 align-submit\"><button class=\"bigbutton\" type=\"submit\"><span>Add Item</span></button></div>\n    <div class=\"col-sm-4\"></div>\n  </div>\n</div>\n</form>\n</body>-->\n\n\n<form (ngSubmit)=\"onSubmit()\">\n<div class=\"card align-contents\">\n  <p><img class=\"card-img-top\" style=\"padding: 0 15px; float: left;\" src=\"../../assets/images/shop.png\" alt=\"Card image cap\"><font>Welcome,<br> On-boarding New Items</font></p>\n  <div class=\"table-responsive panel\">\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <td></td>\n        <td><div class=\"container\" style=\"height: 75px;\">\n          <div *ngIf=\"present==false\" class=\"alert alert-danger alert-box\" align=\"center\" style=\"width: 60%; margin: auto;\">\n            <strong>Item ID Not Unique!</strong>\n          </div>\n          <div *ngIf=\"present\" class=\"alert alert-success alert-box\" align=\"center\" style=\"width: 60%; margin: auto;\">\n            <strong>Item ID Unique</strong>\n          </div>\n        </div></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user\"></i> Item Id</td>\n        <td><input placeholder=\"Item Id\" type=\"text\" minlength=\"3\" maxlength=\"3\"\n                   [(ngModel)]=\"newFoodItems.id\" name=\"id\" required=\"required\"></td>\n        <td><button style=\"position: absolute; left: 68%\" type=\"button\" (click)=\"checkAvailability()\"><span>Check Availability</span></button></td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user-circle\"></i> Item Name</td>\n        <td><input placeholder=\"Item Name\" type=\"text\" minlength=\"2\" maxlength=\"20\"\n                   [(ngModel)]=\"newFoodItems.name\" name=\"name\" required=\"required\"></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-mobile\"></i> Price (INR)</td>\n        <td><input placeholder=\"Price\" type=\"number\"\n                   name=\"price\" [(ngModel)]=\"newFoodItems.price\" required=\"required\" min=\"0\"></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> Available Quantity</td>\n        <td><input placeholder=\"Available Quantity\" type=\"number\"\n                   name=\"quantity\" [(ngModel)]=\"newFoodItems.quantityAvailable\" required=\"required\" min=\"0\"></td>\n        <td></td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> Food Image</td>\n        <td><input type=\"file\" (change)=\"onFileSelected($event)\"></td>\n        <td></td>\n      </tr>\n\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> OR</td>\n        <td></td>\n        <td></td>\n      </tr>\n\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> Food Image URL</td>\n        <td><input type=\"text\" placeholder=\"Paste The Url\" name=\"fileDataF\" [(ngModel)]=\"newFoodItems.fileDataF\"></td>\n        <td></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"container\" align=\"center\" style=\"margin-left: 20%;\">\n  <button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>LogOut</span></button>\n  <button class=\"bigbutton\" routerLink=\"/merchantMenu\"><span>Menu</span></button>\n  <button class=\"bigbutton\" type=\"submit\"><span>AddItem</span></button>\n</div>\n</form>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <title>Xwiggy|Payment  </title>\n</head>\n<div class=\"body\">\n  <br><br><br><br>\n<h1 align=\"center\">XWIGGY | CHECKOUT</h1>\n\n  <div class=\"alert alert-warning\" align=\"center\">\n    <strong>Payment Portal</strong>\n  </div>\n\n  <div>\n    <h2 align=\"center\">Payment Details</h2>\n    <h2 align=\"center\">To Pay : {{total}}</h2>\n    <div align=\"center\">\n      <table align=\"center\">\n        <tr>\n          <td><label>Card Number</label></td>\n          <td><input type=\"text\" placeholder=\"xxxx xxxx xxxx xxxx\"\n                      minlength=\"16\"\n                      maxlength=\"16\"\n                      [(ngModel)]=\"cardNumber\"\n                      required=\"required\"\n                      (keyup)=\"validCard()\">\n          </td>\n        </tr>\n        <tr>\n          <td><label>Expiry</label></td>\n          <td>\n            <table>\n              <tr>\n                <td style=\"min-width: 90px\"><input type=\"number\" placeholder=\"MM\" min=\"1\" max=\"12\" required=\"required\" [(ngModel)]=\"month\" (keyup)=\"validMonth()\"></td>\n                <td style=\"min-width: 90px\"><input type=\"number\" placeholder=\"YY\" min=\"19\" max=\"99\" required=\"required\" [(ngModel)]=\"year\" (keyup)=\"validYear()\"></td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td><label>CVV</label></td>\n          <td>\n            <table>\n              <tr>\n                <td style=\"min-width: 90px\"><input type=\"number\" placeholder=\"CVV\" min=\"100\" max=\"999\" required=\"required\" [(ngModel)]=\"cvv\" (keyup)=\"validCvv()\"></td>\n                <td><img class=\"question\" src=\"http://pngimg.com/uploads/question_mark/question_mark_PNG49.png\"\n                         data-toggle=\"tooltip\" data-placement=\"right\" title=\"Card CVV Help\"></td>\n              </tr>\n            </table>\n          </td>\n        </tr>\n        <tr>\n          <td><label>Cardholder Name</label></td>\n          <td><input type=\"text\" placeholder=\"Name\" required=\"required\" minlength=\"4\" maxlength=\"10\" [(ngModel)]=\"nameOnCard\" (keyup)=\"validName()\"></td>\n        </tr>\n      </table>\n      <table>\n        <tr>\n          <td>\n            <button class=\"bigbutton\" routerLink=\"/success\" (click)=\"changeDB()\"><span>Pay</span></button>\n          </td>\n          <td>\n            <button class=\"bigbutton\" routerLink=\"/menu\"><span>Go Back</span></button>\n          </td>\n        </tr>\n      </table>\n    </div>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br><br>\n<div class=\"body\" align=\"center\">\n  <h1>XWIGGY | CONTACT US</h1>\n</div>\n\n<br><br><br><br>\n<div class=\"body\">\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6 \" id=\"form_container\" style=\"margin: auto\">\n      <p> Please send your message below. We will get back to you at the earliest! </p>\n      <form role=\"form\" method=\"post\" id=\"reused_form\" (ngSubmit)=\"sendFeedback()\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 form-group\">\n            <label for=\"message\"> Message:</label>\n            <textarea class=\"form-control\" type=\"textarea\" id=\"message\" name=\"message\" maxlength=\"6000\" rows=\"7\" [(ngModel)]=\"modelMessage.message\"></textarea>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"name\"> Your Name:</label>\n            <input type=\"text\" class=\"form-control\" disabled=\"disabled\" id=\"name\" name=\"name\" required placeholder=\"{{modelUser.firstname}} {{modelUser.lastname}}\">\n          </div>\n          <div class=\"col-sm-6 form-group\">\n            <label for=\"email\"> Email:</label>\n            <input type=\"email\" disabled=\"disabled\" class=\"form-control\" id=\"email\" name=\"email\" required placeholder=\"{{modelUser.email}}\">\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4 form-group\">\n            <button type=\"submit\" class=\"bigbutton\" ><span>Send</span></button>\n          </div>\n          <div class=\"col-lg-4 form-group\">\n            <button type=\"button\" class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button>\n          </div>\n          <div class=\"col-lg-4 form-group\">\n            <button type=\"button\" class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n</div>\n<div *ngIf=\"gif\">\n  <img src=\"../../assets/images/gif1.gif\">\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<head>\n  <title>Welcome</title>\n</head>\n<div class=\"body\">\n<br><br><br><br>\n<H1 align=\"center\">XWIGGY | A FASTER WAY TO ORDER YOUR FOOD</H1>\n<br><br><br><br><br><br>\n<table align=\"center\">\n  <tr>\n    <td><a routerLink=\"/login\"><button class=\"bigbutton\"><span>Log In</span></button></a></td>\n    <td><a routerLink=\"/register\"><button class=\"bigbutton\"><span>Register</span></button></a></td>\n  </tr>\n</table>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\n<head></head>\n\n<body>\n<div class=\"loginbody\">\n<br><br><br><br>\n<H1 align=\"center\">LOGIN TO XWIGGY</H1>\n<br><br><br><br><br><br>\n<div align=\"center\" style=\"color: #f44336\">{{message}}</div>\n<div class=\"container\" align=\"center\">\n  <div class=\"row\">\n    <div class=\"offset-3\"></div>\n    <div class=\"col-md-6\">\n      <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && sendFeedback()\" novalidate class=\"feedback-form\">\n        <!-- Name -->\n        <div class=\"form-group\">\n          <label for=\"username\">Username</label>\n          <input type=\"text\"\n                 id=\"username\"\n                 class=\"form-control\"\n                 name=\"username\"\n                 placeholder=\"username\"\n                 [(ngModel)]=\"model.username\"\n                 #username=\"ngModel\"\n                 [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"\n                 required/>\n          <!-- input validation group -->\n          <div *ngIf=\"f.submitted && username.invalid\" class=\"invalid-input\">\n            <!-- individual validation errors -->\n            <div *ngIf=\"username.errors?.required\">Field is required</div>\n          </div>\n        </div>\n        <!-- Email -->\n        <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\"\n                 id=\"password\"\n                 class=\"form-control\"\n                 name=\"password\"\n                 placeholder=\"password\"\n                 [(ngModel)]=\"model.password\"\n                 #password=\"ngModel\"\n                 [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"\n                 required=\"required\"/>\n          <!-- input validation group -->\n          <div *ngIf=\"f.submitted && password.invalid\" class=\"invalid-input\">\n            <!-- individual validation errors -->\n            <div *ngIf=\"password.errors?.required\">Field is required</div>\n          </div>\n        </div>\n\n\n        <button type=\"submit\" class=\"bigbutton\">\n          <span> Login</span>\n        </button>\n        <button class=\"bigbutton\" routerLink=\"/register\"><span>Register</span></button>\n      </form>\n    </div>\n    <div class=\"offset-3\"></div>\n  </div>\n</div>\n</div>\n</body>\n</html>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n<br><br>\n<h1 align=\"center\">Xwiggy | Menu</h1>\n  <br><br>\n<!--<div class=\"container-fluid\">\n  <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\n    <table align=\"center\">\n      <tr>\n        <td *ngFor=\"let m of model\">\n          <div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"Card image cap\" style=\"height: 190px\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\n              <p class=\"card-text\">Price : Rs.{{m.price}}</p>\n              <p> Quantity Available : {{m.quantity}}</p>\n            </div>\n          </div>\n        </td>\n      </tr>\n      <tr>\n        &lt;!&ndash;<ng-container *ngFor=\"let vale of values; let index=index;\">\n        <td>\n          <input class=\"input-group-text input-align\" type=\"number\" name=\"name+{{index}}\" min=\"0\" max=\"{{model[index].quantity}}\" value=\"{{values[index].quantity}}\" [(ngModel)]=\"values[index].quantity\">\n        </td>\n        </ng-container>&ndash;&gt;\n        <td>\n        <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity1\" name=\"quantity1\" min=\"0\" max=\"{{model[0].quantity}}\" [(ngModel)]=\"modalCart.quantity1\">\n      </td>\n        <td>\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity2\" name=\"quantity2\" min=\"0\" max=\"{{model[1].quantity}}\" [(ngModel)]=\"modalCart.quantity2\">\n        </td>\n        <td>\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity3\" name=\"quantity3\" min=\"0\" max=\"{{model[2].quantity}}\" [(ngModel)]=\"modalCart.quantity3\">\n        </td>\n      </tr>\n    </table>\n    <br><br>\n    <div class=\"total\" style=\"text-align: center; font-size: large\">\n      Cart Total : {{total}}\n    </div>\n    <table align=\"center\">\n      <tr>\n        <td>\n          <input type=\"submit\" class=\"bigbutton\" value=\"Add To Cart\">\n        </td>\n        <td>\n          <button routerLink=\"/checkout\" class=\"bigbutton\"><span>Buy</span></button>\n        </td>\n        <td>\n          <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\n        </td>\n      </tr>\n    </table>\n\n  </form>\n</div>\n\n</div>-->\n\n<!--************************************************-->\n<!--************************************************-->\n<!--************************************************-->\n<!--************************************************-->\n\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\n<div class=\"container-fluid\" style=\"margin: 0 auto; width: 75%;\">\n  <div class=\"row\">\n    <div class=\"card-deck\" *ngFor=\"let m of model; let index=index\" style=\"padding-right: 3px\">\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"{{m.item}}\"  style=\"height: 190px\">\n        <div class=\"card-block\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\n            <p class=\"card-text\">Price : Rs.{{m.price}}</p>\n            <p> Quantity Available : {{m.quantity}}</p>\n          </div>\n        </div>\n      </div>\n      <input class=\"input-group-text input-align\" type=\"number\" name=\"name+{{index}}\" min=\"0\" max=\"{{model[index].quantity}}\" value=\"{{values[index].quantity}}\" [(ngModel)]=\"values[index].quantity\">\n    </div>\n  </div>\n</div>\n\n\n<br><br>\n<div class=\"total\" style=\"text-align: center; font-size: large\">\n  Cart Total : {{total}}\n</div>\n<table align=\"center\">\n  <tr>\n    <td>\n      <input type=\"submit\" class=\"bigbutton\" value=\"Add To Cart\">\n    </td>\n    <td>\n      <button routerLink=\"/checkout\" class=\"bigbutton\"><span>Buy</span></button>\n    </td>\n    <td>\n      <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\n    </td>\n  </tr>\n</table>\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/merchant-menu/merchant-menu.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant-menu/merchant-menu.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n  <br><br>\n  <h1 align=\"center\">Xwiggy | Menu</h1>\n  <br><br>\n\n<!--\n  <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\n    <table align=\"center\">\n      <tr>\n        <td *ngFor=\"let m of model\">\n          <div class=\"card\" style=\"width: 18rem;\">\n            <img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"Card image cap\" style=\"height: 190px\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\n              <p class=\"card-text\">Price : Rs.{{m.price}}</p>\n              <p> Quantity Available : {{m.quantity}}</p>\n            </div>\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity1\" name=\"quantity1\" min=\"0\" max=\"{{model[0].quantity}}\" [(ngModel)]=\"modalCart.quantity1\">\n        </td>\n        <td>\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity2\" name=\"quantity2\" min=\"0\" max=\"{{model[1].quantity}}\" [(ngModel)]=\"modalCart.quantity2\">\n        </td>\n        <td>\n          <input class=\"input-group-text input-align\" type=\"number\" id=\"quantity3\" name=\"quantity3\" min=\"0\" max=\"{{model[2].quantity}}\" [(ngModel)]=\"modalCart.quantity3\">\n        </td>\n      </tr>\n    </table>\n    <br><br>\n    <table align=\"center\">\n      <tr>\n        <td>\n          <button class=\"bigbutton\" routerLink=\"/addItem\"><span>Add Item</span></button>\n        </td>\n        <td>\n          <button type=\"submit\" class=\"bigbutton\"><span>Update Quantity</span></button>\n        </td>\n        <td>\n          <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\n        </td>\n      </tr>\n    </table>\n  </form>\n</div>\n-->\n\n\n<form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"f.form.valid && getTotal()\" novalidate class=\"feedback-form\">\n  <div class=\"container-fluid\" style=\"margin: 0 auto; width: 75%;\">\n    <div class=\"row\">\n      <div class=\"card-deck\" *ngFor=\"let m of model; let index=index\" style=\"padding-right: 3px\">\n        <div class=\"card\" style=\"width: 18rem;\">\n          <!--<img class=\"card-img-top zoom\" src=\"{{m.url}}\" alt=\"{{m.item}}\"  style=\"height: 190px\">-->\n          <img class=\"card-img-top zoom\" [src]=\"_DomSanitizationService.bypassSecurityTrustUrl(m.url)\" style=\"height: 190px\"/>\n          <div class=\"card-block\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\" style=\"color: black\">{{m.item}}</h5>\n              <p class=\"card-text\">Price : Rs.{{m.price}}</p>\n              <p> Quantity Available : {{m.quantity}}</p>\n            </div>\n          </div>\n        </div>\n        <input class=\"input-group-text input-align\" type=\"number\" name=\"name+{{index}}\" min=\"0\" max=\"{{model[index].quantity}}\" value=\"{{values[index].quantity}}\" [(ngModel)]=\"values[index].quantity\">\n      </div>\n    </div>\n  </div>\n  <br><br>\n  <div class=\"container\" align=\"center\">\n    <button class=\"bigbutton\" routerLink=\"/addItem\"><span>Add Item</span></button>\n    <button type=\"submit\" class=\"bigbutton\"><span>Update Quantity</span></button>\n    <button routerLink=\"/home\" type=\"button\" class=\"bigbutton\" (click)=\"clearLocal()\"><span>Log Out</span></button>\n  </div>\n</form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/merchant-welcome/merchant-welcome.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/merchant-welcome/merchant-welcome.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n  <br><br><br>\n  <h1 align=\"center\">XWIGGY | HOME</h1>\n  <br><br>\n</div>\n<div class=\"card align-contents\" align=\"center\">\n  <p><img class=\"card-img-top\" style=\"padding: 0 15px; float: left;\" src=\"../../assets/images/merchant.png\" alt=\"Card image cap\"><font style=\"float: left\">Welcome, {{modelMerchant.firstname}}<br> Account Type : Merchant</font></p>\n  <div class=\"table-responsive panel\">\n    <table class=\"table\">\n      <tbody>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user\"></i> First Name</td>\n        <td>{{modelMerchant.firstname}}</td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user-circle\"></i> Last Name</td>\n        <td>{{modelMerchant.lastname}}</td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-mobile\"></i> Mobile Number</td>\n        <td>{{modelMerchant.phone}}</td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> E-Mail ID</td>\n        <td>{{modelMerchant.email}}</td>\n      </tr>\n      <tr>\n        <td style=\"float: right\"><button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button></td>\n        <td><button class=\"bigbutton\" routerLink=\"/merchantMenu\"><span>Alter Menu</span></button></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container body\">\n  <br><br><br><br>\n  <H1 align=\"center\">XWIGGY | Registration</H1>\n  <br><br><br>\n\n  <div class=\"container\" align=\"center\">\n    <div class=\"row\">\n      <div class=\"offset-3\"></div>\n      <div class=\"col-md-6\">\n        <form name=\"form\" #f=\"ngForm\" (ngSubmit)=\"emailValidation&&phoneValidation&&passwordValidation&&f.form.valid && registerUser()\" novalidate class=\"feedback-form\">\n          <div class=\"container\" style=\"height: 35px;\">\n          <div *ngIf=\"present\" class=\"alert alert-danger alert-box\" align=\"center\" style=\"width: 75%; margin: auto;\">\n            <strong>UserName Already Taken!</strong>\n          </div>\n          <div *ngIf=\"present==false\" class=\"alert alert-success alert-box\" align=\"center\" style=\"width: 75%; margin: auto;\">\n            <strong>UserName Available!</strong>\n          </div>\n          </div>\n          <!-- UserName -->\n          <table align=\"center\">\n          <div class=\"form-group\">\n              <tr>\n                <td style=\"text-align: center\"> <label for=\"username\">Username</label></td>\n                <td><input type=\"text\"\n                           id=\"username\"\n                           class=\"form-control\"\n                           name=\"username\"\n                           placeholder=\"Your Username\"\n                           [(ngModel)]=\"model.username\"\n                           #username=\"ngModel\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && username.invalid }\"\n                           required=\"required\"/></td>\n                <td>\n                  <div class=\"container\" align=\"center\">\n                    <a (click)=\"usernamePresent()\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Click to check availability\"><img src=\"../../assets/images/checkAvailability.png\" style=\"height: 25px;width: 25px\"></a>\n                  </div>\n                </td>\n\n              </tr>\n          </div>\n          <!-- Password -->\n          <div class=\"form-group\">\n              <tr>\n                <td><label for=\"password\">Password</label></td>\n                <td><input (keyup)=\"passwordStrength()\" type=\"password\"\n                           id=\"password\"\n                           class=\"form-control\"\n                           name=\"password\"\n                           placeholder=\"Your Password\"\n                           [(ngModel)]=\"model.password\"\n                           #password=\"ngModel\"\n                           minlength=\"8\"\n                           maxlength=\"16\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && password.invalid }\"\n                           required=\"required\"/></td>\n                <td style=\"width: 58px; height: 35px; vertical-align: bottom\" align=\"center\"><a *ngIf=\"!passwordValidation\" class=\"password\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Your Password should contain : &#013; 1 special character &#013; 1 Upper Case character &#013; 1 Numeric character &#013; Minumum Length = 8 &#013; Maximum length = 16\"><img src=\"../../assets/images/key.png\" style=\"width: 30px; height: 30px\"></a> </td>\n              </tr>\n          </div>\n\n          <!-- First Name -->\n          <div class=\"form-group\">\n\n              <tr>\n                <td><label for=\"firstname\">First name</label></td>\n                <td><input type=\"text\"\n                           id=\"firstname\"\n                           class=\"form-control\"\n                           name=\"firstname\"\n                           placeholder=\"Your Firstname\"\n                           [(ngModel)]=\"model.firstname\"\n                           #firstname=\"ngModel\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && firstname.invalid }\"\n                           required=\"required\"/></td>\n                <td></td>\n              </tr>\n          </div>\n\n          <!-- Last Name -->\n          <div class=\"form-group\">\n              <tr>\n                <td><label for=\"lastname\">Last Name</label></td>\n                <td><input type=\"text\"\n                           id=\"lastname\"\n                           class=\"form-control\"\n                           name=\"lastname\"\n                           placeholder=\"Your Lastname\"\n                           [(ngModel)]=\"model.lastname\"\n                           #lastname=\"ngModel\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && lastname.invalid }\"\n                           required=\"required\"/></td>\n                <td></td>\n              </tr>\n          </div>\n\n          <!-- Email -->\n          <div class=\"form-group\">\n              <tr>\n                <td><label for=\"email\">Email</label></td>\n                <td><input (keyup)=\"checkEmail()\"\n                           type=\"text\"\n                           id=\"email\"\n                           class=\"form-control\"\n                           name=\"email\"\n                           placeholder=\"email\"\n                           [(ngModel)]=\"model.email\"\n                           #email=\"ngModel\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && email.invalid }\"\n                           required=\"required\"/></td>\n                <td><a *ngIf=\"!emailValidation\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Enter a valid Email Address\">Not a valid email</a></td>\n              </tr>\n          </div>\n\n          <!-- Address -->\n          <div class=\"form-group\">\n              <tr>\n                <td><label for=\"address\">Address</label></td>\n                <td><input type=\"text\"\n                           id=\"address\"\n                           class=\"form-control\"\n                           name=\"address\"\n                           placeholder=\"address\"\n                           [(ngModel)]=\"model.address\"\n                           #address=\"ngModel\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && address.invalid }\"\n                           required=\"required\"/></td>\n                <td></td>\n              </tr>\n          </div>\n\n          <!-- Phone -->\n          <div class=\"form-group\">\n              <tr>\n                <td><label for=\"phone\">Phone</label></td>\n                <td><input (keyup)=\"checkPhone()\"\n                           type=\"text\"\n                           id=\"phone\"\n                           class=\"form-control\"\n                           name=\"phone\"\n                           placeholder=\"phone\"\n                           [(ngModel)]=\"model.phone\"\n                           #phone=\"ngModel\"\n                           [ngClass]=\"{ 'is-invalid': f.submitted && phone.invalid }\"\n                           maxlength=\"10\"\n                           minlength=\"10\"\n                           required=\"required\"/></td>\n                <td>\n                  <a *ngIf=\"!phoneValidation\" data-toggle=\"tooltip\" data-placement=\"right\" title=\"Enter a valid Phone Number\">Invalid Phone Number</a>\n                </td>\n              </tr>\n          </div>\n            <div class=\"form-group\">\n              <tr>\n                <td>\n                  <label >Account</label>\n                </td>\n                <td><select class=\"form-control\" [(ngModel)]=\"options\"\n                name=\"options\" id=\"options\">\n                  <option>User</option>\n                  <option>Merchant</option>\n                </select></td>\n              </tr>\n            </div>\n          </table>\n\n          <table align=\"center\" style=\"padding-right:10%\">\n            <tr>\n              <td><button type=\"submit\" class=\"bigbutton\">\n                <span> Register</span></button>\n              </td>\n              <td><button routerLink=\"/home\" class=\"bigbutton\"><span>Home</span></button> </td>\n            </tr>\n          </table>\n\n        </form>\n      </div>\n      <div class=\"offset-3\"></div>\n    </div>\n  </div>\n</div>\n\n\n<!-- START CAPTCHA -->\n<!--<form onsubmit=\"return checkform(this);\" class=\"formmargin\">\n  <div class=\"capbox\">\n    &lt;!&ndash;<div id=\"CaptchaDiv\">73493</div>&ndash;&gt;\n    <div id=\"CaptchaDiv\" class=\"disable-text-selection\"><span (copy)=\"$event.preventDefault()\" (cut)=\"$event.preventDefault()\" (paste)=\"$event.preventDefault()\">12345</span></div>\n    <div class=\"capbox-inner\">\n      Type the above number:<br>\n      <input type=\"hidden\" id=\"txtCaptcha\"  placeholder=\"12345\">\n      <input type=\"text\" name=\"CaptchaInput\" id=\"CaptchaInput\" ondrop=\"return false;\" onpaste=\"return false;\"size=\"15\"><br>\n    </div>\n  </div>\n  <br>\n  <br>\n  <input type=\"submit\" value=\"Test Captcha\"><br>\n</form>-->\n<!-- END CAPTCHA -->\n<!--(beforecopy)=\"$event.preventDefault()\" (cut)=\"$event.preventDefault()\" (paste)=\"$event.preventDefault()\" ng-paste=\"$event.preventDefault()\"-->\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\n  <br><br><br><br>\n  <h1 align=\"center\">XWIGGY | ORDERS</h1>\n  <div class=\"alert alert-warning\" align=\"center\" style=\"width: 100%\">\n    <strong>Payment Successful.</strong>\n  </div>\n  <br><br><br>\n  <h1 align=\"center\">Your order is on it's way.</h1>\n  <!--<div align=\"center\"><progress value=\"22\" max=\"100\" style=\"width: 70%\"> Progress</progress> </div>-->\n\n<div align=\"center\">\n  <div class=\"progress\">\n    <div class=\"progress-bar bg-success\" style=\"width:40%\">\n      Payment Status : Accepted\n    </div>\n    <div class=\"progress-bar bg-warning\" style=\"width:40%\">\n      Order Status : Accepted\n    </div>\n    <div class=\"progress-bar bg-danger\" style=\"width:40%\">\n      Delivery Time : 30 mins\n    </div>\n  </div>\n</div>\n\n\n  <br><br><br><br>\n  <table align=\"center\">\n    <tr>\n      <td><button class=\"bigbutton\" routerLink=\"/contactUs\" style=\"width: 140px\"><span>Contact Us</span></button> </td>\n      <td><button class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button> </td>\n      <td><button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button> </td>\n    </tr>\n  </table>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--<div class=\"body\">\n  <br><br><br>\n  <h1 align=\"center\">XWIGGY | HOME</h1>\n  <br><br>\n\n  <h1>Welcome, {{modelUser.firstname}}</h1>\n  <div class=\"alert alert-warning\" align=\"center\">\n    <strong>User Details</strong>\n  </div>\n\n<table cellpadding=\"30%\" align=\"center\" >\n  <tr>\n    <td>First Name</td>\n    <td>{{modelUser.firstname}}</td>\n  </tr>\n  <tr>\n    <td>Last Name</td>\n    <td>{{modelUser.lastname}}</td>\n  </tr>\n  <tr>\n    <td>Mobile Number</td>\n    <td>{{modelUser.phone}}</td>\n  </tr>\n  <tr>\n    <td>Email Id</td>\n    <td>{{modelUser.email}}</td>\n  </tr>\n  <tr>\n  </tr>\n  <tr>\n  </tr>\n  <tr>\n    <td><button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button></td>\n    <td><button class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button></td>\n\n    <td></td>\n  </tr>\n  <tr>\n    <td></td>\n    <td> </td>\n\n  </tr>\n</table>\n</div>-->\n<div class=\"body\">\n<br><br><br>\n<h1 align=\"center\">XWIGGY | HOME</h1>\n<br><br>\n</div>\n<div class=\"card align-contents\">\n  <p><img class=\"card-img-top\" style=\"padding: 0 15px; float: left;\" src=\"../../assets/images/user.png\" alt=\"Card image cap\"><font>Welcome, {{modelUser.firstname}}<br> Account Type : User</font></p>\n  <div class=\"table-responsive panel\">\n    <table class=\"table\">\n      <tbody>\n\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user\"></i> First Name</td>\n        <td>{{modelUser.firstname}}</td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-user-circle\"></i> Last Name</td>\n        <td>{{modelUser.lastname}}</td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-mobile\"></i> Mobile Number</td>\n        <td>{{modelUser.phone}}</td>\n      </tr>\n      <tr>\n        <td class=\"text-success\" align=\"right\"><i class=\"fa fa-envelope\"></i> E-Mail ID</td>\n        <td>{{modelUser.email}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<div class=\"container\" align=\"center\">\n<button class=\"bigbutton\" routerLink=\"/home\" (click)=\"clearLocal()\"><span>Log Out</span></button>\n<button class=\"bigbutton\" routerLink=\"/menu\"><span>Menu</span></button>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input{\n  text-align: center;\n}\n\n\n.body {\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\n\np{\n  margin-left: 23%;\n}\n\n\ntable{\n  margin: auto;\n}\n\n\nimg{\n  width: 20%;\n  align-self: center;\n}\n\n\n.align-contents{\n  background-color: #393939;\n  width: 100%;\n}\n\n\ntd{\n  border-top: 0px;\n  color: #FFFFFF;\n}\n\n\nfont{\n  color: #FFFFFF;\n  font-size: 4vw;\n}\n\n\n.welcome{\n  color: white;\n}\n\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\n\n.align-submit{\n  display: block;\n}\n\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 25%;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtBQUNwQjs7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7OztBQUVBO0VBQ0UsWUFBWTtBQUNkOzs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7OztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7QUFDYjs7O0FBR0E7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7OztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQWM7RUFDZCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7OztBQUdBO0VBQ0UsY0FBYztBQUNoQjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLDRCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2FkZC1pdGVtL2FkZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5cbi5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiAxNHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxucHtcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcbn1cblxudGFibGV7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1ne1xuICB3aWR0aDogMjAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1jb250ZW50c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxudGR7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5mb250e1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0dnc7XG59XG4ud2VsY29tZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5cbi5hbGlnbi1zdWJtaXR7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYmlnYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDI1JTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5iaWdidXR0b24gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iaWdidXR0b24gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbn1cblxuIl19 */");

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AddItemComponent = class AddItemComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.newFoodItems = {
            id: '',
            name: '',
            price: null,
            quantityAvailable: null,
            fileDataF: null
        };
        this.url = null;
        this.selectedFile = null;
        this.present = null;
    }
    ngOnInit() {
        if (sessionStorage.length == 0)
            this.router.navigate(['welcome']);
    }
    onSubmit() {
        const formData = new FormData();
        formData.append('file', this.selectedFile);
        formData.append('newFoodItem', JSON.stringify(this.newFoodItems));
        console.log(formData.get('file'));
        console.log(formData.get('newFoodItem'));
        if (formData.get('file') == null || formData.get('file') == undefined) {
            console.log(formData.get('file'));
            this.url = "http://localhost:8080/addNewItem";
        }
        else {
            this.url = "http://localhost:8080/addNewItemUrl";
        }
        this.http.post(this.url, formData)
            .subscribe(res => {
            console.log(this.newFoodItems);
            alert("Item Added Successfully!");
        }, err => {
            alert("Failed to add item. Please Try after sometime!");
        });
    }
    onFileSelected(event) {
        this.selectedFile = event.target.files[0];
    }
    checkAvailability() {
        this.http.post("http://localhost:8080/checkItemId", this.newFoodItems.id).subscribe(res => {
            this.present = res;
        }, err => {
            alert("Error. Try After Sometime");
        });
    }
    clearLocal() {
        sessionStorage.clear();
    }
};
AddItemComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-item/add-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], AddItemComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'xwiggy-app';
    }
};
AppComponent.modelUser = {
    username: '',
    password: '',
    email: '',
    phone: 0,
    firstname: '',
    lastname: '',
    address: '',
    merchant: null
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./success/success.component */ "./src/app/success/success.component.ts");
/* harmony import */ var _merchant_welcome_merchant_welcome_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./merchant-welcome/merchant-welcome.component */ "./src/app/merchant-welcome/merchant-welcome.component.ts");
/* harmony import */ var _merchant_menu_merchant_menu_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./merchant-menu/merchant-menu.component */ "./src/app/merchant-menu/merchant-menu.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");



















const appRoutes = [
    { path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"] },
    { path: 'welcome',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"] },
    { path: 'menu',
        component: _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"] },
    { path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"] },
    { path: 'success',
        component: _success_success_component__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"] },
    { path: 'merchantWelcome',
        component: _merchant_welcome_merchant_welcome_component__WEBPACK_IMPORTED_MODULE_15__["MerchantWelcomeComponent"] },
    { path: 'merchantMenu',
        component: _merchant_menu_merchant_menu_component__WEBPACK_IMPORTED_MODULE_16__["MerchantMenuComponent"] },
    { path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'addItem',
        component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_17__["AddItemComponent"] },
    { path: 'contactUs',
        component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"] },
];
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
            _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"],
            _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_13__["CheckoutComponent"],
            _success_success_component__WEBPACK_IMPORTED_MODULE_14__["SuccessComponent"],
            _merchant_welcome_merchant_welcome_component__WEBPACK_IMPORTED_MODULE_15__["MerchantWelcomeComponent"],
            _merchant_menu_merchant_menu_component__WEBPACK_IMPORTED_MODULE_16__["MerchantMenuComponent"],
            _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_17__["AddItemComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_18__["ContactUsComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(appRoutes, { useHash: true }),
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  height: -webkit-fill-available;\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 125px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\ninput[type=text], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  text-align: center;\n}\n\ninput[type=number], select {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  text-align: center;\n}\n\n.question{\n  width: auto;\n  height: 20px;\n}\n\n.blue{\n  border: 2px solid blue;\n  border-radius: 4px;\n}\n\n.red{\n   border: 2px solid red;\n   border-radius: 4px;\n }\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0dBQ0cscUJBQXFCO0dBQ3JCLGtCQUFrQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiAxNHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxubGFiZWwge1xuICBmb250OiBib2xkIDIwcHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMTBweCAwIDA7XG4gIHdpZHRoOiAxNDBweDtcbn1cblxuZm9ybSBkaXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cblxuXG4uYmlnYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEyNXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJpZ2J1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iaWdidXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG5pbnB1dFt0eXBlPXRleHRdLCBzZWxlY3Qge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW46IDhweCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5pbnB1dFt0eXBlPW51bWJlcl0sIHNlbGVjdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5xdWVzdGlvbntcbiAgd2lkdGg6IGF1dG87XG4gIGhlaWdodDogMjBweDtcbn1cblxuLmJsdWV7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5yZWR7XG4gICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XG4gICBib3JkZXItcmFkaXVzOiA0cHg7XG4gfVxuXG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CheckoutComponent = class CheckoutComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].modelUser;
        this.cardNumberVal = null;
        this.monthVal = null;
        this.yearVal = null;
        this.cvvVal = null;
        this.nameOnCardVal = null;
        this.message = '';
    }
    ngOnInit() {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        this.total = sessionStorage.getItem('total');
    }
    validCard() {
        if (this.cardNumber.length == 0) {
            this.cardNumberVal = null;
        }
        if (this.cardNumber.length > 0 && this.cardNumber.length < 16) {
            this.cardNumberVal = false;
        }
        else if (this.cardNumber.length == 16) {
            let matcher = new RegExp('^(?=.*[0-9])(?=.{16})');
            this.cardNumberVal = matcher.test(this.cardNumber);
        }
    }
    validMonth() {
        this.monthVal = this.month >= 1 && this.month <= 12;
        console.log(this.monthVal);
    }
    validCvv() {
        this.cvvVal = this.cvv >= 100 && this.cvv <= 999;
    }
    validName() {
        this.nameOnCardVal = this.nameOnCard.length >= 4 && this.nameOnCard.length <= 10;
    }
    changeDB() {
        if (this.cardNumberVal && this.monthVal && this.yearVal && this.cvvVal && this.nameOnCardVal) {
            let url = "http://localhost:8080/changeDB";
            this.http.get(url).subscribe(res => {
                console.log("DB Updated");
            }, err => {
                alert('Failed to update DB');
            });
        }
        else {
            if (!this.cardNumberVal)
                this.message += "Card Number Not Valid \n";
            if (!this.monthVal)
                this.message += "Enter A Valid Month \n";
            if (!this.yearVal)
                this.message += "Enter A Valid Year\n";
            if (!this.cvvVal)
                this.message += "Enter A Valid CVV \n";
            if (!this.nameOnCardVal)
                this.message += "Enter A Valid Name";
            alert(this.message);
            this.message = '';
            this.router.navigate(['checkout']);
        }
    }
    validYear() {
        this.yearVal = this.year >= 19 && this.year <= 99;
        console.log(this.yearVal);
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/checkout/checkout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], CheckoutComponent);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 125px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n\nimg{\n  position: absolute;\n  margin: auto;\n  width: 100%;\n  height: 108%;\n  top: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLDRCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7OztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osTUFBTTtBQUNSIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9keSB7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udDogMTRweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cblxuLmJpZ2J1dHRvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0NTExZTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHdpZHRoOiAxMjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5iaWdidXR0b24gc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iaWdidXR0b24gc3BhbjphZnRlciB7XG4gIGNvbnRlbnQ6ICdcXDAwYmInO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IC0yMHB4O1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW4ge1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuXG4uYmlnYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xuICBvcGFjaXR5OiAxO1xuICByaWdodDogMDtcbn1cblxuaW1ne1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG1hcmdpbjogYXV0bztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTA4JTtcbiAgdG9wOiAwO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");

var ContactUsComponent_1;



let ContactUsComponent = ContactUsComponent_1 = class ContactUsComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.modelUser = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
        this.modelMessage = {
            name: '',
            email: '',
            message: ''
        };
        this.gif = false;
    }
    ngOnInit() {
        if (sessionStorage.getItem('userData') == null)
            this.router.navigate(["login"]);
        let userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelUser, userData);
    }
    sendFeedback() {
        this.gif = true;
        this.modelMessage.name = this.modelUser.firstname + this.modelUser.lastname;
        this.modelMessage.email = this.modelUser.email;
        let url = "http://localhost:8080/contact";
        this.http.post(url, this.modelMessage).subscribe(res => {
            ContactUsComponent_1.changeLoading();
            if (res)
                alert("Message Sent Successfully");
            this.gif = !res;
        }, err => {
            alert("An error has occurred while sending the message");
            this.gif = false;
        });
    }
    static changeLoading() {
        setTimeout(() => {
        }, 4000);
    }
    clearLocal() {
        sessionStorage.clear();
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ContactUsComponent = ContactUsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background-color: #393939;\n  background-repeat:no-repeat;\n  width: 100%;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG4uYmlnYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJpZ2J1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iaWdidXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("html, body{\n  background-color: #393939;\n}\n\n.loginbody {\n  background-size:100% 100%;\n  background-color: #393939;\n  background-repeat:no-repeat;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  padding: 5px 10px 0 0;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDViIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5e1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzkzOTM5O1xufVxuXG4ubG9naW5ib2R5IHtcbiAgYmFja2dyb3VuZC1zaXplOjEwMCUgMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAwO1xufVxuXG5mb3JtIGRpdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuXG5cbi5iaWdidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmlnYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.model = {
            username: '',
            password: ''
        };
        this.message = null;
    }
    ngOnInit() {
        if (sessionStorage.length > 0)
            this.router.navigate(['welcome']);
    }
    sendFeedback() {
        let url = "http://localhost:8080/login";
        let key = 'userData';
        this.http.post(url, this.model).subscribe(res => {
            // localStorage.setItem(key,JSON.stringify(res));
            sessionStorage.setItem(key, JSON.stringify(res));
            if (res != null && !res.merchant) {
                this.router.navigate(['welcome']);
            }
            if (res != null && res.merchant) {
                this.router.navigate(['merchantWelcome']);
            }
            if (res == null) {
                this.message = "Username Or Password is Wrong";
                sessionStorage.clear();
            }
        }, err => {
            console.log([this.model]);
            alert("An error has occurred while logging in");
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/menu-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/menu-service.service.ts ***!
  \*****************************************/
/*! exports provided: MenuServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuServiceService", function() { return MenuServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MenuServiceService = class MenuServiceService {
    constructor(HttpClient) {
        this.HttpClient = HttpClient;
    }
    getItems() {
        let url = "http://localhost:8080/menu";
        return this.HttpClient.get(url);
    }
};
MenuServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MenuServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], MenuServiceService);



/***/ }),

/***/ "./src/app/menu/menu.component.css":
/*!*****************************************!*\
  !*** ./src/app/menu/menu.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  height: -webkit-fill-available;\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\ninput{\n  width: -webkit-fill-available;\n  padding: inherit;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.dec {\n  background-position: 0 -29px;\n}\n\n.buttons {\n  padding: 20px 0 0 140px;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n.zoom {\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n\n.zoom:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n\np{\n  color: black;\n}\n\n.input-align{\n  text-align: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlDQUF5QjtFQUF6QixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQXpCLGdEQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuaW5wdXR7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBwYWRkaW5nOiBpbmhlcml0O1xufVxuZm9ybSBkaXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cblxuLmRlYyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI5cHg7XG59XG5cbi5idXR0b25zIHtcbiAgcGFkZGluZzogMjBweCAwIDAgMTQwcHg7XG59XG5cbi5iaWdidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmlnYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbi56b29tIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cblxuLnpvb206aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbnB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmlucHV0LWFsaWdue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent, Quantity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quantity", function() { return Quantity; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../menu-service.service */ "./src/app/menu-service.service.ts");





let MenuComponent = class MenuComponent {
    constructor(http, router, menuService) {
        this.http = http;
        this.router = router;
        this.menuService = menuService;
        this.values = [];
        this.modalCart = {
            quantity1: 0,
            quantity2: 0,
            quantity3: 0
        };
    }
    ngOnInit() {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        this.getItems();
    }
    clearLocal() {
        sessionStorage.clear();
    }
    getItems() {
        this.menuService.getItems().subscribe((men) => {
            this.model = men;
            for (let i = 0; i < this.model.length; i++) {
                this.values.push(new Quantity());
                this.values[i].quantity = 0;
            }
        });
    }
    getTotal() {
        console.log(this.values);
        let url = "http://localhost:8080/cart";
        this.modalCart.quantity1 = this.values[0].quantity;
        this.modalCart.quantity2 = this.values[1].quantity;
        this.modalCart.quantity3 = this.values[2].quantity;
        this.http.post(url, this.values).subscribe(res => {
            // AppComponent.total=res;
            sessionStorage.setItem('total', res.toString());
            this.total = res;
        }, err => {
            alert("Please select at least 1 item");
        });
    }
};
MenuComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _menu_service_service__WEBPACK_IMPORTED_MODULE_4__["MenuServiceService"] }
];
MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu.component.css */ "./src/app/menu/menu.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _menu_service_service__WEBPACK_IMPORTED_MODULE_4__["MenuServiceService"]])
], MenuComponent);

class Quantity {
}


/***/ }),

/***/ "./src/app/merchant-menu/merchant-menu.component.css":
/*!***********************************************************!*\
  !*** ./src/app/merchant-menu/merchant-menu.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  height: -webkit-fill-available;\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\ninput{\n  width: -webkit-fill-available;\n  padding: inherit;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.dec {\n  background-position: 0 -29px;\n}\n\n.buttons {\n  padding: 20px 0 0 140px;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 175px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n.zoom {\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n}\n\n.zoom:hover {\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5);\n}\n\np{\n  color: black;\n}\n\n.input-align{\n  text-align: center;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbnQtbWVudS9tZXJjaGFudC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlDQUF5QjtFQUF6QixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQXpCLGdEQUF5QjtBQUMzQjs7QUFFQTtFQUNFLDZCQUFxQjtVQUFyQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9tZXJjaGFudC1tZW51L21lcmNoYW50LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuaW5wdXR7XG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBwYWRkaW5nOiBpbmhlcml0O1xufVxuZm9ybSBkaXYge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDAgMCA1cHggMDtcbn1cblxuLmRlYyB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgLTI5cHg7XG59XG5cbi5idXR0b25zIHtcbiAgcGFkZGluZzogMjBweCAwIDAgMTQwcHg7XG59XG5cbi5iaWdidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTc1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmlnYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cbi56b29tIHtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcbn1cblxuLnpvb206aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XG59XG5cbnB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmlucHV0LWFsaWdue1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/merchant-menu/merchant-menu.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/merchant-menu/merchant-menu.component.ts ***!
  \**********************************************************/
/*! exports provided: MerchantMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantMenuComponent", function() { return MerchantMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _menu_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../menu-service.service */ "./src/app/menu-service.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");







let MerchantMenuComponent = class MerchantMenuComponent {
    constructor(http, router, menuService, _DomSanitizationService) {
        this.http = http;
        this.router = router;
        this.menuService = menuService;
        this._DomSanitizationService = _DomSanitizationService;
        this.modalCart = {
            quantity1: 0,
            quantity2: 0,
            quantity3: 0
        };
        this.values = [];
    }
    ngOnInit() {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        this.getItems();
    }
    clearLocal() {
        sessionStorage.clear();
    }
    getItems() {
        this.menuService.getItems().subscribe((men) => {
            this.model = men;
            for (let i = 0; i < this.model.length; i++) {
                this.values.push(new _menu_menu_component__WEBPACK_IMPORTED_MODULE_2__["Quantity"]());
                this.values[i].quantity = 0;
            }
        });
    }
    getTotal() {
        let url = "http://localhost:8080/addToCart";
        this.modalCart.quantity1 = this.values[0].quantity;
        this.modalCart.quantity2 = this.values[1].quantity;
        this.modalCart.quantity3 = this.values[2].quantity;
        this.http.post(url, this.values).subscribe(res => {
            this.ngOnInit();
        }, err => {
            alert("Error adding items to cart");
        });
    }
};
MerchantMenuComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _menu_service_service__WEBPACK_IMPORTED_MODULE_5__["MenuServiceService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] }
];
MerchantMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-merchant-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./merchant-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/merchant-menu/merchant-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./merchant-menu.component.css */ "./src/app/merchant-menu/merchant-menu.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _menu_service_service__WEBPACK_IMPORTED_MODULE_5__["MenuServiceService"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]])
], MerchantMenuComponent);



/***/ }),

/***/ "./src/app/merchant-welcome/merchant-welcome.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/merchant-welcome/merchant-welcome.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\np{\n  margin-left: 23%;\n}\n\ntable{\n  margin: auto;\n}\n\nimg{\n  width: 20%;\n  align-self: center;\n}\n\n.align-contents{\n  background-color: #393939;\n  width: 100%;\n}\n\ntd{\n  border-top: 0px;\n  color: #FFFFFF;\n}\n\nfont{\n  color: #FFFFFF;\n  font-size: 4vw;\n}\n\n.welcome{\n  color: white;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVyY2hhbnQtd2VsY29tZS9tZXJjaGFudC13ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9tZXJjaGFudC13ZWxjb21lL21lcmNoYW50LXdlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiAxNHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxucHtcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcbn1cblxudGFibGV7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1ne1xuICB3aWR0aDogMjAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1jb250ZW50c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxudGR7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5mb250e1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0dnc7XG59XG4ud2VsY29tZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5mb3JtIGRpdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuXG5cbi5iaWdidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmlnYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/merchant-welcome/merchant-welcome.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/merchant-welcome/merchant-welcome.component.ts ***!
  \****************************************************************/
/*! exports provided: MerchantWelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MerchantWelcomeComponent", function() { return MerchantWelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let MerchantWelcomeComponent = class MerchantWelcomeComponent {
    constructor(router) {
        this.router = router;
        this.modelMerchant = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
    }
    ngOnInit() {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        let userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelMerchant, userData);
    }
    clearLocal() {
        sessionStorage.clear();
    }
};
MerchantWelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MerchantWelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-merchant-welcome',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./merchant-welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/merchant-welcome/merchant-welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./merchant-welcome.component.css */ "./src/app/merchant-welcome/merchant-welcome.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], MerchantWelcomeComponent);



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  height: -webkit-fill-available;\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  text-align: center;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\ntable{\n  border-spacing: 0px;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\na:link, a:visited {\n  background-color: #f44336;\n  color: white;\n  padding: 14px 25px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n}\n\na:hover, a:active {\n  background-color: red;\n}\n\nselect {\n  width: 203px;\n}\n\noption {\n  width: 203px;\n}\n\n.capbox {\n  background-color: #92D433;\n  border: #B3E272 0px solid;\n  border-width: 0px 12px 0px 0px;\n  display: inline-block;\n  *display: inline; zoom: 1; /* FOR IE7-8 */\n  padding: 8px 40px 8px 8px;\n}\n\n.capbox-inner {\n  font: bold 11px arial, sans-serif;\n  color: #000000;\n  background-color: #DBF3BA;\n  margin: 5px auto 0px auto;\n  padding: 3px;\n  border-radius: 4px;\n}\n\n#CaptchaDiv {\n  font: bold 17px verdana, arial, sans-serif;\n  font-style: italic;\n  color: #000000;\n  background-color: #FFFFFF;\n  padding: 4px;\n  border-radius: 4px;\n}\n\n#CaptchaInput { margin: 1px 0px 1px 0px; width: 135px; }\n\n.disable-text-selection {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\nmsg-error {\n  color: #c65848;\n}\n\n.g-recaptcha.error {\n  border: solid 2px #c64848;\n  padding: .2em;\n  width: 19em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYztFQUNkLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBb0I7RUFBcEIsb0JBQW9CO0VBQ3BCLGVBQWU7RUFDZixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsTUFBTTtFQUNOLFlBQVk7RUFDWix3QkFBZ0I7RUFBaEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIscUJBQXFCO0dBQ3JCLGVBQWdCLEVBQUUsT0FBTyxFQUFFLGNBQWM7RUFDekMseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFlBQVk7RUFHWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSwwQ0FBMEM7RUFDMUMsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsWUFBWTtFQUdaLGtCQUFrQjtBQUNwQjs7QUFFQSxnQkFBZ0IsdUJBQXVCLEVBQUUsWUFBWSxFQUFFOztBQUV2RDtFQUNFLDJCQUEyQjtFQUMzQix5QkFBeUI7RUFFekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGJhY2tncm91bmQ6ICMzOTM5Mzk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udDogMTRweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG59XG5cbmxhYmVsIHtcbiAgZm9udDogYm9sZCAyMHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDEwcHggMCAwO1xuICB3aWR0aDogMTQwcHg7XG59XG5cbmZvcm0gZGl2IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIDAgNXB4IDA7XG59XG5cbnRhYmxle1xuICBib3JkZXItc3BhY2luZzogMHB4O1xufVxuXG4uYmlnYnV0dG9uIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjQ1MTFlO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW46IDVweDtcbn1cblxuLmJpZ2J1dHRvbiBzcGFuIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbiBzcGFuOmFmdGVyIHtcbiAgY29udGVudDogJ1xcMDBiYic7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICByaWdodDogLTIwcHg7XG4gIHRyYW5zaXRpb246IDAuNXM7XG59XG5cbi5iaWdidXR0b246aG92ZXIgc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG59XG5cbi5iaWdidXR0b246aG92ZXIgc3BhbjphZnRlciB7XG4gIG9wYWNpdHk6IDE7XG4gIHJpZ2h0OiAwO1xufVxuXG5hOmxpbmssIGE6dmlzaXRlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDQzMzY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMTRweCAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5hOmhvdmVyLCBhOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuc2VsZWN0IHtcbiAgd2lkdGg6IDIwM3B4O1xufVxuXG5vcHRpb24ge1xuICB3aWR0aDogMjAzcHg7XG59XG5cbi5jYXBib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTJENDMzO1xuICBib3JkZXI6ICNCM0UyNzIgMHB4IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDBweCAxMnB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgKmRpc3BsYXk6IGlubGluZTsgem9vbTogMTsgLyogRk9SIElFNy04ICovXG4gIHBhZGRpbmc6IDhweCA0MHB4IDhweCA4cHg7XG59XG5cbi5jYXBib3gtaW5uZXIge1xuICBmb250OiBib2xkIDExcHggYXJpYWwsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjREJGM0JBO1xuICBtYXJnaW46IDVweCBhdXRvIDBweCBhdXRvO1xuICBwYWRkaW5nOiAzcHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jQ2FwdGNoYURpdiB7XG4gIGZvbnQ6IGJvbGQgMTdweCB2ZXJkYW5hLCBhcmlhbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgcGFkZGluZzogNHB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuI0NhcHRjaGFJbnB1dCB7IG1hcmdpbjogMXB4IDBweCAxcHggMHB4OyB3aWR0aDogMTM1cHg7IH1cblxuLmRpc2FibGUtdGV4dC1zZWxlY3Rpb24ge1xuICAtd2Via2l0LXRvdWNoLWNhbGxvdXQ6IG5vbmU7XG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC1raHRtbC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxubXNnLWVycm9yIHtcbiAgY29sb3I6ICNjNjU4NDg7XG59XG4uZy1yZWNhcHRjaGEuZXJyb3Ige1xuICBib3JkZXI6IHNvbGlkIDJweCAjYzY0ODQ4O1xuICBwYWRkaW5nOiAuMmVtO1xuICB3aWR0aDogMTllbTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegisterComponent = class RegisterComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.model = {
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            address: '',
            phone: null,
            merchant: null
        };
        this.options = null;
        this.present = null;
        this.phoneValidation = true;
        this.emailValidation = true;
        this.passwordValidation = true;
    }
    usernamePresent() {
        this.fontColor = '';
        let url = "http://localhost:8080/checkUserName";
        this.http.post(url, this.model.username).subscribe(res => {
            this.present = res;
            console.log(this.present);
            if (this.present) {
                this.fontColor = "red";
                this.usernameAvailability = "UserName Already Taken";
            }
            else {
                this.fontColor = "green";
                this.usernameAvailability = "Available";
            }
            this.router.navigate(['register']);
        });
    }
    updateSelect() {
        this.model.merchant = this.options.length != 4;
    }
    checkPhone() {
        let matcher = new RegExp('^[+ 0-9]{10}$');
        if (String(this.model.phone).length == 10)
            this.phoneValidation = (matcher.test(String(this.model.phone)));
    }
    checkEmail() {
        if (this.model.email.length == 0) {
            this.emailValidation = true;
        }
        if (this.model.email.length > 0 && (this.model.email).indexOf("@") == -1)
            this.emailValidation = false;
        if (this.model.email.length > 0 && (this.model.email).indexOf("@") != -1)
            this.emailValidation = true;
    }
    passwordStrength() {
        if (this.model.password.length == 0)
            this.passwordValidation = true;
        if (this.model.password.length < 8)
            this.passwordValidation = false;
        if (this.model.password.length >= 8) {
            let matcher = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,16})');
            this.passwordValidation = matcher.test(this.model.password);
        }
    }
    registerUser() {
        this.updateSelect();
        let url = "http://localhost:8080/register";
        this.http.post(url, this.model).subscribe(res => {
            _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].modelUser = res;
            this.router.navigate(['welcome']);
        }, err => {
            console.log([this.model]);
            alert("An error has occurred while Registering");
        });
    }
    ngOnInit() {
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegisterComponent);



/***/ }),

/***/ "./src/app/success/success.component.css":
/*!***********************************************!*\
  !*** ./src/app/success/success.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  height: -webkit-fill-available;\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n/* progress bar*/\n\n.progress-bar {\n  width: 0;\n  -webkit-animation: progress 1.5s ease-in-out forwards;\n          animation: progress 1.5s ease-in-out forwards;\n\n.title {\n  opacity: 0;\n  -webkit-animation: show 0.35s forwards ease-in-out 0.5s;\n          animation: show 0.35s forwards ease-in-out 0.5s;\n}\n}\n\n@-webkit-keyframes progress {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@keyframes progress {\n  from {\n    width: 0;\n  }\n  to {\n    width: 100%;\n  }\n}\n\n@-webkit-keyframes show  {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@keyframes show  {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n.alert-warning {\n  color: #ffffff;\n  background-color: limegreen;\n  border-color: lime;\n}\n\n.progress {\n  display: -webkit-box;\n  display: flex;\n  height: 1rem;\n  overflow: hidden;\n  background-color: #e9ecef;\n  border-radius: .25rem;\n}\n\n.pace { -webkit-pointer-events: none; pointer-events: none; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -ms-box-sizing: border-box; -o-box-sizing: border-box; box-sizing: border-box; border-radius: 10px; -webkit-background-clip: padding-box; -moz-background-clip: padding; background-clip: padding-box; z-index: 2000; position: fixed; margin: auto; top: 12px; left: 0; right: 0; bottom: 0; width: 200px; height: 50px; overflow: hidden; }\n\n.pace .pace-progress { -ms-box-sizing: border-box; -o-box-sizing: border-box; box-sizing: border-box; border-radius: 2px; -webkit-background-clip: padding-box; -moz-background-clip: padding; background-clip: padding-box; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); display: block; position: absolute; right: 100%; margin-right: -7px; width: 93%; top: 7px; height: 14px; font-size: 12px; background: #29d; color: #29d; line-height: 60px; font-weight: bold; font-family: Helvetica, Arial, \"Lucida Grande\", sans-serif; -ms-box-shadow: 120px 0 #fff, 240px 0 #fff; box-shadow: 120px 0 #fff, 240px 0 #fff; }\n\n.pace .pace-progress:after { content: attr(data-progress-text); display: inline-block; position: fixed; width: 45px; text-align: right; right: 0; padding-right: 16px; top: 4px; }\n\n.pace .pace-progress[data-progress-text=\"0%\"]:after { right: -200px }\n\n.pace .pace-progress[data-progress-text=\"1%\"]:after { right: -198.14px }\n\n.pace .pace-progress[data-progress-text=\"2%\"]:after { right: -196.28px }\n\n.pace .pace-progress[data-progress-text=\"3%\"]:after { right: -194.42px }\n\n.pace .pace-progress[data-progress-text=\"4%\"]:after { right: -192.56px }\n\n.pace .pace-progress[data-progress-text=\"5%\"]:after { right: -190.7px }\n\n.pace .pace-progress[data-progress-text=\"6%\"]:after { right: -188.84px }\n\n.pace .pace-progress[data-progress-text=\"7%\"]:after { right: -186.98px }\n\n.pace .pace-progress[data-progress-text=\"8%\"]:after { right: -185.12px }\n\n.pace .pace-progress[data-progress-text=\"9%\"]:after { right: -183.26px }\n\n.pace .pace-progress[data-progress-text=\"10%\"]:after { right: -181.4px }\n\n.pace .pace-progress[data-progress-text=\"11%\"]:after { right: -179.54px }\n\n.pace .pace-progress[data-progress-text=\"12%\"]:after { right: -177.68px }\n\n.pace .pace-progress[data-progress-text=\"13%\"]:after { right: -175.82px }\n\n.pace .pace-progress[data-progress-text=\"14%\"]:after { right: -173.96px }\n\n.pace .pace-progress[data-progress-text=\"15%\"]:after { right: -172.1px }\n\n.pace .pace-progress[data-progress-text=\"16%\"]:after { right: -170.24px }\n\n.pace .pace-progress[data-progress-text=\"17%\"]:after { right: -168.38px }\n\n.pace .pace-progress[data-progress-text=\"18%\"]:after { right: -166.52px }\n\n.pace .pace-progress[data-progress-text=\"19%\"]:after { right: -164.66px }\n\n.pace .pace-progress[data-progress-text=\"20%\"]:after { right: -162.8px }\n\n.pace .pace-progress[data-progress-text=\"21%\"]:after { right: -160.94px }\n\n.pace .pace-progress[data-progress-text=\"22%\"]:after { right: -159.08px }\n\n.pace .pace-progress[data-progress-text=\"23%\"]:after { right: -157.22px }\n\n.pace .pace-progress[data-progress-text=\"24%\"]:after { right: -155.36px }\n\n.pace .pace-progress[data-progress-text=\"25%\"]:after { right: -153.5px }\n\n.pace .pace-progress[data-progress-text=\"26%\"]:after { right: -151.64px }\n\n.pace .pace-progress[data-progress-text=\"27%\"]:after { right: -149.78px }\n\n.pace .pace-progress[data-progress-text=\"28%\"]:after { right: -147.92px }\n\n.pace .pace-progress[data-progress-text=\"29%\"]:after { right: -146.06px }\n\n.pace .pace-progress[data-progress-text=\"30%\"]:after { right: -144.2px }\n\n.pace .pace-progress[data-progress-text=\"31%\"]:after { right: -142.34px }\n\n.pace .pace-progress[data-progress-text=\"32%\"]:after { right: -140.48px }\n\n.pace .pace-progress[data-progress-text=\"33%\"]:after { right: -138.62px }\n\n.pace .pace-progress[data-progress-text=\"34%\"]:after { right: -136.76px }\n\n.pace .pace-progress[data-progress-text=\"35%\"]:after { right: -134.9px }\n\n.pace .pace-progress[data-progress-text=\"36%\"]:after { right: -133.04px }\n\n.pace .pace-progress[data-progress-text=\"37%\"]:after { right: -131.18px }\n\n.pace .pace-progress[data-progress-text=\"38%\"]:after { right: -129.32px }\n\n.pace .pace-progress[data-progress-text=\"39%\"]:after { right: -127.46px }\n\n.pace .pace-progress[data-progress-text=\"40%\"]:after { right: -125.6px }\n\n.pace .pace-progress[data-progress-text=\"41%\"]:after { right: -123.74px }\n\n.pace .pace-progress[data-progress-text=\"42%\"]:after { right: -121.88px }\n\n.pace .pace-progress[data-progress-text=\"43%\"]:after { right: -120.02px }\n\n.pace .pace-progress[data-progress-text=\"44%\"]:after { right: -118.16px }\n\n.pace .pace-progress[data-progress-text=\"45%\"]:after { right: -116.3px }\n\n.pace .pace-progress[data-progress-text=\"46%\"]:after { right: -114.44px }\n\n.pace .pace-progress[data-progress-text=\"47%\"]:after { right: -112.58px }\n\n.pace .pace-progress[data-progress-text=\"48%\"]:after { right: -110.72px }\n\n.pace .pace-progress[data-progress-text=\"49%\"]:after { right: -108.86px }\n\n.pace .pace-progress[data-progress-text=\"50%\"]:after { right: -107px }\n\n.pace .pace-progress[data-progress-text=\"51%\"]:after { right: -105.14px }\n\n.pace .pace-progress[data-progress-text=\"52%\"]:after { right: -103.28px }\n\n.pace .pace-progress[data-progress-text=\"53%\"]:after { right: -101.42px }\n\n.pace .pace-progress[data-progress-text=\"54%\"]:after { right: -99.56px }\n\n.pace .pace-progress[data-progress-text=\"55%\"]:after { right: -97.7px }\n\n.pace .pace-progress[data-progress-text=\"56%\"]:after { right: -95.84px }\n\n.pace .pace-progress[data-progress-text=\"57%\"]:after { right: -93.98px }\n\n.pace .pace-progress[data-progress-text=\"58%\"]:after { right: -92.12px }\n\n.pace .pace-progress[data-progress-text=\"59%\"]:after { right: -90.26px }\n\n.pace .pace-progress[data-progress-text=\"60%\"]:after { right: -88.4px }\n\n.pace .pace-progress[data-progress-text=\"61%\"]:after { right: -86.53999999999999px }\n\n.pace .pace-progress[data-progress-text=\"62%\"]:after { right: -84.68px }\n\n.pace .pace-progress[data-progress-text=\"63%\"]:after { right: -82.82px }\n\n.pace .pace-progress[data-progress-text=\"64%\"]:after { right: -80.96000000000001px }\n\n.pace .pace-progress[data-progress-text=\"65%\"]:after { right: -79.1px }\n\n.pace .pace-progress[data-progress-text=\"66%\"]:after { right: -77.24px }\n\n.pace .pace-progress[data-progress-text=\"67%\"]:after { right: -75.38px }\n\n.pace .pace-progress[data-progress-text=\"68%\"]:after { right: -73.52px }\n\n.pace .pace-progress[data-progress-text=\"69%\"]:after { right: -71.66px }\n\n.pace .pace-progress[data-progress-text=\"70%\"]:after { right: -69.8px }\n\n.pace .pace-progress[data-progress-text=\"71%\"]:after { right: -67.94px }\n\n.pace .pace-progress[data-progress-text=\"72%\"]:after { right: -66.08px }\n\n.pace .pace-progress[data-progress-text=\"73%\"]:after { right: -64.22px }\n\n.pace .pace-progress[data-progress-text=\"74%\"]:after { right: -62.36px }\n\n.pace .pace-progress[data-progress-text=\"75%\"]:after { right: -60.5px }\n\n.pace .pace-progress[data-progress-text=\"76%\"]:after { right: -58.64px }\n\n.pace .pace-progress[data-progress-text=\"77%\"]:after { right: -56.78px }\n\n.pace .pace-progress[data-progress-text=\"78%\"]:after { right: -54.92px }\n\n.pace .pace-progress[data-progress-text=\"79%\"]:after { right: -53.06px }\n\n.pace .pace-progress[data-progress-text=\"80%\"]:after { right: -51.2px }\n\n.pace .pace-progress[data-progress-text=\"81%\"]:after { right: -49.34px }\n\n.pace .pace-progress[data-progress-text=\"82%\"]:after { right: -47.480000000000004px }\n\n.pace .pace-progress[data-progress-text=\"83%\"]:after { right: -45.62px }\n\n.pace .pace-progress[data-progress-text=\"84%\"]:after { right: -43.76px }\n\n.pace .pace-progress[data-progress-text=\"85%\"]:after { right: -41.9px }\n\n.pace .pace-progress[data-progress-text=\"86%\"]:after { right: -40.04px }\n\n.pace .pace-progress[data-progress-text=\"87%\"]:after { right: -38.18px }\n\n.pace .pace-progress[data-progress-text=\"88%\"]:after { right: -36.32px }\n\n.pace .pace-progress[data-progress-text=\"89%\"]:after { right: -34.46px }\n\n.pace .pace-progress[data-progress-text=\"90%\"]:after { right: -32.6px }\n\n.pace .pace-progress[data-progress-text=\"91%\"]:after { right: -30.740000000000002px }\n\n.pace .pace-progress[data-progress-text=\"92%\"]:after { right: -28.880000000000003px }\n\n.pace .pace-progress[data-progress-text=\"93%\"]:after { right: -27.02px }\n\n.pace .pace-progress[data-progress-text=\"94%\"]:after { right: -25.16px }\n\n.pace .pace-progress[data-progress-text=\"95%\"]:after { right: -23.3px }\n\n.pace .pace-progress[data-progress-text=\"96%\"]:after { right: -21.439999999999998px }\n\n.pace .pace-progress[data-progress-text=\"97%\"]:after { right: -19.58px }\n\n.pace .pace-progress[data-progress-text=\"98%\"]:after { right: -17.72px }\n\n.pace .pace-progress[data-progress-text=\"99%\"]:after { right: -15.86px }\n\n.pace .pace-progress[data-progress-text=\"100%\"]:after { right: -14px }\n\n.pace .pace-activity { position: absolute; width: 100%; height: 28px; z-index: 2001; box-shadow: inset 0 0 0 2px #29d, inset 0 0 0 7px #FFF; border-radius: 10px; }\n\n.pace.pace-inactive { display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3VjY2Vzcy9zdWNjZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxxQ0FBcUM7RUFDckMsY0FBYztFQUNkLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsWUFBWTtFQUNaLDRCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixNQUFNO0VBQ04sWUFBWTtFQUNaLHdCQUFnQjtFQUFoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsUUFBUTtBQUNWOztBQUdBLGdCQUFnQjs7QUFFaEI7RUFDRSxRQUFRO0VBQ1IscURBQTZDO1VBQTdDLDZDQUE2Qzs7QUFFL0M7RUFDRSxVQUFVO0VBQ1YsdURBQStDO1VBQS9DLCtDQUErQztBQUNqRDtBQUNBOztBQUVBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxRQUFRO0VBQ1Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQVBBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UsY0FBYztFQUNkLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUEsUUFBUSw0QkFBNEIsRUFBRSxvQkFBb0IsRUFBRSx5QkFBeUIsRUFBRSxzQkFBc0IsRUFBRSxxQkFBaUIsRUFBakIsaUJBQWlCLEVBQStELDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHNCQUFzQixFQUF5RCxtQkFBbUIsRUFBRSxvQ0FBb0MsRUFBRSw2QkFBNkIsRUFBRSw0QkFBNEIsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxnQkFBZ0IsRUFBRTs7QUFBRSx1QkFBb0YsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsc0JBQXNCLEVBQXVELGtCQUFrQixFQUFFLG9DQUFvQyxFQUFFLDZCQUE2QixFQUFFLDRCQUE0QixFQUFFLHVDQUF1QyxFQUFFLCtCQUErQixFQUFFLGNBQWMsRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsZUFBZSxFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSwwREFBMEQsRUFBa0QsMENBQTBDLEVBQUUsc0NBQXNDLEVBQUU7O0FBQUUsNkJBQTZCLGlDQUFpQyxFQUFFLHFCQUFxQixFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFFLFFBQVEsRUFBRTs7QUFBRSxzREFBc0QsY0FBYzs7QUFBRSxzREFBc0QsaUJBQWlCOztBQUFFLHNEQUFzRCxpQkFBaUI7O0FBQUUsc0RBQXNELGlCQUFpQjs7QUFBRSxzREFBc0QsaUJBQWlCOztBQUFFLHNEQUFzRCxnQkFBZ0I7O0FBQUUsc0RBQXNELGlCQUFpQjs7QUFBRSxzREFBc0QsaUJBQWlCOztBQUFFLHNEQUFzRCxpQkFBaUI7O0FBQUUsc0RBQXNELGlCQUFpQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxjQUFjOztBQUFFLHVEQUF1RCxpQkFBaUI7O0FBQUUsdURBQXVELGlCQUFpQjs7QUFBRSx1REFBdUQsaUJBQWlCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGVBQWU7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZUFBZTs7QUFBRSx1REFBdUQsNEJBQTRCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsNEJBQTRCOztBQUFFLHVEQUF1RCxlQUFlOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGVBQWU7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZUFBZTs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxlQUFlOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELDZCQUE2Qjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGVBQWU7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZUFBZTs7QUFBRSx1REFBdUQsNkJBQTZCOztBQUFFLHVEQUF1RCw2QkFBNkI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxlQUFlOztBQUFFLHVEQUF1RCw2QkFBNkI7O0FBQUUsdURBQXVELGdCQUFnQjs7QUFBRSx1REFBdUQsZ0JBQWdCOztBQUFFLHVEQUF1RCxnQkFBZ0I7O0FBQUUsd0RBQXdELGFBQWE7O0FBQUUsdUJBQXVCLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLHNEQUFzRCxFQUFFLG1CQUFtQixFQUFFOztBQUFFLHNCQUFzQixhQUFhLEVBQUUiLCJmaWxlIjoic3JjL2FwcC9zdWNjZXNzL3N1Y2Nlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBiYWNrZ3JvdW5kOiAjMzkzOTM5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQ6IDE0cHggSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5mb3JtIGRpdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuXG5cbi5iaWdidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmlnYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG5cblxuLyogcHJvZ3Jlc3MgYmFyKi9cblxuLnByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAwO1xuICBhbmltYXRpb246IHByb2dyZXNzIDEuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG5cbi50aXRsZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGFuaW1hdGlvbjogc2hvdyAwLjM1cyBmb3J3YXJkcyBlYXNlLWluLW91dCAwLjVzO1xufVxufVxuXG5Aa2V5ZnJhbWVzIHByb2dyZXNzIHtcbiAgZnJvbSB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgdG8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNob3cgIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uYWxlcnQtd2FybmluZyB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW1lZ3JlZW47XG4gIGJvcmRlci1jb2xvcjogbGltZTtcbn1cblxuLnByb2dyZXNzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxcmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICBib3JkZXItcmFkaXVzOiAuMjVyZW07XG59XG5cbi5wYWNlIHsgLXdlYmtpdC1wb2ludGVyLWV2ZW50czogbm9uZTsgcG9pbnRlci1ldmVudHM6IG5vbmU7IC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IHVzZXItc2VsZWN0OiBub25lOyAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1zLWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC1vLWJveC1zaXppbmc6IGJvcmRlci1ib3g7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweDsgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC1tb3otYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nOyBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94OyB6LWluZGV4OiAyMDAwOyBwb3NpdGlvbjogZml4ZWQ7IG1hcmdpbjogYXV0bzsgdG9wOiAxMnB4OyBsZWZ0OiAwOyByaWdodDogMDsgYm90dG9tOiAwOyB3aWR0aDogMjAwcHg7IGhlaWdodDogNTBweDsgb3ZlcmZsb3c6IGhpZGRlbjsgfSAucGFjZSAucGFjZS1wcm9ncmVzcyB7IC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAtbXMtYm94LXNpemluZzogYm9yZGVyLWJveDsgLW8tYm94LXNpemluZzogYm9yZGVyLWJveDsgYm94LXNpemluZzogYm9yZGVyLWJveDsgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAycHg7IC1tb3otYm9yZGVyLXJhZGl1czogMnB4OyBib3JkZXItcmFkaXVzOiAycHg7IC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDsgLW1vei1iYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmc7IGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7IC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTsgZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgcmlnaHQ6IDEwMCU7IG1hcmdpbi1yaWdodDogLTdweDsgd2lkdGg6IDkzJTsgdG9wOiA3cHg7IGhlaWdodDogMTRweDsgZm9udC1zaXplOiAxMnB4OyBiYWNrZ3JvdW5kOiAjMjlkOyBjb2xvcjogIzI5ZDsgbGluZS1oZWlnaHQ6IDYwcHg7IGZvbnQtd2VpZ2h0OiBib2xkOyBmb250LWZhbWlseTogSGVsdmV0aWNhLCBBcmlhbCwgXCJMdWNpZGEgR3JhbmRlXCIsIHNhbnMtc2VyaWY7IC13ZWJraXQtYm94LXNoYWRvdzogMTIwcHggMCAjZmZmLCAyNDBweCAwICNmZmY7IC1tcy1ib3gtc2hhZG93OiAxMjBweCAwICNmZmYsIDI0MHB4IDAgI2ZmZjsgYm94LXNoYWRvdzogMTIwcHggMCAjZmZmLCAyNDBweCAwICNmZmY7IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3M6YWZ0ZXIgeyBjb250ZW50OiBhdHRyKGRhdGEtcHJvZ3Jlc3MtdGV4dCk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcG9zaXRpb246IGZpeGVkOyB3aWR0aDogNDVweDsgdGV4dC1hbGlnbjogcmlnaHQ7IHJpZ2h0OiAwOyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyB0b3A6IDRweDsgfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIwJVwiXTphZnRlciB7IHJpZ2h0OiAtMjAwcHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxJVwiXTphZnRlciB7IHJpZ2h0OiAtMTk4LjE0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyJVwiXTphZnRlciB7IHJpZ2h0OiAtMTk2LjI4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzJVwiXTphZnRlciB7IHJpZ2h0OiAtMTk0LjQycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0JVwiXTphZnRlciB7IHJpZ2h0OiAtMTkyLjU2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1JVwiXTphZnRlciB7IHJpZ2h0OiAtMTkwLjdweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjYlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xODguODRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjclXCJdOmFmdGVyIHsgcmlnaHQ6IC0xODYuOThweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjglXCJdOmFmdGVyIHsgcmlnaHQ6IC0xODUuMTJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjklXCJdOmFmdGVyIHsgcmlnaHQ6IC0xODMuMjZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjEwJVwiXTphZnRlciB7IHJpZ2h0OiAtMTgxLjRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjExJVwiXTphZnRlciB7IHJpZ2h0OiAtMTc5LjU0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxMiVcIl06YWZ0ZXIgeyByaWdodDogLTE3Ny42OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMTMlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNzUuODJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjE0JVwiXTphZnRlciB7IHJpZ2h0OiAtMTczLjk2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxNSVcIl06YWZ0ZXIgeyByaWdodDogLTE3Mi4xcHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxNiVcIl06YWZ0ZXIgeyByaWdodDogLTE3MC4yNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMTclXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNjguMzhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjE4JVwiXTphZnRlciB7IHJpZ2h0OiAtMTY2LjUycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxOSVcIl06YWZ0ZXIgeyByaWdodDogLTE2NC42NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNjIuOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjElXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNjAuOTRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjIyJVwiXTphZnRlciB7IHJpZ2h0OiAtMTU5LjA4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyMyVcIl06YWZ0ZXIgeyByaWdodDogLTE1Ny4yMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjQlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNTUuMzZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjI1JVwiXTphZnRlciB7IHJpZ2h0OiAtMTUzLjVweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjI2JVwiXTphZnRlciB7IHJpZ2h0OiAtMTUxLjY0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIyNyVcIl06YWZ0ZXIgeyByaWdodDogLTE0OS43OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMjglXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNDcuOTJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjI5JVwiXTphZnRlciB7IHJpZ2h0OiAtMTQ2LjA2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzMCVcIl06YWZ0ZXIgeyByaWdodDogLTE0NC4ycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzMSVcIl06YWZ0ZXIgeyByaWdodDogLTE0Mi4zNHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMzIlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNDAuNDhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjMzJVwiXTphZnRlciB7IHJpZ2h0OiAtMTM4LjYycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzNCVcIl06YWZ0ZXIgeyByaWdodDogLTEzNi43NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMzUlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMzQuOXB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMzYlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMzMuMDRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjM3JVwiXTphZnRlciB7IHJpZ2h0OiAtMTMxLjE4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIzOCVcIl06YWZ0ZXIgeyByaWdodDogLTEyOS4zMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiMzklXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMjcuNDZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQwJVwiXTphZnRlciB7IHJpZ2h0OiAtMTI1LjZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQxJVwiXTphZnRlciB7IHJpZ2h0OiAtMTIzLjc0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0MiVcIl06YWZ0ZXIgeyByaWdodDogLTEyMS44OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNDMlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMjAuMDJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQ0JVwiXTphZnRlciB7IHJpZ2h0OiAtMTE4LjE2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0NSVcIl06YWZ0ZXIgeyByaWdodDogLTExNi4zcHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0NiVcIl06YWZ0ZXIgeyByaWdodDogLTExNC40NHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNDclXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMTIuNThweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjQ4JVwiXTphZnRlciB7IHJpZ2h0OiAtMTEwLjcycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI0OSVcIl06YWZ0ZXIgeyByaWdodDogLTEwOC44NnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMDdweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjUxJVwiXTphZnRlciB7IHJpZ2h0OiAtMTA1LjE0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI1MiVcIl06YWZ0ZXIgeyByaWdodDogLTEwMy4yOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTMlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xMDEuNDJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjU0JVwiXTphZnRlciB7IHJpZ2h0OiAtOTkuNTZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjU1JVwiXTphZnRlciB7IHJpZ2h0OiAtOTcuN3B4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTYlXCJdOmFmdGVyIHsgcmlnaHQ6IC05NS44NHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTclXCJdOmFmdGVyIHsgcmlnaHQ6IC05My45OHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTglXCJdOmFmdGVyIHsgcmlnaHQ6IC05Mi4xMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNTklXCJdOmFmdGVyIHsgcmlnaHQ6IC05MC4yNnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNjAlXCJdOmFmdGVyIHsgcmlnaHQ6IC04OC40cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI2MSVcIl06YWZ0ZXIgeyByaWdodDogLTg2LjUzOTk5OTk5OTk5OTk5cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI2MiVcIl06YWZ0ZXIgeyByaWdodDogLTg0LjY4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI2MyVcIl06YWZ0ZXIgeyByaWdodDogLTgyLjgycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI2NCVcIl06YWZ0ZXIgeyByaWdodDogLTgwLjk2MDAwMDAwMDAwMDAxcHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI2NSVcIl06YWZ0ZXIgeyByaWdodDogLTc5LjFweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjY2JVwiXTphZnRlciB7IHJpZ2h0OiAtNzcuMjRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjY3JVwiXTphZnRlciB7IHJpZ2h0OiAtNzUuMzhweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjY4JVwiXTphZnRlciB7IHJpZ2h0OiAtNzMuNTJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjY5JVwiXTphZnRlciB7IHJpZ2h0OiAtNzEuNjZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjcwJVwiXTphZnRlciB7IHJpZ2h0OiAtNjkuOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNzElXCJdOmFmdGVyIHsgcmlnaHQ6IC02Ny45NHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNzIlXCJdOmFmdGVyIHsgcmlnaHQ6IC02Ni4wOHB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNzMlXCJdOmFmdGVyIHsgcmlnaHQ6IC02NC4yMnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNzQlXCJdOmFmdGVyIHsgcmlnaHQ6IC02Mi4zNnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiNzUlXCJdOmFmdGVyIHsgcmlnaHQ6IC02MC41cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3NiVcIl06YWZ0ZXIgeyByaWdodDogLTU4LjY0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3NyVcIl06YWZ0ZXIgeyByaWdodDogLTU2Ljc4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3OCVcIl06YWZ0ZXIgeyByaWdodDogLTU0LjkycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI3OSVcIl06YWZ0ZXIgeyByaWdodDogLTUzLjA2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI4MCVcIl06YWZ0ZXIgeyByaWdodDogLTUxLjJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjgxJVwiXTphZnRlciB7IHJpZ2h0OiAtNDkuMzRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjgyJVwiXTphZnRlciB7IHJpZ2h0OiAtNDcuNDgwMDAwMDAwMDAwMDA0cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI4MyVcIl06YWZ0ZXIgeyByaWdodDogLTQ1LjYycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI4NCVcIl06YWZ0ZXIgeyByaWdodDogLTQzLjc2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI4NSVcIl06YWZ0ZXIgeyByaWdodDogLTQxLjlweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjg2JVwiXTphZnRlciB7IHJpZ2h0OiAtNDAuMDRweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjg3JVwiXTphZnRlciB7IHJpZ2h0OiAtMzguMThweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjg4JVwiXTphZnRlciB7IHJpZ2h0OiAtMzYuMzJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjg5JVwiXTphZnRlciB7IHJpZ2h0OiAtMzQuNDZweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjkwJVwiXTphZnRlciB7IHJpZ2h0OiAtMzIuNnB4IH0gLnBhY2UgLnBhY2UtcHJvZ3Jlc3NbZGF0YS1wcm9ncmVzcy10ZXh0PVwiOTElXCJdOmFmdGVyIHsgcmlnaHQ6IC0zMC43NDAwMDAwMDAwMDAwMDJweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjkyJVwiXTphZnRlciB7IHJpZ2h0OiAtMjguODgwMDAwMDAwMDAwMDAzcHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5MyVcIl06YWZ0ZXIgeyByaWdodDogLTI3LjAycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5NCVcIl06YWZ0ZXIgeyByaWdodDogLTI1LjE2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5NSVcIl06YWZ0ZXIgeyByaWdodDogLTIzLjNweCB9IC5wYWNlIC5wYWNlLXByb2dyZXNzW2RhdGEtcHJvZ3Jlc3MtdGV4dD1cIjk2JVwiXTphZnRlciB7IHJpZ2h0OiAtMjEuNDM5OTk5OTk5OTk5OTk4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5NyVcIl06YWZ0ZXIgeyByaWdodDogLTE5LjU4cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5OCVcIl06YWZ0ZXIgeyByaWdodDogLTE3LjcycHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCI5OSVcIl06YWZ0ZXIgeyByaWdodDogLTE1Ljg2cHggfSAucGFjZSAucGFjZS1wcm9ncmVzc1tkYXRhLXByb2dyZXNzLXRleHQ9XCIxMDAlXCJdOmFmdGVyIHsgcmlnaHQ6IC0xNHB4IH0gLnBhY2UgLnBhY2UtYWN0aXZpdHkgeyBwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDI4cHg7IHotaW5kZXg6IDIwMDE7IGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDJweCAjMjlkLCBpbnNldCAwIDAgMCA3cHggI0ZGRjsgYm9yZGVyLXJhZGl1czogMTBweDsgfSAucGFjZS5wYWNlLWluYWN0aXZlIHsgZGlzcGxheTogbm9uZTsgfVxuIl19 */");

/***/ }),

/***/ "./src/app/success/success.component.ts":
/*!**********************************************!*\
  !*** ./src/app/success/success.component.ts ***!
  \**********************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let SuccessComponent = class SuccessComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        if (sessionStorage.getItem("total") == null)
            this.router.navigate(["menu"]);
    }
    clearLocal() {
        sessionStorage.clear();
    }
};
SuccessComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
SuccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-success',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./success.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/success/success.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./success.component.css */ "./src/app/success/success.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], SuccessComponent);



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".body {\n  background: #393939;\n  color: white;\n  font: 14px Helvetica, sans-serif;\n}\n\np{\n  margin-left: 23%;\n}\n\ntable{\n  margin: auto;\n}\n\nimg{\n  width: 20%;\n  align-self: center;\n}\n\n.align-contents{\n  background-color: #393939;\n  width: 100%;\n}\n\ntd{\n  border-top: 0px;\n  color: #FFFFFF;\n}\n\nfont{\n  color: #FFFFFF;\n  font-size: 4vw;\n}\n\n.welcome{\n  color: white;\n}\n\nlabel {\n  font: bold 20px Helvetica, sans-serif;\n  display: block;\n  float: left;\n  text-align: right;\n  padding: 5px 10px 0 0;\n  width: 140px;\n}\n\nform div {\n  overflow: hidden;\n  margin: 0 0 5px 0;\n}\n\n.bigbutton {\n  border-radius: 4px;\n  background-color: #f4511e;\n  border: none;\n  color: #FFFFFF;\n  text-align: center;\n  font-size: 15px;\n  padding: 20px;\n  width: 120px;\n  -webkit-transition: all 0.5s;\n  transition: all 0.5s;\n  cursor: pointer;\n  margin: 5px;\n}\n\n.bigbutton span {\n  cursor: pointer;\n  display: inline-block;\n  position: relative;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton span:after {\n  content: '\\00bb';\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  right: -20px;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.bigbutton:hover span {\n  padding-right: 25px;\n}\n\n.bigbutton:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztBQUNiOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHFDQUFxQztFQUNyQyxjQUFjO0VBQ2QsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE1BQU07RUFDTixZQUFZO0VBQ1osd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib2R5IHtcbiAgYmFja2dyb3VuZDogIzM5MzkzOTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250OiAxNHB4IEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbn1cblxucHtcbiAgbWFyZ2luLWxlZnQ6IDIzJTtcbn1cblxudGFibGV7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuaW1ne1xuICB3aWR0aDogMjAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5hbGlnbi1jb250ZW50c3tcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM5MzkzOTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cblxudGR7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgY29sb3I6ICNGRkZGRkY7XG59XG5mb250e1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgZm9udC1zaXplOiA0dnc7XG59XG4ud2VsY29tZXtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5sYWJlbCB7XG4gIGZvbnQ6IGJvbGQgMjBweCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4IDAgMDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG5mb3JtIGRpdiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMCAwIDVweCAwO1xufVxuXG5cbi5iaWdidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNDUxMWU7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogMTIwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG1hcmdpbjogNXB4O1xufVxuXG4uYmlnYnV0dG9uIHNwYW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uYmlnYnV0dG9uIHNwYW46YWZ0ZXIge1xuICBjb250ZW50OiAnXFwwMGJiJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBvcGFjaXR5OiAwO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAtMjBweDtcbiAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMjVweDtcbn1cblxuLmJpZ2J1dHRvbjpob3ZlciBzcGFuOmFmdGVyIHtcbiAgb3BhY2l0eTogMTtcbiAgcmlnaHQ6IDA7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let WelcomeComponent = class WelcomeComponent {
    constructor(router) {
        this.router = router;
        this.modelUser = {
            username: '',
            password: '',
            email: '',
            phone: 0,
            firstname: '',
            lastname: '',
            address: '',
            merchant: null
        };
    }
    // user: User = AppComponent.modelUser;
    ngOnInit() {
        if (sessionStorage.getItem("userData") == null) {
            this.router.navigate(['login']);
        }
        let userData = JSON.parse(sessionStorage.getItem('userData'));
        console.log(userData);
        Object.assign(this.modelUser, userData);
    }
    clearLocal() {
        sessionStorage.clear();
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcom',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], WelcomeComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sjagarlamudi/Xwiggy-Angular8-SpringBoot-MVC-JPA-MYSQL/xwiggy-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);