const v1 = new WeakMap();
const v2 = [v1,WeakMap,v1];
const v3 = [WeakMap,WeakMap];
[WeakMap,v3,v1,v3];
function f13() {
    return WeakMap;
}
const o14 = {
    "apply": f13,
    "construct": f13,
    "defineProperty": f13,
    "deleteProperty": f13,
    "get": f13,
    1073741824: f13,
    "h": f13,
    "d": 1417215027,
    2873: -29693,
    "c": 127,
    "getOwnPropertyDescriptor": f13,
    4: v3,
    [-29693]: -387935229,
    "g": v2,
    __proto__: v1,
    ...v2,
    "has": f13,
    "isExtensible": f13,
    "preventExtensions": f13,
    "set": f13,
    "setPrototypeOf": f13,
};
new Proxy(v1, o14);
function f18(a19, a20, a21) {
    return f18;
}
class C22 extends f18 {
    get d() {
        return;
    }
}
