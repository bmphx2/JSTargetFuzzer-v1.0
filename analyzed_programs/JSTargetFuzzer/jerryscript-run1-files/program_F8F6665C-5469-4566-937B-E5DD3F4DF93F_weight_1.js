function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.d = 512;
}
const v3 = new F0();
const v4 = new F0();
const v5 = new F0();
for (let i8 = 0, i9 = F0; i8 < i9; i8++, i9--) {
    v4.d;
}
const v22 = [true,F0,v3];
const v23 = [v3,true];
[v23,v23,true,true,v4];
class C25 extends F0 {
    set c(a27) {
        function f28(a29, a30) {
            const o31 = {
                "e": a29,
            };
            return o31;
        }
        f28(v4, v23);
        a27(v5, v23);
        f28(v5, v22);
    }
}
const v35 = new C25();
new C25();
new C25();
let v38 = null;
const v45 = new Uint32Array([6,17590]);
new Uint8Array(v45);
v5.d;
const v54 = Symbol.iterator;
const o63 = {
    [v54]() {
        let v56 = 10;
        const o62 = {
            next() {
                v56--;
                const v60 = v56 == 0;
                const o61 = {
                    "done": v60,
                    "value": v56,
                };
                return o61;
            },
        };
        return o62;
    },
};
let v67 = new Uint32Array(11);
let v70 = new Uint32Array(7);
const v73 = new Uint8Array(256);
const v74 = ("451")[1439];
function f75() {
    return v74;
}
const v76 = v73 ^ Uint8Array;
f75();
a = v76;
try { ("function").replace("a", "a"); } catch (e) {}
({"c":v38,"d":v70,"f":v67,...C25} = v35);
function f79(a80, a81, a82) {
    new Int8Array(1182);
    new Uint8Array(4);
    new Uint8Array(2);
    return f75;
}
f79("function", 256, o63);
