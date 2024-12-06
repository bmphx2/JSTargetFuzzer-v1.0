new Uint8ClampedArray(4096);
const v5 = new Int16Array(585);
const v8 = new Int16Array(469);
function f9(a10, a11, a12, a13) {
    const o28 = {
        "c": Uint8ClampedArray,
        10: 4096,
        ...v8,
        "h": 469,
        ...v5,
        get g() {
            class C15 {
                [a13];
                static [a12] = this;
                7;
            }
            const v16 = C15 === a12;
            function F17(a19, a20, a21) {
                if (!new.target) { throw 'must be called with new'; }
                this.f = v16;
                this.h = this;
            }
            new F17(585, a11, 4096);
            new F17(469, a10, a12);
            new F17(4096, Int16Array, a12);
            const v25 = new C15();
            new C15();
            new C15();
            return v25;
        },
    };
    return o28;
}
f9(469, 585, 469, 469);
const v30 = f9(469, 4096, 4096, 4096);
f9(585, 4096, 585, 585);
const v34 = new Uint8ClampedArray(7);
const v37 = new Int16Array(4);
new Int16Array(64);
const v43 = new Uint32Array(181);
let v45 = BigUint64Array;
Uint8ClampedArray >>> Uint32Array;
const o47 = {
    "apply": f9,
    "call": f9,
    "construct": f9,
    "defineProperty": f9,
    "get": f9,
    "getOwnPropertyDescriptor": f9,
    "isExtensible": f9,
    "ownKeys": f9,
    "preventExtensions": f9,
    "set": f9,
    "setPrototypeOf": f9,
};
new Proxy(v43, o47);
let v50 = new v45(1);
let v51 = 253;
[v51,,v45,v50] = v43;
try { v45["abs"](181, v51, v45); } catch (e) {}
typeof 638046528 === "bigint";
v50 << -128;
const o63 = {
    "maxByteLength": 12,
};
const v65 = new ArrayBuffer(12, o63);
new Int32Array(v65);
new Uint16Array(v51);
for (let i75 = 0;
    i75 < 2;
    (() => {
        i75++;
        function F80(a82, a83, a84) {
            if (!new.target) { throw 'must be called with new'; }
            this.b = a84;
            this.a = i75;
        }
        new F80(-128, v30, F80);
        new F80(i75, v45, F80);
        new F80(i75, v30, Uint8ClampedArray);
    })()) {
    const v89 = new Function("x");
    v89.name;
}
Function();
("x")["repeat"](469);
v37[1] = 4;
for (let v94 = 0; v94 < 32; v94++) {
    v34["p" + v94] = v94;
}
