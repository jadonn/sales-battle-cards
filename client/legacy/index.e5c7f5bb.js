import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, f as element, g as append_dev, v as validate_store, h as component_subscribe, o as onMount, j as validate_slots, k as currentUser, l as space, t as text, q as query_selector_all, m as detach_dev, n as claim_space, p as claim_element, r as children, u as claim_text, w as attr_dev, x as add_location, y as insert_dev, z as noop } from './client.0234113a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src/routes/index.svelte";

function add_css() {
  var style = element("style");
  style.id = "svelte-1is6ld8-style";
  style.textContent = "#home-layout-grid.svelte-1is6ld8{display:grid;grid-template-columns:repeat(3, 1fr);grid-auto-rows:minmax(100px, auto)}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguc3ZlbHRlIiwic291cmNlcyI6WyJpbmRleC5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBjdXJyZW50VXNlciB9IGZyb20gXCIuLy4uL3N0b3Jlcy91c2VyLmpzXCI7XG4gICAgaW1wb3J0IHsgb25Nb3VudCB9IGZyb20gXCJzdmVsdGVcIjtcbiAgICBvbk1vdW50KCgpID0+IHtcbiAgICAgICAgaWYgKCAhJGN1cnJlbnRVc2VyICkge1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgIH1cbiAgICB9KVxuPC9zY3JpcHQ+XG48c3R5bGU+XG4gICAgI2hvbWUtbGF5b3V0LWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuICAgICAgICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbiAgICB9XG48L3N0eWxlPlxuXG48c3ZlbHRlOmhlYWQ+XG4gICAgPHRpdGxlPlNhcHBlciBGaXJlYmFzZSBNYXRlcmlhbCBUZW1wbGF0ZTwvdGl0bGU+XG48L3N2ZWx0ZTpoZWFkPlxuXG48ZGl2IGlkPVwiaG9tZS1sYXlvdXQtZ3JpZFwiPlxuICAgIDxkaXY+XG4gICAgICAgIDxwPjxhIGhyZWY9XCJjYXJkc1wiPkNhcmRzPC9hPjwvcD5cbiAgICA8L2Rpdj5cbjwvZGl2PiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZSSxpQkFBaUIsZUFBQyxDQUFDLEFBQ2YsT0FBTyxDQUFFLElBQUksQ0FDYixxQkFBcUIsQ0FBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUNyQyxjQUFjLENBQUUsT0FBTyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQUFDdkMsQ0FBQyJ9 */";
  append_dev(document.head, style);
}

function create_fragment(ctx) {
  var t0;
  var div1;
  var div0;
  var p;
  var a;
  var t1;
  var block = {
    c: function create() {
      t0 = space();
      div1 = element("div");
      div0 = element("div");
      p = element("p");
      a = element("a");
      t1 = text("Cards");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-jebcb0\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        id: true,
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {});
      var div0_nodes = children(div0);
      p = claim_element(div0_nodes, "P", {});
      var p_nodes = children(p);
      a = claim_element(p_nodes, "A", {
        href: true
      });
      var a_nodes = children(a);
      t1 = claim_text(a_nodes, "Cards");
      a_nodes.forEach(detach_dev);
      p_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "Sapper Firebase Material Template";
      attr_dev(a, "href", "cards");
      add_location(a, file, 25, 11, 513);
      add_location(p, file, 25, 8, 510);
      add_location(div0, file, 24, 4, 496);
      attr_dev(div1, "id", "home-layout-grid");
      attr_dev(div1, "class", "svelte-1is6ld8");
      add_location(div1, file, 23, 0, 464);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, p);
      append_dev(p, a);
      append_dev(a, t1);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div1);
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

function instance($$self, $$props, $$invalidate) {
  var $currentUser;
  validate_store(currentUser, "currentUser");
  component_subscribe($$self, currentUser, function ($$value) {
    return $$invalidate(0, $currentUser = $$value);
  });
  onMount(function () {
  });
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Routes", $$slots, []);

  $$self.$capture_state = function () {
    return {
      currentUser: currentUser,
      onMount: onMount,
      $currentUser: $currentUser
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    if (!document.getElementById("svelte-1is6ld8-style")) add_css();
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
