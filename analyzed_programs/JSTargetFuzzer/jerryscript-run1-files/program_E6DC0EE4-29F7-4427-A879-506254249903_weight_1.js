function f0() {
}
new WeakSet();
new Map();
const v8 = new Uint8ClampedArray(15);
new Uint8ClampedArray(64);
new Float64Array(1);
const v17 = new Uint8ClampedArray(2634);
const v20 = new Uint32Array(3769);
v20[Symbol.split];
let {"buffer":v24,"g":v25,"length":v26,...v27} = v8;
64 & v8;
function f29(a30, a31, a32, a33) {
    const o34 = {
        ...v20,
        ...v17,
    };
    return o34;
}
const v35 = f29(Uint32Array, 2634, 3769, v20);
f29(v35, v35, v35, Uint8ClampedArray);
const v37 = f29();
for (let i39 = 0; i39 < 6; i39++) {
    try { new g(v37); } catch (e) {}
}
