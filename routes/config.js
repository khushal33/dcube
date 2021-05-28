var express = require('express');
var app = express.Router();


var indexRouter = require('./index');
var usersRouter = require('./users');
var businessplanRouter = require('./policies/business-plan');
var cancerinsurenceRouter = require('./policies/cancer-insurence');
var carRouter = require('./policies//car');
var childplanRouter = require('./policies/child-plan');
var criticalillenessRouter = require('./policies/critical-illness-insurance');
var familyhealthRouter = require('./policies/family-health-insurance');
var healthtopupRouter = require('./policies/health-top-up-plan');
var homeinsurenceRouter = require('./policies/home-insurence');
var investmentplansRouter = require('./policies/investment-plans');
var loginregisterRouter = require('./policies/login-register');
var pensionplansRouter = require('./policies/pension-plan');
var personalaccidentRouter = require('./policies/personal-accident');
var seniorcitizenRouter = require('./policies/senior-citizen-insurance');
var terminsurenceRouter = require('./policies/term-insurance');
var travelinsurenceRouter = require('./policies/travel-insurance');
var twowheelerRouter = require('./policies/two-wheeler');
var ulipplanRouter = require('./policies/ulip-plan');
var investRouter = require('./invest/mutual_funds/mutual_funds');


app.use('', indexRouter);
app.use('/business-plan',businessplanRouter);
app.use('/cancer-insurance',cancerinsurenceRouter);
app.use('/car',carRouter);
app.use('/child-plan',childplanRouter);
app.use('/critical-illness-insurance',criticalillenessRouter);
app.use('/family-health-insurance',familyhealthRouter);
app.use('/health-top-up-plan',healthtopupRouter);
app.use('/home-insurance',homeinsurenceRouter);
app.use('/investment-plans',investmentplansRouter);
app.use('/login-register',loginregisterRouter);
app.use('/pension-plan',pensionplansRouter);
app.use('/personal-accident',personalaccidentRouter);
app.use('/senior-citizen-insurance',seniorcitizenRouter);
app.use('/term-insurance',terminsurenceRouter);
app.use('/travel-insurance',travelinsurenceRouter);
app.use('/two-wheeler',twowheelerRouter);
app.use('/ulip-plan',ulipplanRouter);
app.use('/users', usersRouter);
app.use('/mutual_funds',investRouter);

module.exports = app;