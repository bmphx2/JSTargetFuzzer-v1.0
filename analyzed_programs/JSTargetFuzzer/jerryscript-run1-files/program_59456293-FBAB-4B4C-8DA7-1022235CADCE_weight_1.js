function F0() {
    if (!new.target) { throw 'must be called with new'; }
    this.f = 9223372036854775807;
    this.c = 9223372036854775807;
}
new F0();
new F0();
new F0();
[1073741825,690644465,257,160050226];
[1024,4294967296,129,9,110339339,-1,30673];
[536870888,-268435456,9007199254740990];
const v16 = [Infinity];
const v17 = [-9.40814191403733];
class C18 extends Date {
    constructor(a20, a21) {
        super(a21);
    }
}
new C18(v16, v17);
