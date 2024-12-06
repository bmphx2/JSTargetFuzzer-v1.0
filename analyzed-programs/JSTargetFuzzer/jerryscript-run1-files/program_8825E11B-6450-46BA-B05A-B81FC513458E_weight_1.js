function f3(a4, a5) {
    const o17 = {
        [169005.81502307486](a7, a8) {
            let v10 = -4096;
            let v12 = ++a4;
            Math.sqrt(++v10);
            v12++;
            +a5;
            return this;
        },
        "toPrimitive": -1.0,
        "c": a4,
        "a": 169005.81502307486,
    };
    return o17;
}
f3(-1.0, -1000000000000.0);
const v19 = f3(-1000000000000.0, -1.0);
const v20 = f3(-1000000000000.0, -1000000000000.0);
class C24 {
    static 257;
    d = v20;
    n(a26, a27, a28, a29) {
        Object.defineProperty(v19, 2, { writable: true, configurable: true, value: f3 });
        const o30 = {
            "construct": f3,
            "get": f3,
            "getOwnPropertyDescriptor": f3,
            "has": f3,
            "isExtensible": f3,
            "ownKeys": f3,
            "set": f3,
            "setPrototypeOf": f3,
        };
        const v32 = new Proxy(a27, o30);
        return v32;
    }
}
new C24(1855860822);
new C24();
new C24();
const v37 = new Date();
const v40 = new Int32Array(3499);
v40["copyWithin"](306, 3499);
const v45 = [Date,Date,Date,Date];
for (const v48 of Reflect.apply(v37.toUTCString, v37)) {
    v48.__proto__ = v45;
}
