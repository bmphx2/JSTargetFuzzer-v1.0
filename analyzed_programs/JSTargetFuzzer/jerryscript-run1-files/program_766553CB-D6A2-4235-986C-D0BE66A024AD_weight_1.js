const o8 = {
    get g() {
        return this;
    },
    set g(a7) {
    },
};
function f10() {
    return "unscopables";
}
new WeakMap();
function F13(a15, a16, a17, a18) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a15;
    this.h = "unscopables";
}
const v19 = new F13("number", "deleteProperty", "Pzqaf", "Pzqaf");
[v19,v19,v19,v19];
try { (-9007199254740992)["toString"](-9007199254740992); } catch (e) {}
const v24 = -Infinity;
const o31 = {
    valueOf(a27) {
        for (const v28 in this) {
            try {
                super.getOwnPropertyDescriptors(this, -9007199254740992, 255, v24);
            } catch(e30) {
            }
        }
        return a27;
    },
};
new F13("constructor", "constructor", "Pzqaf", "number");
new F13("deleteProperty", "Pzqaf", "Pzqaf", "constructor");
new Float32Array(121);
Array();
[13,[Infinity,7.771821347908961e+307,0.47279638134182167,1000000.0,-1000.0,-924781.997015073,6.566625761778173,1000000000000.0,1000000000.0]];
new Float64Array(9);
new Uint32Array(127);
const v49 = new Int8Array(Int8Array);
const v50 = v49.values();
const v52 = new BigInt64Array();
const v54 = new Int16Array(Int16Array, Int16Array, Int16Array);
const o55 = {
    __proto__: v54,
};
v52.lastIndexOf(v50);
