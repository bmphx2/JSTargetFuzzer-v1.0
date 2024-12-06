new Int16Array(231);
new Int32Array(257);
new Uint8ClampedArray(128);
const o14 = {
    get g() {
        return this;
    },
};
let v15 = [o14,o14,o14,o14];
let v16 = --v15;
let v17 = ++v16;
Object.defineProperty(o14, "g", { value: --v17 });
const o25 = {
    get e() {
        function f22(a23, a24) {
            'use strict';
            a23.c = this;
            return a24;
        }
        return this;
    },
};
