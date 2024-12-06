const v0 = [811654.3959743995];
const v1 = [2.8711750832785388,-4.0,8.611501182343872];
const v2 = [-6.435724552088439,-1.0,642.9680034073888,71321.78430098249,1.727902726078566e+308,NaN,8.999045072385176,1000.0];
function f3(a4, a5) {
    const o28 = {
        __proto__: v0,
        set g(a7) {
            let v8;
            try { v8 = this.n(); } catch (e) {}
            v0[8] = v8;
        },
        "f": v2,
        set d(a10) {
            for (let i12 = 0;
                i12 < 3;
                (() => {
                    a4++;
                    const o17 = {
                    };
                    const v19 = new Proxy(f3, o17);
                    o17.toString = v19;
                })()) {
                const o23 = {
                    "maxByteLength": 3620,
                };
                const v25 = new SharedArrayBuffer(128, a10);
                new Uint16Array(v25);
            }
        },
    };
    return o28;
}
const v29 = f3(v2, v1);
f3(v0, v2);
let v31 = f3(v0, v2);
let v32 = 5;
v32 = -855761603;
v31 = v29;
f3(v29, -723494141);
const v42 = Symbol.iterator;
const o51 = {
    [v42]() {
        let v44 = 10;
        const o50 = {
            next() {
                v44--;
                const v48 = v44 == 0;
                const o49 = {
                    "done": v48,
                    "value": v44,
                };
                return o49;
            },
        };
        return o50;
    },
};
const v56 = [65535n,0n,964329252n];
let v57 = [964329252n,964329252n,v56,v1];
const v58 = [v57,v57,v56,964329252n,0n];
const v59 = [65535n,v57];
[v58,0n];
const v61 = [v57];
Object.defineProperty(v59, 3, { writable: true, value: 4096 });
o51[1399100270] = 6;
v57.toString = f3;
+6;
Math.tanh(-323.5989777455477);
!0n;
Math.tan(2147483649);
const t66 = "fdNr";
t66[0] = 65535n;
let v75;
try {
const t0 = "localeCompare";
v75 = new t0(v56, v61, v61, 58270);
} catch (e) {}
async function* f76(a77, a78, a79) {
    ({"length":a77,...v57} = a78);
    yield v1;
    await a77;
    yield "o";
    return a77;
}
f76(58270, v59, v75);
