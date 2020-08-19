import { F as _asyncToGenerator, G as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, A as _createClass, S as SvelteComponentDev, f as element, g as append_dev, j as validate_slots, z as noop, H as empty, l as space, q as query_selector_all, m as detach_dev, n as claim_space, p as claim_element, r as children, w as attr_dev, x as add_location, y as insert_dev, D as _slicedToArray } from './client.0234113a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/cards/[slug].svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-b1ry8f-style";
  style.textContent = "#card-layout-grid.svelte-b1ry8f{display:grid;grid-template-columns:repeat(3, 1fr );grid-auto-rows:minmax(100px, auto);grid-template-areas:\"logo         leftHeading rightHeading\"\n        \"sideContent  leftContent rightContent\"\n    }\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3NsdWddLnN2ZWx0ZSIsInNvdXJjZXMiOlsiW3NsdWddLnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0IGNvbnRleHQ9XCJtb2R1bGVcIj5cbiAgICBleHBvcnQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZCggeyBwYXJhbXMsIHF1ZXJ5IH0gKSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2goIGBjYXJkcy8keyBwYXJhbXMuc2x1ZyB9Lmpzb25gICk7XG4gICAgICAgIGNvbnN0IGNhcmQgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBpZiAoIHJlcy5zdGF0dXMgPT09IDIwMCApIHtcbiAgICAgICAgICAgIHJldHVybiBjYXJkIDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3IoIHJlcy5zdGF0dXMsIGRhdGEuZXJyb3IgKTtcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBsZXQgY2FyZDtcbjwvc2NyaXB0PlxuPHN0eWxlPlxuICAgIC5sb2dvIHtcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2dvO1xuICAgIH1cbiAgICAubGVmdEhlYWRpbmcge1xuICAgICAgICBncmlkLWFyZWE6IGxlZnRIZWFkaW5nO1xuICAgIH1cbiAgICAucmlnaHRIZWFkaW5nIHtcbiAgICAgICAgZ3JpZC1hcmVhOiByaWdodEhlYWRpbmc7XG4gICAgfVxuICAgIC5zaWRlLWNvbnRlbnQge1xuICAgICAgICBncmlkLWFyZWE6IHNpZGVDb250ZW50O1xuICAgIH1cbiAgICAubGVmdC1jb250ZW50IHtcbiAgICAgICAgZ3JpZC1hcmVhOiBsZWZ0Q29udGVudDtcbiAgICB9XG4gICAgLnJpZ2h0LWNvbnRlbnQge1xuICAgICAgICBncmlkLWFyZWE6IHJpZ2h0Q29udGVudDtcbiAgICB9XG4gICAgI2NhcmQtbGF5b3V0LWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIgKTtcbiAgICAgICAgZ3JpZC1hdXRvLXJvd3M6IG1pbm1heCgxMDBweCwgYXV0byk7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwibG9nbyAgICAgICAgIGxlZnRIZWFkaW5nIHJpZ2h0SGVhZGluZ1wiXG4gICAgICAgIFwic2lkZUNvbnRlbnQgIGxlZnRDb250ZW50IHJpZ2h0Q29udGVudFwiXG4gICAgfVxuPC9zdHlsZT5cbjxzdmVsdGU6aGVhZD5cbiAgICB7ICNpZiBjYXJkLnRpdGxlIH1cbiAgICAgICAgPHRpdGxlPnsgY2FyZC50aXRsZSB9PC90aXRsZT5cbiAgICB7IC9pZiB9XG48L3N2ZWx0ZTpoZWFkPlxuPGRpdiBpZD1cImNhcmQtbGF5b3V0LWdyaWRcIj5cbiAgICB7IEBodG1sIGNhcmQuY29udGVudCB9XG48L2Rpdj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NJLGlCQUFpQixjQUFDLENBQUMsQUFDZixPQUFPLENBQUUsSUFBSSxDQUNiLHFCQUFxQixDQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQ3RDLGNBQWMsQ0FBRSxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUNuQyxtQkFBbUIsQ0FDbkIsdUNBQXVDO1FBQ3ZDLHVDQUF1QztJQUMzQyxDQUFDIn0= */";
  append_dev(document.head, style);
} // (45:4) { #if card.title }


function create_if_block(ctx) {
  var title_value;
  document.title = title_value =
  /*card*/
  ctx[0].title;
  var block = {
    c: noop,
    l: noop,
    m: noop,
    d: noop
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(45:4) { #if card.title }",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var if_block_anchor;
  var t;
  var div;
  var raw_value =
  /*card*/
  ctx[0].content + "";
  var if_block =
  /*card*/
  ctx[0].title && create_if_block(ctx);
  var block = {
    c: function create() {
      if (if_block) if_block.c();
      if_block_anchor = empty();
      t = space();
      div = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-5xy7pb\"]", document.head);
      if (if_block) if_block.l(head_nodes);
      if_block_anchor = empty();
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div_nodes = children(div);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "id", "card-layout-grid");
      attr_dev(div, "class", "svelte-b1ry8f");
      add_location(div, file, 48, 0, 1114);
    },
    m: function mount(target, anchor) {
      if (if_block) if_block.m(document.head, null);
      append_dev(document.head, if_block_anchor);
      insert_dev(target, t, anchor);
      insert_dev(target, div, anchor);
      div.innerHTML = raw_value;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*card*/
      ctx[0].title) {
        if (if_block) ; else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (dirty &
      /*card*/
      1 && raw_value !== (raw_value =
      /*card*/
      ctx[0].content + "")) div.innerHTML = raw_value;
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (if_block) if_block.d(detaching);
      detach_dev(if_block_anchor);
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var params, query, res, card;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params, query = _ref3.query;
            _context.next = 3;
            return this.fetch("cards/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            card = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", card);

          case 11:
            this.error(res.status, data.error);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var card = $$props.card;
  var writable_props = ["card"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bslugu5D", $$slots, []);

  $$self.$set = function ($$props) {
    if ("card" in $$props) $$invalidate(0, card = $$props.card);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      card: card
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("card" in $$props) $$invalidate(0, card = $$props.card);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [card];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-b1ry8f-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      card: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*card*/
    ctx[0] === undefined && !("card" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'card'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "card",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
