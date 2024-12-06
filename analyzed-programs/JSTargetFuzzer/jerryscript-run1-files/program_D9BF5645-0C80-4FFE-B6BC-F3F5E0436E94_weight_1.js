new WeakMap();
function F14() {
    if (!new.target) { throw 'must be called with new'; }
}
const v16 = [Infinity,0.0,0.4397360972148665,1000.0,2.2250738585072014e-308,-1000000000.0];
const o17 = {
};
const v19 = new Proxy(v16, o17);
const o20 = {
};
new Proxy(v19, o20, Proxy, v16);
try { F14(); } catch (e) {}
