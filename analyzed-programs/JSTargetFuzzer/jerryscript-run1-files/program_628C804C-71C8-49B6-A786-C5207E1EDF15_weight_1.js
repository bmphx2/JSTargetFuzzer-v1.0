const v3 = [-Infinity,NaN,-6.900406509422268e+307,0.3566462929043941,-949.825271426509,6.590053305272503e+307,-1.2791635600561645e+308];
const v4 = [-3.7615554685624956e+306,1.0,0.635382586590099,0.1824831879261084,2.220446049250313e-16,-988.8645246908683,1.0];
const v5 = [1000000.0,-0.0,-2.2250738585072014e-308,-896691.7421367788,-891.9541611778375,-2.2250738585072014e-308,1000.0];
let v6;
try { v6 = v3.includes(-6, 268435440); } catch (e) {}
try { v4.reduce(v6, v3); } catch (e) {}
v5[-6] = v3;
v3.length;
const v9 = v4[-6];
const o15 = {
};
new Proxy(v3, o15);
o15.g;
const v19 = new BigUint64Array(3904);
const v22 = new Int8Array(0);
const v25 = new Uint8ClampedArray(337);
function f26(a27, a28, a29, a30) {
    const o37 = {
        m(a32, a33, a34) {
            try {
                super.deref(a34, a30);
            } catch(e36) {
            }
            return a28;
        },
    };
    return o37;
}
Reflect.apply(f26().m);
try { v9(v25); } catch (e) {}
new Uint8ClampedArray(v22, 38788, 3904);
Object.defineProperty(v19, "a", { enumerable: true, set: f26 });
