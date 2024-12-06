let v0 = 10;
let v1 = 1480430530;
function f3(a4, a5) {
    const o17 = {
        [v1](a7) {
            let v11;
            try { v11 = a5(1024n, v0, 1024n, a5); } catch (e) {}
            Object.defineProperty(v11, 2797, { writable: true, enumerable: true, value: a5 });
            return 1073741823n;
        },
        ...a5,
        "b": a4,
        m(a13, a14, a15, a16) {
            this[255] = a14;
            return a13;
        },
        "h": v0,
    };
    return o17;
}
const v18 = f3(v1, v1);
const v19 = f3(0, v18);
const v20 = f3(v1, v19);
function F21(a23, a24, a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.d = v1;
}
const v27 = new F21(v1, v1, 0, v18);
try { v19.m(v19, v18, v20, v18); } catch (e) {}
({"d":v1,"g":f3,"h":v0,} = v18);
let v29;
try { v29 = v20.m(F21, v27); } catch (e) {}
v29[4019] >>= v29;
v18[v0];
new F21(v1, v1, v0, v18);
new F21(v1, v1, v0, v19);
const v35 = new Uint32Array(9);
new Uint16Array(v35);
