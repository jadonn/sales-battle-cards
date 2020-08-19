import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, S as SvelteComponentDev, L as Login, j as validate_slots, I as create_component, J as claim_component, K as mount_component, z as noop, M as transition_in, N as transition_out, O as destroy_component } from './client.0234113a.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function create_fragment(ctx) {
  var current;
  var login = new Login({
    $$inline: true
  });
  var block = {
    c: function create() {
      create_component(login.$$.fragment);
    },
    l: function claim(nodes) {
      claim_component(login.$$.fragment, nodes);
    },
    m: function mount(target, anchor) {
      mount_component(login, target, anchor);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(login.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(login.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      destroy_component(login, detaching);
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
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Login> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Login", $$slots, []);

  $$self.$capture_state = function () {
    return {
      Login: Login
    };
  };

  return [];
}

var Login_1 = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Login_1, _SvelteComponentDev);

  var _super = _createSuper(Login_1);

  function Login_1(options) {
    var _this;

    _classCallCheck(this, Login_1);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Login_1",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Login_1;
}(SvelteComponentDev);

export default Login_1;
