function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 1073741824;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
const v10 = new WeakSet();
v3.g = 4;
function f13(a14, a15) {
    const o16 = {
        "g": 255,
        __proto__: v10,
    };
    return o16;
}
f13(127, v5);
f13(255, v5);
f13(127, v3);
try { v10.has(...4, 127, ...4, 4); } catch (e) {}
const v21 = [-325744.6428431814];
[-542051.9343559544,-5.3663482340959663e+306,-491.562131521156,922354.6334439833,5.949000913987732,-1000.0,0.8867822095052512,1e-15,1.7976931348623157e+308];
const v23 = [-1.5739189636288494e+308,-3.0,-5.0];
function F25(a27) {
    if (!new.target) { throw 'must be called with new'; }
}
const v28 = new F25(F25);
const v30 = v28[268435456];
switch (8) {
    case v30:
        function F31(a33, a34) {
            if (!new.target) { throw 'must be called with new'; }
            a34(F31);
            try { WeakSet(WeakSet); } catch (e) {}
            try {
            } catch(e45) {
                const o49 = {
                    "apply": f13,
                    "call": f13,
                    "construct": f13,
                    "defineProperty": f13,
                    "deleteProperty": f13,
                    "get": f13,
                    "getOwnPropertyDescriptor": f13,
                    "getPrototypeOf": f13,
                    "has": f13,
                    "isExtensible": f13,
                    "ownKeys": f13,
                    "preventExtensions": f13,
                    "set": f13,
                };
                new Proxy(a34, o49);
                try { e45(...v21, e45, v4, e45, ...v23); } catch (e) {}
                this[Symbol.unscopables];
            }
        }
        break;
}
