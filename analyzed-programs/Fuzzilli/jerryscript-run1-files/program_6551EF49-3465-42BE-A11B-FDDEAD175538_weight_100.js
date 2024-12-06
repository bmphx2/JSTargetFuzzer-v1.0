function f0() {
    const o7 = {
        "f": 5.0,
        "b": 5.0,
        set h(a5) {
            super.e = a5;
            a5.a = this;
            try { this.unshift(1000.0, "setYear", this); } catch (e) {}
        },
        "h": 5.0,
        7: "setYear",
        "c": 5.0,
        "a": 1000.0,
        ..."setYear",
        "g": 5.0,
        355: 1000.0,
    };
    return o7;
}
const v8 = f0();
const v9 = f0();
const v10 = f0();
v8.__proto__ = v9;
let v21 = 0;
do {
    const o22 = {
        "apply": f0,
        "construct": f0,
        "deleteProperty": f0,
        "getOwnPropertyDescriptor": f0,
        "isExtensible": f0,
        "setPrototypeOf": f0,
    };
    new Proxy(v10, o22);
    v21++;
} while (v21 < 0)
const v28 = [319.51887904468776,0.5047432755789496,5.0,Infinity,-1e-15];
[0.9861492073122853,-0.9588005021449693,2.220446049250313e-16,-Infinity,-383684.72742088407,1000000000.0,1000000.0];
[-5.710874654661786e+307,2.110544932687583,0.7612541935024404,-1000000000.0];
const o35 = {
    valueOf() {
        this[v28];
        f0();
        return 268435439;
    },
};
new Int8Array(1640);
new Float64Array(128);
new BigInt64Array(512);
10901n > 9223372036854775807n;
