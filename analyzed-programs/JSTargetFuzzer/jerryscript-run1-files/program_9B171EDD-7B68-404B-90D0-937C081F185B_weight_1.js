function f0() {
    const o14 = {
        ...1000000000.0,
        2147483647: 1000000000.0,
        "b": -5.0,
        "c": 0.794282755379895,
        o(a5) {
            this.c &= a5 - -5.0;
            for (let v7 = 0; v7 < 32; v7++) {
                a5["p" + v7] = v7;
            }
            const v10 = 1000000000.0 && this;
            let v12;
            try { v12 = this["o"](v10, "o"); } catch (e) {}
            try { v12("o", 1000000000.0, v12, "o"); } catch (e) {}
            return f0;
        },
    };
    return o14;
}
const v15 = f0();
Object.defineProperty(f0(), v15, { enumerable: true, get: f0 });
const v17 = f0();
const o18 = {
    "construct": f0,
    "deleteProperty": f0,
    "ownKeys": f0,
    "preventExtensions": f0,
    "set": f0,
};
new Proxy(v17, o18);
f0();
for (let [i30, i31] = (() => {
        const v24 = [-1.4322344581691674e+308];
        const v25 = [0.9824621037580522,2.2889030652093406e+307,1.7976931348623157e+308,2.220446049250313e-16,4.0,-5.0];
        function f26() {
            return v25;
        }
        v24.filter(f26);
        return [0, 10];
    })();
    i30 < i31;
    (() => {
        let v35 = i30++;
        v35--;
    })()) {
    new Float64Array(45);
    new Uint32Array(9);
    new Uint8Array(0);
}
const v48 = new Float32Array(2082);
let v49 = 194;
const v51 = new BigInt64Array(v49);
const v54 = new Float32Array(128);
class C55 {
}
v49 = 2082;
v48 / v54;
try { v54.indexOf(v49, v49); } catch (e) {}
const v58 = v51.__proto__;
const v60 = new Float32Array();
const v62 = new Uint8Array(v60, C55, Uint8Array);
const o63 = {
};
new Set(v62, o63);
const v66 = v60.__proto__;
v58.__proto__ = v66;
const v67 = [v66,v66,v66,v66];
Float32Array.c;
for (let v69 = 0; v69 < 32; v69++) {
    v66["p" + v69] = v69;
}
([v67])["shift"]();
