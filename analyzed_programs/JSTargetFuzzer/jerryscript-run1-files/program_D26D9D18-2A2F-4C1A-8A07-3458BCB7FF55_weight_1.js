new Int8Array(7);
const v5 = new Date();
v5.setMinutes(-1, 7, -6279);
v5["setYear"]();
const o12 = {
    "apply": Date,
    "call": Date,
    "defineProperty": Date,
    "deleteProperty": Date,
    "get": Date,
    "getOwnPropertyDescriptor": Date,
    "getPrototypeOf": Date,
    "has": Date,
    "isExtensible": Date,
    "ownKeys": Date,
    "preventExtensions": Date,
    "set": Date,
    "setPrototypeOf": Date,
};
new Proxy(v5, o12);
new BigInt64Array(3);
new Float64Array(256);
new Uint16Array(512);
new Int32Array(2);
new Int32Array(3);
const v30 = [943620025];
const v31 = [-4294967295];
const o35 = {
    valueOf() {
        this.d >>>= -1;
        return v31;
    },
};
Object.defineProperty(v31, "b", { enumerable: true, value: o35 });
v30.includes(1024);
