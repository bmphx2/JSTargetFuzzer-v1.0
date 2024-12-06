new WeakMap();
new Uint8ClampedArray(10);
new Uint32Array(2, -5.0, -8, 1000);
new Uint16Array(257);
function F20() {
    if (!new.target) { throw 'must be called with new'; }
    const o23 = {
        __proto__: this,
        "c": this,
        "d": Uint8ClampedArray,
    };
    Symbol.for();
}
new F20();
new F20();
