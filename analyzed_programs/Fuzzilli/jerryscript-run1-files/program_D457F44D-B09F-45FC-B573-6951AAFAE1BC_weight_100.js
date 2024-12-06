class C3 {
    #valueOf(a5) {
        const v6 = a5 == 1n;
        let v7;
        try {
        const t0 = 8n;
        v7 = new t0(1n, v6, 1n, v6, 1n);
        } catch (e) {}
        127n ** v6;
        const v9 = v7?.f;
        +v9;
        v9.g = 1n;
        return v6;
    }
    [8n];
    2;
}
const v11 = new C3();
const v12 = new C3();
const v13 = new C3();
function f14(a15, a16) {
    const o32 = {
        "e": v11,
        [v13]: v12,
        [a15]: a16,
        [1n]: v12,
        [C3](a18, a19, a20) {
            const v21 = a15.__proto__;
            try { v13.m(a20, v11, a19, a16); } catch (e) {}
            let v24 = -47134;
            const v25 = v24++;
            const v26 = v25 ^ v24;
            Math.cosh(a16);
            Math.atanh(v21);
            v26 || v25;
            Math.asin(v24);
            return v24--;
        },
    };
    return o32;
}
let v33 = f14(127n, 127n);
f14(C3, 127n);
v33 = f14(v12, 127n);
d = "Euz5w";
Object.defineProperty(v13, 1226, { writable: true, enumerable: true, value: v11 });
this.g = this;
v11.c = v12;
Object.defineProperty(C3, 6, { writable: true, configurable: true, set: f14 });
