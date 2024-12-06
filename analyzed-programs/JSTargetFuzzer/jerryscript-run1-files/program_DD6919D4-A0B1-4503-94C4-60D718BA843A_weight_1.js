let v2 = 9830;
v2[268435441] = v2;
const v3 = ++v2;
const v4 = typeof -12545;
let v6 = -12545 % v2;
try { ("object").slice(v3, v6); } catch (e) {}
h = 4;
try { ("object").concat(v2, v6, 4); } catch (e) {}
v4 === "object";
new Int8Array(7, 4);
new BigUint64Array(127);
v6 = 127;
new Uint8Array(128);
new BigUint64Array(127);
new Uint16Array(149);
new Date(10000);
function F35(a37, a38) {
    if (!new.target) { throw 'must be called with new'; }
    if (a37) {
        function F39(a41, a42) {
            if (!new.target) { throw 'must be called with new'; }
            a42(F39);
        }
    }
}
new F35(0.1725881460737685);
