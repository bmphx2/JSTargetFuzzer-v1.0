let v4 = new Date();
const v5 = [-4.001499879072313e+307,-1.7976931348623157e+308,0.0,3.0];
const v6 = [929.9437008071284,-Infinity];
const v7 = [4.88896187635838];
const v13 = new Int16Array(255);
const v16 = new Uint8Array(5);
const v19 = new Uint8ClampedArray(8);
function f20(a21, a22) {
    const o38 = {
        174: a21,
        "c": v16,
        65536: -415475296,
        "e": 255,
        set f(a24) {
            try { a24(Int16Array, a24, a24, this); } catch (e) {}
            v4 = this;
            let v28 = -11n;
            v28 &= 4n;
            new Uint8ClampedArray(2);
            new Uint16Array(2);
            new Int16Array(2046);
        },
    };
    return o38;
}
const v39 = f20(5, 255);
const v40 = f20(255, 257);
f20(4294967295, v40);
const v42 = new Uint8Array(257, 5, 255);
function f43(a44, a45, a46) {
    const o47 = {
        "h": v13,
        4: a46,
    };
    return o47;
}
const v48 = f43(v39, v5, v39);
const v49 = f43(4294967295, v6, v4);
f43(v16, v6, v39);
let v51;
try { v51 = v42.includes(v42); } catch (e) {}
Object.defineProperty(v40, v42, { enumerable: true, get: f20 });
for (let v52 = 0; v52 < 32; v52++) {
    const v54 = "p" + v52;
    v16[v54] = v52;
    const v55 = v19 + Date;
    const v56 = Date(257);
    v19[v55] = v56;
    const v57 = v56[4];
    function F58(a60, a61) {
        if (!new.target) { throw 'must be called with new'; }
        this.f = v54;
        this.c = v48;
        this.e = a61;
    }
    new F58(v7, v57);
    new F58(v51, -65536);
    new F58(v6, v49);
}
v51[3];
try { (257)["p"](Int16Array); } catch (e) {}
