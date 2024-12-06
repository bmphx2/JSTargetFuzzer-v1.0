const v0 = [517.5129419774939,-1000000000000.0,8.975914116994133];
const v1 = [1e-15,-456.1483150374985];
const v2 = [411.7343240394307,1000000.0];
const v3 = [v1,v1];
const v4 = [v3,v0,v2,v3,v3];
const v5 = [v0,v4];
const v7 = new Map();
function f8(a9, a10, a11, a12) {
    const o29 = {
        [v4]: v0,
        "a": a9,
        "g": v7,
        [a11]: a11,
        "d": v3,
        [v5]: v0,
        [a9](a14, a15, a16, a17) {
            const v19 = Symbol.iterator;
            const o28 = {
                [v19]() {
                    let v21 = 10;
                    const o27 = {
                        next() {
                            v21--;
                            const v25 = v21 == 0;
                            const o26 = {
                                "done": v25,
                                "value": a12,
                            };
                            return o26;
                        },
                    };
                    return o27;
                },
            };
            return a11;
        },
    };
    return o29;
}
f8(v2, v1, v7, v2);
const v31 = f8(v3, v4, v4, v0);
f8(v7, v1, v31, v5);
[v2,v7,v31,v2];
[f8,v7,v5];
[f8,v7,v3,v7];
new Int16Array(255);
const v41 = new Uint8Array(5);
new Uint8ClampedArray(257);
function f45(a46, a47) {
    const o60 = {
        174: a46,
        "c": v41,
        65536: a46,
        "e": v41,
        set f(a49) {
            try { a49(Int16Array, a49, a49, this); } catch (e) {}
            new Uint8ClampedArray(2);
            new Uint16Array(341);
            new Int16Array(16);
        },
    };
    return o60;
}
f45(5, 255);
const v62 = f45(255, 257);
f45(257, 255);
const v64 = new Uint8Array(257, 257, 255);
let v65;
try { v65 = v64.includes(v64); } catch (e) {}
Object.defineProperty(v62, 257, { enumerable: true, get: f45 });
for (let v66 = 0; v66 < 32; v66++) {
    v41["p" + v66] = v66;
}
v41[3];
try { v65["p"](Int16Array); } catch (e) {}
