const v1 = new Set();
function f2(a3, a4) {
    const o37 = {
        ...a3,
        __proto__: v1,
        [Set](a6, a7) {
            Object.defineProperty(a6, "e", { writable: true, configurable: true, value: a4 });
            return a7;
        },
        [a4](a13) {
            [Set,a4,a13];
            const v15 = [a13];
            const v16 = [Set,v1,a3];
            const o17 = {
            };
            const o21 = {
                get c() {
                    ~v16;
                    this[a3];
                    a3.a = o17;
                    return o17;
                },
            };
            new Proxy(f2, o21);
            this[a4];
            const v26 = new Proxy(o21, a4);
            v26.b = f2;
            o17.c;
            typeof v1 === "number";
            new Proxy(v1, o17);
            const o33 = {
            };
            const v35 = new Proxy(f2, o33);
            v35 & this;
            return v15;
        },
    };
    return o37;
}
const v38 = f2(f2, f2);
const v39 = f2(v38, v1);
const v40 = f2(Set, v38);
const v41 = [v39,v40,f2,v40];
v38.valueOf = f2;
Object.defineProperty(v1, 3, { get: f2, set: f2 });
Set || v38;
for (let v43 = 0; v43 < 32; v43++) {
    v41["p" + v43] = v43;
}
const v46 = [f2,v38,v39,f2];
[v38,v46,v46];
function f48() {
    return Set;
}
Function(undefined, "MAX_SAFE_INTEGER");
