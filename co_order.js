"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Patrick M. Capuano
   Date:   4.11.19
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function () {

      var orderForm = document.forms.orderForm;
      orderForm.elements.orderDate.value = new Date().toDateString();
      orderForm.elements.model.focus();

      // Calculate the cost of the order.
      calcOrder();

});

function calcOrder() {

      var orderForm = document.forms.orderForm;

      // Calculate the intial cost of the order. 
      var mIndex = orderForm.elements.model.selectedIndex;
      var mCost = orderForm.elements.model.option[mIndex].value;
      var qIndex = orderForm.elements.qty.selectedIndex;
      var quantity = orderForm.elements.qty[qIndex].value;

      // Initial cost = model cosst * quantity.
      var InitialCost = mCost * quantity;
      orderForm.elements.InitialCost.value = InitialCost;

      // Retrieve the cost of the user's protect 
      var pCost = document.querySelector('input[name="protection"]:checked').value * quantity;
      orderForm.elements.protectionCost.value = pCost;

}