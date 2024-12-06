function f0() {
}
function f1() {
    return f0;
}
function f2() {
    return f1;
}
function f3(a4) {
    const o10 = {
        "h": f1,
        get h() {
            for (const v6 in a4) {
                const o7 = {
                };
                new Proxy(this, o7);
            }
            return f2;
        },
        "b": a4,
        "c": f1,
        "a": f2,
        6: f1,
        "e": a4,
        "f": f0,
        "c": f0,
    };
    return o10;
}
const v11 = f3(f0);
const v12 = f3(f1, f2, f3, f3);
const v15 = Promise.resolve(BigInt64Array);
const v16 = f3(f1);
[v11,f3,v16];
const v18 = [f0,v11,f0,f2,v12];
[f2,f1,f3,v11,v11,v16];
let v22 = -29830n;
const v23 = v15[v22];
try { v23(v11, f3, Promise, v18); } catch (e) {}
v22 *= -23737n;
new BigInt64Array(1454);
new BigInt64Array(2);
new Int16Array(1024);
const v35 = Date.__proto__;
("entries").matchAll(v35);
v35();
