function F3(a5) {
    if (!new.target) { throw 'must be called with new'; }
    this.b = a5;
}
new F3(536870912n);
new F3(536870912n);
new F3(4096n);
new Uint8Array(512);
new Uint8ClampedArray(19);
new Float32Array(7);
("SA").toUpperCase();
Math.imul();
