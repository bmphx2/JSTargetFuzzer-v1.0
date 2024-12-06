[-4096,257,536870888];
const v1 = [-39355,-9007199254740992];
const v2 = [-1024,64,2147483648,-1,-2008663774,1024,536870888,9223372036854775807];
function f9(a10, a11, a12) {
    const o19 = {
        "b": a11,
        n(a14, a15, a16, a17) {
            const v18 = super.c;
            a15 = a16;
            a10 = 41189;
            a10 &= v18;
            return a10;
        },
        "g": 9,
        "a": 257,
        4294967295: -65536,
        2147483649: v1,
    };
    return o19;
}
const v20 = f9(1868064381, v2, v2);
f9(1868064381, v2, 257);
f9(257, v1, v20);
function F23() {
    if (!new.target) { throw 'must be called with new'; }
    this.a = -589293468;
}
const v26 = new F23();
const v27 = new F23();
const v28 = new F23();
let v30 = -937546.0274885385;
const v35 = [-1e-15,1000000.0,v30,v28];
const v36 = [1000000.0,-1e-15,v27,v35,-1e-15];
const v37 = [v28,v30,v28];
function f38(a39, a40) {
    const o65 = {
        "b": -1e-15,
        ...a40,
        [v37]: v27,
        __proto__: v27,
        "d": v28,
        "f": a40,
        [a39]: v35,
        set a(a42) {
            this.__proto__ = v36;
            v37[0.22410269410035233] = a39;
            let v43 = Symbol;
            const v44 = v43.iterator;
            let v45 = -v43;
            const v50 = F23 & 41098;
            const v51 = --v45;
            Math.floor(v50);
            41098 >>> v50;
            --F23 & v51;
            const o64 = {
                [v44]() {
                    const o63 = {
                        next() {
                            v43--;
                            const v61 = 10 == 0;
                            const o62 = {
                                "done": v61,
                                "value": 10,
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
f38(v37, v26);
f38(v37, v27);
const v68 = f38(v36, v37);
with (v28) {
    let v69 = a;
    const v70 = v69 || v69;
    let v71 = `rizPp${0.22410269410035233}number${v68}sticky${426.7417148362349}-29565${v70}atan2`;
    ({"length":v69,} = v71);
    v30 |= 426.7417148362349;
    let v74 = -9;
    const v76 = Math.round(v74);
    const v77 = v71++;
    v74++;
    Math.fround(v77);
    const v80 = Math.sign(v74);
    v74 || v71;
    try { v70(v28, v37, v80); } catch (e) {}
    Math[9] = v76;
}
