new Uint16Array(14);
new Float64Array(122);
new Int8Array(3398);
const o21 = {
    get e() {
        function f16() {
            return this;
        }
        return f16;
    },
    m(a18, a19, a20) {
        return a20;
    },
};
Reflect.isExtensible(o21.m);
