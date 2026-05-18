"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.robotoSlab = exports.montserrat = exports.lato = exports.inter = void 0;
var _google = require("next/font/google");
var inter = exports.inter = (0, _google.Inter)({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});
var lato = exports.lato = (0, _google.Lato)({
  weight: ['100', '300', '400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap'
});
var montserrat = exports.montserrat = (0, _google.Montserrat)({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap'
});
var robotoSlab = exports.robotoSlab = (0, _google.Roboto_Slab)({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  display: 'swap'
});