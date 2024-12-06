const v2 = new WeakMap();
function f3() {
    return v2;
}
class C4 {
    static o(a6) {
        const o7 = {
            "call": f3,
            "construct": f3,
            "deleteProperty": f3,
            "get": f3,
            "getOwnPropertyDescriptor": f3,
            "getPrototypeOf": f3,
            "has": f3,
            "ownKeys": f3,
            "preventExtensions": f3,
            "set": f3,
            "setPrototypeOf": f3,
        };
        const v14 = +f3;
        this << -6;
        Math.log(v14);
        new Proxy(v2, o7);
        return this;
    }
}
new C4();
const v20 = new C4();
new C4();
[14135,-47156,8,-9007199254740991,128,2353,5];
[-9007199254740990,42069,1923813459];
[536870912];
function f25() {
}
let v30 = 8;
const v36 = ("symbol")[5];
v36 < v36;
v36[257] = "symbol";
f25(..."10", ..."unscopables", ..."symbol", "W");
const v41 = new Uint8ClampedArray(9);
new Int8Array(2);
new Float32Array(15);
("boolean").length;
v20[2] = "1";
v30 ^= 2;
const v50 = [];
Reflect.apply(("W").trimRight, v41, v50);
