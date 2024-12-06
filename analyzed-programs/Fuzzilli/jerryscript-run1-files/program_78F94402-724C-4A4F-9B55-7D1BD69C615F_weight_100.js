function f0() {
}
const v2 = new WeakMap();
const v3 = [f0,f0];
const v4 = [f0,v3,v3,v3];
const v5 = [v4,v2,WeakMap,v3,v4];
function f6() {
    return v5;
}
function f10() {
    return f0;
}
const v14 = 11 < -4294967296;
if (v14) {
    v4[7] = v14 in v2;
} else {
    new f0();
}
const o17 = {
    "get": f0,
    "getPrototypeOf": f0,
    "has": f6,
};
new Proxy(v4, o17);
