module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = options.computed || (options.computed = {})
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/input");

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/clickoutside");

/***/ },
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/utils/vue-popper");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/emitter");

/***/ },
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports) {

	module.exports = require("throttle-debounce/debounce");

/***/ },
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _main = __webpack_require__(54);

	var _main2 = _interopRequireDefault(_main);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/* istanbul ignore next */
	_main2.default.install = function (Vue) {
	  Vue.component(_main2.default.name, _main2.default);
	};

	exports.default = _main2.default;

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(55),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _vue = __webpack_require__(56);

	var _vue2 = _interopRequireDefault(_vue);

	var _menu = __webpack_require__(57);

	var _menu2 = _interopRequireDefault(_menu);

	var _input = __webpack_require__(9);

	var _input2 = _interopRequireDefault(_input);

	var _vuePopper = __webpack_require__(13);

	var _vuePopper2 = _interopRequireDefault(_vuePopper);

	var _clickoutside = __webpack_require__(10);

	var _clickoutside2 = _interopRequireDefault(_clickoutside);

	var _emitter = __webpack_require__(14);

	var _emitter2 = _interopRequireDefault(_emitter);

	var _locale = __webpack_require__(60);

	var _locale2 = _interopRequireDefault(_locale);

	var _locale3 = __webpack_require__(61);

	var _debounce = __webpack_require__(46);

	var _debounce2 = _interopRequireDefault(_debounce);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var popperMixin = {
	  props: {
	    placement: {
	      type: String,
	      default: 'bottom-start'
	    },
	    appendToBody: _vuePopper2.default.props.appendToBody,
	    offset: _vuePopper2.default.props.offset,
	    boundariesPadding: _vuePopper2.default.props.boundariesPadding,
	    popperOptions: _vuePopper2.default.props.popperOptions
	  },
	  methods: _vuePopper2.default.methods,
	  data: _vuePopper2.default.data,
	  beforeDestroy: _vuePopper2.default.beforeDestroy
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	  name: 'ElCascader',

	  directives: { Clickoutside: _clickoutside2.default },

	  mixins: [popperMixin, _emitter2.default, _locale2.default],

	  components: {
	    ElInput: _input2.default
	  },

	  props: {
	    options: {
	      type: Array,
	      required: true
	    },
	    props: {
	      type: Object,
	      default: function _default() {
	        return {
	          children: 'children',
	          label: 'label',
	          value: 'value',
	          disabled: 'disabled'
	        };
	      }
	    },
	    value: {
	      type: Array,
	      default: function _default() {
	        return [];
	      }
	    },
	    placeholder: {
	      type: String,
	      default: function _default() {
	        return (0, _locale3.t)('el.cascader.placeholder');
	      }
	    },
	    disabled: Boolean,
	    clearable: {
	      type: Boolean,
	      default: false
	    },
	    changeOnSelect: Boolean,
	    popperClass: String,
	    expandTrigger: {
	      type: String,
	      default: 'click'
	    },
	    filterable: Boolean,
	    size: String,
	    showAllLevels: {
	      type: Boolean,
	      default: true
	    },
	    debounce: {
	      type: Number,
	      default: 300
	    }
	  },

	  data: function data() {
	    return {
	      currentValue: this.value,
	      menu: null,
	      debouncedInputChange: function debouncedInputChange() {},

	      menuVisible: false,
	      inputHover: false,
	      inputValue: '',
	      flatOptions: null
	    };
	  },


	  computed: {
	    labelKey: function labelKey() {
	      return this.props.label || 'label';
	    },
	    valueKey: function valueKey() {
	      return this.props.value || 'value';
	    },
	    childrenKey: function childrenKey() {
	      return this.props.children || 'children';
	    },
	    currentLabels: function currentLabels() {
	      var _this = this;

	      var options = this.options;
	      var labels = [];
	      this.currentValue.forEach(function (value) {
	        var targetOption = options && options.filter(function (option) {
	          return option[_this.valueKey] === value;
	        })[0];
	        if (targetOption) {
	          labels.push(targetOption[_this.labelKey]);
	          options = targetOption[_this.childrenKey];
	        }
	      });
	      return labels;
	    }
	  },

	  watch: {
	    menuVisible: function menuVisible(value) {
	      value ? this.showMenu() : this.hideMenu();
	    },
	    value: function value(_value) {
	      this.currentValue = _value;
	    },
	    currentValue: function currentValue(value) {
	      this.dispatch('ElFormItem', 'el.form.change', [value]);
	    },

	    options: {
	      deep: true,
	      handler: function handler(value) {
	        if (!this.menu) {
	          this.initMenu();
	        }
	        this.flatOptions = this.flattenOptions(this.options);
	        this.menu.options = value;
	      }
	    }
	  },

	  methods: {
	    initMenu: function initMenu() {
	      this.menu = new _vue2.default(_menu2.default).$mount();
	      this.menu.options = this.options;
	      this.menu.props = this.props;
	      this.menu.expandTrigger = this.expandTrigger;
	      this.menu.changeOnSelect = this.changeOnSelect;
	      this.menu.popperClass = this.popperClass;
	      this.popperElm = this.menu.$el;
	      this.menu.$on('pick', this.handlePick);
	      this.menu.$on('activeItemChange', this.handleActiveItemChange);
	      this.menu.$on('menuLeave', this.doDestroy);
	    },
	    showMenu: function showMenu() {
	      var _this2 = this;

	      if (!this.menu) {
	        this.initMenu();
	      }

	      this.menu.value = this.currentValue.slice(0);
	      this.menu.visible = true;
	      this.menu.options = this.options;
	      this.$nextTick(function (_) {
	        _this2.updatePopper();
	        _this2.menu.inputWidth = _this2.$refs.input.$el.offsetWidth - 2;
	      });
	    },
	    hideMenu: function hideMenu() {
	      this.inputValue = '';
	      this.menu.visible = false;
	    },
	    handleActiveItemChange: function handleActiveItemChange(value) {
	      var _this3 = this;

	      this.$nextTick(function (_) {
	        _this3.updatePopper();
	      });
	      this.$emit('active-item-change', value);
	    },
	    handlePick: function handlePick(value) {
	      var close = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

	      this.currentValue = value;
	      this.$emit('input', value);
	      this.$emit('change', value);

	      if (close) {
	        this.menuVisible = false;
	      }
	    },
	    handleInputChange: function handleInputChange(value) {
	      var _this4 = this;

	      if (!this.menuVisible) return;
	      var flatOptions = this.flatOptions;

	      if (!value) {
	        this.menu.options = this.options;
	        return;
	      }

	      var filteredFlatOptions = flatOptions.filter(function (optionsStack) {
	        return optionsStack.some(function (option) {
	          return new RegExp(value, 'i').test(option[_this4.labelKey]);
	        });
	      });

	      if (filteredFlatOptions.length > 0) {
	        filteredFlatOptions = filteredFlatOptions.map(function (optionStack) {
	          return {
	            __IS__FLAT__OPTIONS: true,
	            value: optionStack.map(function (item) {
	              return item[_this4.valueKey];
	            }),
	            label: _this4.renderFilteredOptionLabel(value, optionStack)
	          };
	        });
	      } else {
	        filteredFlatOptions = [{
	          __IS__FLAT__OPTIONS: true,
	          label: this.t('el.cascader.noMatch'),
	          value: '',
	          disabled: true
	        }];
	      }
	      this.menu.options = filteredFlatOptions;
	    },
	    renderFilteredOptionLabel: function renderFilteredOptionLabel(inputValue, optionsStack) {
	      var _this5 = this;

	      return optionsStack.map(function (option, index) {
	        var label = option[_this5.labelKey];
	        var keywordIndex = label.toLowerCase().indexOf(inputValue.toLowerCase());
	        var labelPart = label.slice(keywordIndex, inputValue.length + keywordIndex);
	        var node = keywordIndex > -1 ? _this5.highlightKeyword(label, labelPart) : label;
	        return index === 0 ? node : [' / ', node];
	      });
	    },
	    highlightKeyword: function highlightKeyword(label, keyword) {
	      var _this6 = this;

	      var h = this._c;
	      return label.split(keyword).map(function (node, index) {
	        return index === 0 ? node : [h('span', { class: { 'el-cascader-menu__item__keyword': true } }, [_this6._v(keyword)]), node];
	      });
	    },
	    flattenOptions: function flattenOptions(options) {
	      var _this7 = this;

	      var ancestor = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	      var flatOptions = [];
	      options.forEach(function (option) {
	        var optionsStack = ancestor.concat(option);
	        if (!option[_this7.childrenKey]) {
	          flatOptions.push(optionsStack);
	        } else {
	          if (_this7.changeOnSelect) {
	            flatOptions.push(optionsStack);
	          }
	          flatOptions = flatOptions.concat(_this7.flattenOptions(option[_this7.childrenKey], optionsStack));
	        }
	      });
	      return flatOptions;
	    },
	    clearValue: function clearValue(ev) {
	      ev.stopPropagation();
	      this.handlePick([], true);
	    },
	    handleClickoutside: function handleClickoutside() {
	      this.menuVisible = false;
	    },
	    handleClick: function handleClick() {
	      if (this.disabled) return;
	      if (this.filterable) {
	        this.menuVisible = true;
	        this.$refs.input.$refs.input.focus();
	        return;
	      }
	      this.menuVisible = !this.menuVisible;
	    }
	  },

	  created: function created() {
	    var _this8 = this;

	    this.debouncedInputChange = (0, _debounce2.default)(this.debounce, function (value) {
	      _this8.handleInputChange(value);
	    });
	  },
	  mounted: function mounted() {
	    this.flatOptions = this.flattenOptions(this.options);
	  }
	};

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("vue");

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(3)(
	  /* script */
	  __webpack_require__(58),
	  /* template */
	  null,
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _babelHelperVueJsxMergeProps = __webpack_require__(59);

	var _babelHelperVueJsxMergeProps2 = _interopRequireDefault(_babelHelperVueJsxMergeProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'ElCascaderMenu',

	  data: function data() {
	    return {
	      inputWidth: 0,
	      options: [],
	      props: {},
	      visible: false,
	      activeValue: [],
	      value: [],
	      expandTrigger: 'click',
	      changeOnSelect: false,
	      popperClass: ''
	    };
	  },


	  watch: {
	    visible: function visible(value) {
	      if (value) {
	        this.activeValue = this.value;
	      }
	    },

	    value: {
	      immediate: true,
	      handler: function handler(value) {
	        this.activeValue = value;
	      }
	    }
	  },

	  computed: {
	    activeOptions: {
	      cache: false,
	      get: function get() {
	        var _this = this;

	        var activeValue = this.activeValue;
	        var configurableProps = ['label', 'value', 'children', 'disabled'];

	        var formatOptions = function formatOptions(options) {
	          options.forEach(function (option) {
	            if (option.__IS__FLAT__OPTIONS) return;
	            configurableProps.forEach(function (prop) {
	              var value = option[_this.props[prop] || prop];
	              if (value) option[prop] = value;
	            });
	            if (Array.isArray(option.children)) {
	              formatOptions(option.children);
	            }
	          });
	        };

	        var loadActiveOptions = function loadActiveOptions(options) {
	          var activeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

	          var level = activeOptions.length;
	          activeOptions[level] = options;
	          var active = activeValue[level];
	          if (active) {
	            options = options.filter(function (option) {
	              return option.value === active;
	            })[0];
	            if (options && options.children) {
	              loadActiveOptions(options.children, activeOptions);
	            }
	          }
	          return activeOptions;
	        };

	        formatOptions(this.options);
	        return loadActiveOptions(this.options);
	      }
	    }
	  },

	  methods: {
	    select: function select(item, menuIndex) {
	      if (item.__IS__FLAT__OPTIONS) {
	        this.activeValue = item.value;
	      } else if (menuIndex) {
	        this.activeValue.splice(menuIndex, this.activeValue.length - 1, item.value);
	      } else {
	        this.activeValue = [item.value];
	      }
	      this.$emit('pick', this.activeValue);
	    },
	    handleMenuLeave: function handleMenuLeave() {
	      this.$emit('menuLeave');
	    },
	    activeItem: function activeItem(item, menuIndex) {
	      var len = this.activeOptions.length;
	      this.activeValue.splice(menuIndex, len, item.value);
	      this.activeOptions.splice(menuIndex + 1, len, item.children);
	      if (this.changeOnSelect) {
	        this.$emit('pick', this.activeValue, false);
	      } else {
	        this.$emit('activeItemChange', this.activeValue);
	      }
	    }
	  },

	  render: function render(h) {
	    var _this2 = this;

	    var activeValue = this.activeValue,
	        activeOptions = this.activeOptions,
	        visible = this.visible,
	        expandTrigger = this.expandTrigger,
	        popperClass = this.popperClass;


	    var menus = this._l(activeOptions, function (menu, menuIndex) {
	      var isFlat = false;
	      var items = _this2._l(menu, function (item) {
	        var events = {
	          on: {}
	        };

	        if (item.__IS__FLAT__OPTIONS) isFlat = true;

	        if (!item.disabled) {
	          if (item.children) {
	            var triggerEvent = {
	              click: 'click',
	              hover: 'mouseenter'
	            }[expandTrigger];
	            events.on[triggerEvent] = function () {
	              _this2.activeItem(item, menuIndex);
	            };
	          } else {
	            events.on.click = function () {
	              _this2.select(item, menuIndex);
	            };
	          }
	        }

	        return h(
	          'li',
	          (0, _babelHelperVueJsxMergeProps2.default)([{
	            'class': {
	              'el-cascader-menu__item': true,
	              'el-cascader-menu__item--extensible': item.children,
	              'is-active': item.value === activeValue[menuIndex],
	              'is-disabled': item.disabled
	            }
	          }, events]),
	          [item.label]
	        );
	      });
	      var menuStyle = {};
	      if (isFlat) {
	        menuStyle.minWidth = _this2.inputWidth + 'px';
	      }

	      return h(
	        'ul',
	        {
	          'class': {
	            'el-cascader-menu': true,
	            'el-cascader-menu--flexible': isFlat
	          },
	          style: menuStyle },
	        [items]
	      );
	    });
	    return h(
	      'transition',
	      {
	        attrs: { name: 'el-zoom-in-top' },
	        on: {
	          'after-leave': this.handleMenuLeave
	        }
	      },
	      [h(
	        'div',
	        {
	          directives: [{
	            name: 'show',
	            value: visible
	          }],

	          'class': ['el-cascader-menus', popperClass]
	        },
	        [menus]
	      )]
	    );
	  }
	};

/***/ },
/* 59 */
/***/ function(module, exports) {

	module.exports = require("babel-helper-vue-jsx-merge-props");

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/mixins/locale");

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = require("element-ui/lib/locale");

/***/ },
/* 62 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('span', {
	    directives: [{
	      name: "clickoutside",
	      rawName: "v-clickoutside",
	      value: (_vm.handleClickoutside),
	      expression: "handleClickoutside"
	    }],
	    ref: "reference",
	    staticClass: "el-cascader",
	    class: [{
	        'is-opened': _vm.menuVisible,
	        'is-disabled': _vm.disabled
	      },
	      _vm.size ? 'el-cascader--' + _vm.size : ''
	    ],
	    on: {
	      "click": _vm.handleClick,
	      "mouseenter": function($event) {
	        _vm.inputHover = true
	      },
	      "mouseleave": function($event) {
	        _vm.inputHover = false
	      }
	    }
	  }, [_c('el-input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.inputValue),
	      expression: "inputValue"
	    }],
	    ref: "input",
	    attrs: {
	      "readonly": !_vm.filterable,
	      "placeholder": _vm.currentLabels.length ? undefined : _vm.placeholder,
	      "validate-event": false,
	      "size": _vm.size,
	      "disabled": _vm.disabled
	    },
	    domProps: {
	      "value": (_vm.inputValue)
	    },
	    on: {
	      "change": _vm.debouncedInputChange,
	      "input": function($event) {
	        _vm.inputValue = $event
	      }
	    }
	  }, [_c('template', {
	    slot: "icon"
	  }, [(_vm.clearable && _vm.inputHover && _vm.currentLabels.length) ? _c('i', {
	    key: "1",
	    staticClass: "el-input__icon el-icon-circle-close el-cascader__clearIcon",
	    on: {
	      "click": _vm.clearValue
	    }
	  }) : _c('i', {
	    key: "2",
	    staticClass: "el-input__icon el-icon-caret-bottom",
	    class: {
	      'is-reverse': _vm.menuVisible
	    }
	  })])], 2), _c('span', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.inputValue === ''),
	      expression: "inputValue === ''"
	    }],
	    staticClass: "el-cascader__label"
	  }, [(_vm.showAllLevels) ? [_vm._l((_vm.currentLabels), function(label, index) {
	    return [_vm._v("\n        " + _vm._s(label) + "\n        "), (index < _vm.currentLabels.length - 1) ? _c('span', [_vm._v(" / ")]) : _vm._e()]
	  })] : [_vm._v("\n      " + _vm._s(_vm.currentLabels[_vm.currentLabels.length - 1]) + "\n    ")]], 2)], 1)
	},staticRenderFns: []}

/***/ }
/******/ ]);