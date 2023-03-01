["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/labs/useragent/browser.js"],"~:js","goog.loadModule(function(exports) {\n  \"use strict\";\n  goog.module(\"goog.labs.userAgent.browser\");\n  goog.module.declareLegacyNamespace();\n  const googArray = goog.require(\"goog.array\");\n  const googObject = goog.require(\"goog.object\");\n  const util = goog.require(\"goog.labs.userAgent.util\");\n  const {compareVersions} = goog.require(\"goog.string.internal\");\n  function useUserAgentBrand() {\n    const userAgentData = util.getUserAgentData();\n    return !!userAgentData && userAgentData.brands.length > 0;\n  }\n  function matchOpera() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Opera\");\n  }\n  function matchIE() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Trident\") || util.matchUserAgent(\"MSIE\");\n  }\n  function matchEdgeHtml() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Edge\");\n  }\n  function matchEdgeChromium() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Edge\");\n    }\n    return util.matchUserAgent(\"Edg/\");\n  }\n  function matchOperaChromium() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Opera\");\n    }\n    return util.matchUserAgent(\"OPR\");\n  }\n  function matchFirefox() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Firefox\");\n    }\n    return util.matchUserAgent(\"Firefox\") || util.matchUserAgent(\"FxiOS\");\n  }\n  function matchSafari() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Safari\");\n    }\n    return util.matchUserAgent(\"Safari\") && !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() || matchEdgeChromium() || matchOperaChromium() || matchFirefox() || isSilk() || util.matchUserAgent(\"Android\"));\n  }\n  function matchCoast() {\n    if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n      return false;\n    }\n    return util.matchUserAgent(\"Coast\");\n  }\n  function matchIosWebview() {\n    return (util.matchUserAgent(\"iPad\") || util.matchUserAgent(\"iPhone\")) && !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() && util.matchUserAgent(\"AppleWebKit\");\n  }\n  function matchChrome() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Chromium\");\n    }\n    return (util.matchUserAgent(\"Chrome\") || util.matchUserAgent(\"CriOS\")) && !matchEdgeHtml();\n  }\n  function matchAndroidBrowser() {\n    return util.matchUserAgent(\"Android\") && !(isChrome() || isFirefox() || isOpera() || isSilk());\n  }\n  const isOpera = matchOpera;\n  const isIE = matchIE;\n  const isEdge = matchEdgeHtml;\n  const isEdgeChromium = matchEdgeChromium;\n  const isOperaChromium = matchOperaChromium;\n  const isFirefox = matchFirefox;\n  const isSafari = matchSafari;\n  const isCoast = matchCoast;\n  const isIosWebview = matchIosWebview;\n  const isChrome = matchChrome;\n  const isAndroidBrowser = matchAndroidBrowser;\n  function isSilk() {\n    if (useUserAgentBrand()) {\n      return util.matchUserAgentDataBrand(\"Silk\");\n    }\n    return util.matchUserAgent(\"Silk\");\n  }\n  function getVersion() {\n    const userAgentString = util.getUserAgent();\n    if (isIE()) {\n      return getIEVersion(userAgentString);\n    }\n    const versionTuples = util.extractVersionTuples(userAgentString);\n    const versionMap = {};\n    versionTuples.forEach(tuple => {\n      const key = tuple[0];\n      const value = tuple[1];\n      versionMap[key] = value;\n    });\n    const versionMapHasKey = goog.partial(googObject.containsKey, versionMap);\n    function lookUpValueWithKeys(keys) {\n      const key = googArray.find(keys, versionMapHasKey);\n      return versionMap[key] || \"\";\n    }\n    if (isOpera()) {\n      return lookUpValueWithKeys([\"Version\", \"Opera\"]);\n    }\n    if (isEdge()) {\n      return lookUpValueWithKeys([\"Edge\"]);\n    }\n    if (isEdgeChromium()) {\n      return lookUpValueWithKeys([\"Edg\"]);\n    }\n    if (isChrome()) {\n      return lookUpValueWithKeys([\"Chrome\", \"CriOS\", \"HeadlessChrome\"]);\n    }\n    const tuple = versionTuples[2];\n    return tuple && tuple[1] || \"\";\n  }\n  function isVersionOrHigher(version) {\n    return compareVersions(getVersion(), version) >= 0;\n  }\n  function getIEVersion(userAgent) {\n    const rv = /rv: *([\\d\\.]*)/.exec(userAgent);\n    if (rv && rv[1]) {\n      return rv[1];\n    }\n    let version = \"\";\n    const msie = /MSIE +([\\d\\.]+)/.exec(userAgent);\n    if (msie && msie[1]) {\n      const tridentVersion = /Trident\\/(\\d.\\d)/.exec(userAgent);\n      if (msie[1] == \"7.0\") {\n        if (tridentVersion && tridentVersion[1]) {\n          switch(tridentVersion[1]) {\n            case \"4.0\":\n              version = \"8.0\";\n              break;\n            case \"5.0\":\n              version = \"9.0\";\n              break;\n            case \"6.0\":\n              version = \"10.0\";\n              break;\n            case \"7.0\":\n              version = \"11.0\";\n              break;\n          }\n        } else {\n          version = \"7.0\";\n        }\n      } else {\n        version = msie[1];\n      }\n    }\n    return version;\n  }\n  exports = {getVersion, isAndroidBrowser, isChrome, isCoast, isEdge, isEdgeChromium, isFirefox, isIE, isIosWebview, isOpera, isOperaChromium, isSafari, isSilk, isVersionOrHigher,};\n  return exports;\n});\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Closure user agent detection (Browser).\n * @see <a href=\"http://www.useragentstring.com/\">User agent strings</a>\n * For more information on rendering engine, platform, or device see the other\n * sub-namespaces in goog.labs.userAgent, goog.labs.userAgent.platform,\n * goog.labs.userAgent.device respectively.)\n */\n\ngoog.module('goog.labs.userAgent.browser');\ngoog.module.declareLegacyNamespace();\n\nconst googArray = goog.require('goog.array');\nconst googObject = goog.require('goog.object');\nconst util = goog.require('goog.labs.userAgent.util');\nconst {compareVersions} = goog.require('goog.string.internal');\n\n// TODO(nnaze): Refactor to remove excessive exclusion logic in matching\n// functions.\n\n/**\n * @return {boolean} Whether to use navigator.userAgentData to determine\n * browser's brand.\n */\nfunction useUserAgentBrand() {\n  const userAgentData = util.getUserAgentData();\n  return !!userAgentData && userAgentData.brands.length > 0;\n}\n\n/**\n * @return {boolean} Whether the user's browser is Opera. Note: Chromium based\n *     Opera (Opera 15+) is detected as Chrome to avoid unnecessary special\n *     casing.\n */\nfunction matchOpera() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for non Chromium based Opera.\n    return false;\n  }\n  return util.matchUserAgent('Opera');\n}\n\n/** @return {boolean} Whether the user's browser is IE. */\nfunction matchIE() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for IE.\n    return false;\n  }\n  return util.matchUserAgent('Trident') || util.matchUserAgent('MSIE');\n}\n\n/**\n * @return {boolean} Whether the user's browser is Edge. This refers to\n *     EdgeHTML based Edge.\n */\nfunction matchEdgeHtml() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for non chromium based Edge.\n    return false;\n  }\n  return util.matchUserAgent('Edge');\n}\n\n/** @return {boolean} Whether the user's browser is Chromium based Edge. */\nfunction matchEdgeChromium() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Edge');\n  }\n  return util.matchUserAgent('Edg/');\n}\n\n/** @return {boolean} Whether the user's browser is Chromium based Opera. */\nfunction matchOperaChromium() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Opera');\n  }\n  return util.matchUserAgent('OPR');\n}\n\n/** @return {boolean} Whether the user's browser is Firefox. */\nfunction matchFirefox() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Firefox');\n  }\n  return util.matchUserAgent('Firefox') || util.matchUserAgent('FxiOS');\n}\n\n/** @return {boolean} Whether the user's browser is Safari. */\nfunction matchSafari() {\n  if (useUserAgentBrand()) {\n    // This will always be false before Safari adopt the Client Hint support.\n    return util.matchUserAgentDataBrand('Safari');\n  }\n  return util.matchUserAgent('Safari') &&\n      !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() ||\n        matchEdgeChromium() || matchOperaChromium() || matchFirefox() ||\n        isSilk() || util.matchUserAgent('Android'));\n}\n\n/**\n * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based\n *     iOS browser).\n */\nfunction matchCoast() {\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\n    // This will remain false for Coast.\n    return false;\n  }\n  return util.matchUserAgent('Coast');\n}\n\n/** @return {boolean} Whether the user's browser is iOS Webview. */\nfunction matchIosWebview() {\n  // iOS Webview does not show up as Chrome or Safari. Also check for Opera's\n  // WebKit-based iOS browser, Coast.\n  return (util.matchUserAgent('iPad') || util.matchUserAgent('iPhone')) &&\n      !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() &&\n      util.matchUserAgent('AppleWebKit');\n}\n\n/**\n * @return {boolean} Whether the user's browser is any Chromium browser. This\n *     returns true for Chrome, Opera 15+, and Edge Chromium.\n */\nfunction matchChrome() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Chromium');\n  }\n  return (util.matchUserAgent('Chrome') || util.matchUserAgent('CriOS')) &&\n      !matchEdgeHtml();\n}\n\n/** @return {boolean} Whether the user's browser is the Android browser. */\nfunction matchAndroidBrowser() {\n  // Android can appear in the user agent string for Chrome on Android.\n  // This is not the Android standalone browser if it does.\n  return util.matchUserAgent('Android') &&\n      !(isChrome() || isFirefox() || isOpera() || isSilk());\n}\n\n/** @return {boolean} Whether the user's browser is Opera. */\nconst isOpera = matchOpera;\n\n/** @return {boolean} Whether the user's browser is IE. */\nconst isIE = matchIE;\n\n/** @return {boolean} Whether the user's browser is EdgeHTML based Edge. */\nconst isEdge = matchEdgeHtml;\n\n/** @return {boolean} Whether the user's browser is Chromium based Edge. */\nconst isEdgeChromium = matchEdgeChromium;\n\n/** @return {boolean} Whether the user's browser is Chromium based Opera. */\nconst isOperaChromium = matchOperaChromium;\n\n/** @return {boolean} Whether the user's browser is Firefox. */\nconst isFirefox = matchFirefox;\n\n/** @return {boolean} Whether the user's browser is Safari. */\nconst isSafari = matchSafari;\n\n/**\n * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based\n *     iOS browser).\n */\nconst isCoast = matchCoast;\n\n/** @return {boolean} Whether the user's browser is iOS Webview. */\nconst isIosWebview = matchIosWebview;\n\n/**\n * @return {boolean} Whether the user's browser is any Chromium based browser (\n *     Chrome, Blink-based Opera (15+) and Edge Chromium).\n */\nconst isChrome = matchChrome;\n\n/** @return {boolean} Whether the user's browser is the Android browser. */\nconst isAndroidBrowser = matchAndroidBrowser;\n\n/**\n * For more information, see:\n * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html\n * @return {boolean} Whether the user's browser is Silk.\n */\nfunction isSilk() {\n  if (useUserAgentBrand()) {\n    return util.matchUserAgentDataBrand('Silk');\n  }\n  return util.matchUserAgent('Silk');\n}\n\n/**\n * @return {string} The browser version or empty string if version cannot be\n *     determined. Note that for Internet Explorer, this returns the version of\n *     the browser, not the version of the rendering engine. (IE 8 in\n *     compatibility mode will return 8.0 rather than 7.0. To determine the\n *     rendering engine version, look at document.documentMode instead. See\n *     http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more\n *     details.)\n */\nfunction getVersion() {\n  const userAgentString = util.getUserAgent();\n  // Special case IE since IE's version is inside the parenthesis and\n  // without the '/'.\n  if (isIE()) {\n    return getIEVersion(userAgentString);\n  }\n\n  const versionTuples = util.extractVersionTuples(userAgentString);\n\n  // Construct a map for easy lookup.\n  const versionMap = {};\n  versionTuples.forEach((tuple) => {\n    // Note that the tuple is of length three, but we only care about the\n    // first two.\n    const key = tuple[0];\n    const value = tuple[1];\n    versionMap[key] = value;\n  });\n\n  const versionMapHasKey = goog.partial(googObject.containsKey, versionMap);\n\n  // Gives the value with the first key it finds, otherwise empty string.\n  function lookUpValueWithKeys(keys) {\n    const key = googArray.find(keys, versionMapHasKey);\n    return versionMap[key] || '';\n  }\n\n  // Check Opera before Chrome since Opera 15+ has \"Chrome\" in the string.\n  // See\n  // http://my.opera.com/ODIN/blog/2013/07/15/opera-user-agent-strings-opera-15-and-beyond\n  if (isOpera()) {\n    // Opera 10 has Version/10.0 but Opera/9.8, so look for \"Version\" first.\n    // Opera uses 'OPR' for more recent UAs.\n    return lookUpValueWithKeys(['Version', 'Opera']);\n  }\n\n  // Check Edge before Chrome since it has Chrome in the string.\n  if (isEdge()) {\n    return lookUpValueWithKeys(['Edge']);\n  }\n\n  // Check Chromium Edge before Chrome since it has Chrome in the string.\n  if (isEdgeChromium()) {\n    return lookUpValueWithKeys(['Edg']);\n  }\n\n  if (isChrome()) {\n    return lookUpValueWithKeys(['Chrome', 'CriOS', 'HeadlessChrome']);\n  }\n\n  // Usually products browser versions are in the third tuple after \"Mozilla\"\n  // and the engine.\n  const tuple = versionTuples[2];\n  return tuple && tuple[1] || '';\n}\n\n/**\n * @param {string|number} version The version to check.\n * @return {boolean} Whether the browser version is higher or the same as the\n *     given version.\n */\nfunction isVersionOrHigher(version) {\n  return compareVersions(getVersion(), version) >= 0;\n}\n\n/**\n * Determines IE version. More information:\n * http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx#uaString\n * http://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx\n * http://blogs.msdn.com/b/ie/archive/2010/03/23/introducing-ie9-s-user-agent-string.aspx\n * http://blogs.msdn.com/b/ie/archive/2009/01/09/the-internet-explorer-8-user-agent-string-updated-edition.aspx\n * @param {string} userAgent the User-Agent.\n * @return {string}\n */\nfunction getIEVersion(userAgent) {\n  // IE11 may identify itself as MSIE 9.0 or MSIE 10.0 due to an IE 11 upgrade\n  // bug. Example UA:\n  // Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; rv:11.0)\n  // like Gecko.\n  // See http://www.whatismybrowser.com/developers/unknown-user-agent-fragments.\n  const rv = /rv: *([\\d\\.]*)/.exec(userAgent);\n  if (rv && rv[1]) {\n    return rv[1];\n  }\n\n  let version = '';\n  const msie = /MSIE +([\\d\\.]+)/.exec(userAgent);\n  if (msie && msie[1]) {\n    // IE in compatibility mode usually identifies itself as MSIE 7.0; in this\n    // case, use the Trident version to determine the version of IE. For more\n    // details, see the links above.\n    const tridentVersion = /Trident\\/(\\d.\\d)/.exec(userAgent);\n    if (msie[1] == '7.0') {\n      if (tridentVersion && tridentVersion[1]) {\n        switch (tridentVersion[1]) {\n          case '4.0':\n            version = '8.0';\n            break;\n          case '5.0':\n            version = '9.0';\n            break;\n          case '6.0':\n            version = '10.0';\n            break;\n          case '7.0':\n            version = '11.0';\n            break;\n        }\n      } else {\n        version = '7.0';\n      }\n    } else {\n      version = msie[1];\n    }\n  }\n  return version;\n}\n\nexports = {\n  getVersion,\n  isAndroidBrowser,\n  isChrome,\n  isCoast,\n  isEdge,\n  isEdgeChromium,\n  isFirefox,\n  isIE,\n  isIosWebview,\n  isOpera,\n  isOperaChromium,\n  isSafari,\n  isSilk,\n  isVersionOrHigher,\n};\n","~:compiled-at",1677217914820,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.labs.useragent.browser.js\",\n\"lineCount\":162,\n\"mappings\":\"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\",\n\"sources\":[\"goog/labs/useragent/browser.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Closure user agent detection (Browser).\\n * @see <a href=\\\"http://www.useragentstring.com/\\\">User agent strings</a>\\n * For more information on rendering engine, platform, or device see the other\\n * sub-namespaces in goog.labs.userAgent, goog.labs.userAgent.platform,\\n * goog.labs.userAgent.device respectively.)\\n */\\n\\ngoog.module('goog.labs.userAgent.browser');\\ngoog.module.declareLegacyNamespace();\\n\\nconst googArray = goog.require('goog.array');\\nconst googObject = goog.require('goog.object');\\nconst util = goog.require('goog.labs.userAgent.util');\\nconst {compareVersions} = goog.require('goog.string.internal');\\n\\n// TODO(nnaze): Refactor to remove excessive exclusion logic in matching\\n// functions.\\n\\n/**\\n * @return {boolean} Whether to use navigator.userAgentData to determine\\n * browser's brand.\\n */\\nfunction useUserAgentBrand() {\\n  const userAgentData = util.getUserAgentData();\\n  return !!userAgentData && userAgentData.brands.length > 0;\\n}\\n\\n/**\\n * @return {boolean} Whether the user's browser is Opera. Note: Chromium based\\n *     Opera (Opera 15+) is detected as Chrome to avoid unnecessary special\\n *     casing.\\n */\\nfunction matchOpera() {\\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\\n    // This will remain false for non Chromium based Opera.\\n    return false;\\n  }\\n  return util.matchUserAgent('Opera');\\n}\\n\\n/** @return {boolean} Whether the user's browser is IE. */\\nfunction matchIE() {\\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\\n    // This will remain false for IE.\\n    return false;\\n  }\\n  return util.matchUserAgent('Trident') || util.matchUserAgent('MSIE');\\n}\\n\\n/**\\n * @return {boolean} Whether the user's browser is Edge. This refers to\\n *     EdgeHTML based Edge.\\n */\\nfunction matchEdgeHtml() {\\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\\n    // This will remain false for non chromium based Edge.\\n    return false;\\n  }\\n  return util.matchUserAgent('Edge');\\n}\\n\\n/** @return {boolean} Whether the user's browser is Chromium based Edge. */\\nfunction matchEdgeChromium() {\\n  if (useUserAgentBrand()) {\\n    return util.matchUserAgentDataBrand('Edge');\\n  }\\n  return util.matchUserAgent('Edg/');\\n}\\n\\n/** @return {boolean} Whether the user's browser is Chromium based Opera. */\\nfunction matchOperaChromium() {\\n  if (useUserAgentBrand()) {\\n    return util.matchUserAgentDataBrand('Opera');\\n  }\\n  return util.matchUserAgent('OPR');\\n}\\n\\n/** @return {boolean} Whether the user's browser is Firefox. */\\nfunction matchFirefox() {\\n  if (useUserAgentBrand()) {\\n    return util.matchUserAgentDataBrand('Firefox');\\n  }\\n  return util.matchUserAgent('Firefox') || util.matchUserAgent('FxiOS');\\n}\\n\\n/** @return {boolean} Whether the user's browser is Safari. */\\nfunction matchSafari() {\\n  if (useUserAgentBrand()) {\\n    // This will always be false before Safari adopt the Client Hint support.\\n    return util.matchUserAgentDataBrand('Safari');\\n  }\\n  return util.matchUserAgent('Safari') &&\\n      !(matchChrome() || matchCoast() || matchOpera() || matchEdgeHtml() ||\\n        matchEdgeChromium() || matchOperaChromium() || matchFirefox() ||\\n        isSilk() || util.matchUserAgent('Android'));\\n}\\n\\n/**\\n * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based\\n *     iOS browser).\\n */\\nfunction matchCoast() {\\n  if (util.ASSUME_CLIENT_HINTS_SUPPORT || util.getUserAgentData()) {\\n    // This will remain false for Coast.\\n    return false;\\n  }\\n  return util.matchUserAgent('Coast');\\n}\\n\\n/** @return {boolean} Whether the user's browser is iOS Webview. */\\nfunction matchIosWebview() {\\n  // iOS Webview does not show up as Chrome or Safari. Also check for Opera's\\n  // WebKit-based iOS browser, Coast.\\n  return (util.matchUserAgent('iPad') || util.matchUserAgent('iPhone')) &&\\n      !matchSafari() && !matchChrome() && !matchCoast() && !matchFirefox() &&\\n      util.matchUserAgent('AppleWebKit');\\n}\\n\\n/**\\n * @return {boolean} Whether the user's browser is any Chromium browser. This\\n *     returns true for Chrome, Opera 15+, and Edge Chromium.\\n */\\nfunction matchChrome() {\\n  if (useUserAgentBrand()) {\\n    return util.matchUserAgentDataBrand('Chromium');\\n  }\\n  return (util.matchUserAgent('Chrome') || util.matchUserAgent('CriOS')) &&\\n      !matchEdgeHtml();\\n}\\n\\n/** @return {boolean} Whether the user's browser is the Android browser. */\\nfunction matchAndroidBrowser() {\\n  // Android can appear in the user agent string for Chrome on Android.\\n  // This is not the Android standalone browser if it does.\\n  return util.matchUserAgent('Android') &&\\n      !(isChrome() || isFirefox() || isOpera() || isSilk());\\n}\\n\\n/** @return {boolean} Whether the user's browser is Opera. */\\nconst isOpera = matchOpera;\\n\\n/** @return {boolean} Whether the user's browser is IE. */\\nconst isIE = matchIE;\\n\\n/** @return {boolean} Whether the user's browser is EdgeHTML based Edge. */\\nconst isEdge = matchEdgeHtml;\\n\\n/** @return {boolean} Whether the user's browser is Chromium based Edge. */\\nconst isEdgeChromium = matchEdgeChromium;\\n\\n/** @return {boolean} Whether the user's browser is Chromium based Opera. */\\nconst isOperaChromium = matchOperaChromium;\\n\\n/** @return {boolean} Whether the user's browser is Firefox. */\\nconst isFirefox = matchFirefox;\\n\\n/** @return {boolean} Whether the user's browser is Safari. */\\nconst isSafari = matchSafari;\\n\\n/**\\n * @return {boolean} Whether the user's browser is Coast (Opera's Webkit-based\\n *     iOS browser).\\n */\\nconst isCoast = matchCoast;\\n\\n/** @return {boolean} Whether the user's browser is iOS Webview. */\\nconst isIosWebview = matchIosWebview;\\n\\n/**\\n * @return {boolean} Whether the user's browser is any Chromium based browser (\\n *     Chrome, Blink-based Opera (15+) and Edge Chromium).\\n */\\nconst isChrome = matchChrome;\\n\\n/** @return {boolean} Whether the user's browser is the Android browser. */\\nconst isAndroidBrowser = matchAndroidBrowser;\\n\\n/**\\n * For more information, see:\\n * http://docs.aws.amazon.com/silk/latest/developerguide/user-agent.html\\n * @return {boolean} Whether the user's browser is Silk.\\n */\\nfunction isSilk() {\\n  if (useUserAgentBrand()) {\\n    return util.matchUserAgentDataBrand('Silk');\\n  }\\n  return util.matchUserAgent('Silk');\\n}\\n\\n/**\\n * @return {string} The browser version or empty string if version cannot be\\n *     determined. Note that for Internet Explorer, this returns the version of\\n *     the browser, not the version of the rendering engine. (IE 8 in\\n *     compatibility mode will return 8.0 rather than 7.0. To determine the\\n *     rendering engine version, look at document.documentMode instead. See\\n *     http://msdn.microsoft.com/en-us/library/cc196988(v=vs.85).aspx for more\\n *     details.)\\n */\\nfunction getVersion() {\\n  const userAgentString = util.getUserAgent();\\n  // Special case IE since IE's version is inside the parenthesis and\\n  // without the '/'.\\n  if (isIE()) {\\n    return getIEVersion(userAgentString);\\n  }\\n\\n  const versionTuples = util.extractVersionTuples(userAgentString);\\n\\n  // Construct a map for easy lookup.\\n  const versionMap = {};\\n  versionTuples.forEach((tuple) => {\\n    // Note that the tuple is of length three, but we only care about the\\n    // first two.\\n    const key = tuple[0];\\n    const value = tuple[1];\\n    versionMap[key] = value;\\n  });\\n\\n  const versionMapHasKey = goog.partial(googObject.containsKey, versionMap);\\n\\n  // Gives the value with the first key it finds, otherwise empty string.\\n  function lookUpValueWithKeys(keys) {\\n    const key = googArray.find(keys, versionMapHasKey);\\n    return versionMap[key] || '';\\n  }\\n\\n  // Check Opera before Chrome since Opera 15+ has \\\"Chrome\\\" in the string.\\n  // See\\n  // http://my.opera.com/ODIN/blog/2013/07/15/opera-user-agent-strings-opera-15-and-beyond\\n  if (isOpera()) {\\n    // Opera 10 has Version/10.0 but Opera/9.8, so look for \\\"Version\\\" first.\\n    // Opera uses 'OPR' for more recent UAs.\\n    return lookUpValueWithKeys(['Version', 'Opera']);\\n  }\\n\\n  // Check Edge before Chrome since it has Chrome in the string.\\n  if (isEdge()) {\\n    return lookUpValueWithKeys(['Edge']);\\n  }\\n\\n  // Check Chromium Edge before Chrome since it has Chrome in the string.\\n  if (isEdgeChromium()) {\\n    return lookUpValueWithKeys(['Edg']);\\n  }\\n\\n  if (isChrome()) {\\n    return lookUpValueWithKeys(['Chrome', 'CriOS', 'HeadlessChrome']);\\n  }\\n\\n  // Usually products browser versions are in the third tuple after \\\"Mozilla\\\"\\n  // and the engine.\\n  const tuple = versionTuples[2];\\n  return tuple && tuple[1] || '';\\n}\\n\\n/**\\n * @param {string|number} version The version to check.\\n * @return {boolean} Whether the browser version is higher or the same as the\\n *     given version.\\n */\\nfunction isVersionOrHigher(version) {\\n  return compareVersions(getVersion(), version) >= 0;\\n}\\n\\n/**\\n * Determines IE version. More information:\\n * http://msdn.microsoft.com/en-us/library/ie/bg182625(v=vs.85).aspx#uaString\\n * http://msdn.microsoft.com/en-us/library/hh869301(v=vs.85).aspx\\n * http://blogs.msdn.com/b/ie/archive/2010/03/23/introducing-ie9-s-user-agent-string.aspx\\n * http://blogs.msdn.com/b/ie/archive/2009/01/09/the-internet-explorer-8-user-agent-string-updated-edition.aspx\\n * @param {string} userAgent the User-Agent.\\n * @return {string}\\n */\\nfunction getIEVersion(userAgent) {\\n  // IE11 may identify itself as MSIE 9.0 or MSIE 10.0 due to an IE 11 upgrade\\n  // bug. Example UA:\\n  // Mozilla/5.0 (MSIE 9.0; Windows NT 6.1; WOW64; Trident/7.0; rv:11.0)\\n  // like Gecko.\\n  // See http://www.whatismybrowser.com/developers/unknown-user-agent-fragments.\\n  const rv = /rv: *([\\\\d\\\\.]*)/.exec(userAgent);\\n  if (rv && rv[1]) {\\n    return rv[1];\\n  }\\n\\n  let version = '';\\n  const msie = /MSIE +([\\\\d\\\\.]+)/.exec(userAgent);\\n  if (msie && msie[1]) {\\n    // IE in compatibility mode usually identifies itself as MSIE 7.0; in this\\n    // case, use the Trident version to determine the version of IE. For more\\n    // details, see the links above.\\n    const tridentVersion = /Trident\\\\/(\\\\d.\\\\d)/.exec(userAgent);\\n    if (msie[1] == '7.0') {\\n      if (tridentVersion && tridentVersion[1]) {\\n        switch (tridentVersion[1]) {\\n          case '4.0':\\n            version = '8.0';\\n            break;\\n          case '5.0':\\n            version = '9.0';\\n            break;\\n          case '6.0':\\n            version = '10.0';\\n            break;\\n          case '7.0':\\n            version = '11.0';\\n            break;\\n        }\\n      } else {\\n        version = '7.0';\\n      }\\n    } else {\\n      version = msie[1];\\n    }\\n  }\\n  return version;\\n}\\n\\nexports = {\\n  getVersion,\\n  isAndroidBrowser,\\n  isChrome,\\n  isCoast,\\n  isEdge,\\n  isEdgeChromium,\\n  isFirefox,\\n  isIE,\\n  isIosWebview,\\n  isOpera,\\n  isOperaChromium,\\n  isSafari,\\n  isSilk,\\n  isVersionOrHigher,\\n};\\n\"],\n\"names\":[\"goog\",\"module\",\"declareLegacyNamespace\",\"googArray\",\"require\",\"googObject\",\"util\",\"compareVersions\",\"useUserAgentBrand\",\"userAgentData\",\"getUserAgentData\",\"brands\",\"length\",\"matchOpera\",\"ASSUME_CLIENT_HINTS_SUPPORT\",\"matchUserAgent\",\"matchIE\",\"matchEdgeHtml\",\"matchEdgeChromium\",\"matchUserAgentDataBrand\",\"matchOperaChromium\",\"matchFirefox\",\"matchSafari\",\"matchChrome\",\"matchCoast\",\"isSilk\",\"matchIosWebview\",\"matchAndroidBrowser\",\"isChrome\",\"isFirefox\",\"isOpera\",\"isIE\",\"isEdge\",\"isEdgeChromium\",\"isOperaChromium\",\"isSafari\",\"isCoast\",\"isIosWebview\",\"isAndroidBrowser\",\"getVersion\",\"userAgentString\",\"getUserAgent\",\"getIEVersion\",\"versionTuples\",\"extractVersionTuples\",\"versionMap\",\"forEach\",\"tuple\",\"key\",\"value\",\"versionMapHasKey\",\"partial\",\"containsKey\",\"lookUpValueWithKeys\",\"keys\",\"find\",\"isVersionOrHigher\",\"version\",\"userAgent\",\"rv\",\"exec\",\"msie\",\"tridentVersion\",\"exports\"]\n}\n"]