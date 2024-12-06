const v4 = new WeakSet();
function f5(a6) {
    const o13 = {
        [0]: -32225,
        "c": 0,
        __proto__: v4,
        o(a8, a9) {
            a9 ^= a6;
            [a6,a8,v4,this];
            [a6,-65536];
            [a9,WeakSet,a6,-65536];
            return v4;
        },
        [a6]: f5,
        "h": v4,
    };
    return o13;
}
f5(0);
f5(-32225);
f5(0);
function f17() {
    return -65536;
}
new Float32Array(1000);
new Int16Array(127);
new Uint8ClampedArray(1053);
const v27 = [-4.728706515877795];
try { v27.reduce(...WeakSet); } catch (e) {}
