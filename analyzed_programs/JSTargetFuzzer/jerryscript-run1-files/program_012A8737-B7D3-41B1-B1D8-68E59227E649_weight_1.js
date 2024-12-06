new Int32Array(12);
new Int8Array(5);
new Uint16Array(102);
function f9() {
    const o16 = {
        "a": 434997.50268014264,
        "b": 434997.50268014264,
        p(a13, a14) {
            return a13.valueOf(this, this);
        },
        ..."hasInstance",
    };
    return o16;
}
f9();
let v18 = -16;
const v20 = new BigUint64Array();
const v21 = new BigUint64Array(v20);
const o23 = {
    valueOf() {
        return v21;
    },
};
v18 = o23;
const v24 = f9();
const o25 = {
    "construct": f9,
};
const v27 = new Proxy(v24, o25);
function f31(a32, a33, a34) {
    function F36(a38, a39, a40) {
        if (!new.target) { throw 'must be called with new'; }
        this.c = a34;
        this.b = v27;
    }
    new F36(102, 102, "k");
    new F36(102, 5, Uint16Array);
    const v43 = new F36(102, 102, isFinite);
    return v43;
}
f31(v27, v27, "getUint16");
const v47 = new Uint32Array(181);
let v49 = BigUint64Array;
let v50 = new v49(1);
let v51 = 253;
[v51,,v49,v50] = v47;
try { v49["abs"](181, v51, v49); } catch (e) {}
new Uint16Array(v51);
for (let i64 = 0;
    (() => {
        let v68 = "268435456";
        v68 >>>= v68;
        new Float64Array(3939);
        new Int16Array(2680);
        new BigUint64Array(512);
        return i64 < BigUint64Array;
    })();
    i64++) {
    const v82 = new Function("x");
    v82.name;
}
Function();
