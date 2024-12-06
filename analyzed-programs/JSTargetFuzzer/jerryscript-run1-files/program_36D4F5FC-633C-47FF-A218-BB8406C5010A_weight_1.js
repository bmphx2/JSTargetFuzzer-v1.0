function f6() {
    return -424155875;
}
function F7(a9, a10, a11) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = f6;
}
const v12 = new F7(-4294967296, 536870888, 536870888);
new F7(-65535, -424155875, -424155875);
new F7(482750387, -4294967296, -424155875);
[-1.0,771.681219924812];
[NaN,1000000000000.0,994.612254894131];
const v17 = [-159.91632461601353,1.2939760484235483e+308,-234.44839619711706,4.0,1e-15,5.0,-5.0,448.93894136360746,-629237.2752174904,-1.5485730665822505e+308];
for (let v18 = 0; v18 < 32; v18++) {
    v17["p" + v18] = v18;
}
const o21 = {
};
new Proxy(F7, o21);
const o24 = {
    "apply": f6,
    "call": f6,
    "construct": f6,
    "defineProperty": f6,
    "deleteProperty": f6,
    "get": f6,
    "getPrototypeOf": f6,
    "has": f6,
    "isExtensible": f6,
    "ownKeys": f6,
    "preventExtensions": f6,
    "set": f6,
    "setPrototypeOf": f6,
};
new Proxy(v12, o24);
