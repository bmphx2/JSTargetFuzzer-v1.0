function f0() {
}
function f1() {
    const o28 = {
        [f0]() {
            const v3 = f0 | this;
            let v4 = this[6];
            +this;
            v4 /= v3;
            const v6 = super.a;
            const v7 = [v6,f1,v6];
            [[this,f0,this],v7,v6,v7];
            const v13 = new BigInt64Array(3080);
            const t13 = [Float32Array,[v13,BigInt64Array],Float32Array,3080];
            t13.length >>= 4 / Int8Array;
            for (let v19 = 0; v19 < 32; v19++) {
                let v22 = 58354n;
                v22 <<= 39655n;
                function f23() {
                    return f23;
                }
                this["p" + v19] = v19;
                try {
                    super.m();
                } catch(e26) {
                }
                this.d;
            }
            return this;
        },
        "g": f0,
        __proto__: f0,
    };
    return o28;
}
const v29 = f1();
f1();
f1();
-34557n == Uint16Array;
const o36 = {
};
new Int8Array(255, v29);
let v40 = undefined;
const o43 = {
    get c() {
        v40 = arguments;
        return this;
    },
};
const o44 = {
    ...o43,
};
new Int8Array(0);
new Uint32Array(3, f1, 255, Int8Array);
const v50 = [];
function f51() {
    return v50;
}
function F52(a54, a55, a56) {
    if (!new.target) { throw 'must be called with new'; }
}
const v57 = new F52(v50, v50, v50);
const o59 = {
    "defineProperty": f51,
};
const v61 = new Proxy(v57, o59);
function f62() {
    return f62;
}
function f63() {
    return o59;
}
Object.defineProperty(v61, -16, { configurable: true, get: f63, set: f62 });
