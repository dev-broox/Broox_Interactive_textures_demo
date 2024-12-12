import {Buffer as $gKEnc$Buffer} from "buffer";
import * as $gKEnc$process from "process";


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire94c2"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire94c2"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("9EkHd", function(module, exports) {
// GENERATED FILE. DO NOT EDIT.
var $7067e742642feb7f$var$Long = function(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.default = void 0;
    /**
   * @license
   * Copyright 2009 The Closure Library Authors
   * Copyright 2020 Daniel Wirtz / The long.js Authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *
   * SPDX-License-Identifier: Apache-2.0
   */ // WebAssembly optimizations to do native i64 multiplication and divide
    var wasm = null;
    try {
        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
            0,
            97,
            115,
            109,
            1,
            0,
            0,
            0,
            1,
            13,
            2,
            96,
            0,
            1,
            127,
            96,
            4,
            127,
            127,
            127,
            127,
            1,
            127,
            3,
            7,
            6,
            0,
            1,
            1,
            1,
            1,
            1,
            6,
            6,
            1,
            127,
            1,
            65,
            0,
            11,
            7,
            50,
            6,
            3,
            109,
            117,
            108,
            0,
            1,
            5,
            100,
            105,
            118,
            95,
            115,
            0,
            2,
            5,
            100,
            105,
            118,
            95,
            117,
            0,
            3,
            5,
            114,
            101,
            109,
            95,
            115,
            0,
            4,
            5,
            114,
            101,
            109,
            95,
            117,
            0,
            5,
            8,
            103,
            101,
            116,
            95,
            104,
            105,
            103,
            104,
            0,
            0,
            10,
            191,
            1,
            6,
            4,
            0,
            35,
            0,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            126,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            127,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            128,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            129,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11,
            36,
            1,
            1,
            126,
            32,
            0,
            173,
            32,
            1,
            173,
            66,
            32,
            134,
            132,
            32,
            2,
            173,
            32,
            3,
            173,
            66,
            32,
            134,
            132,
            130,
            34,
            4,
            66,
            32,
            135,
            167,
            36,
            0,
            32,
            4,
            167,
            11
        ])), {}).exports;
    } catch (e) {}
    /**
   * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
   *  See the from* functions below for more convenient ways of constructing Longs.
   * @exports Long
   * @class A Long class for representing a 64 bit two's-complement integer value.
   * @param {number} low The low (signed) 32 bits of the long
   * @param {number} high The high (signed) 32 bits of the long
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @constructor
   */ function Long(low, high, unsigned) {
        /**
     * The low 32 bits as a signed value.
     * @type {number}
     */ this.low = low | 0;
        /**
     * The high 32 bits as a signed value.
     * @type {number}
     */ this.high = high | 0;
        /**
     * Whether unsigned or not.
     * @type {boolean}
     */ this.unsigned = !!unsigned;
    } // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.
    /**
   * An indicator used to reliably determine if an object is a Long or not.
   * @type {boolean}
   * @const
   * @private
   */ Long.prototype.__isLong__;
    Object.defineProperty(Long.prototype, "__isLong__", {
        value: true
    });
    /**
   * @function
   * @param {*} obj Object
   * @returns {boolean}
   * @inner
   */ function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
    }
    /**
   * @function
   * @param {*} value number
   * @returns {number}
   * @inner
   */ function ctz32(value) {
        var c = Math.clz32(value & -value);
        return value ? 31 - c : c;
    }
    /**
   * Tests if the specified object is a Long.
   * @function
   * @param {*} obj Object
   * @returns {boolean}
   */ Long.isLong = isLong;
    /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @inner
   */ var INT_CACHE = {};
    /**
   * A cache of the Long representations of small unsigned integer values.
   * @type {!Object}
   * @inner
   */ var UINT_CACHE = {};
    /**
   * @param {number} value
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */ function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = 0 <= value && value < 256) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, 0, true);
            if (cache) UINT_CACHE[value] = obj;
            return obj;
        } else {
            value |= 0;
            if (cache = -128 <= value && value < 128) {
                cachedObj = INT_CACHE[value];
                if (cachedObj) return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache) INT_CACHE[value] = obj;
            return obj;
        }
    }
    /**
   * Returns a Long representing the given 32 bit integer value.
   * @function
   * @param {number} value The 32 bit integer in question
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long} The corresponding Long value
   */ Long.fromInt = fromInt;
    /**
   * @param {number} value
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */ function fromNumber(value, unsigned) {
        if (isNaN(value)) return unsigned ? UZERO : ZERO;
        if (unsigned) {
            if (value < 0) return UZERO;
            if (value >= TWO_PWR_64_DBL) return MAX_UNSIGNED_VALUE;
        } else {
            if (value <= -TWO_PWR_63_DBL) return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL) return MAX_VALUE;
        }
        if (value < 0) return fromNumber(-value, unsigned).neg();
        return fromBits(value % TWO_PWR_32_DBL | 0, value / TWO_PWR_32_DBL | 0, unsigned);
    }
    /**
   * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
   * @function
   * @param {number} value The number in question
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long} The corresponding Long value
   */ Long.fromNumber = fromNumber;
    /**
   * @param {number} lowBits
   * @param {number} highBits
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */ function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }
    /**
   * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
   *  assumed to use 32 bits.
   * @function
   * @param {number} lowBits The low 32 bits
   * @param {number} highBits The high 32 bits
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long} The corresponding Long value
   */ Long.fromBits = fromBits;
    /**
   * @function
   * @param {number} base
   * @param {number} exponent
   * @returns {number}
   * @inner
   */ var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
    /**
   * @param {string} str
   * @param {(boolean|number)=} unsigned
   * @param {number=} radix
   * @returns {!Long}
   * @inner
   */ function fromString(str, unsigned, radix) {
        if (str.length === 0) throw Error('empty string');
        if (typeof unsigned === 'number') {
            // For goog.math.long compatibility
            radix = unsigned;
            unsigned = false;
        } else unsigned = !!unsigned;
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity") return unsigned ? UZERO : ZERO;
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError('radix');
        var p;
        if ((p = str.indexOf('-')) > 0) throw Error('interior hyphen');
        else if (p === 0) return fromString(str.substring(1), unsigned, radix).neg();
         // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 8));
        var result = ZERO;
        for(var i = 0; i < str.length; i += 8){
            var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            } else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }
    /**
   * Returns a Long representation of the given string, written using the specified radix.
   * @function
   * @param {string} str The textual representation of the Long
   * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
   * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
   * @returns {!Long} The corresponding Long value
   */ Long.fromString = fromString;
    /**
   * @function
   * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
   * @param {boolean=} unsigned
   * @returns {!Long}
   * @inner
   */ function fromValue(val, unsigned) {
        if (typeof val === 'number') return fromNumber(val, unsigned);
        if (typeof val === 'string') return fromString(val, unsigned); // Throws for non-objects, converts non-instanceof Long:
        return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
    }
    /**
   * Converts the specified value to a Long using the appropriate from* function for its type.
   * @function
   * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {!Long}
   */ Long.fromValue = fromValue; // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.
    /**
   * @type {number}
   * @const
   * @inner
   */ var TWO_PWR_16_DBL = 65536;
    /**
   * @type {number}
   * @const
   * @inner
   */ var TWO_PWR_24_DBL = 16777216;
    /**
   * @type {number}
   * @const
   * @inner
   */ var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
    /**
   * @type {number}
   * @const
   * @inner
   */ var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
    /**
   * @type {number}
   * @const
   * @inner
   */ var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
    /**
   * @type {!Long}
   * @const
   * @inner
   */ var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
    /**
   * @type {!Long}
   * @inner
   */ var ZERO = fromInt(0);
    /**
   * Signed zero.
   * @type {!Long}
   */ Long.ZERO = ZERO;
    /**
   * @type {!Long}
   * @inner
   */ var UZERO = fromInt(0, true);
    /**
   * Unsigned zero.
   * @type {!Long}
   */ Long.UZERO = UZERO;
    /**
   * @type {!Long}
   * @inner
   */ var ONE = fromInt(1);
    /**
   * Signed one.
   * @type {!Long}
   */ Long.ONE = ONE;
    /**
   * @type {!Long}
   * @inner
   */ var UONE = fromInt(1, true);
    /**
   * Unsigned one.
   * @type {!Long}
   */ Long.UONE = UONE;
    /**
   * @type {!Long}
   * @inner
   */ var NEG_ONE = fromInt(-1);
    /**
   * Signed negative one.
   * @type {!Long}
   */ Long.NEG_ONE = NEG_ONE;
    /**
   * @type {!Long}
   * @inner
   */ var MAX_VALUE = fromBits(-1, 2147483647, false);
    /**
   * Maximum signed value.
   * @type {!Long}
   */ Long.MAX_VALUE = MAX_VALUE;
    /**
   * @type {!Long}
   * @inner
   */ var MAX_UNSIGNED_VALUE = fromBits(-1, -1, true);
    /**
   * Maximum unsigned value.
   * @type {!Long}
   */ Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
    /**
   * @type {!Long}
   * @inner
   */ var MIN_VALUE = fromBits(0, -2147483648, false);
    /**
   * Minimum signed value.
   * @type {!Long}
   */ Long.MIN_VALUE = MIN_VALUE;
    /**
   * @alias Long.prototype
   * @inner
   */ var LongPrototype = Long.prototype;
    /**
   * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
   * @this {!Long}
   * @returns {number}
   */ LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    };
    /**
   * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
   * @this {!Long}
   * @returns {number}
   */ LongPrototype.toNumber = function toNumber() {
        if (this.unsigned) return (this.high >>> 0) * TWO_PWR_32_DBL + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };
    /**
   * Converts the Long to a string written in the specified radix.
   * @this {!Long}
   * @param {number=} radix Radix (2-36), defaults to 10
   * @returns {string}
   * @override
   * @throws {RangeError} If `radix` is out of range
   */ LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix) throw RangeError('radix');
        if (this.isZero()) return '0';
        if (this.isNegative()) {
            // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else return '-' + this.neg().toString(radix);
        } // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
        var result = '';
        while(true){
            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero()) return digits + result;
            else {
                while(digits.length < 6)digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };
    /**
   * Gets the high 32 bits as a signed integer.
   * @this {!Long}
   * @returns {number} Signed high bits
   */ LongPrototype.getHighBits = function getHighBits() {
        return this.high;
    };
    /**
   * Gets the high 32 bits as an unsigned integer.
   * @this {!Long}
   * @returns {number} Unsigned high bits
   */ LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
    };
    /**
   * Gets the low 32 bits as a signed integer.
   * @this {!Long}
   * @returns {number} Signed low bits
   */ LongPrototype.getLowBits = function getLowBits() {
        return this.low;
    };
    /**
   * Gets the low 32 bits as an unsigned integer.
   * @this {!Long}
   * @returns {number} Unsigned low bits
   */ LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
    };
    /**
   * Gets the number of bits needed to represent the absolute value of this Long.
   * @this {!Long}
   * @returns {number}
   */ LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for(var bit = 31; bit > 0; bit--)if ((val & 1 << bit) != 0) break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };
    /**
   * Tests if this Long's value equals zero.
   * @this {!Long}
   * @returns {boolean}
   */ LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
    };
    /**
   * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
   * @returns {boolean}
   */ LongPrototype.eqz = LongPrototype.isZero;
    /**
   * Tests if this Long's value is negative.
   * @this {!Long}
   * @returns {boolean}
   */ LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
    };
    /**
   * Tests if this Long's value is positive or zero.
   * @this {!Long}
   * @returns {boolean}
   */ LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
    };
    /**
   * Tests if this Long's value is odd.
   * @this {!Long}
   * @returns {boolean}
   */ LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
    };
    /**
   * Tests if this Long's value is even.
   * @this {!Long}
   * @returns {boolean}
   */ LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
    };
    /**
   * Tests if this Long's value equals the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.equals = function equals(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.unsigned !== other.unsigned && this.high >>> 31 === 1 && other.high >>> 31 === 1) return false;
        return this.high === other.high && this.low === other.low;
    };
    /**
   * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.eq = LongPrototype.equals;
    /**
   * Tests if this Long's value differs from the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(/* validates */ other);
    };
    /**
   * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.neq = LongPrototype.notEquals;
    /**
   * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.ne = LongPrototype.notEquals;
    /**
   * Tests if this Long's value is less than the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.lessThan = function lessThan(other) {
        return this.comp(/* validates */ other) < 0;
    };
    /**
   * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.lt = LongPrototype.lessThan;
    /**
   * Tests if this Long's value is less than or equal the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(/* validates */ other) <= 0;
    };
    /**
   * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.lte = LongPrototype.lessThanOrEqual;
    /**
   * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.le = LongPrototype.lessThanOrEqual;
    /**
   * Tests if this Long's value is greater than the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(/* validates */ other) > 0;
    };
    /**
   * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.gt = LongPrototype.greaterThan;
    /**
   * Tests if this Long's value is greater than or equal the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(/* validates */ other) >= 0;
    };
    /**
   * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.gte = LongPrototype.greaterThanOrEqual;
    /**
   * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {boolean}
   */ LongPrototype.ge = LongPrototype.greaterThanOrEqual;
    /**
   * Compares this Long's value with the specified's.
   * @this {!Long}
   * @param {!Long|number|string} other Other value
   * @returns {number} 0 if they are the same, 1 if the this is greater and -1
   *  if the given one is greater
   */ LongPrototype.compare = function compare(other) {
        if (!isLong(other)) other = fromValue(other);
        if (this.eq(other)) return 0;
        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
        if (thisNeg && !otherNeg) return -1;
        if (!thisNeg && otherNeg) return 1; // At this point the sign bits are the same
        if (!this.unsigned) return this.sub(other).isNegative() ? -1 : 1; // Both are positive if at least one is unsigned
        return other.high >>> 0 > this.high >>> 0 || other.high === this.high && other.low >>> 0 > this.low >>> 0 ? -1 : 1;
    };
    /**
   * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
   * @function
   * @param {!Long|number|string} other Other value
   * @returns {number} 0 if they are the same, 1 if the this is greater and -1
   *  if the given one is greater
   */ LongPrototype.comp = LongPrototype.compare;
    /**
   * Negates this Long's value.
   * @this {!Long}
   * @returns {!Long} Negated Long
   */ LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE)) return MIN_VALUE;
        return this.not().add(ONE);
    };
    /**
   * Negates this Long's value. This is an alias of {@link Long#negate}.
   * @function
   * @returns {!Long} Negated Long
   */ LongPrototype.neg = LongPrototype.negate;
    /**
   * Returns the sum of this and the specified Long.
   * @this {!Long}
   * @param {!Long|number|string} addend Addend
   * @returns {!Long} Sum
   */ LongPrototype.add = function add(addend) {
        if (!isLong(addend)) addend = fromValue(addend); // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    /**
   * Returns the difference of this and the specified Long.
   * @this {!Long}
   * @param {!Long|number|string} subtrahend Subtrahend
   * @returns {!Long} Difference
   */ LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend)) subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };
    /**
   * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
   * @function
   * @param {!Long|number|string} subtrahend Subtrahend
   * @returns {!Long} Difference
   */ LongPrototype.sub = LongPrototype.subtract;
    /**
   * Returns the product of this and the specified Long.
   * @this {!Long}
   * @param {!Long|number|string} multiplier Multiplier
   * @returns {!Long} Product
   */ LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero()) return this;
        if (!isLong(multiplier)) multiplier = fromValue(multiplier); // use wasm support if present
        if (wasm) {
            var low = wasm["mul"](this.low, this.high, multiplier.low, multiplier.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (multiplier.isZero()) return this.unsigned ? UZERO : ZERO;
        if (this.eq(MIN_VALUE)) return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE)) return this.isOdd() ? MIN_VALUE : ZERO;
        if (this.isNegative()) {
            if (multiplier.isNegative()) return this.neg().mul(multiplier.neg());
            else return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative()) return this.mul(multiplier.neg()).neg(); // If both longs are small, use float multiplication
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24)) return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned); // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.
        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;
        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;
        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits(c16 << 16 | c00, c48 << 16 | c32, this.unsigned);
    };
    /**
   * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
   * @function
   * @param {!Long|number|string} multiplier Multiplier
   * @returns {!Long} Product
   */ LongPrototype.mul = LongPrototype.multiply;
    /**
   * Returns this Long divided by the specified. The result is signed if this Long is signed or
   *  unsigned if this Long is unsigned.
   * @this {!Long}
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Quotient
   */ LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor);
        if (divisor.isZero()) throw Error('division by zero'); // use wasm support if present
        if (wasm) {
            // guard against signed division overflow: the largest
            // negative number / -1 would be 1 larger than the largest
            // positive number, due to two's complement.
            if (!this.unsigned && this.high === -2147483648 && divisor.low === -1 && divisor.high === -1) // be consistent with non-wasm code path
            return this;
            var low = (this.unsigned ? wasm["div_u"] : wasm["div_s"])(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        if (this.isZero()) return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE)) return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(MIN_VALUE)) return ONE;
                else {
                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                    var halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(ZERO)) return divisor.isNegative() ? ONE : NEG_ONE;
                    else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            } else if (divisor.eq(MIN_VALUE)) return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative()) return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative()) return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned) divisor = divisor.toUnsigned();
            if (divisor.gt(this)) return UZERO;
            if (divisor.gt(this.shru(1))) return UONE;
            res = UZERO;
        } // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while(rem.gte(divisor)){
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber())); // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = log2 <= 48 ? 1 : pow_dbl(2, log2 - 48), // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
            approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
            while(approxRem.isNegative() || approxRem.gt(rem)){
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            } // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero()) approxRes = ONE;
            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };
    /**
   * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
   * @function
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Quotient
   */ LongPrototype.div = LongPrototype.divide;
    /**
   * Returns this Long modulo the specified.
   * @this {!Long}
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Remainder
   */ LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor)) divisor = fromValue(divisor); // use wasm support if present
        if (wasm) {
            var low = (this.unsigned ? wasm["rem_u"] : wasm["rem_s"])(this.low, this.high, divisor.low, divisor.high);
            return fromBits(low, wasm["get_high"](), this.unsigned);
        }
        return this.sub(this.div(divisor).mul(divisor));
    };
    /**
   * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
   * @function
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Remainder
   */ LongPrototype.mod = LongPrototype.modulo;
    /**
   * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
   * @function
   * @param {!Long|number|string} divisor Divisor
   * @returns {!Long} Remainder
   */ LongPrototype.rem = LongPrototype.modulo;
    /**
   * Returns the bitwise NOT of this Long.
   * @this {!Long}
   * @returns {!Long}
   */ LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };
    /**
   * Returns count leading zeros of this Long.
   * @this {!Long}
   * @returns {!number}
   */ LongPrototype.countLeadingZeros = function countLeadingZeros() {
        return this.high ? Math.clz32(this.high) : Math.clz32(this.low) + 32;
    };
    /**
   * Returns count leading zeros. This is an alias of {@link Long#countLeadingZeros}.
   * @function
   * @param {!Long}
   * @returns {!number}
   */ LongPrototype.clz = LongPrototype.countLeadingZeros;
    /**
   * Returns count trailing zeros of this Long.
   * @this {!Long}
   * @returns {!number}
   */ LongPrototype.countTrailingZeros = function countTrailingZeros() {
        return this.low ? ctz32(this.low) : ctz32(this.high) + 32;
    };
    /**
   * Returns count trailing zeros. This is an alias of {@link Long#countTrailingZeros}.
   * @function
   * @param {!Long}
   * @returns {!number}
   */ LongPrototype.ctz = LongPrototype.countTrailingZeros;
    /**
   * Returns the bitwise AND of this Long and the specified.
   * @this {!Long}
   * @param {!Long|number|string} other Other Long
   * @returns {!Long}
   */ LongPrototype.and = function and(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };
    /**
   * Returns the bitwise OR of this Long and the specified.
   * @this {!Long}
   * @param {!Long|number|string} other Other Long
   * @returns {!Long}
   */ LongPrototype.or = function or(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };
    /**
   * Returns the bitwise XOR of this Long and the given one.
   * @this {!Long}
   * @param {!Long|number|string} other Other Long
   * @returns {!Long}
   */ LongPrototype.xor = function xor(other) {
        if (!isLong(other)) other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };
    /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @this {!Long}
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low << numBits, this.high << numBits | this.low >>> 32 - numBits, this.unsigned);
        else return fromBits(0, this.low << numBits - 32, this.unsigned);
    };
    /**
   * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shl = LongPrototype.shiftLeft;
    /**
   * Returns this Long with bits arithmetically shifted to the right by the given amount.
   * @this {!Long}
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        else if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >> numBits, this.unsigned);
        else return fromBits(this.high >> numBits - 32, this.high >= 0 ? 0 : -1, this.unsigned);
    };
    /**
   * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shr = LongPrototype.shiftRight;
    /**
   * Returns this Long with bits logically shifted to the right by the given amount.
   * @this {!Long}
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits < 32) return fromBits(this.low >>> numBits | this.high << 32 - numBits, this.high >>> numBits, this.unsigned);
        if (numBits === 32) return fromBits(this.high, 0, this.unsigned);
        return fromBits(this.high >>> numBits - 32, 0, this.unsigned);
    };
    /**
   * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shru = LongPrototype.shiftRightUnsigned;
    /**
   * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Shifted Long
   */ LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
    /**
   * Returns this Long with bits rotated to the left by the given amount.
   * @this {!Long}
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Rotated Long
   */ LongPrototype.rotateLeft = function rotateLeft(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(this.low << numBits | this.high >>> b, this.high << numBits | this.low >>> b, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.high << numBits | this.low >>> b, this.low << numBits | this.high >>> b, this.unsigned);
    };
    /**
   * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Rotated Long
   */ LongPrototype.rotl = LongPrototype.rotateLeft;
    /**
   * Returns this Long with bits rotated to the right by the given amount.
   * @this {!Long}
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Rotated Long
   */ LongPrototype.rotateRight = function rotateRight(numBits) {
        var b;
        if (isLong(numBits)) numBits = numBits.toInt();
        if ((numBits &= 63) === 0) return this;
        if (numBits === 32) return fromBits(this.high, this.low, this.unsigned);
        if (numBits < 32) {
            b = 32 - numBits;
            return fromBits(this.high << b | this.low >>> numBits, this.low << b | this.high >>> numBits, this.unsigned);
        }
        numBits -= 32;
        b = 32 - numBits;
        return fromBits(this.low << b | this.high >>> numBits, this.high << b | this.low >>> numBits, this.unsigned);
    };
    /**
   * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
   * @function
   * @param {number|!Long} numBits Number of bits
   * @returns {!Long} Rotated Long
   */ LongPrototype.rotr = LongPrototype.rotateRight;
    /**
   * Converts this Long to signed.
   * @this {!Long}
   * @returns {!Long} Signed long
   */ LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned) return this;
        return fromBits(this.low, this.high, false);
    };
    /**
   * Converts this Long to unsigned.
   * @this {!Long}
   * @returns {!Long} Unsigned long
   */ LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned) return this;
        return fromBits(this.low, this.high, true);
    };
    /**
   * Converts this Long to its byte representation.
   * @param {boolean=} le Whether little or big endian, defaults to big endian
   * @this {!Long}
   * @returns {!Array.<number>} Byte representation
   */ LongPrototype.toBytes = function toBytes(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    };
    /**
   * Converts this Long to its little endian byte representation.
   * @this {!Long}
   * @returns {!Array.<number>} Little endian byte representation
   */ LongPrototype.toBytesLE = function toBytesLE() {
        var hi = this.high, lo = this.low;
        return [
            lo & 0xff,
            lo >>> 8 & 0xff,
            lo >>> 16 & 0xff,
            lo >>> 24,
            hi & 0xff,
            hi >>> 8 & 0xff,
            hi >>> 16 & 0xff,
            hi >>> 24
        ];
    };
    /**
   * Converts this Long to its big endian byte representation.
   * @this {!Long}
   * @returns {!Array.<number>} Big endian byte representation
   */ LongPrototype.toBytesBE = function toBytesBE() {
        var hi = this.high, lo = this.low;
        return [
            hi >>> 24,
            hi >>> 16 & 0xff,
            hi >>> 8 & 0xff,
            hi & 0xff,
            lo >>> 24,
            lo >>> 16 & 0xff,
            lo >>> 8 & 0xff,
            lo & 0xff
        ];
    };
    /**
   * Creates a Long from its byte representation.
   * @param {!Array.<number>} bytes Byte representation
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @param {boolean=} le Whether little or big endian, defaults to big endian
   * @returns {Long} The corresponding Long value
   */ Long.fromBytes = function fromBytes(bytes, unsigned, le) {
        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
    };
    /**
   * Creates a Long from its little endian byte representation.
   * @param {!Array.<number>} bytes Little endian byte representation
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {Long} The corresponding Long value
   */ Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
        return new Long(bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24, bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24, unsigned);
    };
    /**
   * Creates a Long from its big endian byte representation.
   * @param {!Array.<number>} bytes Big endian byte representation
   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
   * @returns {Long} The corresponding Long value
   */ Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
        return new Long(bytes[4] << 24 | bytes[5] << 16 | bytes[6] << 8 | bytes[7], bytes[0] << 24 | bytes[1] << 16 | bytes[2] << 8 | bytes[3], unsigned);
    };
    var _default = Long;
    exports.default = _default;
    return "default" in exports ? exports.default : exports;
}({});
if (typeof define === 'function' && define.amd) define([], function() {
    return $7067e742642feb7f$var$Long;
});
else module.exports = $7067e742642feb7f$var$Long;

});

/**
 * Provides context to communicate with Vision Node.
 * #### Usage
 *
 * ``` typescript
 * import { VisionNodeClient, VisionNodeConfig, VisionNodeProtocol } from './visionNode.js';
 * 
 * const config: VisionNodeConfig = {
 *   port: 5000,
 *   protocol: VisionNodeProtocol.WebRTC
 * }
 * const client = new VisionNodeClient(config);
 * client.connect();
 * ```
 * <br/>
 *
 * #### {@link VisionNodeClient}
 *
 * <br/>
 */ 
var $f465d230f318c0a7$exports = {};
'use strict';
var $f465d230f318c0a7$var$has = Object.prototype.hasOwnProperty, $f465d230f318c0a7$var$prefix = '~';
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function $f465d230f318c0a7$var$Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    $f465d230f318c0a7$var$Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new $f465d230f318c0a7$var$Events().__proto__) $f465d230f318c0a7$var$prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function $f465d230f318c0a7$var$EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function $f465d230f318c0a7$var$addListener(emitter, event, fn, context, once) {
    if (typeof fn !== 'function') throw new TypeError('The listener must be a function');
    var listener = new $f465d230f318c0a7$var$EE(fn, context || emitter, once), evt = $f465d230f318c0a7$var$prefix ? $f465d230f318c0a7$var$prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function $f465d230f318c0a7$var$clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new $f465d230f318c0a7$var$Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function $f465d230f318c0a7$var$EventEmitter() {
    this._events = new $f465d230f318c0a7$var$Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if ($f465d230f318c0a7$var$has.call(events, name)) names.push($f465d230f318c0a7$var$prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.listeners = function listeners(event) {
    var evt = $f465d230f318c0a7$var$prefix ? $f465d230f318c0a7$var$prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = $f465d230f318c0a7$var$prefix ? $f465d230f318c0a7$var$prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = $f465d230f318c0a7$var$prefix ? $f465d230f318c0a7$var$prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.on = function on(event, fn, context) {
    return $f465d230f318c0a7$var$addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.once = function once(event, fn, context) {
    return $f465d230f318c0a7$var$addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = $f465d230f318c0a7$var$prefix ? $f465d230f318c0a7$var$prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        $f465d230f318c0a7$var$clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) $f465d230f318c0a7$var$clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else $f465d230f318c0a7$var$clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ $f465d230f318c0a7$var$EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = $f465d230f318c0a7$var$prefix ? $f465d230f318c0a7$var$prefix + event : event;
        if (this._events[evt]) $f465d230f318c0a7$var$clearEvent(this, evt);
    } else {
        this._events = new $f465d230f318c0a7$var$Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
$f465d230f318c0a7$var$EventEmitter.prototype.off = $f465d230f318c0a7$var$EventEmitter.prototype.removeListener;
$f465d230f318c0a7$var$EventEmitter.prototype.addListener = $f465d230f318c0a7$var$EventEmitter.prototype.on;
//
// Expose the prefix.
//
$f465d230f318c0a7$var$EventEmitter.prefixed = $f465d230f318c0a7$var$prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
$f465d230f318c0a7$var$EventEmitter.EventEmitter = $f465d230f318c0a7$var$EventEmitter;
$f465d230f318c0a7$exports = $f465d230f318c0a7$var$EventEmitter;


// node_modules/esbuild-plugin-polyfill-node/polyfills/buffer.js
var $8689e0ff46fbd57a$var$WebSocketBrowserImpl = class extends (0, $f465d230f318c0a7$exports.EventEmitter) {
    socket;
    /** Instantiate a WebSocket class
  * @constructor
  * @param {String} address - url to a websocket server
  * @param {(Object)} options - websocket options
  * @param {(String|Array)} protocols - a list of protocols
  * @return {WebSocketBrowserImpl} - returns a WebSocket instance
  */ constructor(address, options, protocols){
        super();
        this.socket = new window.WebSocket(address, protocols);
        this.socket.onopen = ()=>this.emit("open");
        this.socket.onmessage = (event)=>this.emit("message", event.data);
        this.socket.onerror = (error)=>this.emit("error", error);
        this.socket.onclose = (event)=>{
            this.emit("close", event.code, event.reason);
        };
    }
    /**
  * Sends data through a websocket connection
  * @method
  * @param {(String|Object)} data - data to be sent via websocket
  * @param {Object} optionsOrCallback - ws options
  * @param {Function} callback - a callback called once the data is sent
  * @return {Undefined}
  */ send(data, optionsOrCallback, callback) {
        const cb = callback || optionsOrCallback;
        try {
            this.socket.send(data);
            cb();
        } catch (error) {
            cb(error);
        }
    }
    /**
  * Closes an underlying socket
  * @method
  * @param {Number} code - status code explaining why the connection is being closed
  * @param {String} reason - a description why the connection is closing
  * @return {Undefined}
  * @throws {Error}
  */ close(code, reason) {
        this.socket.close(code, reason);
    }
    addEventListener(type, listener, options) {
        this.socket.addEventListener(type, listener, options);
    }
};
function $8689e0ff46fbd57a$export$3909fb301d3dc8c9(address, options) {
    return new $8689e0ff46fbd57a$var$WebSocketBrowserImpl(address, options);
}
// src/lib/utils.ts
var $8689e0ff46fbd57a$export$9fd32f4b4353d82d = class {
    encode(value) {
        return JSON.stringify(value);
    }
    decode(value) {
        return JSON.parse(value);
    }
};
// src/lib/client.ts
var $8689e0ff46fbd57a$export$b43a6d9568fa5272 = class extends (0, $f465d230f318c0a7$exports.EventEmitter) {
    address;
    rpc_id;
    queue;
    options;
    autoconnect;
    ready;
    reconnect;
    reconnect_timer_id;
    reconnect_interval;
    max_reconnects;
    rest_options;
    current_reconnects;
    generate_request_id;
    socket;
    webSocketFactory;
    dataPack;
    /**
  * Instantiate a Client class.
  * @constructor
  * @param {webSocketFactory} webSocketFactory - factory method for WebSocket
  * @param {String} address - url to a websocket server
  * @param {Object} options - ws options object with reconnect parameters
  * @param {Function} generate_request_id - custom generation request Id
  * @param {DataPack} dataPack - data pack contains encoder and decoder
  * @return {CommonClient}
  */ constructor(webSocketFactory, address = "ws://localhost:8080", { autoconnect: autoconnect = true, reconnect: reconnect = true, reconnect_interval: reconnect_interval = 1e3, max_reconnects: max_reconnects = 5, ...rest_options } = {}, generate_request_id, dataPack){
        super();
        this.webSocketFactory = webSocketFactory;
        this.queue = {};
        this.rpc_id = 0;
        this.address = address;
        this.autoconnect = autoconnect;
        this.ready = false;
        this.reconnect = reconnect;
        this.reconnect_timer_id = void 0;
        this.reconnect_interval = reconnect_interval;
        this.max_reconnects = max_reconnects;
        this.rest_options = rest_options;
        this.current_reconnects = 0;
        this.generate_request_id = generate_request_id || (()=>++this.rpc_id);
        if (!dataPack) this.dataPack = new $8689e0ff46fbd57a$export$9fd32f4b4353d82d();
        else this.dataPack = dataPack;
        if (this.autoconnect) this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options
        });
    }
    /**
  * Connects to a defined server if not connected already.
  * @method
  * @return {Undefined}
  */ connect() {
        if (this.socket) return;
        this._connect(this.address, {
            autoconnect: this.autoconnect,
            reconnect: this.reconnect,
            reconnect_interval: this.reconnect_interval,
            max_reconnects: this.max_reconnects,
            ...this.rest_options
        });
    }
    /**
  * Calls a registered RPC method on server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object|Array} params - optional method parameters
  * @param {Number} timeout - RPC reply timeout value
  * @param {Object} ws_opts - options passed to ws
  * @return {Promise}
  */ call(method, params, timeout, ws_opts) {
        if (!ws_opts && "object" === typeof timeout) {
            ws_opts = timeout;
            timeout = null;
        }
        return new Promise((resolve, reject)=>{
            if (!this.ready) return reject(new Error("socket not ready"));
            const rpc_id = this.generate_request_id(method, params);
            const message = {
                jsonrpc: "2.0",
                method: method,
                params: params || void 0,
                id: rpc_id
            };
            this.socket.send(this.dataPack.encode(message), ws_opts, (error)=>{
                if (error) return reject(error);
                this.queue[rpc_id] = {
                    promise: [
                        resolve,
                        reject
                    ]
                };
                if (timeout) this.queue[rpc_id].timeout = setTimeout(()=>{
                    delete this.queue[rpc_id];
                    reject(new Error("reply timeout"));
                }, timeout);
            });
        });
    }
    /**
  * Logins with the other side of the connection.
  * @method
  * @param {Object} params - Login credentials object
  * @return {Promise}
  */ async login(params) {
        const resp = await this.call("rpc.login", params);
        if (!resp) throw new Error("authentication failed");
        return resp;
    }
    /**
  * Fetches a list of client's methods registered on server.
  * @method
  * @return {Array}
  */ async listMethods() {
        return await this.call("__listMethods");
    }
    /**
  * Sends a JSON-RPC 2.0 notification to server.
  * @method
  * @param {String} method - RPC method name
  * @param {Object} params - optional method parameters
  * @return {Promise}
  */ notify(method, params) {
        return new Promise((resolve, reject)=>{
            if (!this.ready) return reject(new Error("socket not ready"));
            const message = {
                jsonrpc: "2.0",
                method: method,
                params: params
            };
            this.socket.send(this.dataPack.encode(message), (error)=>{
                if (error) return reject(error);
                resolve();
            });
        });
    }
    /**
  * Subscribes for a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */ async subscribe(event) {
        if (typeof event === "string") event = [
            event
        ];
        const result = await this.call("rpc.on", event);
        if (typeof event === "string" && result[event] !== "ok") throw new Error("Failed subscribing to an event '" + event + "' with: " + result[event]);
        return result;
    }
    /**
  * Unsubscribes from a defined event.
  * @method
  * @param {String|Array} event - event name
  * @return {Undefined}
  * @throws {Error}
  */ async unsubscribe(event) {
        if (typeof event === "string") event = [
            event
        ];
        const result = await this.call("rpc.off", event);
        if (typeof event === "string" && result[event] !== "ok") throw new Error("Failed unsubscribing from an event with: " + result);
        return result;
    }
    /**
  * Closes a WebSocket connection gracefully.
  * @method
  * @param {Number} code - socket close code
  * @param {String} data - optional data to be sent before closing
  * @return {Undefined}
  */ close(code, data) {
        this.socket.close(code || 1e3, data);
    }
    /**
  * Enable / disable automatic reconnection.
  * @method
  * @param {Boolean} reconnect - enable / disable reconnection
  * @return {Undefined}
  */ setAutoReconnect(reconnect) {
        this.reconnect = reconnect;
    }
    /**
  * Set the interval between reconnection attempts.
  * @method
  * @param {Number} interval - reconnection interval in milliseconds
  * @return {Undefined}
  */ setReconnectInterval(interval) {
        this.reconnect_interval = interval;
    }
    /**
  * Set the maximum number of reconnection attempts.
  * @method
  * @param {Number} max_reconnects - maximum reconnection attempts
  * @return {Undefined}
  */ setMaxReconnects(max_reconnects) {
        this.max_reconnects = max_reconnects;
    }
    /**
  * Connection/Message handler.
  * @method
  * @private
  * @param {String} address - WebSocket API address
  * @param {Object} options - ws options object
  * @return {Undefined}
  */ _connect(address, options) {
        clearTimeout(this.reconnect_timer_id);
        this.socket = this.webSocketFactory(address, options);
        this.socket.addEventListener("open", ()=>{
            this.ready = true;
            this.emit("open");
            this.current_reconnects = 0;
        });
        this.socket.addEventListener("message", ({ data: message })=>{
            if (message instanceof ArrayBuffer) message = (0, $gKEnc$Buffer).from(message).toString();
            try {
                message = this.dataPack.decode(message);
            } catch (error) {
                return;
            }
            if (message.notification && this.listeners(message.notification).length) {
                if (!Object.keys(message.params).length) return this.emit(message.notification);
                const args = [
                    message.notification
                ];
                if (message.params.constructor === Object) args.push(message.params);
                else for(let i = 0; i < message.params.length; i++)args.push(message.params[i]);
                return Promise.resolve().then(()=>{
                    this.emit.apply(this, args);
                });
            }
            if (!this.queue[message.id]) {
                if (message.method) return Promise.resolve().then(()=>{
                    this.emit(message.method, message?.params);
                });
                return;
            }
            if ("error" in message === "result" in message) this.queue[message.id].promise[1](new Error('Server response malformed. Response must include either "result" or "error", but not both.'));
            if (this.queue[message.id].timeout) clearTimeout(this.queue[message.id].timeout);
            if (message.error) this.queue[message.id].promise[1](message.error);
            else this.queue[message.id].promise[0](message.result);
            delete this.queue[message.id];
        });
        this.socket.addEventListener("error", (error)=>this.emit("error", error));
        this.socket.addEventListener("close", ({ code: code, reason: reason })=>{
            if (this.ready) setTimeout(()=>this.emit("close", code, reason), 0);
            this.ready = false;
            this.socket = void 0;
            if (code === 1e3) return;
            this.current_reconnects++;
            if (this.reconnect && (this.max_reconnects > this.current_reconnects || this.max_reconnects === 0)) this.reconnect_timer_id = setTimeout(()=>this._connect(address, options), this.reconnect_interval);
        });
    }
};
// src/index.browser.ts
var $8689e0ff46fbd57a$export$1f2bb630327ac4b6 = class extends $8689e0ff46fbd57a$export$b43a6d9568fa5272 {
    constructor(address = "ws://localhost:8080", { autoconnect: autoconnect = true, reconnect: reconnect = true, reconnect_interval: reconnect_interval = 1e3, max_reconnects: max_reconnects = 5 } = {}, generate_request_id){
        super($8689e0ff46fbd57a$export$3909fb301d3dc8c9, address, {
            autoconnect: autoconnect,
            reconnect: reconnect,
            reconnect_interval: reconnect_interval,
            max_reconnects: max_reconnects
        }, generate_request_id);
    }
};
 //# sourceMappingURL=out.js.map


// import { readPacket } from 'osc';
var $7fcf8bc0be74801e$exports = {};
/*! osc.js 2.4.5, Copyright 2024 Colin Clark | github.com/colinbdclark/osc.js */ /*
 * osc.js: An Open Sound Control library for JavaScript that works in both the browser and Node.js
 *
 * Copyright 2014-2016, Colin Clark
 * Licensed under the MIT and GPL 3 licenses.
 */ /* global require, module, process, Buffer, Long, util */ 

var $7fcf8bc0be74801e$require$Buffer = $gKEnc$Buffer;
var $7fcf8bc0be74801e$var$osc = $7fcf8bc0be74801e$var$osc || {};

(function() {
    "use strict";
    $7fcf8bc0be74801e$var$osc.SECS_70YRS = 2208988800;
    $7fcf8bc0be74801e$var$osc.TWO_32 = 4294967296;
    $7fcf8bc0be74801e$var$osc.defaults = {
        metadata: false,
        unpackSingleArgs: true
    };
    // Unsupported, non-API property.
    $7fcf8bc0be74801e$var$osc.isCommonJS = (0, $7fcf8bc0be74801e$exports) ? true : false;
    // Unsupported, non-API property.
    $7fcf8bc0be74801e$var$osc.isNode = $7fcf8bc0be74801e$var$osc.isCommonJS && typeof window === "undefined";
    // Unsupported, non-API property.
    $7fcf8bc0be74801e$var$osc.isElectron = typeof $gKEnc$process !== "undefined" && $gKEnc$process.versions && $gKEnc$process.versions.electron ? true : false;
    // Unsupported, non-API property.
    $7fcf8bc0be74801e$var$osc.isBufferEnv = $7fcf8bc0be74801e$var$osc.isNode || $7fcf8bc0be74801e$var$osc.isElectron;
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.isArray = function(obj) {
        return obj && Object.prototype.toString.call(obj) === "[object Array]";
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.isTypedArrayView = function(obj) {
        return obj.buffer && obj.buffer instanceof ArrayBuffer;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.isBuffer = function(obj) {
        return $7fcf8bc0be74801e$var$osc.isBufferEnv && obj instanceof $7fcf8bc0be74801e$require$Buffer;
    };
    // Unsupported, non-API member.
    $7fcf8bc0be74801e$var$osc.Long = typeof Long !== "undefined" ? Long : $7fcf8bc0be74801e$var$osc.isNode ? (parcelRequire("9EkHd")) : undefined;
    // Unsupported, non-API member. Can be removed when supported versions
    // of Node.js expose TextDecoder as a global, as in the browser.
    $7fcf8bc0be74801e$var$osc.TextDecoder = typeof TextDecoder !== "undefined" ? new TextDecoder("utf-8") : typeof util !== "undefined" && typeof (util.TextDecoder !== "undefined") ? new util.TextDecoder("utf-8") : undefined;
    $7fcf8bc0be74801e$var$osc.TextEncoder = typeof TextEncoder !== "undefined" ? new TextEncoder("utf-8") : typeof util !== "undefined" && typeof (util.TextEncoder !== "undefined") ? new util.TextEncoder("utf-8") : undefined;
    /**
     * Wraps the specified object in a DataView.
     *
     * @param {Array-like} obj the object to wrap in a DataView instance
     * @return {DataView} the DataView object
     */ // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.dataView = function(obj, offset, length) {
        if (obj.buffer) return new DataView(obj.buffer, offset, length);
        if (obj instanceof ArrayBuffer) return new DataView(obj, offset, length);
        return new DataView(new Uint8Array(obj), offset, length);
    };
    /**
     * Takes an ArrayBuffer, TypedArray, DataView, Buffer, or array-like object
     * and returns a Uint8Array view of it.
     *
     * Throws an error if the object isn't suitably array-like.
     *
     * @param {Array-like or Array-wrapping} obj an array-like or array-wrapping object
     * @returns {Uint8Array} a typed array of octets
     */ // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.byteArray = function(obj) {
        if (obj instanceof Uint8Array) return obj;
        var buf = obj.buffer ? obj.buffer : obj;
        if (!(buf instanceof ArrayBuffer) && (typeof buf.length === "undefined" || typeof buf === "string")) throw new Error("Can't wrap a non-array-like object as Uint8Array. Object was: " + JSON.stringify(obj, null, 2));
        // TODO gh-39: This is a potentially unsafe algorithm;
        // if we're getting anything other than a TypedArrayView (such as a DataView),
        // we really need to determine the range of the view it is viewing.
        return new Uint8Array(buf);
    };
    /**
     * Takes an ArrayBuffer, TypedArray, DataView, or array-like object
     * and returns a native buffer object
     * (i.e. in Node.js, a Buffer object and in the browser, a Uint8Array).
     *
     * Throws an error if the object isn't suitably array-like.
     *
     * @param {Array-like or Array-wrapping} obj an array-like or array-wrapping object
     * @returns {Buffer|Uint8Array} a buffer object
     */ // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.nativeBuffer = function(obj) {
        if ($7fcf8bc0be74801e$var$osc.isBufferEnv) return $7fcf8bc0be74801e$var$osc.isBuffer(obj) ? obj : $7fcf8bc0be74801e$require$Buffer.from(obj.buffer ? obj : new Uint8Array(obj));
        return $7fcf8bc0be74801e$var$osc.isTypedArrayView(obj) ? obj : new Uint8Array(obj);
    };
    // Unsupported, non-API function
    $7fcf8bc0be74801e$var$osc.copyByteArray = function(source, target, offset) {
        if ($7fcf8bc0be74801e$var$osc.isTypedArrayView(source) && $7fcf8bc0be74801e$var$osc.isTypedArrayView(target)) target.set(source, offset);
        else {
            var start = offset === undefined ? 0 : offset, len = Math.min(target.length - offset, source.length);
            for(var i = 0, j = start; i < len; i++, j++)target[j] = source[i];
        }
        return target;
    };
    /**
     * Reads an OSC-formatted string.
     *
     * @param {DataView} dv a DataView containing the raw bytes of the OSC string
     * @param {Object} offsetState an offsetState object used to store the current offset index
     * @return {String} the JavaScript String that was read
     */ $7fcf8bc0be74801e$var$osc.readString = function(dv, offsetState) {
        var charCodes = [], idx = offsetState.idx;
        for(; idx < dv.byteLength; idx++){
            var charCode = dv.getUint8(idx);
            if (charCode !== 0) charCodes.push(charCode);
            else {
                idx++;
                break;
            }
        }
        // Round to the nearest 4-byte block.
        idx = idx + 3 & -4;
        offsetState.idx = idx;
        var decoder = $7fcf8bc0be74801e$var$osc.isBufferEnv ? $7fcf8bc0be74801e$var$osc.readString.withBuffer : $7fcf8bc0be74801e$var$osc.TextDecoder ? $7fcf8bc0be74801e$var$osc.readString.withTextDecoder : $7fcf8bc0be74801e$var$osc.readString.raw;
        return decoder(charCodes);
    };
    $7fcf8bc0be74801e$var$osc.readString.raw = function(charCodes) {
        // If no Buffer or TextDecoder, resort to fromCharCode
        // This does not properly decode multi-byte Unicode characters.
        var str = "";
        var sliceSize = 10000;
        // Processing the array in chunks so as not to exceed argument
        // limit, see https://bugs.webkit.org/show_bug.cgi?id=80797
        for(var i = 0; i < charCodes.length; i += sliceSize)str += String.fromCharCode.apply(null, charCodes.slice(i, i + sliceSize));
        return str;
    };
    $7fcf8bc0be74801e$var$osc.readString.withTextDecoder = function(charCodes) {
        var data = new Int8Array(charCodes);
        return $7fcf8bc0be74801e$var$osc.TextDecoder.decode(data);
    };
    $7fcf8bc0be74801e$var$osc.readString.withBuffer = function(charCodes) {
        return $7fcf8bc0be74801e$require$Buffer.from(charCodes).toString("utf-8");
    };
    /**
     * Writes a JavaScript string as an OSC-formatted string.
     *
     * @param {String} str the string to write
     * @return {Uint8Array} a buffer containing the OSC-formatted string
     */ $7fcf8bc0be74801e$var$osc.writeString = function(str) {
        var encoder = $7fcf8bc0be74801e$var$osc.isBufferEnv ? $7fcf8bc0be74801e$var$osc.writeString.withBuffer : $7fcf8bc0be74801e$var$osc.TextEncoder ? $7fcf8bc0be74801e$var$osc.writeString.withTextEncoder : null, terminated = str + "\u0000", encodedStr;
        if (encoder) encodedStr = encoder(terminated);
        var len = encoder ? encodedStr.length : terminated.length, paddedLen = len + 3 & -4, arr = new Uint8Array(paddedLen);
        for(var i = 0; i < len - 1; i++){
            var charCode = encoder ? encodedStr[i] : terminated.charCodeAt(i);
            arr[i] = charCode;
        }
        return arr;
    };
    $7fcf8bc0be74801e$var$osc.writeString.withTextEncoder = function(str) {
        return $7fcf8bc0be74801e$var$osc.TextEncoder.encode(str);
    };
    $7fcf8bc0be74801e$var$osc.writeString.withBuffer = function(str) {
        return $7fcf8bc0be74801e$require$Buffer.from(str);
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.readPrimitive = function(dv, readerName, numBytes, offsetState) {
        var val = dv[readerName](offsetState.idx, false);
        offsetState.idx += numBytes;
        return val;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.writePrimitive = function(val, dv, writerName, numBytes, offset) {
        offset = offset === undefined ? 0 : offset;
        var arr;
        if (!dv) {
            arr = new Uint8Array(numBytes);
            dv = new DataView(arr.buffer);
        } else arr = new Uint8Array(dv.buffer);
        dv[writerName](offset, val, false);
        return arr;
    };
    /**
     * Reads an OSC int32 ("i") value.
     *
     * @param {DataView} dv a DataView containing the raw bytes
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Number} the number that was read
     */ $7fcf8bc0be74801e$var$osc.readInt32 = function(dv, offsetState) {
        return $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getInt32", 4, offsetState);
    };
    /**
     * Writes an OSC int32 ("i") value.
     *
     * @param {Number} val the number to write
     * @param {DataView} [dv] a DataView instance to write the number into
     * @param {Number} [offset] an offset into dv
     */ $7fcf8bc0be74801e$var$osc.writeInt32 = function(val, dv, offset) {
        return $7fcf8bc0be74801e$var$osc.writePrimitive(val, dv, "setInt32", 4, offset);
    };
    /**
     * Reads an OSC int64 ("h") value.
     *
     * @param {DataView} dv a DataView containing the raw bytes
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Number} the number that was read
     */ $7fcf8bc0be74801e$var$osc.readInt64 = function(dv, offsetState) {
        var high = $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getInt32", 4, offsetState), low = $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getInt32", 4, offsetState);
        if ($7fcf8bc0be74801e$var$osc.Long) return new $7fcf8bc0be74801e$var$osc.Long(low, high);
        else return {
            high: high,
            low: low,
            unsigned: false
        };
    };
    /**
     * Writes an OSC int64 ("h") value.
     *
     * @param {Number} val the number to write
     * @param {DataView} [dv] a DataView instance to write the number into
     * @param {Number} [offset] an offset into dv
     */ $7fcf8bc0be74801e$var$osc.writeInt64 = function(val, dv, offset) {
        var arr = new Uint8Array(8);
        arr.set($7fcf8bc0be74801e$var$osc.writePrimitive(val.high, dv, "setInt32", 4, offset), 0);
        arr.set($7fcf8bc0be74801e$var$osc.writePrimitive(val.low, dv, "setInt32", 4, offset + 4), 4);
        return arr;
    };
    /**
     * Reads an OSC float32 ("f") value.
     *
     * @param {DataView} dv a DataView containing the raw bytes
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Number} the number that was read
     */ $7fcf8bc0be74801e$var$osc.readFloat32 = function(dv, offsetState) {
        return $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getFloat32", 4, offsetState);
    };
    /**
     * Writes an OSC float32 ("f") value.
     *
     * @param {Number} val the number to write
     * @param {DataView} [dv] a DataView instance to write the number into
     * @param {Number} [offset] an offset into dv
     */ $7fcf8bc0be74801e$var$osc.writeFloat32 = function(val, dv, offset) {
        return $7fcf8bc0be74801e$var$osc.writePrimitive(val, dv, "setFloat32", 4, offset);
    };
    /**
     * Reads an OSC float64 ("d") value.
     *
     * @param {DataView} dv a DataView containing the raw bytes
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Number} the number that was read
     */ $7fcf8bc0be74801e$var$osc.readFloat64 = function(dv, offsetState) {
        return $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getFloat64", 8, offsetState);
    };
    /**
     * Writes an OSC float64 ("d") value.
     *
     * @param {Number} val the number to write
     * @param {DataView} [dv] a DataView instance to write the number into
     * @param {Number} [offset] an offset into dv
     */ $7fcf8bc0be74801e$var$osc.writeFloat64 = function(val, dv, offset) {
        return $7fcf8bc0be74801e$var$osc.writePrimitive(val, dv, "setFloat64", 8, offset);
    };
    /**
     * Reads an OSC 32-bit ASCII character ("c") value.
     *
     * @param {DataView} dv a DataView containing the raw bytes
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {String} a string containing the read character
     */ $7fcf8bc0be74801e$var$osc.readChar32 = function(dv, offsetState) {
        var charCode = $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getUint32", 4, offsetState);
        return String.fromCharCode(charCode);
    };
    /**
     * Writes an OSC 32-bit ASCII character ("c") value.
     *
     * @param {String} str the string from which the first character will be written
     * @param {DataView} [dv] a DataView instance to write the character into
     * @param {Number} [offset] an offset into dv
     * @return {String} a string containing the read character
     */ $7fcf8bc0be74801e$var$osc.writeChar32 = function(str, dv, offset) {
        var charCode = str.charCodeAt(0);
        if (charCode === undefined || charCode < -1) return undefined;
        return $7fcf8bc0be74801e$var$osc.writePrimitive(charCode, dv, "setUint32", 4, offset);
    };
    /**
     * Reads an OSC blob ("b") (i.e. a Uint8Array).
     *
     * @param {DataView} dv a DataView instance to read from
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Uint8Array} the data that was read
     */ $7fcf8bc0be74801e$var$osc.readBlob = function(dv, offsetState) {
        var len = $7fcf8bc0be74801e$var$osc.readInt32(dv, offsetState), paddedLen = len + 3 & -4, blob = new Uint8Array(dv.buffer, offsetState.idx, len);
        offsetState.idx += paddedLen;
        return blob;
    };
    /**
     * Writes a raw collection of bytes to a new ArrayBuffer.
     *
     * @param {Array-like} data a collection of octets
     * @return {ArrayBuffer} a buffer containing the OSC-formatted blob
     */ $7fcf8bc0be74801e$var$osc.writeBlob = function(data) {
        data = $7fcf8bc0be74801e$var$osc.byteArray(data);
        var len = data.byteLength, paddedLen = len + 3 & -4, offset = 4, blobLen = paddedLen + offset, arr = new Uint8Array(blobLen), dv = new DataView(arr.buffer);
        // Write the size.
        $7fcf8bc0be74801e$var$osc.writeInt32(len, dv);
        // Since we're writing to a real ArrayBuffer,
        // we don't need to pad the remaining bytes.
        arr.set(data, offset);
        return arr;
    };
    /**
     * Reads an OSC 4-byte MIDI message.
     *
     * @param {DataView} dv the DataView instance to read from
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Uint8Array} an array containing (in order) the port ID, status, data1 and data1 bytes
     */ $7fcf8bc0be74801e$var$osc.readMIDIBytes = function(dv, offsetState) {
        var midi = new Uint8Array(dv.buffer, offsetState.idx, 4);
        offsetState.idx += 4;
        return midi;
    };
    /**
     * Writes an OSC 4-byte MIDI message.
     *
     * @param {Array-like} bytes a 4-element array consisting of the port ID, status, data1 and data1 bytes
     * @return {Uint8Array} the written message
     */ $7fcf8bc0be74801e$var$osc.writeMIDIBytes = function(bytes) {
        bytes = $7fcf8bc0be74801e$var$osc.byteArray(bytes);
        var arr = new Uint8Array(4);
        arr.set(bytes);
        return arr;
    };
    /**
     * Reads an OSC RGBA colour value.
     *
     * @param {DataView} dv the DataView instance to read from
     * @param {Object} offsetState an offsetState object used to store the current offset index into dv
     * @return {Object} a colour object containing r, g, b, and a properties
     */ $7fcf8bc0be74801e$var$osc.readColor = function(dv, offsetState) {
        var bytes = new Uint8Array(dv.buffer, offsetState.idx, 4), alpha = bytes[3] / 255;
        offsetState.idx += 4;
        return {
            r: bytes[0],
            g: bytes[1],
            b: bytes[2],
            a: alpha
        };
    };
    /**
     * Writes an OSC RGBA colour value.
     *
     * @param {Object} color a colour object containing r, g, b, and a properties
     * @return {Uint8Array} a byte array containing the written color
     */ $7fcf8bc0be74801e$var$osc.writeColor = function(color) {
        var alpha = Math.round(color.a * 255), arr = new Uint8Array([
            color.r,
            color.g,
            color.b,
            alpha
        ]);
        return arr;
    };
    /**
     * Reads an OSC true ("T") value by directly returning the JavaScript Boolean "true".
     */ $7fcf8bc0be74801e$var$osc.readTrue = function() {
        return true;
    };
    /**
     * Reads an OSC false ("F") value by directly returning the JavaScript Boolean "false".
     */ $7fcf8bc0be74801e$var$osc.readFalse = function() {
        return false;
    };
    /**
     * Reads an OSC nil ("N") value by directly returning the JavaScript "null" value.
     */ $7fcf8bc0be74801e$var$osc.readNull = function() {
        return null;
    };
    /**
     * Reads an OSC impulse/bang/infinitum ("I") value by directly returning 1.0.
     */ $7fcf8bc0be74801e$var$osc.readImpulse = function() {
        return 1.0;
    };
    /**
     * Reads an OSC time tag ("t").
     *
     * @param {DataView} dv the DataView instance to read from
     * @param {Object} offsetState an offset state object containing the current index into dv
     * @param {Object} a time tag object containing both the raw NTP as well as the converted native (i.e. JS/UNIX) time
     */ $7fcf8bc0be74801e$var$osc.readTimeTag = function(dv, offsetState) {
        var secs1900 = $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getUint32", 4, offsetState), frac = $7fcf8bc0be74801e$var$osc.readPrimitive(dv, "getUint32", 4, offsetState), native = secs1900 === 0 && frac === 1 ? Date.now() : $7fcf8bc0be74801e$var$osc.ntpToJSTime(secs1900, frac);
        return {
            raw: [
                secs1900,
                frac
            ],
            native: native
        };
    };
    /**
     * Writes an OSC time tag ("t").
     *
     * Takes, as its argument, a time tag object containing either a "raw" or "native property."
     * The raw timestamp must conform to the NTP standard representation, consisting of two unsigned int32
     * values. The first represents the number of seconds since January 1, 1900; the second, fractions of a second.
     * "Native" JavaScript timestamps are specified as a Number representing milliseconds since January 1, 1970.
     *
     * @param {Object} timeTag time tag object containing either a native JS timestamp (in ms) or a NTP timestamp pair
     * @return {Uint8Array} raw bytes for the written time tag
     */ $7fcf8bc0be74801e$var$osc.writeTimeTag = function(timeTag) {
        var raw = timeTag.raw ? timeTag.raw : $7fcf8bc0be74801e$var$osc.jsToNTPTime(timeTag.native), arr = new Uint8Array(8), dv = new DataView(arr.buffer);
        $7fcf8bc0be74801e$var$osc.writeInt32(raw[0], dv, 0);
        $7fcf8bc0be74801e$var$osc.writeInt32(raw[1], dv, 4);
        return arr;
    };
    /**
     * Produces a time tag containing a raw NTP timestamp
     * relative to now by the specified number of seconds.
     *
     * @param {Number} secs the number of seconds relative to now (i.e. + for the future, - for the past)
     * @param {Number} now the number of milliseconds since epoch to use as the current time. Defaults to Date.now()
     * @return {Object} the time tag
     */ $7fcf8bc0be74801e$var$osc.timeTag = function(secs, now) {
        secs = secs || 0;
        now = now || Date.now();
        var nowSecs = now / 1000, nowWhole = Math.floor(nowSecs), nowFracs = nowSecs - nowWhole, secsWhole = Math.floor(secs), secsFracs = secs - secsWhole, fracs = nowFracs + secsFracs;
        if (fracs > 1) {
            var fracsWhole = Math.floor(fracs), fracsFracs = fracs - fracsWhole;
            secsWhole += fracsWhole;
            fracs = fracsFracs;
        }
        var ntpSecs = nowWhole + secsWhole + $7fcf8bc0be74801e$var$osc.SECS_70YRS, ntpFracs = Math.round($7fcf8bc0be74801e$var$osc.TWO_32 * fracs);
        return {
            raw: [
                ntpSecs,
                ntpFracs
            ]
        };
    };
    /**
     * Converts OSC's standard time tag representation (which is the NTP format)
     * into the JavaScript/UNIX format in milliseconds.
     *
     * @param {Number} secs1900 the number of seconds since 1900
     * @param {Number} frac the number of fractions of a second (between 0 and 2^32)
     * @return {Number} a JavaScript-compatible timestamp in milliseconds
     */ $7fcf8bc0be74801e$var$osc.ntpToJSTime = function(secs1900, frac) {
        var secs1970 = secs1900 - $7fcf8bc0be74801e$var$osc.SECS_70YRS, decimals = frac / $7fcf8bc0be74801e$var$osc.TWO_32, msTime = (secs1970 + decimals) * 1000;
        return msTime;
    };
    $7fcf8bc0be74801e$var$osc.jsToNTPTime = function(jsTime) {
        var secs = jsTime / 1000, secsWhole = Math.floor(secs), secsFrac = secs - secsWhole, ntpSecs = secsWhole + $7fcf8bc0be74801e$var$osc.SECS_70YRS, ntpFracs = Math.round($7fcf8bc0be74801e$var$osc.TWO_32 * secsFrac);
        return [
            ntpSecs,
            ntpFracs
        ];
    };
    /**
     * Reads the argument portion of an OSC message.
     *
     * @param {DataView} dv a DataView instance to read from
     * @param {Object} offsetState the offsetState object that stores the current offset into dv
     * @param {Object} [options] read options
     * @return {Array} an array of the OSC arguments that were read
     */ $7fcf8bc0be74801e$var$osc.readArguments = function(dv, options, offsetState) {
        var typeTagString = $7fcf8bc0be74801e$var$osc.readString(dv, offsetState);
        if (typeTagString.indexOf(",") !== 0) // Despite what the OSC 1.0 spec says,
        // it just doesn't make sense to handle messages without type tags.
        // scsynth appears to read such messages as if they have a single
        // Uint8 argument. sclang throws an error if the type tag is omitted.
        throw new Error("A malformed type tag string was found while reading the arguments of an OSC message. String was: " + typeTagString, " at offset: " + offsetState.idx);
        var argTypes = typeTagString.substring(1).split(""), args = [];
        $7fcf8bc0be74801e$var$osc.readArgumentsIntoArray(args, argTypes, typeTagString, dv, options, offsetState);
        return args;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.readArgument = function(argType, typeTagString, dv, options, offsetState) {
        var typeSpec = $7fcf8bc0be74801e$var$osc.argumentTypes[argType];
        if (!typeSpec) throw new Error("'" + argType + "' is not a valid OSC type tag. Type tag string was: " + typeTagString);
        var argReader = typeSpec.reader, arg = $7fcf8bc0be74801e$var$osc[argReader](dv, offsetState);
        if (options.metadata) arg = {
            type: argType,
            value: arg
        };
        return arg;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.readArgumentsIntoArray = function(arr, argTypes, typeTagString, dv, options, offsetState) {
        var i = 0;
        while(i < argTypes.length){
            var argType = argTypes[i], arg;
            if (argType === "[") {
                var fromArrayOpen = argTypes.slice(i + 1), endArrayIdx = fromArrayOpen.indexOf("]");
                if (endArrayIdx < 0) throw new Error("Invalid argument type tag: an open array type tag ('[') was found without a matching close array tag ('[]'). Type tag was: " + typeTagString);
                var typesInArray = fromArrayOpen.slice(0, endArrayIdx);
                arg = $7fcf8bc0be74801e$var$osc.readArgumentsIntoArray([], typesInArray, typeTagString, dv, options, offsetState);
                i += endArrayIdx + 2;
            } else {
                arg = $7fcf8bc0be74801e$var$osc.readArgument(argType, typeTagString, dv, options, offsetState);
                i++;
            }
            arr.push(arg);
        }
        return arr;
    };
    /**
     * Writes the specified arguments.
     *
     * @param {Array} args an array of arguments
     * @param {Object} options options for writing
     * @return {Uint8Array} a buffer containing the OSC-formatted argument type tag and values
     */ $7fcf8bc0be74801e$var$osc.writeArguments = function(args, options) {
        var argCollection = $7fcf8bc0be74801e$var$osc.collectArguments(args, options);
        return $7fcf8bc0be74801e$var$osc.joinParts(argCollection);
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.joinParts = function(dataCollection) {
        var buf = new Uint8Array(dataCollection.byteLength), parts = dataCollection.parts, offset = 0;
        for(var i = 0; i < parts.length; i++){
            var part = parts[i];
            $7fcf8bc0be74801e$var$osc.copyByteArray(part, buf, offset);
            offset += part.length;
        }
        return buf;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.addDataPart = function(dataPart, dataCollection) {
        dataCollection.parts.push(dataPart);
        dataCollection.byteLength += dataPart.length;
    };
    $7fcf8bc0be74801e$var$osc.writeArrayArguments = function(args, dataCollection) {
        var typeTag = "[";
        for(var i = 0; i < args.length; i++){
            var arg = args[i];
            typeTag += $7fcf8bc0be74801e$var$osc.writeArgument(arg, dataCollection);
        }
        typeTag += "]";
        return typeTag;
    };
    $7fcf8bc0be74801e$var$osc.writeArgument = function(arg, dataCollection) {
        if ($7fcf8bc0be74801e$var$osc.isArray(arg)) return $7fcf8bc0be74801e$var$osc.writeArrayArguments(arg, dataCollection);
        var type = arg.type, writer = $7fcf8bc0be74801e$var$osc.argumentTypes[type].writer;
        if (writer) {
            var data = $7fcf8bc0be74801e$var$osc[writer](arg.value);
            $7fcf8bc0be74801e$var$osc.addDataPart(data, dataCollection);
        }
        return arg.type;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.collectArguments = function(args, options, dataCollection) {
        if (!$7fcf8bc0be74801e$var$osc.isArray(args)) args = typeof args === "undefined" ? [] : [
            args
        ];
        dataCollection = dataCollection || {
            byteLength: 0,
            parts: []
        };
        if (!options.metadata) args = $7fcf8bc0be74801e$var$osc.annotateArguments(args);
        var typeTagString = ",", currPartIdx = dataCollection.parts.length;
        for(var i = 0; i < args.length; i++){
            var arg = args[i];
            typeTagString += $7fcf8bc0be74801e$var$osc.writeArgument(arg, dataCollection);
        }
        var typeData = $7fcf8bc0be74801e$var$osc.writeString(typeTagString);
        dataCollection.byteLength += typeData.byteLength;
        dataCollection.parts.splice(currPartIdx, 0, typeData);
        return dataCollection;
    };
    /**
     * Reads an OSC message.
     *
     * @param {Array-like} data an array of bytes to read from
     * @param {Object} [options] read options
     * @param {Object} [offsetState] an offsetState object that stores the current offset into dv
     * @return {Object} the OSC message, formatted as a JavaScript object containing "address" and "args" properties
     */ $7fcf8bc0be74801e$var$osc.readMessage = function(data, options, offsetState) {
        options = options || $7fcf8bc0be74801e$var$osc.defaults;
        var dv = $7fcf8bc0be74801e$var$osc.dataView(data, data.byteOffset, data.byteLength);
        offsetState = offsetState || {
            idx: 0
        };
        var address = $7fcf8bc0be74801e$var$osc.readString(dv, offsetState);
        return $7fcf8bc0be74801e$var$osc.readMessageContents(address, dv, options, offsetState);
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.readMessageContents = function(address, dv, options, offsetState) {
        if (address.indexOf("/") !== 0) throw new Error("A malformed OSC address was found while reading an OSC message. String was: " + address);
        var args = $7fcf8bc0be74801e$var$osc.readArguments(dv, options, offsetState);
        return {
            address: address,
            args: args.length === 1 && options.unpackSingleArgs ? args[0] : args
        };
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.collectMessageParts = function(msg, options, dataCollection) {
        dataCollection = dataCollection || {
            byteLength: 0,
            parts: []
        };
        $7fcf8bc0be74801e$var$osc.addDataPart($7fcf8bc0be74801e$var$osc.writeString(msg.address), dataCollection);
        return $7fcf8bc0be74801e$var$osc.collectArguments(msg.args, options, dataCollection);
    };
    /**
     * Writes an OSC message.
     *
     * @param {Object} msg a message object containing "address" and "args" properties
     * @param {Object} [options] write options
     * @return {Uint8Array} an array of bytes containing the OSC message
     */ $7fcf8bc0be74801e$var$osc.writeMessage = function(msg, options) {
        options = options || $7fcf8bc0be74801e$var$osc.defaults;
        if (!$7fcf8bc0be74801e$var$osc.isValidMessage(msg)) throw new Error("An OSC message must contain a valid address. Message was: " + JSON.stringify(msg, null, 2));
        var msgCollection = $7fcf8bc0be74801e$var$osc.collectMessageParts(msg, options);
        return $7fcf8bc0be74801e$var$osc.joinParts(msgCollection);
    };
    $7fcf8bc0be74801e$var$osc.isValidMessage = function(msg) {
        return msg.address && msg.address.indexOf("/") === 0;
    };
    /**
     * Reads an OSC bundle.
     *
     * @param {DataView} dv the DataView instance to read from
     * @param {Object} [options] read optoins
     * @param {Object} [offsetState] an offsetState object that stores the current offset into dv
     * @return {Object} the bundle or message object that was read
     */ $7fcf8bc0be74801e$var$osc.readBundle = function(dv, options, offsetState) {
        return $7fcf8bc0be74801e$var$osc.readPacket(dv, options, offsetState);
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.collectBundlePackets = function(bundle, options, dataCollection) {
        dataCollection = dataCollection || {
            byteLength: 0,
            parts: []
        };
        $7fcf8bc0be74801e$var$osc.addDataPart($7fcf8bc0be74801e$var$osc.writeString("#bundle"), dataCollection);
        $7fcf8bc0be74801e$var$osc.addDataPart($7fcf8bc0be74801e$var$osc.writeTimeTag(bundle.timeTag), dataCollection);
        for(var i = 0; i < bundle.packets.length; i++){
            var packet = bundle.packets[i], collector = packet.address ? $7fcf8bc0be74801e$var$osc.collectMessageParts : $7fcf8bc0be74801e$var$osc.collectBundlePackets, packetCollection = collector(packet, options);
            dataCollection.byteLength += packetCollection.byteLength;
            $7fcf8bc0be74801e$var$osc.addDataPart($7fcf8bc0be74801e$var$osc.writeInt32(packetCollection.byteLength), dataCollection);
            dataCollection.parts = dataCollection.parts.concat(packetCollection.parts);
        }
        return dataCollection;
    };
    /**
     * Writes an OSC bundle.
     *
     * @param {Object} a bundle object containing "timeTag" and "packets" properties
     * @param {object} [options] write options
     * @return {Uint8Array} an array of bytes containing the message
     */ $7fcf8bc0be74801e$var$osc.writeBundle = function(bundle, options) {
        if (!$7fcf8bc0be74801e$var$osc.isValidBundle(bundle)) throw new Error("An OSC bundle must contain 'timeTag' and 'packets' properties. Bundle was: " + JSON.stringify(bundle, null, 2));
        options = options || $7fcf8bc0be74801e$var$osc.defaults;
        var bundleCollection = $7fcf8bc0be74801e$var$osc.collectBundlePackets(bundle, options);
        return $7fcf8bc0be74801e$var$osc.joinParts(bundleCollection);
    };
    $7fcf8bc0be74801e$var$osc.isValidBundle = function(bundle) {
        return bundle.timeTag !== undefined && bundle.packets !== undefined;
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.readBundleContents = function(dv, options, offsetState, len) {
        var timeTag = $7fcf8bc0be74801e$var$osc.readTimeTag(dv, offsetState), packets = [];
        while(offsetState.idx < len){
            var packetSize = $7fcf8bc0be74801e$var$osc.readInt32(dv, offsetState), packetLen = offsetState.idx + packetSize, packet = $7fcf8bc0be74801e$var$osc.readPacket(dv, options, offsetState, packetLen);
            packets.push(packet);
        }
        return {
            timeTag: timeTag,
            packets: packets
        };
    };
    /**
     * Reads an OSC packet, which may consist of either a bundle or a message.
     *
     * @param {Array-like} data an array of bytes to read from
     * @param {Object} [options] read options
     * @return {Object} a bundle or message object
     */ $7fcf8bc0be74801e$var$osc.readPacket = function(data, options, offsetState, len) {
        var dv = $7fcf8bc0be74801e$var$osc.dataView(data, data.byteOffset, data.byteLength);
        len = len === undefined ? dv.byteLength : len;
        offsetState = offsetState || {
            idx: 0
        };
        var header = $7fcf8bc0be74801e$var$osc.readString(dv, offsetState), firstChar = header[0];
        if (firstChar === "#") return $7fcf8bc0be74801e$var$osc.readBundleContents(dv, options, offsetState, len);
        else if (firstChar === "/") return $7fcf8bc0be74801e$var$osc.readMessageContents(header, dv, options, offsetState);
        throw new Error("The header of an OSC packet didn't contain an OSC address or a #bundle string. Header was: " + header);
    };
    /**
     * Writes an OSC packet, which may consist of either of a bundle or a message.
     *
     * @param {Object} a bundle or message object
     * @param {Object} [options] write options
     * @return {Uint8Array} an array of bytes containing the message
     */ $7fcf8bc0be74801e$var$osc.writePacket = function(packet, options) {
        if ($7fcf8bc0be74801e$var$osc.isValidMessage(packet)) return $7fcf8bc0be74801e$var$osc.writeMessage(packet, options);
        else if ($7fcf8bc0be74801e$var$osc.isValidBundle(packet)) return $7fcf8bc0be74801e$var$osc.writeBundle(packet, options);
        else throw new Error("The specified packet was not recognized as a valid OSC message or bundle. Packet was: " + JSON.stringify(packet, null, 2));
    };
    // Unsupported, non-API.
    $7fcf8bc0be74801e$var$osc.argumentTypes = {
        i: {
            reader: "readInt32",
            writer: "writeInt32"
        },
        h: {
            reader: "readInt64",
            writer: "writeInt64"
        },
        f: {
            reader: "readFloat32",
            writer: "writeFloat32"
        },
        s: {
            reader: "readString",
            writer: "writeString"
        },
        S: {
            reader: "readString",
            writer: "writeString"
        },
        b: {
            reader: "readBlob",
            writer: "writeBlob"
        },
        t: {
            reader: "readTimeTag",
            writer: "writeTimeTag"
        },
        T: {
            reader: "readTrue"
        },
        F: {
            reader: "readFalse"
        },
        N: {
            reader: "readNull"
        },
        I: {
            reader: "readImpulse"
        },
        d: {
            reader: "readFloat64",
            writer: "writeFloat64"
        },
        c: {
            reader: "readChar32",
            writer: "writeChar32"
        },
        r: {
            reader: "readColor",
            writer: "writeColor"
        },
        m: {
            reader: "readMIDIBytes",
            writer: "writeMIDIBytes"
        }
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.inferTypeForArgument = function(arg) {
        var type = typeof arg;
        // TODO: This is freaking hideous.
        switch(type){
            case "boolean":
                return arg ? "T" : "F";
            case "string":
                return "s";
            case "number":
                return "f";
            case "undefined":
                return "N";
            case "object":
                if (arg === null) return "N";
                else if (arg instanceof Uint8Array || arg instanceof ArrayBuffer) return "b";
                else if (typeof arg.high === "number" && typeof arg.low === "number") return "h";
                break;
        }
        throw new Error("Can't infer OSC argument type for value: " + JSON.stringify(arg, null, 2));
    };
    // Unsupported, non-API function.
    $7fcf8bc0be74801e$var$osc.annotateArguments = function(args) {
        var annotated = [];
        for(var i = 0; i < args.length; i++){
            var arg = args[i], msgArg;
            if (typeof arg === "object" && arg.type && arg.value !== undefined) // We've got an explicitly typed argument.
            msgArg = arg;
            else if ($7fcf8bc0be74801e$var$osc.isArray(arg)) // We've got an array of arguments,
            // so they each need to be inferred and expanded.
            msgArg = $7fcf8bc0be74801e$var$osc.annotateArguments(arg);
            else {
                var oscType = $7fcf8bc0be74801e$var$osc.inferTypeForArgument(arg);
                msgArg = {
                    type: oscType,
                    value: arg
                };
            }
            annotated.push(msgArg);
        }
        return annotated;
    };
    if ($7fcf8bc0be74801e$var$osc.isCommonJS) $7fcf8bc0be74801e$exports = $7fcf8bc0be74801e$var$osc;
})();


class $11394cda6771d67e$export$aea29d2c014998ee {
    /**
   * Initializes a new instance of the WebRtcClient class.
   * @param WebRTC channel.
   */ constructor(channel){
        this.startTime = 0;
        this.dataChannelInterval = null;
        this.channel = '';
        this.channel = channel;
        const config = {
            sdpSemantics: 'unified-plan',
            iceServers: [
                {
                    urls: [
                        'stun:stun.l.google.com:19302'
                    ]
                }
            ]
        };
        console.log('creating_connection', Date.now());
        this.connection = new RTCPeerConnection(config);
        console.log('connection_created', Date.now());
    }
    /**
   * Connects to the OSC server.
   */ connect() {
        const parameters = {
            ordered: true
        };
        const dataChannel = this.connection.createDataChannel('chat', parameters);
        dataChannel.addEventListener('close', ()=>{
            clearInterval(this.dataChannelInterval);
        });
        dataChannel.addEventListener('open', ()=>{
            console.log('connection_open', Date.now());
            this.onConnectCallback && this.onConnectCallback();
        });
        dataChannel.addEventListener('message', (event)=>{
            if (navigator.userAgent.includes('Firefox')) event.data.arrayBuffer().then((buffer)=>{
                const message = (0, (/*@__PURE__*/$parcel$interopDefault($7fcf8bc0be74801e$exports))).readPacket(buffer, {
                    metadata: true
                });
                this.onMessageCallback && this.onMessageCallback(message.packets);
            });
            else {
                const message = (0, (/*@__PURE__*/$parcel$interopDefault($7fcf8bc0be74801e$exports))).readPacket(event.data, {
                    metadata: true
                });
                this.onMessageCallback && this.onMessageCallback(message.packets);
            }
        });
        const constraints = {
            audio: false,
            video: false
        };
        this.negotiate();
    }
    /**
   * Sets the callback function that fires when the client gets connected.
   * @param callback Callback fired when a client gets connected.
   */ onConnect(callback) {
        this.onConnectCallback = callback;
    }
    /**
   * Sets the callback function that fires when a message is received.
   * @param callback Callback fired when a new message is received.
   */ onMessage(callback) {
        this.onMessageCallback = callback;
    }
    negotiate() {
        return this.connection.createOffer().then((offer)=>{
            console.log('offer_created', Date.now());
            return this.connection.setLocalDescription(offer);
        }).then(()=>{
            const offer = this.connection.localDescription;
            const options = {
                body: JSON.stringify({
                    sdp: offer.sdp,
                    type: offer.type,
                    video_transform: 'none'
                }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST'
            };
            console.log('post', Date.now());
            return fetch(this.channel, options);
        }).then((response)=>{
            return response.json();
        }).then((answer)=>{
            console.log('post_finished', Date.now());
            this.connection.setRemoteDescription(answer);
        }).catch((error)=>{
            alert(error);
        });
    }
}


var $e86f5db9b550c553$export$cbb5441c3364f6b8 = /*#__PURE__*/ function(PoseType) {
    PoseType["LeftHandUp"] = "left_hand_up";
    PoseType["RightHandUp"] = "right_hand_up";
    PoseType["BothHandsUp"] = "both_hands_up";
    PoseType["PointsLeft"] = "points_left";
    PoseType["PointsRight"] = "points_right";
    PoseType["LeftHandOnChest"] = "left_hand_on_chest";
    PoseType["RightHandOnChest"] = "right_hand_on_chest";
    PoseType["BothHandsOnChest"] = "both_hands_on_chest";
    return PoseType;
}({});


class $3fd10837e81b166e$export$f73d3eb6fd876d80 {
    /**
   * Creates an instance of the Actor class.
   * @param id Actor id.
   */ constructor(id){
        this.checkingPoses = true;
        this.id = id;
        this.previousPoses = [];
        this.skeleton = {
            poses: []
        };
    }
    /**
   * Gets actor id.
   * @returns Actor id.
   */ getId() {
        return this.id;
    }
    /**
   * Gets actor skeleton.
   * @returns Actor skeleton.
   */ getSkeleton() {
        return this.skeleton;
    }
    /**
   * Gets actor current zone.
   * @returns Actor current zone.
   */ getCurrentZone() {
        return this.currentZone;
    }
    /**
   * Gets actor last zone.
   * @returns Actor last zone.
   */ getLastZone() {
        return this.lastZone;
    }
    /**
   * Gets actor gender.
   * @returns Actor gender.
   */ getGender() {
        return this.gender;
    }
    /**
   * Gets actor attention.
   * @returns Actor attention.
   */ getAttention() {
        return this.attention;
    }
    /**
   * Gets actor age.
   * @returns Actor age.
   */ getAge() {
        return this.age;
    }
    /**
   * Gets actor dwell time.
   * @returns Actor dwell time.
   */ getDwellTime() {
        return this.dwellTime;
    }
    /**
   * Gets actor dominant emotion.
   * @returns Actor dominant emotion.
   */ getDominantEmotion() {
        return this.dominantEmotion;
    }
    /**
   * Gets actor angle.
   * @returns Actor angle.
   */ getAngle() {
        return this.angle;
    }
    /**
   * Gets actor containig box.
   * @returns Actor containing box.
   */ getBox() {
        return this.box;
    }
    /**
   * Gets actor face box.
   * @returns Actor face box.
   */ getFaceBox() {
        return this.faceBox;
    }
    /**
   * Sets actor skeleton.
   * @param skeleton Actor skeleton.
   */ setSkeleton(skeleton) {
        this.skeleton = skeleton;
    }
    /**
   * Sets actor current zone.
   * @param currentZone Actor current zone.
   */ setCurrentZone(currentZone) {
        this.currentZone = currentZone;
    }
    /**
   * Sets actor last zone.
   * @param lastZone Actor last zone.
   */ setLastZone(lastZone) {
        this.lastZone = lastZone;
    }
    /**
   * Sets actor gender.
   * @param gender Actor gender.
   */ setGender(gender) {
        this.gender = gender;
    }
    /**
   * Sets actor attention.
   * @param attention Actor attention.
   */ setAttention(attention) {
        this.attention = attention;
    }
    /**
   * Sets actor age.
   * @param age Actor age.
   */ setAge(age) {
        this.age = age;
    }
    /**
   * Sets actor dwell time.
   * @param dwellTime Actor dwell time.
   */ setDwellTime(dwellTime) {
        this.dwellTime = dwellTime;
    }
    /**
   * Sets actor dominant emotion.
   * @param dominantEmotion Actor dominant emotion.
   */ setDominantEmotion(dominantEmotion) {
        this.dominantEmotion = dominantEmotion;
    }
    /**
   * Sets actor angle.
   * @param angle Actor angle.
   */ setAngle(angle) {
        this.angle = angle;
    }
    /**
   * Sets actor containing box.
   * @param box Actor containing box.
   */ setBox(box) {
        this.box = box;
    }
    /**
   * Sets actor face box.
   * @param faceBox Actor face box.
   */ setFaceBox(faceBox) {
        this.faceBox = faceBox;
    }
    /**
   * Sets actor poses.
   * @param poses Array of poses types.
   */ setPoses(poses = []) {
        if (this.checkingPoses && poses.length) {
            const pose = {
                types: poses,
                timestamp: Date.now()
            };
            this.previousPoses.push(pose);
            if (pose.types.length === 1) {
                const type = pose.types[0];
                // if gesture is BothHandsUp or BothHandsOnChest, send the event
                if (type === (0, $e86f5db9b550c553$export$cbb5441c3364f6b8).BothHandsUp || type === (0, $e86f5db9b550c553$export$cbb5441c3364f6b8).BothHandsOnChest) this.poseChanged(type);
                else if (this.previousPoses.length > 1) {
                    let i = this.previousPoses.length - 1;
                    let p;
                    // find last gesture before the time lapse defined
                    while(!p && --i >= 0 && this.previousPoses[i].types.indexOf(type) >= 0)if (pose.timestamp - this.previousPoses[i].timestamp > 500) {
                        p = this.previousPoses[i];
                        break;
                    }
                    p && this.poseChanged(type);
                }
            }
        }
    }
    /**
   * Sets a callback that will be fired when poses change.
   * @param callback Callback that will be fired when poses change.
   */ onPoseChange(callback) {
        this.onPoseChangeCallback = callback;
    }
    poseChanged(type) {
        this.checkingPoses = false;
        this.onPoseChangeCallback && this.onPoseChangeCallback(type);
        setTimeout(()=>{
            this.checkingPoses = true;
        }, 2000);
    }
}


var $7a6754b678bd1f6f$export$d8c34c2371473e33 = /*#__PURE__*/ function(JointType) {
    JointType[JointType["Neck"] = 0] = "Neck";
    JointType[JointType["Nose"] = 1] = "Nose";
    JointType[JointType["CenterHip"] = 2] = "CenterHip";
    JointType[JointType["LeftShoulder"] = 3] = "LeftShoulder";
    JointType[JointType["LeftElbow"] = 4] = "LeftElbow";
    JointType[JointType["LeftWrist"] = 5] = "LeftWrist";
    JointType[JointType["LeftHip"] = 6] = "LeftHip";
    JointType[JointType["LeftKnee"] = 7] = "LeftKnee";
    JointType[JointType["LeftAnkle"] = 8] = "LeftAnkle";
    JointType[JointType["RightShoulder"] = 9] = "RightShoulder";
    JointType[JointType["RightElbow"] = 10] = "RightElbow";
    JointType[JointType["RightWrist"] = 11] = "RightWrist";
    JointType[JointType["RightHip"] = 12] = "RightHip";
    JointType[JointType["RightKnee"] = 13] = "RightKnee";
    JointType[JointType["RightAnkle"] = 14] = "RightAnkle";
    JointType[JointType["RightEye"] = 15] = "RightEye";
    JointType[JointType["LeftEye"] = 16] = "LeftEye";
    JointType[JointType["RightEar"] = 17] = "RightEar";
    JointType[JointType["LeftEar"] = 18] = "LeftEar";
    return JointType;
}({});


var $7ae393c73ee18402$export$eba093c1480613f4 = /*#__PURE__*/ function(BoxType) {
    BoxType["Person"] = "person";
    BoxType["Face"] = "face";
    return BoxType;
}({});



class $60d8d10a518ca5ec$export$7b66729c83b2e494 {
    /**
   * Parses an OSC bundle and create, update or delete a skeleton.
   * @param event OSC event.
   */ set(event) {
        let actor = null;
        for (const data of event){
            if (data.address == '/snap') {
                const args = data.args.map((d)=>d.value);
                this.checkAlive(args.slice(1));
            } else if (data.address === '/vac') {
                const args = data.args.map((d)=>d.value);
                if (args[0] === 'actor') {
                    actor = this.actors.get(args[1]);
                    if (!actor) {
                        actor = new (0, $3fd10837e81b166e$export$f73d3eb6fd876d80)(args[1]);
                        this.actors.set(actor.getId(), actor);
                    } else actor.setSkeleton({
                        poses: []
                    });
                } else if (args[0] === 'box') this.setBox(actor, args);
                else if (args[0] === 'skel') this.setSkeleton(actor, args);
                else if (args[0] === 'prop') this.setProp(actor, args);
            }
        }
        actor && this.onActorUpdateCallback && this.onActorUpdateCallback(actor);
        this.onUpdateCallback && this.onUpdateCallback();
    }
    /**
   * Gets all alive actors.
   * @returns Array of actors.
   */ getActors() {
        return Array.from(this.actors.values());
    }
    /**
   * Sets a callback that will be fired when there is an update in the skeletons list.
   * @param callback Callback that will be fired when there is an update in the skeletons list.
   */ onUpdate(callback) {
        this.onUpdateCallback = callback;
    }
    /**
   * Sets a callback that will be fired when there is an update in an actor.
   * @param callback Callback that will be fired when there is an update in an actor.
   */ onActorUpdate(callback) {
        this.onActorUpdateCallback = callback;
    }
    checkAlive(aliveActors) {
        for (let key of this.actors.keys())if (!aliveActors.includes(key)) this.actors.delete(key);
    }
    setBox(actor, args) {
        const box = {
            x: args[3],
            y: args[4],
            width: args[5],
            height: args[6]
        };
        if (args[2] === (0, $7ae393c73ee18402$export$eba093c1480613f4).Person) actor.setBox(box);
        else if (args[2] === (0, $7ae393c73ee18402$export$eba093c1480613f4).Face) actor.setFaceBox(box);
    }
    setProp(actor, args) {
        if (args[2] === 'current_zone') actor.setCurrentZone(args.length > 3 ? args[3] : '');
        else if (args[2] === 'last_zone') actor.setLastZone(args.length > 3 ? args[3] : '');
        else if (args[2] === 'attention') actor.setAttention(args[3]);
        else if (args[2] === 'age') actor.setAge(args[3]);
        else if (args[2] === 'gender') actor.setCurrentZone(args[3] === 'F' ? 'Female' : 'Male');
        else if (args[2] === 'dwell') actor.setDwellTime(args[3]);
        else if (args[2] === 'dominant_emotion') actor.setDominantEmotion(args[3]);
        else if (args[2] === 'angle') actor.setAngle(args[3]);
    }
    setSkeleton(actor, args) {
        const skeleton = {
            poses: []
        };
        this.setSkeletonJoint(skeleton, {
            x: Number(args[2]),
            y: Number(args[3])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).Neck);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[4]),
            y: Number(args[5])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).Nose);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[6]),
            y: Number(args[7])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).CenterHip);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[8]),
            y: Number(args[9])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftShoulder);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[10]),
            y: Number(args[11])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftElbow);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[12]),
            y: Number(args[13])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftWrist);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[14]),
            y: Number(args[15])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftHip);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[16]),
            y: Number(args[17])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftKnee);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[18]),
            y: Number(args[19])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftAnkle);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[20]),
            y: Number(args[21])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightShoulder);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[22]),
            y: Number(args[23])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightElbow);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[24]),
            y: Number(args[25])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightWrist);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[26]),
            y: Number(args[27])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightHip);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[28]),
            y: Number(args[29])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightKnee);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[30]),
            y: Number(args[31])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightAnkle);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[32]),
            y: Number(args[33])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightEye);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[34]),
            y: Number(args[35])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftEye);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[36]),
            y: Number(args[37])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightEar);
        this.setSkeletonJoint(skeleton, {
            x: Number(args[38]),
            y: Number(args[39])
        }, (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftEar);
        skeleton.poses = args.slice(40);
        actor.setPoses(skeleton.poses.filter((pose)=>Object.values((0, $e86f5db9b550c553$export$cbb5441c3364f6b8)).includes(pose)));
        actor.setSkeleton(skeleton);
    }
    setSkeletonJoint(skeleton, joint, type) {
        if (joint.x > 0 && joint.y > 0) {
            if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).CenterHip) skeleton.centerHip = joint;
            else if (type == (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftAnkle) skeleton.leftAnkle = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftEar) skeleton.leftEar = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftElbow) skeleton.leftElbow = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftEye) skeleton.leftEye = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftHip) skeleton.leftHip = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftKnee) skeleton.leftKnee = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftShoulder) skeleton.leftShoulder = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).LeftWrist) skeleton.leftWrist = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).Neck) skeleton.neck = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).Nose) skeleton.nose = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightAnkle) skeleton.rightAnkle = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightEar) skeleton.rightEar = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightElbow) skeleton.rightElbow = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightEye) skeleton.rightEye = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightHip) skeleton.rightHip = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightKnee) skeleton.rightKnee = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightShoulder) skeleton.rightShoulder = joint;
            else if (type === (0, $7a6754b678bd1f6f$export$d8c34c2371473e33).RightWrist) skeleton.rightWrist = joint;
        }
    }
    constructor(){
        this.actors = new Map();
    }
}


var $820fcd55b45c63b8$export$7bb68dd2f8771783 = /*#__PURE__*/ function(VisionNodeProtocol) {
    VisionNodeProtocol["MQTT"] = "mqtt";
    VisionNodeProtocol["WebRTC"] = "webRtc";
    return VisionNodeProtocol;
}({});
class $820fcd55b45c63b8$export$ae9b8b72b643631d {
    /**
   * Creates a new instance of the VisionNodeClient class.
   * @param config Vision Node configuration.
   */ constructor(config){
        this.onConnectCallback = config.onConnect;
        this.onChangeCallback = config.onChange;
        this.webSocketUrl = `ws://localhost:${config.port}/ws`;
        this.iniUrl = `http://localhost:${config.port}/ini`;
        this.calibrationUrl = `http://localhost:${config.port}/calibration`;
        if (config.protocol === "webRtc") {
            this.parser = new (0, $60d8d10a518ca5ec$export$7b66729c83b2e494)();
            this.client = new (0, $11394cda6771d67e$export$aea29d2c014998ee)(`http://localhost:${config.port}/webrtc`);
            this.client.onConnect(()=>config.onConnect && config.onConnect(this));
        }
    }
    /**
   * Connects to Vision Node.
   */ connect() {
        this.client.connect();
        this.client.onMessage((message)=>{
            this.parser.set(message);
        });
        this.onChangeCallback && this.parser.onUpdate(()=>this.onChangeCallback(this));
    }
    /**
   * Gets all actors.
   * @returns Array of actors.
   */ getActors() {
        return this.parser.getActors();
    }
    /**
   * Sets the callback function that fires when the client gets connected.
   * @param callback Callback fired when a client gets connected.
   */ onConnect(callback) {
        this.onConnectCallback = callback;
    }
    /**
   * Sets a callback that will be fired when there is a change.
   * @param callback Callback that will be fired when there is a change.
   */ onChange(callback) {
        this.onChangeCallback = callback;
        this.parser.onUpdate(()=>this.onChangeCallback(this));
    }
    /**
   * Gets Vision Node current configuration.
   * @returns Vision Node current configuration in json format.
   */ getConfig() {
        return new Promise((resolve, reject)=>{
            const ws = new $8689e0ff46fbd57a$export$1f2bb630327ac4b6(this.webSocketUrl);
            ws.on('open', async ()=>{
                const config = await ws.call('getConfig');
                ws.close();
                resolve(config);
            });
            ws.on('error', ()=>{
                reject(false);
            });
        });
    }
    /**
   * Gets an extrinsics calibration for the given params.
   * @param model Camera model.
   * @param points Reference polygon.
   * @param distance Distance to camera.
   * @param length Reference length.
   * @param height Reference height.
   * @returns An extrinsics calibration in json format.
   */ getExtrinsicsCalibration(model, points, distance, length, height) {
        return new Promise((resolve, reject)=>{
            const ws = new $8689e0ff46fbd57a$export$1f2bb630327ac4b6(this.webSocketUrl);
            ws.on('open', async ()=>{
                const calibration = await ws.call('calibrateExtrinsics', [
                    model,
                    points,
                    distance,
                    length,
                    height
                ]);
                console.log('extrinsics calibration', calibration);
                ws.close();
                resolve(calibration);
            });
            ws.on('error', ()=>{
                reject(false);
            });
        });
    }
    /**
   * Gets an intrinsics calibration for the given params.
   * @param model Camera model.
   * @param sensor Camera sensor.
   * @param aspect Camera aspect.
   * @param width Camera width.
   * @param height Camera height.
   * @param focalLength Camera focal length.
   * @returns An intrinsics calibration in json format.
   */ getIntrinsicsCalibration(model, sensor, aspect, width, height, focalLength) {
        return new Promise((resolve, reject)=>{
            const ws = new $8689e0ff46fbd57a$export$1f2bb630327ac4b6(this.webSocketUrl);
            ws.on('open', async ()=>{
                const calibration = await ws.call('calibrateIntrinsics', [
                    model,
                    sensor,
                    aspect,
                    width,
                    height,
                    focalLength
                ]);
                console.log('intrinsics calibration', calibration);
                ws.close();
                resolve(calibration);
            });
            ws.on('error', ()=>{
                reject(false);
            });
        });
    }
    /**
   * Sets a list of params that will remain until Vision Node is open.
   * @param params Params to update Vision Node.
   */ setParams(params) {
        const ws = new $8689e0ff46fbd57a$export$1f2bb630327ac4b6(this.webSocketUrl);
        ws.on('open', async ()=>{
            for (const param of params)await ws.call('setParam', [
                param.processor,
                param.name,
                param.value
            ]);
            ws.close();
        });
        ws.on('error', ()=>{
            console.log('Error settings params');
        });
    }
    /**
   * Sets a list of areas that will remain until Vision Node is open.
   * @param processor Pipeline processor.
   * @param camera Current camera.
   * @param areaIndex Area index.
   * @param areaName Area name.
   * @param areaPoints Area polygon.
   */ setAreaParams(processor, camera, areaIndex, areaName, areaPoints) {
        const ws = new $8689e0ff46fbd57a$export$1f2bb630327ac4b6(this.webSocketUrl);
        ws.on('open', async ()=>{
            await ws.call('setCameraZone', [
                processor,
                camera,
                areaIndex,
                areaName,
                areaPoints
            ]);
            ws.close();
        });
        ws.on('error', ()=>{
            console.log('Error settings area params');
        });
    }
    /**
   * Gets the ini configuration.
   * @returns Ini configuration in json format.
   */ async getIni() {
        const result = await fetch(this.iniUrl);
        return await result.json();
    }
    /**
   * Gets a section from ini.
   * @param section Section name.
   * @returns Section from ini in json format.
   */ async getSection(section) {
        const result = await fetch(`${this.iniUrl}/${section}`);
        return await result.json();
    }
    /**
   * Gets an option from a section in ini.
   * @param section Section name.
   * @param option Option name.
   * @returns Option from ini section in json format.
   */ async getOption(section, option) {
        const result = await fetch(`${this.iniUrl}/${section}/${option}`);
        return await result.json();
    }
    /**
   * Deletes a section from ini.
   * @param section Section name.
   */ async deleteSection(section) {
        const options = {
            method: 'delete'
        };
        await fetch(`${this.iniUrl}/${section}`, options);
    }
    /**
   * Deletes an option from a section in ini.
   * @param section Section name.
   * @param option Option name.
   */ async deleteOption(section, option) {
        const options = {
            method: 'delete'
        };
        await fetch(`${this.iniUrl}/${section}/${option}`, options);
    }
    /**
   * Sets an option value in ini.
   * @param section Section name.
   * @param option Option name.
   * @param value Option value.
   */ async postOption(section, option, value) {
        const options = {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        };
        await fetch(`${this.iniUrl}/${section}/${option}`, options);
    }
    /**
   * Sets values of a section in ini.
   * @param section Section name.
   * @param values Section values.
   */ async postSection(section, values) {
        const options = {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        };
        await fetch(`${this.iniUrl}/${section}`, options);
    }
    /**
   * Sets partial values of a section in ini.
   * @param section Section name.
   * @param values Section values.
   */ async putSection(section, values) {
        const options = {
            method: 'put',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        };
        await fetch(`${this.iniUrl}/${section}`, options);
    }
    /**
   * Gets a calibration.
   * @param name Calibration name.
   * @returns Calibration in json format.
   */ async getCalibration(name) {
        const result = await fetch(`${this.calibrationUrl}/${name}`);
        return await result.json();
    }
    /**
   * Sets a calibration.
   * @param name Calibration name.
   * @param value Calibration value.
   * @returns Result.
   */ async postCalibration(name, value) {
        const options = {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(value)
        };
        const result = await fetch(`${this.calibrationUrl}/${name}`, options);
        return await result.json();
    }
}






export {$820fcd55b45c63b8$export$ae9b8b72b643631d as VisionNodeClient, $3fd10837e81b166e$export$f73d3eb6fd876d80 as Actor, $e86f5db9b550c553$export$cbb5441c3364f6b8 as PoseType, $820fcd55b45c63b8$export$7bb68dd2f8771783 as VisionNodeProtocol};
//# sourceMappingURL=visionNode.js.map
