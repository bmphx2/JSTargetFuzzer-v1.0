const v2 = new Float32Array(0);
const v5 = new Float32Array(129);
const v8 = new Float32Array(654);
class C9 {
    p(a11, a12) {
        a12 = v2;
        const o13 = {
        };
        function F15() {
            if (!new.target) { throw 'must be called with new'; }
            this.b = -9;
        }
        const v18 = new F15();
        const o20 = {
            ...v18,
            get b() {
                return this;
            },
        };
        const v21 = new Proxy(this, o13);
        return v21;
    }
    static get g() {
        v2.__proto__;
        const v28 = typeof this;
        v28 === "undefined";
        return v28;
    }
}
const v31 = new C9();
const v32 = new C9();
const v33 = new C9();
function f34(a35, a36, a37) {
    const o41 = {
        get e() {
            return a35["p"](a36, 654, this);
        },
        [a37]: v5,
        __proto__: v8,
        "a": a35,
        "f": a35,
        ...a35,
        "g": a37,
        [v5]: a37,
        ...v33,
        "h": 0,
        "d": a35,
        /*
        __proto__: a35,
        */
    };
    return o41;
}
const v42 = f34(v33, 0, 129);
f34(v31, 129, 0);
f34(v32, 654, 129);
function F47(a49, a50, a51) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = a49;
    this.a = v42;
    this.g = 0;
}
new F47(v31, Float32Array, v5);
new F47(v32, Float32Array, v8);
new F47(v33, Float32Array, v8);
new BigUint64Array(BigUint64Array);
const v57 = ([]).values();
class C58 {
    constructor(a60) {
        function F61() {
            if (!new.target) { throw 'must be called with new'; }
            this.b = v33;
        }
        const v64 = new F61();
        const o66 = {
            ...v64,
            get b() {
                return this;
            },
        };
        function f68() {
            let {...v70} = arguments;
            return C58;
        }
        f68(Map);
    }
}
const v76 = new Array(0);
const v79 = new BigUint64Array(256);
const v82 = new BigInt64Array(702);
new Int32Array(2);
if (268435439) {
    2 instanceof Array;
    let v87;
    try { v87 = v79.set(v82); } catch (e) {}
    v76[BigInt64Array] = v87;
} else {
    new Uint8Array(3984);
    const t98 = [-30092,64];
    t98.length = 13;
    v57.m;
    let v95 = 1073741824n;
    ++v95;
    new Uint8Array(1000);
    new Uint8Array(0);
}
