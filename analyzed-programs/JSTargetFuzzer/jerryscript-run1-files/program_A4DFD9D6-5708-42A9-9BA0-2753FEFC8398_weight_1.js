function f7(a8) {
    return arguments;
}
const v10 = f7(5, Uint32Array);
function f11(a12, a13) {
    const o14 = {
        ...v10,
    };
    return o14;
}
f11();
new Int8Array(5);
new Uint8ClampedArray(3147);
new BigUint64Array(9);
new Uint32Array(172);
new BigUint64Array(128);
const v29 = [42863,536870912,2147483649,1073741824,-1790,4,29111,9007199254740990,-4763,10];
const o30 = {
    "h": v29,
};
const o32 = {
};
const v34 = new Proxy(Array, o32);
const v35 = v34();
const v39 = new Uint32Array();
const v40 = v35 - v39;
const v41 = [1.7976931348623157e+308,-7.132348077024275,-55.152548489457104];
v41[65535n] = v40;
v41.splice(172);
new BigUint64Array(2747);
const v47 = new Uint8ClampedArray(3007);
function f48(a49, a50) {
    return Uint8ClampedArray;
}
v47.map(f48);
function f52(a53, a54, a55) {
    const o56 = {
    };
    function f57() {
        const o70 = {
            __proto__: "-536870912",
            "d": "-536870912",
            "g": "-536870912",
            ..."-536870912",
            "c": 1.7976931348623157e+308,
            9: -24152,
            "h": -24152,
            get f() {
                this[7] = -24152;
                let v62;
                try { v62 = this.n(); } catch (e) {}
                let [v63,v64] = v62;
                Int8Array(3);
                Int8Array(8);
                return f57;
            },
        };
        return o70;
    }
    f57();
    return o56;
}
const t62 = RegExp.bind();
t62[5] = 5;
class C75 {
    static m(a77, a78, a79) {
    }
}
let v80;
try { v80 = C75(); } catch (e) {}
try { v80(); } catch (e) {}
const v82 = f52();
let v83;
try {
const t0 = -12n;
v83 = t0();
} catch (e) {}
~v83;
(-2n) ** 63703n;
const v88 = f52();
for (let i = 0; i < 5; i++) {
    Object.defineProperty(v82, v88, { configurable: true, enumerable: true, get: f52, set: f52 });
}
