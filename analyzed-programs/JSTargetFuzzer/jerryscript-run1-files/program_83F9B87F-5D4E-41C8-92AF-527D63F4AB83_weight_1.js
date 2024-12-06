const v0 = [];
function f1() {
    const o12 = {
        set g(a3) {
            try { a3(v0); } catch (e) {}
            v0.f = this;
            let v6 = 512;
            const v7 = v6 / a3;
            const v8 = -v0;
            v7 >>> this;
            v6 | v8;
            v6++;
        },
        "a": v0,
    };
    v0[1] ^= o12;
    o12.g = f1;
    try { o12.m(v0, f1, f1, o12); } catch (e) {}
    return o12;
}
const v17 = f1();
f1();
f1();
let v22 = 0;
while (v22 < 10) {
    for (let v25 = 0; v25 < 32; v25++) {
        const v27 = "p" + v25;
        v17[v27] = v27;
    }
    v22++;
}
function f30() {
    return 12n;
}
function F34() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v37 = new F34();
const v38 = new F34();
const v39 = new F34();
let v41 = -937546.0274885385;
let v43 = 0.22410269410035233;
const v46 = [-1e-15,1000000.0,v41,v39];
const v47 = [1000000.0,-1e-15,v38,v46,-1e-15];
const v48 = [f1,v41,v39];
function f49(a50, a51) {
    const o65 = {
        "b": -1e-15,
        ...a51,
        [v48]: v38,
        __proto__: 2n,
        "d": v39,
        "f": a51,
        [a50]: v46,
        set a(a53) {
            this.__proto__ = v47;
            v48[v43] = a50;
            const v55 = Symbol.iterator;
            const o64 = {
                [v55]() {
                    let v57 = 10;
                    const o63 = {
                        next() {
                            v57--;
                            const v61 = v57 == 0;
                            const o62 = {
                                "done": v61,
                                "value": v61,
                            };
                            return o62;
                        },
                    };
                    return o63;
                },
            };
        },
    };
    return o65;
}
f49(v48, v37);
f49(v48, v38);
const v68 = f49(v47, v48);
with (v39) {
    let v69 = a;
    let v71 = `rizPp${v43}number${v68}sticky${426.7417148362349}-29565${v69 || v69}atan2`;
    ({"length":v69,} = v71);
    v41 |= 426.7417148362349;
    let v73 = -1487147530;
    Math.round(-9);
    const v77 = v71++;
    v73++ != 2n;
    v48[v73];
    Math.length = 2;
    v43 %= v43;
    Math.fround(v77);
    Math.sign(-9);
    -9 || v71;
}
