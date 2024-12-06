function f0() {
}
const v1 = [f0,f0,f0,f0,f0];
const v2 = [v1,v1];
const v3 = [v2,v2];
let v6 = 0;
do {
    for (const v7 of v3) {
        function f8() {
            return v7;
        }
    }
    v3.__proto__ = v2;
    v2[Symbol.toPrimitive];
    v6++;
} while (v6 < 7)
("find").slice(45103);
