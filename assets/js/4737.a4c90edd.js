"use strict";
exports.id = 4737;
exports.ids = [4737];
exports.modules = {

/***/ 74737:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dyte_grid: () => (/* binding */ DyteGrid)
/* harmony export */ });
/* harmony import */ var _index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65733);
/* harmony import */ var _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86020);
/* harmony import */ var _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(68753);
/* harmony import */ var _index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8934);
/* harmony import */ var _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46503);
/* harmony import */ var _grid_cfa3c02f_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75673);







const dyteGridCss = ":host{display:block;height:100%;width:100%}";

const DyteGrid = class {
  constructor(hostRef) {
    (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
    this.layout = 'row';
    this.aspectRatio = '16:9';
    this.meeting = undefined;
    this.gap = 8;
    this.size = undefined;
    this.states = _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s;
    this.config = _default_ui_config_a4308f1c_js__WEBPACK_IMPORTED_MODULE_1__.d;
    this.iconPack = _default_icon_pack_c36061c1_js__WEBPACK_IMPORTED_MODULE_2__.d;
    this.t = (0,_index_78bd00d9_js__WEBPACK_IMPORTED_MODULE_3__.u)();
    this.gridSize = _grid_cfa3c02f_js__WEBPACK_IMPORTED_MODULE_5__.d;
    this.overrides = {};
  }
  render() {
    var _a;
    if (!this.meeting) {
      return (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null);
    }
    const defaults = {
      meeting: this.meeting,
      size: this.size,
      states: this.states || _store_56e792d0_js__WEBPACK_IMPORTED_MODULE_4__.s,
      config: this.config,
      iconPack: this.iconPack,
      t: this.t,
      // grid props
      aspectRatio: this.aspectRatio,
      gap: this.gap,
      layout: this.layout,
      gridSize: this.gridSize,
    };
    if (((_a = this.meeting) === null || _a === void 0 ? void 0 : _a.meta.viewType) === 'AUDIO_ROOM') {
      return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-audio-grid", Object.assign({}, defaults))));
    }
    return ((0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.H, null, (0,_index_fbf6e15e_js__WEBPACK_IMPORTED_MODULE_0__.h)("dyte-video-grid", Object.assign({ overrides: this.overrides }, defaults))));
  }
};
DyteGrid.style = dyteGridCss;




/***/ }),

/***/ 75673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   d: () => (/* binding */ defaultGridSize),
/* harmony export */   u: () => (/* binding */ useGrid)
/* harmony export */ });
function roundDown(num, places) {
  const factor = Math.pow(10, places);
  return Math.floor(num * factor) / factor;
}
function useGrid({ dimensions, count, aspectRatio, gap }) {
  const { width, height, rows, cols } = useGridItemDimensions({
    dimensions,
    count,
    aspectRatio,
    gap,
  });
  const getPosition = useGridPositioning({
    parentDimensions: dimensions,
    dimensions: { width, height },
    rows,
    cols,
    count,
    gap,
  });
  return { width, height, getPosition };
}
function useGridItemDimensions({ count, dimensions, aspectRatio, gap, }) {
  let { width: W, height: H } = dimensions;
  if (W === 0 || H === 0)
    return { width: 0, height: 0, rows: 1, cols: 1 };
  W -= gap * 2;
  H -= gap * 2;
  const s = gap, N = count;
  const r = getAspectRatio(aspectRatio);
  let w = 0, h = 0;
  let a = 1, b = 1;
  const widths = [];
  for (let n = 1; n <= N; n++) {
    widths.push((W - s * (n - 1)) / n);
    widths.push((H - s * (n - 1)) / (n * r));
  }
  // sort in descending order, largest first
  widths.sort((a, b) => b - a);
  for (const width of widths) {
    // We fix the precision to 4 decimal places to prevent
    // floating point overflow errors. Anyway, accuracy above
    // 4 decimal places does not really matter.
    w = roundDown(width, 4);
    h = roundDown(w * r, 4);
    a = Math.floor((W + s) / (w + s));
    b = Math.floor((H + s) / (h + s));
    if (a * b >= N) {
      // recalculate rows, as row calculated above can be inaccurate
      b = Math.ceil(N / a);
      break;
    }
  }
  return { width: w, height: h, rows: b, cols: a };
}
function useGridPositioning({ parentDimensions, dimensions, rows, cols, count, gap, }) {
  const { width: W, height: H } = parentDimensions;
  const { width: w, height: h } = dimensions;
  const firstTop = (H - (h * rows + (rows - 1) * gap)) / 2;
  let firstLeft = (W - (w * cols + (cols - 1) * gap)) / 2;
  const topAdd = h + gap;
  const leftAdd = w + gap;
  let col = 0, row = 0;
  const incompleteRowCols = count % cols;
  function getPosition(index) {
    const remaining = count - index;
    if (remaining === incompleteRowCols) {
      // in last row with incomplete columns, recalculate firstLeft to make it centered
      firstLeft = (W - (w * remaining + (remaining - 1) * gap)) / 2;
    }
    const top = firstTop + row * topAdd;
    const left = firstLeft + col * leftAdd;
    col++;
    if ((index + 1) % cols === 0) {
      // if a row has been traversed completely, increment row, reset col
      row++;
      col = 0;
    }
    return { top, left };
  }
  return getPosition;
}
/**
 * Parses the Aspect Ratio value
 * @param ratio The aspect ratio in the format of `16:9` where `width:height`
 * @returns The parsed value of aspect ratio
 */
const getAspectRatio = (ratio) => {
  const [width, height] = ratio.split(':');
  return Number.parseInt(height) / Number.parseInt(width);
};
const defaultGridSize = {
  spotlight: 'sm',
  mixed: 'sm',
};




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