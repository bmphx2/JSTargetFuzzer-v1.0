function f0() {
}
function f1() {
    const o11 = {
        [f0]() {
            this + this;
            this.length = 13;
            let v7 = 8.660338542373228;
            const v8 = -f0;
            v7++;
            Math.log(v8);
            return v8;
        },
        __proto__: f0,
        [f0]: f0,
    };
    return o11;
}
const v12 = f1();
const v13 = f1();
const v14 = f1();
function F15(a17) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a17;
    this.f = f1;
    this.c = a17;
}
const v18 = new F15(v12);
const v19 = new F15(v13);
const v20 = new F15(v14);
new WeakMap();
function F23(a25, a26) {
    if (!new.target) { throw 'must be called with new'; }
    this.a = a26;
}
new F23(v14, v19);
const v28 = new F23(v20, v18);
new F23(v28, v12);
const v32 = new Uint32Array(181);
let v34 = BigUint64Array;
let v35 = new v34(1);
let v36 = 253;
[v36,,v34,v35] = v32;
try { v34["abs"](181, v36, v34); } catch (e) {}
new Uint16Array(v36);
for (let i70 = (() => {
        class C50 {
            a = 10;
            static n(a52, a53, a54, a55) {
                for (let i58 = 0, i59 = 10;
                    i58 < i59;
                    (() => {
                        function F63(a65, a66) {
                            if (!new.target) { throw 'must be called with new'; }
                            this.c = a54;
                        }
                        i58++;
                    })()) {
                }
            }
        }
        return 0;
    })();
    i70 < 2;
    i70++) {
    const v76 = new Function("x");
    v76.name;
}
Function();
