["^ ","~:resource-id",["~:shadow.build.classpath/resource","goog/async/freelist.js"],"~:js","goog.provide(\"goog.async.FreeList\");\ngoog.async.FreeList = class {\n  constructor(create, reset, limit) {\n    this.limit_ = limit;\n    this.create_ = create;\n    this.reset_ = reset;\n    this.occupants_ = 0;\n    this.head_ = null;\n  }\n  get() {\n    let item;\n    if (this.occupants_ > 0) {\n      this.occupants_--;\n      item = this.head_;\n      this.head_ = item.next;\n      item.next = null;\n    } else {\n      item = this.create_();\n    }\n    return item;\n  }\n  put(item) {\n    this.reset_(item);\n    if (this.occupants_ < this.limit_) {\n      this.occupants_++;\n      item.next = this.head_;\n      this.head_ = item;\n    }\n  }\n  occupants() {\n    return this.occupants_;\n  }\n};\n","~:source","/**\n * @license\n * Copyright The Closure Library Authors.\n * SPDX-License-Identifier: Apache-2.0\n */\n\n/**\n * @fileoverview Simple freelist.\n *\n * An anterative to goog.structs.SimplePool, it imposes the requirement that the\n * objects in the list contain a \"next\" property that can be used to maintain\n * the pool.\n */\n\ngoog.provide('goog.async.FreeList');\n\n\n/**\n * @template ITEM\n */\ngoog.async.FreeList = class {\n  /**\n   * @param {function():ITEM} create\n   * @param {function(ITEM):void} reset\n   * @param {number} limit\n   */\n  constructor(create, reset, limit) {\n    /** @private @const {number} */\n    this.limit_ = limit;\n    /** @private @const {function()} */\n    this.create_ = create;\n    /** @private @const {function(ITEM):void} */\n    this.reset_ = reset;\n\n    /** @private {number} */\n    this.occupants_ = 0;\n    /** @private {ITEM} */\n    this.head_ = null;\n  }\n\n  /**\n   * @return {ITEM}\n   */\n  get() {\n    let item;\n    if (this.occupants_ > 0) {\n      this.occupants_--;\n      item = this.head_;\n      this.head_ = item.next;\n      item.next = null;\n    } else {\n      item = this.create_();\n    }\n    return item;\n  }\n\n  /**\n   * @param {ITEM} item An item available for possible future reuse.\n   */\n  put(item) {\n    this.reset_(item);\n    if (this.occupants_ < this.limit_) {\n      this.occupants_++;\n      item.next = this.head_;\n      this.head_ = item;\n    }\n  }\n\n  /**\n   * Visible for testing.\n   * @package\n   * @return {number}\n   */\n  occupants() {\n    return this.occupants_;\n  }\n};\n","~:compiled-at",1677225285965,"~:source-map-json","{\n\"version\":3,\n\"file\":\"goog.async.freelist.js\",\n\"lineCount\":34,\n\"mappings\":\"AAcAA,IAAKC,CAAAA,OAAL,CAAa,qBAAb,CAAA;AAMAD,IAAKE,CAAAA,KAAMC,CAAAA,QAAX,GAAsB,KAAA;AAMpBC,aAAW,CAACC,MAAD,EAASC,KAAT,EAAgBC,KAAhB,CAAuB;AAEhC,QAAKC,CAAAA,MAAL,GAAcD,KAAd;AAEA,QAAKE,CAAAA,OAAL,GAAeJ,MAAf;AAEA,QAAKK,CAAAA,MAAL,GAAcJ,KAAd;AAGA,QAAKK,CAAAA,UAAL,GAAkB,CAAlB;AAEA,QAAKC,CAAAA,KAAL,GAAa,IAAb;AAXgC;AAiBlCC,KAAG,EAAG;AACJ,QAAIC,IAAJ;AACA,QAAI,IAAKH,CAAAA,UAAT,GAAsB,CAAtB,CAAyB;AACvB,UAAKA,CAAAA,UAAL,EAAA;AACAG,UAAA,GAAO,IAAKF,CAAAA,KAAZ;AACA,UAAKA,CAAAA,KAAL,GAAaE,IAAKC,CAAAA,IAAlB;AACAD,UAAKC,CAAAA,IAAL,GAAY,IAAZ;AAJuB,KAAzB;AAMED,UAAA,GAAO,IAAKL,CAAAA,OAAL,EAAP;AANF;AAQA,WAAOK,IAAP;AAVI;AAgBNE,KAAG,CAACF,IAAD,CAAO;AACR,QAAKJ,CAAAA,MAAL,CAAYI,IAAZ,CAAA;AACA,QAAI,IAAKH,CAAAA,UAAT,GAAsB,IAAKH,CAAAA,MAA3B,CAAmC;AACjC,UAAKG,CAAAA,UAAL,EAAA;AACAG,UAAKC,CAAAA,IAAL,GAAY,IAAKH,CAAAA,KAAjB;AACA,UAAKA,CAAAA,KAAL,GAAaE,IAAb;AAHiC;AAF3B;AAcVG,WAAS,EAAG;AACV,WAAO,IAAKN,CAAAA,UAAZ;AADU;AArDQ,CAAtB;;\",\n\"sources\":[\"goog/async/freelist.js\"],\n\"sourcesContent\":[\"/**\\n * @license\\n * Copyright The Closure Library Authors.\\n * SPDX-License-Identifier: Apache-2.0\\n */\\n\\n/**\\n * @fileoverview Simple freelist.\\n *\\n * An anterative to goog.structs.SimplePool, it imposes the requirement that the\\n * objects in the list contain a \\\"next\\\" property that can be used to maintain\\n * the pool.\\n */\\n\\ngoog.provide('goog.async.FreeList');\\n\\n\\n/**\\n * @template ITEM\\n */\\ngoog.async.FreeList = class {\\n  /**\\n   * @param {function():ITEM} create\\n   * @param {function(ITEM):void} reset\\n   * @param {number} limit\\n   */\\n  constructor(create, reset, limit) {\\n    /** @private @const {number} */\\n    this.limit_ = limit;\\n    /** @private @const {function()} */\\n    this.create_ = create;\\n    /** @private @const {function(ITEM):void} */\\n    this.reset_ = reset;\\n\\n    /** @private {number} */\\n    this.occupants_ = 0;\\n    /** @private {ITEM} */\\n    this.head_ = null;\\n  }\\n\\n  /**\\n   * @return {ITEM}\\n   */\\n  get() {\\n    let item;\\n    if (this.occupants_ > 0) {\\n      this.occupants_--;\\n      item = this.head_;\\n      this.head_ = item.next;\\n      item.next = null;\\n    } else {\\n      item = this.create_();\\n    }\\n    return item;\\n  }\\n\\n  /**\\n   * @param {ITEM} item An item available for possible future reuse.\\n   */\\n  put(item) {\\n    this.reset_(item);\\n    if (this.occupants_ < this.limit_) {\\n      this.occupants_++;\\n      item.next = this.head_;\\n      this.head_ = item;\\n    }\\n  }\\n\\n  /**\\n   * Visible for testing.\\n   * @package\\n   * @return {number}\\n   */\\n  occupants() {\\n    return this.occupants_;\\n  }\\n};\\n\"],\n\"names\":[\"goog\",\"provide\",\"async\",\"FreeList\",\"constructor\",\"create\",\"reset\",\"limit\",\"limit_\",\"create_\",\"reset_\",\"occupants_\",\"head_\",\"get\",\"item\",\"next\",\"put\",\"occupants\"]\n}\n"]