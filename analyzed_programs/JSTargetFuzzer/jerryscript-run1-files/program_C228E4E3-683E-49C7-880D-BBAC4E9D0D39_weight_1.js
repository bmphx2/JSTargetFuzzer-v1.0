const v1 = new Date();
class C8 {
    static set h(a10) {
        Object.defineProperty(v1, 7, { writable: true, enumerable: true, get: Date, set: Date });
        Date[a10] = -9007199254740991;
        a10 / 1000;
        const o12 = {
            "apply": Date,
            "call": Date,
            "construct": Date,
            "defineProperty": Date,
            "deleteProperty": Date,
            "get": Date,
            "unscopables": Date,
            "getPrototypeOf": Date,
            "has": Date,
            "isExtensible": Date,
            "ownKeys": Date,
            "set": Date,
            "setPrototypeOf": Date,
        };
        new Proxy(v1, o12);
    }
}
new C8();
new C8();
new C8();
function f21() {
}
const v22 = [536870888,512,-802650095,-5,16,257,6,9,-3];
const v23 = [29758];
const v25 = [f21];
Reflect.apply(v23.filter, v22, v25);
