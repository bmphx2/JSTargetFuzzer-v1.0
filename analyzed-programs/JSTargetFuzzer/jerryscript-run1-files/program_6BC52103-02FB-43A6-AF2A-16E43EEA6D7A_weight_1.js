const v3 = [-19149,1073741825];
const v4 = [1073741825,v3,268435439,v3,v3];
const v5 = [v3,v4,v3,v4,268435439];
const v9 = [v5,268435439,849098191];
[23921394,v5];
[v9,55307177,268435439];
function F12(a14, a15, a16) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v4;
    v9.g = a15;
    this.d = a16;
}
new F12(23921394, 55307177, -19149);
new F12(55307177, 268435439, v5);
new F12(268435439, 23921394, 268435439);
const v22 = new Array(849098191);
let v24 = 4096;
function f26(a27, a28, a29, a30) {
    const o40 = {
        "g": v24,
        ...v5,
        "e": a28,
        set b(a32) {
            function F33(a35, a36) {
                if (!new.target) { throw 'must be called with new'; }
                this.g = a35;
            }
            new F33(a30, 129);
            new F33(a29, a29);
            new F33(F33, 481111932);
        },
    };
    return o40;
}
let v41 = f26(v24, 481111932, 129, v22);
f26(10, 481111932, 10, 1073741825);
f26(v41, v24, 481111932, v24);
v41.g;
try {
    let v45;
    try { v45 = v41.isSealed(); } catch (e) {}
    v41 = v45;
    try { v45["o"](v45); } catch (e) {}
    new Int32Array(2226);
    new Uint16Array(9);
    new Uint32Array(256);
    v24 = v45;
} catch(e57) {
    Array[0] = e57;
    try { e57(Array); } catch (e) {}
}
new Int32Array(1959);
new Int32Array(512);
new Int16Array(213);
