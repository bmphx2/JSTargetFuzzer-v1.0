[-574800364,-9007199254740990,-62300,268435439,1073741823,-1249143247,-1282029655];
const v4 = [-9223372036854775808];
const v5 = [-14,-4096,-1213885225,6];
function f6() {
    return v5;
}
const o10 = {
    65535: 65466,
};
const v11 = delete o10[65535];
const v18 = new Int16Array(255);
try { o10.p(v11, f6, -2.0, Int16Array, Uint8Array); } catch (e) {}
v5.__proto__ = o10;
const v25 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f29(a30, a31) {
    const o55 = {
        174: a30,
        "c": v25,
        __proto__: v25,
        10: a31,
        ...a30,
        ...o10,
        ...a30,
        65536: a30,
        "e": v25,
        set f(a33) {
            try { a33(Int16Array, a33, a33, this); } catch (e) {}
            function F38(a40, a41, a42) {
                if (!new.target) { throw 'must be called with new'; }
                this.b = v18;
                this.g = a30;
                this.a = a30;
            }
            const v43 = new F38(a30, a30, 2147483649);
            new F38(v43, v5, v4);
            new F38(f29, a31, 536870889);
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o55;
}
f29(5, 255);
const v57 = f29(255, 257);
f29(257, 255);
const v59 = new Uint8Array(257, 257, 255);
let v60;
try { v60 = v59.includes(v59); } catch (e) {}
Object.defineProperty(v57, 257, { enumerable: true, get: f29 });
for (let v61 = 0; v61 < 32; v61++) {
    v25["p" + v61] = v61;
}
v25[3];
try { v60["p"](Int16Array); } catch (e) {}
