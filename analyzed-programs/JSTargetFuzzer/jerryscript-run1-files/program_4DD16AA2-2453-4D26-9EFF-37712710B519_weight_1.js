function f6() {
    return -2065056947;
}
class C7 extends f6 {
    m(a9, a10, a11) {
        const v13 = Symbol.iterator;
        const o43 = {
            [v13]() {
                try {
                    super.map(this, this);
                } catch(e16) {
                }
                const o17 = {
                    "apply": Symbol,
                    "construct": f6,
                    "deleteProperty": Symbol,
                    "get": Symbol,
                };
                const v19 = new Proxy(this, o17);
                let v20 = 10;
                const o42 = {
                    next() {
                        this.c = a10;
                        const v22 = this[v13];
                        function F23(a25, a26, a27, a28) {
                            if (!new.target) { throw 'must be called with new'; }
                            this.f = this;
                            this.d = this;
                            this.c = v20;
                        }
                        const v29 = new F23(14, v19, v19, v22);
                        const v30 = new F23(v13, v29, v20, F23);
                        const v31 = new F23(f6, v30, this, F23);
                        const v32 = v20--;
                        const v34 = v20 == 0;
                        const o35 = {
                            "done": v34,
                            "value": v20,
                        };
                        e = 1152315070;
                        const v36 = new F23(this, v32, 14, v31);
                        Symbol >> this;
                        try { o17.unregister(v13, v36, v20, this); } catch (e) {}
                        const o39 = {
                            "apply": f6,
                            "call": Symbol,
                            "defineProperty": f6,
                            "deleteProperty": Symbol,
                            "get": f6,
                            "getOwnPropertyDescriptor": Symbol,
                            "getPrototypeOf": f6,
                            "has": f6,
                            "preventExtensions": Symbol,
                            "set": Symbol,
                            "setPrototypeOf": f6,
                        };
                        new Proxy(v19, o39);
                        return o35;
                    },
                };
                return o42;
            },
        };
        return a11;
    }
}
new C7();
const v45 = new C7();
new C7();
function F47() {
    if (!new.target) { throw 'must be called with new'; }
    F47.c = -4294967297;
}
const v50 = new F47();
new F47();
new F47();
function f54() {
    v45.__proto__ = v50;
    new Int8Array(257);
    new Float32Array(4085);
    new BigInt64Array(0);
    const v66 = new Uint32Array(858);
    return v66;
}
function f69() {
    return v50;
}
const v72 = new BigUint64Array(BigUint64Array, BigUint64Array);
v72.copyWithin();
const v76 = RegExp.bind(2);
Math.fround();
Math.min(0.2148301603058278);
let v82 = 1073741824n;
v82 &= v82;
try { Float32Array(); } catch (e) {}
(-12n).toString();
([2036046200,-9223372036854775807,-61646])["map"](Array);
new Float64Array(16);
switch (4294967295) {
    default:
        -128 >>> C7;
        break;
}
class C97 {
}
const v99 = new v76(1);
const v102 = new Int8Array(107);
for (let i105 = 0, i106 = 10; i105 < i106;) {
    v102[v99] = i105;
    ++i105;
    Math.max(-7);
}
new Int16Array(26);
4 == [4,7,4294967297,-1,1000];
const v122 = new Int8Array(Int8Array, Int8Array, Int8Array);
v122.includes(v122, v122);
new Uint8ClampedArray(6);
try {
    new WeakSet(4087n);
} catch(e129) {
} finally {
}
