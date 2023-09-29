"use strict";
exports.id = 4482;
exports.ids = [4482];
exports.modules = {

/***/ 54482:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_livestream_toggle: () => (/* binding */ DyteLivestreamToggle)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8934);
/* harmony import */ var _livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24555);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46503);






const dyteLivestreamToggleCss = ":host{line-height:initial;font-family:var(--dyte-font-family, sans-serif);font-feature-settings:normal;font-variation-settings:normal}p{margin:var(--dyte-space-0, 0px);padding:var(--dyte-space-0, 0px)}:host{display:block}";

const DyteLivestreamToggle = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.stateUpdate = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteStateUpdate", 7);
    this.dyteAPIError = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.c)(this, "dyteAPIError", 7);
    this.livestreamStateListener = (state$1) => {
      this.livestreamState = state$1;
      if (state$1 === 'LIVESTREAMING' || state$1 === 'IDLE') {
        this.stateUpdate.emit({ activeMoreMenu: false });
        _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s.activeMoreMenu = false;
      }
    };
    this.isLoading = () => {
      return (this.meeting == null ||
        this.livestreamState === 'STARTING' ||
        this.livestreamState === 'STOPPING');
    };
    this.variant = 'button';
    this.meeting = undefined;
    this.size = undefined;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_2__.u)();
    this.livestreamState = 'IDLE';
  }
  connectedCallback() {
    this.meetingChanged(this.meeting);
  }
  disconnectedCallback() {
    this.clearListeners();
  }
  meetingChanged(meeting) {
    var _a, _b;
    if (meeting == null)
      return;
    this.livestreamState = (_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.state;
    (_b = this.meeting.livestream) === null || _b === void 0 ? void 0 : _b.on('livestreamUpdate', this.livestreamStateListener);
  }
  async toggleLivestream() {
    var _a, _b;
    if (this.livestreamState === 'LIVESTREAMING') {
      try {
        await ((_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.stop());
      }
      catch (_c) {
        this.dyteAPIError.emit({
          trace: this.t('livestream.stop'),
          message: this.t('livestream.error.stop'),
        });
      }
    }
    else {
      try {
        await ((_b = this.meeting.livestream) === null || _b === void 0 ? void 0 : _b.start());
      }
      catch (_d) {
        this.dyteAPIError.emit({
          trace: this.t('livestream.start'),
          message: this.t('livestream.error.start'),
        });
      }
    }
  }
  clearListeners() {
    var _a;
    (_a = this.meeting.livestream) === null || _a === void 0 ? void 0 : _a.removeListener('livestreamUpdate', this.livestreamStateListener);
  }
  getLivestreamLabel() {
    switch (this.livestreamState) {
      case 'IDLE':
        return this.t('livestream.go_live');
      case 'LIVESTREAMING':
        return this.t('livestream.end_live');
      case 'STARTING':
        return this.t('livestream.starting');
      case 'STOPPING':
        return this.t('livestream.stopping');
      default:
        return this.t('livestream.error');
    }
  }
  getLivestreamIcon() {
    switch (this.livestreamState) {
      case 'IDLE':
        return this.iconPack.start_livestream;
      case 'LIVESTREAMING':
        return this.iconPack.stop_livestream;
      case 'STARTING':
      case 'STOPPING':
      default:
        return this.iconPack.stop_livestream;
    }
  }
  render() {
    if (!(0,_livestream_8c64d895_js__WEBPACK_IMPORTED_MODULE_3__.i)(this.meeting))
      return;
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-controlbar-button", { part: "controlbar-button", size: this.size, iconPack: this.iconPack, t: this.t, isLoading: this.isLoading(), class: { 'active-livestream': this.livestreamState === 'LIVESTREAMING' }, onClick: () => this.toggleLivestream(), icon: this.getLivestreamIcon(), disabled: this.isLoading(), label: this.t(this.getLivestreamLabel()), variant: this.variant })));
  }
  static get watchers() { return {
    "meeting": ["meetingChanged"]
  }; }
};
DyteLivestreamToggle.style = dyteLivestreamToggleCss;




/***/ }),

/***/ 46503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ onChange),
/* harmony export */   s: () => (/* binding */ state)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);


const appendToMap = (map, propName, value) => {
    const items = map.get(propName);
    if (!items) {
        map.set(propName, [value]);
    }
    else if (!items.includes(value)) {
        items.push(value);
    }
};
const debounce = (fn, ms) => {
    let timeoutId;
    return (...args) => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(() => {
            timeoutId = 0;
            fn(...args);
        }, ms);
    };
};

/**
 * Check if a possible element isConnected.
 * The property might not be there, so we check for it.
 *
 * We want it to return true if isConnected is not a property,
 * otherwise we would remove these elements and would not update.
 *
 * Better leak in Edge than to be useless.
 */
const isConnected = (maybeElement) => !('isConnected' in maybeElement) || maybeElement.isConnected;
const cleanupElements = debounce((map) => {
    for (let key of map.keys()) {
        map.set(key, map.get(key).filter(isConnected));
    }
}, 2000);
const stencilSubscription = () => {
    if (typeof _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a !== 'function') {
        // If we are not in a stencil project, we do nothing.
        // This function is not really exported by @stencil/core.
        return {};
    }
    const elmsToUpdate = new Map();
    return {
        dispose: () => elmsToUpdate.clear(),
        get: (propName) => {
            const elm = (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.a)();
            if (elm) {
                appendToMap(elmsToUpdate, propName, elm);
            }
        },
        set: (propName) => {
            const elements = elmsToUpdate.get(propName);
            if (elements) {
                elmsToUpdate.set(propName, elements.filter(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            }
            cleanupElements(elmsToUpdate);
        },
        reset: () => {
            elmsToUpdate.forEach((elms) => elms.forEach(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.f));
            cleanupElements(elmsToUpdate);
        },
    };
};

const unwrap = (val) => (typeof val === 'function' ? val() : val);
const createObservableMap = (defaultState, shouldUpdate = (a, b) => a !== b) => {
    const unwrappedState = unwrap(defaultState);
    let states = new Map(Object.entries(unwrappedState !== null && unwrappedState !== void 0 ? unwrappedState : {}));
    const handlers = {
        dispose: [],
        get: [],
        set: [],
        reset: [],
    };
    const reset = () => {
        var _a;
        // When resetting the state, the default state may be a function - unwrap it to invoke it.
        // otherwise, the state won't be properly reset
        states = new Map(Object.entries((_a = unwrap(defaultState)) !== null && _a !== void 0 ? _a : {}));
        handlers.reset.forEach((cb) => cb());
    };
    const dispose = () => {
        // Call first dispose as resetting the state would
        // cause less updates ;)
        handlers.dispose.forEach((cb) => cb());
        reset();
    };
    const get = (propName) => {
        handlers.get.forEach((cb) => cb(propName));
        return states.get(propName);
    };
    const set = (propName, value) => {
        const oldValue = states.get(propName);
        if (shouldUpdate(value, oldValue, propName)) {
            states.set(propName, value);
            handlers.set.forEach((cb) => cb(propName, value, oldValue));
        }
    };
    const state = (typeof Proxy === 'undefined'
        ? {}
        : new Proxy(unwrappedState, {
            get(_, propName) {
                return get(propName);
            },
            ownKeys(_) {
                return Array.from(states.keys());
            },
            getOwnPropertyDescriptor() {
                return {
                    enumerable: true,
                    configurable: true,
                };
            },
            has(_, propName) {
                return states.has(propName);
            },
            set(_, propName, value) {
                set(propName, value);
                return true;
            },
        }));
    const on = (eventName, callback) => {
        handlers[eventName].push(callback);
        return () => {
            removeFromArray(handlers[eventName], callback);
        };
    };
    const onChange = (propName, cb) => {
        const unSet = on('set', (key, newValue) => {
            if (key === propName) {
                cb(newValue);
            }
        });
        // We need to unwrap the defaultState because it might be a function.
        // Otherwise we might not be sending the right reset value.
        const unReset = on('reset', () => cb(unwrap(defaultState)[propName]));
        return () => {
            unSet();
            unReset();
        };
    };
    const use = (...subscriptions) => {
        const unsubs = subscriptions.reduce((unsubs, subscription) => {
            if (subscription.set) {
                unsubs.push(on('set', subscription.set));
            }
            if (subscription.get) {
                unsubs.push(on('get', subscription.get));
            }
            if (subscription.reset) {
                unsubs.push(on('reset', subscription.reset));
            }
            if (subscription.dispose) {
                unsubs.push(on('dispose', subscription.dispose));
            }
            return unsubs;
        }, []);
        return () => unsubs.forEach((unsub) => unsub());
    };
    const forceUpdate = (key) => {
        const oldValue = states.get(key);
        handlers.set.forEach((cb) => cb(key, oldValue, oldValue));
    };
    return {
        state,
        get,
        set,
        on,
        onChange,
        use,
        dispose,
        reset,
        forceUpdate,
    };
};
const removeFromArray = (array, item) => {
    const index = array.indexOf(item);
    if (index >= 0) {
        array[index] = array[array.length - 1];
        array.length--;
    }
};

const createStore = (defaultState, shouldUpdate) => {
    const map = createObservableMap(defaultState, shouldUpdate);
    map.use(stencilSubscription());
    return map;
};

const { state, onChange } = createStore({});




/***/ })

};
;