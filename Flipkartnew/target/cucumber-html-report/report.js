$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("flipkartlogin.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: keshudwivedi17@gmail.com"
    }
  ],
  "line": 2,
  "name": "To test the login feature of flipkart website",
  "description": "",
  "id": "to-test-the-login-feature-of-flipkart-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4719866804,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to flipkart site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkartmaincode.i_launch_browser()"
});
formatter.result({
  "duration": 100590802,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_navigate_to_flipkart_site()"
});
formatter.result({
  "duration": 7166222819,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_click_on_login_link()"
});
formatter.result({
  "duration": 299337004,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_close_the_browser()"
});
formatter.result({
  "duration": 80803,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "To test login by blank submit",
  "description": "",
  "id": "to-test-the-login-feature-of-flipkart-website;to-test-login-by-blank-submit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I click on Submit button without entering any data",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkartmaincode.i_click_on_Submit_button_without_entering_any_data()"
});
formatter.result({
  "duration": 81277495,
  "status": "passed"
});
formatter.after({
  "duration": 5325548352,
  "status": "passed"
});
formatter.before({
  "duration": 3059530296,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to flipkart site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkartmaincode.i_launch_browser()"
});
formatter.result({
  "duration": 73251,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_navigate_to_flipkart_site()"
});
formatter.result({
  "duration": 4862220793,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_click_on_login_link()"
});
formatter.result({
  "duration": 170578603,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca class\u003d\"_2k0gmP\" href\u003d\"/account/login?ret\u003d/\" data-reactid\u003d\"29\"\u003e...\u003c/a\u003e is not clickable at point (1260, 14). Other element would receive the click: \u003cdiv data-reactroot\u003d\"\" class\u003d\"_2ISNhP _3AOFWO\" tabindex\u003d\"-1\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 92 milliseconds\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027KESHAVPC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HP\\AppData\\Local\\Temp\\scoped_dir10188_4861}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 0d5b31f1c704542f19fdc936e912e560\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat loginsteps.Flipkartmaincode.i_click_on_login_link(Flipkartmaincode.java:36)\r\n\tat ✽.When I click on login link(flipkartlogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Flipkartmaincode.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "To test login by entering phone only",
  "description": "",
  "id": "to-test-the-login-feature-of-flipkart-website;to-test-login-by-entering-phone-only",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I click on Submit button by entering phone number \"7388891758\" only",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7388891758",
      "offset": 51
    }
  ],
  "location": "Flipkartmaincode.i_click_on_Submit_button_by_entering_phone_number_only(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5087697518,
  "status": "passed"
});
formatter.before({
  "duration": 3278332886,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to flipkart site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkartmaincode.i_launch_browser()"
});
formatter.result({
  "duration": 113652,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_navigate_to_flipkart_site()"
});
formatter.result({
  "duration": 5211893599,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_click_on_login_link()"
});
formatter.result({
  "duration": 159202442,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_close_the_browser()"
});
formatter.result({
  "duration": 65699,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "To test login by entering Password only",
  "description": "",
  "id": "to-test-the-login-feature-of-flipkart-website;to-test-login-by-entering-password-only",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I click on Submit button by entering password \"123ram\" only",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123ram",
      "offset": 47
    }
  ],
  "location": "Flipkartmaincode.i_click_on_Submit_button_by_entering_password_only(String)"
});
formatter.result({
  "duration": 254958310,
  "status": "passed"
});
formatter.after({
  "duration": 5313414385,
  "status": "passed"
});
formatter.before({
  "duration": 3006029603,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to flipkart site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkartmaincode.i_launch_browser()"
});
formatter.result({
  "duration": 144236,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_navigate_to_flipkart_site()"
});
formatter.result({
  "duration": 4640951838,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_click_on_login_link()"
});
formatter.result({
  "duration": 172146700,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca class\u003d\"_2k0gmP\" href\u003d\"/account/login?ret\u003d/\" data-reactid\u003d\"29\"\u003e...\u003c/a\u003e is not clickable at point (1260, 14). Other element would receive the click: \u003cdiv data-reactroot\u003d\"\" class\u003d\"_2ISNhP _3AOFWO\" tabindex\u003d\"-1\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 118 milliseconds\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027KESHAVPC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HP\\AppData\\Local\\Temp\\scoped_dir5664_24689}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: 03fe0647d4346570abd187b5e6fa8324\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat loginsteps.Flipkartmaincode.i_click_on_login_link(Flipkartmaincode.java:36)\r\n\tat ✽.When I click on login link(flipkartlogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Flipkartmaincode.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 24,
  "name": "To test login by entering invalid credentials",
  "description": "",
  "id": "to-test-the-login-feature-of-flipkart-website;to-test-login-by-entering-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I click on submit button by entering Credentials \"7388891567\" and \"1234ram\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7388891567",
      "offset": 50
    },
    {
      "val": "1234ram",
      "offset": 67
    }
  ],
  "location": "Flipkartmaincode.i_click_on_submit_button_by_entering_Credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5318453591,
  "status": "passed"
});
formatter.before({
  "duration": 3313626586,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I launch browser",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I navigate to flipkart site",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "Flipkartmaincode.i_launch_browser()"
});
formatter.result({
  "duration": 50218,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_navigate_to_flipkart_site()"
});
formatter.result({
  "duration": 4814921880,
  "status": "passed"
});
formatter.match({
  "location": "Flipkartmaincode.i_click_on_login_link()"
});
formatter.result({
  "duration": 101684279,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Element \u003ca class\u003d\"_2k0gmP\" href\u003d\"/account/login?ret\u003d/\" data-reactid\u003d\"29\"\u003e...\u003c/a\u003e is not clickable at point (1260, 14). Other element would receive the click: \u003cdiv data-reactroot\u003d\"\" class\u003d\"_2ISNhP _3AOFWO\" tabindex\u003d\"-1\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d62.0.3202.94)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.15063 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 45 milliseconds\nBuild info: version: \u00273.1.0\u0027, revision: \u0027b94c902\u0027, time: \u00272017-02-16 12:21:31 -0800\u0027\nSystem info: host: \u0027KESHAVPC\u0027, ip: \u0027192.168.1.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_144\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f), userDataDir\u003dC:\\Users\\HP\\AppData\\Local\\Temp\\scoped_dir8336_1810}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d62.0.3202.94, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003d}]\nSession ID: a4480479d5af89cac45aee57533a7aa2\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:274)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat loginsteps.Flipkartmaincode.i_click_on_login_link(Flipkartmaincode.java:36)\r\n\tat ✽.When I click on login link(flipkartlogin.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Flipkartmaincode.i_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "To Test login by entering valid credentials",
  "description": "",
  "id": "to-test-the-login-feature-of-flipkart-website;to-test-login-by-entering-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I click on submit button by entering credentials \"7388891758\" and \"123sairam\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7388891758",
      "offset": 50
    },
    {
      "val": "123sairam",
      "offset": 67
    }
  ],
  "location": "Flipkartmaincode.i_click_on_submit_button_by_entering_credentials_and(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 5095771726,
  "status": "passed"
});
formatter.uri("flipkartsignup.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: keshudwivedi17@gmail.com"
    }
  ],
  "line": 2,
  "name": "To test the signup feature of flipkart",
  "description": "",
  "id": "to-test-the-signup-feature-of-flipkart",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3291458761,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to flipkart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Flipkart signup link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser instance",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupmaincode.i_open_a_browser()"
});
formatter.result({
  "duration": 155186,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_navigate_to_flipkart_homepage()"
});
formatter.result({
  "duration": 9901970712,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_click_on_Flipkart_signup_link()"
});
formatter.result({
  "duration": 186814240,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_close_the_browser_instance()"
});
formatter.result({
  "duration": 88731,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To test the signup by blank submit",
  "description": "",
  "id": "to-test-the-signup-feature-of-flipkart;to-test-the-signup-by-blank-submit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I click on signup button to validate blank submit",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupmaincode.i_click_on_signup_button_to_validate_blank_submit()"
});
formatter.result({
  "duration": 83317569,
  "status": "passed"
});
formatter.after({
  "duration": 5322815038,
  "status": "passed"
});
formatter.before({
  "duration": 3306474055,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to flipkart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Flipkart signup link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser instance",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupmaincode.i_open_a_browser()"
});
formatter.result({
  "duration": 57770,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_navigate_to_flipkart_homepage()"
});
formatter.result({
  "duration": 4836760455,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_click_on_Flipkart_signup_link()"
});
formatter.result({
  "duration": 192827985,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_close_the_browser_instance()"
});
formatter.result({
  "duration": 53239,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "To test the signup by entering invalid number",
  "description": "",
  "id": "to-test-the-signup-feature-of-flipkart;to-test-the-signup-by-entering-invalid-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I click on signup button by entering \"123456\" in signup field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 38
    }
  ],
  "location": "Signupmaincode.i_click_on_signup_button_by_entering_in_signup_field(String)"
});
formatter.result({
  "duration": 238226151,
  "status": "passed"
});
formatter.after({
  "duration": 5353096340,
  "status": "passed"
});
formatter.before({
  "duration": 3049516072,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to flipkart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Flipkart signup link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser instance",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupmaincode.i_open_a_browser()"
});
formatter.result({
  "duration": 83823,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_navigate_to_flipkart_homepage()"
});
formatter.result({
  "duration": 4584385559,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_click_on_Flipkart_signup_link()"
});
formatter.result({
  "duration": 254711748,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_close_the_browser_instance()"
});
formatter.result({
  "duration": 40779,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "To test the signup by entering registered number",
  "description": "",
  "id": "to-test-the-signup-feature-of-flipkart;to-test-the-signup-by-entering-registered-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I click on signup button by entering already registered number \"7388891758\" in signup field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7388891758",
      "offset": 64
    }
  ],
  "location": "Signupmaincode.i_click_on_signup_button_by_entering_already_registered_number_in_signup_field(String)"
});
formatter.result({
  "duration": 266571592,
  "status": "passed"
});
formatter.after({
  "duration": 5346583433,
  "status": "passed"
});
formatter.before({
  "duration": 3075879963,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I open a browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I navigate to flipkart homepage",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Flipkart signup link",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I close the browser instance",
  "keyword": "Then "
});
formatter.match({
  "location": "Signupmaincode.i_open_a_browser()"
});
formatter.result({
  "duration": 119316,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_navigate_to_flipkart_homepage()"
});
formatter.result({
  "duration": 4778876037,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_click_on_Flipkart_signup_link()"
});
formatter.result({
  "duration": 143367795,
  "status": "passed"
});
formatter.match({
  "location": "Signupmaincode.i_close_the_browser_instance()"
});
formatter.result({
  "duration": 49463,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "To test the signup by entering unregistered number",
  "description": "",
  "id": "to-test-the-signup-feature-of-flipkart;to-test-the-signup-by-entering-unregistered-number",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I click on signup button by entering unregistered number \"7905677777\" in signup field",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7905677777",
      "offset": 58
    }
  ],
  "location": "Signupmaincode.i_click_on_signup_button_by_entering_unregistered_number_in_signup_field(String)"
});
formatter.result({
  "duration": 270632861,
  "status": "passed"
});
formatter.after({
  "duration": 5091566221,
  "status": "passed"
});
});