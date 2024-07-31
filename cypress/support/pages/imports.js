import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import login from '../pages/login/loginPage';
import loginJson from '../../fixtures/login.json';
import loginSpec from '../../e2e/step_definitions/login/login.spec'
import cartSpec from '../../e2e/step_definitions/cart/cart.spec'
import inventory from '../pages/inventory/inventoryPage'
import information from '../pages/checkout/informationPage'
import infJson from '../../fixtures/information.json'

const loginElements = require('../pages/login/elements').LOGIN;
const inventoryElements = require('../pages/inventory/elements').INVENTORY;
const cartElements = require('../pages/cart/elements').CART;
const checkoutElements = require('../pages/checkout/elements').CHECKOUT;

export {    
            Given, When, Then,
            login, loginJson, loginElements, loginSpec,
            inventory, inventoryElements,     
            cartElements, cartSpec,
            information, infJson,
            checkoutElements

        };