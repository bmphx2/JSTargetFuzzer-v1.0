function F6(a8, a9, a10) {
    if (!new.target) { throw 'must be called with new'; }
    this.g = 9007199254740992;
}
RangeError();
new F6(-9223372036854775807, 255, 129);
new F6(-9223372036854775807, 1073741824, 129);
new F6(-9223372036854775807, 9007199254740992, -9223372036854775807);
Array()["fill"]();
