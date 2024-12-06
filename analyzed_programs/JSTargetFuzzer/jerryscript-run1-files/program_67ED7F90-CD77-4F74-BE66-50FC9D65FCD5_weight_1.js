function F6() {
    if (!new.target) { throw 'must be called with new'; }
    this.valueOf = F6;
    let v8;
    try { v8 = new F6(this, 9n, 9n, -9223372036854775808n, ...this); } catch (e) {}
    v8[1073741823] = this;
    this.valueOf = 9n;
    function F9(a11, a12, a13) {
        if (!new.target) { throw 'must be called with new'; }
        this.b = a12;
        this.e = F6;
    }
    new F9(9n, -9223372036854775808n, 536870889);
    new F9(-6n, v8, 1000);
    new F9(9n, -9223372036854775808n, v8);
}
const v20 = [9223372036854775807n];
const v21 = [v20,v20];
const v22 = [2n,v21,-1290666896n];
const v26 = new Float64Array();
new Set(v26);
const v32 = new Int8Array();
v32.fill("RMF", 257, -1180432857);
new Array(1508);
const o42 = {
    __proto__: v21,
    "b": 1000000000000.0,
    ...v22,
};
const v43 = [];
const o44 = {
    __proto__: v43,
};
Int16Array & o44;
([2036046200,-9223372036854775807,-61646])["map"](parseInt);
Array(39830);
try {
    for (const v56 of "preventExtensions") {
        break;
    }
} finally {
}
let v57 = undefined;
const o60 = {
    get c() {
        return v57 = arguments;
    },
};
const o61 = {
    ...o60,
};
Array(257);
