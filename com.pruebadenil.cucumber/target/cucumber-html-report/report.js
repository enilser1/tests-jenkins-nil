$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ingresarpagina.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    }
  ],
  "line": 20,
  "name": "Title of your feature - Testeando Facebook smoke scenario",
  "description": "I want to use this template for my feature file - un poco mas de descripcion",
  "id": "title-of-your-feature---testeando-facebook-smoke-scenario",
  "keyword": "Feature",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "line": 24,
  "name": "Testeando con credenciales",
  "description": "",
  "id": "title-of-your-feature---testeando-facebook-smoke-scenario;testeando-con-credenciales",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Ingresamos a la pagina de facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Ingresamos \"\u003cnombre\u003e\" y la \"\u003ccontrasenia\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "deberia logear correctamente",
  "keyword": "Then "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "title-of-your-feature---testeando-facebook-smoke-scenario;testeando-con-credenciales;",
  "rows": [
    {
      "cells": [
        "nombre",
        "contrasenia"
      ],
      "line": 30,
      "id": "title-of-your-feature---testeando-facebook-smoke-scenario;testeando-con-credenciales;;1"
    },
    {
      "cells": [
        "scorpio_91x@hotmail.com",
        "15483822"
      ],
      "line": 31,
      "id": "title-of-your-feature---testeando-facebook-smoke-scenario;testeando-con-credenciales;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Testeando con credenciales",
  "description": "",
  "id": "title-of-your-feature---testeando-facebook-smoke-scenario;testeando-con-credenciales;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@tag"
    },
    {
      "line": 23,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "Ingresamos a la pagina de facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "Ingresamos \"scorpio_91x@hotmail.com\" y la \"15483822\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "deberia logear correctamente",
  "keyword": "Then "
});
formatter.match({
  "location": "Claseingresarpagina.ingresamos_a_la_pagina_de_facebook()"
});
formatter.result({
  "duration": 11991996653,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "scorpio_91x@hotmail.com",
      "offset": 12
    },
    {
      "val": "15483822",
      "offset": 43
    }
  ],
  "location": "Claseingresarpagina.ingresamos_y_la(String,String)"
});
formatter.result({
  "duration": 16053194307,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d70.0.3538.102)\n  (Driver info: chromedriver\u003d2.40.565498 (ea082db3280dd6843ebfb08a625e3eb905c4f5ab),platform\u003dWindows NT 6.1.7601 SP1 x86) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027HP-PC\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027x86\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_161\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.40.565498 (ea082db3280dd6..., userDataDir: C:\\Users\\HP\\AppData\\Local\\T...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 70.0.3538.102, webStorageEnabled: true}\nSession ID: 99eae6857d0a6e4fd4210f607e8a596b\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat definiciones.Claseingresarpagina.ingresamos_y_la(Claseingresarpagina.java:28)\r\n\tat ✽.When Ingresamos \"scorpio_91x@hotmail.com\" y la \"15483822\"(ingresarpagina.feature:26)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Claseingresarpagina.deberia_logear_correctamente()"
});
formatter.result({
  "status": "skipped"
});
});