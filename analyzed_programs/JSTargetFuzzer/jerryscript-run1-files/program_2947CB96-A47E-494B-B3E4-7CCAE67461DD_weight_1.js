let v4 = -9223372036854775808;
function f6(a7, a8) {
    const o20 = {
        ...v4,
        "a": 51936,
        "b": 128,
        get d() {
            return a7;
        },
        toString(a14, a15, a16) {
            return 51936;
        },
    };
    return o20;
}
const v21 = f6(v4, 51936, 128, 59172, v4);
const v22 = 51936 / -268435456;
v21.e = 128;
~v22;
v21[11] = 51936;
const v24 = v21[0];
const v25 = f6(51936, 128);
const v26 = f6(59172, 59172);
class C30 extends f6 {
    constructor(a32, a33, a34, a35) {
        super(a33, a35);
        for (let i37 = 0; i37 < 10; i37++) {
            const v44 = new Map();
            const v46 = v44["values"]();
            const v48 = Array(v46);
            const v51 = new Uint32Array(2334);
            v48[v51.join(v46)];
            for (let i55 = 0; i55 < 5; i55++) {
                try { new a35(v24, a34, i55, a33); } catch (e) {}
                Object.defineProperty(v26, -4294967295, { configurable: true, get: f6, set: f6 });
            }
            super.a = a35;
            try { a32(v26, i37, i37, v21); } catch (e) {}
        }
    }
}
v4--;
typeof v25 === "function";
const o67 = {
    "apply": f6,
};
new Proxy(v21, o67);
new C30(5, v4, v21, -4294967295);
new C30(59172, v4, v21, 51936);
new C30(-65535, 128, C30, 128);
Date["UTC"](6);
