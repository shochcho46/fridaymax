/*! v3.1.3-00732a7f, 2020-09-08T07:45:25Z */ ! function a(o, s, u) {
    function l(t, e) { if (!s[t]) { if (!o[t]) { var n = "function" == typeof require && require; if (!e && n) return n(t, !0); if (d) return d(t, !0); var r = new Error("Cannot find module '" + t + "'"); throw r.code = "MODULE_NOT_FOUND", r } var i = s[t] = { exports: {} };
            o[t][0].call(i.exports, function(e) { return l(o[t][1][e] || e) }, i, i.exports, a, o, s, u) } return s[t].exports } for (var d = "function" == typeof require && require, e = 0; e < u.length; e++) l(u[e]); return l }({ 1: [function(e, t, n) { "use strict"; var o, u, r, i = { encode: function(e) { for (var t = [], n = 0; n < e.length; ++n) { var r = e.charCodeAt(n);
                        r < 128 ? t.push(r) : (r < 2048 ? t.push(192 | r >> 6) : (r < 65536 ? t.push(224 | r >> 12) : (t.push(240 | r >> 18), t.push(128 | 63 & r >> 12)), t.push(128 | 63 & r >> 6)), t.push(128 | 63 & r)) } return t }, decode: function(e) { for (var t = [], n = 0; n < e.length;) { var r = e[n++];
                        r < 128 || (r < 224 ? r = (31 & r) << 6 : (r < 240 ? r = (15 & r) << 12 : (r = (7 & r) << 18, r |= (63 & e[n++]) << 12), r |= (63 & e[n++]) << 6), r |= 63 & e[n++]), t.push(String.fromCharCode(r)) } return t.join("") } },
            l = {};

        function d(e) { for (var t = 0, n = [], r = 0 | e.length / 3; 0 < r--;) { var i = (e[t] << 16) + (e[t + 1] << 8) + e[t + 2];
                t += 3, n.push(o.charAt(63 & i >> 18)), n.push(o.charAt(63 & i >> 12)), n.push(o.charAt(63 & i >> 6)), n.push(o.charAt(63 & i)) } return 2 == e.length - t ? (i = (e[t] << 16) + (e[t + 1] << 8), n.push(o.charAt(63 & i >> 18)), n.push(o.charAt(63 & i >> 12)), n.push(o.charAt(63 & i >> 6)), n.push("=")) : 1 == e.length - t && (i = e[t] << 16, n.push(o.charAt(63 & i >> 18)), n.push(o.charAt(63 & i >> 12)), n.push("==")), n.join("") }

        function f(e) { for (var t = 0, n = [], r = 0 | e.length / 4; 0 < r--;) { var i = (u[e.charCodeAt(t)] << 18) + (u[e.charCodeAt(t + 1)] << 12) + (u[e.charCodeAt(t + 2)] << 6) + u[e.charCodeAt(t + 3)];
                n.push(255 & i >> 16), n.push(255 & i >> 8), n.push(255 & i), t += 4 } return n && ("=" == e.charAt(t - 2) ? (n.pop(), n.pop()) : "=" == e.charAt(t - 1) && n.pop()), n }
        o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", u = function() { for (var e = [], t = 0; t < o.length; ++t) e[o.charCodeAt(t)] = t; return e["=".charCodeAt(0)] = 0, e }(), r = { encode: function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(e.charCodeAt(n)); return t }, decode: function(e) { for (var t = 0; t < s.length; ++t) a[t] = String.fromCharCode(a[t]); return a.join("") } }, l.decodeArray = function(e) { var t = f(e); return new Uint8Array(t) }, l.encodeASCII = function(e) { var t = r.encode(e); return d(t) }, l.decodeASCII = function(e) { var t = f(e); return r.decode(t) }, l.encode = function(e) { var t = i.encode(e); return d(t) }, l.decode = function(e) { var t = f(e); return i.decode(t) }, void 0 !== n && (n.decode = l.decode, n.decodeArray = l.decodeArray, n.encode = l.encode, n.encodeASCII = l.encodeASCII) }, {}], 2: [function(e, t, n) { "use strict";! function(e) {
            function s(e) { var t = e; return n.hasOwnProperty(e) && (t = n[e]), String.fromCharCode(t) }

            function u(e) { for (var t = [], n = 0; n < e.length; n++) t.push(e[n].toString(16)); return t }

            function o(e, t, n, r, i) { this.foreground = e || "white", this.underline = t || !1, this.italics = n || !1, this.background = r || "black", this.flash = i || !1 } var n = { 42: 225, 92: 233, 94: 237, 95: 243, 96: 250, 123: 231, 124: 247, 125: 209, 126: 241, 127: 9608, 128: 174, 129: 176, 130: 189, 131: 191, 132: 8482, 133: 162, 134: 163, 135: 9834, 136: 224, 137: 32, 138: 232, 139: 226, 140: 234, 141: 238, 142: 244, 143: 251, 144: 193, 145: 201, 146: 211, 147: 218, 148: 220, 149: 252, 150: 8216, 151: 161, 152: 42, 153: 8217, 154: 9473, 155: 169, 156: 8480, 157: 8226, 158: 8220, 159: 8221, 160: 192, 161: 194, 162: 199, 163: 200, 164: 202, 165: 203, 166: 235, 167: 206, 168: 207, 169: 239, 170: 212, 171: 217, 172: 249, 173: 219, 174: 171, 175: 187, 176: 195, 177: 227, 178: 205, 179: 204, 180: 236, 181: 210, 182: 242, 183: 213, 184: 245, 185: 123, 186: 125, 187: 92, 188: 94, 189: 95, 190: 124, 191: 8764, 192: 196, 193: 228, 194: 214, 195: 246, 196: 223, 197: 165, 198: 164, 199: 9475, 200: 197, 201: 229, 202: 216, 203: 248, 204: 9487, 205: 9491, 206: 9495, 207: 9499 },
                a = { 17: 1, 18: 3, 21: 5, 22: 7, 23: 9, 16: 11, 19: 12, 20: 14 },
                l = { 17: 2, 18: 4, 21: 6, 22: 8, 23: 10, 19: 13, 20: 15 },
                d = { 25: 1, 26: 3, 29: 5, 30: 7, 31: 9, 24: 11, 27: 12, 28: 14 },
                f = { 25: 2, 26: 4, 29: 6, 30: 8, 31: 10, 27: 13, 28: 15 },
                c = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
                h = { verboseFilter: { DATA: 3, DEBUG: 3, INFO: 2, WARNING: 2, TEXT: 1, ERROR: 0 }, time: null, verboseLevel: 0, setTime: function(e) { this.time = e }, log: function(e, t) { var n = this.verboseFilter[e];
                        this.verboseLevel >= n && console.log(this.time + " [" + e + "] " + t) } };
            o.prototype = { reset: function() { this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1 }, setStyles: function(e) { for (var t = ["foreground", "underline", "italics", "background", "flash"], n = 0; n < t.length; n++) { var r = t[n];
                        e.hasOwnProperty(r) && (this[r] = e[r]) } }, isDefault: function() { return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash }, equals: function(e) { return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash }, copy: function(e) { this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash }, toString: function() { return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash } };

            function t(e, t, n, r, i, a) { this.uchar = e || " ", this.penState = new o(t, n, r, i, a) }
            t.prototype = { reset: function() { this.uchar = " ", this.penState.reset() }, setChar: function(e, t) { this.uchar = e, this.penState.copy(t) }, setPenState: function(e) { this.penState.copy(e) }, equals: function(e) { return this.uchar === e.uchar && this.penState.equals(e.penState) }, copy: function(e) { this.uchar = e.uchar, this.penState.copy(e.penState) }, isEmpty: function() { return " " === this.uchar && this.penState.isDefault() } };

            function r() { this.chars = []; for (var e = 0; e < 32; e++) this.chars.push(new t);
                this.pos = 0, this.currPenState = new o }
            r.prototype = { equals: function(e) { for (var t = !0, n = 0; n < 32; n++)
                        if (!this.chars[n].equals(e.chars[n])) { t = !1; break }
                    return t }, copy: function(e) { for (var t = 0; t < 32; t++) this.chars[t].copy(e.chars[t]) }, isEmpty: function() { for (var e = !0, t = 0; t < 32; t++)
                        if (!this.chars[t].isEmpty()) { e = !1; break }
                    return e }, setCursor: function(e) { this.pos !== e && (this.pos = e), this.pos < 0 ? (h.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : 32 < this.pos && (h.log("ERROR", "Too large cursor position " + this.pos), this.pos = 32) }, moveCursor: function(e) { var t = this.pos + e; if (1 < e)
                        for (var n = this.pos + 1; n < t + 1; n++) this.chars[n].setPenState(this.currPenState);
                    this.setCursor(t) }, backSpace: function() { this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState) }, insertChar: function(e) { 144 <= e && this.backSpace(); var t = s(e);
                    32 <= this.pos ? h.log("ERROR", "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1)) }, clearFromPos: function(e) { for (var t = e; t < 32; t++) this.chars[t].reset() }, clear: function() { this.clearFromPos(0), this.pos = 0, this.currPenState.reset() }, clearToEndOfRow: function() { this.clearFromPos(this.pos) }, getTextString: function() { for (var e = [], t = !0, n = 0; n < 32; n++) { var r = this.chars[n].uchar; " " !== r && (t = !1), e.push(r) } return t ? "" : e.join("") }, setPenStyles: function(e) { this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState) } };

            function i() { this.rows = []; for (var e = 0; e < 15; e++) this.rows.push(new r);
                this.currRow = 14, this.nrRollUpRows = null, this.reset() }
            i.prototype = { reset: function() { for (var e = 0; e < 15; e++) this.rows[e].clear();
                    this.currRow = 14 }, equals: function(e) { for (var t = !0, n = 0; n < 15; n++)
                        if (!this.rows[n].equals(e.rows[n])) { t = !1; break }
                    return t }, copy: function(e) { for (var t = 0; t < 15; t++) this.rows[t].copy(e.rows[t]) }, isEmpty: function() { for (var e = !0, t = 0; t < 15; t++)
                        if (!this.rows[t].isEmpty()) { e = !1; break }
                    return e }, backSpace: function() { this.rows[this.currRow].backSpace() }, clearToEndOfRow: function() { this.rows[this.currRow].clearToEndOfRow() }, insertChar: function(e) { this.rows[this.currRow].insertChar(e) }, setPen: function(e) { this.rows[this.currRow].setPenStyles(e) }, moveCursor: function(e) { this.rows[this.currRow].moveCursor(e) }, setCursor: function(e) { h.log("INFO", "setCursor: " + e), this.rows[this.currRow].setCursor(e) }, setPAC: function(e) { h.log("INFO", "pacData = " + JSON.stringify(e)); var t = e.row - 1;
                    this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.currRow = t; var n, r, i = this.rows[this.currRow];
                    null !== e.indent && (n = e.indent, r = Math.max(n - 1, 0), i.setCursor(e.indent), e.color = i.chars[r].penState.foreground); var a = { foreground: e.color, underline: e.underline, italics: e.italics, background: "black", flash: !1 };
                    this.setPen(a) }, setBkgData: function(e) { h.log("INFO", "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32) }, setRollUpRows: function(e) { this.nrRollUpRows = e }, rollUp: function() { var e, t;
                    null !== this.nrRollUpRows ? (h.log("TEXT", this.getDisplayText()), e = this.currRow + 1 - this.nrRollUpRows, (t = this.rows.splice(e, 1)[0]).clear(), this.rows.splice(this.currRow, 0, t), h.log("INFO", "Rolling up")) : h.log("DEBUG", "roll_up but nrRollUpRows not set yet") }, getDisplayText: function(e) { e = e || !1; for (var t = [], n = "", r = -1, i = 0; i < 15; i++) { var a = this.rows[i].getTextString();
                        a && (r = i + 1, e ? t.push("Row " + r + ': "' + a + '"') : t.push(a.trim())) } return 0 < t.length && (n = e ? "[" + t.join(" | ") + "]" : t.join("\n")), n }, getTextAndFormat: function() { return this.rows } };

            function p(e, t) { this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new i, this.nonDisplayedMemory = new i, this.lastOutputScreen = new i, this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null }
            p.prototype = { modes: ["MODE_ROLL-UP", "MODE_POP-ON", "MODE_PAINT-ON", "MODE_TEXT"], reset: function() { this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null }, getHandler: function() { return this.outputFilter }, setHandler: function(e) { this.outputFilter = e }, setPAC: function(e) { this.writeScreen.setPAC(e) }, setBkgData: function(e) { this.writeScreen.setBkgData(e) }, setMode: function(e) { e !== this.mode && (this.mode = e, h.log("INFO", "MODE=" + e), "MODE_POP-ON" == this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e) }, insertChars: function(e) { for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]); var n = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                    h.log("INFO", n + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (h.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate()) }, cc_RCL: function() { h.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON") }, cc_BS: function() { h.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate()) }, cc_AOF: function() {}, cc_AON: function() {}, cc_DER: function() { h.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate() }, cc_RU: function(e) { h.log("INFO", "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e) }, cc_FON: function() { h.log("INFO", "FON - Flash On"), this.writeScreen.setPen({ flash: !0 }) }, cc_RDC: function() { h.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON") }, cc_TR: function() { h.log("INFO", "TR"), this.setMode("MODE_TEXT") }, cc_RTD: function() { h.log("INFO", "RTD"), this.setMode("MODE_TEXT") }, cc_EDM: function() { h.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate() }, cc_CR: function() { h.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate() }, cc_ENM: function() { h.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset() }, cc_EOC: function() { var e;
                    h.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode && (e = this.displayedMemory, this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, h.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())), this.outputDataUpdate() }, cc_TO: function(e) { h.log("INFO", "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e) }, cc_MIDROW: function(e) { var t, n = { flash: !1 };
                    n.underline = e % 2 == 1, n.italics = 46 <= e, n.italics ? n.foreground = "white" : (t = Math.floor(e / 2) - 16, n.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][t]), h.log("INFO", "MIDROW: " + JSON.stringify(n)), this.writeScreen.setPen(n) }, outputDataUpdate: function() { var e = h.time;
                    null !== e && this.outputFilter && (this.outputFilter.updateData && this.outputFilter.updateData(e, this.displayedMemory), null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory)) }, cueSplitAtTime: function(e) { this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e)) } };

            function g(e, t, n) { this.field = e || 1, this.outputs = [t, n], this.channels = [new p(1, t), new p(2, n)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = { padding: 0, char: 0, cmd: 0, other: 0 } }
            g.prototype = { getHandler: function(e) { return this.channels[e].getHandler() }, setHandler: function(e, t) { this.channels[e].setHandler(t) }, addData: function(e, t) { var n, r = !1;
                    this.lastTime = e, h.setTime(e); for (var i = 0; i < t.length; i += 2) { var a = 127 & t[i],
                            o = 127 & t[i + 1];
                        16 <= a && a <= 31 && a === this.lastCmdA && o === this.lastCmdB ? (this.lastCmdA = null, this.lastCmdB = null, h.log("DEBUG", "Repeated command (" + u([a, o]) + ") is dropped")) : 0 != a || 0 != o ? (h.log("DATA", "[" + u([t[i], t[i + 1]]) + "] -> (" + u([a, o]) + ")"), (n = (n = (n = (n = this.parseCmd(a, o)) || this.parseMidrow(a, o)) || this.parsePAC(a, o)) || this.parseBackgroundAttributes(a, o)) || (r = this.parseChars(a, o)) && (this.currChNr && 0 <= this.currChNr ? this.channels[this.currChNr - 1].insertChars(r) : h.log("WARNING", "No channel found yet. TEXT-MODE?")), n ? this.dataCounters.cmd += 2 : r ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, h.log("WARNING", "Couldn't parse cleaned data " + u([a, o]) + " orig: " + u([t[i], t[i + 1]])))) : this.dataCounters.padding += 2 } }, parseCmd: function(e, t) { var n = null; if (!((20 === e || 21 === e || 28 === e || 29 === e) && 32 <= t && t <= 47) && !((23 === e || 31 === e) && 33 <= t && t <= 35)) return !1;
                    n = 20 === e || 21 === e || 23 === e ? 1 : 2; var r = this.channels[n - 1]; return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? r.cc_RCL() : 33 === t ? r.cc_BS() : 34 === t ? r.cc_AOF() : 35 === t ? r.cc_AON() : 36 === t ? r.cc_DER() : 37 === t ? r.cc_RU(2) : 38 === t ? r.cc_RU(3) : 39 === t ? r.cc_RU(4) : 40 === t ? r.cc_FON() : 41 === t ? r.cc_RDC() : 42 === t ? r.cc_TR() : 43 === t ? r.cc_RTD() : 44 === t ? r.cc_EDM() : 45 === t ? r.cc_CR() : 46 === t ? r.cc_ENM() : 47 === t && r.cc_EOC() : r.cc_TO(t - 32), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = n, !0 }, parseMidrow: function(e, t) { var n = null; if ((17 === e || 25 === e) && 32 <= t && t <= 47) { if ((n = 17 === e ? 1 : 2) !== this.currChNr) return h.log("ERROR", "Mismatch channel in midrow parsing"), !1; var r = this.channels[n - 1]; return r.insertChars([32]), r.cc_MIDROW(t), h.log("DEBUG", "MIDROW (" + u([e, t]) + ")"), this.lastCmdA = e, this.lastCmdB = t, !0 } return !1 }, parsePAC: function(e, t) { var n, r = null; if (!((17 <= e && e <= 23 || 25 <= e && e <= 31) && 64 <= t && t <= 127) && !((16 === e || 24 === e) && 64 <= t && t <= 95)) return !1;
                    n = e <= 23 ? 1 : 2, r = 64 <= t && t <= 95 ? 1 == n ? a[e] : d[e] : 1 == n ? l[e] : f[e]; var i = this.interpretPAC(r, t); return this.channels[n - 1].setPAC(i), this.lastCmdA = e, this.lastCmdB = t, this.currChNr = n, !0 }, interpretPAC: function(e, t) { var n = t,
                        r = { color: null, italics: !1, indent: null, underline: !1, row: e },
                        n = 95 < t ? t - 96 : t - 64; return r.underline = 1 == (1 & n), n <= 13 ? r.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(n / 2)] : n <= 15 ? (r.italics = !0, r.color = "white") : r.indent = 4 * Math.floor((n - 16) / 2), r }, parseChars: function(e, t) { var n, r, i = null,
                        a = null,
                        o = null; return 17 <= (o = 25 <= e ? (i = 2, e - 8) : (i = 1, e)) && o <= 19 ? (n = t, n = 17 === o ? t + 80 : 18 === o ? t + 112 : t + 144, h.log("INFO", "Special char '" + s(n) + "' in channel " + i), a = [n], this.lastCmdA = e, this.lastCmdB = t) : 32 <= e && e <= 127 && (a = 0 === t ? [e] : [e, t], this.lastCmdA = null, this.lastCmdB = null), a && (r = u(a), h.log("DEBUG", "Char codes =  " + r.join(","))), a }, parseBackgroundAttributes: function(e, t) { var n, r, i; return ((16 === e || 24 === e) && 32 <= t && t <= 47 || (23 === e || 31 === e) && 45 <= t && t <= 47) && (n = {}, 16 === e || 24 === e ? (r = Math.floor((t - 32) / 2), n.background = c[r], t % 2 == 1 && (n.background = n.background + "_semi")) : 45 === t ? n.background = "transparent" : (n.foreground = "black", 47 === t && (n.underline = !0)), i = e < 24 ? 1 : 2, this.channels[i - 1].setBkgData(n), this.lastCmdA = e, this.lastCmdB = t, !0) }, reset: function() { for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].reset();
                    this.lastCmdA = null, this.lastCmdB = null }, cueSplitAtTime: function(e) { for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].cueSplitAtTime(e) } };
            e.logger = h, e.PenState = o, e.CaptionScreen = i, e.Cea608Parser = g, e.findCea608Nalus = function(e, t, n) { for (var r = 0, i = t, a = []; i < t + n;) { if (r = e.getUint32(i), 6 === (31 & e.getUint8(i + 4)))
                        for (var o = i + 5, s = -1; o < i + 4 + r - 1;) { s = 0; for (var u = 255; 255 === u;) s += u = e.getUint8(o), o++; for (var l = 0, u = 255; 255 === u;) l += u = e.getUint8(o), o++;! function(e, t, n, r) { if (4 !== e || t < 8) return null; var i = n.getUint8(r),
                                    a = n.getUint16(r + 1),
                                    o = n.getUint32(r + 3),
                                    s = n.getUint8(r + 7); return 181 == i && 49 == a && 1195456820 == o && 3 == s }(s, l, e, o) || a.push([o, l]), o += l }
                    i += r + 4 } return a }, e.extractCea608DataFromRange = function(e, t) { var n = t[0],
                    r = [
                        [],
                        []
                    ];
                n += 8; var i = 31 & e.getUint8(n);
                n += 2; for (var a = 0; a < i; a++) { var o = e.getUint8(n),
                        s = 4 & o,
                        u = 3 & o;
                    n++; var l = e.getUint8(n);
                    n++; var d = e.getUint8(n);
                    n++, s && (127 & l) + (127 & d) != 0 && (0 == u ? (r[0].push(l), r[0].push(d)) : 1 == u && (r[1].push(l), r[1].push(d))) } return r } }(void 0 === n ? (void 0).cea608parser = {} : n) }, {}], 3: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.default = function(A) { A = A || {},
                function() { void 0 === A.escapeMode && (A.escapeMode = !0);
                    void 0 === A.attributePrefix && (A.attributePrefix = "_");
                    A.arrayAccessForm = A.arrayAccessForm || "none", A.emptyNodeForm = A.emptyNodeForm || "text", void 0 === A.enableToStringFunc && (A.enableToStringFunc = !0);
                    A.arrayAccessFormPaths = A.arrayAccessFormPaths || [], void 0 === A.skipEmptyTextNodesForObj && (A.skipEmptyTextNodesForObj = !0);
                    void 0 === A.stripWhitespaces && (A.stripWhitespaces = !0);
                    A.datetimeAccessFormPaths = A.datetimeAccessFormPaths || [], void 0 === A.useDoubleQuotes && (A.useDoubleQuotes = !1);
                    A.xmlElementsFilter = A.xmlElementsFilter || [], A.jsonPropertiesFilter = A.jsonPropertiesFilter || [], void 0 === A.keepCData && (A.keepCData = !1);
                    void 0 === A.ignoreRoot && (A.ignoreRoot = !1) }(); var I = { ELEMENT_NODE: 1, TEXT_NODE: 3, CDATA_SECTION_NODE: 4, COMMENT_NODE: 8, DOCUMENT_NODE: 9 };

            function R(e) { var t = e.localName; return null == t && (t = e.baseName), null != t && "" != t || (t = e.nodeName), t }

            function u(e) { return "string" == typeof e ? e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;") : e }

            function b(e, t, n, r) { for (var i = 0; i < e.length; i++) { var a = e[i]; if ("string" == typeof a) { if (a == r) break } else if (a instanceof RegExp) { if (a.test(r)) break } else if ("function" == typeof a && a(t, n, r)) break } return i != e.length }

            function D(e, t, n) { switch (A.arrayAccessForm) {
                    case "property":
                        e[t] instanceof Array ? e[t + "_asArray"] = e[t] : e[t + "_asArray"] = [e[t]] }!(e[t] instanceof Array) && 0 < A.arrayAccessFormPaths.length && b(A.arrayAccessFormPaths, e, t, n) && (e[t] = [e[t]]) }

            function M(e) { var t, n = e.split(/[-T:+Z]/g),
                    r = new Date(n[0], n[1] - 1, n[2]),
                    i = n[5].split("."); return r.setHours(n[3], n[4], i[0]), 1 < i.length && r.setMilliseconds(i[1]), n[6] && n[7] ? (t = 60 * n[6] + Number(n[7]), t = 0 + ("-" == (/\d\d-\d\d:\d\d$/.test(e) ? "-" : "+") ? -1 * t : t), r.setMinutes(r.getMinutes() - t - r.getTimezoneOffset())) : -1 !== e.indexOf("Z", e.length - 1) && (r = new Date(Date.UTC(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()))), r }

            function N(e, t) { if (e.nodeType == I.DOCUMENT_NODE) { for (var n = new Object, r = e.childNodes, i = 0; i < r.length; i++) {
                        (o = r[i]).nodeType == I.ELEMENT_NODE && (A.ignoreRoot ? n = N(o) : (n = {})[d = R(o)] = N(o)) } return n } if (e.nodeType == I.ELEMENT_NODE) {
                    (n = new Object).__cnt = 0; for (var a = [], r = e.childNodes, i = 0; i < r.length; i++) { var o, s, u, l, d = R(o = r[i]);
                        o.nodeType != I.COMMENT_NODE && (s = t + "." + d, v = n, y = o.nodeType, T = d, S = s, y == I.ELEMENT_NODE && 0 < A.xmlElementsFilter.length && !b(A.xmlElementsFilter, v, T, S) || (n.__cnt++, null == n[d] ? (u = N(o, s), "#text" == d && !/[^\s]/.test(u) || ((l = {})[d] = u, a.push(l)), n[d] = u, D(n, d, s)) : (null != n[d] && (n[d] instanceof Array || (n[d] = [n[d]], D(n, d, s))), u = N(o, s), "#text" == d && !/[^\s]/.test(u) || ((l = {})[d] = u, a.push(l)), n[d][n[d].length] = u))) }
                    n.__children = a; for (var f = R(e), c = 0; c < e.attributes.length; c++) { var h = e.attributes[c];
                        n.__cnt++; for (var p = h.value, g = 0, _ = A.matchers.length; g < _; g++) { var E = A.matchers[g];
                            E.test(h, f) && (p = E.converter(h.value)) }
                        n[A.attributePrefix + h.name] = p } var m = e.prefix; return null != m && "" != m && (n.__cnt++, n.__prefix = m), null != n["#text"] && (n.__text = n["#text"], n.__text instanceof Array && (n.__text = n.__text.join("\n")), A.stripWhitespaces && (n.__text = n.__text.trim()), delete n["#text"], "property" == A.arrayAccessForm && delete n["#text_asArray"], n.__text = function(e, t, n) { if (0 < A.datetimeAccessFormPaths.length) { var r = n.split(".#")[0]; return b(A.datetimeAccessFormPaths, e, t, r) ? M(e) : e } return e }(n.__text, d, t + "." + d)), null != n["#cdata-section"] && (n.__cdata = n["#cdata-section"], delete n["#cdata-section"], "property" == A.arrayAccessForm && delete n["#cdata-section_asArray"]), 0 == n.__cnt && "text" == A.emptyNodeForm ? n = "" : 1 == n.__cnt && null != n.__text ? n = n.__text : 1 != n.__cnt || null == n.__cdata || A.keepCData ? 1 < n.__cnt && null != n.__text && A.skipEmptyTextNodesForObj && (A.stripWhitespaces && "" == n.__text || "" == n.__text.trim()) && delete n.__text : n = n.__cdata, delete n.__cnt, !A.enableToStringFunc || null == n.__text && null == n.__cdata || (n.toString = function() { return (null != this.__text ? this.__text : "") + (null != this.__cdata ? this.__cdata : "") }), n } if (e.nodeType == I.TEXT_NODE || e.nodeType == I.CDATA_SECTION_NODE) return e.nodeValue; var v, y, T, S }

            function l(e, t, n, r) { var i = "<" + (null != e && null != e.__prefix ? e.__prefix + ":" : "") + t; if (null != n)
                    for (var a = 0; a < n.length; a++) { var o = n[a],
                            s = e[o];
                        A.escapeMode && (s = u(s)), i += " " + o.substr(A.attributePrefix.length) + "=", A.useDoubleQuotes ? i += '"' + s + '"' : i += "'" + s + "'" }
                return i += r ? "/>" : ">" }

            function d(e, t) { return "</" + (null != e.__prefix ? e.__prefix + ":" : "") + t + ">" }

            function f(e, t) { return "property" == A.arrayAccessForm && (n = t.toString(), r = "_asArray", -1 !== n.indexOf(r, n.length - r.length)) || 0 == t.toString().indexOf(A.attributePrefix) || 0 == t.toString().indexOf("__") || e[t] instanceof Function; var n, r }

            function c(e) { var t = 0; if (e instanceof Object)
                    for (var n in e) f(e, n) || t++; return t }

            function h(e) { var t = []; if (e instanceof Object)
                    for (var n in e) - 1 == n.toString().indexOf("__") && 0 == n.toString().indexOf(A.attributePrefix) && t.push(n); return t }

            function p(e) { var t, n, r = ""; return e instanceof Object ? r += (n = "", null != (t = e).__cdata && (n += "<![CDATA[" + t.__cdata + "]]>"), null != t.__text && (A.escapeMode ? n += u(t.__text) : n += t.__text), n) : null != e && (A.escapeMode ? r += u(e) : r += e), r }

            function g(e, t) { return "" === e ? t : e + "." + t }

            function _(e, t) { var n, r, i, a, o, s = ""; if (0 < c(e))
                    for (var u in e) { f(e, u) || "" != t && (i = e, o = g(t, a = u), 0 != A.jsonPropertiesFilter.length && "" != o && !b(A.jsonPropertiesFilter, i, a, o)) || (r = h(n = e[u]), null == n || null == n ? s += l(n, u, r, !0) : n instanceof Object ? n instanceof Array ? s += function(e, t, n, r) { var i = ""; if (0 == e.length) i += l(e, t, n, !0);
                            else
                                for (var a = 0; a < e.length; a++) i += l(e[a], t, h(e[a]), !1), i += _(e[a], g(r, t)), i += d(e[a], t); return i }(n, u, r, t) : n instanceof Date ? (s += l(n, u, r, !1), s += n.toISOString(), s += d(n, u)) : 0 < c(n) || null != n.__text || null != n.__cdata ? (s += l(n, u, r, !1), s += _(n, g(t, u)), s += d(n, u)) : s += l(n, u, r, !0) : (s += l(n, u, r, !1), s += p(n), s += d(n, u))) }
                return s += p(e) }
            this.parseXmlString = function(e) { var t;
                window.ActiveXObject || window; if (void 0 === e) return null; if (window.DOMParser) { var n = new window.DOMParser; try { 0 < (t = n.parseFromString(e, "text/xml")).getElementsByTagNameNS("*", "parsererror").length && (t = null) } catch (e) { t = null } } else 0 == e.indexOf("<?") && (e = e.substr(e.indexOf("?>") + 2)), (t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e); return t }, this.asArray = function(e) { return void 0 === e || null == e ? [] : e instanceof Array ? e : [e] }, this.toXmlDateTime = function(e) { return e instanceof Date ? e.toISOString() : "number" == typeof e ? new Date(e).toISOString() : null }, this.asDateTime = function(e) { return "string" == typeof e ? M(e) : e }, this.xml2json = function(e) { return N(e) }, this.xml_str2json = function(e) { var t = this.parseXmlString(e); return null != t ? this.xml2json(t) : null }, this.json2xml_str = function(e) { return _(e, "") }, this.json2xml = function(e) { var t = this.json2xml_str(e); return this.parseXmlString(t) }, this.getVersion = function() { return "1.2.0" } }, t.exports = n.default }, {}], 4: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = e(5),
            a = r(e(125)),
            o = r(e(162)),
            s = r(e(102)),
            u = r(e(45));
        dashjs.Protection = o.default, dashjs.MetricsReporting = a.default, dashjs.MediaPlayerFactory = s.default, dashjs.Debug = u.default, n.default = dashjs, n.MediaPlayer = i.MediaPlayer, n.Protection = o.default, n.MetricsReporting = a.default, n.MediaPlayerFactory = s.default, n.Debug = u.default }, { 102: 102, 125: 125, 162: 162, 45: 45, 5: 5 }], 5: [function(u, e, l) {
        (function(e) { "use strict";

            function t(e) { return e && e.__esModule ? e : { default: e } }
            Object.defineProperty(l, "__esModule", { value: !0 }); var n = t(u(100)),
                r = t(u(47)),
                i = t(u(45)),
                a = u(50),
                o = "undefined" != typeof window && window || e,
                s = o.dashjs;
            (s = s || (o.dashjs = {})).MediaPlayer = n.default, s.FactoryMaker = r.default, s.Debug = i.default, s.Version = (0, a.getVersionString)(), l.default = s, l.MediaPlayer = n.default, l.FactoryMaker = r.default, l.Debug = i.default }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { 100: 100, 45: 45, 47: 47, 50: 50 }], 6: [function(e, t, n) { "use strict";
        n.byteLength = function(e) { var t = f(e),
                n = t[0],
                r = t[1]; return 3 * (n + r) / 4 - r }, n.toByteArray = function(e) { for (var t, n = f(e), r = n[0], i = n[1], a = new d(function(e, t) { return 3 * (e + t) / 4 - t }(r, i)), o = 0, s = 0 < i ? r - 4 : r, u = 0; u < s; u += 4) t = l[e.charCodeAt(u)] << 18 | l[e.charCodeAt(u + 1)] << 12 | l[e.charCodeAt(u + 2)] << 6 | l[e.charCodeAt(u + 3)], a[o++] = t >> 16 & 255, a[o++] = t >> 8 & 255, a[o++] = 255 & t;
            2 === i && (t = l[e.charCodeAt(u)] << 2 | l[e.charCodeAt(u + 1)] >> 4, a[o++] = 255 & t);
            1 === i && (t = l[e.charCodeAt(u)] << 10 | l[e.charCodeAt(u + 1)] << 4 | l[e.charCodeAt(u + 2)] >> 2, a[o++] = t >> 8 & 255, a[o++] = 255 & t); return a }, n.fromByteArray = function(e) { for (var t, n = e.length, r = n % 3, i = [], a = 0, o = n - r; a < o; a += 16383) i.push(function(e, t, n) { for (var r, i = [], a = t; a < n; a += 3) r = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), i.push(function(e) { return s[e >> 18 & 63] + s[e >> 12 & 63] + s[e >> 6 & 63] + s[63 & e] }(r)); return i.join("") }(e, a, o < a + 16383 ? o : a + 16383));
            1 == r ? (t = e[n - 1], i.push(s[t >> 2] + s[t << 4 & 63] + "==")) : 2 == r && (t = (e[n - 2] << 8) + e[n - 1], i.push(s[t >> 10] + s[t >> 4 & 63] + s[t << 2 & 63] + "=")); return i.join("") }; for (var s = [], l = [], d = "undefined" != typeof Uint8Array ? Uint8Array : Array, r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, a = r.length; i < a; ++i) s[i] = r[i], l[r.charCodeAt(i)] = i;

        function f(e) { var t = e.length; if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4"); var n = e.indexOf("="); return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4] }
        l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63 }, {}], 7: [function(e, t, n) {}, {}], 8: [function(e, t, n) { "use strict"; var s = e(6),
            a = e(13);
        n.Buffer = f, n.SlowBuffer = function(e) {+e != e && (e = 0); return f.alloc(+e) }, n.INSPECT_MAX_BYTES = 50; var r = 2147483647;

        function o(e) { if (r < e) throw new RangeError('The value "' + e + '" is invalid for option "size"'); var t = new Uint8Array(e); return t.__proto__ = f.prototype, t }

        function f(e, t, n) { if ("number" != typeof e) return i(e, t, n); if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number'); return l(e) }

        function i(e, t, n) { if ("string" == typeof e) return function(e, t) { "string" == typeof t && "" !== t || (t = "utf8"); if (!f.isEncoding(t)) throw new TypeError("Unknown encoding: " + t); var n = 0 | h(e, t),
                    r = o(n),
                    i = r.write(e, t);
                i !== n && (r = r.slice(0, i)); return r }(e, t); if (ArrayBuffer.isView(e)) return d(e); if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e); if (w(e, ArrayBuffer) || e && w(e.buffer, ArrayBuffer)) return function(e, t, n) { if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds'); if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds'); var r;
                r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n); return r.__proto__ = f.prototype, r }(e, t, n); if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number'); var r = e.valueOf && e.valueOf(); if (null != r && r !== e) return f.from(r, t, n); var i = function(e) { if (f.isBuffer(e)) { var t = 0 | c(e.length),
                        n = o(t); return 0 === n.length ? n : (e.copy(n, 0, 0, t), n) } if (void 0 !== e.length) return "number" != typeof e.length || O(e.length) ? o(0) : d(e); if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data) }(e); if (i) return i; if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return f.from(e[Symbol.toPrimitive]("string"), t, n); throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e) }

        function u(e) { if ("number" != typeof e) throw new TypeError('"size" argument must be of type number'); if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"') }

        function l(e) { return u(e), o(e < 0 ? 0 : 0 | c(e)) }

        function d(e) { for (var t = e.length < 0 ? 0 : 0 | c(e.length), n = o(t), r = 0; r < t; r += 1) n[r] = 255 & e[r]; return n }

        function c(e) { if (r <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r.toString(16) + " bytes"); return 0 | e }

        function h(e, t) { if (f.isBuffer(e)) return e.length; if (ArrayBuffer.isView(e) || w(e, ArrayBuffer)) return e.byteLength; if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e); var n = e.length,
                r = 2 < arguments.length && !0 === arguments[2]; if (!r && 0 === n) return 0; for (var i = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                    return M(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return N(e).length;
                default:
                    if (i) return r ? -1 : M(e).length;
                    t = ("" + t).toLowerCase(), i = !0 } }

        function p(e, t, n) { var r, i, a, o = !1; if ((void 0 === t || t < 0) && (t = 0), t > this.length) return ""; if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return ""; if ((n >>>= 0) <= (t >>>= 0)) return ""; for (e = e || "utf8";;) switch (e) {
                case "hex":
                    return function(e, t, n) { var r = e.length;
                        (!t || t < 0) && (t = 0);
                        (!n || n < 0 || r < n) && (n = r); for (var i = "", a = t; a < n; ++a) i += function(e) { return e < 16 ? "0" + e.toString(16) : e.toString(16) }(e[a]); return i }(this, t, n);
                case "utf8":
                case "utf-8":
                    return y(this, t, n);
                case "ascii":
                    return function(e, t, n) { var r = "";
                        n = Math.min(e.length, n); for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]); return r }(this, t, n);
                case "latin1":
                case "binary":
                    return function(e, t, n) { var r = "";
                        n = Math.min(e.length, n); for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]); return r }(this, t, n);
                case "base64":
                    return r = this, a = n, 0 === (i = t) && a === r.length ? s.fromByteArray(r) : s.fromByteArray(r.slice(i, a));
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return function(e, t, n) { for (var r = e.slice(t, n), i = "", a = 0; a < r.length; a += 2) i += String.fromCharCode(r[a] + 256 * r[a + 1]); return i }(this, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + e);
                    e = (e + "").toLowerCase(), o = !0 } }

        function g(e, t, n) { var r = e[t];
            e[t] = e[n], e[n] = r }

        function _(e, t, n, r, i) { if (0 === e.length) return -1; if ("string" == typeof n ? (r = n, n = 0) : 2147483647 < n ? n = 2147483647 : n < -2147483648 && (n = -2147483648), O(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) { if (i) return -1;
                n = e.length - 1 } else if (n < 0) { if (!i) return -1;
                n = 0 } if ("string" == typeof t && (t = f.from(t, r)), f.isBuffer(t)) return 0 === t.length ? -1 : E(e, t, n, r, i); if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : E(e, [t], n, r, i); throw new TypeError("val must be string, number or Buffer") }

        function E(e, t, n, r, i) { var a = 1,
                o = e.length,
                s = t.length; if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) { if (e.length < 2 || t.length < 2) return -1;
                o /= a = 2, s /= 2, n /= 2 }

            function u(e, t) { return 1 === a ? e[t] : e.readUInt16BE(t * a) } if (i)
                for (var l = -1, d = n; d < o; d++)
                    if (u(e, d) === u(t, -1 === l ? 0 : d - l)) { if (-1 === l && (l = d), d - l + 1 === s) return l * a } else -1 !== l && (d -= d - l), l = -1;
            else
                for (o < n + s && (n = o - s), d = n; 0 <= d; d--) { for (var f = !0, c = 0; c < s; c++)
                        if (u(e, d + c) !== u(t, c)) { f = !1; break }
                    if (f) return d }
            return -1 }

        function m(e, t, n, r) { return C(function(e) { for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n)); return t }(t), e, n, r) }

        function v(e, t, n, r) { return C(function(e, t) { for (var n, r, i, a = [], o = 0; o < e.length && !((t -= 2) < 0); ++o) n = e.charCodeAt(o), r = n >> 8, i = n % 256, a.push(i), a.push(r); return a }(t, e.length - n), e, n, r) }

        function y(e, t, n) { n = Math.min(e.length, n); for (var r = [], i = t; i < n;) { var a, o, s, u, l = e[i],
                    d = null,
                    f = 239 < l ? 4 : 223 < l ? 3 : 191 < l ? 2 : 1; if (i + f <= n) switch (f) {
                    case 1:
                        l < 128 && (d = l); break;
                    case 2:
                        128 == (192 & (a = e[i + 1])) && 127 < (u = (31 & l) << 6 | 63 & a) && (d = u); break;
                    case 3:
                        a = e[i + 1], o = e[i + 2], 128 == (192 & a) && 128 == (192 & o) && 2047 < (u = (15 & l) << 12 | (63 & a) << 6 | 63 & o) && (u < 55296 || 57343 < u) && (d = u); break;
                    case 4:
                        a = e[i + 1], o = e[i + 2], s = e[i + 3], 128 == (192 & a) && 128 == (192 & o) && 128 == (192 & s) && 65535 < (u = (15 & l) << 18 | (63 & a) << 12 | (63 & o) << 6 | 63 & s) && u < 1114112 && (d = u) }
                null === d ? (d = 65533, f = 1) : 65535 < d && (d -= 65536, r.push(d >>> 10 & 1023 | 55296), d = 56320 | 1023 & d), r.push(d), i += f } return function(e) { var t = e.length; if (t <= T) return String.fromCharCode.apply(String, e); var n = "",
                    r = 0; for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T)); return n }(r) }
        n.kMaxLength = r, (f.TYPED_ARRAY_SUPPORT = function() { try { var e = new Uint8Array(1); return e.__proto__ = { __proto__: Uint8Array.prototype, foo: function() { return 42 } }, 42 === e.foo() } catch (e) { return !1 } }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(f.prototype, "parent", { enumerable: !0, get: function() { if (f.isBuffer(this)) return this.buffer } }), Object.defineProperty(f.prototype, "offset", { enumerable: !0, get: function() { if (f.isBuffer(this)) return this.byteOffset } }), "undefined" != typeof Symbol && null != Symbol.species && f[Symbol.species] === f && Object.defineProperty(f, Symbol.species, { value: null, configurable: !0, enumerable: !1, writable: !1 }), f.poolSize = 8192, f.from = i, f.prototype.__proto__ = Uint8Array.prototype, f.__proto__ = Uint8Array, f.alloc = function(e, t, n) { return i = t, a = n, u(r = e), r <= 0 || void 0 === i ? o(r) : "string" == typeof a ? o(r).fill(i, a) : o(r).fill(i); var r, i, a }, f.allocUnsafe = l, f.allocUnsafeSlow = l, f.isBuffer = function(e) { return null != e && !0 === e._isBuffer && e !== f.prototype }, f.compare = function(e, t) { if (w(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), w(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)), !f.isBuffer(e) || !f.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'); if (e === t) return 0; for (var n = e.length, r = t.length, i = 0, a = Math.min(n, r); i < a; ++i)
                if (e[i] !== t[i]) { n = e[i], r = t[i]; break }
            return n < r ? -1 : r < n ? 1 : 0 }, f.isEncoding = function(e) { switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1 } }, f.concat = function(e, t) { if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers'); if (0 === e.length) return f.alloc(0); if (void 0 === t)
                for (i = t = 0; i < e.length; ++i) t += e[i].length; for (var n = f.allocUnsafe(t), r = 0, i = 0; i < e.length; ++i) { var a = e[i]; if (w(a, Uint8Array) && (a = f.from(a)), !f.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(n, r), r += a.length } return n }, f.byteLength = h, f.prototype._isBuffer = !0, f.prototype.swap16 = function() { var e = this.length; if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits"); for (var t = 0; t < e; t += 2) g(this, t, t + 1); return this }, f.prototype.swap32 = function() { var e = this.length; if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits"); for (var t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2); return this }, f.prototype.swap64 = function() { var e = this.length; if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits"); for (var t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4); return this }, f.prototype.toLocaleString = f.prototype.toString = function() { var e = this.length; return 0 === e ? "" : 0 === arguments.length ? y(this, 0, e) : p.apply(this, arguments) }, f.prototype.equals = function(e) { if (!f.isBuffer(e)) throw new TypeError("Argument must be a Buffer"); return this === e || 0 === f.compare(this, e) }, f.prototype.inspect = function() { var e = "",
                t = n.INSPECT_MAX_BYTES,
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(); return this.length > t && (e += " ... "), "<Buffer " + e + ">" }, f.prototype.compare = function(e, t, n, r, i) { if (w(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)), !f.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e); if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index"); if (i <= r && n <= t) return 0; if (i <= r) return -1; if (n <= t) return 1; if (this === e) return 0; for (var a = (i >>>= 0) - (r >>>= 0), o = (n >>>= 0) - (t >>>= 0), s = Math.min(a, o), u = this.slice(r, i), l = e.slice(t, n), d = 0; d < s; ++d)
                if (u[d] !== l[d]) { a = u[d], o = l[d]; break }
            return a < o ? -1 : o < a ? 1 : 0 }, f.prototype.includes = function(e, t, n) { return -1 !== this.indexOf(e, t, n) }, f.prototype.indexOf = function(e, t, n) { return _(this, e, t, n, !0) }, f.prototype.lastIndexOf = function(e, t, n) { return _(this, e, t, n, !1) }, f.prototype.write = function(e, t, n, r) { if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
            else { if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0) } var i = this.length - t; if ((void 0 === n || i < n) && (n = i), 0 < e.length && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r = r || "utf8"; for (var a, o, s, u, l, d, f = !1;;) switch (r) {
                case "hex":
                    return function(e, t, n, r) { n = Number(n) || 0; var i = e.length - n;
                        (!r || i < (r = Number(r))) && (r = i); var a = t.length;
                        a / 2 < r && (r = a / 2); for (var o = 0; o < r; ++o) { var s = parseInt(t.substr(2 * o, 2), 16); if (O(s)) return o;
                            e[n + o] = s } return o }(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return l = t, d = n, C(M(e, (u = this).length - l), u, l, d);
                case "ascii":
                    return m(this, e, t, n);
                case "latin1":
                case "binary":
                    return m(this, e, t, n);
                case "base64":
                    return a = this, o = t, s = n, C(N(e), a, o, s);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return v(this, e, t, n);
                default:
                    if (f) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), f = !0 } }, f.prototype.toJSON = function() { return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) } }; var T = 4096;

        function S(e, t, n) { if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint"); if (n < e + t) throw new RangeError("Trying to access beyond buffer length") }

        function A(e, t, n, r, i, a) { if (!f.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance'); if (i < t || t < a) throw new RangeError('"value" argument is out of bounds'); if (n + r > e.length) throw new RangeError("Index out of range") }

        function I(e, t, n, r) { if (n + r > e.length) throw new RangeError("Index out of range"); if (n < 0) throw new RangeError("Index out of range") }

        function R(e, t, n, r, i) { return t = +t, n >>>= 0, i || I(e, 0, n, 4), a.write(e, t, n, r, 23, 4), n + 4 }

        function b(e, t, n, r, i) { return t = +t, n >>>= 0, i || I(e, 0, n, 8), a.write(e, t, n, r, 52, 8), n + 8 }
        f.prototype.slice = function(e, t) { var n = this.length;
            (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : n < e && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : n < t && (t = n), t < e && (t = e); var r = this.subarray(e, t); return r.__proto__ = f.prototype, r }, f.prototype.readUIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || S(e, t, this.length); for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i; return r }, f.prototype.readUIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || S(e, t, this.length); for (var r = this[e + --t], i = 1; 0 < t && (i *= 256);) r += this[e + --t] * i; return r }, f.prototype.readUInt8 = function(e, t) { return e >>>= 0, t || S(e, 1, this.length), this[e] }, f.prototype.readUInt16LE = function(e, t) { return e >>>= 0, t || S(e, 2, this.length), this[e] | this[e + 1] << 8 }, f.prototype.readUInt16BE = function(e, t) { return e >>>= 0, t || S(e, 2, this.length), this[e] << 8 | this[e + 1] }, f.prototype.readUInt32LE = function(e, t) { return e >>>= 0, t || S(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3] }, f.prototype.readUInt32BE = function(e, t) { return e >>>= 0, t || S(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]) }, f.prototype.readIntLE = function(e, t, n) { e >>>= 0, t >>>= 0, n || S(e, t, this.length); for (var r = this[e], i = 1, a = 0; ++a < t && (i *= 256);) r += this[e + a] * i; return (i *= 128) <= r && (r -= Math.pow(2, 8 * t)), r }, f.prototype.readIntBE = function(e, t, n) { e >>>= 0, t >>>= 0, n || S(e, t, this.length); for (var r = t, i = 1, a = this[e + --r]; 0 < r && (i *= 256);) a += this[e + --r] * i; return (i *= 128) <= a && (a -= Math.pow(2, 8 * t)), a }, f.prototype.readInt8 = function(e, t) { return e >>>= 0, t || S(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e] }, f.prototype.readInt16LE = function(e, t) { e >>>= 0, t || S(e, 2, this.length); var n = this[e] | this[e + 1] << 8; return 32768 & n ? 4294901760 | n : n }, f.prototype.readInt16BE = function(e, t) { e >>>= 0, t || S(e, 2, this.length); var n = this[e + 1] | this[e] << 8; return 32768 & n ? 4294901760 | n : n }, f.prototype.readInt32LE = function(e, t) { return e >>>= 0, t || S(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24 }, f.prototype.readInt32BE = function(e, t) { return e >>>= 0, t || S(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3] }, f.prototype.readFloatLE = function(e, t) { return e >>>= 0, t || S(e, 4, this.length), a.read(this, e, !0, 23, 4) }, f.prototype.readFloatBE = function(e, t) { return e >>>= 0, t || S(e, 4, this.length), a.read(this, e, !1, 23, 4) }, f.prototype.readDoubleLE = function(e, t) { return e >>>= 0, t || S(e, 8, this.length), a.read(this, e, !0, 52, 8) }, f.prototype.readDoubleBE = function(e, t) { return e >>>= 0, t || S(e, 8, this.length), a.read(this, e, !1, 52, 8) }, f.prototype.writeUIntLE = function(e, t, n, r) { e = +e, t >>>= 0, n >>>= 0, r || A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var i = 1,
                a = 0; for (this[t] = 255 & e; ++a < n && (i *= 256);) this[t + a] = e / i & 255; return t + n }, f.prototype.writeUIntBE = function(e, t, n, r) { e = +e, t >>>= 0, n >>>= 0, r || A(this, e, t, n, Math.pow(2, 8 * n) - 1, 0); var i = n - 1,
                a = 1; for (this[t + i] = 255 & e; 0 <= --i && (a *= 256);) this[t + i] = e / a & 255; return t + n }, f.prototype.writeUInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1 }, f.prototype.writeUInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, f.prototype.writeUInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, f.prototype.writeUInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4 }, f.prototype.writeUInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, f.prototype.writeIntLE = function(e, t, n, r) { var i;
            e = +e, t >>>= 0, r || A(this, e, t, n, (i = Math.pow(2, 8 * n - 1)) - 1, -i); var a = 0,
                o = 1,
                s = 0; for (this[t] = 255 & e; ++a < n && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a - 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255; return t + n }, f.prototype.writeIntBE = function(e, t, n, r) { var i;
            e = +e, t >>>= 0, r || A(this, e, t, n, (i = Math.pow(2, 8 * n - 1)) - 1, -i); var a = n - 1,
                o = 1,
                s = 0; for (this[t + a] = 255 & e; 0 <= --a && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + a + 1] && (s = 1), this[t + a] = (e / o >> 0) - s & 255; return t + n }, f.prototype.writeInt8 = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1 }, f.prototype.writeInt16LE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2 }, f.prototype.writeInt16BE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2 }, f.prototype.writeInt32LE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4 }, f.prototype.writeInt32BE = function(e, t, n) { return e = +e, t >>>= 0, n || A(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4 }, f.prototype.writeFloatLE = function(e, t, n) { return R(this, e, t, !0, n) }, f.prototype.writeFloatBE = function(e, t, n) { return R(this, e, t, !1, n) }, f.prototype.writeDoubleLE = function(e, t, n) { return b(this, e, t, !0, n) }, f.prototype.writeDoubleBE = function(e, t, n) { return b(this, e, t, !1, n) }, f.prototype.copy = function(e, t, n, r) { if (!f.isBuffer(e)) throw new TypeError("argument should be a Buffer"); if (n = n || 0, r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t = t || 0, 0 < r && r < n && (r = n), r === n) return 0; if (0 === e.length || 0 === this.length) return 0; if (t < 0) throw new RangeError("targetStart out of bounds"); if (n < 0 || n >= this.length) throw new RangeError("Index out of range"); if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n); var i = r - n; if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, n, r);
            else if (this === e && n < t && t < r)
                for (var a = i - 1; 0 <= a; --a) e[a + t] = this[a + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, r), t); return i }, f.prototype.fill = function(e, t, n, r) { if ("string" == typeof e) { if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string"); if ("string" == typeof r && !f.isEncoding(r)) throw new TypeError("Unknown encoding: " + r); var i;
                1 === e.length && (i = e.charCodeAt(0), ("utf8" === r && i < 128 || "latin1" === r) && (e = i)) } else "number" == typeof e && (e &= 255); if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index"); if (n <= t) return this; var a; if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, "number" == typeof(e = e || 0))
                for (a = t; a < n; ++a) this[a] = e;
            else { var o = f.isBuffer(e) ? e : f.from(e, r),
                    s = o.length; if (0 === s) throw new TypeError('The value "' + e + '" is invalid for argument "value"'); for (a = 0; a < n - t; ++a) this[a + t] = o[a % s] } return this }; var D = /[^+/0-9A-Za-z-_]/g;

        function M(e, t) { var n;
            t = t || 1 / 0; for (var r = e.length, i = null, a = [], o = 0; o < r; ++o) { if (55295 < (n = e.charCodeAt(o)) && n < 57344) { if (!i) { if (56319 < n) {-1 < (t -= 3) && a.push(239, 191, 189); continue } if (o + 1 === r) {-1 < (t -= 3) && a.push(239, 191, 189); continue }
                        i = n; continue } if (n < 56320) {-1 < (t -= 3) && a.push(239, 191, 189), i = n; continue }
                    n = 65536 + (i - 55296 << 10 | n - 56320) } else i && -1 < (t -= 3) && a.push(239, 191, 189); if (i = null, n < 128) { if (--t < 0) break;
                    a.push(n) } else if (n < 2048) { if ((t -= 2) < 0) break;
                    a.push(n >> 6 | 192, 63 & n | 128) } else if (n < 65536) { if ((t -= 3) < 0) break;
                    a.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128) } else { if (!(n < 1114112)) throw new Error("Invalid code point"); if ((t -= 4) < 0) break;
                    a.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128) } } return a }

        function N(e) { return s.toByteArray(function(e) { if ((e = (e = e.split("=")[0]).trim().replace(D, "")).length < 2) return ""; for (; e.length % 4 != 0;) e += "="; return e }(e)) }

        function C(e, t, n, r) { for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i]; return i }

        function w(e, t) { return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name }

        function O(e) { return e != e } }, { 13: 13, 6: 6 }], 9: [function(e, t, n) { var i = { parseBuffer: function(e) { return new a(e).parse() }, addBoxProcessor: function(e, t) { "string" == typeof e && "function" == typeof t && (o.prototype._boxProcessors[e] = t) }, createFile: function() { return new a }, createBox: function(e, t, n) { var r = o.create(e); return t && t.append(r, n), r }, createFullBox: function(e, t, n) { var r = i.createBox(e, t, n); return r.version = 0, r.flags = 0, r }, Utils: {} };
        i.Utils.dataViewToString = function(e, t) { var n = t || "utf-8"; if ("undefined" != typeof TextDecoder) return new TextDecoder(n).decode(e); var r = [],
                i = 0; if ("utf-8" === n)
                for (; i < e.byteLength;) { var a = e.getUint8(i++);
                    a < 128 || (a < 224 ? a = (31 & a) << 6 : (a < 240 ? a = (15 & a) << 12 : (a = (7 & a) << 18, a |= (63 & e.getUint8(i++)) << 12), a |= (63 & e.getUint8(i++)) << 6), a |= 63 & e.getUint8(i++)), r.push(String.fromCharCode(a)) } else
                    for (; i < e.byteLength;) r.push(String.fromCharCode(e.getUint8(i++))); return r.join("") }, i.Utils.utf8ToByteArray = function(e) { var t, n; if ("undefined" != typeof TextEncoder) t = (new TextEncoder).encode(e);
            else
                for (t = [], n = 0; n < e.length; ++n) { var r = e.charCodeAt(n);
                    r < 128 ? t.push(r) : (r < 2048 ? t.push(192 | r >> 6) : (r < 65536 ? t.push(224 | r >> 12) : (t.push(240 | r >> 18), t.push(128 | 63 & r >> 12)), t.push(128 | 63 & r >> 6)), t.push(128 | 63 & r)) }
            return t }, i.Utils.appendBox = function(e, t, n) { if (t._offset = e._cursor.offset, t._root = e._root ? e._root : e, t._raw = e._raw, t._parent = e, -1 !== n)
                if (null != n) { var r, i = -1; if ("number" == typeof n) i = n;
                    else { if ("string" == typeof n) r = n;
                        else { if ("object" != typeof n || !n.type) return void e.boxes.push(t);
                            r = n.type } for (var a = 0; a < e.boxes.length; a++)
                            if (r === e.boxes[a].type) { i = a + 1; break } }
                    e.boxes.splice(i, 0, t) } else e.boxes.push(t) }, void 0 !== n && (n.parseBuffer = i.parseBuffer, n.addBoxProcessor = i.addBoxProcessor, n.createFile = i.createFile, n.createBox = i.createBox, n.createFullBox = i.createFullBox, n.Utils = i.Utils), i.Cursor = function(e) { this.offset = void 0 === e ? 0 : e }; var a = function(e) { this._cursor = new i.Cursor, this.boxes = [], e && (this._raw = new DataView(e)) };
        a.prototype.fetch = function(e) { var t = this.fetchAll(e, !0); return t.length ? t[0] : null }, a.prototype.fetchAll = function(e, t) { var n = []; return a._sweep.call(this, e, n, t), n }, a.prototype.parse = function() { for (this._cursor.offset = 0, this.boxes = []; this._cursor.offset < this._raw.byteLength;) { var e = o.parse(this); if (void 0 === e.type) break;
                this.boxes.push(e) } return this }, a._sweep = function(e, t, n) { for (var r in this.type && this.type == e && t.push(this), this.boxes) { if (t.length && n) return;
                a._sweep.call(this.boxes[r], e, t, n) } }, a.prototype.write = function() { for (var e = 0, t = 0; t < this.boxes.length; t++) e += this.boxes[t].getLength(!1); var n = new Uint8Array(e); for (this._rawo = new DataView(n.buffer), this.bytes = n, t = this._cursor.offset = 0; t < this.boxes.length; t++) this.boxes[t].write(); return n.buffer }, a.prototype.append = function(e, t) { i.Utils.appendBox(this, e, t) }; var o = function() { this._cursor = new i.Cursor };
        o.parse = function(e) { var t = new o; return t._offset = e._cursor.offset, t._root = e._root ? e._root : e, t._raw = e._raw, t._parent = e, t._parseBox(), e._cursor.offset = t._raw.byteOffset + t._raw.byteLength, t }, o.create = function(e) { var t = new o; return t.type = e, t.boxes = [], t }, o.prototype._boxContainers = ["dinf", "edts", "mdia", "meco", "mfra", "minf", "moof", "moov", "mvex", "stbl", "strk", "traf", "trak", "tref", "udta", "vttc", "sinf", "schi", "encv", "enca"], o.prototype._boxProcessors = {}, o.prototype._procField = function(e, t, n) { this._parsing ? this[e] = this._readField(t, n) : this._writeField(t, n, this[e]) }, o.prototype._procFieldArray = function(e, t, n, r) { var i; if (this._parsing)
                for (this[e] = [], i = 0; i < t; i++) this[e][i] = this._readField(n, r);
            else
                for (i = 0; i < this[e].length; i++) this._writeField(n, r, this[e][i]) }, o.prototype._procFullBox = function() { this._procField("version", "uint", 8), this._procField("flags", "uint", 24) }, o.prototype._procEntries = function(e, t, n) { var r; if (this._parsing)
                for (this[e] = [], r = 0; r < t; r++) this[e].push({}), n.call(this, this[e][r]);
            else
                for (r = 0; r < t; r++) n.call(this, this[e][r]) }, o.prototype._procSubEntries = function(e, t, n, r) { var i; if (this._parsing)
                for (e[t] = [], i = 0; i < n; i++) e[t].push({}), r.call(this, e[t][i]);
            else
                for (i = 0; i < n; i++) r.call(this, e[t][i]) }, o.prototype._procEntryField = function(e, t, n, r) { this._parsing ? e[t] = this._readField(n, r) : this._writeField(n, r, e[t]) }, o.prototype._procSubBoxes = function(e, t) { var n; if (this._parsing)
                for (this[e] = [], n = 0; n < t; n++) this[e].push(o.parse(this));
            else
                for (n = 0; n < t; n++) this._rawo ? this[e][n].write() : this.size += this[e][n].getLength() }, o.prototype._readField = function(e, t) { switch (e) {
                case "uint":
                    return this._readUint(t);
                case "int":
                    return this._readInt(t);
                case "template":
                    return this._readTemplate(t);
                case "string":
                    return -1 === t ? this._readTerminatedString() : this._readString(t);
                case "data":
                    return this._readData(t);
                case "utf8":
                    return this._readUTF8String();
                default:
                    return -1 } }, o.prototype._readInt = function(e) { var t = null,
                n = this._cursor.offset - this._raw.byteOffset; switch (e) {
                case 8:
                    t = this._raw.getInt8(n); break;
                case 16:
                    t = this._raw.getInt16(n); break;
                case 32:
                    t = this._raw.getInt32(n); break;
                case 64:
                    var r = this._raw.getInt32(n),
                        i = this._raw.getInt32(4 + n),
                        t = r * Math.pow(2, 32) + i } return this._cursor.offset += e >> 3, t }, o.prototype._readUint = function(e) { var t, n, r = null,
                i = this._cursor.offset - this._raw.byteOffset; switch (e) {
                case 8:
                    r = this._raw.getUint8(i); break;
                case 16:
                    r = this._raw.getUint16(i); break;
                case 24:
                    r = ((t = this._raw.getUint16(i)) << 8) + (n = this._raw.getUint8(2 + i)); break;
                case 32:
                    r = this._raw.getUint32(i); break;
                case 64:
                    t = this._raw.getUint32(i), n = this._raw.getUint32(4 + i), r = t * Math.pow(2, 32) + n } return this._cursor.offset += e >> 3, r }, o.prototype._readString = function(e) { for (var t = "", n = 0; n < e; n++) { var r = this._readUint(8);
                t += String.fromCharCode(r) } return t }, o.prototype._readTemplate = function(e) { return this._readUint(e / 2) + this._readUint(e / 2) / Math.pow(2, e / 2) }, o.prototype._readTerminatedString = function() { for (var e = ""; this._cursor.offset - this._offset < this._raw.byteLength;) { var t = this._readUint(8); if (0 === t) break;
                e += String.fromCharCode(t) } return e }, o.prototype._readData = function(e) { var t = 0 < e ? e : this._raw.byteLength - (this._cursor.offset - this._offset); if (0 < t) { var n = new Uint8Array(this._raw.buffer, this._cursor.offset, t); return this._cursor.offset += t, n } return null }, o.prototype._readUTF8String = function() { var e = this._raw.byteLength - (this._cursor.offset - this._offset),
                t = null; return 0 < e && (t = new DataView(this._raw.buffer, this._cursor.offset, e), this._cursor.offset += e), t ? i.Utils.dataViewToString(t) : t }, o.prototype._parseBox = function() { if (this._parsing = !0, this._cursor.offset = this._offset, this._offset + 8 > this._raw.buffer.byteLength) this._root._incomplete = !0;
            else { switch (this._procField("size", "uint", 32), this._procField("type", "string", 4), 1 === this.size && this._procField("largesize", "uint", 64), "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8), this.size) {
                    case 0:
                        this._raw = new DataView(this._raw.buffer, this._offset, this._raw.byteLength - this._cursor.offset + 8); break;
                    case 1:
                        this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.largesize); break;
                    default:
                        this._offset + this.size > this._raw.buffer.byteLength ? (this._incomplete = !0, this._root._incomplete = !0) : this._raw = new DataView(this._raw.buffer, this._offset, this.size) }
                this._incomplete || (this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type) ? this._parseContainerBox() : this._data = this._readData()) } }, o.prototype._parseFullBox = function() { this.version = this._readUint(8), this.flags = this._readUint(24) }, o.prototype._parseContainerBox = function() { for (this.boxes = []; this._cursor.offset - this._raw.byteOffset < this._raw.byteLength;) this.boxes.push(o.parse(this)) }, o.prototype.append = function(e, t) { i.Utils.appendBox(this, e, t) }, o.prototype.getLength = function() { if (this._parsing = !1, this._rawo = null, this.size = 0, this._procField("size", "uint", 32), this._procField("type", "string", 4), 1 === this.size && this._procField("largesize", "uint", 64), "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type))
                for (var e = 0; e < this.boxes.length; e++) this.size += this.boxes[e].getLength(); return this._data && this._writeData(this._data), this.size }, o.prototype.write = function() { switch (this._parsing = !1, this._cursor.offset = this._parent._cursor.offset, this.size) {
                case 0:
                    this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.parent._rawo.byteLength - this._cursor.offset); break;
                case 1:
                    this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.largesize); break;
                default:
                    this._rawo = new DataView(this._parent._rawo.buffer, this._cursor.offset, this.size) } if (this._procField("size", "uint", 32), this._procField("type", "string", 4), 1 === this.size && this._procField("largesize", "uint", 64), "uuid" === this.type && this._procFieldArray("usertype", 16, "uint", 8), this._boxProcessors[this.type] && this._boxProcessors[this.type].call(this), -1 !== this._boxContainers.indexOf(this.type))
                for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(); return this._data && this._writeData(this._data), this._parent._cursor.offset += this.size, this.size }, o.prototype._writeInt = function(e, t) { if (this._rawo) { var n = this._cursor.offset - this._rawo.byteOffset; switch (e) {
                    case 8:
                        this._rawo.setInt8(n, t); break;
                    case 16:
                        this._rawo.setInt16(n, t); break;
                    case 32:
                        this._rawo.setInt32(n, t); break;
                    case 64:
                        var r = Math.floor(t / Math.pow(2, 32)),
                            i = t - r * Math.pow(2, 32);
                        this._rawo.setUint32(n, r), this._rawo.setUint32(4 + n, i) }
                this._cursor.offset += e >> 3 } else this.size += e >> 3 }, o.prototype._writeUint = function(e, t) { if (this._rawo) { var n, r, i = this._cursor.offset - this._rawo.byteOffset; switch (e) {
                    case 8:
                        this._rawo.setUint8(i, t); break;
                    case 16:
                        this._rawo.setUint16(i, t); break;
                    case 24:
                        n = (16776960 & t) >> 8, r = 255 & t, this._rawo.setUint16(i, n), this._rawo.setUint8(2 + i, r); break;
                    case 32:
                        this._rawo.setUint32(i, t); break;
                    case 64:
                        r = t - (n = Math.floor(t / Math.pow(2, 32))) * Math.pow(2, 32), this._rawo.setUint32(i, n), this._rawo.setUint32(4 + i, r) }
                this._cursor.offset += e >> 3 } else this.size += e >> 3 }, o.prototype._writeString = function(e, t) { for (var n = 0; n < e; n++) this._writeUint(8, t.charCodeAt(n)) }, o.prototype._writeTerminatedString = function(e) { if (0 !== e.length) { for (var t = 0; t < e.length; t++) this._writeUint(8, e.charCodeAt(t));
                this._writeUint(8, 0) } }, o.prototype._writeTemplate = function(e, t) { var n = Math.floor(t),
                r = (t - n) * Math.pow(2, e / 2);
            this._writeUint(e / 2, n), this._writeUint(e / 2, r) }, o.prototype._writeData = function(e) { if (e)
                if (this._rawo) { if (e instanceof Array) { for (var t = this._cursor.offset - this._rawo.byteOffset, n = 0; n < e.length; n++) this._rawo.setInt8(t + n, e[n]);
                        this._cursor.offset += e.length }
                    e instanceof Uint8Array && (this._root.bytes.set(e, this._cursor.offset), this._cursor.offset += e.length) } else this.size += e.length }, o.prototype._writeUTF8String = function(e) { var t = i.Utils.utf8ToByteArray(e); if (this._rawo)
                for (var n = new DataView(this._rawo.buffer, this._cursor.offset, t.length), r = 0; r < t.length; r++) n.setUint8(r, t[r]);
            else this.size += t.length }, o.prototype._writeField = function(e, t, n) { switch (e) {
                case "uint":
                    this._writeUint(t, n); break;
                case "int":
                    this._writeInt(t, n); break;
                case "template":
                    this._writeTemplate(t, n); break;
                case "string":
                    -1 == t ? this._writeTerminatedString(n) : this._writeString(t, n); break;
                case "data":
                    this._writeData(n); break;
                case "utf8":
                    this._writeUTF8String(n) } }, o.prototype._boxProcessors.avc1 = o.prototype._boxProcessors.encv = function() { this._procFieldArray("reserved1", 6, "uint", 8), this._procField("data_reference_index", "uint", 16), this._procField("pre_defined1", "uint", 16), this._procField("reserved2", "uint", 16), this._procFieldArray("pre_defined2", 3, "uint", 32), this._procField("width", "uint", 16), this._procField("height", "uint", 16), this._procField("horizresolution", "template", 32), this._procField("vertresolution", "template", 32), this._procField("reserved3", "uint", 32), this._procField("frame_count", "uint", 16), this._procFieldArray("compressorname", 32, "uint", 8), this._procField("depth", "uint", 16), this._procField("pre_defined3", "int", 16), this._procField("config", "data", -1) }, o.prototype._boxProcessors.dref = function() { this._procFullBox(), this._procField("entry_count", "uint", 32), this._procSubBoxes("entries", this.entry_count) }, o.prototype._boxProcessors.elst = function() { this._procFullBox(), this._procField("entry_count", "uint", 32), this._procEntries("entries", this.entry_count, function(e) { this._procEntryField(e, "segment_duration", "uint", 1 === this.version ? 64 : 32), this._procEntryField(e, "media_time", "int", 1 === this.version ? 64 : 32), this._procEntryField(e, "media_rate_integer", "int", 16), this._procEntryField(e, "media_rate_fraction", "int", 16) }) }, o.prototype._boxProcessors.emsg = function() { this._procFullBox(), 1 == this.version ? (this._procField("timescale", "uint", 32), this._procField("presentation_time", "uint", 64), this._procField("event_duration", "uint", 32), this._procField("id", "uint", 32), this._procField("scheme_id_uri", "string", -1), this._procField("value", "string", -1)) : (this._procField("scheme_id_uri", "string", -1), this._procField("value", "string", -1), this._procField("timescale", "uint", 32), this._procField("presentation_time_delta", "uint", 32), this._procField("event_duration", "uint", 32), this._procField("id", "uint", 32)), this._procField("message_data", "data", -1) }, o.prototype._boxProcessors.free = o.prototype._boxProcessors.skip = function() { this._procField("data", "data", -1) }, o.prototype._boxProcessors.frma = function() { this._procField("data_format", "uint", 32) }, o.prototype._boxProcessors.ftyp = o.prototype._boxProcessors.styp = function() { this._procField("major_brand", "string", 4), this._procField("minor_version", "uint", 32); var e = -1;
            this._parsing && (e = (this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)) / 4), this._procFieldArray("compatible_brands", e, "string", 4) }, o.prototype._boxProcessors.hdlr = function() { this._procFullBox(), this._procField("pre_defined", "uint", 32), this._procField("handler_type", "string", 4), this._procFieldArray("reserved", 3, "uint", 32), this._procField("name", "string", -1) }, o.prototype._boxProcessors.mdat = function() { this._procField("data", "data", -1) }, o.prototype._boxProcessors.mdhd = function() { this._procFullBox(), this._procField("creation_time", "uint", 1 == this.version ? 64 : 32), this._procField("modification_time", "uint", 1 == this.version ? 64 : 32), this._procField("timescale", "uint", 32), this._procField("duration", "uint", 1 == this.version ? 64 : 32), this._parsing || "string" != typeof this.language || (this.language = this.language.charCodeAt(0) - 96 << 10 | this.language.charCodeAt(1) - 96 << 5 | this.language.charCodeAt(2) - 96), this._procField("language", "uint", 16), this._parsing && (this.language = String.fromCharCode(96 + (this.language >> 10 & 31), 96 + (this.language >> 5 & 31), 96 + (31 & this.language))), this._procField("pre_defined", "uint", 16) }, o.prototype._boxProcessors.mehd = function() { this._procFullBox(), this._procField("fragment_duration", "uint", 1 == this.version ? 64 : 32) }, o.prototype._boxProcessors.mfhd = function() { this._procFullBox(), this._procField("sequence_number", "uint", 32) }, o.prototype._boxProcessors.mfro = function() { this._procFullBox(), this._procField("mfra_size", "uint", 32) }, o.prototype._boxProcessors.mp4a = o.prototype._boxProcessors.enca = function() { this._procFieldArray("reserved1", 6, "uint", 8), this._procField("data_reference_index", "uint", 16), this._procFieldArray("reserved2", 2, "uint", 32), this._procField("channelcount", "uint", 16), this._procField("samplesize", "uint", 16), this._procField("pre_defined", "uint", 16), this._procField("reserved3", "uint", 16), this._procField("samplerate", "template", 32), this._procField("esds", "data", -1) }, o.prototype._boxProcessors.mvhd = function() { this._procFullBox(), this._procField("creation_time", "uint", 1 == this.version ? 64 : 32), this._procField("modification_time", "uint", 1 == this.version ? 64 : 32), this._procField("timescale", "uint", 32), this._procField("duration", "uint", 1 == this.version ? 64 : 32), this._procField("rate", "template", 32), this._procField("volume", "template", 16), this._procField("reserved1", "uint", 16), this._procFieldArray("reserved2", 2, "uint", 32), this._procFieldArray("matrix", 9, "template", 32), this._procFieldArray("pre_defined", 6, "uint", 32), this._procField("next_track_ID", "uint", 32) }, o.prototype._boxProcessors.payl = function() { this._procField("cue_text", "utf8") }, o.prototype._boxProcessors.pssh = function() { this._procFullBox(), this._procFieldArray("SystemID", 16, "uint", 8), this._procField("DataSize", "uint", 32), this._procFieldArray("Data", this.DataSize, "uint", 8) }, o.prototype._boxProcessors.schm = function() { this._procFullBox(), this._procField("scheme_type", "uint", 32), this._procField("scheme_version", "uint", 32), 1 & this.flags && this._procField("scheme_uri", "string", -1) }, o.prototype._boxProcessors.sdtp = function() { this._procFullBox(); var e = -1;
            this._parsing && (e = this._raw.byteLength - (this._cursor.offset - this._raw.byteOffset)), this._procFieldArray("sample_dependency_table", e, "uint", 8) }, o.prototype._boxProcessors.sidx = function() { this._procFullBox(), this._procField("reference_ID", "uint", 32), this._procField("timescale", "uint", 32), this._procField("earliest_presentation_time", "uint", 1 == this.version ? 64 : 32), this._procField("first_offset", "uint", 1 == this.version ? 64 : 32), this._procField("reserved", "uint", 16), this._procField("reference_count", "uint", 16), this._procEntries("references", this.reference_count, function(e) { this._parsing || (e.reference = (1 & e.reference_type) << 31, e.reference |= 2147483647 & e.referenced_size, e.sap = (1 & e.starts_with_SAP) << 31, e.sap |= (3 & e.SAP_type) << 28, e.sap |= 268435455 & e.SAP_delta_time), this._procEntryField(e, "reference", "uint", 32), this._procEntryField(e, "subsegment_duration", "uint", 32), this._procEntryField(e, "sap", "uint", 32), this._parsing && (e.reference_type = e.reference >> 31 & 1, e.referenced_size = 2147483647 & e.reference, e.starts_with_SAP = e.sap >> 31 & 1, e.SAP_type = e.sap >> 28 & 7, e.SAP_delta_time = 268435455 & e.sap) }) }, o.prototype._boxProcessors.smhd = function() { this._procFullBox(), this._procField("balance", "uint", 16), this._procField("reserved", "uint", 16) }, o.prototype._boxProcessors.ssix = function() { this._procFullBox(), this._procField("subsegment_count", "uint", 32), this._procEntries("subsegments", this.subsegment_count, function(e) { this._procEntryField(e, "ranges_count", "uint", 32), this._procSubEntries(e, "ranges", e.ranges_count, function(e) { this._procEntryField(e, "level", "uint", 8), this._procEntryField(e, "range_size", "uint", 24) }) }) }, o.prototype._boxProcessors.stsd = function() { this._procFullBox(), this._procField("entry_count", "uint", 32), this._procSubBoxes("entries", this.entry_count) }, o.prototype._boxProcessors.subs = function() { this._procFullBox(), this._procField("entry_count", "uint", 32), this._procEntries("entries", this.entry_count, function(e) { this._procEntryField(e, "sample_delta", "uint", 32), this._procEntryField(e, "subsample_count", "uint", 16), this._procSubEntries(e, "subsamples", e.subsample_count, function(e) { this._procEntryField(e, "subsample_size", "uint", 1 === this.version ? 32 : 16), this._procEntryField(e, "subsample_priority", "uint", 8), this._procEntryField(e, "discardable", "uint", 8), this._procEntryField(e, "codec_specific_parameters", "uint", 32) }) }) }, o.prototype._boxProcessors.tenc = function() { this._procFullBox(), this._procField("default_IsEncrypted", "uint", 24), this._procField("default_IV_size", "uint", 8), this._procFieldArray("default_KID", 16, "uint", 8) }, o.prototype._boxProcessors.tfdt = function() { this._procFullBox(), this._procField("baseMediaDecodeTime", "uint", 1 == this.version ? 64 : 32) }, o.prototype._boxProcessors.tfhd = function() { this._procFullBox(), this._procField("track_ID", "uint", 32), 1 & this.flags && this._procField("base_data_offset", "uint", 64), 2 & this.flags && this._procField("sample_description_offset", "uint", 32), 8 & this.flags && this._procField("default_sample_duration", "uint", 32), 16 & this.flags && this._procField("default_sample_size", "uint", 32), 32 & this.flags && this._procField("default_sample_flags", "uint", 32) }, o.prototype._boxProcessors.tfra = function() { this._procFullBox(), this._procField("track_ID", "uint", 32), this._parsing || (this.reserved = 0, this.reserved |= (48 & this.length_size_of_traf_num) << 4, this.reserved |= (12 & this.length_size_of_trun_num) << 2, this.reserved |= 3 & this.length_size_of_sample_num), this._procField("reserved", "uint", 32), this._parsing && (this.length_size_of_traf_num = (48 & this.reserved) >> 4, this.length_size_of_trun_num = (12 & this.reserved) >> 2, this.length_size_of_sample_num = 3 & this.reserved), this._procField("number_of_entry", "uint", 32), this._procEntries("entries", this.number_of_entry, function(e) { this._procEntryField(e, "time", "uint", 1 === this.version ? 64 : 32), this._procEntryField(e, "moof_offset", "uint", 1 === this.version ? 64 : 32), this._procEntryField(e, "traf_number", "uint", 8 * (this.length_size_of_traf_num + 1)), this._procEntryField(e, "trun_number", "uint", 8 * (this.length_size_of_trun_num + 1)), this._procEntryField(e, "sample_number", "uint", 8 * (this.length_size_of_sample_num + 1)) }) }, o.prototype._boxProcessors.tkhd = function() { this._procFullBox(), this._procField("creation_time", "uint", 1 == this.version ? 64 : 32), this._procField("modification_time", "uint", 1 == this.version ? 64 : 32), this._procField("track_ID", "uint", 32), this._procField("reserved1", "uint", 32), this._procField("duration", "uint", 1 == this.version ? 64 : 32), this._procFieldArray("reserved2", 2, "uint", 32), this._procField("layer", "uint", 16), this._procField("alternate_group", "uint", 16), this._procField("volume", "template", 16), this._procField("reserved3", "uint", 16), this._procFieldArray("matrix", 9, "template", 32), this._procField("width", "template", 32), this._procField("height", "template", 32) }, o.prototype._boxProcessors.trex = function() { this._procFullBox(), this._procField("track_ID", "uint", 32), this._procField("default_sample_description_index", "uint", 32), this._procField("default_sample_duration", "uint", 32), this._procField("default_sample_size", "uint", 32), this._procField("default_sample_flags", "uint", 32) }, o.prototype._boxProcessors.trun = function() { this._procFullBox(), this._procField("sample_count", "uint", 32), 1 & this.flags && this._procField("data_offset", "int", 32), 4 & this.flags && this._procField("first_sample_flags", "uint", 32), this._procEntries("samples", this.sample_count, function(e) { 256 & this.flags && this._procEntryField(e, "sample_duration", "uint", 32), 512 & this.flags && this._procEntryField(e, "sample_size", "uint", 32), 1024 & this.flags && this._procEntryField(e, "sample_flags", "uint", 32), 2048 & this.flags && this._procEntryField(e, "sample_composition_time_offset", 1 === this.version ? "int" : "uint", 32) }) }, o.prototype._boxProcessors["url "] = o.prototype._boxProcessors["urn "] = function() { this._procFullBox(), "urn " === this.type && this._procField("name", "string", -1), this._procField("location", "string", -1) }, o.prototype._boxProcessors.vlab = function() { this._procField("source_label", "utf8") }, o.prototype._boxProcessors.vmhd = function() { this._procFullBox(), this._procField("graphicsmode", "uint", 16), this._procFieldArray("opcolor", 3, "uint", 16) }, o.prototype._boxProcessors.vttC = function() { this._procField("config", "utf8") }, o.prototype._boxProcessors.vtte = function() {} }, {}], 10: [function(e, t, n) {
        (function(e) {
            function t(e) { return Object.prototype.toString.call(e) }
            n.isArray = function(e) { return Array.isArray ? Array.isArray(e) : "[object Array]" === t(e) }, n.isBoolean = function(e) { return "boolean" == typeof e }, n.isNull = function(e) { return null === e }, n.isNullOrUndefined = function(e) { return null == e }, n.isNumber = function(e) { return "number" == typeof e }, n.isString = function(e) { return "string" == typeof e }, n.isSymbol = function(e) { return "symbol" == typeof e }, n.isUndefined = function(e) { return void 0 === e }, n.isRegExp = function(e) { return "[object RegExp]" === t(e) }, n.isObject = function(e) { return "object" == typeof e && null !== e }, n.isDate = function(e) { return "[object Date]" === t(e) }, n.isError = function(e) { return "[object Error]" === t(e) || e instanceof Error }, n.isFunction = function(e) { return "function" == typeof e }, n.isPrimitive = function(e) { return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e }, n.isBuffer = e.isBuffer }).call(this, { isBuffer: e(22) }) }, { 22: 22 }], 11: [function(e, t, n) { var u = Object.create || function(e) {
                function t() {} return t.prototype = e, new t },
            o = Object.keys || function(e) { var t = []; for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.push(n); return n },
            a = Function.prototype.bind || function(e) { var t = this; return function() { return t.apply(e, arguments) } };

        function r() { this._events && Object.prototype.hasOwnProperty.call(this, "_events") || (this._events = u(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0 }((t.exports = r).EventEmitter = r).prototype._events = void 0, r.prototype._maxListeners = void 0; var i, s = 10; try { var l = {};
            Object.defineProperty && Object.defineProperty(l, "x", { value: 0 }), i = 0 === l.x } catch (e) { i = !1 }

        function d(e) { return void 0 === e._maxListeners ? r.defaultMaxListeners : e._maxListeners }

        function f(e, t, n, r) { var i, a, o, s; if ("function" != typeof n) throw new TypeError('"listener" argument must be a function'); return (i = e._events) ? (i.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), i = e._events), a = i[t]) : (i = e._events = u(null), e._eventsCount = 0), a ? ("function" == typeof a ? a = i[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), a.warned || (s = d(e)) && 0 < s && a.length > s && (a.warned = !0, (o = new Error("Possible EventEmitter memory leak detected. " + a.length + ' "' + String(t) + '" listeners added. Use emitter.setMaxListeners() to increase limit.')).name = "MaxListenersExceededWarning", o.emitter = e, o.type = t, o.count = a.length, "object" == typeof console && console.warn && console.warn("%s: %s", o.name, o.message))) : (a = i[t] = n, ++e._eventsCount), e }

        function c() { if (!this.fired) switch (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, arguments.length) {
                case 0:
                    return this.listener.call(this.target);
                case 1:
                    return this.listener.call(this.target, arguments[0]);
                case 2:
                    return this.listener.call(this.target, arguments[0], arguments[1]);
                case 3:
                    return this.listener.call(this.target, arguments[0], arguments[1], arguments[2]);
                default:
                    for (var e = new Array(arguments.length), t = 0; t < e.length; ++t) e[t] = arguments[t];
                    this.listener.apply(this.target, e) } }

        function h(e, t, n) { var r = { fired: !1, wrapFn: void 0, target: e, type: t, listener: n },
                i = a.call(c, r); return i.listener = n, r.wrapFn = i }

        function p(e, t, n) { var r = e._events; if (!r) return []; var i = r[t]; return i ? "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) { for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n]; return t }(i) : _(i, i.length) : [] }

        function g(e) { var t = this._events; if (t) { var n = t[e]; if ("function" == typeof n) return 1; if (n) return n.length } return 0 }

        function _(e, t) { for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r]; return n }
        i ? Object.defineProperty(r, "defaultMaxListeners", { enumerable: !0, get: function() { return s }, set: function(e) { if ("number" != typeof e || e < 0 || e != e) throw new TypeError('"defaultMaxListeners" must be a positive number');
                s = e } }) : r.defaultMaxListeners = s, r.prototype.setMaxListeners = function(e) { if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number'); return this._maxListeners = e, this }, r.prototype.getMaxListeners = function() { return d(this) }, r.prototype.emit = function(e, t, n, r) { var i, a, o, s, u = "error" === e,
                l = this._events; if (l) u = u && null == l.error;
            else if (!u) return !1; if (u) { if (1 < arguments.length && (i = t), i instanceof Error) throw i; var d = new Error('Unhandled "error" event. (' + i + ")"); throw d.context = i, d } if (!(a = l[e])) return !1; var f, c = "function" == typeof a; switch (f = arguments.length) {
                case 1:
                    ! function(e, t, n) { if (t) e.call(n);
                        else
                            for (var r = e.length, i = _(e, r), a = 0; a < r; ++a) i[a].call(n) }(a, c, this); break;
                case 2:
                    ! function(e, t, n, r) { if (t) e.call(n, r);
                        else
                            for (var i = e.length, a = _(e, i), o = 0; o < i; ++o) a[o].call(n, r) }(a, c, this, t); break;
                case 3:
                    ! function(e, t, n, r, i) { if (t) e.call(n, r, i);
                        else
                            for (var a = e.length, o = _(e, a), s = 0; s < a; ++s) o[s].call(n, r, i) }(a, c, this, t, n); break;
                case 4:
                    ! function(e, t, n, r, i, a) { if (t) e.call(n, r, i, a);
                        else
                            for (var o = e.length, s = _(e, o), u = 0; u < o; ++u) s[u].call(n, r, i, a) }(a, c, this, t, n, r); break;
                default:
                    for (o = new Array(f - 1), s = 1; s < f; s++) o[s - 1] = arguments[s];! function(e, t, n, r) { if (t) e.apply(n, r);
                        else
                            for (var i = e.length, a = _(e, i), o = 0; o < i; ++o) a[o].apply(n, r) }(a, c, this, o) } return !0 }, r.prototype.on = r.prototype.addListener = function(e, t) { return f(this, e, t, !1) }, r.prototype.prependListener = function(e, t) { return f(this, e, t, !0) }, r.prototype.once = function(e, t) { if ("function" != typeof t) throw new TypeError('"listener" argument must be a function'); return this.on(e, h(this, e, t)), this }, r.prototype.prependOnceListener = function(e, t) { if ("function" != typeof t) throw new TypeError('"listener" argument must be a function'); return this.prependListener(e, h(this, e, t)), this }, r.prototype.removeListener = function(e, t) { var n, r, i, a, o; if ("function" != typeof t) throw new TypeError('"listener" argument must be a function'); if (!(r = this._events)) return this; if (!(n = r[e])) return this; if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = u(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" != typeof n) { for (i = -1, a = n.length - 1; 0 <= a; a--)
                    if (n[a] === t || n[a].listener === t) { o = n[a].listener, i = a; break }
                if (i < 0) return this;
                0 === i ? n.shift() : function(e, t) { for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
                    e.pop() }(n, i), 1 === n.length && (r[e] = n[0]), r.removeListener && this.emit("removeListener", e, o || t) } return this }, r.prototype.removeAllListeners = function(e) { var t, n = this._events; if (!n) return this; if (!n.removeListener) return 0 === arguments.length ? (this._events = u(null), this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = u(null) : delete n[e]), this; if (0 === arguments.length) { for (var r, i = o(n), a = 0; a < i.length; ++a) "removeListener" !== (r = i[a]) && this.removeAllListeners(r); return this.removeAllListeners("removeListener"), this._events = u(null), this._eventsCount = 0, this } if ("function" == typeof(t = n[e])) this.removeListener(e, t);
            else if (t)
                for (a = t.length - 1; 0 <= a; a--) this.removeListener(e, t[a]); return this }, r.prototype.listeners = function(e) { return p(this, e, !0) }, r.prototype.rawListeners = function(e) { return p(this, e, !1) }, r.listenerCount = function(e, t) { return "function" == typeof e.listenerCount ? e.listenerCount(t) : g.call(e, t) }, r.prototype.listenerCount = g, r.prototype.eventNames = function() { return 0 < this._eventsCount ? Reflect.ownKeys(this._events) : [] } }, {}], 12: [function(e, t, n) { "use strict"; var h = Array.isArray,
            p = Object.keys,
            g = Object.prototype.hasOwnProperty;
        t.exports = function e(t, n) { if (t === n) return !0; if (t && n && "object" == typeof t && "object" == typeof n) { var r, i, a = h(t),
                    o = h(n); if (a && o) { if ((f = t.length) != n.length) return !1; for (r = f; 0 != r--;)
                        if (!e(t[r], n[r])) return !1;
                    return !0 } if (a != o) return !1; var s = t instanceof Date,
                    u = n instanceof Date; if (s != u) return !1; if (s && u) return t.getTime() == n.getTime(); var l = t instanceof RegExp,
                    d = n instanceof RegExp; if (l != d) return !1; if (l && d) return t.toString() == n.toString(); var f, c = p(t); if ((f = c.length) !== p(n).length) return !1; for (r = f; 0 != r--;)
                    if (!g.call(n, c[r])) return !1;
                for (r = f; 0 != r--;)
                    if (!e(t[i = c[r]], n[i])) return !1;
                return !0 } return t != t && n != n } }, {}], 13: [function(e, t, n) { n.read = function(e, t, n, r, i) { var a, o, s = 8 * i - r - 1,
                u = (1 << s) - 1,
                l = u >> 1,
                d = -7,
                f = n ? i - 1 : 0,
                c = n ? -1 : 1,
                h = e[t + f]; for (f += c, a = h & (1 << -d) - 1, h >>= -d, d += s; 0 < d; a = 256 * a + e[t + f], f += c, d -= 8); for (o = a & (1 << -d) - 1, a >>= -d, d += r; 0 < d; o = 256 * o + e[t + f], f += c, d -= 8); if (0 === a) a = 1 - l;
            else { if (a === u) return o ? NaN : 1 / 0 * (h ? -1 : 1);
                o += Math.pow(2, r), a -= l } return (h ? -1 : 1) * o * Math.pow(2, a - r) }, n.write = function(e, t, n, r, i, a) { var o, s, u, l = 8 * a - i - 1,
                d = (1 << l) - 1,
                f = d >> 1,
                c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                h = r ? 0 : a - 1,
                p = r ? 1 : -1,
                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0; for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, o = d) : (o = Math.floor(Math.log(t) / Math.LN2), t * (u = Math.pow(2, -o)) < 1 && (o--, u *= 2), 2 <= (t += 1 <= o + f ? c / u : c * Math.pow(2, 1 - f)) * u && (o++, u /= 2), d <= o + f ? (s = 0, o = d) : 1 <= o + f ? (s = (t * u - 1) * Math.pow(2, i), o += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), o = 0)); 8 <= i; e[n + h] = 255 & s, h += p, s /= 256, i -= 8); for (o = o << i | s, l += i; 0 < l; e[n + h] = 255 & o, h += p, o /= 256, l -= 8);
            e[n + h - p] |= 128 * g } }, {}], 14: [function(e, t, n) {
        function d(e, t, n, r) { var i = r && "seq" === r.timeContainer,
                a = 0;
            r && (a = i && n ? n.end : r.begin), t.begin = t.explicit_begin ? t.explicit_begin + a : a; var o = t.begin,
                s = null; for (var u in t.sets) d(e, t.sets[u], s, t), o = "seq" === t.timeContainer ? t.sets[u].end : Math.max(o, t.sets[u].end), s = t.sets[u]; if ("contents" in t)
                for (var l in t.contents) d(e, t.contents[l], s, t), o = "seq" === t.timeContainer ? t.contents[l].end : Math.max(o, t.contents[l].end), s = t.contents[l];
            else o = i ? t.begin : Number.POSITIVE_INFINITY;
            null !== t.explicit_end && null !== t.explicit_dur ? t.end = Math.min(t.begin + t.explicit_dur, a + t.explicit_end) : null === t.explicit_end && null !== t.explicit_dur ? t.end = t.begin + t.explicit_dur : null !== t.explicit_end && null === t.explicit_dur ? t.end = a + t.explicit_end : t.end = o, delete t.explicit_begin, delete t.explicit_dur, delete t.explicit_end, e._registerEvent(t) }

        function y(e) { this.node = e }

        function T() { this.events = [], this.head = null, this.body = null }

        function S() { this.styling = null, this.layout = null }

        function A() { this.styles = {} }

        function I() { this.id = null, this.styleAttrs = null, this.styleRefs = null }

        function R() { this.regions = {} }

        function r(e) { this.kind = e }

        function i(e) { this.id = e }

        function a(e) { this.regionID = e }

        function o(e) { this.styleAttrs = e }

        function s(e) { this.sets = e }

        function u(e) { this.contents = e }

        function l(e, t, n) { this.explicit_begin = e, this.explicit_end = t, this.explicit_dur = n }

        function b() { r.call(this, "body") }

        function D() { r.call(this, "div") }

        function M() { r.call(this, "p") }

        function N() { r.call(this, "span") }

        function f() { r.call(this, "span") }

        function C() { r.call(this, "br") }

        function w() {}

        function O() {}

        function c(e) { return e && "xml:id" in e.attributes && e.attributes["xml:id"].value || null }

        function h(e) { return e && "style" in e.attributes ? e.attributes.style.value.split(" ") : [] }

        function p(e, t) { var n = {}; if (null !== e)
                for (var r in e.attributes) { var i, a = e.attributes[r].uri + " " + e.attributes[r].local,
                        o = B.byQName[a];
                    void 0 !== o && (null !== (i = o.parse(e.attributes[r].value)) ? (n[a] = i, o === B.byName.zIndex && m(t, "zIndex attribute present but not used by IMSC1 since regions do not overlap")) : L(t, "Cannot parse styling attribute " + a + " --\x3e " + e.attributes[r].value)) }
            return n }

        function g(e, t, n) { for (var r in e.attributes)
                if (e.attributes[r].uri === t && e.attributes[r].local === n) return e.attributes[r].value;
            return null }

        function _(e, t, n) { var r, i = null; return null !== (r = /^(\d+(?:\.\d+)?)f$/.exec(n)) ? null !== t && (i = parseFloat(r[1]) / t) : null !== (r = /^(\d+(?:\.\d+)?)t$/.exec(n)) ? null !== e && (i = parseFloat(r[1]) / e) : null !== (r = /^(\d+(?:\.\d+)?)ms$/.exec(n)) ? i = parseFloat(r[1]) / 1e3 : null !== (r = /^(\d+(?:\.\d+)?)s$/.exec(n)) ? i = parseFloat(r[1]) : null !== (r = /^(\d+(?:\.\d+)?)h$/.exec(n)) ? i = 3600 * parseFloat(r[1]) : null !== (r = /^(\d+(?:\.\d+)?)m$/.exec(n)) ? i = 60 * parseFloat(r[1]) : null !== (r = /^(\d{2,}):(\d\d):(\d\d(?:\.\d+)?)$/.exec(n)) ? i = 3600 * parseInt(r[1]) + 60 * parseInt(r[2]) + parseFloat(r[3]) : null !== (r = /^(\d{2,}):(\d\d):(\d\d)\:(\d{2,})$/.exec(n)) && null !== t && (i = 3600 * parseInt(r[1]) + 60 * parseInt(r[2]) + parseInt(r[3]) + (null === r[4] ? 0 : parseInt(r[4]) / t)), i }

        function E(e, t, n, r) { for (var i = t.length - 1; 0 <= i; i--) { var a = t[i];
                a in e.styles ? P(e.styles[a].styleAttrs, n) : L(r, "Non-existant style id referenced") } }

        function P(e, t) { for (var n in e) n in t || (t[n] = e[n]) }

        function m(e, t) { if (e && e.warn && e.warn(t)) throw t }

        function L(e, t) { if (e && e.error && e.error(t)) throw t }

        function x(e, t) { throw e && e.fatal && e.fatal(t), t }

        function v(e, t) { for (var n, r = 0, i = e.length - 1; r <= i;) { var a = e[n = Math.floor((r + i) / 2)]; if (a < t) r = n + 1;
                else { if (!(t < a)) return { found: !0, index: n };
                    i = n - 1 } } return { found: !1, index: r } } var F, U, k, B, G;
        F = void 0 === n ? this.imscDoc = {} : n, U = "undefined" == typeof sax ? e(40) : sax, k = "undefined" == typeof imscNames ? e(18) : imscNames, B = "undefined" == typeof imscStyles ? e(19) : imscStyles, G = "undefined" == typeof imscUtils ? e(20) : imscUtils, F.fromXML = function(e, h, p) { var t = U.parser(!0, { xmlns: !0 }),
                g = [],
                _ = [],
                E = [],
                m = 0,
                v = null;
            t.onclosetag = function(e) { if (g[0] instanceof A)
                    for (var t in g[0].styles) ! function e(t, n, r) { for (; 0 < n.styleRefs.length;) { var i = n.styleRefs.pop();
                            i in t.styles ? (e(t, t.styles[i], r), P(t.styles[i].styleAttrs, n.styleAttrs)) : L(r, "Non-existant style id referenced") } }(g[0], g[0].styles[t], h);
                else if (g[0] instanceof M || g[0] instanceof N) { if (1 < g[0].contents.length) { for (var n = [g[0].contents[0]], r = 1; r < g[0].contents.length; r++) g[0].contents[r] instanceof f && n[n.length - 1] instanceof f ? n[n.length - 1].text += g[0].contents[r].text : n.push(g[0].contents[r]);
                        g[0].contents = n }
                    g[0] instanceof N && 1 === g[0].contents.length && g[0].contents[0] instanceof f && (g[0].text = g[0].contents[0].text, delete g[0].contents) } else g[0] instanceof y && (g[0].node.uri === k.ns_tt && "metadata" === g[0].node.local ? m-- : 0 < m && p && "onCloseTag" in p && p.onCloseTag());
                E.shift(), _.shift(), g.shift() }, t.ontext = function(e) { var t;
                void 0 === g[0] || (g[0] instanceof N || g[0] instanceof M ? ((t = new f).initFromText(v, g[0], e, E[0], h), g[0].contents.push(t)) : g[0] instanceof y && 0 < m && p && "onText" in p && p.onText(e)) }, t.onopentag = function(e) { var t = e.attributes["xml:space"];
                t ? E.unshift(t.value) : 0 === E.length ? E.unshift("default") : E.unshift(E[0]); var n, r, i, a, o, s, u, l, d = e.attributes["xml:lang"]; if (d ? _.unshift(d.value) : 0 === _.length ? _.unshift("") : _.unshift(_[0]), e.uri === k.ns_tt ? "tt" === e.local ? (null !== v && x(h, "Two <tt> elements at (" + this.line + "," + this.column + ")"), (v = new T).initFromNode(e, h), g.unshift(v)) : "head" === e.local ? (g[0] instanceof T || x(h, "Parent of <head> element is not <tt> at (" + this.line + "," + this.column + ")"), null !== v.head && x("Second <head> element at (" + this.line + "," + this.column + ")"), v.head = new S, g.unshift(v.head)) : "styling" === e.local ? (g[0] instanceof S || x(h, "Parent of <styling> element is not <head> at (" + this.line + "," + this.column + ")"), null !== v.head.styling && x("Second <styling> element at (" + this.line + "," + this.column + ")"), v.head.styling = new A, g.unshift(v.head.styling)) : "style" === e.local ? g[0] instanceof A ? ((n = new I).initFromNode(e, h), n.id ? v.head.styling.styles[n.id] = n : L(h, "<style> element missing @id attribute"), g.unshift(n)) : g[0] instanceof w ? ((n = new I).initFromNode(e, h), P(n.styleAttrs, g[0].styleAttrs), g.unshift(n)) : x(h, "Parent of <style> element is not <styling> or <region> at (" + this.line + "," + this.column + ")") : "layout" === e.local ? (g[0] instanceof S || x(h, "Parent of <layout> element is not <head> at " + this.line + "," + this.column + ")"), null !== v.head.layout && x(h, "Second <layout> element at " + this.line + "," + this.column + ")"), v.head.layout = new R, g.unshift(v.head.layout)) : "region" === e.local ? (g[0] instanceof R || x(h, "Parent of <region> element is not <layout> at " + this.line + "," + this.column + ")"), (r = new w).initFromNode(v, e, h), !r.id || r.id in v.head.layout.regions ? L(h, "Ignoring <region> with duplicate or missing @id at " + this.line + "," + this.column + ")") : v.head.layout.regions[r.id] = r, g.unshift(r)) : "body" === e.local ? (g[0] instanceof T || x(h, "Parent of <body> element is not <tt> at " + this.line + "," + this.column + ")"), null !== v.body && x(h, "Second <body> element at " + this.line + "," + this.column + ")"), (i = new b).initFromNode(v, e, h), v.body = i, g.unshift(i)) : "div" === e.local ? (g[0] instanceof D || g[0] instanceof b || x(h, "Parent of <div> element is not <body> or <div> at " + this.line + "," + this.column + ")"), (a = new D).initFromNode(v, g[0], e, h), g[0].contents.push(a), g.unshift(a)) : "p" === e.local ? (g[0] instanceof D || x(h, "Parent of <p> element is not <div> at " + this.line + "," + this.column + ")"), (o = new M).initFromNode(v, g[0], e, h), g[0].contents.push(o), g.unshift(o)) : "span" === e.local ? (g[0] instanceof N || g[0] instanceof M || x(h, "Parent of <span> element is not <span> or <p> at " + this.line + "," + this.column + ")"), (s = new N).initFromNode(v, g[0], e, E[0], h), g[0].contents.push(s), g.unshift(s)) : "br" === e.local ? (g[0] instanceof N || g[0] instanceof M || x(h, "Parent of <br> element is not <span> or <p> at " + this.line + "," + this.column + ")"), (u = new C).initFromNode(v, g[0], e, h), g[0].contents.push(u), g.unshift(u)) : "set" === e.local ? (g[0] instanceof N || g[0] instanceof M || g[0] instanceof D || g[0] instanceof b || g[0] instanceof w || g[0] instanceof C || x(h, "Parent of <set> element is not a content element or a region at " + this.line + "," + this.column + ")"), (l = new O).initFromNode(v, g[0], e, h), g[0].sets.push(l), g.unshift(l)) : g.unshift(new y(e)) : g.unshift(new y(e)), g[0] instanceof y)
                    if (e.uri === k.ns_tt && "metadata" === e.local) m++;
                    else if (0 < m && p && "onOpenTag" in p) { var f = []; for (var c in e.attributes) f[e.attributes[c].uri + " " + e.attributes[c].local] = { uri: e.attributes[c].uri, local: e.attributes[c].local, value: e.attributes[c].value };
                    p.onOpenTag(e.uri, e.local, f) } }, t.write(e).close(), null !== v.head ? delete v.head.styling : v.head = new S, null === v.head.layout && (v.head.layout = new R); var n, r = !1; for (var i in v.head.layout.regions) { r = !0; break } for (var a in r || (n = w.prototype.createDefaultRegion(), v.head.layout.regions[n.id] = n), v.head.layout.regions) d(v, v.head.layout.regions[a], null, null); return v.body && d(v, v.body, null, null), v }, T.prototype.initFromNode = function(e, t) { this.cellResolution = function(e, t) { var n = g(e, k.ns_ttp, "cellResolution"),
                    r = 15,
                    i = 32; { var a;
                    null !== n && (null !== (a = /(\d+) (\d+)/.exec(n)) ? (i = parseInt(a[1]), r = parseInt(a[2])) : m(t, "Malformed cellResolution value (using initial value instead)")) } return { w: i, h: r } }(e, t); var n = function(e, t) { var n, r = g(e, k.ns_ttp, "frameRate"),
                    i = 30; { null !== r && (null !== (n = /(\d+)/.exec(r)) ? i = parseInt(n[1]) : m(t, "Malformed frame rate attribute (using initial value instead)")) } var a = g(e, k.ns_ttp, "frameRateMultiplier"),
                    o = 1; { null !== a && (null !== (n = /(\d+) (\d+)/.exec(a)) ? o = parseInt(n[1]) / parseInt(n[2]) : m(t, "Malformed frame rate multiplier attribute (using initial value instead)")) } var s = o * i,
                    u = 1,
                    l = g(e, k.ns_ttp, "tickRate"); { null === l ? null !== r && (u = s) : null !== (n = /(\d+)/.exec(l)) ? u = parseInt(n[1]) : m(t, "Malformed tick rate attribute (using initial value instead)") } return { effectiveFrameRate: s, tickRate: u } }(e, t);
            this.effectiveFrameRate = n.effectiveFrameRate, this.tickRate = n.tickRate, this.aspectRatio = function(e, t) { var n = g(e, k.ns_ittp, "aspectRatio"),
                    r = null; { var i, a, o;
                    null !== n && (null !== (i = /(\d+) (\d+)/.exec(n)) ? (a = parseInt(i[1]), o = parseInt(i[2]), 0 !== a && 0 !== o ? r = a / o : L(t, "Illegal aspectRatio values (ignoring)")) : L(t, "Malformed aspectRatio attribute (ignoring)")) } return r }(e, t); var r = g(e, k.ns_ttp, "timeBase");
            null !== r && "media" !== r && x(t, "Unsupported time base"); var i = function(e, t) { var n = g(e, k.ns_tts, "extent"); if (null === n) return null; var r = n.split(" "); if (2 !== r.length) return m(t, "Malformed extent (ignoring)"), null; var i = G.parseLength(r[0]),
                    a = G.parseLength(r[1]); return a && i ? { h: a, w: i } : (m(t, "Malformed extent values (ignoring)"), null) }(e, t);
            null === i ? this.pxDimensions = { h: 480, w: 640 } : ("px" === i.h.unit && "px" === i.w.unit || x(t, "Extent on TT must be in px or absent"), this.pxDimensions = { h: i.h.value, w: i.w.value }) }, T.prototype._registerEvent = function(e) { var t, n;
            e.end <= e.begin || ((t = v(this.events, e.begin)).found || this.events.splice(t.index, 0, e.begin), e.end !== Number.POSITIVE_INFINITY && ((n = v(this.events, e.end)).found || this.events.splice(n.index, 0, e.end))) }, T.prototype.getMediaTimeRange = function() { return [this.events[0], this.events[this.events.length - 1]] }, T.prototype.getMediaTimeEvents = function() { return this.events }, I.prototype.initFromNode = function(e, t) { this.id = c(e), this.styleAttrs = p(e, t), this.styleRefs = h(e) }, i.prototype.initFromNode = function(e, t, n, r) { this.id = c(n) }, a.prototype.initFromNode = function(e, t, n, r) { var i;
            this.regionID = (i = n) && "region" in i.attributes ? i.attributes.region.value : "" }, o.prototype.initFromNode = function(e, t, n, r) { this.styleAttrs = p(n, r), null !== e.head && null !== e.head.styling && E(e.head.styling, h(n), this.styleAttrs, r) }, s.prototype.initFromNode = function(e, t, n, r) { this.sets = [] }, u.prototype.initFromNode = function(e, t, n, r) { this.contents = [] }, l.prototype.initFromNode = function(e, t, n, r) { var i, a, o, s = function(e, t, n) { var r = null;
                t && "begin" in t.attributes && null === (r = _(e.tickRate, e.effectiveFrameRate, t.attributes.begin.value)) && m(n, "Malformed begin value " + t.attributes.begin.value + " (using 0)"); var i = null;
                t && "dur" in t.attributes && null === (i = _(e.tickRate, e.effectiveFrameRate, t.attributes.dur.value)) && m(n, "Malformed dur value " + t.attributes.dur.value + " (ignoring)"); var a = null;
                t && "end" in t.attributes && null === (a = _(e.tickRate, e.effectiveFrameRate, t.attributes.end.value)) && m(n, "Malformed end value (ignoring)"); return { explicit_begin: r, explicit_end: a, explicit_dur: i } }(e, n, r);
            this.explicit_begin = s.explicit_begin, this.explicit_end = s.explicit_end, this.explicit_dur = s.explicit_dur, this.timeContainer = (a = r, (o = (i = n) && "timeContainer" in i.attributes ? i.attributes.timeContainer.value : null) && "par" !== o ? "seq" === o ? "seq" : (L(a, "Illegal value of timeContainer (assuming 'par')"), "par") : "par") }, b.prototype.initFromNode = function(e, t, n) { o.prototype.initFromNode.call(this, e, null, t, n), l.prototype.initFromNode.call(this, e, null, t, n), s.prototype.initFromNode.call(this, e, null, t, n), a.prototype.initFromNode.call(this, e, null, t, n), u.prototype.initFromNode.call(this, e, null, t, n) }, D.prototype.initFromNode = function(e, t, n, r) { o.prototype.initFromNode.call(this, e, t, n, r), l.prototype.initFromNode.call(this, e, t, n, r), s.prototype.initFromNode.call(this, e, t, n, r), a.prototype.initFromNode.call(this, e, t, n, r), u.prototype.initFromNode.call(this, e, t, n, r) }, M.prototype.initFromNode = function(e, t, n, r) { o.prototype.initFromNode.call(this, e, t, n, r), l.prototype.initFromNode.call(this, e, t, n, r), s.prototype.initFromNode.call(this, e, t, n, r), a.prototype.initFromNode.call(this, e, t, n, r), u.prototype.initFromNode.call(this, e, t, n, r) }, N.prototype.initFromNode = function(e, t, n, r, i) { o.prototype.initFromNode.call(this, e, t, n, i), l.prototype.initFromNode.call(this, e, t, n, i), s.prototype.initFromNode.call(this, e, t, n, i), a.prototype.initFromNode.call(this, e, t, n, i), u.prototype.initFromNode.call(this, e, t, n, i), this.space = r }, f.prototype.initFromText = function(e, t, n, r, i) { l.prototype.initFromNode.call(this, e, t, null, i), this.text = n, this.space = r }, C.prototype.initFromNode = function(e, t, n, r) { a.prototype.initFromNode.call(this, e, t, n, r), l.prototype.initFromNode.call(this, e, t, n, r) }, w.prototype.createDefaultRegion = function() { var e = new w; return i.call(e, ""), o.call(e, {}), s.call(e, []), l.call(e, 0, Number.POSITIVE_INFINITY, null), e }, w.prototype.initFromNode = function(e, t, n) { i.prototype.initFromNode.call(this, e, null, t, n), o.prototype.initFromNode.call(this, e, null, t, n), l.prototype.initFromNode.call(this, e, null, t, n), s.prototype.initFromNode.call(this, e, null, t, n), null !== e.head && null !== e.head.styling && E(e.head.styling, h(t), this.styleAttrs, n) }, O.prototype.initFromNode = function(e, t, n, r) { l.prototype.initFromNode.call(this, e, t, n, r); var i = p(n, r); for (var a in this.qname = null, this.value = null, i) { if (this.qname) { L(r, "More than one style specified on set"); break }
                this.qname = a, this.value = i[a] } } }, { 18: 18, 19: 19, 20: 20, 40: 40 }], 15: [function(e, t, n) {! function(e, R) {
            function b(e, t, n) { for (var r in e) { var i = e[r].elements.length,
                        a = e[r].elements[e[r].start_elem],
                        o = e[r].elements[e[r].end_elem],
                        s = Math.ceil(t) + "px",
                        u = "-" + Math.ceil(t) + "px";
                    0 !== i && ("lr" === n.ipd ? (a.node.style.borderLeftColor = a.bgcolor || "#00000000", a.node.style.borderLeftStyle = "solid", a.node.style.borderLeftWidth = s, a.node.style.marginLeft = u) : "rl" === n.ipd ? (a.node.style.borderRightColor = a.bgcolor || "#00000000", a.node.style.borderRightStyle = "solid", a.node.style.borderRightWidth = s, a.node.style.marginRight = u) : "tb" === n.ipd && (a.node.style.borderTopColor = a.bgcolor || "#00000000", a.node.style.borderTopStyle = "solid", a.node.style.borderTopWidth = s, a.node.style.marginTop = u), "lr" === n.ipd ? (o.node.style.borderRightColor = o.bgcolor || "#00000000", o.node.style.borderRightStyle = "solid", o.node.style.borderRightWidth = s, o.node.style.marginRight = u) : "rl" === n.ipd ? (o.node.style.borderLeftColor = o.bgcolor || "#00000000", o.node.style.borderLeftStyle = "solid", o.node.style.borderLeftWidth = s, o.node.style.marginLeft = u) : "tb" === n.ipd && (o.node.style.borderBottomColor = o.bgcolor || "#00000000", o.node.style.borderBottomStyle = "solid", o.node.style.borderBottomWidth = s, o.node.style.marginBottom = u)) } }

            function D(e) { for (var t = 0; t < e.length - 1; t++) { var n, r, i = e[t].elements.length;
                    0 !== i && !1 === e[t].br && (n = document.createElement("br"), (r = e[t].elements[i - 1].node).parentElement.insertBefore(n, r.nextSibling)) } }

            function M(e, t, n, r) { for (var i = Math.sign(n - t), a = 0; a <= e.length; a++) { var o, s, u = 0 === a ? t : a === e.length ? n : (e[a].before + e[a - 1].after) / 2; if (0 < a)
                        for (var l = 0; l < e[a - 1].elements.length; l++) null !== e[a - 1].elements[l].bgcolor && i * ((s = e[a - 1].elements[l]).after - u) < 0 && (o = Math.ceil(Math.abs(u - s.after)) + "px", s.node.style.backgroundColor = s.bgcolor, "lr" === r.bpd ? s.node.style.paddingRight = o : "rl" === r.bpd ? s.node.style.paddingLeft = o : "tb" === r.bpd && (s.node.style.paddingBottom = o)); if (a < e.length)
                        for (var d = 0; d < e[a].elements.length; d++) null !== (s = e[a].elements[d]).bgcolor && 0 < i * (s.before - u) && (o = Math.ceil(Math.abs(s.before - u)) + "px", s.node.style.backgroundColor = s.bgcolor, "lr" === r.bpd ? s.node.style.paddingLeft = o : "rl" === r.bpd ? s.node.style.paddingRight = o : "tb" === r.bpd && (s.node.style.paddingTop = o)) } }

            function N(e, t) { this.id = e, this.plist = t }

            function C(e, t) { var n = { before: null, after: null, start: null, end: null }; return "tb" === t.bpd ? (n.before = e.top, n.after = e.bottom, "lr" === t.ipd ? (n.start = e.left, n.end = e.right) : (n.start = e.right, n.end = e.left)) : "lr" === t.bpd ? (n.before = e.left, n.after = e.right, n.start = e.top, n.end = e.bottom) : "rl" === t.bpd && (n.before = e.right, n.after = e.left, n.start = e.top, n.end = e.bottom), n }

            function w(e, t, n, r) { var i, a, o, s, u = t.style.backgroundColor || r; if (0 === t.childElementCount)
                    if ("span" === t.localName) { var l = t.getBoundingClientRect(); if (0 === l.height || 0 === l.width) return; var d, f, c = C(l, e);
                        0 !== n.length && (i = c.before, a = c.after, o = n[n.length - 1].before, s = n[n.length - 1].after, a < s && o < i || s <= a && i <= o) ? (d = Math.sign(c.after - c.before), f = Math.sign(c.end - c.start), d * (c.before - n[n.length - 1].before) < 0 && (n[n.length - 1].before = c.before), 0 < d * (c.after - n[n.length - 1].after) && (n[n.length - 1].after = c.after), f * (c.start - n[n.length - 1].start) < 0 && (n[n.length - 1].start = c.start, n[n.length - 1].start_elem = n[n.length - 1].elements.length), 0 < f * (c.end - n[n.length - 1].end) && (n[n.length - 1].end = c.end, n[n.length - 1].end_elem = n[n.length - 1].elements.length)) : n.push({ before: c.before, after: c.after, start: c.start, end: c.end, start_elem: 0, end_elem: 0, elements: [], text: "", br: !1 }), n[n.length - 1].text += t.textContent, n[n.length - 1].elements.push({ node: t, bgcolor: u, before: c.before, after: c.after }) } else "br" === t.localName && 0 !== n.length && (n[n.length - 1].br = !0);
                else
                    for (var h = t.firstChild; h;) h.nodeType === Node.ELEMENT_NODE && w(e, h, n, u), h = h.nextSibling }

            function t(e, t) { this.qname = e, this.map = t }
            e.render = function(e, t, n, r, i, a, o, s, u) { var l, d = r || t.clientHeight,
                    f = i || t.clientWidth;
                null !== e.aspectRatio && (f < (l = d * e.aspectRatio) ? d = Math.round(f / e.aspectRatio) : f = l); var c = document.createElement("div");
                c.style.position = "relative", c.style.width = f + "px", c.style.height = d + "px", c.style.margin = "auto", c.style.top = 0, c.style.bottom = 0, c.style.left = 0, c.style.right = 0, c.style.zIndex = 0; var h = { h: d, w: f, regionH: null, regionW: null, imgResolver: n, displayForcedOnlyMode: a || !1, isd: e, errorHandler: o, previousISDState: s, enableRollUp: u || !1, currentISDState: {}, flg: null, lp: null, mra: null, ipd: null, bpd: null }; for (var p in t.appendChild(c), e.contents) ! function e(t, n, r) { var i; "region" === r.kind ? (i = document.createElement("div")).style.position = "absolute" : "body" === r.kind || "div" === r.kind ? i = document.createElement("div") : "p" === r.kind ? i = document.createElement("p") : "span" === r.kind ? i = document.createElement("span") : "br" === r.kind && (i = document.createElement("br")); if (!i) return void P(t.errorHandler, "Error processing ISD element kind: " + r.kind);
                    i.style.margin = "0"; for (var a in O) { var o = O[a],
                            s = r.styleAttrs[o.qname];
                        void 0 !== s && null !== o.map && o.map(t, i, r, s) } var u = i; { var l; "region" === r.kind && ("lrtb" === (l = r.styleAttrs[R.byName.writingMode.qname]) || "lr" === l ? (t.ipd = "lr", t.bpd = "tb") : "rltb" === l || "rl" === l ? (t.ipd = "rl", t.bpd = "tb") : "tblr" === l ? (t.ipd = "tb", t.bpd = "lr") : "tbrl" !== l && "tb" !== l || (t.ipd = "tb", t.bpd = "rl")) } var d = r.styleAttrs[R.byName.linePadding.qname]; { var f;
                        d && 0 < d && (f = Math.ceil(d * t.h) + "px", "tb" === t.bpd ? (u.style.paddingLeft = f, u.style.paddingRight = f) : (u.style.paddingTop = f, u.style.paddingBottom = f), t.lp = d) } var c = r.styleAttrs[R.byName.multiRowAlign.qname]; { var h;
                        c && "auto" !== c && ((h = document.createElement("span")).style.display = "inline-block", h.style.textAlign = c, i.appendChild(h), u = h, t.mra = c) }
                    r.styleAttrs[R.byName.fillLineGap.qname] && (t.flg = !0); if ("span" === r.kind && r.text)
                        if (t.lp || t.mra || t.flg)
                            for (var p = "", g = 0; g < r.text.length; g++) { p += r.text.charAt(g); var _, E = r.text.charCodeAt(g);
                                (E < 55296 || 56319 < E || g === r.text.length) && ((_ = document.createElement("span")).textContent = p, i.appendChild(_), p = "") } else i.textContent = r.text;
                    n.appendChild(i); for (var m in r.contents) e(t, u, r.contents[m]); var v = []; { var y;
                        (t.lp || t.mra || t.flg) && "p" === r.kind && (w(t, u, v, null), t.mra && (D(v), t.mra = null), t.lp && (b(v, t.lp * t.h, t), t.lp = null), t.flg && (y = C(u.getBoundingClientRect(), t), M(v, y.before, y.after, t), t.flg = null)) } { var T, S, A, I; "region" === r.kind && (w(t, u, v), "tb" === t.bpd && t.enableRollUp && 0 < r.contents.length && "after" === r.styleAttrs[R.byName.displayAlign.qname] && (T = "" === r.id ? "_" : r.id, S = new N(T, v), t.currentISDState[S.id] = S, t.previousISDState && S.id in t.previousISDState && 0 < t.previousISDState[S.id].plist.length && 1 < S.plist.length && S.plist[S.plist.length - 2].text === t.previousISDState[S.id].plist[t.previousISDState[S.id].plist.length - 1].text && (A = i.firstElementChild, I = S.plist[S.plist.length - 1].after - S.plist[S.plist.length - 1].before, A.style.bottom = "-" + I + "px", A.style.transition = "transform 0.4s", A.style.position = "relative", A.style.transform = "translateY(-" + I + "px)"))) } }(h, c, e.contents[p]); return h.currentISDState }; var O = [new t("http://www.w3.org/ns/ttml#styling backgroundColor", function(e, t, n, r) { 0 !== r[3] && (t.style.backgroundColor = "rgba(" + r[0].toString() + "," + r[1].toString() + "," + r[2].toString() + "," + (r[3] / 255).toString() + ")") }), new t("http://www.w3.org/ns/ttml#styling color", function(e, t, n, r) { t.style.color = "rgba(" + r[0].toString() + "," + r[1].toString() + "," + r[2].toString() + "," + (r[3] / 255).toString() + ")" }), new t("http://www.w3.org/ns/ttml#styling direction", function(e, t, n, r) { t.style.direction = r }), new t("http://www.w3.org/ns/ttml#styling display", function(e, t, n, r) {}), new t("http://www.w3.org/ns/ttml#styling displayAlign", function(e, t, n, r) { t.style.display = "flex", t.style.flexDirection = "column", "before" === r ? t.style.justifyContent = "flex-start" : "center" === r ? t.style.justifyContent = "center" : "after" === r && (t.style.justifyContent = "flex-end") }), new t("http://www.w3.org/ns/ttml#styling extent", function(e, t, n, r) { e.regionH = r.h * e.h, e.regionW = r.w * e.w; var i = 0,
                        a = 0,
                        o = n.styleAttrs["http://www.w3.org/ns/ttml#styling padding"];
                    o && (i = (o[0] + o[2]) * e.h, a = (o[1] + o[3]) * e.w), t.style.height = e.regionH - i + "px", t.style.width = e.regionW - a + "px" }), new t("http://www.w3.org/ns/ttml#styling fontFamily", function(e, t, n, r) { var i = []; for (var a in r) "monospaceSerif" === r[a] ? (i.push("Courier New"), i.push('"Liberation Mono"'), i.push("Courier"), i.push("monospace")) : "proportionalSansSerif" === r[a] ? (i.push("Arial"), i.push("Helvetica"), i.push('"Liberation Sans"'), i.push("sans-serif")) : "monospace" === r[a] ? i.push("monospace") : "sansSerif" === r[a] ? i.push("sans-serif") : "serif" === r[a] ? i.push("serif") : "monospaceSansSerif" === r[a] ? (i.push("Consolas"), i.push("monospace")) : "proportionalSerif" === r[a] ? i.push("serif") : i.push(r[a]);
                    t.style.fontFamily = i.join(",") }), new t("http://www.w3.org/ns/ttml#styling fontSize", function(e, t, n, r) { t.style.fontSize = r * e.h + "px" }), new t("http://www.w3.org/ns/ttml#styling fontStyle", function(e, t, n, r) { t.style.fontStyle = r }), new t("http://www.w3.org/ns/ttml#styling fontWeight", function(e, t, n, r) { t.style.fontWeight = r }), new t("http://www.w3.org/ns/ttml#styling lineHeight", function(e, t, n, r) { t.style.lineHeight = "normal" === r ? "normal" : r * e.h + "px" }), new t("http://www.w3.org/ns/ttml#styling opacity", function(e, t, n, r) { t.style.opacity = r }), new t("http://www.w3.org/ns/ttml#styling origin", function(e, t, n, r) { t.style.top = r.h * e.h + "px", t.style.left = r.w * e.w + "px" }), new t("http://www.w3.org/ns/ttml#styling overflow", function(e, t, n, r) { t.style.overflow = r }), new t("http://www.w3.org/ns/ttml#styling padding", function(e, t, n, r) { var i = [];
                    i[0] = r[0] * e.h + "px", i[1] = r[3] * e.w + "px", i[2] = r[2] * e.h + "px", i[3] = r[1] * e.w + "px", t.style.padding = i.join(" ") }), new t("http://www.w3.org/ns/ttml#styling showBackground", null), new t("http://www.w3.org/ns/ttml#styling textAlign", function(e, t, n, r) { var i = n.styleAttrs[R.byName.direction.qname],
                        a = "start" === r ? "rtl" === i ? "right" : "left" : "end" === r ? "rtl" === i ? "left" : "right" : r;
                    t.style.textAlign = a }), new t("http://www.w3.org/ns/ttml#styling textDecoration", function(e, t, n, r) { t.style.textDecoration = r.join(" ").replace("lineThrough", "line-through") }), new t("http://www.w3.org/ns/ttml#styling textOutline", function(e, t, n, r) { t.style.textShadow = "none" === r ? "" : "rgba(" + r.color[0].toString() + "," + r.color[1].toString() + "," + r.color[2].toString() + "," + (r.color[3] / 255).toString() + ") 0px 0px " + r.thickness * e.h + "px" }), new t("http://www.w3.org/ns/ttml#styling unicodeBidi", function(e, t, n, r) { var i = "bidiOverride" === r ? "bidi-override" : r;
                    t.style.unicodeBidi = i }), new t("http://www.w3.org/ns/ttml#styling visibility", function(e, t, n, r) { t.style.visibility = r }), new t("http://www.w3.org/ns/ttml#styling wrapOption", function(e, t, n, r) { "wrap" === r ? "preserve" === n.space ? t.style.whiteSpace = "pre-wrap" : t.style.whiteSpace = "normal" : "preserve" === n.space ? t.style.whiteSpace = "pre" : t.style.whiteSpace = "noWrap" }), new t("http://www.w3.org/ns/ttml#styling writingMode", function(e, t, n, r) { "lrtb" === r || "lr" === r || "rltb" === r || "rl" === r ? t.style.writingMode = "horizontal-tb" : "tblr" === r ? t.style.writingMode = "vertical-lr" : "tbrl" !== r && "tb" !== r || (t.style.writingMode = "vertical-rl") }), new t("http://www.w3.org/ns/ttml#styling zIndex", function(e, t, n, r) { t.style.zIndex = r }), new t("http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt backgroundImage", function(e, t, n, r) { var i, a;
                    null !== e.imgResolver && null !== r && (i = document.createElement("img"), (a = e.imgResolver(r, i)) && (i.src = a), i.height = e.regionH, i.width = e.regionW, t.appendChild(i)) }), new t("http://www.w3.org/ns/ttml/profile/imsc1#styling forcedDisplay", function(e, t, n, r) { e.displayForcedOnlyMode && !1 === r && (t.style.visibility = "hidden") })],
                n = {}; for (var r in O) n[O[r].qname] = O[r];

            function P(e, t) { if (e && e.error && e.error(t)) throw t } }(void 0 === n ? this.imscHTML = {} : n, ("undefined" == typeof imscNames && e(18), "undefined" == typeof imscStyles ? e(19) : imscStyles)) }, { 18: 18, 19: 19 }], 16: [function(e, t, n) {
        function F(e, t) { if ("contents" in e)
                for (var n in e.contents) F(e.contents[n], t);
            else t.push(e) }

        function U(e) { if ("br" !== e.kind) { if ("text" in e) return 0 === e.text.length; if ("contents" in e) { for (var t = e.contents.length; t--;) U(e.contents[t]) && e.contents.splice(t, 1); return 0 === e.contents.length } } }

        function s(e) { this.contents = [], this.aspectRatio = e.aspectRatio }

        function k(e) { for (var t in this.kind = e.kind || "region", e.id && (this.id = e.id), this.styleAttrs = {}, e.styleAttrs) this.styleAttrs[t] = e.styleAttrs[t]; "text" in e ? this.text = e.text : "br" !== e.kind && (this.contents = []), "space" in e && (this.space = e.space) }

        function B(e, t) { if (e && e.error && e.error(t)) throw t } var r, G;
        r = void 0 === n ? this.imscISD = {} : n, "undefined" == typeof imscNames && e(18), G = "undefined" == typeof imscStyles ? e(19) : imscStyles, r.generateISD = function(e, t, n) { var r = new s(e),
                i = {}; for (var a in e.head.layout.regions) { var o = function e(t, n, r, i, a, o, s, u, l) { if (n < s.begin || n >= s.end) return null; var d = "regionID" in s && "" !== s.regionID ? s.regionID : o; if (null !== a && d !== r.id && (!("contents" in s) || "contents" in s && 0 === s.contents.length || "" !== d)) return null; var f = new k(s); for (var c in s.sets) n < s.sets[c].begin || n >= s.sets[c].end || (f.styleAttrs[s.sets[c].qname] = s.sets[c].value); var h = {}; for (var p in f.styleAttrs) { var g;
                        h[p] = !0, p !== G.byName.writingMode.qname || G.byName.direction.qname in f.styleAttrs || ("lrtb" === (g = f.styleAttrs[p]) || "lr" === g ? f.styleAttrs[G.byName.direction.qname] = "ltr" : "rltb" !== g && "rl" !== g || (f.styleAttrs[G.byName.direction.qname] = "rtl")) } if (null !== a)
                        for (var _ in G.all) { var E, m, v, y = G.all[_];
                            y.qname === G.byName.textDecoration.qname ? (E = a.styleAttrs[y.qname], m = f.styleAttrs[y.qname], v = [], void 0 === m ? v = E : -1 === m.indexOf("none") ? ((-1 === m.indexOf("noUnderline") && -1 !== E.indexOf("underline") || -1 !== m.indexOf("underline")) && v.push("underline"), (-1 === m.indexOf("noLineThrough") && -1 !== E.indexOf("lineThrough") || -1 !== m.indexOf("lineThrough")) && v.push("lineThrough"), (-1 === m.indexOf("noOverline") && -1 !== E.indexOf("overline") || -1 !== m.indexOf("overline")) && v.push("overline")) : v.push("none"), f.styleAttrs[y.qname] = v) : y.inherit && y.qname in a.styleAttrs && !(y.qname in f.styleAttrs) && (f.styleAttrs[y.qname] = a.styleAttrs[y.qname]) }
                    for (var T in G.all) { var S = G.all[T];
                        S.qname in f.styleAttrs || ("region" === f.kind || !1 === S.inherit && null !== S.initial) && (f.styleAttrs[S.qname] = S.parse(S.initial), h[S.qname] = !0) } for (var A in G.all) { var I, R = G.all[A];
                        R.qname in h && null !== R.compute && (null !== (I = R.compute(t, a, f, f.styleAttrs[R.qname], l)) ? f.styleAttrs[R.qname] = I : B(u, "Style '" + R.qname + "' on element '" + f.kind + "' cannot be computed")) } if ("none" === f.styleAttrs[G.byName.display.qname]) return null; var b;
                    null === a ? b = null === i ? [] : [i] : "contents" in s && (b = s.contents); for (var D in b) { var M = e(t, n, r, i, f, d, b[D], u, l);
                        null !== M && f.contents.push(M.element) } for (var N in f.styleAttrs) { var C = G.byQName[N]; - 1 === C.applies.indexOf(f.kind) && delete f.styleAttrs[N] } { var w; "span" === f.kind && f.text && "default" === f.space && (w = f.text.replace(/\s+/g, " "), f.text = w) } if ("p" === f.kind) { var O = [];
                        F(f, O); for (var P = 0, L = "after_br", x = 0;;)
                            if ("after_br" === L) P >= O.length || "br" === O[P].kind ? (L = "before_br", x = P, P--) : ("preserve" !== O[P].space && (O[P].text = O[P].text.replace(/^\s+/g, "")), 0 < O[P].text.length ? (L = "looking_br", P++) : O.splice(P, 1));
                            else if ("before_br" === L)
                            if (P < 0 || "br" === O[P].kind) { if (L = "after_br", (P = x + 1) >= O.length) break } else if ("preserve" !== O[P].space && (O[P].text = O[P].text.replace(/\s+$/g, "")), 0 < O[P].text.length) { if (L = "after_br", (P = x + 1) >= O.length) break } else O.splice(P, 1), P--;
                        else P >= O.length || "br" === O[P].kind ? (L = "before_br", x = P, P--) : P++;
                        U(f) } if ("div" === f.kind && G.byName.backgroundImage.qname in f.styleAttrs || "br" === f.kind || "contents" in f && 0 < f.contents.length || "span" === f.kind && null !== f.text || "region" === f.kind && "always" === f.styleAttrs[G.byName.showBackground.qname]) return { region_id: d, element: f }; return null }(e, t, e.head.layout.regions[a], e.body, null, "", e.head.layout.regions[a], n, i);
                null !== o && r.contents.push(o.element) } return r } }, { 18: 18, 19: 19 }], 17: [function(e, t, n) { n.generateISD = e(16).generateISD, n.fromXML = e(14).fromXML, n.renderHTML = e(15).render }, { 14: 14, 15: 15, 16: 16 }], 18: [function(e, t, n) { var r;
        (r = void 0 === n ? this.imscNames = {} : n).ns_tt = "http://www.w3.org/ns/ttml", r.ns_tts = "http://www.w3.org/ns/ttml#styling", r.ns_ttp = "http://www.w3.org/ns/ttml#parameter", r.ns_xml = "http://www.w3.org/XML/1998/namespace", r.ns_itts = "http://www.w3.org/ns/ttml/profile/imsc1#styling", r.ns_ittp = "http://www.w3.org/ns/ttml/profile/imsc1#parameter", r.ns_smpte = "http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt", r.ns_ebutts = "urn:ebu:tt:style" }, {}], 19: [function(e, t, n) {! function(l, e, a) {
            function t(e, t, n, r, i, a, o, s) { this.name = t, this.ns = e, this.qname = e + " " + t, this.inherit = i, this.animatable = a, this.initial = n, this.applies = r, this.parse = o, this.compute = s } for (var n in l.all = [new t(e.ns_tts, "backgroundColor", "transparent", ["body", "div", "p", "region", "span"], !1, !0, a.parseColor, null), new t(e.ns_tts, "color", "white", ["span"], !0, !0, a.parseColor, null), new t(e.ns_tts, "direction", "ltr", ["p", "span"], !0, !0, function(e) { return e }, null), new t(e.ns_tts, "display", "auto", ["body", "div", "p", "region", "span"], !1, !0, function(e) { return e }, null), new t(e.ns_tts, "displayAlign", "before", ["region"], !1, !0, function(e) { return e }, null), new t(e.ns_tts, "extent", "auto", ["tt", "region"], !1, !0, function(e) { if ("auto" === e) return e; var t = e.split(" "); if (2 !== t.length) return null; var n = a.parseLength(t[0]),
                        r = a.parseLength(t[1]); return r && n ? { h: r, w: n } : null }, function(e, t, n, r, i) { var a, o; if ("auto" === r) a = 1;
                    else if ("%" === r.h.unit) a = r.h.value / 100;
                    else { if ("px" !== r.h.unit) return null;
                        a = r.h.value / e.pxDimensions.h } if ("auto" === r) o = 1;
                    else if ("%" === r.w.unit) o = r.w.value / 100;
                    else { if ("px" !== r.w.unit) return null;
                        o = r.w.value / e.pxDimensions.w } return { h: a, w: o } }), new t(e.ns_tts, "fontFamily", "default", ["span"], !0, !0, function(e) { var t = e.split(","),
                        n = []; for (var r in t) "'" !== t[r].charAt(0) && '"' !== t[r].charAt(0) && "default" === t[r] ? n.push("monospaceSerif") : n.push(t[r]); return n }, null), new t(e.ns_tts, "fontSize", "1c", ["span"], !0, !0, a.parseLength, function(e, t, n, r, i) { var a; if ("%" === r.unit) a = null !== t ? t.styleAttrs[l.byName.fontSize.qname] * r.value / 100 : r.value / 100 / e.cellResolution.h;
                    else if ("em" === r.unit) a = null !== t ? t.styleAttrs[l.byName.fontSize.qname] * r.value : r.value / e.cellResolution.h;
                    else if ("c" === r.unit) a = r.value / e.cellResolution.h;
                    else { if ("px" !== r.unit) return null;
                        a = r.value / e.pxDimensions.h } return a }), new t(e.ns_tts, "fontStyle", "normal", ["span"], !0, !0, function(e) { return e }, null), new t(e.ns_tts, "fontWeight", "normal", ["span"], !0, !0, function(e) { return e }, null), new t(e.ns_tts, "lineHeight", "normal", ["p"], !0, !0, function(e) { return "normal" === e ? e : a.parseLength(e) }, function(e, t, n, r, i) { var a; if ("normal" === r) a = r;
                    else if ("%" === r.unit) a = n.styleAttrs[l.byName.fontSize.qname] * r.value / 100;
                    else if ("em" === r.unit) a = n.styleAttrs[l.byName.fontSize.qname] * r.value;
                    else if ("c" === r.unit) a = r.value / e.cellResolution.h;
                    else { if ("px" !== r.unit) return null;
                        a = r.value / e.pxDimensions.h } return a }), new t(e.ns_tts, "opacity", 1, ["region"], !1, !0, parseFloat, null), new t(e.ns_tts, "origin", "auto", ["region"], !1, !0, function(e) { if ("auto" === e) return e; var t = e.split(" "); if (2 !== t.length) return null; var n = a.parseLength(t[0]),
                        r = a.parseLength(t[1]); return r && n ? { h: r, w: n } : null }, function(e, t, n, r, i) { var a, o; if ("auto" === r) a = 0;
                    else if ("%" === r.h.unit) a = r.h.value / 100;
                    else { if ("px" !== r.h.unit) return null;
                        a = r.h.value / e.pxDimensions.h } if ("auto" === r) o = 0;
                    else if ("%" === r.w.unit) o = r.w.value / 100;
                    else { if ("px" !== r.w.unit) return null;
                        o = r.w.value / e.pxDimensions.w } return { h: a, w: o } }), new t(e.ns_tts, "overflow", "hidden", ["region"], !1, !0, function(e) { return e }, null), new t(e.ns_tts, "padding", "0px", ["region"], !1, !0, function(e) { var t = e.split(" "); if (4 < t.length) return null; var n = []; for (var r in t) { var i = a.parseLength(t[r]); if (!i) return null;
                        n.push(i) } return n }, function(e, t, n, r, i) { var a; if (1 === r.length) a = [r[0], r[0], r[0], r[0]];
                    else if (2 === r.length) a = [r[0], r[1], r[0], r[1]];
                    else if (3 === r.length) a = [r[0], r[1], r[2], r[1]];
                    else { if (4 !== r.length) return null;
                        a = [r[0], r[1], r[2], r[3]] } var o = n.styleAttrs[l.byName.writingMode.qname]; if ("lrtb" === o || "lr" === o) a = [a[0], a[3], a[2], a[1]];
                    else if ("rltb" === o || "rl" === o) a = [a[0], a[1], a[2], a[3]];
                    else if ("tblr" === o) a = [a[3], a[0], a[1], a[2]];
                    else { if ("tbrl" !== o && "tb" !== o) return null;
                        a = [a[3], a[2], a[1], a[0]] } var s = []; for (var u in a)
                        if (0 === a[u].value) s[u] = 0;
                        else if ("%" === a[u].unit) s[u] = "0" === u || "2" === u ? n.styleAttrs[l.byName.extent.qname].h * a[u].value / 100 : n.styleAttrs[l.byName.extent.qname].w * a[u].value / 100;
                    else if ("em" === a[u].unit) s[u] = n.styleAttrs[l.byName.fontSize.qname] * a[u].value;
                    else if ("c" === a[u].unit) s[u] = a[u].value / e.cellResolution.h;
                    else { if ("px" !== a[u].unit) return null;
                        s[u] = "0" === u || "2" === u ? a[u].value / e.pxDimensions.h : a[u].value / e.pxDimensions.w } return s }), new t(e.ns_tts, "showBackground", "always", ["region"], !1, !0, function(e) { return e }, null), new t(e.ns_tts, "textAlign", "start", ["p"], !0, !0, function(e) { return e }, function(e, t, n, r, i) { return "left" === r ? "start" : "right" === r ? "end" : r }), new t(e.ns_tts, "textDecoration", "none", ["span"], !0, !0, function(e) { return e.split(" ") }, null), new t(e.ns_tts, "textOutline", "none", ["span"], !0, !0, function(e) { if ("none" === e) return e; var t = {},
                        n = e.split(" "); if (0 === n.length || 2 < n.length) return null; var r = a.parseColor(n[0]); if (null !== (t.color = r) && n.shift(), 1 !== n.length) return null; var i = a.parseLength(n[0]); return i ? (t.thickness = i, t) : null }, function(e, t, n, r, i) { if ("none" === r) return r; var a = {}; if (null === r.color ? a.color = n.styleAttrs[l.byName.color.qname] : a.color = r.color, "%" === r.thickness.unit) a.thickness = n.styleAttrs[l.byName.fontSize.qname] * r.thickness.value / 100;
                    else if ("em" === r.thickness.unit) a.thickness = n.styleAttrs[l.byName.fontSize.qname] * r.thickness.value;
                    else if ("c" === r.thickness.unit) a.thickness = r.thickness.value / e.cellResolution.h;
                    else { if ("px" !== r.thickness.unit) return null;
                        a.thickness = r.thickness.value / e.pxDimensions.h } return a }), new t(e.ns_tts, "unicodeBidi", "normal", ["span", "p"], !1, !0, function(e) { return e }, null), new t(e.ns_tts, "visibility", "visible", ["body", "div", "p", "region", "span"], !0, !0, function(e) { return e }, null), new t(e.ns_tts, "wrapOption", "wrap", ["span"], !0, !0, function(e) { return e }, null), new t(e.ns_tts, "writingMode", "lrtb", ["region"], !1, !0, function(e) { return e }, null), new t(e.ns_tts, "zIndex", "auto", ["region"], !1, !0, function(e) { var t; return "auto" === e ? t = e : (t = parseInt(e), isNaN(t) && (t = null)), t }, null), new t(e.ns_ebutts, "linePadding", "0c", ["p"], !0, !1, a.parseLength, function(e, t, n, r, i) { return "c" === r.unit ? r.value / e.cellResolution.h : null }), new t(e.ns_ebutts, "multiRowAlign", "auto", ["p"], !0, !1, function(e) { return e }, null), new t(e.ns_smpte, "backgroundImage", null, ["div"], !1, !1, function(e) { return e }, null), new t(e.ns_itts, "forcedDisplay", "false", ["body", "div", "p", "region", "span"], !0, !0, function(e) { return "true" === e }, null), new t(e.ns_itts, "fillLineGap", "false", ["p"], !0, !0, function(e) { return "true" === e }, null)], l.byQName = {}, l.all) l.byQName[l.all[n].qname] = l.all[n]; for (var r in l.byName = {}, l.all) l.byName[l.all[r].name] = l.all[r] }(void 0 === n ? this.imscStyles = {} : n, "undefined" == typeof imscNames ? e(18) : imscNames, "undefined" == typeof imscUtils ? e(20) : imscUtils) }, { 18: 18, 20: 20 }], 20: [function(e, t, n) {! function(e) { var i = /#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})?/,
                a = /rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
                o = /rgba\(\s*(\d+),\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/,
                s = { transparent: [0, 0, 0, 0], black: [0, 0, 0, 255], silver: [192, 192, 192, 255], gray: [128, 128, 128, 255], white: [255, 255, 255, 255], maroon: [128, 0, 0, 255], red: [255, 0, 0, 255], purple: [128, 0, 128, 255], fuchsia: [255, 0, 255, 255], magenta: [255, 0, 255, 255], green: [0, 128, 0, 255], lime: [0, 255, 0, 255], olive: [128, 128, 0, 255], yellow: [255, 255, 0, 255], navy: [0, 0, 128, 255], blue: [0, 0, 255, 255], teal: [0, 128, 128, 255], aqua: [0, 255, 255, 255], cyan: [0, 255, 255, 255] };
            e.parseColor = function(e) { var t, n = null,
                    r = s[e.toLowerCase()]; return void 0 !== r ? n = r : null !== (t = i.exec(e)) ? n = [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16), void 0 !== t[4] ? parseInt(t[4], 16) : 255] : null !== (t = a.exec(e)) ? n = [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), 255] : null !== (t = o.exec(e)) && (n = [parseInt(t[1]), parseInt(t[2]), parseInt(t[3]), parseInt(t[4])]), n }; var r = /^((?:\+|\-)?\d*(?:\.\d+)?)(px|em|c|%)$/;
            e.parseLength = function(e) { var t, n = null; return null !== (t = r.exec(e)) && (n = { value: parseFloat(t[1]), unit: t[2] }), n } }(void 0 === n ? this.imscUtils = {} : n) }, {}], 21: [function(e, t, n) { "function" == typeof Object.create ? t.exports = function(e, t) { e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }) } : t.exports = function(e, t) { e.super_ = t;

            function n() {}
            n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e } }, {}], 22: [function(e, t, n) {
        function r(e) { return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e) }
        t.exports = function(e) { return null != e && (r(e) || "function" == typeof(t = e).readFloatLE && "function" == typeof t.slice && r(t.slice(0, 0)) || !!e._isBuffer); var t } }, {}], 23: [function(e, t, n) { var r = {}.toString;
        t.exports = Array.isArray || function(e) { return "[object Array]" == r.call(e) } }, {}], 24: [function(e, t, n) {
        (function(s) { "use strict";!s.version || 0 === s.version.indexOf("v0.") || 0 === s.version.indexOf("v1.") && 0 !== s.version.indexOf("v1.8.") ? t.exports = { nextTick: function(e, t, n, r) { if ("function" != typeof e) throw new TypeError('"callback" argument must be a function'); var i, a, o = arguments.length; switch (o) {
                        case 0:
                        case 1:
                            return s.nextTick(e);
                        case 2:
                            return s.nextTick(function() { e.call(null, t) });
                        case 3:
                            return s.nextTick(function() { e.call(null, t, n) });
                        case 4:
                            return s.nextTick(function() { e.call(null, t, n, r) });
                        default:
                            for (i = new Array(o - 1), a = 0; a < i.length;) i[a++] = arguments[a]; return s.nextTick(function() { e.apply(null, i) }) } } } : t.exports = s }).call(this, e(25)) }, { 25: 25 }], 25: [function(e, t, n) { var r, i, a = t.exports = {};

        function o() { throw new Error("setTimeout has not been defined") }

        function s() { throw new Error("clearTimeout has not been defined") }

        function u(t) { if (r === setTimeout) return setTimeout(t, 0); if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(t, 0); try { return r(t, 0) } catch (e) { try { return r.call(null, t, 0) } catch (e) { return r.call(this, t, 0) } } }! function() { try { r = "function" == typeof setTimeout ? setTimeout : o } catch (e) { r = o } try { i = "function" == typeof clearTimeout ? clearTimeout : s } catch (e) { i = s } }(); var l, d = [],
            f = !1,
            c = -1;

        function h() { f && l && (f = !1, l.length ? d = l.concat(d) : c = -1, d.length && p()) }

        function p() { if (!f) { var e = u(h);
                f = !0; for (var t = d.length; t;) { for (l = d, d = []; ++c < t;) l && l[c].run();
                    c = -1, t = d.length }
                l = null, f = !1,
                    function(t) { if (i === clearTimeout) return clearTimeout(t); if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t); try { i(t) } catch (e) { try { return i.call(null, t) } catch (e) { return i.call(this, t) } } }(e) } }

        function g(e, t) { this.fun = e, this.array = t }

        function _() {}
        a.nextTick = function(e) { var t = new Array(arguments.length - 1); if (1 < arguments.length)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            d.push(new g(e, t)), 1 !== d.length || f || u(p) }, g.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = _, a.addListener = _, a.once = _, a.off = _, a.removeListener = _, a.removeAllListeners = _, a.emit = _, a.prependListener = _, a.prependOnceListener = _, a.listeners = function(e) { return [] }, a.binding = function(e) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(e) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 } }, {}], 26: [function(e, t, n) { t.exports = e(27) }, { 27: 27 }], 27: [function(e, t, n) { "use strict"; var r = e(24),
            i = Object.keys || function(e) { var t = []; for (var n in e) t.push(n); return t };
        t.exports = f; var a = e(10);
        a.inherits = e(21); var o = e(29),
            s = e(31);
        a.inherits(f, o); for (var u = i(s.prototype), l = 0; l < u.length; l++) { var d = u[l];
            f.prototype[d] || (f.prototype[d] = s.prototype[d]) }

        function f(e) { if (!(this instanceof f)) return new f(e);
            o.call(this, e), s.call(this, e), e && !1 === e.readable && (this.readable = !1), e && !1 === e.writable && (this.writable = !1), this.allowHalfOpen = !0, e && !1 === e.allowHalfOpen && (this.allowHalfOpen = !1), this.once("end", c) }

        function c() { this.allowHalfOpen || this._writableState.ended || r.nextTick(h, this) }

        function h(e) { e.end() }
        Object.defineProperty(f.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), Object.defineProperty(f.prototype, "destroyed", { get: function() { return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed) }, set: function(e) { void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e) } }), f.prototype._destroy = function(e, t) { this.push(null), this.end(), r.nextTick(t, e) } }, { 10: 10, 21: 21, 24: 24, 29: 29, 31: 31 }], 28: [function(e, t, n) { "use strict";
        t.exports = a; var r = e(30),
            i = e(10);

        function a(e) { if (!(this instanceof a)) return new a(e);
            r.call(this, e) }
        i.inherits = e(21), i.inherits(a, r), a.prototype._transform = function(e, t, n) { n(null, e) } }, { 10: 10, 21: 21, 30: 30 }], 29: [function(P, L, e) {
        (function(_, e) { "use strict"; var E = P(24);
            L.exports = c; var o, m = P(23);
            c.ReadableState = a;

            function v(e, t) { return e.listeners(t).length }
            P(11).EventEmitter; var i = P(34),
                l = P(39).Buffer,
                d = e.Uint8Array || function() {}; var t = P(10);
            t.inherits = P(21); var s, n = P(7),
                y = void 0,
                y = n && n.debuglog ? n.debuglog("stream") : function() {},
                u = P(32),
                r = P(33);
            t.inherits(c, i); var f = ["error", "close", "destroy", "pause", "resume"];

            function a(e, t) { e = e || {}; var n = t instanceof(o = o || P(27));
                this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.readableObjectMode); var r = e.highWaterMark,
                    i = e.readableHighWaterMark,
                    a = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : n && (i || 0 === i) ? i : a, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new u, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (s = s || P(42).StringDecoder, this.decoder = new s(e.encoding), this.encoding = e.encoding) }

            function c(e) { if (o = o || P(27), !(this instanceof c)) return new c(e);
                this._readableState = new a(e, this), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), i.call(this) }

            function h(e, t, n, r, i) { var a, o, s, u = e._readableState; return null === t ? (u.reading = !1, function(e, t) { if (t.ended) return; { var n;!t.decoder || (n = t.decoder.end()) && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length) }
                    t.ended = !0, S(e) }(e, u)) : (i || (a = function(e, t) { var n;
                    (function(e) { return l.isBuffer(e) || e instanceof d })(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")); return n }(u, t)), a ? e.emit("error", a) : u.objectMode || t && 0 < t.length ? ("string" == typeof t || u.objectMode || Object.getPrototypeOf(t) === l.prototype || (o = t, t = l.from(o)), r ? u.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : p(e, u, t, !0) : u.ended ? e.emit("error", new Error("stream.push() after EOF")) : (u.reading = !1, u.decoder && !n ? (t = u.decoder.write(t), u.objectMode || 0 !== t.length ? p(e, u, t, !1) : I(e, u)) : p(e, u, t, !1))) : r || (u.reading = !1)), !(s = u).ended && (s.needReadable || s.length < s.highWaterMark || 0 === s.length) }

            function p(e, t, n, r) { t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n), e.read(0)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && S(e)), I(e, t) }
            Object.defineProperty(c.prototype, "destroyed", { get: function() { return void 0 !== this._readableState && this._readableState.destroyed }, set: function(e) { this._readableState && (this._readableState.destroyed = e) } }), c.prototype.destroy = r.destroy, c.prototype._undestroy = r.undestroy, c.prototype._destroy = function(e, t) { this.push(null), t(e) }, c.prototype.push = function(e, t) { var n, r = this._readableState; return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = l.from(e, t), t = ""), n = !0), h(this, e, t, !1, n) }, c.prototype.unshift = function(e) { return h(this, e, null, !0, !1) }, c.prototype.isPaused = function() { return !1 === this._readableState.flowing }, c.prototype.setEncoding = function(e) { return s = s || P(42).StringDecoder, this._readableState.decoder = new s(e), this._readableState.encoding = e, this }; var g = 8388608;

            function T(e, t) { return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = (g <= (n = e) ? n = g : (n--, n |= n >>> 1, n |= n >>> 2, n |= n >>> 4, n |= n >>> 8, n |= n >>> 16, n++), n)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0)); var n }

            function S(e) { var t = e._readableState;
                t.needReadable = !1, t.emittedReadable || (y("emitReadable", t.flowing), t.emittedReadable = !0, t.sync ? E.nextTick(A, e) : A(e)) }

            function A(e) { y("emit readable"), e.emit("readable"), M(e) }

            function I(e, t) { t.readingMore || (t.readingMore = !0, E.nextTick(R, e, t)) }

            function R(e, t) { for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (y("maybeReadMore read 0"), e.read(0), n !== t.length);) n = t.length;
                t.readingMore = !1 }

            function b(e) { y("readable nexttick read 0"), e.read(0) }

            function D(e, t) { t.reading || (y("resume read 0"), e.read(0)), t.resumeScheduled = !1, t.awaitDrain = 0, e.emit("resume"), M(e), t.flowing && !t.reading && e.read(0) }

            function M(e) { var t = e._readableState; for (y("flow", t.flowing); t.flowing && null !== e.read();); }

            function N(e, t) { return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length), t.buffer.clear()) : n = function(e, t, n) { var r;
                    e < t.head.data.length ? (r = t.head.data.slice(0, e), t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : (n ? function(e, t) { var n = t.head,
                            r = 1,
                            i = n.data;
                        e -= i.length; for (; n = n.next;) { var a = n.data,
                                o = e > a.length ? a.length : e; if (o === a.length ? i += a : i += a.slice(0, e), 0 === (e -= o)) { o === a.length ? (++r, n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n).data = a.slice(o); break }++r } return t.length -= r, i } : function(e, t) { var n = l.allocUnsafe(e),
                            r = t.head,
                            i = 1;
                        r.data.copy(n), e -= r.data.length; for (; r = r.next;) { var a = r.data,
                                o = e > a.length ? a.length : e; if (a.copy(n, n.length - e, 0, o), 0 === (e -= o)) { o === a.length ? (++i, r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r).data = a.slice(o); break }++i } return t.length -= i, n })(e, t); return r }(e, t.buffer, t.decoder), n); var n }

            function C(e) { var t = e._readableState; if (0 < t.length) throw new Error('"endReadable()" called on non-empty stream');
                t.endEmitted || (t.ended = !0, E.nextTick(w, t, e)) }

            function w(e, t) { e.endEmitted || 0 !== e.length || (e.endEmitted = !0, t.readable = !1, t.emit("end")) }

            function O(e, t) { for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1 }
            c.prototype.read = function(e) { y("read", e), e = parseInt(e, 10); var t = this._readableState,
                    n = e; if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended)) return y("read: emitReadable", t.length, t.ended), (0 === t.length && t.ended ? C : S)(this), null; if (0 === (e = T(e, t)) && t.ended) return 0 === t.length && C(this), null; var r, i = t.needReadable; return y("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && y("length less than watermark", i = !0), t.ended || t.reading ? y("reading or ended", i = !1) : i && (y("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = T(n, t))), null === (r = 0 < e ? N(e, t) : null) ? (t.needReadable = !0, e = 0) : t.length -= e, 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && C(this)), null !== r && this.emit("data", r), r }, c.prototype._read = function(e) { this.emit("error", new Error("_read() is not implemented")) }, c.prototype.pipe = function(n, e) { var r = this,
                    i = this._readableState; switch (i.pipesCount) {
                    case 0:
                        i.pipes = n; break;
                    case 1:
                        i.pipes = [i.pipes, n]; break;
                    default:
                        i.pipes.push(n) }
                i.pipesCount += 1, y("pipe count=%d opts=%j", i.pipesCount, e); var t = (!e || !1 !== e.end) && n !== _.stdout && n !== _.stderr ? o : g;

                function a(e, t) { y("onunpipe"), e === r && t && !1 === t.hasUnpiped && (t.hasUnpiped = !0, y("cleanup"), n.removeListener("close", h), n.removeListener("finish", p), n.removeListener("drain", u), n.removeListener("error", c), n.removeListener("unpipe", a), r.removeListener("end", o), r.removeListener("end", g), r.removeListener("data", f), l = !0, !i.awaitDrain || n._writableState && !n._writableState.needDrain || u()) }

                function o() { y("onend"), n.end() }
                i.endEmitted ? E.nextTick(t) : r.once("end", t), n.on("unpipe", a); var s, u = (s = r, function() { var e = s._readableState;
                    y("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && v(s, "data") && (e.flowing = !0, M(s)) });
                n.on("drain", u); var l = !1; var d = !1;

                function f(e) { y("ondata"), (d = !1) !== n.write(e) || d || ((1 === i.pipesCount && i.pipes === n || 1 < i.pipesCount && -1 !== O(i.pipes, n)) && !l && (y("false write response, pause", r._readableState.awaitDrain), r._readableState.awaitDrain++, d = !0), r.pause()) }

                function c(e) { y("onerror", e), g(), n.removeListener("error", c), 0 === v(n, "error") && n.emit("error", e) }

                function h() { n.removeListener("finish", p), g() }

                function p() { y("onfinish"), n.removeListener("close", h), g() }

                function g() { y("unpipe"), r.unpipe(n) } return r.on("data", f),
                    function(e, t, n) { if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                        e._events && e._events[t] ? m(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n) }(n, "error", c), n.once("close", h), n.once("finish", p), n.emit("pipe", r), i.flowing || (y("pipe resume"), r.resume()), n }, c.prototype.unpipe = function(e) { var t = this._readableState,
                    n = { hasUnpiped: !1 }; if (0 === t.pipesCount) return this; if (1 === t.pipesCount) return e && e !== t.pipes || (e = e || t.pipes, t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this; if (!e) { var r = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1; for (var a = 0; a < i; a++) r[a].emit("unpipe", this, n); return this } var o = O(t.pipes, e); return -1 === o || (t.pipes.splice(o, 1), --t.pipesCount, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this }, c.prototype.addListener = c.prototype.on = function(e, t) { var n, r = i.prototype.on.call(this, e, t); return "data" === e ? !1 !== this._readableState.flowing && this.resume() : "readable" === e && ((n = this._readableState).endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, n.emittedReadable = !1, n.reading ? n.length && S(this) : E.nextTick(b, this))), r }, c.prototype.resume = function() { var e, t, n = this._readableState; return n.flowing || (y("resume"), n.flowing = !0, e = this, (t = n).resumeScheduled || (t.resumeScheduled = !0, E.nextTick(D, e, t))), this }, c.prototype.pause = function() { return y("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (y("pause"), this._readableState.flowing = !1, this.emit("pause")), this }, c.prototype.wrap = function(t) { var n = this,
                    r = this._readableState,
                    i = !1; for (var e in t.on("end", function() { var e;
                        y("wrapped end"), !r.decoder || r.ended || (e = r.decoder.end()) && e.length && n.push(e), n.push(null) }), t.on("data", function(e) { y("wrapped data"), r.decoder && (e = r.decoder.write(e)), r.objectMode && null == e || (r.objectMode || e && e.length) && (n.push(e) || (i = !0, t.pause())) }), t) void 0 === this[e] && "function" == typeof t[e] && (this[e] = function(e) { return function() { return t[e].apply(t, arguments) } }(e)); for (var a = 0; a < f.length; a++) t.on(f[a], this.emit.bind(this, f[a])); return this._read = function(e) { y("wrapped _read", e), i && (i = !1, t.resume()) }, this }, Object.defineProperty(c.prototype, "readableHighWaterMark", { enumerable: !1, get: function() { return this._readableState.highWaterMark } }), c._fromList = N }).call(this, P(25), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, { 10: 10, 11: 11, 21: 21, 23: 23, 24: 24, 25: 25, 27: 27, 32: 32, 33: 33, 34: 34, 39: 39, 42: 42, 7: 7 }], 30: [function(e, t, n) { "use strict";
        t.exports = a; var r = e(27),
            i = e(10);

        function a(e) { if (!(this instanceof a)) return new a(e);
            r.call(this, e), this._transformState = { afterTransform: function(e, t) { var n = this._transformState;
                    n.transforming = !1; var r = n.writecb; if (!r) return this.emit("error", new Error("write callback called multiple times"));
                    n.writechunk = null, (n.writecb = null) != t && this.push(t), r(e); var i = this._readableState;
                    i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark) }.bind(this), needTransform: !1, transforming: !1, writecb: null, writechunk: null, writeencoding: null }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", o) }

        function o() { var n = this; "function" == typeof this._flush ? this._flush(function(e, t) { s(n, e, t) }) : s(this, null, null) }

        function s(e, t, n) { if (t) return e.emit("error", t); if (null != n && e.push(n), e._writableState.length) throw new Error("Calling transform done when ws.length != 0"); if (e._transformState.transforming) throw new Error("Calling transform done when still transforming"); return e.push(null) }
        i.inherits = e(21), i.inherits(a, r), a.prototype.push = function(e, t) { return this._transformState.needTransform = !1, r.prototype.push.call(this, e, t) }, a.prototype._transform = function(e, t, n) { throw new Error("_transform() is not implemented") }, a.prototype._write = function(e, t, n) { var r, i = this._transformState;
            i.writecb = n, i.writechunk = e, i.writeencoding = t, i.transforming || (r = this._readableState, (i.needTransform || r.needReadable || r.length < r.highWaterMark) && this._read(r.highWaterMark)) }, a.prototype._read = function(e) { var t = this._transformState;
            null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0 }, a.prototype._destroy = function(e, t) { var n = this;
            r.prototype._destroy.call(this, e, function(e) { t(e), n.emit("close") }) } }, { 10: 10, 21: 21, 27: 27 }], 31: [function(A, I, e) {
        (function(e, t, n) { "use strict"; var E = A(24);

            function f(e) { var t = this;
                this.next = null, this.entry = null, this.finish = function() {! function(e, t, n) { var r = e.entry;
                        e.entry = null; for (; r;) { var i = r.callback;
                            t.pendingcb--, i(n), r = r.next }
                        t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e }(t, e) } }
            I.exports = c; var s, u = !e.browser && -1 < ["v0.10", "v0.9."].indexOf(e.version.slice(0, 5)) ? n : E.nextTick;
            c.WritableState = d; var r = A(10);
            r.inherits = A(21); var i = { deprecate: A(44) },
                a = A(34),
                m = A(39).Buffer,
                v = t.Uint8Array || function() {}; var o, l = A(33);

            function y() {}

            function d(e, t) { s = s || A(27), e = e || {}; var n = t instanceof s;
                this.objectMode = !!e.objectMode, n && (this.objectMode = this.objectMode || !!e.writableObjectMode); var r = e.highWaterMark,
                    i = e.writableHighWaterMark,
                    a = this.objectMode ? 16 : 16384;
                this.highWaterMark = r || 0 === r ? r : n && (i || 0 === i) ? i : a, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1; var o = (this.destroyed = !1) === e.decodeStrings;
                this.decodeStrings = !o, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {! function(e, t) { var n = e._writableState,
                            r = n.sync,
                            i = n.writecb; { var a;
                            (function(e) { e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0 })(n), t ? function(e, t, n, r, i) {--t.pendingcb, n ? (E.nextTick(i, r), E.nextTick(S, e, t), e._writableState.errorEmitted = !0, e.emit("error", r)) : (i(r), e._writableState.errorEmitted = !0, e.emit("error", r), S(e, t)) }(e, n, r, t, i) : ((a = g(n)) || n.corked || n.bufferProcessing || !n.bufferedRequest || p(e, n), r ? u(h, e, n, a, i) : h(e, n, a, i)) } }(t, e) }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new f(this) }

            function c(e) { if (s = s || A(27), !(o.call(c, this) || this instanceof s)) return new c(e);
                this._writableState = new d(e, this), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), a.call(this) }

            function T(e, t, n, r, i, a, o) { t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, n ? e._writev(i, t.onwrite) : e._write(i, a, t.onwrite), t.sync = !1 }

            function h(e, t, n, r) { var i, a;
                n || (i = e, 0 === (a = t).length && a.needDrain && (a.needDrain = !1, i.emit("drain"))), t.pendingcb--, r(), S(e, t) }

            function p(e, t) { t.bufferProcessing = !0; var n = t.bufferedRequest; if (e._writev && n && n.next) { var r = t.bufferedRequestCount,
                        i = new Array(r),
                        a = t.corkedRequestsFree;
                    a.entry = n; for (var o = 0, s = !0; n;)(i[o] = n).isBuf || (s = !1), n = n.next, o += 1;
                    i.allBuffers = s, T(e, t, !0, t.length, i, "", a.finish), t.pendingcb++, t.lastBufferedRequest = null, a.next ? (t.corkedRequestsFree = a.next, a.next = null) : t.corkedRequestsFree = new f(t), t.bufferedRequestCount = 0 } else { for (; n;) { var u = n.chunk,
                            l = n.encoding,
                            d = n.callback; if (T(e, t, !1, t.objectMode ? 1 : u.length, u, l, d), n = n.next, t.bufferedRequestCount--, t.writing) break }
                    null === n && (t.lastBufferedRequest = null) }
                t.bufferedRequest = n, t.bufferProcessing = !1 }

            function g(e) { return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing }

            function _(t, n) { t._final(function(e) { n.pendingcb--, e && t.emit("error", e), n.prefinished = !0, t.emit("prefinish"), S(t, n) }) }

            function S(e, t) { var n, r, i = g(t); return i && (n = e, (r = t).prefinished || r.finalCalled || ("function" == typeof n._final ? (r.pendingcb++, r.finalCalled = !0, E.nextTick(_, n, r)) : (r.prefinished = !0, n.emit("prefinish"))), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"))), i }
            r.inherits(c, a), d.prototype.getBuffer = function() { for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next; return t },
                function() { try { Object.defineProperty(d.prototype, "buffer", { get: i.deprecate(function() { return this.getBuffer() }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003") }) } catch (e) {} }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(c, Symbol.hasInstance, { value: function(e) { return !!o.call(this, e) || this === c && (e && e._writableState instanceof d) } })) : o = function(e) { return e instanceof this }, c.prototype.pipe = function() { this.emit("error", new Error("Cannot pipe, not readable")) }, c.prototype.write = function(e, t, n) { var r, i, a, o, s, u, l, d, f, c, h, p = this._writableState,
                        g = !1,
                        _ = !p.objectMode && (r = e, m.isBuffer(r) || r instanceof v); return _ && !m.isBuffer(e) && (i = e, e = m.from(i)), "function" == typeof t && (n = t, t = null), t = _ ? "buffer" : t || p.defaultEncoding, "function" != typeof n && (n = y), p.ended ? (f = this, c = n, h = new Error("write after end"), f.emit("error", h), E.nextTick(c, h)) : (_ || (a = this, o = p, u = n, d = !(l = !0), null === (s = e) ? d = new TypeError("May not write null values to stream") : "string" == typeof s || void 0 === s || o.objectMode || (d = new TypeError("Invalid non-string/buffer chunk")), d && (a.emit("error", d), E.nextTick(u, d), l = !1), l)) && (p.pendingcb++, g = function(e, t, n, r, i, a) {
                        { var o;
                            n || (o = function(e, t, n) { e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = m.from(t, n)); return t }(t, r, i), r !== o && (n = !0, i = "buffer", r = o)) } var s = t.objectMode ? 1 : r.length;
                        t.length += s; var u = t.length < t.highWaterMark;
                        u || (t.needDrain = !0); { var l;
                            t.writing || t.corked ? (l = t.lastBufferedRequest, t.lastBufferedRequest = { chunk: r, encoding: i, isBuf: n, callback: a, next: null }, l ? l.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1) : T(e, t, !1, s, r, i, a) } return u }(this, p, _, e, t, n)), g }, c.prototype.cork = function() { this._writableState.corked++ }, c.prototype.uncork = function() { var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || p(this, e)) }, c.prototype.setDefaultEncoding = function(e) { if ("string" == typeof e && (e = e.toLowerCase()), !(-1 < ["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()))) throw new TypeError("Unknown encoding: " + e); return this._writableState.defaultEncoding = e, this }, Object.defineProperty(c.prototype, "writableHighWaterMark", { enumerable: !1, get: function() { return this._writableState.highWaterMark } }), c.prototype._write = function(e, t, n) { n(new Error("_write() is not implemented")) }, c.prototype._writev = null, c.prototype.end = function(e, t, n) { var r = this._writableState; "function" == typeof e ? (n = e, t = e = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || r.finished || function(e, t, n) { t.ending = !0, S(e, t), n && (t.finished ? E.nextTick(n) : e.once("finish", n));
                        t.ended = !0, e.writable = !1 }(this, r, n) }, Object.defineProperty(c.prototype, "destroyed", { get: function() { return void 0 !== this._writableState && this._writableState.destroyed }, set: function(e) { this._writableState && (this._writableState.destroyed = e) } }), c.prototype.destroy = l.destroy, c.prototype._undestroy = l.undestroy, c.prototype._destroy = function(e, t) { this.end(), t(e) } }).call(this, A(25), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, A(43).setImmediate) }, { 10: 10, 21: 21, 24: 24, 25: 25, 27: 27, 33: 33, 34: 34, 39: 39, 43: 43, 44: 44 }], 32: [function(e, t, n) { "use strict"; var s = e(39).Buffer,
            r = e(7);

        function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.head = null, this.tail = null, this.length = 0 }
        t.exports = (i.prototype.push = function(e) { var t = { data: e, next: null };
            0 < this.length ? this.tail.next = t : this.head = t, this.tail = t, ++this.length }, i.prototype.unshift = function(e) { var t = { data: e, next: this.head };
            0 === this.length && (this.tail = t), this.head = t, ++this.length }, i.prototype.shift = function() { if (0 !== this.length) { var e = this.head.data; return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e } }, i.prototype.clear = function() { this.head = this.tail = null, this.length = 0 }, i.prototype.join = function(e) { if (0 === this.length) return ""; for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data; return n }, i.prototype.concat = function(e) { if (0 === this.length) return s.alloc(0); if (1 === this.length) return this.head.data; for (var t, n, r, i = s.allocUnsafe(e >>> 0), a = this.head, o = 0; a;) t = a.data, n = i, r = o, t.copy(n, r), o += a.data.length, a = a.next; return i }, i), r && r.inspect && r.inspect.custom && (t.exports.prototype[r.inspect.custom] = function() { var e = r.inspect({ length: this.length }); return this.constructor.name + " " + e }) }, { 39: 39, 7: 7 }], 33: [function(e, t, n) { "use strict"; var a = e(24);

        function o(e, t) { e.emit("error", t) }
        t.exports = { destroy: function(e, t) { var n = this,
                    r = this._readableState && this._readableState.destroyed,
                    i = this._writableState && this._writableState.destroyed; return r || i ? t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || a.nextTick(o, this, e) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, function(e) {!t && e ? (a.nextTick(o, n, e), n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e) })), this }, undestroy: function() { this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1) } } }, { 24: 24 }], 34: [function(e, t, n) { t.exports = e(11).EventEmitter }, { 11: 11 }], 35: [function(e, t, n) { t.exports = e(36).PassThrough }, { 36: 36 }], 36: [function(e, t, n) {
        (((n = t.exports = e(29)).Stream = n).Readable = n).Writable = e(31), n.Duplex = e(27), n.Transform = e(30), n.PassThrough = e(28) }, { 27: 27, 28: 28, 29: 29, 30: 30, 31: 31 }], 37: [function(e, t, n) { t.exports = e(36).Transform }, { 36: 36 }], 38: [function(e, t, n) { t.exports = e(31) }, { 31: 31 }], 39: [function(e, t, n) { var r = e(8),
            i = r.Buffer;

        function a(e, t) { for (var n in e) t[n] = e[n] }

        function o(e, t, n) { return i(e, t, n) }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (a(r, n), n.Buffer = o), a(i, o), o.from = function(e, t, n) { if ("number" == typeof e) throw new TypeError("Argument must not be a number"); return i(e, t, n) }, o.alloc = function(e, t, n) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); var r = i(e); return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r }, o.allocUnsafe = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return i(e) }, o.allocUnsafeSlow = function(e) { if ("number" != typeof e) throw new TypeError("Argument must be a number"); return r.SlowBuffer(e) } }, { 8: 8 }], 40: [function(Y, e, t) {
        (function(j) {! function(u) { u.parser = function(e, t) { return new i(e, t) }, u.SAXParser = i, u.SAXStream = o, u.createStream = function(e, t) { return new o(e, t) }, u.MAX_BUFFER_LENGTH = 65536; var r, l = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

                function i(e, t) { if (!(this instanceof i)) return new i(e, t); var n = this;! function(e) { for (var t = 0, n = l.length; t < n; t++) e[l[t]] = "" }(n), n.q = n.c = "", n.bufferCheckPosition = u.MAX_BUFFER_LENGTH, n.opt = t || {}, n.opt.lowercase = n.opt.lowercase || n.opt.lowercasetags, n.looseCase = n.opt.lowercase ? "toLowerCase" : "toUpperCase", n.tags = [], n.closed = n.closedRoot = n.sawRoot = !1, n.tag = n.error = null, n.strict = !!e, n.noscript = !(!e && !n.opt.noscript), n.state = R.BEGIN, n.strictEntities = n.opt.strictEntities, n.ENTITIES = n.strictEntities ? Object.create(u.XML_ENTITIES) : Object.create(u.ENTITIES), n.attribList = [], n.opt.xmlns && (n.ns = Object.create(g)), n.trackPosition = !1 !== n.opt.position, n.trackPosition && (n.position = n.line = n.column = 0), D(n, "onready") }
                u.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function(e) {
                    function t() {} return t.prototype = e, new t }), Object.keys || (Object.keys = function(e) { var t = []; for (var n in e) e.hasOwnProperty(n) && t.push(n); return t }), i.prototype = { end: function() { O(this) }, write: function(e) { var t = this; if (this.error) throw this.error; if (t.closed) return w(t, "Cannot write after close. Assign an onready handler."); if (null === e) return O(t); "object" == typeof e && (e = e.toString()); var n, r, i = 0,
                            a = ""; for (; a = B(e, i++), t.c = a;) switch (t.trackPosition && (t.position++, "\n" === a ? (t.line++, t.column = 0) : t.column++), t.state) {
                            case R.BEGIN:
                                if (t.state = R.BEGIN_WHITESPACE, "\ufeff" === a) continue;
                                k(t, a); continue;
                            case R.BEGIN_WHITESPACE:
                                k(t, a); continue;
                            case R.TEXT:
                                if (t.sawRoot && !t.closedRoot) { for (var o = i - 1; a && "<" !== a && "&" !== a;)(a = B(e, i++)) && t.trackPosition && (t.position++, "\n" === a ? (t.line++, t.column = 0) : t.column++);
                                    t.textNode += e.substring(o, i - 1) } "<" !== a || t.sawRoot && t.closedRoot && !t.strict ? (!S(_, a) || t.sawRoot && !t.closedRoot || P(t, "Text data outside of root node."), "&" === a ? t.state = R.TEXT_ENTITY : t.textNode += a) : (t.state = R.OPEN_WAKA, t.startTagPosition = t.position); continue;
                            case R.SCRIPT:
                                "<" === a ? t.state = R.SCRIPT_ENDING : t.script += a; continue;
                            case R.SCRIPT_ENDING:
                                "/" === a ? t.state = R.CLOSE_TAG : (t.script += "<" + a, t.state = R.SCRIPT); continue;
                            case R.OPEN_WAKA:
                                var s; "!" === a ? (t.state = R.SGML_DECL, t.sgmlDecl = "") : T(_, a) || (T(E, a) ? (t.state = R.OPEN_TAG, t.tagName = a) : "/" === a ? (t.state = R.CLOSE_TAG, t.tagName = "") : "?" === a ? (t.state = R.PROC_INST, t.procInstName = t.procInstBody = "") : (P(t, "Unencoded <"), t.startTagPosition + 1 < t.position && (s = t.position - t.startTagPosition, a = new Array(s).join(" ") + a), t.textNode += "<" + a, t.state = R.TEXT)); continue;
                            case R.SGML_DECL:
                                (t.sgmlDecl + a).toUpperCase() === c ? (M(t, "onopencdata"), t.state = R.CDATA, t.sgmlDecl = "", t.cdata = "") : t.sgmlDecl + a === "--" ? (t.state = R.COMMENT, t.comment = "", t.sgmlDecl = "") : (t.sgmlDecl + a).toUpperCase() === h ? (t.state = R.DOCTYPE, (t.doctype || t.sawRoot) && P(t, "Inappropriately located doctype declaration"), t.doctype = "", t.sgmlDecl = "") : ">" === a ? (M(t, "onsgmldeclaration", t.sgmlDecl), t.sgmlDecl = "", t.state = R.TEXT) : (T(d, a) && (t.state = R.SGML_DECL_QUOTED), t.sgmlDecl += a); continue;
                            case R.SGML_DECL_QUOTED:
                                a === t.q && (t.state = R.SGML_DECL, t.q = ""), t.sgmlDecl += a; continue;
                            case R.DOCTYPE:
                                ">" === a ? (t.state = R.TEXT, M(t, "ondoctype", t.doctype), t.doctype = !0) : (t.doctype += a, "[" === a ? t.state = R.DOCTYPE_DTD : T(d, a) && (t.state = R.DOCTYPE_QUOTED, t.q = a)); continue;
                            case R.DOCTYPE_QUOTED:
                                t.doctype += a, a === t.q && (t.q = "", t.state = R.DOCTYPE); continue;
                            case R.DOCTYPE_DTD:
                                t.doctype += a, "]" === a ? t.state = R.DOCTYPE : T(d, a) && (t.state = R.DOCTYPE_DTD_QUOTED, t.q = a); continue;
                            case R.DOCTYPE_DTD_QUOTED:
                                t.doctype += a, a === t.q && (t.state = R.DOCTYPE_DTD, t.q = ""); continue;
                            case R.COMMENT:
                                "-" === a ? t.state = R.COMMENT_ENDING : t.comment += a; continue;
                            case R.COMMENT_ENDING:
                                "-" === a ? (t.state = R.COMMENT_ENDED, t.comment = C(t.opt, t.comment), t.comment && M(t, "oncomment", t.comment), t.comment = "") : (t.comment += "-" + a, t.state = R.COMMENT); continue;
                            case R.COMMENT_ENDED:
                                ">" !== a ? (P(t, "Malformed comment"), t.comment += "--" + a, t.state = R.COMMENT) : t.state = R.TEXT; continue;
                            case R.CDATA:
                                "]" === a ? t.state = R.CDATA_ENDING : t.cdata += a; continue;
                            case R.CDATA_ENDING:
                                "]" === a ? t.state = R.CDATA_ENDING_2 : (t.cdata += "]" + a, t.state = R.CDATA); continue;
                            case R.CDATA_ENDING_2:
                                ">" === a ? (t.cdata && M(t, "oncdata", t.cdata), M(t, "onclosecdata"), t.cdata = "", t.state = R.TEXT) : "]" === a ? t.cdata += "]" : (t.cdata += "]]" + a, t.state = R.CDATA); continue;
                            case R.PROC_INST:
                                "?" === a ? t.state = R.PROC_INST_ENDING : T(_, a) ? t.state = R.PROC_INST_BODY : t.procInstName += a; continue;
                            case R.PROC_INST_BODY:
                                if (!t.procInstBody && T(_, a)) continue; "?" === a ? t.state = R.PROC_INST_ENDING : t.procInstBody += a; continue;
                            case R.PROC_INST_ENDING:
                                ">" === a ? (M(t, "onprocessinginstruction", { name: t.procInstName, body: t.procInstBody }), t.procInstName = t.procInstBody = "", t.state = R.TEXT) : (t.procInstBody += "?" + a, t.state = R.PROC_INST_BODY); continue;
                            case R.OPEN_TAG:
                                T(m, a) ? t.tagName += a : (function(e) { e.strict || (e.tagName = e.tagName[e.looseCase]()); var t = e.tags[e.tags.length - 1] || e,
                                        n = e.tag = { name: e.tagName, attributes: {} };
                                    e.opt.xmlns && (n.ns = t.ns);
                                    e.attribList.length = 0, M(e, "onopentagstart", n) }(t), ">" === a ? F(t) : "/" === a ? t.state = R.OPEN_TAG_SLASH : (S(_, a) && P(t, "Invalid character in tag name"), t.state = R.ATTRIB)); continue;
                            case R.OPEN_TAG_SLASH:
                                ">" === a ? (F(t, !0), U(t)) : (P(t, "Forward-slash in opening tag not followed by >"), t.state = R.ATTRIB); continue;
                            case R.ATTRIB:
                                if (T(_, a)) continue; ">" === a ? F(t) : "/" === a ? t.state = R.OPEN_TAG_SLASH : T(E, a) ? (t.attribName = a, t.attribValue = "", t.state = R.ATTRIB_NAME) : P(t, "Invalid attribute name"); continue;
                            case R.ATTRIB_NAME:
                                "=" === a ? t.state = R.ATTRIB_VALUE : ">" === a ? (P(t, "Attribute without value"), t.attribValue = t.attribName, x(t), F(t)) : T(_, a) ? t.state = R.ATTRIB_NAME_SAW_WHITE : T(m, a) ? t.attribName += a : P(t, "Invalid attribute name"); continue;
                            case R.ATTRIB_NAME_SAW_WHITE:
                                if ("=" === a) t.state = R.ATTRIB_VALUE;
                                else { if (T(_, a)) continue;
                                    P(t, "Attribute without value"), t.tag.attributes[t.attribName] = "", t.attribValue = "", M(t, "onattribute", { name: t.attribName, value: "" }), t.attribName = "", ">" === a ? F(t) : T(E, a) ? (t.attribName = a, t.state = R.ATTRIB_NAME) : (P(t, "Invalid attribute name"), t.state = R.ATTRIB) } continue;
                            case R.ATTRIB_VALUE:
                                if (T(_, a)) continue;
                                T(d, a) ? (t.q = a, t.state = R.ATTRIB_VALUE_QUOTED) : (P(t, "Unquoted attribute value"), t.state = R.ATTRIB_VALUE_UNQUOTED, t.attribValue = a); continue;
                            case R.ATTRIB_VALUE_QUOTED:
                                if (a !== t.q) { "&" === a ? t.state = R.ATTRIB_VALUE_ENTITY_Q : t.attribValue += a; continue }
                                x(t), t.q = "", t.state = R.ATTRIB_VALUE_CLOSED; continue;
                            case R.ATTRIB_VALUE_CLOSED:
                                T(_, a) ? t.state = R.ATTRIB : ">" === a ? F(t) : "/" === a ? t.state = R.OPEN_TAG_SLASH : T(E, a) ? (P(t, "No whitespace between attributes"), t.attribName = a, t.attribValue = "", t.state = R.ATTRIB_NAME) : P(t, "Invalid attribute name"); continue;
                            case R.ATTRIB_VALUE_UNQUOTED:
                                if (S(f, a)) { "&" === a ? t.state = R.ATTRIB_VALUE_ENTITY_U : t.attribValue += a; continue }
                                x(t), ">" === a ? F(t) : t.state = R.ATTRIB; continue;
                            case R.CLOSE_TAG:
                                if (t.tagName) ">" === a ? U(t) : T(m, a) ? t.tagName += a : t.script ? (t.script += "</" + t.tagName, t.tagName = "", t.state = R.SCRIPT) : (S(_, a) && P(t, "Invalid tagname in closing tag"), t.state = R.CLOSE_TAG_SAW_WHITE);
                                else { if (T(_, a)) continue;
                                    S(E, a) ? t.script ? (t.script += "</" + a, t.state = R.SCRIPT) : P(t, "Invalid tagname in closing tag.") : t.tagName = a } continue;
                            case R.CLOSE_TAG_SAW_WHITE:
                                if (T(_, a)) continue; ">" === a ? U(t) : P(t, "Invalid characters in closing tag"); continue;
                            case R.TEXT_ENTITY:
                            case R.ATTRIB_VALUE_ENTITY_Q:
                            case R.ATTRIB_VALUE_ENTITY_U:
                                switch (t.state) {
                                    case R.TEXT_ENTITY:
                                        n = R.TEXT, r = "textNode"; break;
                                    case R.ATTRIB_VALUE_ENTITY_Q:
                                        n = R.ATTRIB_VALUE_QUOTED, r = "attribValue"; break;
                                    case R.ATTRIB_VALUE_ENTITY_U:
                                        n = R.ATTRIB_VALUE_UNQUOTED, r = "attribValue" } ";" === a ? (t[r] += function(e) { var t, n = e.entity,
                                        r = n.toLowerCase(),
                                        i = ""; if (e.ENTITIES[n]) return e.ENTITIES[n]; if (e.ENTITIES[r]) return e.ENTITIES[r]; "#" === (n = r).charAt(0) && (i = "x" === n.charAt(1) ? (n = n.slice(2), (t = parseInt(n, 16)).toString(16)) : (n = n.slice(1), (t = parseInt(n, 10)).toString(10))); return n = n.replace(/^0+/, ""), i.toLowerCase() === n ? String.fromCodePoint(t) : (P(e, "Invalid character entity"), "&" + e.entity + ";") }(t), t.entity = "", t.state = n) : T(t.entity.length ? y : v, a) ? t.entity += a : (P(t, "Invalid character in entity name"), t[r] += "&" + t.entity + a, t.entity = "", t.state = n); continue;
                            default:
                                throw new Error(t, "Unknown state: " + t.state) }
                        t.position >= t.bufferCheckPosition && function(e) { for (var t = Math.max(u.MAX_BUFFER_LENGTH, 10), n = 0, r = 0, i = l.length; r < i; r++) { var a = e[l[r]].length; if (t < a) switch (l[r]) {
                                    case "textNode":
                                        N(e); break;
                                    case "cdata":
                                        M(e, "oncdata", e.cdata), e.cdata = ""; break;
                                    case "script":
                                        M(e, "onscript", e.script), e.script = ""; break;
                                    default:
                                        w(e, "Max buffer length exceeded: " + l[r]) }
                                n = Math.max(n, a) } var o = u.MAX_BUFFER_LENGTH - n;
                            e.bufferCheckPosition = o + e.position }(t); return t }, resume: function() { return this.error = null, this }, close: function() { return this.write(null) }, flush: function() { var e;
                        N(e = this), "" !== e.cdata && (M(e, "oncdata", e.cdata), e.cdata = ""), "" !== e.script && (M(e, "onscript", e.script), e.script = "") } }; try { r = Y(41).Stream } catch (e) { r = function() {} } var a = u.EVENTS.filter(function(e) { return "error" !== e && "end" !== e });

                function o(e, t) { if (!(this instanceof o)) return new o(e, t);
                    r.apply(this), this._parser = new i(e, t), this.writable = !0, this.readable = !0; var n = this;
                    this._parser.onend = function() { n.emit("end") }, this._parser.onerror = function(e) { n.emit("error", e), n._parser.error = null }, this._decoder = null, a.forEach(function(t) { Object.defineProperty(n, "on" + t, { get: function() { return n._parser["on" + t] }, set: function(e) { if (!e) return n.removeAllListeners(t), n._parser["on" + t] = e;
                                n.on(t, e) }, enumerable: !0, configurable: !1 }) }) }(o.prototype = Object.create(r.prototype, { constructor: { value: o } })).write = function(e) { var t; return "function" == typeof j && "function" == typeof j.isBuffer && j.isBuffer(e) && (this._decoder || (t = Y(42).StringDecoder, this._decoder = new t("utf8")), e = this._decoder.write(e)), this._parser.write(e.toString()), this.emit("data", e), !0 }, o.prototype.end = function(e) { return e && e.length && this.write(e), this._parser.end(), !0 }, o.prototype.on = function(t, e) { var n = this; return n._parser["on" + t] || -1 === a.indexOf(t) || (n._parser["on" + t] = function() { var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                        e.splice(0, 0, t), n.emit.apply(n, e) }), r.prototype.on.call(n, t, e) }; var e = "0124356789",
                    t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                    d = "'\"",
                    f = (_ = "\r\n\t ") + ">",
                    c = "[CDATA[",
                    h = "DOCTYPE",
                    s = "http://www.w3.org/XML/1998/namespace",
                    p = "http://www.w3.org/2000/xmlns/",
                    g = { xml: s, xmlns: p },
                    _ = n(_),
                    e = n(e),
                    t = n(t),
                    E = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                    m = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/,
                    v = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                    y = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040\.\d-]/;

                function n(e) { return e.split("").reduce(function(e, t) { return e[t] = !0, e }, {}) }

                function T(e, t) { return n = e, "[object RegExp]" === Object.prototype.toString.call(n) ? t.match(e) : e[t]; var n }

                function S(e, t) { return !T(e, t) }
                d = n(d), f = n(f); var A, I, R = 0; for (var b in u.STATE = { BEGIN: R++, BEGIN_WHITESPACE: R++, TEXT: R++, TEXT_ENTITY: R++, OPEN_WAKA: R++, SGML_DECL: R++, SGML_DECL_QUOTED: R++, DOCTYPE: R++, DOCTYPE_QUOTED: R++, DOCTYPE_DTD: R++, DOCTYPE_DTD_QUOTED: R++, COMMENT_STARTING: R++, COMMENT: R++, COMMENT_ENDING: R++, COMMENT_ENDED: R++, CDATA: R++, CDATA_ENDING: R++, CDATA_ENDING_2: R++, PROC_INST: R++, PROC_INST_BODY: R++, PROC_INST_ENDING: R++, OPEN_TAG: R++, OPEN_TAG_SLASH: R++, ATTRIB: R++, ATTRIB_NAME: R++, ATTRIB_NAME_SAW_WHITE: R++, ATTRIB_VALUE: R++, ATTRIB_VALUE_QUOTED: R++, ATTRIB_VALUE_CLOSED: R++, ATTRIB_VALUE_UNQUOTED: R++, ATTRIB_VALUE_ENTITY_Q: R++, ATTRIB_VALUE_ENTITY_U: R++, CLOSE_TAG: R++, CLOSE_TAG_SAW_WHITE: R++, SCRIPT: R++, SCRIPT_ENDING: R++ }, u.XML_ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'" }, u.ENTITIES = { amp: "&", gt: ">", lt: "<", quot: '"', apos: "'", AElig: 198, Aacute: 193, Acirc: 194, Agrave: 192, Aring: 197, Atilde: 195, Auml: 196, Ccedil: 199, ETH: 208, Eacute: 201, Ecirc: 202, Egrave: 200, Euml: 203, Iacute: 205, Icirc: 206, Igrave: 204, Iuml: 207, Ntilde: 209, Oacute: 211, Ocirc: 212, Ograve: 210, Oslash: 216, Otilde: 213, Ouml: 214, THORN: 222, Uacute: 218, Ucirc: 219, Ugrave: 217, Uuml: 220, Yacute: 221, aacute: 225, acirc: 226, aelig: 230, agrave: 224, aring: 229, atilde: 227, auml: 228, ccedil: 231, eacute: 233, ecirc: 234, egrave: 232, eth: 240, euml: 235, iacute: 237, icirc: 238, igrave: 236, iuml: 239, ntilde: 241, oacute: 243, ocirc: 244, ograve: 242, oslash: 248, otilde: 245, ouml: 246, szlig: 223, thorn: 254, uacute: 250, ucirc: 251, ugrave: 249, uuml: 252, yacute: 253, yuml: 255, copy: 169, reg: 174, nbsp: 160, iexcl: 161, cent: 162, pound: 163, curren: 164, yen: 165, brvbar: 166, sect: 167, uml: 168, ordf: 170, laquo: 171, not: 172, shy: 173, macr: 175, deg: 176, plusmn: 177, sup1: 185, sup2: 178, sup3: 179, acute: 180, micro: 181, para: 182, middot: 183, cedil: 184, ordm: 186, raquo: 187, frac14: 188, frac12: 189, frac34: 190, iquest: 191, times: 215, divide: 247, OElig: 338, oelig: 339, Scaron: 352, scaron: 353, Yuml: 376, fnof: 402, circ: 710, tilde: 732, Alpha: 913, Beta: 914, Gamma: 915, Delta: 916, Epsilon: 917, Zeta: 918, Eta: 919, Theta: 920, Iota: 921, Kappa: 922, Lambda: 923, Mu: 924, Nu: 925, Xi: 926, Omicron: 927, Pi: 928, Rho: 929, Sigma: 931, Tau: 932, Upsilon: 933, Phi: 934, Chi: 935, Psi: 936, Omega: 937, alpha: 945, beta: 946, gamma: 947, delta: 948, epsilon: 949, zeta: 950, eta: 951, theta: 952, iota: 953, kappa: 954, lambda: 955, mu: 956, nu: 957, xi: 958, omicron: 959, pi: 960, rho: 961, sigmaf: 962, sigma: 963, tau: 964, upsilon: 965, phi: 966, chi: 967, psi: 968, omega: 969, thetasym: 977, upsih: 978, piv: 982, ensp: 8194, emsp: 8195, thinsp: 8201, zwnj: 8204, zwj: 8205, lrm: 8206, rlm: 8207, ndash: 8211, mdash: 8212, lsquo: 8216, rsquo: 8217, sbquo: 8218, ldquo: 8220, rdquo: 8221, bdquo: 8222, dagger: 8224, Dagger: 8225, bull: 8226, hellip: 8230, permil: 8240, prime: 8242, Prime: 8243, lsaquo: 8249, rsaquo: 8250, oline: 8254, frasl: 8260, euro: 8364, image: 8465, weierp: 8472, real: 8476, trade: 8482, alefsym: 8501, larr: 8592, uarr: 8593, rarr: 8594, darr: 8595, harr: 8596, crarr: 8629, lArr: 8656, uArr: 8657, rArr: 8658, dArr: 8659, hArr: 8660, forall: 8704, part: 8706, exist: 8707, empty: 8709, nabla: 8711, isin: 8712, notin: 8713, ni: 8715, prod: 8719, sum: 8721, minus: 8722, lowast: 8727, radic: 8730, prop: 8733, infin: 8734, ang: 8736, and: 8743, or: 8744, cap: 8745, cup: 8746, int: 8747, there4: 8756, sim: 8764, cong: 8773, asymp: 8776, ne: 8800, equiv: 8801, le: 8804, ge: 8805, sub: 8834, sup: 8835, nsub: 8836, sube: 8838, supe: 8839, oplus: 8853, otimes: 8855, perp: 8869, sdot: 8901, lceil: 8968, rceil: 8969, lfloor: 8970, rfloor: 8971, lang: 9001, rang: 9002, loz: 9674, spades: 9824, clubs: 9827, hearts: 9829, diams: 9830 }, Object.keys(u.ENTITIES).forEach(function(e) { var t = u.ENTITIES[e],
                            n = "number" == typeof t ? String.fromCharCode(t) : t;
                        u.ENTITIES[e] = n }), u.STATE) u.STATE[u.STATE[b]] = b;

                function D(e, t, n) { e[t] && e[t](n) }

                function M(e, t, n) { e.textNode && N(e), D(e, t, n) }

                function N(e) { e.textNode = C(e.opt, e.textNode), e.textNode && D(e, "ontext", e.textNode), e.textNode = "" }

                function C(e, t) { return e.trim && (t = t.trim()), e.normalize && (t = t.replace(/\s+/g, " ")), t }

                function w(e, t) { return N(e), e.trackPosition && (t += "\nLine: " + e.line + "\nColumn: " + e.column + "\nChar: " + e.c), t = new Error(t), e.error = t, D(e, "onerror", t), e }

                function O(e) { return e.sawRoot && !e.closedRoot && P(e, "Unclosed root tag"), e.state !== R.BEGIN && e.state !== R.BEGIN_WHITESPACE && e.state !== R.TEXT && w(e, "Unexpected end"), N(e), e.c = "", e.closed = !0, D(e, "onend"), i.call(e, e.strict, e.opt), e }

                function P(e, t) { if ("object" != typeof e || !(e instanceof i)) throw new Error("bad call to strictFail");
                    e.strict && w(e, t) }

                function L(e, t) { var n = e.indexOf(":") < 0 ? ["", e] : e.split(":"),
                        r = n[0],
                        i = n[1]; return t && "xmlns" === e && (r = "xmlns", i = ""), { prefix: r, local: i } }

                function x(e) { var t, n, r, i, a;
                    e.strict || (e.attribName = e.attribName[e.looseCase]()), -1 !== e.attribList.indexOf(e.attribName) || e.tag.attributes.hasOwnProperty(e.attribName) || (e.opt.xmlns ? (n = (t = L(e.attribName, !0)).prefix, r = t.local, "xmlns" === n && ("xml" === r && e.attribValue !== s ? P(e, "xml: prefix must be bound to " + s + "\nActual: " + e.attribValue) : "xmlns" === r && e.attribValue !== p ? P(e, "xmlns: prefix must be bound to " + p + "\nActual: " + e.attribValue) : (i = e.tag, a = e.tags[e.tags.length - 1] || e, i.ns === a.ns && (i.ns = Object.create(a.ns)), i.ns[r] = e.attribValue)), e.attribList.push([e.attribName, e.attribValue])) : (e.tag.attributes[e.attribName] = e.attribValue, M(e, "onattribute", { name: e.attribName, value: e.attribValue }))), e.attribName = e.attribValue = "" }

                function F(t, e) { if (t.opt.xmlns) { var n = t.tag,
                            r = L(t.tagName);
                        n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (P(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), n.uri = r.prefix); var i = t.tags[t.tags.length - 1] || t;
                        n.ns && i.ns !== n.ns && Object.keys(n.ns).forEach(function(e) { M(t, "onopennamespace", { prefix: e, uri: n.ns[e] }) }); for (var a = 0, o = t.attribList.length; a < o; a++) { var s = t.attribList[a],
                                u = s[0],
                                l = s[1],
                                d = L(u, !0),
                                f = d.prefix,
                                c = d.local,
                                h = "" !== f && n.ns[f] || "",
                                p = { name: u, value: l, prefix: f, local: c, uri: h };
                            f && "xmlns" !== f && !h && (P(t, "Unbound namespace prefix: " + JSON.stringify(f)), p.uri = f), t.tag.attributes[u] = p, M(t, "onattribute", p) }
                        t.attribList.length = 0 }
                    t.tag.isSelfClosing = !!e, t.sawRoot = !0, t.tags.push(t.tag), M(t, "onopentag", t.tag), e || (t.noscript || "script" !== t.tagName.toLowerCase() ? t.state = R.TEXT : t.state = R.SCRIPT, t.tag = null, t.tagName = ""), t.attribName = t.attribValue = "", t.attribList.length = 0 }

                function U(n) { if (!n.tagName) return P(n, "Weird empty close tag."), n.textNode += "</>", void(n.state = R.TEXT); if (n.script) { if ("script" !== n.tagName) return n.script += "</" + n.tagName + ">", n.tagName = "", void(n.state = R.SCRIPT);
                        M(n, "onscript", n.script), n.script = "" } var e = n.tags.length,
                        t = n.tagName;
                    n.strict || (t = t[n.looseCase]()); for (var r = t; e--;) { if (n.tags[e].name === r) break;
                        P(n, "Unexpected close tag") } if (e < 0) return P(n, "Unmatched closing tag: " + n.tagName), n.textNode += "</" + n.tagName + ">", void(n.state = R.TEXT);
                    n.tagName = t; for (var i = n.tags.length; i-- > e;) { var a = n.tag = n.tags.pop();
                        n.tagName = n.tag.name, M(n, "onclosetag", n.tagName); var o = {}; for (var s in a.ns) o[s] = a.ns[s]; var u = n.tags[n.tags.length - 1] || n;
                        n.opt.xmlns && a.ns !== u.ns && Object.keys(a.ns).forEach(function(e) { var t = a.ns[e];
                            M(n, "onclosenamespace", { prefix: e, uri: t }) }) }
                    0 === e && (n.closedRoot = !0), n.tagName = n.attribValue = n.attribName = "", n.attribList.length = 0, n.state = R.TEXT }

                function k(e, t) { "<" === t ? (e.state = R.OPEN_WAKA, e.startTagPosition = e.position) : S(_, t) && (P(e, "Non-whitespace before first tag."), e.textNode = t, e.state = R.TEXT) }

                function B(e, t) { var n = ""; return t < e.length && (n = e.charAt(t)), n }

                function G() { var e, t, n = [],
                        r = -1,
                        i = arguments.length; if (!i) return ""; for (var a = ""; ++r < i;) { var o = Number(arguments[r]); if (!isFinite(o) || o < 0 || 1114111 < o || I(o) !== o) throw RangeError("Invalid code point: " + o);
                        o <= 65535 ? n.push(o) : (e = 55296 + ((o -= 65536) >> 10), t = o % 1024 + 56320, n.push(e, t)), (r + 1 === i || 16384 < n.length) && (a += A.apply(null, n), n.length = 0) } return a }
                R = u.STATE, String.fromCodePoint || (A = String.fromCharCode, I = Math.floor, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", { value: G, configurable: !0, writable: !0 }) : String.fromCodePoint = G) }(void 0 === t ? this.sax = {} : t) }).call(this, Y(8).Buffer) }, { 41: 41, 42: 42, 8: 8 }], 41: [function(e, t, n) { t.exports = r; var d = e(11).EventEmitter;

        function r() { d.call(this) }
        e(21)(r, d), r.Readable = e(36), r.Writable = e(38), r.Duplex = e(26), r.Transform = e(37), r.PassThrough = e(35), (r.Stream = r).prototype.pipe = function(t, e) { var n = this;

            function r(e) { t.writable && !1 === t.write(e) && n.pause && n.pause() }

            function i() { n.readable && n.resume && n.resume() }
            n.on("data", r), t.on("drain", i), t._isStdio || e && !1 === e.end || (n.on("end", o), n.on("close", s)); var a = !1;

            function o() { a || (a = !0, t.end()) }

            function s() { a || (a = !0, "function" == typeof t.destroy && t.destroy()) }

            function u(e) { if (l(), 0 === d.listenerCount(this, "error")) throw e }

            function l() { n.removeListener("data", r), t.removeListener("drain", i), n.removeListener("end", o), n.removeListener("close", s), n.removeListener("error", u), t.removeListener("error", u), n.removeListener("end", l), n.removeListener("close", l), t.removeListener("close", l) } return n.on("error", u), t.on("error", u), n.on("end", l), n.on("close", l), t.on("close", l), t.emit("pipe", n), t } }, { 11: 11, 21: 21, 26: 26, 35: 35, 36: 36, 37: 37, 38: 38 }], 42: [function(e, t, n) { "use strict"; var r = e(39).Buffer,
            i = r.isEncoding || function(e) { switch ((e = "" + e) && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1 } };

        function a(e) { var t = function(e) { if (!e) return "utf8"; for (var t;;) switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t) return;
                        e = ("" + e).toLowerCase(), t = !0 } }(e); if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e); return t || e }

        function o(e) { var t; switch (this.encoding = a(e), this.encoding) {
                case "utf16le":
                    this.text = l, this.end = d, t = 4; break;
                case "utf8":
                    this.fillLast = u, t = 4; break;
                case "base64":
                    this.text = f, this.end = c, t = 3; break;
                default:
                    return this.write = h, void(this.end = p) }
            this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t) }

        function s(e) { return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2 }

        function u(e) { var t = this.lastTotal - this.lastNeed,
                n = function(e, t) { if (128 != (192 & t[0])) return e.lastNeed = 0, "ï¿½"; if (1 < e.lastNeed && 1 < t.length) { if (128 != (192 & t[1])) return e.lastNeed = 1, "ï¿½"; if (2 < e.lastNeed && 2 < t.length && 128 != (192 & t[2])) return e.lastNeed = 2, "ï¿½" } }(this, e); return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length)) }

        function l(e, t) { if ((e.length - t) % 2 != 0) return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1); var n = e.toString("utf16le", t); if (n) { var r = n.charCodeAt(n.length - 1); if (55296 <= r && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1) } return n }

        function d(e) { var t = e && e.length ? this.write(e) : ""; if (this.lastNeed) { var n = this.lastTotal - this.lastNeed; return t + this.lastChar.toString("utf16le", 0, n) } return t }

        function f(e, t) { var n = (e.length - t) % 3; return 0 == n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 == n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n)) }

        function c(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t }

        function h(e) { return e.toString(this.encoding) }

        function p(e) { return e && e.length ? this.write(e) : "" }(n.StringDecoder = o).prototype.write = function(e) { if (0 === e.length) return ""; var t, n; if (this.lastNeed) { if (void 0 === (t = this.fillLast(e))) return "";
                n = this.lastNeed, this.lastNeed = 0 } else n = 0; return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || "" }, o.prototype.end = function(e) { var t = e && e.length ? this.write(e) : ""; return this.lastNeed ? t + "ï¿½" : t }, o.prototype.text = function(e, t) { var n = function(e, t, n) { var r = t.length - 1; if (r < n) return 0; var i = s(t[r]); if (0 <= i) return 0 < i && (e.lastNeed = i - 1), i; if (--r < n || -2 === i) return 0; if (0 <= (i = s(t[r]))) return 0 < i && (e.lastNeed = i - 2), i; if (--r < n || -2 === i) return 0; if (0 <= (i = s(t[r]))) return 0 < i && (2 === i ? i = 0 : e.lastNeed = i - 3), i; return 0 }(this, e, t); if (!this.lastNeed) return e.toString("utf8", t);
            this.lastTotal = n; var r = e.length - (n - this.lastNeed); return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r) }, o.prototype.fillLast = function(e) { if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
            e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length } }, { 39: 39 }], 43: [function(u, e, l) {
        (function(e, t) { var r = u(25).nextTick,
                n = Function.prototype.apply,
                i = Array.prototype.slice,
                a = {},
                o = 0;

            function s(e, t) { this._id = e, this._clearFn = t }
            l.setTimeout = function() { return new s(n.call(setTimeout, window, arguments), clearTimeout) }, l.setInterval = function() { return new s(n.call(setInterval, window, arguments), clearInterval) }, l.clearTimeout = l.clearInterval = function(e) { e.close() }, s.prototype.unref = s.prototype.ref = function() {}, s.prototype.close = function() { this._clearFn.call(window, this._id) }, l.enroll = function(e, t) { clearTimeout(e._idleTimeoutId), e._idleTimeout = t }, l.unenroll = function(e) { clearTimeout(e._idleTimeoutId), e._idleTimeout = -1 }, l._unrefActive = l.active = function(e) { clearTimeout(e._idleTimeoutId); var t = e._idleTimeout;
                0 <= t && (e._idleTimeoutId = setTimeout(function() { e._onTimeout && e._onTimeout() }, t)) }, l.setImmediate = "function" == typeof e ? e : function(e) { var t = o++,
                    n = !(arguments.length < 2) && i.call(arguments, 1); return a[t] = !0, r(function() { a[t] && (n ? e.apply(null, n) : e.call(null), l.clearImmediate(t)) }), t }, l.clearImmediate = "function" == typeof t ? t : function(e) { delete a[e] } }).call(this, u(43).setImmediate, u(43).clearImmediate) }, { 25: 25, 43: 43 }], 44: [function(e, t, n) {
        (function(n) {
            function r(e) { try { if (!n.localStorage) return } catch (e) { return } var t = n.localStorage[e]; return null != t && "true" === String(t).toLowerCase() }
            t.exports = function(e, t) { if (r("noDeprecation")) return e; var n = !1; return function() { if (!n) { if (r("throwDeprecation")) throw new Error(t);
                        r("traceDeprecation") ? console.trace(t) : console.warn(t), n = !0 } return e.apply(this, arguments) } } }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}) }, {}], 45: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = r(e(46)),
            h = r(e(54)),
            i = r(e(47)),
            o = 1,
            p = 2,
            g = 3,
            _ = 4,
            E = 5;

        function s(e) { e = e || {}; var t, n = this.context,
                s = (0, a.default)(n).getInstance(),
                u = e.settings,
                l = [],
                d = void 0,
                f = void 0,
                c = void 0;

            function r(e) { return e && e.bind ? e.bind(window.console) : window.console.log.bind(window.console) }

            function i(e, t) { var n = "",
                    r = null;
                d && (r = (new Date).getTime(), n += "[" + (r - c) + "]"), f && t && t.getClassName && (n += "[" + t.getClassName() + "]", t.getType && (n += "[" + t.getType() + "]")), 0 < n.length && (n += " "); for (var i = arguments.length, a = Array(2 < i ? i - 2 : 0), o = 2; o < i; o++) a[o - 2] = arguments[o];
                Array.apply(null, a).forEach(function(e) { n += e + " " }), l[e] && u.get().debug.logLevel >= e && l[e](n), s.trigger(h.default.LOG, { message: n, level: e }) } return t = { getLogger: function(e) { return { fatal: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [o, this].concat(t)) }.bind(e), error: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [p, this].concat(t)) }.bind(e), warn: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [g, this].concat(t)) }.bind(e), info: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [_, this].concat(t)) }.bind(e), debug: function() { for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [E, this].concat(t)) }.bind(e) } }, setLogTimestampVisible: function(e) { d = e }, setCalleeNameVisible: function(e) { f = e } }, f = d = !0, c = (new Date).getTime(), "undefined" != typeof window && window.console && (l[o] = r(window.console.error), l[p] = r(window.console.error), l[g] = r(window.console.warn), l[_] = r(window.console.info), l[E] = r(window.console.debug)), t }
        s.__dashjs_factory_name = "Debug"; var u = i.default.getSingletonFactory(s);
        u.LOG_LEVEL_NONE = 0, u.LOG_LEVEL_FATAL = o, u.LOG_LEVEL_ERROR = p, u.LOG_LEVEL_WARNING = g, u.LOG_LEVEL_INFO = _, u.LOG_LEVEL_DEBUG = E, i.default.updateSingletonFactory(s.__dashjs_factory_name, u), n.default = u, t.exports = n.default }, { 46: 46, 47: 47, 54: 54 }], 46: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() { var a = {};

            function o(e, n, r) { var i = -1; return a[e] && a[e].some(function(e, t) { if (e && e.callback === n && (!r || r === e.scope)) return i = t, !0 }), i } return { on: function(n, e, t) { var r, i = arguments.length <= 3 || void 0 === arguments[3] ? 0 : arguments[3]; if (!n) throw new Error("event type cannot be null or undefined"); if (!e || "function" != typeof e) throw new Error("listener must be a function: " + e);
                    0 <= o(n, e, t) || (a[n] = a[n] || [], r = { callback: e, scope: t, priority: i }, a[n].some(function(e, t) { if (e && i > e.priority) return a[n].splice(t, 0, r), !0 }) || a[n].push(r)) }, off: function(e, t, n) { var r;
                    e && t && a[e] && ((r = o(e, t, n)) < 0 || (a[e][r] = null)) }, trigger: function(e, t) { if (e && a[e]) { if ((t = t || {}).hasOwnProperty("type")) throw new Error("'type' is a reserved word for event dispatching");
                        t.type = e, a[e] = a[e].filter(function(e) { return e }), a[e].forEach(function(e) { return e && e.callback.call(e.scope, t) }) } }, reset: function() { a = {} } } }
        o.__dashjs_factory_name = "EventBus"; var s = a.default.getSingletonFactory(o);
        s.EVENT_PRIORITY_LOW = 0, s.EVENT_PRIORITY_HIGH = 5e3, a.default.updateSingletonFactory(o.__dashjs_factory_name, s), n.default = s, t.exports = n.default }, { 47: 47 }], 47: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var u, a, r, i, o = (u = void 0, a = [], r = {}, i = {}, u = { extend: function(e, t, n, r) {!r[e] && t && (r[e] = { instance: t, override: n }) }, getSingletonInstance: s, setSingletonInstance: function(e, t, n) { for (var r in a) { var i = a[r]; if (i.context === e && i.name === t) return void(a[r].instance = n) }
                a.push({ name: t, context: e, instance: n }) }, getSingletonFactory: function(n) { var e = l(n.__dashjs_factory_name, r); return e || (e = function(e) { var t = void 0; return void 0 === e && (e = {}), { getInstance: function() { return (t = t || s(e, n.__dashjs_factory_name)) || (t = f(n, e, arguments), a.push({ name: n.__dashjs_factory_name, context: e, instance: t })), t } } }, r[n.__dashjs_factory_name] = e), e }, getSingletonFactoryByName: function(e) { return l(e, r) }, updateSingletonFactory: function(e, t) { d(e, t, r) }, getClassFactory: function(t) { var e = l(t.__dashjs_factory_name, i); return e || (e = function(e) { return void 0 === e && (e = {}), { create: function() { return f(t, e, arguments) } } }, i[t.__dashjs_factory_name] = e), e }, getClassFactoryByName: function(e) { return l(e, i) }, updateClassFactory: function(e, t) { d(e, t, i) } });

        function s(e, t) { for (var n in a) { var r = a[n]; if (r.context === e && r.name === t) return r.instance } return null }

        function l(e, t) { return t[e] }

        function d(e, t, n) { e in n && (n[e] = t) }

        function f(e, t, n) { var r = void 0,
                i = e.__dashjs_factory_name,
                a = t[i]; if (a) { var o = a.instance; if (!a.override) return o.apply({ context: t, factory: u }, n); for (var s in r = e.apply({ context: t }, n), o = o.apply({ context: t, factory: u, parent: r }, n)) r.hasOwnProperty(s) && (r[s] = o[s]) } else r = e.apply({ context: t }, n); return r.getClassName = function() { return i }, r }
        n.default = o, t.exports = n.default }, {}], 48: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = r(e(47)),
            o = r(e(49)),
            s = r(e(45)),
            u = r(e(108)),
            l = e(242);

        function d() { var e, t, n = { debug: { logLevel: s.default.LOG_LEVEL_WARNING }, streaming: { metricsMaxListDepth: 1e3, abandonLoadTimeout: 1e4, liveDelayFragmentCount: NaN, liveDelay: null, scheduleWhilePaused: !0, fastSwitchEnabled: !1, flushBufferAtTrackSwitch: !1, calcSegmentAvailabilityRangeFromTimeline: !0, bufferPruningInterval: 10, bufferToKeep: 20, jumpGaps: !0, jumpLargeGaps: !0, smallGapLimit: 1.5, stableBufferTime: 12, bufferTimeAtTopQuality: 30, bufferTimeAtTopQualityLongForm: 60, longFormContentDurationThreshold: 600, wallclockTimeUpdateInterval: 50, lowLatencyEnabled: !1, keepProtectionMediaKeys: !1, useManifestDateHeaderTimeSource: !0, useSuggestedPresentationDelay: !0, useAppendWindow: !0, manifestUpdateRetryInterval: 100, liveCatchUpMinDrift: .02, liveCatchUpMaxDrift: 0, liveCatchUpPlaybackRate: .5, liveCatchupLatencyThreshold: NaN, lastBitrateCachingInfo: { enabled: !0, ttl: 36e4 }, lastMediaSettingsCachingInfo: { enabled: !0, ttl: 36e4 }, cacheLoadThresholds: { video: 50, audio: 5 }, retryIntervals: (i(e = {}, l.HTTPRequest.MPD_TYPE, 500), i(e, l.HTTPRequest.XLINK_EXPANSION_TYPE, 500), i(e, l.HTTPRequest.MEDIA_SEGMENT_TYPE, 1e3), i(e, l.HTTPRequest.INIT_SEGMENT_TYPE, 1e3), i(e, l.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, 1e3), i(e, l.HTTPRequest.INDEX_SEGMENT_TYPE, 1e3), i(e, l.HTTPRequest.OTHER_TYPE, 1e3), i(e, "lowLatencyReductionFactor", 10), e), retryAttempts: (i(t = {}, l.HTTPRequest.MPD_TYPE, 3), i(t, l.HTTPRequest.XLINK_EXPANSION_TYPE, 1), i(t, l.HTTPRequest.MEDIA_SEGMENT_TYPE, 3), i(t, l.HTTPRequest.INIT_SEGMENT_TYPE, 3), i(t, l.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, 3), i(t, l.HTTPRequest.INDEX_SEGMENT_TYPE, 3), i(t, l.HTTPRequest.OTHER_TYPE, 3), i(t, "lowLatencyMultiplyFactor", 5), t), abr: { movingAverageMethod: u.default.MOVING_AVERAGE_SLIDING_WINDOW, ABRStrategy: u.default.ABR_STRATEGY_DYNAMIC, bandwidthSafetyFactor: .9, useDefaultABRRules: !0, useBufferOccupancyABR: !1, useDeadTimeLatency: !0, limitBitrateByPortal: !1, usePixelRatioInLimitBitrateByPortal: !1, maxBitrate: { audio: -1, video: -1 }, minBitrate: { audio: -1, video: -1 }, maxRepresentationRatio: { audio: 1, video: 1 }, initialBitrate: { audio: -1, video: -1 }, initialRepresentationRatio: { audio: -1, video: -1 }, autoSwitchBitrate: { audio: !0, video: !0 } }, cmcd: { enabled: !1, sid: null, cid: null, did: null } } },
                r = o.default.clone(n); return { get: function() { return r }, update: function(e) { "object" == typeof e && ! function e(t, n, r) { for (var i in t) t.hasOwnProperty(i) && n.hasOwnProperty(i) && ("object" == typeof t[i] && null !== t[i] ? e(t[i], n[i], r.slice() + i + ".") : n[i] = o.default.clone(t[i])) }(e, r, "") }, reset: function() { r = o.default.clone(n) } } }
        d.__dashjs_factory_name = "Settings"; var f = a.default.getSingletonFactory(d);
        n.default = f, t.exports = n.default }, { 108: 108, 242: 242, 45: 45, 47: 47, 49: 49 }], 49: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(o, null, [{ key: "mixin", value: function(e, t, n) { var r = void 0,
                    i = {}; if (e)
                    for (var a in t) t.hasOwnProperty(a) && (r = t[a], a in e && (e[a] === r || a in i && i[a] === r) || ("object" == typeof e[a] && null !== e[a] ? e[a] = o.mixin(e[a], r, n) : e[a] = n(r))); return e } }, { key: "clone", value: function(e) { if (!e || "object" != typeof e) return e; var t = void 0; if (e instanceof Array) { t = []; for (var n = 0, r = e.length; n < r; ++n) n in e && t.push(o.clone(e[n])) } else t = {}; return o.mixin(t, e, o.clone) } }, { key: "addAditionalQueryParameterToUrl", value: function(n, e) { try { var t = function() { if (!e || 0 === e.length) return { v: n }; var t = new URL(n); return e.forEach(function(e) { e.key && e.value && t.searchParams.set(e.key, e.value) }), { v: t.href } }(); if ("object" == typeof t) return t.v } catch (e) { return n } } }, { key: "generateUuid", value: function() { var n = (new Date).getTime(); return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(e) { var t = (n + 16 * Math.random()) % 16 | 0; return n = Math.floor(n / 16), ("x" == e ? t : 3 & t | 8).toString(16) }) } }, { key: "generateHashCode", value: function(e) { var t = 0; if (0 === e.length) return t; for (var n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n), t |= 0; return t } }]), o);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o) }
        n.default = i, t.exports = n.default }, {}], 50: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.getVersionString = function() { return r }; var r = "3.1.3" }, {}], 51: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(52);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).call(this), this.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE = 10, this.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE = 11, this.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE = 12, this.SEGMENTS_UPDATE_FAILED_ERROR_CODE = 13, this.SEGMENTS_UNAVAILABLE_ERROR_CODE = 14, this.SEGMENT_BASE_LOADER_ERROR_CODE = 15, this.TIME_SYNC_FAILED_ERROR_CODE = 16, this.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE = 17, this.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE = 18, this.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE = 19, this.APPEND_ERROR_CODE = 20, this.REMOVE_ERROR_CODE = 21, this.DATA_UPDATE_FAILED_ERROR_CODE = 22, this.CAPABILITY_MEDIASOURCE_ERROR_CODE = 23, this.CAPABILITY_MEDIAKEYS_ERROR_CODE = 24, this.DOWNLOAD_ERROR_ID_MANIFEST_CODE = 25, this.DOWNLOAD_ERROR_ID_SIDX_CODE = 26, this.DOWNLOAD_ERROR_ID_CONTENT_CODE = 27, this.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE = 28, this.DOWNLOAD_ERROR_ID_XLINK_CODE = 29, this.MANIFEST_ERROR_ID_CODEC_CODE = 30, this.MANIFEST_ERROR_ID_PARSE_CODE = 31, this.MANIFEST_ERROR_ID_NOSTREAMS_CODE = 32, this.TIMED_TEXT_ERROR_ID_PARSE_CODE = 33, this.MANIFEST_ERROR_ID_MULTIPLEXED_CODE = 34, this.MEDIASOURCE_TYPE_UNSUPPORTED_CODE = 35, this.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE = "parsing failed for ", this.MANIFEST_LOADER_LOADING_FAILURE_ERROR_MESSAGE = "Failed loading manifest: ", this.XLINK_LOADER_LOADING_FAILURE_ERROR_MESSAGE = "Failed loading Xlink element: ", this.SEGMENTS_UPDATE_FAILED_ERROR_MESSAGE = "Segments update failed", this.SEGMENTS_UNAVAILABLE_ERROR_MESSAGE = "no segments are available yet", this.SEGMENT_BASE_LOADER_ERROR_MESSAGE = "error loading segments", this.TIME_SYNC_FAILED_ERROR_MESSAGE = "Failed to synchronize time", this.FRAGMENT_LOADER_NULL_REQUEST_ERROR_MESSAGE = "request is null", this.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE = "Failed to resolve a valid URL", this.APPEND_ERROR_MESSAGE = "chunk is not defined", this.REMOVE_ERROR_MESSAGE = "buffer is not defined", this.DATA_UPDATE_FAILED_ERROR_MESSAGE = "Data update failed", this.CAPABILITY_MEDIASOURCE_ERROR_MESSAGE = "mediasource is not supported", this.CAPABILITY_MEDIAKEYS_ERROR_MESSAGE = "mediakeys is not supported", this.TIMED_TEXT_ERROR_MESSAGE_PARSE = "parsing error :", this.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE = "Error creating source buffer of type : " } var s = new(function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(o, ((i = a) && i.__esModule ? i : { default: i }).default), o);
        n.default = s, t.exports = n.default }, { 52: 52 }], 52: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "extend", value: function(e, t) { if (e) { var n = !!t && t.override,
                        r = !!t && t.publicOnly; for (var i in e) !e.hasOwnProperty(i) || this[i] && !n || r && -1 === e[i].indexOf("public_") || (this[i] = e[i]) } } }]), a);

        function a() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a) }
        n.default = i, t.exports = n.default }, {}], 53: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(55),
            o = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(s, ((i = a) && i.__esModule ? i : { default: i }).default), s);

        function s() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, s), r(Object.getPrototypeOf(s.prototype), "constructor", this).call(this), this.BUFFERING_COMPLETED = "bufferingCompleted", this.BUFFER_CLEARED = "bufferCleared", this.BUFFER_LEVEL_UPDATED = "bufferLevelUpdated", this.BYTES_APPENDED = "bytesAppended", this.BYTES_APPENDED_END_FRAGMENT = "bytesAppendedEndFragment", this.CHECK_FOR_EXISTENCE_COMPLETED = "checkForExistenceCompleted", this.CURRENT_TRACK_CHANGED = "currentTrackChanged", this.DATA_UPDATE_COMPLETED = "dataUpdateCompleted", this.DATA_UPDATE_STARTED = "dataUpdateStarted", this.INBAND_EVENTS = "inbandEvents", this.INITIALIZATION_LOADED = "initializationLoaded", this.INIT_FRAGMENT_LOADED = "initFragmentLoaded", this.INIT_FRAGMENT_NEEDED = "initFragmentNeeded", this.INTERNAL_MANIFEST_LOADED = "internalManifestLoaded", this.ORIGINAL_MANIFEST_LOADED = "originalManifestLoaded", this.LIVE_EDGE_SEARCH_COMPLETED = "liveEdgeSearchCompleted", this.LOADING_COMPLETED = "loadingCompleted", this.LOADING_PROGRESS = "loadingProgress", this.LOADING_DATA_PROGRESS = "loadingDataProgress", this.LOADING_ABANDONED = "loadingAborted", this.MANIFEST_UPDATED = "manifestUpdated", this.MEDIA_FRAGMENT_LOADED = "mediaFragmentLoaded", this.MEDIA_FRAGMENT_NEEDED = "mediaFragmentNeeded", this.QUOTA_EXCEEDED = "quotaExceeded", this.REPRESENTATION_UPDATE_STARTED = "representationUpdateStarted", this.REPRESENTATION_UPDATE_COMPLETED = "representationUpdateCompleted", this.SEGMENTS_LOADED = "segmentsLoaded", this.SERVICE_LOCATION_BLACKLIST_ADD = "serviceLocationBlacklistAdd", this.SERVICE_LOCATION_BLACKLIST_CHANGED = "serviceLocationBlacklistChanged", this.SOURCEBUFFER_REMOVE_COMPLETED = "sourceBufferRemoveCompleted", this.STREAMS_COMPOSED = "streamsComposed", this.STREAM_BUFFERING_COMPLETED = "streamBufferingCompleted", this.STREAM_COMPLETED = "streamCompleted", this.TEXT_TRACKS_QUEUE_INITIALIZED = "textTracksQueueInitialized", this.TIME_SYNCHRONIZATION_COMPLETED = "timeSynchronizationComplete", this.URL_RESOLUTION_FAILED = "urlResolutionFailed", this.VIDEO_CHUNK_RECEIVED = "videoChunkReceived", this.WALLCLOCK_TIME_UPDATED = "wallclockTimeUpdated", this.XLINK_ELEMENT_LOADED = "xlinkElementLoaded", this.XLINK_READY = "xlinkReady", this.SEGMENTBASE_INIT_REQUEST_NEEDED = "segmentBaseInitRequestNeeded", this.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED = "segmentBaseSegmentsListRequestNeeded", this.SEEK_TARGET = "seekTarget", this.DYNAMIC_STREAM_COMPLETED = "dynamicStreamCompleted" }
        n.default = o, t.exports = n.default }, { 55: 55 }], 54: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(53);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).apply(this, arguments) } var s = new(function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(o, ((i = a) && i.__esModule ? i : { default: i }).default), o);
        n.default = s, t.exports = n.default }, { 53: 53 }], 55: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "extend", value: function(e, t) { if (e) { var n = !!t && t.override,
                        r = !!t && t.publicOnly; for (var i in e) !e.hasOwnProperty(i) || this[i] && !n || r && -1 === e[i].indexOf("public_") || (this[i] = e[i]) } } }]), a);

        function a() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a) }
        n.default = i, t.exports = n.default }, {}], 56: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var h = r(e(61)),
            p = r(e(93)),
            g = r(e(89)),
            _ = r(e(95)),
            E = r(e(88)),
            D = r(e(86)),
            i = r(e(47)),
            M = r(e(65));

        function a() { var e, m = void 0,
                v = void 0,
                y = void 0,
                u = void 0,
                T = void 0,
                i = void 0,
                t = this.context;

            function o(e, t, n) { var r, i = m.getAdaptationsForType(v[0].mpd.manifest, e, t); if (!i || 0 === i.length) return null; if (1 < i.length && n) { var a = l(n, t); if (u[n.id] && u[n.id][t])
                        for (var o = 0, s = i.length; o < s; o++)
                            if (u[n.id][t].isMediaInfoEqual(a[o])) return i[o];
                    for (o = 0, s = i.length; o < s; o++)
                        if (r = i[o], m.getRolesForAdaptation(r).filter(function(e) { return e.value === h.default.MAIN })[0]) return i[o] } return i[0] }

            function l(e, t, n) { var r, i = v,
                    a = n,
                    o = [],
                    s = void 0,
                    u = void 0,
                    l = void 0,
                    d = void 0,
                    f = void 0,
                    c = void 0; if (a) b(), i = S(a);
                else { if (!(0 < v.length)) return o;
                    a = v[0].mpd.manifest } var h = A(e, i);
                h && (c = h.id); var p = m.getAdaptationsForType(a, e ? e.index : null, t !== T.EMBEDDED_TEXT ? t : T.VIDEO); if (!p || 0 === p.length) return o; for (y[c] = y[c] || m.getAdaptationsForPeriod(h), d = 0, r = p.length; d < r; d++)
                    if (s = p[d], l = m.getIndexForAdaptation(s, a, e.index), u = I(y[c][l]), t === T.EMBEDDED_TEXT) { for (var g = u.accessibility.length, f = 0; f < g; f++)
                            if (u) { var _ = u.accessibility[f]; if (0 === _.indexOf("cea-608:")) { var E = _.substring(8).split(";"); if ("CC" === E[0].substring(0, 2))
                                        for (f = 0; f < E.length; f++) R(u = u || I.call(this, y[c][l]), E[f].substring(0, 3), E[f].substring(4)), o.push(u), u = null;
                                    else
                                        for (f = 0; f < E.length; f++) R(u = u || I.call(this, y[c][l]), "CC" + (f + 1), E[f]), o.push(u), u = null } else 0 === _.indexOf("cea-608") && (R(u, T.CC1, "eng"), o.push(u), u = null) } } else t === T.IMAGE ? (u.type = T.IMAGE, o.push(u), u = null) : u && o.push(u);
                return o }

            function S(e) { var t = n(e); return m.getRegularPeriods(t) }

            function n(e) { var t = a(e); return m.getMpd(t) }

            function r() { v = [], y = {}, u = {} }

            function a(e) { return e || (0 < v.length ? v[0].mpd.manifest : null) }

            function s(e) { return e && e.streamInfo && void 0 !== e.streamInfo.id && y[e.streamInfo.id] ? y[e.streamInfo.id][e.index] : null }

            function A(e, t) { for (var n = t.length, r = 0; r < n; r++) { var i = t[r]; if (e && e.id === i.id) return i } return null }

            function I(e) { if (!e) return null; var t, r = new g.default,
                    n = e.period.mpd.manifest.Period_asArray[e.period.index].AdaptationSet_asArray[e.index]; return r.id = e.id, r.index = e.index, r.type = e.type, r.streamInfo = d(e.period), r.representationCount = m.getRepresentationCount(n), r.labels = m.getLabelsForAdaptation(n), r.lang = m.getLanguageForAdaptation(n), t = m.getViewpointForAdaptation(n), r.viewpoint = t ? t.value : void 0, r.accessibility = m.getAccessibilityForAdaptation(n).map(function(e) { var t = e.value,
                        n = t; return e.schemeIdUri && 0 <= e.schemeIdUri.search("cea-608") && void 0 !== i && (n = t ? "cea-608:" + t : "cea-608", r.embeddedCaptions = !0), n }), r.audioChannelConfiguration = m.getAudioChannelConfigurationForAdaptation(n).map(function(e) { return e.value }), 0 === r.audioChannelConfiguration.length && Array.isArray(n.Representation_asArray) && 0 < n.Representation_asArray.length && (r.audioChannelConfiguration = m.getAudioChannelConfigurationForRepresentation(n.Representation_asArray[0]).map(function(e) { return e.value })), r.roles = m.getRolesForAdaptation(n).map(function(e) { return e.value }), r.codec = m.getCodec(n), r.mimeType = m.getMimeType(n), r.contentProtection = m.getContentProtectionData(n), r.bitrateList = m.getBitrateListForAdaptation(n), r.contentProtection && r.contentProtection.forEach(function(e) { e.KID = m.getKID(e) }), r.isText = m.getIsTextTrack(r.mimeType), r.supplementalProperties = m.getSupplementalPropperties(n), r }

            function R(e, t, n) { e.id = t, e.index = 100 + parseInt(t.substring(2, 3)), e.type = T.EMBEDDED_TEXT, e.codec = "cea-608-in-SEI", e.isText = !0, e.isEmbedded = !0, e.lang = n, e.roles = ["caption"] }

            function d(e) { var t, n, r = new _.default; return r.id = e.id, r.index = e.index, r.start = e.start, r.duration = e.duration, r.manifestInfo = (t = e.mpd, (n = new E.default).DVRWindowSize = t.timeShiftBufferDepth, n.loadedTime = t.manifest.loadedTime, n.availableFrom = t.availabilityStartTime, n.minBufferTime = t.manifest.minBufferTime, n.maxFragmentDuration = t.maxSegmentDuration, n.duration = m.getDuration(t.manifest), n.isDynamic = m.getIsDynamic(t.manifest), n.serviceDescriptions = m.getServiceDescriptions(t.manifest), n.protocol = t.manifest.protocol, n), r.isLast = 1 === e.mpd.manifest.Period_asArray.length || Math.abs(r.start + r.duration - r.manifestInfo.duration) < 1, r }

            function b() { if (!T) throw new Error("setConfig function has to be called previously") }

            function f(e) { return 0 < v.length ? v[0].mpd.manifest.Period_asArray[e] : null }

            function c(e, t, n) { var r = void 0,
                    i = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0; if (e)
                    for (r = e.AdaptationSet_asArray, o = 0; o < r.length; o += 1)
                        for (a = r[o].Representation_asArray, s = 0; s < a.length; s += 1)
                            if (t === (i = a[s]).id) return n ? s : i;
                return null } return e = { getBandwidthForRepresentation: function(e, t) { var n; return (n = c(f(t), e)) ? n.bandwidth : null }, getIndexForRepresentation: function(e, t) { var n, r = f(t); return null !== (n = c(r, e, !0)) ? n : -1 }, getMaxIndexForBufferType: function(e, t) { return function(e, t) { var n, r = void 0,
                            i = void 0,
                            a = void 0; if (!e || !t) return -1; for (n = e.AdaptationSet_asArray, a = 0; a < n.length; a += 1)
                            if (r = n[a], i = r.Representation_asArray, m.getIsTypeOf(r, t)) return i.length;
                        return -1 }(f(t), e) }, convertDataToRepresentationInfo: function(e) { if (e) { var t = new p.default,
                            n = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index],
                            r = m.getRepresentationFor(e.index, n); return t.id = e.id, t.quality = e.index, t.bandwidth = m.getBandwidth(r), t.DVRWindow = e.segmentAvailabilityRange, t.fragmentDuration = e.segmentDuration || (e.segments && 0 < e.segments.length ? e.segments[0].duration : NaN), t.MSETimeOffset = e.MSETimeOffset, t.mediaInfo = I(e.adaptation), t } return null }, getDataForMedia: s, getStreamsInfo: function(e, t) { var n = [],
                        r = v; if (e && (b(), r = S(e)), 0 < r.length) {
                        (!t || t > r.length) && (t = r.length); for (var i = 0; i < t; i++) n.push(d(r[i])) } return n }, getMediaInfoForType: function(e, t) { if (0 === v.length || !e) return null; var n = A(e, v); if (!n) return null; var r = n.id;
                    y[r] = y[r] || m.getAdaptationsForPeriod(n); var i = o(e.index, t, e); if (!i) return null; var a = m.getIndexForAdaptation(i, v[0].mpd.manifest, e.index); return I(y[r][a]) }, getAllMediaInfoForType: l, getAdaptationForType: o, getRealAdaptation: function(e, t) { var n = void 0,
                        r = A(e, v),
                        i = t ? t.id : null; return 0 < v.length && r && (n = i ? m.getAdaptationForId(i, v[0].mpd.manifest, r.index) : m.getAdaptationForIndex(t ? t.index : null, v[0].mpd.manifest, r.index)), n }, getVoRepresentations: function(e) { var t = s(e); return m.getRepresentationsForAdaptation(t) }, getEventsFor: function(e, t) { var n, r = []; return 0 < v.length && (n = v[0].mpd.manifest, e instanceof _.default ? r = m.getEventsForPeriod(A(e, v)) : e instanceof g.default ? r = m.getEventStreamForAdaptationSet(n, s(e)) : e instanceof p.default && (r = m.getEventStreamForRepresentation(n, t))), r }, getEvent: function(e, t, n) { if (!e || !t) return null; var r = new D.default,
                        i = e.scheme_id_uri,
                        a = e.value,
                        o = e.timescale,
                        s = void 0,
                        u = void 0,
                        u = 0 === e.version ? n * o + (s = e.presentation_time_delta) : (s = 0, e.presentation_time_delta),
                        l = e.event_duration,
                        d = e.id,
                        f = e.message_data; return t[i + "/" + a] ? (r.eventStream = t[i + "/" + a], r.eventStream.value = a, r.eventStream.timescale = o, r.duration = l, r.id = d, r.calculatedPresentationTime = u, r.messageData = f, r.presentationTimeDelta = s, r) : null }, getMpd: n, setConfig: function(e) { e && (e.constants && (T = e.constants), e.cea608parser && (i = e.cea608parser), e.errHandler && m.setConfig({ errHandler: e.errHandler }), e.BASE64 && m.setConfig({ BASE64: e.BASE64 })) }, updatePeriods: function(e) { if (!e) return null;
                    b(), v = S(e), y = {} }, getIsTextTrack: function(e) { return m.getIsTextTrack(e) }, getUTCTimingSources: function() { var e = a(); return m.getUTCTimingSources(e) }, getSuggestedPresentationDelay: function() { var e = 0 < v.length ? v[0].mpd : null; return m.getSuggestedPresentationDelay(e) }, getAvailabilityStartTime: function(e) { var t = n(e); return m.getAvailabilityStartTime(t) }, getIsDynamic: function(e) { var t = a(e); return m.getIsDynamic(t) }, getDuration: function(e) { var t = a(e); return m.getDuration(t) }, getRegularPeriods: S, getLocation: function(e) { return m.getLocation(e) }, getManifestUpdatePeriod: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1]; return m.getManifestUpdatePeriod(e, t) }, getIsDVB: function(e) { return m.hasProfile(e, "urn:dvb:dash:profile:dvb-dash:2014") }, getBaseURLsFromElement: function(e) { return m.getBaseURLsFromElement(e) }, getRepresentationSortFunction: function() { return m.getRepresentationSortFunction() }, getCodec: function(e, t, n) { return m.getCodec(e, t, n) }, getVoAdaptations: function() { return y }, getVoPeriods: function() { return v }, getPeriodById: function(t) { if (!t || 0 === v.length) return null; var e = v.filter(function(e) { return e.id === t }); return e && 0 < e.length ? e[0] : null }, setCurrentMediaInfo: function(e, t, n) { u[e] = u[e] || {}, u[e][t] = u[e][t] || {}, u[e][t] = n }, reset: r }, m = (0, M.default)(t).getInstance(), r(), e }
        a.__dashjs_factory_name = "DashAdapter", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 47: 47, 61: 61, 65: 65, 86: 86, 88: 88, 89: 89, 93: 93, 95: 95 }], 57: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var w = r(e(228)),
            O = e(242),
            i = r(e(47)),
            P = e(80),
            L = r(e(64));

        function a(e) { e = e || {}; var t = this.context,
                f = e.eventBus,
                c = e.events,
                n = e.debug,
                l = e.dashConstants,
                o = e.urlUtils,
                h = e.type,
                r = e.streamInfo,
                p = e.timelineConverter,
                g = e.dashMetrics,
                s = e.baseURLController,
                i = void 0,
                d = void 0,
                _ = void 0,
                E = void 0,
                m = void 0,
                v = void 0,
                a = void 0,
                u = void 0,
                y = void 0;

            function T() { return h }

            function S() { _ = -1, E = null }

            function A() { S(), u = y = m = null }

            function I(e, t, n) { var r = s.resolve(n.path),
                    i = void 0,
                    a = void 0; return r && t !== r.url && o.isRelative(t) ? (i = r.url, a = r.serviceLocation, t && (i = o.resolve(t, i))) : i = t, !o.isRelative(i) && (e.url = i, e.serviceLocation = a, 1) }

            function R(e) { var t, n, r;
                e.sender.getType() === h && (t = e.representation, n = t.hasInitialization(), r = t.hasSegments(), n && r ? f.trigger(c.REPRESENTATION_UPDATE_COMPLETED, { sender: i, representation: t }) : y.update(t, h, u, n, r)) }

            function b(e, t) { if (null == t) return null; var n = new w.default,
                    r = t.representation,
                    i = r.adaptation.period.mpd.manifest.Period_asArray[r.adaptation.period.index].AdaptationSet_asArray[r.adaptation.index].Representation_asArray[r.index].bandwidth,
                    a = t.media,
                    a = (0, P.replaceTokenForTemplate)(a, "Number", t.replacementNumber); return a = (0, P.replaceTokenForTemplate)(a, "Time", t.replacementTime), a = (0, P.replaceTokenForTemplate)(a, "Bandwidth", i), a = (0, P.replaceIDForTemplate)(a, r.id), a = (0, P.unescapeDollarsInTemplate)(a), n.mediaType = h, n.type = O.HTTPRequest.MEDIA_SEGMENT_TYPE, n.range = t.mediaRange, n.startTime = t.presentationStartTime, n.duration = t.duration, n.timescale = r.timescale, n.availabilityStartTime = t.availabilityStartTime, n.availabilityEndTime = t.availabilityEndTime, n.wallStartTime = t.wallStartTime, n.quality = r.index, n.index = t.availabilityIdx, n.mediaInfo = e, n.adaptationIndex = r.adaptation.index, n.representationId = r.id, I(n, a, r) ? n : void 0 }

            function D(e) { var t, n, r = !1; return e && (v ? a ? r = !0 : E && (t = parseFloat((E.presentationStartTime - e.adaptation.period.start).toFixed(5)), n = 0 < E.duration ? t + 1.5 * E.duration : t, r = e.adaptation.period.duration <= n) : _ >= e.availableSegmentsNumber && (r = !0)), r }

            function M(e) { var t = e.representation;
                t.segments && f.trigger(c.REPRESENTATION_UPDATE_COMPLETED, { sender: this, representation: t }) }

            function N(e) { if (!e.error && h === e.mediaType) { for (var t, n, r = e.segments, i = e.representation, a = [], o = 0, s = void 0, u = void 0, l = void 0, s = 0, d = r ? r.length : 0; s < d; s++) u = r[s], (l = (0, P.getTimeBasedSegment)(p, v, i, u.startTime, u.duration, u.timescale, u.media, u.mediaRange, o)) && (a.push(l), l = null, o++);
                    0 < a.length && (i.segmentAvailabilityRange = { start: a[0].presentationStartTime, end: a[a.length - 1].presentationStartTime }, i.availableSegmentsNumber = a.length, i.segments = a, v && (t = a[a.length - 1].presentationStartTime - 8, n = t, p.setExpectedLiveEdge(n), g.updateManifestUpdateInfo({ presentationStartTime: n }))), i.hasInitialization() && f.trigger(c.REPRESENTATION_UPDATE_COMPLETED, { sender: this, representation: i }) } }

            function C() { d.debug("Dynamic stream complete"), a = !0 } return i = { initialize: function(e) { v = e, a = !1, y.initialize(e) }, getType: T, getStreamInfo: function() { return r }, getInitRequest: function(e, t) { return t ? function(e, t, n) { var r = new w.default,
                            i = t.adaptation.period,
                            a = i.start; if (r.mediaType = n, r.type = O.HTTPRequest.INIT_SEGMENT_TYPE, r.range = t.range, r.availabilityStartTime = p.calcAvailabilityStartTimeFromPresentationTime(a, i.mpd, v), r.availabilityEndTime = p.calcAvailabilityEndTimeFromPresentationTime(a + i.duration, i.mpd, v), r.quality = t.index, r.mediaInfo = e, r.representationId = t.id, I(r, t.initialization, t)) return r.url = (0, P.replaceTokenForTemplate)(r.url, "Bandwidth", t.bandwidth), r }(e, t, h) : null }, getRequestForSegment: b, getSegmentRequestForTime: function(e, t, n, r) { var i = null; if (!t || !t.segmentInfoType) return i; var a = _,
                        o = !!r && r.keepIdx,
                        s = !(!r || !r.ignoreIsFinished);
                    m !== n && (m = n, d.debug("Getting the request for time : " + n)); var u = y.getSegmentByTime(t, n); return u ? (_ = u.availabilityIdx, E = u, d.debug("Index for time " + n + " is " + _), i = b(e, u)) : !s && D(t) && ((i = new w.default).action = w.default.ACTION_COMPLETE, i.index = _ - 1, i.mediaType = h, i.mediaInfo = e, d.debug("Signal complete in getSegmentRequestForTime")), o && 0 <= a && (_ = t.segmentInfoType === l.SEGMENT_TIMELINE && v ? _ : a), i }, getNextSegmentRequest: function(e, t) { var n = null; if (!t || !t.segmentInfoType) return null;
                    m = null; var r = _ + 1;
                    d.debug("Getting the next request at index: " + r); var i = y.getSegmentByIndex(t, r, E ? E.mediaStartTime : -1); return i || isFinite(t.adaptation.period.duration) || a ? (_ = i ? (n = b(e, i), i.availabilityIdx) : v ? r - 1 : r, i ? E = i : D(t) && ((n = new w.default).action = w.default.ACTION_COMPLETE, n.index = _ - 1, n.mediaType = h, n.mediaInfo = e, d.debug("Signal complete")), n) : (d.debug(h + " No segment found at index: " + r + ". Wait for next loop"), null) }, setCurrentIndex: function(e) { _ = e }, getCurrentIndex: function() { return _ }, isMediaFinished: D, reset: function() { A(), f.off(c.INITIALIZATION_LOADED, M, i), f.off(c.SEGMENTS_LOADED, N, i), f.off(c.REPRESENTATION_UPDATE_STARTED, R, i), f.off(c.DYNAMIC_STREAM_COMPLETED, C, i) }, resetIndex: S, setMimeType: function(e) { u = e } }, d = n.getLogger(i), A(), y = (0, L.default)(t).create(e), f.on(c.INITIALIZATION_LOADED, M, i), f.on(c.SEGMENTS_LOADED, N, i), f.on(c.REPRESENTATION_UPDATE_STARTED, R, i), f.on(c.DYNAMIC_STREAM_COMPLETED, C, i), i }
        a.__dashjs_factory_name = "DashHandler", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 228: 228, 242: 242, 47: 47, 64: 64, 80: 80 }], 58: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var f = r(e(108)),
            c = e(242),
            i = r(e(47)),
            h = r(e(109)),
            p = r(e(78)),
            g = r(e(153)),
            _ = e(244);

        function a(e) { e = e || {}; var t, n = this.context,
                i = void 0,
                a = void 0,
                o = void 0,
                s = e.metricsModel;

            function u(e) { var t = s.getMetricsFor(e, !0); if (!t) return null; var n = t.HttpList,
                    r = null,
                    i = void 0; if (!n || n.length <= 0) return null; for (i = n.length - 1; 0 <= i;) { if (n[i].responsecode) { r = n[i]; break }
                    i-- } return r }

            function l(e) { var t = s.getMetricsFor(e, !0); return t && t.HttpList ? t.HttpList : [] }

            function r(e, t) { if (!e) return null; var n = e[t]; return n && 0 !== n.length ? n[n.length - 1] : null }

            function d(e) { var t = {}; if (!e) return t; for (var n = e.trim().split("\r\n"), r = 0, i = n.length; r < i; r++) { var a = n[r],
                        o = a.indexOf(": ");
                    0 < o && (t[a.substring(0, o)] = a.substring(o + 2)) } return t } return t = { getCurrentRepresentationSwitch: function(e) { return r(s.getMetricsFor(e, !0), h.default.TRACK_SWITCH) }, getCurrentBufferState: function(e) { return r(s.getMetricsFor(e, !0), h.default.BUFFER_STATE) }, getCurrentBufferLevel: function(e) { var t = r(s.getMetricsFor(e, !0), h.default.BUFFER_LEVEL); return t ? p.default.round10(t.level / 1e3, -3) : 0 }, getCurrentHttpRequest: u, getHttpRequests: l, getCurrentDroppedFrames: function() { return r(s.getMetricsFor(f.default.VIDEO, !0), h.default.DROPPED_FRAMES) }, getCurrentSchedulingInfo: function(e) { return r(s.getMetricsFor(e, !0), h.default.SCHEDULING_INFO) }, getCurrentDVRInfo: function(e) { return r(e ? s.getMetricsFor(e, !0) : s.getMetricsFor(f.default.VIDEO, !0) || s.getMetricsFor(f.default.AUDIO, !0), h.default.DVR_INFO) }, getCurrentManifestUpdate: function() { return r(s.getMetricsFor(f.default.STREAM), h.default.MANIFEST_UPDATE) }, getLatestFragmentRequestHeaderValueByID: function(e, t) { var n = {},
                        r = u(e); return r && (n = d(r._responseHeaders)), void 0 === n[t] ? null : n[t] }, getLatestMPDRequestHeaderValueByID: function(e) { for (var t, n = {}, r = void 0, i = void 0, i = (t = l(f.default.STREAM)).length - 1; 0 <= i; i--)
                        if ((r = t[i]).type === c.HTTPRequest.MPD_TYPE) { n = d(r._responseHeaders); break }
                    return void 0 === n[e] ? null : n[e] }, addRepresentationSwitch: function(e, t, n, r, i) { s.addRepresentationSwitch(e, t, n, r, i) }, addDVRInfo: function(e, t, n, r) { s.addDVRInfo(e, t, n, r) }, updateManifestUpdateInfo: function(e) { var t = this.getCurrentManifestUpdate();
                    s.updateManifestUpdateInfo(t, e) }, addManifestUpdateStreamInfo: function(e) { var t;
                    e && (t = this.getCurrentManifestUpdate(), s.addManifestUpdateStreamInfo(t, e.id, e.index, e.start, e.duration)) }, addManifestUpdateRepresentationInfo: function(e, t) { var n;
                    e && (n = this.getCurrentManifestUpdate(), s.addManifestUpdateRepresentationInfo(n, e.id, e.index, e.streamIndex, t, e.presentationTimeOffset, e.startNumber, e.fragmentInfoType)) }, addManifestUpdate: function(e) { s.addManifestUpdate(f.default.STREAM, e.type, e.requestStartDate, e.requestEndDate) }, addHttpRequest: function(e, t, n, r, i) { s.addHttpRequest(e.mediaType, null, e.type, e.url, e.quality, t, e.serviceLocation || null, e.range || null, e.requestStartDate, e.firstByteDate, e.requestEndDate, n, e.duration, r, i) }, addSchedulingInfo: function(e, t) { s.addSchedulingInfo(e.mediaType, new Date, e.type, e.startTime, e.availabilityStartTime, e.duration, e.quality, e.range, t) }, addRequestsQueue: function(e, t, n) { s.addRequestsQueue(e, t, n) }, addBufferLevel: function(e, t, n) { s.addBufferLevel(e, t, n) }, addBufferState: function(e, t, n) { s.addBufferState(e, t, n) }, addDroppedFrames: function(e) { s.addDroppedFrames(f.default.VIDEO, e) }, addPlayList: function() { o && (s.addPlayList(o), o = null) }, addDVBErrors: function(e) { s.addDVBErrors(e) }, createPlaylistMetrics: function(e, t) {
                    (o = new _.PlayList).start = new Date, o.mstart = e, o.starttype = t }, createPlaylistTraceMetrics: function(e, t, n) {!0 === i && (i = !1, (a = new _.PlayListTrace).representationid = e, a.start = new Date, a.mstart = t, a.playbackspeed = null !== n ? n.toString() : null) }, updatePlayListTraceMetrics: function(e) { if (a)
                        for (var t in a) a[t] = e[t] }, pushPlayListTraceMetrics: function(e, t) { var n, r;!1 === i && o && a && a.start && (n = a.start, r = e.getTime() - n.getTime(), a.duration = r, a.stopreason = t, o.trace.push(a), i = !0) }, clearAllCurrentMetrics: function() { s.clearAllCurrentMetrics() } }, s = s || (0, g.default)(n).getInstance({ settings: e.settings }), i = !0, o = a = null, t }
        a.__dashjs_factory_name = "DashMetrics", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 153: 153, 242: 242, 244: 244, 47: 47, 78: 78 }], 59: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var y = r(e(94)),
            T = r(e(226)),
            i = r(e(47)),
            S = r(e(228)),
            A = r(e(159));

        function a() { var e = this.context,
                t = void 0,
                g = void 0,
                n = void 0,
                s = void 0,
                r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                u = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                h = void 0,
                p = void 0,
                _ = void 0;

            function E() { if (!_ || !_.hasOwnProperty("resolve")) throw new Error("setConfig function has to be called previously") }

            function m(e) { if (e.url) { var t = new S.default; return t.setInfo(e), t } }

            function v(e, t, n) { e ? d.trigger(l.SEGMENTS_LOADED, { segments: e, representation: t, mediaType: n }) : d.trigger(l.SEGMENTS_LOADED, { segments: null, representation: t, mediaType: n, error: new T.default(f.SEGMENT_BASE_LOADER_ERROR_CODE, f.SEGMENT_BASE_LOADER_ERROR_MESSAGE) }) } return t = { setConfig: function(e) { e.baseURLController && (_ = e.baseURLController), e.dashMetrics && (i = e.dashMetrics), e.mediaPlayerModel && (o = e.mediaPlayerModel), e.errHandler && (n = e.errHandler), e.settings && (a = e.settings), e.boxParser && (s = e.boxParser), e.events && (l = e.events), e.eventBus && (d = e.eventBus), e.debug && (g = e.debug.getLogger(t)), e.requestModifier && (r = e.requestModifier), e.errors && (f = e.errors), e.urlUtils && (p = e.urlUtils), e.constants && (c = e.constants), e.dashConstants && (h = e.dashConstants) }, initialize: function() { u = (0, A.default)(e).create({ errHandler: n, dashMetrics: i, mediaPlayerModel: o, requestModifier: r, useFetch: a ? a.get().streaming.lowLatencyEnabled : null, boxParser: s, errors: f, urlUtils: p, constants: c, dashConstants: h }) }, loadInitialization: function t(n, e) { E(); var r = null,
                        i = n ? _.resolve(n.path) : null,
                        a = e || { init: !0, url: i ? i.url : void 0, range: { start: 0, end: 1500 }, searching: !1, bytesLoaded: 0, bytesToLoad: 1500, mediaType: n && n.adaptation ? n.adaptation.type : null };
                    g.debug("Start searching for initialization."); var o = m(a);
                    u.load({ request: o, success: function(e) { a.bytesLoaded = a.range.end, (r = s.findInitRange(e)) ? (n.range = r, d.trigger(l.INITIALIZATION_LOADED, { representation: n })) : (a.range.end = a.bytesLoaded + a.bytesToLoad, t(n, a)) }, error: function() { d.trigger(l.INITIALIZATION_LOADED, { representation: n }) } }), g.debug("Perform init search: " + a.url) }, loadSegments: function l(d, f, e, c, t) { var n;
                    E(), !e || void 0 !== e.start && void 0 !== e.end || (e = (n = e ? e.toString().split("-") : null) ? { start: parseFloat(n[0]), end: parseFloat(n[1]) } : null), c = c || v; var o = null,
                        h = null,
                        r = !!e,
                        i = d ? _.resolve(d.path) : null,
                        p = { init: !1, url: i ? i.url : void 0, range: r ? e : { start: 0, end: 1500 }, searching: !r, bytesLoaded: t ? t.bytesLoaded : 0, bytesToLoad: 1500, mediaType: d && d.adaptation ? d.adaptation.type : null },
                        a = m(p);
                    u.load({ request: a, success: function(e) { var t = p.bytesToLoad,
                                n = e.byteLength; if (p.bytesLoaded = p.range.end - p.range.start, o = s.parse(e), (h = o.getBox("sidx")) && h.isComplete) { var u = h.references,
                                    r = void 0,
                                    i = void 0;
                                null != u && 0 < u.length && (r = 1 === u[0].reference_type), r ? function() { g.debug("Initiate multiple SIDX load."), p.range.end = p.range.start + h.size; for (var e = void 0, t = void 0, n = void 0, r = void 0, i = [], a = 0, o = (h.offset || p.range.start) + h.size, s = function(e) { e ? (i = i.concat(e), t <= ++a && (i.sort(function(e, t) { return e.startTime - t.startTime < 0 ? -1 : 0 }), c(i, d, f))) : c(null, d, f) }, e = 0, t = u.length; e < t; e++) r = (n = o) + u[e].referenced_size - 1, o += u[e].referenced_size, l(d, null, { start: n, end: r }, s, p) }() : (g.debug("Parsing segments from SIDX. representation " + d.adaptation.type + " - id: " + d.id + " for range : " + p.range.start + " - " + p.range.end), i = function(e, t) { for (var n = e.references, r = n.length, i = e.timescale, a = e.earliest_presentation_time, o = t.range.start + e.offset + e.first_offset + e.size, s = [], u = void 0, l = void 0, d = void 0, f = void 0, c = 0; c < r; c++) d = n[c].subsegment_duration, f = n[c].referenced_size, (u = new y.default).duration = d, u.startTime = a, u.timescale = i, l = o + f - 1, u.mediaRange = o + "-" + l, s.push(u), a += d, o += f; return s }(h, p), c(i, d, f)) } else { if (h) p.range.start = h.offset || p.range.start, p.range.end = p.range.start + (h.size || t);
                                else { if (n < p.bytesLoaded) return void c(null, d, f); var a = o.getLastBox();
                                    a && a.size ? (p.range.start = a.offset + a.size, p.range.end = p.range.start + t) : p.range.end += t }
                                l(d, f, p.range, c, p) } }, error: function() { c(null, d, f) } }), g.debug("Perform SIDX load: " + p.url + " with range : " + p.range.start + " - " + p.range.end) }, reset: function() { u.abort(), r = s = n = u = null } } }
        a.__dashjs_factory_name = "SegmentBaseLoader", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 159: 159, 226: 226, 228: 228, 47: 47, 94: 94 }], 60: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var y = r(e(212)),
            h = r(e(108)),
            i = r(e(47)),
            T = r(e(94)),
            S = r(e(228)),
            A = r(e(159)),
            I = r(e(226));

        function a() { var p = this.context,
                t = void 0,
                g = void 0,
                _ = void 0,
                n = void 0,
                r = void 0,
                i = void 0,
                a = void 0,
                E = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                l = void 0,
                d = void 0;

            function m(e, t, n, r) { for (var i, a = void 0, o = void 0, s = void 0, u = void 0, l = void 0, d = void 0, o = [], u = 0, f = (i = function(e) { var t = [],
                            n = (0, y.default)(p).create({ data: e }),
                            r = void 0,
                            i = void 0; for (n.consumeTagAndSize(_.Segment.Cues); n.moreData() && n.consumeTagAndSize(_.Segment.Cues.CuePoint, !0);) { for ((r = {}).CueTime = n.parseTag(_.Segment.Cues.CuePoint.CueTime), r.CueTracks = []; n.moreData() && n.consumeTag(_.Segment.Cues.CuePoint.CueTrackPositions, !0);) { var a = n.getMatroskaCodedNum(),
                                    o = n.getPos(); if ((i = {}).Track = n.parseTag(_.Segment.Cues.CuePoint.CueTrackPositions.CueTrack), 0 === i.Track) throw new Error("Cue track cannot be 0");
                                i.ClusterPosition = n.parseTag(_.Segment.Cues.CuePoint.CueTrackPositions.CueClusterPosition), r.CueTracks.push(i), n.setPos(o + a) } if (0 === r.CueTracks.length) throw new Error("Mandatory cuetrack not found");
                            t.push(r) } if (0 === t.length) throw new Error("mandatory cuepoint not found"); return t }(e)).length; u < f; u += 1) s = new T.default, a = 0, a = u < i.length - 1 ? i[u + 1].CueTime - i[u].CueTime : r - i[u].CueTime, s.duration = a, s.startTime = i[u].CueTime, s.timescale = 1e3, l = i[u].CueTracks[0].ClusterPosition + t, d = u < i.length - 1 ? i[u + 1].CueTracks[0].ClusterPosition + t - 1 : n - 1, s.mediaRange = l + "-" + d, o.push(s); return g.debug("Parsed cues: " + o.length + " cues."), o }

            function f() { if (!d || !d.hasOwnProperty("resolve")) throw new Error("setConfig function has to be called previously") }

            function c(e, t, n) { e ? s.trigger(u.SEGMENTS_LOADED, { segments: e, representation: t, mediaType: n }) : s.trigger(u.SEGMENTS_LOADED, { segments: null, representation: t, mediaType: n, error: new I.default(l.SEGMENT_BASE_LOADER_ERROR_CODE, l.SEGMENT_BASE_LOADER_ERROR_MESSAGE) }) }

            function v(e) { var t = new S.default; return t.setInfo(e), t } return t = { setConfig: function(e) { if (!(e.baseURLController && e.dashMetrics && e.mediaPlayerModel && e.errHandler)) throw new Error(h.default.MISSING_CONFIG_ERROR);
                    d = e.baseURLController, i = e.dashMetrics, a = e.mediaPlayerModel, n = e.errHandler, o = e.settings, u = e.events, s = e.eventBus, l = e.errors, g = e.debug.getLogger(t), r = e.requestModifier }, initialize: function() { E = (0, A.default)(p).create({ errHandler: n, dashMetrics: i, mediaPlayerModel: a, requestModifier: r, useFetch: o ? o.get().streaming.lowLatencyEnabled : null, errors: l }) }, loadInitialization: function(e, t) { f(); var n = null,
                        r = e ? d.resolve(e.path) : null,
                        i = e ? e.range.split("-") : null,
                        a = t || { range: { start: i ? parseFloat(i[0]) : null, end: i ? parseFloat(i[1]) : null }, request: n, url: r ? r.url : void 0, init: !0, mediaType: e && e.adaptation ? e.adaptation.type : null };
                    g.info("Start loading initialization."), n = v(a), E.load({ request: n, success: function() { s.trigger(u.INITIALIZATION_LOADED, { representation: e }) }, error: function() { s.trigger(u.INITIALIZATION_LOADED, { representation: e }) } }), g.debug("Perform init load: " + a.url) }, loadSegments: function(t, n, r, i) { f(); var e = null,
                        a = t ? d.resolve(t.path) : null,
                        o = a ? a.url : void 0,
                        s = { bytesLoaded: 0, bytesToLoad: 8192, range: { start: 0, end: 8192 }, request: e, url: o, init: !1, mediaType: t && t.adaptation ? t.adaptation.type : null };
                    i = i || c, e = v(s), g.debug("Parsing ebml header"), E.load({ request: e, success: function(e) {! function(e, t, n, r) { if (e && 0 !== e.byteLength) { var i, a, o = (0, y.default)(p).create({ data: e }),
                                        s = void 0,
                                        u = void 0,
                                        l = n ? n.split("-") : null,
                                        d = null,
                                        f = { url: t, range: { start: l ? parseFloat(l[0]) : null, end: l ? parseFloat(l[1]) : null }, request: d }; for (g.debug("Parse EBML header: " + f.url), o.skipOverElement(_.EBML), o.consumeTag(_.Segment), i = o.getMatroskaCodedNum(), i += o.getPos(), a = o.getPos(); o.moreData() && !o.consumeTagAndSize(_.Segment.Info, !0);)
                                        if (!(o.skipOverElement(_.Segment.SeekHead, !0) || o.skipOverElement(_.Segment.Tracks, !0) || o.skipOverElement(_.Segment.Cues, !0) || o.skipOverElement(_.Void, !0))) throw new Error("no valid top level element found");
                                    for (; void 0 === s;) { var c = o.getMatroskaCodedNum(!0),
                                            h = o.getMatroskaCodedNum(); switch (c) {
                                            case _.Segment.Info.Duration.tag:
                                                s = o[_.Segment.Info.Duration.parse](h); break;
                                            default:
                                                o.setPos(o.getPos() + h) } }
                                    d = v(f);
                                    E.load({ request: d, success: function(e) { u = m(e, a, i, s), r(u) }, error: function() { g.error("Download Error: Cues " + f.url), r(null) } }), g.debug("Perform cues load: " + f.url + " bytes=" + f.range.start + "-" + f.range.end) } else r(null) }(e, o, r, function(e) { i(e, t, n) }) }, error: function() { i(null, t, n) } }) }, reset: function() { r = n = null } }, _ = { EBML: { tag: 440786851, required: !0 }, Segment: { tag: 408125543, required: !0, SeekHead: { tag: 290298740, required: !0 }, Info: { tag: 357149030, required: !0, TimecodeScale: { tag: 2807729, required: !0, parse: "getMatroskaUint" }, Duration: { tag: 17545, required: !0, parse: "getMatroskaFloat" } }, Tracks: { tag: 374648427, required: !0 }, Cues: { tag: 475249515, required: !0, CuePoint: { tag: 187, required: !0, CueTime: { tag: 179, required: !0, parse: "getMatroskaUint" }, CueTrackPositions: { tag: 183, required: !0, CueTrack: { tag: 247, required: !0, parse: "getMatroskaUint" }, CueClusterPosition: { tag: 241, required: !0, parse: "getMatroskaUint" } } } } }, Void: { tag: 236, required: !0 } }, t }
        a.__dashjs_factory_name = "WebmSegmentBaseLoader", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 159: 159, 212: 212, 226: 226, 228: 228, 47: 47, 94: 94 }], 61: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.init() }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = new(function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(i, [{ key: "init", value: function() { this.BASE_URL = "BaseURL", this.SEGMENT_BASE = "SegmentBase", this.SEGMENT_TEMPLATE = "SegmentTemplate", this.SEGMENT_LIST = "SegmentList", this.SEGMENT_URL = "SegmentURL", this.SEGMENT_TIMELINE = "SegmentTimeline", this.SEGMENT_PROFILES = "segmentProfiles", this.ADAPTATION_SET = "AdaptationSet", this.REPRESENTATION = "Representation", this.REPRESENTATION_INDEX = "RepresentationIndex", this.SUB_REPRESENTATION = "SubRepresentation", this.INITIALIZATION = "Initialization", this.INITIALIZATION_MINUS = "initialization", this.MPD = "MPD", this.PERIOD = "Period", this.ASSET_IDENTIFIER = "AssetIdentifier", this.EVENT_STREAM = "EventStream", this.ID = "id", this.PROFILES = "profiles", this.SERVICE_LOCATION = "serviceLocation", this.RANGE = "range", this.INDEX = "index", this.MEDIA = "media", this.BYTE_RANGE = "byteRange", this.INDEX_RANGE = "indexRange", this.MEDIA_RANGE = "mediaRange", this.VALUE = "value", this.CONTENT_TYPE = "contentType", this.MIME_TYPE = "mimeType", this.BITSTREAM_SWITCHING = "BitstreamSwitching", this.BITSTREAM_SWITCHING_MINUS = "bitstreamSwitching", this.CODECS = "codecs", this.DEPENDENCY_ID = "dependencyId", this.MEDIA_STREAM_STRUCTURE_ID = "mediaStreamStructureId", this.METRICS = "Metrics", this.METRICS_MINUS = "metrics", this.REPORTING = "Reporting", this.WIDTH = "width", this.HEIGHT = "height", this.SAR = "sar", this.FRAMERATE = "frameRate", this.AUDIO_SAMPLING_RATE = "audioSamplingRate", this.MAXIMUM_SAP_PERIOD = "maximumSAPPeriod", this.START_WITH_SAP = "startWithSAP", this.MAX_PLAYOUT_RATE = "maxPlayoutRate", this.CODING_DEPENDENCY = "codingDependency", this.SCAN_TYPE = "scanType", this.FRAME_PACKING = "FramePacking", this.AUDIO_CHANNEL_CONFIGURATION = "AudioChannelConfiguration", this.CONTENT_PROTECTION = "ContentProtection", this.ESSENTIAL_PROPERTY = "EssentialProperty", this.SUPPLEMENTAL_PROPERTY = "SupplementalProperty", this.INBAND_EVENT_STREAM = "InbandEventStream", this.ACCESSIBILITY = "Accessibility", this.ROLE = "Role", this.RATING = "Rating", this.CONTENT_COMPONENT = "ContentComponent", this.SUBSET = "Subset", this.LANG = "lang", this.VIEWPOINT = "Viewpoint", this.ROLE_ASARRAY = "Role_asArray", this.ACCESSIBILITY_ASARRAY = "Accessibility_asArray", this.AUDIOCHANNELCONFIGURATION_ASARRAY = "AudioChannelConfiguration_asArray", this.CONTENTPROTECTION_ASARRAY = "ContentProtection_asArray", this.MAIN = "main", this.DYNAMIC = "dynamic", this.STATIC = "static", this.MEDIA_PRESENTATION_DURATION = "mediaPresentationDuration", this.MINIMUM_UPDATE_PERIOD = "minimumUpdatePeriod", this.CODEC_PRIVATE_DATA = "codecPrivateData", this.BANDWITH = "bandwidth", this.SOURCE_URL = "sourceURL", this.TIMESCALE = "timescale", this.DURATION = "duration", this.START_NUMBER = "startNumber", this.PRESENTATION_TIME_OFFSET = "presentationTimeOffset", this.AVAILABILITY_START_TIME = "availabilityStartTime", this.AVAILABILITY_END_TIME = "availabilityEndTime", this.TIMESHIFT_BUFFER_DEPTH = "timeShiftBufferDepth", this.MAX_SEGMENT_DURATION = "maxSegmentDuration", this.PRESENTATION_TIME = "presentationTime", this.MIN_BUFFER_TIME = "minBufferTime", this.MAX_SUBSEGMENT_DURATION = "maxSubsegmentDuration", this.START = "start", this.AVAILABILITY_TIME_OFFSET = "availabilityTimeOffset", this.AVAILABILITY_TIME_COMPLETE = "availabilityTimeComplete", this.CENC_DEFAULT_KID = "cenc:default_KID", this.DVB_PRIORITY = "dvb:priority", this.DVB_WEIGHT = "dvb:weight", this.SUGGESTED_PRESENTATION_DELAY = "suggestedPresentationDelay", this.SERVICE_DESCRIPTION = "ServiceDescription", this.SERVICE_DESCRIPTION_SCOPE = "Scope", this.SERVICE_DESCRIPTION_LATENCY = "Latency", this.SERVICE_DESCRIPTION_PLAYBACK_RATE = "PlaybackRate" } }]), i);
        n.default = a, t.exports = n.default }, {}], 62: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var O = r(e(108)),
            P = r(e(226)),
            i = r(e(47));

        function a(e) { var i = (e = e || {}).eventBus,
                a = e.events,
                l = e.errors,
                d = e.abrController,
                f = e.dashMetrics,
                c = e.playbackController,
                r = e.timelineConverter,
                h = e.type,
                p = e.streamId,
                g = e.dashConstants,
                o = void 0,
                s = void 0,
                _ = void 0,
                E = void 0,
                m = void 0;

            function u() { if (!(d && f && c && r)) throw new Error(O.default.MISSING_CONFIG_ERROR) }

            function t() { return _ }

            function n() { return m }

            function v() { _ = !(s = null), E = [] }

            function y() { return h }

            function T() { u(); var e = new Date,
                    t = m,
                    n = 1e3 * c.getTime();
                t && f.addRepresentationSwitch(t.adaptation.type, e, n, t.id) }

            function S(e) { return null == e || e >= E.length ? null : E[e] }

            function A(e, t) { var n;
                e.segmentAvailabilityRange = r.calcSegmentAvailabilityRange(e, t), e.segmentAvailabilityRange.end < e.segmentAvailabilityRange.start ? b(new P.default(l.SEGMENTS_UNAVAILABLE_ERROR_CODE, l.SEGMENTS_UNAVAILABLE_ERROR_MESSAGE, { availabilityDelay: e.segmentAvailabilityRange.start - e.segmentAvailabilityRange.end })) : t && (n = e.segmentAvailabilityRange.end, r.setExpectedLiveEdge(n), f.updateManifestUpdateInfo({ presentationStartTime: n })) }

            function I(e, t) { u(); for (var n = 0, r = E.length; n < r; n++) A(E[n], e), t && i.trigger(a.REPRESENTATION_UPDATE_STARTED, { sender: o, representation: E[n] }) }

            function R() { _ = !0, i.trigger(a.DATA_UPDATE_STARTED, { sender: o }) }

            function b(e) { _ = !1; var t = { sender: o, data: s, currentRepresentation: m };
                e && (t.error = e), i.trigger(a.DATA_UPDATE_COMPLETED, t) }

            function D(e) { var t = e;
                i.trigger(a.AST_IN_FUTURE, { delay: t }), setTimeout(function() { _ || (R(), E.forEach(function(e) { e.segmentAvailabilityRange = null }), I(c.getIsDynamic(), !0)) }, t) }

            function M(e) { if (e.sender.getType() === h && e.sender.getStreamInfo().id === p && _)
                    if (e.error) b(e.error);
                    else { var t, n = e.sender.getStreamInfo(),
                            r = e.representation,
                            i = f.getCurrentManifestUpdate(),
                            a = !1,
                            o = 0,
                            s = void 0; if (r.adaptation.period.mpd.manifest.type === g.DYNAMIC && !r.adaptation.period.mpd.manifest.ignorePostponeTimePeriod && c.getStreamController().getStreams().length <= 1 && (o = function(e, t) { try { var n = c.getStreamController().getActiveStreamInfo(),
                                        r = e.segmentAvailabilityRange.start;
                                    n && n.id && n.id !== t.id && (r = Math.min(c.getTime(), r)); var i = e.segmentAvailabilityRange.end - r; return 1e3 * (c.getLiveDelay() - i) } catch (e) { return 0 } }(r, n)), 0 < o) return D(o), void b(new P.default(l.SEGMENTS_UPDATE_FAILED_ERROR_CODE, l.SEGMENTS_UPDATE_FAILED_ERROR_MESSAGE)); if (i) { for (var u = 0; u < i.representationInfo.length; u++)
                                if ((s = i.representationInfo[u]).index === r.index && s.mediaType === h) { a = !0; break }
                            a || f.addManifestUpdateRepresentationInfo(r, h) }! function() { for (var e = 0, t = E.length; e < t; e++) { var n = E[e].segmentInfoType; if (null === E[e].segmentAvailabilityRange || !E[e].hasInitialization() || (n === g.SEGMENT_BASE || n === g.BASE_URL) && !E[e].segments) return } return 1 }() || (d.setPlaybackQuality(h, n, (t = m, E.indexOf(t))), f.updateManifestUpdateInfo({ latency: m.segmentAvailabilityRange.end - c.getTime() }), f.getCurrentRepresentationSwitch(m.adaptation.type) || T(), b()) } }

            function N(e) { e.isDynamic && I(e.isDynamic) }

            function C(e) { e.mediaType === h && p === e.streamInfo.id && (m = S(e.newQuality), T()) }

            function w(e) { e.newDuration && m && m.adaptation.period && (m.adaptation.period.duration = e.newDuration) } return o = { getData: function() { return s }, isUpdating: t, updateData: function(e, t, n, r) { u(), R(), E = t, m = S(r), s = e, n === O.default.VIDEO || n === O.default.AUDIO || n === O.default.FRAGMENTED_TEXT ? I(c.getIsDynamic(), !0) : b() }, updateRepresentation: A, getCurrentRepresentation: n, getRepresentationForQuality: S, getType: y, getStreamId: function() { return p }, reset: function() { i.off(a.QUALITY_CHANGE_REQUESTED, C, o), i.off(a.REPRESENTATION_UPDATE_COMPLETED, M, o), i.off(a.WALLCLOCK_TIME_UPDATED, N, o), i.off(a.MANIFEST_VALIDITY_CHANGED, w, o), v() } }, v(), i.on(a.QUALITY_CHANGE_REQUESTED, C, o), i.on(a.REPRESENTATION_UPDATE_COMPLETED, M, o), i.on(a.WALLCLOCK_TIME_UPDATED, N, o), i.on(a.MANIFEST_VALIDITY_CHANGED, w, o), o }
        a.__dashjs_factory_name = "RepresentationController", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 226: 226, 47: 47 }], 63: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            m = r(e(59)),
            v = r(e(60));

        function a(e) { e = e || {}; var t = this.context,
                n = e.eventBus,
                r = e.events,
                i = e.dashMetrics,
                a = e.mediaPlayerModel,
                o = e.errHandler,
                s = e.baseURLController,
                u = e.debug,
                l = e.boxParser,
                d = e.requestModifier,
                f = e.errors,
                c = void 0,
                h = void 0,
                p = void 0;

            function g(e) { return "webm" === (e ? e.split("/")[1] : "").toLowerCase() }

            function _(e) { g(e.mimeType) ? p.loadInitialization(e.representation) : h.loadInitialization(e.representation) }

            function E(e) { g(e.mimeType) ? p.loadSegments(e.representation, e.mediaType, e.representation ? e.representation.indexRange : null, e.callback) : h.loadSegments(e.representation, e.mediaType, e.representation ? e.representation.indexRange : null, e.callback) } return c = { initialize: function() { n.on(r.SEGMENTBASE_INIT_REQUEST_NEEDED, _, c), n.on(r.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, E, c), h.initialize(), p.initialize() }, reset: function() { n.off(r.SEGMENTBASE_INIT_REQUEST_NEEDED, _, c), n.off(r.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, E, c) } }, h = (0, m.default)(t).getInstance(), p = (0, v.default)(t).getInstance(), h.setConfig({ baseURLController: s, dashMetrics: i, mediaPlayerModel: a, errHandler: o, eventBus: n, events: r, errors: f, debug: u, boxParser: l, requestModifier: d }), p.setConfig({ baseURLController: s, dashMetrics: i, mediaPlayerModel: a, errHandler: o, eventBus: n, events: r, errors: f, debug: u, requestModifier: d }), c }
        a.__dashjs_factory_name = "SegmentBaseController"; var o = i.default.getSingletonFactory(a);
        n.default = o, t.exports = n.default }, { 47: 47, 59: 59, 60: 60 }], 64: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            u = r(e(83)),
            l = r(e(81)),
            d = r(e(77)),
            f = r(e(79));

        function a(t) { t = t || {}; var e, n = this.context,
                a = t.events,
                o = t.eventBus,
                r = t.dashConstants,
                i = void 0;

            function s(e) { return e ? e.segments ? i[r.SEGMENT_BASE] : i[e.segmentInfoType] : null } return e = { initialize: function(e) { i[r.SEGMENT_TIMELINE] = (0, u.default)(n).create(t, e), i[r.SEGMENT_TEMPLATE] = (0, l.default)(n).create(t, e), i[r.SEGMENT_LIST] = (0, d.default)(n).create(t, e), i[r.SEGMENT_BASE] = (0, f.default)(n).create(t, e) }, update: function(e, t, n, r, i) { r || o.trigger(a.SEGMENTBASE_INIT_REQUEST_NEEDED, { mimeType: n, representation: e }), i || o.trigger(a.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, { mimeType: n, mediaType: t, representation: e }) }, getSegmentByIndex: function(e, t, n) { var r = s(e); return r ? r.getSegmentByIndex(e, t, n) : null }, getSegmentByTime: function(e, t) { var n = s(e); return n ? n.getSegmentByTime(e, t) : null } }, i = {}, e }
        a.__dashjs_factory_name = "SegmentsController"; var o = i.default.getClassFactory(a);
        n.default = o, t.exports = n.default }, { 47: 47, 77: 77, 79: 79, 81: 81, 83: 83 }], 65: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var p = r(e(108)),
            T = r(e(61)),
            S = r(e(92)),
            g = r(e(84)),
            A = r(e(91)),
            i = r(e(90)),
            I = r(e(96)),
            R = r(e(86)),
            b = r(e(85)),
            D = r(e(87)),
            M = r(e(217)),
            N = r(e(221)),
            a = r(e(47)),
            C = r(e(45)),
            w = r(e(226)),
            O = r(e(51)),
            P = e(205);

        function o() { var e = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                a = this.context,
                o = (0, N.default)(a).getInstance(),
                _ = Number.isInteger || function(e) { return "number" == typeof e && isFinite(e) && Math.floor(e) === e };

            function s(e, t) { var n = void 0,
                    r = void 0,
                    i = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0,
                    u = !1,
                    l = !1; if (!e) throw new Error("adaptation is not defined"); if (!t) throw new Error("type is not defined"); if (e.hasOwnProperty("ContentComponent_asArray") && (a = e.ContentComponent_asArray), o = t !== p.default.TEXT ? new RegExp(t) : new RegExp("(vtt|ttml)"), e.Representation_asArray && e.Representation_asArray.length && 0 < e.Representation_asArray.length) { var d = v(e.Representation_asArray[0]); if (d && 0 < d.length && 0 <= P.THUMBNAILS_SCHEME_ID_URIS.indexOf(d[0].schemeIdUri)) return t === p.default.IMAGE; if (e.Representation_asArray[0].hasOwnProperty(T.default.CODECS) && (0 === (s = e.Representation_asArray[0].codecs).search(p.default.STPP) || 0 === s.search(p.default.WVTT))) return t === p.default.FRAGMENTED_TEXT } if (a) { if (1 < a.length) return t === p.default.MUXED;
                    a[0] && a[0].contentType === t && (l = u = !0) } if (e.hasOwnProperty(T.default.MIME_TYPE) && (u = o.test(e.mimeType), l = !0), !l)
                    for (n = 0, r = e.Representation_asArray && e.Representation_asArray.length ? e.Representation_asArray.length : 0; !l && n < r;)(i = e.Representation_asArray[n]).hasOwnProperty(T.default.MIME_TYPE) && (u = o.test(i.mimeType), l = !0), n++; return u }

            function E(e) { return "text/vtt" === e || "application/ttml+xml" === e }

            function t() { return function(e, t) { return e.bandwidth - t.bandwidth } }

            function m(e) { return e && Array.isArray(e.Representation_asArray) && e.Representation_asArray.sort(t()), e }

            function u(e, t) { return e && e.Period_asArray && _(t) && e.Period_asArray[t] ? e.Period_asArray[t].AdaptationSet_asArray : [] }

            function c(e) { var t = !1; return e && e.hasOwnProperty("type") && (t = e.type === T.default.DYNAMIC), t }

            function v(e) { return e && e.EssentialProperty_asArray && e.EssentialProperty_asArray.length ? e.EssentialProperty_asArray.map(function(e) { return { schemeIdUri: e.schemeIdUri, value: e.value } }) : null }

            function h(e, t) { var n = [],
                    r = void 0; if (!e) return n; for (r = 0; r < e.length; r++) { var i = new D.default; if (i.timescale = 1, i.representation = t, !e[r].hasOwnProperty(p.default.SCHEME_ID_URI)) throw new Error("Invalid EventStream. SchemeIdUri has to be set");
                    i.schemeIdUri = e[r].schemeIdUri, e[r].hasOwnProperty(T.default.TIMESCALE) && (i.timescale = e[r].timescale), e[r].hasOwnProperty(T.default.VALUE) && (i.value = e[r].value), n.push(i) } return n }

            function y(r) { var i = [],
                    e = r.BaseURL_asArray || [r.baseUri],
                    a = !1; return e.some(function(e) { if (e) { var t = new b.default,
                            n = e.__text || e; return o.isRelative(n) && (a = !0, r.baseUri && (n = o.resolve(n, r.baseUri))), t.url = n, e.hasOwnProperty(T.default.SERVICE_LOCATION) && e.serviceLocation.length ? t.serviceLocation = e.serviceLocation : t.serviceLocation = n, e.hasOwnProperty(T.default.DVB_PRIORITY) && (t.dvb_priority = e[T.default.DVB_PRIORITY]), e.hasOwnProperty(T.default.DVB_WEIGHT) && (t.dvb_weight = e[T.default.DVB_WEIGHT]), e.hasOwnProperty(T.default.AVAILABILITY_TIME_OFFSET) && (t.availabilityTimeOffset = e[T.default.AVAILABILITY_TIME_OFFSET]), e.hasOwnProperty(T.default.AVAILABILITY_TIME_COMPLETE) && (t.availabilityTimeComplete = "false" !== e[T.default.AVAILABILITY_TIME_COMPLETE]), i.push(t), a } }), i } return e = { getIsTypeOf: s, getIsTextTrack: E, getLanguageForAdaptation: function(e) { var t = ""; return e && e.hasOwnProperty(T.default.LANG) && (t = e.lang.replace(/[^A-Za-z0-9-]/g, "")), t }, getViewpointForAdaptation: function(e) { return e && e.hasOwnProperty(T.default.VIEWPOINT) ? e.Viewpoint : null }, getRolesForAdaptation: function(e) { return e && e.hasOwnProperty(T.default.ROLE_ASARRAY) ? e.Role_asArray : [] }, getAccessibilityForAdaptation: function(e) { return e && e.hasOwnProperty(T.default.ACCESSIBILITY_ASARRAY) ? e.Accessibility_asArray : [] }, getAudioChannelConfigurationForAdaptation: function(e) { return e && e.hasOwnProperty(T.default.AUDIOCHANNELCONFIGURATION_ASARRAY) ? e.AudioChannelConfiguration_asArray : [] }, getAudioChannelConfigurationForRepresentation: function(e) { return e && e.hasOwnProperty(T.default.AUDIOCHANNELCONFIGURATION_ASARRAY) ? e.AudioChannelConfiguration_asArray : [] }, getAdaptationForIndex: function(e, t, n) { var r = u(t, n); return 0 < r.length && _(e) ? r[e] : null }, getIndexForAdaptation: function(e, t, n) { if (!e) return -1; for (var r = u(t, n), i = 0; i < r.length; i++) { if ((0, M.default)(a).getInstance().areEqual(r[i], e)) return i } return -1 }, getAdaptationForId: function(e, t, n) { for (var r = u(t, n), i = void 0, i = 0, a = r.length; i < a; i++)
                        if (r[i].hasOwnProperty(T.default.ID) && r[i].id === e) return r[i];
                    return null }, getAdaptationsForType: function(e, t, n) { for (var r = u(e, t), i = void 0, a = [], i = 0, o = r.length; i < o; i++) s(r[i], n) && a.push(m(r[i])); return a }, getCodec: function(e, t, n) { var r, i = null; return e && e.Representation_asArray && 0 < e.Representation_asArray.length && ((r = _(t) && 0 <= t && t < e.Representation_asArray.length ? e.Representation_asArray[t] : e.Representation_asArray[0]) && (i = r.mimeType + ';codecs="' + r.codecs + '"', n && void 0 !== r.width && (i += ';width="' + r.width + '";height="' + r.height + '"'))), i = i && i.replace(/\sprofiles=[^;]*/g, "") }, getMimeType: function(e) { return e && e.Representation_asArray && 0 < e.Representation_asArray.length ? e.Representation_asArray[0].mimeType : null }, getKID: function(e) { return e && e.hasOwnProperty(T.default.CENC_DEFAULT_KID) ? e[T.default.CENC_DEFAULT_KID] : null }, getLabelsForAdaptation: function(e) { if (!e || !Array.isArray(e.Label_asArray)) return []; for (var t = [], n = 0; n < e.Label_asArray.length; n++) t.push({ lang: e.Label_asArray[n].lang, text: e.Label_asArray[n].__text || e.Label_asArray[n] }); return t }, getContentProtectionData: function(e) { return e && e.hasOwnProperty(T.default.CONTENTPROTECTION_ASARRAY) && 0 !== e.ContentProtection_asArray.length ? e.ContentProtection_asArray : null }, getIsDynamic: c, hasProfile: function(e, t) { var n = !1; return e && e.profiles && 0 < e.profiles.length && (n = -1 !== e.profiles.indexOf(t)), n }, getDuration: function(e) { return e && e.hasOwnProperty(T.default.MEDIA_PRESENTATION_DURATION) ? e.mediaPresentationDuration : e && "dynamic" == e.type ? Number.POSITIVE_INFINITY : Number.MAX_SAFE_INTEGER || Number.MAX_VALUE }, getBandwidth: function(e) { return e && e.bandwidth ? e.bandwidth : NaN }, getManifestUpdatePeriod: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? 0 : arguments[1],
                        n = NaN; return e && e.hasOwnProperty(T.default.MINIMUM_UPDATE_PERIOD) && (n = e.minimumUpdatePeriod), isNaN(n) ? n : Math.max(n - t, 1) }, getRepresentationCount: function(e) { return e && Array.isArray(e.Representation_asArray) ? e.Representation_asArray.length : 0 }, getBitrateListForAdaptation: function(e) { var t = m(e); return (t && Array.isArray(t.Representation_asArray) ? t.Representation_asArray : []).map(function(e) { return { bandwidth: e.bandwidth, width: e.width || 0, height: e.height || 0, scanType: e.scanType || null, id: e.id || null } }) }, getRepresentationFor: function(e, t) { return t && t.Representation_asArray && 0 < t.Representation_asArray.length && _(e) ? t.Representation_asArray[e] : null }, getRepresentationsForAdaptation: function(e) { var t, n, r, i, a, o, s = [],
                        u = function(e) { if (e && e.period && _(e.period.index)) { var t = e.period.mpd.manifest.Period_asArray[e.period.index]; if (t && t.AdaptationSet_asArray && _(e.index)) return m(t.AdaptationSet_asArray[e.index]) } }(e),
                        l = void 0,
                        d = void 0; if (u && u.Representation_asArray) { e && e.period && _(e.period.index) && ((t = y(e.period.mpd.manifest)) && (d = t[0])); for (var f = 0, c = u.Representation_asArray.length; f < c; ++f) { var h, p = u.Representation_asArray[f],
                                g = new S.default;
                            g.index = f, g.adaptation = e, p.hasOwnProperty(T.default.ID) && (g.id = p.id), p.hasOwnProperty(T.default.CODECS) && (g.codecs = p.codecs), p.hasOwnProperty(T.default.CODEC_PRIVATE_DATA) && (g.codecPrivateData = p.codecPrivateData), p.hasOwnProperty(T.default.BANDWITH) && (g.bandwidth = p.bandwidth), p.hasOwnProperty(T.default.WIDTH) && (g.width = p.width), p.hasOwnProperty(T.default.HEIGHT) && (g.height = p.height), p.hasOwnProperty(T.default.SCAN_TYPE) && (g.scanType = p.scanType), p.hasOwnProperty(T.default.MAX_PLAYOUT_RATE) && (g.maxPlayoutRate = p.maxPlayoutRate), p.hasOwnProperty(T.default.SEGMENT_BASE) ? (l = p.SegmentBase, g.segmentInfoType = T.default.SEGMENT_BASE) : p.hasOwnProperty(T.default.SEGMENT_LIST) ? (l = p.SegmentList).hasOwnProperty(T.default.SEGMENT_TIMELINE) ? g.segmentInfoType = T.default.SEGMENT_TIMELINE : g.segmentInfoType = T.default.SEGMENT_LIST : p.hasOwnProperty(T.default.SEGMENT_TEMPLATE) ? ((l = p.SegmentTemplate).hasOwnProperty(T.default.SEGMENT_TIMELINE) ? g.segmentInfoType = T.default.SEGMENT_TIMELINE : g.segmentInfoType = T.default.SEGMENT_TEMPLATE, l.hasOwnProperty(T.default.INITIALIZATION_MINUS) && (g.initialization = l.initialization.split("$Bandwidth$").join(p.bandwidth).split("$RepresentationID$").join(p.id))) : g.segmentInfoType = T.default.BASE_URL, g.essentialProperties = v(p), l && (l.hasOwnProperty(T.default.INITIALIZATION) ? ((h = l.Initialization).hasOwnProperty(T.default.SOURCE_URL) && (g.initialization = h.sourceURL), h.hasOwnProperty(T.default.RANGE) && (g.range = h.range)) : p.hasOwnProperty(T.default.MIME_TYPE) && E(p.mimeType) && (g.range = 0), l.hasOwnProperty(T.default.TIMESCALE) && (g.timescale = l.timescale), l.hasOwnProperty(T.default.DURATION) ? g.segmentDuration = l.duration / g.timescale : p.hasOwnProperty(T.default.SEGMENT_TEMPLATE) && (l = p.SegmentTemplate).hasOwnProperty(T.default.SEGMENT_TIMELINE) && (g.segmentDuration = (i = l.SegmentTimeline, a = void 0, a = i.S_asArray[0], o = i.S_asArray[1], (a.hasOwnProperty("d") ? a.d : o.t - a.t) / g.timescale)), l.hasOwnProperty(T.default.MEDIA) && (g.media = l.media), l.hasOwnProperty(T.default.START_NUMBER) && (g.startNumber = l.startNumber), l.hasOwnProperty(T.default.INDEX_RANGE) && (g.indexRange = l.indexRange), l.hasOwnProperty(T.default.PRESENTATION_TIME_OFFSET) && (g.presentationTimeOffset = l.presentationTimeOffset / g.timescale), l.hasOwnProperty(T.default.AVAILABILITY_TIME_OFFSET) ? g.availabilityTimeOffset = l.availabilityTimeOffset : d && void 0 !== d.availabilityTimeOffset && (g.availabilityTimeOffset = d.availabilityTimeOffset), l.hasOwnProperty(T.default.AVAILABILITY_TIME_COMPLETE) ? g.availabilityTimeComplete = "false" !== l.availabilityTimeComplete : d && void 0 !== d.availabilityTimeComplete && (g.availabilityTimeComplete = d.availabilityTimeComplete)), g.MSETimeOffset = (r = (n = g).presentationTimeOffset, n.adaptation.period.start - r), g.path = [e.period.index, e.index, f], s.push(g) } } return s }, getAdaptationsForPeriod: function(e) { var t = e && _(e.index) ? e.mpd.manifest.Period_asArray[e.index] : null,
                        n = [],
                        r = void 0,
                        i = void 0,
                        a = void 0; if (t && t.AdaptationSet_asArray)
                        for (a = 0; a < t.AdaptationSet_asArray.length; a++) i = t.AdaptationSet_asArray[a], r = new g.default, i.hasOwnProperty(T.default.ID) && (r.id = i.id), r.index = a, r.period = e, s(i, p.default.MUXED) ? r.type = p.default.MUXED : s(i, p.default.AUDIO) ? r.type = p.default.AUDIO : s(i, p.default.VIDEO) ? r.type = p.default.VIDEO : s(i, p.default.FRAGMENTED_TEXT) ? r.type = p.default.FRAGMENTED_TEXT : s(i, p.default.IMAGE) ? r.type = p.default.IMAGE : r.type = p.default.TEXT, n.push(r); return n }, getRegularPeriods: function(e) { for (var t = !!e && c(e.manifest), n = [], r = null, i = null, a = null, o = null, s = void 0, s = 0, u = e && e.manifest && e.manifest.Period_asArray ? e.manifest.Period_asArray.length : 0; s < u; s++)(i = e.manifest.Period_asArray[s]).hasOwnProperty(T.default.START) ? (o = new A.default).start = i.start : null !== r && r.hasOwnProperty(T.default.DURATION) && null !== a ? (o = new A.default).start = parseFloat((a.start + a.duration).toFixed(5)) : 0 !== s || t || ((o = new A.default).start = 0), null !== a && isNaN(a.duration) && (null !== o ? a.duration = parseFloat((o.start - a.start).toFixed(5)) : l.warn("First period duration could not be calculated because lack of start and duration period properties. This will cause timing issues during playback")), null !== o && (o.id = function(e, t) { if (!e) throw new Error("Period cannot be null or undefined"); var n = A.default.DEFAULT_ID + "_" + t;
                        e.hasOwnProperty(T.default.ID) && 0 < e.id.length && "__proto__" !== e.id && (n = e.id); return n }(i, s), o.index = s, o.mpd = e, i.hasOwnProperty(T.default.DURATION) && (o.duration = i.duration), n.push(o), r = i, a = o), o = i = null; return 0 === n.length || null !== a && isNaN(a.duration) && (a.duration = parseFloat((function(e) {! function() { if (!d || !d.hasOwnProperty("error")) throw new Error(p.default.MISSING_CONFIG_ERROR) }(); var t = c(e.mpd.manifest),
                            n = void 0;
                        e.mpd.manifest.mediaPresentationDuration ? n = e.mpd.manifest.mediaPresentationDuration : e.duration ? n = e.duration : t ? n = Number.POSITIVE_INFINITY : d.error(new w.default(O.default.MANIFEST_ERROR_ID_PARSE_CODE, "Must have @mediaPresentationDuration on MPD or an explicit @duration on the last period.", e)); return n }(a) - a.start).toFixed(5))), n }, getMpd: function(e) { var t = new i.default; return e && ((t.manifest = e).hasOwnProperty(T.default.AVAILABILITY_START_TIME) ? t.availabilityStartTime = new Date(e.availabilityStartTime.getTime()) : e.loadedTime && (t.availabilityStartTime = new Date(e.loadedTime.getTime())), e.hasOwnProperty(T.default.AVAILABILITY_END_TIME) && (t.availabilityEndTime = new Date(e.availabilityEndTime.getTime())), e.hasOwnProperty(T.default.MINIMUM_UPDATE_PERIOD) && (t.minimumUpdatePeriod = e.minimumUpdatePeriod), e.hasOwnProperty(T.default.MEDIA_PRESENTATION_DURATION) && (t.mediaPresentationDuration = e.mediaPresentationDuration), e.hasOwnProperty(T.default.SUGGESTED_PRESENTATION_DELAY) && (t.suggestedPresentationDelay = e.suggestedPresentationDelay), e.hasOwnProperty(T.default.TIMESHIFT_BUFFER_DEPTH) && (t.timeShiftBufferDepth = e.timeShiftBufferDepth), e.hasOwnProperty(T.default.MAX_SEGMENT_DURATION) && (t.maxSegmentDuration = e.maxSegmentDuration)), t }, getEventsForPeriod: function(e) { var t = e && e.mpd && e.mpd.manifest ? e.mpd.manifest : null,
                        n = t ? t.Period_asArray : null,
                        r = n && e && _(e.index) ? n[e.index].EventStream_asArray : null,
                        i = [],
                        a = void 0,
                        o = void 0; if (r)
                        for (a = 0; a < r.length; a++) { var s = new D.default; if (s.period = e, s.timescale = 1, !r[a].hasOwnProperty(p.default.SCHEME_ID_URI)) throw new Error("Invalid EventStream. SchemeIdUri has to be set"); for (s.schemeIdUri = r[a].schemeIdUri, r[a].hasOwnProperty(T.default.TIMESCALE) && (s.timescale = r[a].timescale), r[a].hasOwnProperty(T.default.VALUE) && (s.value = r[a].value), o = 0; r[a].Event_asArray && o < r[a].Event_asArray.length; o++) { var u, l = new R.default;
                                l.presentationTime = 0, l.eventStream = s, r[a].Event_asArray[o].hasOwnProperty(T.default.PRESENTATION_TIME) && (l.presentationTime = r[a].Event_asArray[o].presentationTime, u = s.presentationTimeOffset ? s.presentationTimeOffset * s.timescale : 0, l.calculatedPresentationTime = l.presentationTime + e.start * s.timescale + u), r[a].Event_asArray[o].hasOwnProperty(T.default.DURATION) && (l.duration = r[a].Event_asArray[o].duration), r[a].Event_asArray[o].hasOwnProperty(T.default.ID) && (l.id = r[a].Event_asArray[o].id), r[a].Event_asArray[o].Signal && r[a].Event_asArray[o].Signal.Binary ? l.messageData = f.decodeArray(r[a].Event_asArray[o].Signal.Binary.toString()) : l.messageData = r[a].Event_asArray[o].messageData || r[a].Event_asArray[o].__text, i.push(l) } }
                    return i }, getEventStreamForAdaptationSet: function(e, t) { var n = void 0,
                        r = void 0,
                        i = void 0; return e && e.Period_asArray && t && t.period && _(t.period.index) && (r = e.Period_asArray[t.period.index]) && r.AdaptationSet_asArray && _(t.index) && (i = r.AdaptationSet_asArray[t.index]) && (n = i.InbandEventStream_asArray), h(n, null) }, getEventStreamForRepresentation: function(e, t) { var n = void 0,
                        r = void 0,
                        i = void 0,
                        a = void 0; return e && e.Period_asArray && t && t.adaptation && t.adaptation.period && _(t.adaptation.period.index) && (r = e.Period_asArray[t.adaptation.period.index]) && r.AdaptationSet_asArray && _(t.adaptation.index) && (i = r.AdaptationSet_asArray[t.adaptation.index]) && i.Representation_asArray && _(t.index) && (a = i.Representation_asArray[t.index]) && (n = a.InbandEventStream_asArray), h(n, t) }, getUTCTimingSources: function(e) { var t = c(e),
                        n = !!e && e.hasOwnProperty(T.default.AVAILABILITY_START_TIME),
                        r = e ? e.UTCTiming_asArray : null,
                        i = []; return (t || n) && r && r.forEach(function(e) { var t = new I.default;
                        e.hasOwnProperty(p.default.SCHEME_ID_URI) && (t.schemeIdUri = e.schemeIdUri, e.hasOwnProperty(T.default.VALUE) && (t.value = e.value.toString(), i.push(t))) }), i }, getBaseURLsFromElement: y, getRepresentationSortFunction: t, getLocation: function(e) { if (e && e.hasOwnProperty(p.default.LOCATION)) return e.Location = e.Location_asArray[0], e.Location }, getSuggestedPresentationDelay: function(e) { return e && e.hasOwnProperty(T.default.SUGGESTED_PRESENTATION_DELAY) ? e.suggestedPresentationDelay : null }, getAvailabilityStartTime: function(e) { return e && e.hasOwnProperty(T.default.AVAILABILITY_START_TIME) && null !== e.availabilityStartTime ? e.availabilityStartTime.getTime() : null }, getServiceDescriptions: function(e) { var t = []; if (e && e.hasOwnProperty(T.default.SERVICE_DESCRIPTION)) { var n = !0,
                            r = !1,
                            i = void 0; try { for (var a, o = e.ServiceDescription_asArray[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) { var s = a.value,
                                    u = void 0,
                                    l = void 0,
                                    d = void 0,
                                    f = void 0; for (var c in s) s.hasOwnProperty(c) && (c === T.default.ID ? u = s[c] : c === T.default.SERVICE_DESCRIPTION_SCOPE ? l = s[c].schemeIdUri : c === T.default.SERVICE_DESCRIPTION_LATENCY ? d = { target: s[c].target, max: s[c].max, min: s[c].min } : c === T.default.SERVICE_DESCRIPTION_PLAYBACK_RATE && (f = { max: s[c].max, min: s[c].min }));
                                l === p.default.SERVICE_DESCRIPTION_LL_SCHEME && (d || f) && t.push({ id: u, schemeIdUri: l, latency: d, playbackRate: f }) } } catch (e) { r = !0, i = e } finally { try {!n && o.return && o.return() } finally { if (r) throw i } } } return t }, getSupplementalPropperties: function(e) { var t = {}; if (e && e.hasOwnProperty(T.default.SUPPLEMENTAL_PROPERTY)) { var n = !0,
                            r = !1,
                            i = void 0; try { for (var a, o = e.SupplementalProperty_asArray[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) { var s = a.value;
                                s.hasOwnProperty(p.default.SCHEME_ID_URI) && s.hasOwnProperty(T.default.VALUE) && (t[s[p.default.SCHEME_ID_URI]] = s[T.default.VALUE]) } } catch (e) { r = !0, i = e } finally { try {!n && o.return && o.return() } finally { if (r) throw i } } } return t }, setConfig: function(e) { e && (e.errHandler && (d = e.errHandler), e.BASE64 && (f = e.BASE64)) } }, l = (0, C.default)(a).getInstance().getLogger(e), e }
        o.__dashjs_factory_name = "DashManifestModel", n.default = a.default.getSingletonFactory(o), t.exports = n.default }, { 108: 108, 205: 205, 217: 217, 221: 221, 226: 226, 45: 45, 47: 47, 51: 51, 61: 61, 84: 84, 85: 85, 86: 86, 87: 87, 90: 90, 91: 91, 92: 92, 96: 96 }], 66: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            u = r(e(76)),
            l = r(e(3)),
            d = r(e(75)),
            f = r(e(73)),
            c = r(e(72)),
            h = r(e(74)),
            p = r(e(69)),
            g = r(e(70));

        function a(e) { e = e || {}; var t = this.context,
                n = e.debug,
                r = void 0,
                a = void 0,
                i = void 0,
                o = void 0,
                s = void 0; return r = { parse: function(e) { var t = void 0,
                        n = window.performance.now(); if (!(t = o.xml_str2json(e))) throw new Error("parsing the manifest failed"); var r = window.performance.now();
                    s.run(t); var i = window.performance.now(); return a.info("Parsing complete: ( xml2json: " + (r - n).toPrecision(3) + "ms, objectiron: " + (i - r).toPrecision(3) + "ms, total: " + ((i - n) / 1e3).toPrecision(3) + "s)"), t.protocol = "DASH", t }, getMatchers: function() { return i }, getIron: function() { return s } }, a = n.getLogger(r), i = [new f.default, new c.default, new h.default, new d.default], o = new l.default({ escapeMode: !1, attributePrefix: "", arrayAccessForm: "property", emptyNodeForm: "object", stripWhitespaces: !1, enableToStringFunc: !0, ignoreRoot: !0, matchers: i }), s = (0, u.default)(t).create({ adaptationset: new p.default, period: new g.default }), r }
        a.__dashjs_factory_name = "DashParser", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 3: 3, 47: 47, 69: 69, 70: 70, 72: 72, 73: 73, 74: 74, 75: 75, 76: 76 }], 67: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "name", get: function() { return this._name } }, { key: "merge", get: function() { return this._merge } }]), a);

        function a(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a); var t;
            this._name = e, this._merge = (t = e) && t.length && t.charAt(0) === t.charAt(0).toUpperCase() }
        n.default = i, t.exports = n.default }, {}], 68: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e };

        function i(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var a, o = e(67),
            s = (a = o) && a.__esModule ? a : { default: a },
            u = (r(l, [{ key: "name", get: function() { return this._name } }, { key: "children", get: function() { return this._children } }, { key: "properties", get: function() { return this._properties } }]), l);

        function l(e, t, n) { var r = this;! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), this._name = e || "", this._properties = [], this._children = n || [], Array.isArray(t) && t.forEach(function(e) { r._properties.push(new s.default(e)) }) }
        n.default = u, t.exports = n.default }, { 67: 67 }], 69: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } };

        function i(e) { return e && e.__esModule ? e : { default: e } } var a = i(e(68)),
            o = i(e(61)),
            s = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(u, a.default), u);

        function u() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u); var e = [o.default.PROFILES, o.default.WIDTH, o.default.HEIGHT, o.default.SAR, o.default.FRAMERATE, o.default.AUDIO_SAMPLING_RATE, o.default.MIME_TYPE, o.default.SEGMENT_PROFILES, o.default.CODECS, o.default.MAXIMUM_SAP_PERIOD, o.default.START_WITH_SAP, o.default.MAX_PLAYOUT_RATE, o.default.CODING_DEPENDENCY, o.default.SCAN_TYPE, o.default.FRAME_PACKING, o.default.AUDIO_CHANNEL_CONFIGURATION, o.default.CONTENT_PROTECTION, o.default.ESSENTIAL_PROPERTY, o.default.SUPPLEMENTAL_PROPERTY, o.default.INBAND_EVENT_STREAM];
            r(Object.getPrototypeOf(u.prototype), "constructor", this).call(this, o.default.ADAPTATION_SET, e, [new a.default(o.default.REPRESENTATION, e, [new a.default(o.default.SUB_REPRESENTATION, e)])]) }
        n.default = s, t.exports = n.default }, { 61: 61, 68: 68 }], 70: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } };

        function i(e) { return e && e.__esModule ? e : { default: e } } var a = i(e(68)),
            o = i(e(61)),
            s = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(u, a.default), u);

        function u() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u); var e = [o.default.SEGMENT_BASE, o.default.SEGMENT_TEMPLATE, o.default.SEGMENT_LIST];
            r(Object.getPrototypeOf(u.prototype), "constructor", this).call(this, o.default.PERIOD, e, [new a.default(o.default.ADAPTATION_SET, e, [new a.default(o.default.REPRESENTATION, e)])]) }
        n.default = s, t.exports = n.default }, { 61: 61, 68: 68 }], 71: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "test", get: function() { return this._test } }, { key: "converter", get: function() { return this._converter } }]), a);

        function a(e, t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a), this._test = e, this._converter = t }
        n.default = i, t.exports = n.default }, {}], 72: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(71),
            o = (i = a) && i.__esModule ? i : { default: i },
            s = 60,
            u = 60,
            l = 1e3,
            d = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+-])([0-9]{2})(?::?)([0-9]{2}))?/,
            f = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(c, o.default), c);

        function c() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, c), r(Object.getPrototypeOf(c.prototype), "constructor", this).call(this, function(e) { return d.test(e.value) }, function(e) { var t, n = d.exec(e),
                    r = void 0,
                    r = Date.UTC(parseInt(n[1], 10), parseInt(n[2], 10) - 1, parseInt(n[3], 10), parseInt(n[4], 10), parseInt(n[5], 10), n[6] && parseInt(n[6], 10) || 0, n[7] && parseFloat(n[7]) * l || 0); return n[9] && n[10] && (t = parseInt(n[9], 10) * u + parseInt(n[10], 10), r += ("+" === n[8] ? -1 : 1) * t * s * l), new Date(r) }) }
        n.default = f, t.exports = n.default }, { 71: 71 }], 73: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } };

        function i(e) { return e && e.__esModule ? e : { default: e } } var a = i(e(71)),
            o = i(e(108)),
            s = i(e(61)),
            u = /^([-])?P(([\d.]*)Y)?(([\d.]*)M)?(([\d.]*)D)?T?(([\d.]*)H)?(([\d.]*)M)?(([\d.]*)S)?/,
            l = 31536e3,
            d = 2592e3,
            f = 86400,
            c = 3600,
            h = 60,
            p = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(g, a.default), g);

        function g() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, g), r(Object.getPrototypeOf(g.prototype), "constructor", this).call(this, function(e) { for (var t = [s.default.MIN_BUFFER_TIME, s.default.MEDIA_PRESENTATION_DURATION, s.default.MINIMUM_UPDATE_PERIOD, s.default.TIMESHIFT_BUFFER_DEPTH, s.default.MAX_SEGMENT_DURATION, s.default.MAX_SUBSEGMENT_DURATION, s.default.SUGGESTED_PRESENTATION_DELAY, s.default.START, o.default.START_TIME, s.default.DURATION], n = t.length, r = 0; r < n; r++)
                    if (e.nodeName === t[r]) return u.test(e.value);
                return !1 }, function(e) { var t = u.exec(e),
                    n = parseFloat(t[3] || 0) * l + parseFloat(t[5] || 0) * d + parseFloat(t[7] || 0) * f + parseFloat(t[9] || 0) * c + parseFloat(t[11] || 0) * h + parseFloat(t[13] || 0); return void 0 !== t[1] && (n = -n), n }) }
        n.default = p, t.exports = n.default }, { 108: 108, 61: 61, 71: 71 }], 74: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(71),
            o = (i = a) && i.__esModule ? i : { default: i },
            s = /^[-+]?[0-9]+[.]?[0-9]*([eE][-+]?[0-9]+)?$/,
            u = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(l, o.default), l);

        function l() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), r(Object.getPrototypeOf(l.prototype), "constructor", this).call(this, function(e) { return s.test(e.value) }, function(e) { return parseFloat(e) }) }
        n.default = u, t.exports = n.default }, { 71: 71 }], 75: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } };

        function i(e) { return e && e.__esModule ? e : { default: e } }

        function a(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e } var o = i(e(71)),
            s = i(e(61)),
            u = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(l, o.default), l);

        function l() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), r(Object.getPrototypeOf(l.prototype), "constructor", this).call(this, function(e, t) { var n, r = (a(n = {}, s.default.MPD, [s.default.ID, s.default.PROFILES]), a(n, s.default.PERIOD, [s.default.ID]), a(n, s.default.BASE_URL, [s.default.SERVICE_LOCATION, s.default.BYTE_RANGE]), a(n, s.default.SEGMENT_BASE, [s.default.INDEX_RANGE]), a(n, s.default.INITIALIZATION, [s.default.RANGE]), a(n, s.default.REPRESENTATION_INDEX, [s.default.RANGE]), a(n, s.default.SEGMENT_LIST, [s.default.INDEX_RANGE]), a(n, s.default.BITSTREAM_SWITCHING, [s.default.RANGE]), a(n, s.default.SEGMENT_URL, [s.default.MEDIA_RANGE, s.default.INDEX_RANGE]), a(n, s.default.SEGMENT_TEMPLATE, [s.default.INDEX_RANGE, s.default.MEDIA, s.default.INDEX, s.default.INITIALIZATION_MINUS, s.default.BITSTREAM_SWITCHING_MINUS]), a(n, s.default.ASSET_IDENTIFIER, [s.default.VALUE, s.default.ID]), a(n, s.default.EVENT_STREAM, [s.default.VALUE]), a(n, s.default.ADAPTATION_SET, [s.default.PROFILES, s.default.MIME_TYPE, s.default.SEGMENT_PROFILES, s.default.CODECS, s.default.CONTENT_TYPE]), a(n, s.default.FRAME_PACKING, [s.default.VALUE, s.default.ID]), a(n, s.default.AUDIO_CHANNEL_CONFIGURATION, [s.default.VALUE, s.default.ID]), a(n, s.default.CONTENT_PROTECTION, [s.default.VALUE, s.default.ID]), a(n, s.default.ESSENTIAL_PROPERTY, [s.default.VALUE, s.default.ID]), a(n, s.default.SUPPLEMENTAL_PROPERTY, [s.default.VALUE, s.default.ID]), a(n, s.default.INBAND_EVENT_STREAM, [s.default.VALUE, s.default.ID]), a(n, s.default.ACCESSIBILITY, [s.default.VALUE, s.default.ID]), a(n, s.default.ROLE, [s.default.VALUE, s.default.ID]), a(n, s.default.RATING, [s.default.VALUE, s.default.ID]), a(n, s.default.VIEWPOINT, [s.default.VALUE, s.default.ID]), a(n, s.default.CONTENT_COMPONENT, [s.default.CONTENT_TYPE]), a(n, s.default.REPRESENTATION, [s.default.ID, s.default.DEPENDENCY_ID, s.default.MEDIA_STREAM_STRUCTURE_ID]), a(n, s.default.SUBSET, [s.default.ID]), a(n, s.default.METRICS, [s.default.METRICS_MINUS]), a(n, s.default.REPORTING, [s.default.VALUE, s.default.ID]), n); if (r.hasOwnProperty(t)) { var i = r[t]; return void 0 !== i && 0 <= i.indexOf(e.name) } return !1 }, function(e) { return String(e) }) }
        n.default = u, t.exports = n.default }, { 61: 61, 71: 71 }], 76: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(d) {
            function l(e, t, n) { for (var r = 0, i = e.length; r < i; ++r) { var a, o, s = e[r];
                    t[s.name] && (n[s.name] ? s.merge && (a = t[s.name], o = n[s.name], "object" == typeof a && "object" == typeof o ? function(e, t) { for (var n in e) t.hasOwnProperty(n) || (t[n] = e[n]) }(a, o) : n[s.name] = a + o) : n[s.name] = t[s.name]) } }

            function f(e, t) { for (var n = 0, r = e.children.length; n < r; ++n) { var i = e.children[n],
                        a = t[i.name + "_asArray"]; if (a)
                        for (var o = 0, s = a.length; o < s; ++o) { var u = a[o];
                            l(e.properties, t, u), f(i, u) } } } return { run: function(e) { if (null === e || "object" != typeof e) return e; if ("period" in d)
                        for (var t = d.period, n = e.Period_asArray, r = 0, i = n.length; r < i; ++r) { var a = n[r]; if (f(t, a), "adaptationset" in d) { var o = a.AdaptationSet_asArray; if (o)
                                    for (var s = d.adaptationset, u = 0, l = o.length; u < l; ++u) f(s, o[u]) } }
                    return e } } }
        o.__dashjs_factory_name = "ObjectIron"; var s = a.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 47: 47 }], 77: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(108)),
            c = e(80);

        function o(e, l) { var d = (e = e || {}).timelineConverter;

            function f() { if (!d || !d.hasOwnProperty("calcPeriodRelativeTimeFromMpdRelativeTime")) throw new Error(a.default.MISSING_CONFIG_ERROR) }

            function i(e, t) { if (f(), !e) return null; var n, r = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentList,
                    i = r.SegmentURL_asArray.length,
                    a = e && !isNaN(e.startNumber) ? e.startNumber : 1,
                    o = Math.max(a - 1, 0),
                    s = e.startNumber,
                    u = null; return t - o < i && (n = r.SegmentURL_asArray[t - o], (u = (0, c.getIndexBasedSegment)(d, l, e, t)) && (u.replacementTime = (s + t - 1) * e.segmentDuration, u.media = n.media ? n.media : "", u.mediaRange = n.mediaRange, u.index = t, u.indexRange = n.indexRange)), e.availableSegmentsNumber = i, u } return { getSegmentByIndex: i, getSegmentByTime: function(e, t) { if (f(), !e) return null; var n = e.segmentDuration; if (isNaN(n)) return null; var r = d.calcPeriodRelativeTimeFromMpdRelativeTime(e, t); return i(e, Math.floor(r / n)) } } }
        o.__dashjs_factory_name = "ListSegmentsGetter"; var s = i.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 108: 108, 47: 47, 80: 80 }], 78: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, null, [{ key: "round10", value: function(e, t) { return n = "round", r = e, void 0 !== (i = t) && 0 != +i ? (i = +i, null === (r = +r) || isNaN(r) || "number" != typeof i || i % 1 != 0 ? NaN : (r = r.toString().split("e"), +((r = (r = Math[n](+(r[0] + "e" + (r[1] ? r[1] - i : -i)))).toString().split("e"))[0] + "e" + (r[1] ? +r[1] + i : i)))) : Math[n](r); var n, r, i } }]), a);

        function a() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a) }
        n.default = i, t.exports = n.default }, {}], 79: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            o = r(e(108));

        function a(e) { var t = (e = e || {}).timelineConverter;

            function a() { if (!t || !t.hasOwnProperty("calcPeriodRelativeTimeFromMpdRelativeTime")) throw new Error(o.default.MISSING_CONFIG_ERROR) }

            function n(e, t) { if (a(), !e) return null; var n = e.segments ? e.segments.length : -1,
                    r = void 0; if (t < n && (r = e.segments[t]) && r.availabilityIdx === t) return r; for (var i = 0; i < n; i++)
                    if ((r = e.segments[i]) && r.availabilityIdx === t) return r;
                return null } return { getSegmentByIndex: n, getSegmentByTime: function(e, t) { return a(), n(e, function(e, t) { if (!e) return -1; var n = e.segments,
                            r = n ? n.length : null,
                            i = -1,
                            a = void 0,
                            o = void 0,
                            s = void 0,
                            u = void 0,
                            l = void 0; if (n && 0 < r)
                            for (l = 0; l < r; l++)
                                if (o = n[l], s = o.presentationStartTime, u = o.duration, s <= t + (a = u / 2) && t - a < s + u) { i = o.availabilityIdx; break }
                        return i }(e, t)) } } }
        a.__dashjs_factory_name = "SegmentBaseGetter"; var s = i.default.getClassFactory(a);
        n.default = s, t.exports = n.default }, { 108: 108, 47: 47 }], 80: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.unescapeDollarsInTemplate = function(e) { return e ? e.split("$$").join("$") : e }, n.replaceIDForTemplate = function(e, t) { if (!t || !e || -1 === e.indexOf("$RepresentationID$")) return e; var n = t.toString(); return e.split("$RepresentationID$").join(n) }, n.replaceTokenForTemplate = g, n.getIndexBasedSegment = function(e, t, n, r) { var i, a, o = void 0;
            o = n.segmentDuration, isNaN(o) && (o = n.adaptation.period.duration);
            i = parseFloat((n.adaptation.period.start + r * o).toFixed(5)), a = parseFloat((i + o).toFixed(5)); var s = _(n, o, i, e.calcMediaTimeFromPresentationTime(i, n), e.calcAvailabilityStartTimeFromPresentationTime(i, n.adaptation.period.mpd, t), e, a, t, r); return E(e, n, s, t) ? s : null }, n.getTimeBasedSegment = function(e, t, n, r, i, a, o, s, u, l) { var d, f, c = r / a,
                h = Math.min(i / a, n.adaptation.period.mpd.maxSegmentDuration),
                p = void 0; return d = e.calcPresentationTimeFromMediaTime(c, n), f = d + h, p = _(n, h, d, c, n.adaptation.period.mpd.manifest.loadedTime, e, f, t, u), E(e, n, p, t) ? (p.replacementTime = l || r, o = g(o, "Number", p.replacementNumber), o = g(o, "Time", p.replacementTime), p.media = o, p.mediaRange = s, p) : null }; var r, i = e(94),
            f = (r = i) && r.__esModule ? r : { default: r };

        function c(e, t) { for (; e.length < t;) e = "0" + e; return e }

        function g(e, t, n) { var r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                l = t.length,
                d = "%0".length; if (!e) return e; for (;;) { if ((r = e.indexOf("$" + t)) < 0) return e; if ((i = e.indexOf("$", r + l)) < 0) return e; if (r < (a = e.indexOf("%0", r + l)) && a < i) switch (o = e.charAt(i - 1), s = parseInt(e.substring(a + d, i - 1), 10), o) {
                    case "d":
                    case "i":
                    case "u":
                        u = c(n.toString(), s); break;
                    case "x":
                        u = c(n.toString(16), s); break;
                    case "X":
                        u = c(n.toString(16), s).toUpperCase(); break;
                    case "o":
                        u = c(n.toString(8), s); break;
                    default:
                        return e } else u = n;
                e = e.substring(0, r) + u + e.substring(i + 1) } }

        function _(e, t, n, r, i, a, o, s, u) { var l, d = new f.default; return d.representation = e, d.duration = t, d.presentationStartTime = n, d.mediaStartTime = r, d.availabilityStartTime = i, d.availabilityEndTime = a.calcAvailabilityEndTimeFromPresentationTime(o, e.adaptation.period.mpd, s), d.wallStartTime = a.calcWallTimeForSegment(d, s), d.replacementNumber = (l = u, d.representation.startNumber + l), d.availabilityIdx = u, d }

        function E(e, t, n, r) { var i = e.getPeriodEnd(t, r); if (e.calcPeriodRelativeTimeFromMpdRelativeTime(t, i) <= e.calcPeriodRelativeTimeFromMpdRelativeTime(t, n.presentationStartTime)) { if (!r) return; if (t.segmentAvailabilityRange && n.presentationStartTime >= t.segmentAvailabilityRange.end) return } return 1 } }, { 94: 94 }], 81: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(108)),
            d = e(80);

        function o(e, s) { var u = (e = e || {}).timelineConverter;

            function l() { if (!u || !u.hasOwnProperty("calcPeriodRelativeTimeFromMpdRelativeTime")) throw new Error(a.default.MISSING_CONFIG_ERROR) }

            function i(e, t) { if (l(), !e) return null; var n = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentTemplate;
                t = Math.max(t, 0); var r, i = (0, d.getIndexBasedSegment)(u, s, e, t);
                i && (i.replacementTime = (t - 1) * e.segmentDuration, r = n.media, r = (0, d.replaceTokenForTemplate)(r, "Number", i.replacementNumber), r = (0, d.replaceTokenForTemplate)(r, "Time", i.replacementTime), i.media = r); var a = e.segmentDuration,
                    o = e.segmentAvailabilityRange; return isNaN(a) ? e.availableSegmentsNumber = 1 : e.availableSegmentsNumber = Math.ceil((o.end - o.start) / a), i } return { getSegmentByIndex: i, getSegmentByTime: function(e, t) { if (l(), !e) return null; var n = e.segmentDuration; if (isNaN(n)) return null; var r = u.calcPeriodRelativeTimeFromMpdRelativeTime(e, t); return i(e, Math.floor(r / n)) } } }
        o.__dashjs_factory_name = "TemplateSegmentsGetter"; var s = i.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 108: 108, 47: 47, 80: 80 }], 82: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var g = r(e(46)),
            _ = r(e(54)),
            i = r(e(47)),
            E = r(e(61)),
            m = r(e(65)),
            v = r(e(48));

        function a() { var e, t = this.context,
                n = (0, g.default)(t).getInstance(),
                u = (0, v.default)(t).getInstance(),
                c = void 0,
                i = void 0,
                l = void 0,
                r = void 0;

            function a(e) { i = e }

            function o(e, t, n, r) { return r ? n && t.timeShiftBufferDepth != Number.POSITIVE_INFINITY ? new Date(t.availabilityStartTime.getTime() + 1e3 * (e + t.timeShiftBufferDepth)) : t.availabilityEndTime : n ? new Date(t.availabilityStartTime.getTime() + 1e3 * (e - i)) : t.availabilityStartTime }

            function d(e, t) { return (e.getTime() - t.mpd.availabilityStartTime.getTime() + 1e3 * i) / 1e3 }

            function h(e, t) { return e + (t.adaptation.period.start - t.presentationTimeOffset) }

            function s(e) { l || void 0 !== e.offset && (a(e.offset / 1e3), l = !0) }

            function f() { i = 0, l = !1, r = NaN }

            function p() { n.off(_.default.TIME_SYNCHRONIZATION_COMPLETED, s, this), f() } return e = { initialize: function() { f(), n.on(_.default.TIME_SYNCHRONIZATION_COMPLETED, s, this) }, isTimeSyncCompleted: function() { return l }, setTimeSyncCompleted: function(e) { l = e }, getClientTimeOffset: function() { return i }, setClientTimeOffset: a, getExpectedLiveEdge: function() { return r }, setExpectedLiveEdge: function(e) { r = e }, calcAvailabilityStartTimeFromPresentationTime: function(e, t, n) { return o.call(this, e, t, n) }, calcAvailabilityEndTimeFromPresentationTime: function(e, t, n) { return o.call(this, e, t, n, !0) }, calcPresentationTimeFromWallTime: d, calcPresentationTimeFromMediaTime: h, calcPeriodRelativeTimeFromMpdRelativeTime: function(e, t) { return t - e.adaptation.period.start }, calcMediaTimeFromPresentationTime: function(e, t) { return e - t.adaptation.period.start + t.presentationTimeOffset }, calcSegmentAvailabilityRange: function(e, t) { var n = e.adaptation.period,
                        r = { start: n.start, end: n.start + n.duration }; if (!t) return r; if (!l && e.segmentAvailabilityRange) return e.segmentAvailabilityRange; var i = e.segmentDuration || (e.segments && e.segments.length ? e.segments[e.segments.length - 1].duration : 0); if (e.segmentInfoType === E.default.SEGMENT_TIMELINE && u.get().streaming.calcSegmentAvailabilityRangeFromTimeline) return function(e) { var t, n = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index],
                            r = c.getRepresentationFor(e.index, n),
                            i = r.SegmentTemplate.SegmentTimeline,
                            a = r.SegmentTemplate.timescale,
                            o = i.S_asArray,
                            s = { start: 0, end: 0 },
                            u = 0,
                            l = void 0,
                            d = void 0,
                            f = void 0; for (s.start = h(o[0].t / a, e), f = 0, t = o.length; f < t; f++) l = o[f], d = 0, l.hasOwnProperty("r") && (d = l.r), u += l.d / a * (1 + d); return s.end = s.start + u, s }(e); var a = d(new Date, n),
                        o = n.start + n.duration;
                    r.start = Math.max(a - n.mpd.timeShiftBufferDepth, n.start); var s = void 0 !== e.availabilityTimeOffset && e.availabilityTimeOffset < i ? i - e.availabilityTimeOffset : i; return r.end = o <= a && a - s < o ? o : a - s, r }, getPeriodEnd: function(e, t) { var n = e.adaptation.period; if (!t) return n.start + n.duration; if (!l && e.segmentAvailabilityRange) return e.segmentAvailabilityRange; var r = e.segmentDuration || (e.segments && e.segments.length ? e.segments[e.segments.length - 1].duration : 0),
                        i = d(new Date, n),
                        a = n.start + n.duration,
                        o = void 0 !== e.availabilityTimeOffset && e.availabilityTimeOffset < r ? r - e.availabilityTimeOffset : r; return Math.min(i - o, a) }, calcWallTimeForSegment: function(e, t) { var n = void 0,
                        r = void 0,
                        i = void 0; return t && (n = e.representation.adaptation.period.mpd.suggestedPresentationDelay, r = e.presentationStartTime + n, i = new Date(e.availabilityStartTime.getTime() + 1e3 * r)), i }, reset: p }, c = (0, m.default)(t).getInstance(), p(), e }
        a.__dashjs_factory_name = "TimelineConverter", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 46: 46, 47: 47, 48: 48, 54: 54, 61: 61, 65: 65 }], 83: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(108)),
            p = e(80);

        function o(e, v) { var y = (e = e || {}).timelineConverter;

            function t() { if (!y || !y.hasOwnProperty("calcMediaTimeFromPresentationTime") || !y.hasOwnProperty("calcSegmentAvailabilityRange")) throw new Error(a.default.MISSING_CONFIG_ERROR) }

            function n(e, t) { for (var n, r = e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentTemplate || e.adaptation.period.mpd.manifest.Period_asArray[e.adaptation.period.index].AdaptationSet_asArray[e.adaptation.index].Representation_asArray[e.index].SegmentList, i = r.SegmentTimeline, a = r.SegmentURL_asArray, o = 0, s = 0, u = -1, l = void 0, d = void 0, f = void 0, c = void 0, h = void 0, p = void 0, g = e.timescale, _ = !1, d = 0, E = (n = i.S_asArray).length; d < E && !_; d++) { var m, c = 0; for ((l = n[d]).hasOwnProperty("r") && (c = l.r), l.hasOwnProperty("t") && (s = (o = l.t) / g), c < 0 && ((p = n[d + 1]) && p.hasOwnProperty("t") ? h = p.t / g : (m = e.segmentAvailabilityRange ? e.segmentAvailabilityRange.end : y.calcSegmentAvailabilityRange(e, v).end, h = y.calcMediaTimeFromPresentationTime(m, e), e.segmentDuration = l.d / g), c = Math.ceil((h - s) / (l.d / g)) - 1), f = 0; f <= c && !_; f++)(_ = t(o, s, r, a, l, g, ++u, d)) && (e.segmentDuration = l.d / g, (f < c - 1 || d < E - 1) && u++), s = (o += l.d) / g }
                e.availableSegmentsNumber = u } return { getSegmentByIndex: function(d, e, f) { if (t(), !d) return null; var c = null,
                        h = !1; return n(d, function(e, t, n, r, i, a, o, s) { if (h || f < 0) { var u = n.media,
                                l = i.mediaRange; return r && (u = r[s].media || "", l = r[s].mediaRange), c = (0, p.getTimeBasedSegment)(y, v, d, e, i.d, a, u, l, o, i.tManifest), !0 } return t >= f - .5 * i.d / a && (h = !0), !1 }), c }, getSegmentByTime: function(d, e) { if (t(), !d) return null;
                    void 0 === e && (e = null); var f = null,
                        c = y.calcMediaTimeFromPresentationTime(e, d); return n(d, function(e, t, n, r, i, a, o, s) { if (c < t + i.d / a) { var u = n.media,
                                l = i.mediaRange; return r && (u = r[s].media || "", l = r[s].mediaRange), f = (0, p.getTimeBasedSegment)(y, v, d, e, i.d, a, u, l, o, i.tManifest), !0 } return !1 }), f } } }
        o.__dashjs_factory_name = "TimelineSegmentsGetter"; var s = i.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 108: 108, 47: 47, 80: 80 }], 84: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.period = null, this.index = -1, this.type = null }, t.exports = n.default }, {}], 85: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });

        function i(e, t, n, r) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.url = e || "", this.serviceLocation = t || e || "", this.dvb_priority = n || 1, this.dvb_weight = r || 1, this.availabilityTimeOffset = 0, this.availabilityTimeComplete = !0 }
        i.DEFAULT_DVB_PRIORITY = 1, i.DEFAULT_DVB_WEIGHT = 1, n.default = i, t.exports = n.default }, {}], 86: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.duration = NaN, this.presentationTime = NaN, this.id = NaN, this.messageData = "", this.eventStream = null, this.presentationTimeDelta = NaN }, t.exports = n.default }, {}], 87: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.adaptionSet = null, this.representation = null, this.period = null, this.timescale = 1, this.value = "", this.schemeIdUri = "" }, t.exports = n.default }, {}], 88: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.DVRWindowSize = NaN, this.loadedTime = null, this.availableFrom = null, this.minBufferTime = NaN, this.duration = NaN, this.isDynamic = !1, this.maxFragmentDuration = null }, t.exports = n.default }, {}], 89: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "isMediaInfoEqual", value: function(e) { if (!e) return !1; var t = this.id === e.id,
                    n = this.viewpoint === e.viewpoint,
                    r = this.lang === e.lang,
                    i = this.roles.toString() === e.roles.toString(),
                    a = this.accessibility.toString() === e.accessibility.toString(),
                    o = this.audioChannelConfiguration.toString() === e.audioChannelConfiguration.toString(); return t && n && r && i && a && o } }]), a);

        function a() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a), this.id = null, this.index = null, this.type = null, this.streamInfo = null, this.representationCount = 0, this.lang = null, this.viewpoint = null, this.accessibility = null, this.audioChannelConfiguration = null, this.roles = null, this.codec = null, this.mimeType = null, this.contentProtection = null, this.isText = !1, this.KID = null, this.bitrateList = null }
        n.default = i, t.exports = n.default }, {}], 90: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.manifest = null, this.suggestedPresentationDelay = 0, this.availabilityStartTime = null, this.availabilityEndTime = Number.POSITIVE_INFINITY, this.timeShiftBufferDepth = Number.POSITIVE_INFINITY, this.maxSegmentDuration = Number.POSITIVE_INFINITY, this.minimumUpdatePeriod = NaN, this.mediaPresentationDuration = NaN }, t.exports = n.default }, {}], 91: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });

        function r() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, r), this.id = null, this.index = -1, this.duration = NaN, this.start = NaN, this.mpd = null }
        r.DEFAULT_ID = "defaultId", n.default = r, t.exports = n.default }, {}], 92: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e };

        function i(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var a, o = e(61),
            s = (a = o) && a.__esModule ? a : { default: a },
            u = (r(l, [{ key: "hasInitialization", value: function() { return null !== this.initialization || null !== this.range } }, { key: "hasSegments", value: function() { return this.segmentInfoType !== s.default.BASE_URL && this.segmentInfoType !== s.default.SEGMENT_BASE && !this.indexRange } }]), l);

        function l() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, l), this.id = null, this.index = -1, this.adaptation = null, this.segmentInfoType = null, this.initialization = null, this.codecs = null, this.codecPrivateData = null, this.segmentDuration = NaN, this.timescale = 1, this.startNumber = 1, this.indexRange = null, this.range = null, this.presentationTimeOffset = 0, this.MSETimeOffset = NaN, this.segmentAvailabilityRange = null, this.availableSegmentsNumber = 0, this.bandwidth = NaN, this.width = NaN, this.height = NaN, this.scanType = null, this.maxPlayoutRate = NaN, this.availabilityTimeOffset = 0, this.availabilityTimeComplete = !0 }
        n.default = u, t.exports = n.default }, { 61: 61 }], 93: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.id = null, this.quality = null, this.DVRWindow = null, this.fragmentDuration = null, this.mediaInfo = null, this.MSETimeOffset = null }, t.exports = n.default }, {}], 94: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.indexRange = null, this.index = null, this.mediaRange = null, this.media = null, this.duration = NaN, this.replacementTime = null, this.replacementNumber = NaN, this.mediaStartTime = NaN, this.presentationStartTime = NaN, this.availabilityStartTime = NaN, this.availabilityEndTime = NaN, this.availabilityIdx = NaN, this.wallStartTime = NaN, this.representation = null }, t.exports = n.default }, {}], 95: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.id = null, this.index = null, this.start = NaN, this.duration = NaN, this.manifestInfo = null, this.isLast = !0 }, t.exports = n.default }, {}], 96: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.schemeIdUri = "", this.value = "" }, t.exports = n.default }, {}], 97: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var l = r(e(108)),
            d = r(e(159)),
            f = r(e(229)),
            c = r(e(226)),
            i = r(e(47));

        function a(e) { e = e || {}; var t = this.context,
                i = e.eventBus,
                a = e.events,
                n = e.urlUtils,
                o = e.errors,
                s = void 0,
                u = void 0; return s = { checkForExistence: function(t) {
                    function e(e) { i.trigger(a.CHECK_FOR_EXISTENCE_COMPLETED, { request: t, exists: e }) } var n;
                    t ? (n = new f.default(t.url), u.load({ request: n, success: function() { e(!0) }, error: function() { e(!1) } })) : e(!1) }, load: function(n) {
                    function r(e, t) { i.trigger(a.LOADING_COMPLETED, { request: n, response: e || null, error: t || null, sender: s }) }
                    n ? u.load({ request: n, progress: function(e) { i.trigger(a.LOADING_PROGRESS, { request: n, stream: e.stream }), e.data && i.trigger(a.LOADING_DATA_PROGRESS, { request: n, response: e.data || null, error: null, sender: s }) }, success: function(e) { r(e) }, error: function(e, t, n) { r(void 0, new c.default(o.FRAGMENT_LOADER_LOADING_FAILURE_ERROR_CODE, n, t)) }, abort: function(e) { e && i.trigger(a.LOADING_ABANDONED, { request: e, mediaType: e.mediaType, sender: s }) } }) : r(void 0, new c.default(o.FRAGMENT_LOADER_NULL_REQUEST_ERROR_CODE, o.FRAGMENT_LOADER_NULL_REQUEST_ERROR_MESSAGE)) }, abort: function() { u && u.abort() }, reset: function() { u && (u.abort(), u = null) } }, u = (0, d.default)(t).create({ errHandler: e.errHandler, errors: o, dashMetrics: e.dashMetrics, mediaPlayerModel: e.mediaPlayerModel, requestModifier: e.requestModifier, useFetch: e.settings.get().streaming.lowLatencyEnabled, urlUtils: n, constants: l.default, boxParser: e.boxParser, dashConstants: e.dashConstants }), s }
        a.__dashjs_factory_name = "FragmentLoader", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 159: 159, 226: 226, 229: 229, 47: 47 }], 98: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var E = r(e(108)),
            a = r(e(61)),
            o = r(e(124)),
            s = r(e(159)),
            u = r(e(221)),
            m = r(e(233)),
            v = r(e(226)),
            y = e(242),
            T = r(e(46)),
            S = r(e(54)),
            A = r(e(51)),
            i = r(e(47)),
            I = r(e(66));

        function l(e) { e = e || {}; var l = this.context,
                d = e.debug,
                f = (0, T.default)(l).getInstance(),
                c = (0, u.default)(l).getInstance(),
                t = void 0,
                h = void 0,
                n = void 0,
                p = void 0,
                g = void 0,
                _ = e.mssHandler,
                r = e.errHandler;

            function i(e) { f.trigger(S.default.INTERNAL_MANIFEST_LOADED, { manifest: e.manifest }) } return t = { load: function(u) { var e = new m.default(u, y.HTTPRequest.MPD_TYPE);
                    n.load({ request: e, success: function(e, t, n) { if (p) { var r, i, a = void 0,
                                    o = void 0,
                                    s = void 0; if (n && n !== u ? (o = c.parseBaseUrl(n), a = n) : (c.isRelative(u) && (u = c.resolve(u, window.location.href)), o = c.parseBaseUrl(u)), null === g && (i = null, g = -1 < (r = e).indexOf("SmoothStreamingMedia") ? (_ && (i = _.createMssParser(), _.registerEvents()), i) : -1 < r.indexOf("MPD") ? (0, I.default)(l).create({ debug: d }) : i), null !== g) { p.setMatchers(g.getMatchers()), p.setIron(g.getIron()); try { s = g.parse(e) } catch (e) { return void f.trigger(S.default.INTERNAL_MANIFEST_LOADED, { manifest: null, error: new v.default(A.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE, A.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE + "" + u) }) }
                                    s ? (s.url = a || u, s.originalUrl || (s.originalUrl = s.url), s.hasOwnProperty(E.default.LOCATION) && (o = c.parseBaseUrl(s.Location_asArray[0]), h.debug("BaseURI set by Location to: " + o)), s.baseUri = o, s.loadedTime = new Date, p.resolveManifestOnLoad(s), f.trigger(S.default.ORIGINAL_MANIFEST_LOADED, { originalManifest: e })) : f.trigger(S.default.INTERNAL_MANIFEST_LOADED, { manifest: null, error: new v.default(A.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE, A.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE + "" + u) }) } else f.trigger(S.default.INTERNAL_MANIFEST_LOADED, { manifest: null, error: new v.default(A.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE, A.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_MESSAGE + "" + u) }) } }, error: function(e, t, n) { f.trigger(S.default.INTERNAL_MANIFEST_LOADED, { manifest: null, error: new v.default(A.default.MANIFEST_LOADER_LOADING_FAILURE_ERROR_CODE, A.default.MANIFEST_LOADER_LOADING_FAILURE_ERROR_MESSAGE + (u + ", ") + n) }) } }) }, reset: function() { f.off(S.default.XLINK_READY, i, t), p && (p.reset(), p = null), n && (n.abort(), n = null), _ && _.reset() } }, h = d.getLogger(t), f.on(S.default.XLINK_READY, i, t), n = (0, s.default)(l).create({ errHandler: e.errHandler, dashMetrics: e.dashMetrics, mediaPlayerModel: e.mediaPlayerModel, requestModifier: e.requestModifier, useFetch: e.settings.get().streaming.lowLatencyEnabled, urlUtils: c, constants: E.default, dashConstants: a.default, errors: A.default }), p = (0, o.default)(l).create({ errHandler: r, dashMetrics: e.dashMetrics, mediaPlayerModel: e.mediaPlayerModel, requestModifier: e.requestModifier, settings: e.settings }), g = null, t }
        l.__dashjs_factory_name = "ManifestLoader"; var d = i.default.getClassFactory(l);
        n.default = d, t.exports = n.default }, { 108: 108, 124: 124, 159: 159, 221: 221, 226: 226, 233: 233, 242: 242, 46: 46, 47: 47, 51: 51, 54: 54, 61: 61, 66: 66 }], 99: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var A = r(e(46)),
            I = r(e(54)),
            i = r(e(47)),
            R = r(e(45)),
            b = r(e(51)),
            D = r(e(61));

        function a() { var e = this.context,
                r = (0, A.default)(e).getInstance(),
                t = void 0,
                i = void 0,
                a = void 0,
                n = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                c = void 0;

            function h() { a = NaN, o = !(s = !1), p() }

            function p() { null !== n && (clearTimeout(n), n = null) }

            function g(e) { p(), isNaN(e) && !isNaN(a) && (e = 1e3 * a), isNaN(e) || (i.debug("Refresh manifest in " + e + " milliseconds."), n = setTimeout(m, e)) }

            function _() { s = !0; var e = l.getValue(),
                    t = e.url,
                    n = d.getLocation(e);
                n && (t = n), u.load(t) }

            function E(e) { var t, n;
                l.getValue() && l.getValue().type === D.default.DYNAMIC && e.type === D.default.STATIC ? r.trigger(I.default.DYNAMIC_STREAM_COMPLETED) : (l.setValue(e), n = ((t = new Date).getTime() - e.loadedTime.getTime()) / 1e3, 2147483647 < 1e3 * (a = d.getManifestUpdatePeriod(e, n)) && (a = 2147483.647), r.trigger(I.default.MANIFEST_UPDATED, { manifest: e }), i.info("Manifest has been refreshed at " + t + "[" + t.getTime() / 1e3 + "] "), o || g()) }

            function m() { o || (s ? g(c.get().streaming.manifestUpdateRetryInterval) : _()) }

            function v(e) { e.error ? e.error.code === b.default.MANIFEST_LOADER_PARSING_FAILURE_ERROR_CODE && f.error(e.error) : E(e.manifest) }

            function y() { o = !1, g() }

            function T() {
                (o = !c.get().streaming.scheduleWhilePaused) && p() }

            function S() { s = !1 } return t = { initialize: function() { h(), r.on(I.default.STREAMS_COMPOSED, S, this), r.on(I.default.PLAYBACK_STARTED, y, this), r.on(I.default.PLAYBACK_PAUSED, T, this), r.on(I.default.INTERNAL_MANIFEST_LOADED, v, this) }, setManifest: function(e) { E(e) }, refreshManifest: _, setConfig: function(e) { e && (e.manifestModel && (l = e.manifestModel), e.adapter && (d = e.adapter), e.manifestLoader && (u = e.manifestLoader), e.errHandler && (f = e.errHandler), e.settings && (c = e.settings)) }, reset: function() { r.off(I.default.PLAYBACK_STARTED, y, this), r.off(I.default.PLAYBACK_PAUSED, T, this), r.off(I.default.STREAMS_COMPOSED, S, this), r.off(I.default.INTERNAL_MANIFEST_LOADED, v, this), h() } }, i = (0, R.default)(e).getInstance().getLogger(t), t }
        a.__dashjs_factory_name = "ManifestUpdater", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 45: 45, 46: 46, 47: 47, 51: 51, 54: 54, 61: 61 }], 100: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var se = r(e(2)),
            ue = r(e(108)),
            le = r(e(61)),
            de = r(e(109)),
            fe = r(e(120)),
            ce = r(e(122)),
            he = r(e(117)),
            pe = r(e(118)),
            ge = r(e(112)),
            _e = r(e(98)),
            Ee = r(e(213)),
            me = r(e(208)),
            ve = r(e(203)),
            ye = r(e(218)),
            Te = r(e(201)),
            Se = r(e(154)),
            Ae = r(e(151)),
            Ie = r(e(152)),
            Re = r(e(111)),
            be = r(e(158)),
            De = r(e(155)),
            Me = r(e(149)),
            Ne = r(e(210)),
            Ce = r(e(45)),
            we = r(e(51)),
            Oe = r(e(46)),
            Pe = r(e(54)),
            Le = r(e(101)),
            xe = r(e(47)),
            Fe = r(e(48)),
            Ue = e(50),
            ke = r(e(63)),
            Be = r(e(56)),
            Ge = r(e(58)),
            je = r(e(82)),
            Ye = e(242),
            Ke = r(e(1)),
            qe = r(e(9)),
            He = r(e(226)),
            Ve = e(219),
            ze = r(e(99)),
            We = r(e(221)),
            Xe = r(e(207));

        function i() { var i = "You must first call initialize() and set a source before calling this method",
                r = "You must first call initialize() and set a valid source and view before calling this method",
                t = "You must first call attachView() to set the video element before calling this method",
                e = "You must first call attachSource() with a valid source before calling this method",
                a = "MediaPlayer not initialized!",
                o = this.context,
                s = (0, Oe.default)(o).getInstance(),
                u = (0, Fe.default)(o).getInstance(),
                l = (0, Ce.default)(o).getInstance({ settings: u }),
                n = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0,
                m = void 0,
                v = void 0,
                y = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0,
                N = void 0,
                C = void 0,
                w = void 0,
                O = void 0,
                P = void 0,
                L = void 0,
                x = void 0,
                F = void 0,
                U = void 0,
                k = void 0,
                B = void 0,
                G = void 0;

            function j() { return !!f && !!F.getElement() }

            function Y() { return (0, Ue.getVersionString)() }

            function K() { if (!g) throw r; return O.isPaused() }

            function q(e) { var t = P.getCurrentDVRInfo(); if (!t) return 0; var n = O.getLiveDelay(),
                    r = t.range.start + e; return r > t.range.end - n && (r = t.range.end - n), r }

            function H(e) { if (!g) throw r; var t, n = Q().currentTime; return void 0 !== e ? n = C.getTimeRelativeToStreamId(n, e) : O.getIsDynamic() && (n = null === (t = P.getCurrentDVRInfo()) ? 0 : V() - (t.range.end - t.time)), n }

            function V() { if (!g) throw r; var e = Q().duration; if (O.getIsDynamic()) { var t, n = P.getCurrentDVRInfo(); if (!n) return 0;
                    e = (t = n.range.end - n.range.start) < n.manifestInfo.DVRWindowSize ? t : n.manifestInfo.DVRWindowSize } return e }

            function z(e) {
                (0, Ve.checkParameterType)(e, "boolean"), _ = e }

            function W() { b.restoreDefaultUTCTimingSources() }

            function X() { return P }

            function Q() { if (!F.getElement()) throw t; return F.getElement() }

            function Z(e) { if (!h) throw a;
                F.setElement(e), e && (re(), function() { if (S) return; var e = dashjs.MetricsReporting; { var t; "function" == typeof e && (t = e(o).create(), S = t.createMetricsReporting({ debug: l, eventBus: s, mediaElement: Q(), adapter: R, dashMetrics: P, events: Pe.default, constants: ue.default, metricsConstants: de.default })) } }(), function() { if (A) return; var e = dashjs.MssHandler; "function" == typeof e && (we.default.extend(e.errors), A = e(o).create({ eventBus: s, mediaPlayerModel: b, dashMetrics: P, manifestModel: L, playbackController: O, streamController: C, protectionController: T, baseURLController: M, errHandler: D, events: Pe.default, constants: ue.default, debug: l, initSegmentType: Ye.HTTPRequest.INIT_SEGMENT_TYPE, BASE64: Ke.default, ISOBoxer: qe.default, settings: u })) }(), C && C.switchToVideoElement()), g && te(), oe() }

            function $(e) { if (!p) throw i; var t = C.getActiveStreamInfo(); return y.getTracksFor(e, t) }

            function J(e) { if (!h) throw a; "string" == typeof e && k.initialize(e), f = e, (p || g) && te(), j() && oe() }

            function ee() { if (!p) throw i; var e = C.getActiveStreamInfo(); return e ? C.getStreamById(e.id) : null }

            function te() { p = g = !1, R.reset(), C.reset(), w.reset(), O.reset(), E.reset(), y.reset(), U.reset(), T && (u.get().streaming.keepProtectionMediaKeys ? T.stop() : (T.reset(), T = null, re())), x.reset() }

            function ne() { return (0, _e.default)(o).create({ debug: l, errHandler: D, dashMetrics: P, mediaPlayerModel: b, requestModifier: (0, ye.default)(o).getInstance(), mssHandler: A, settings: u }) }

            function re() { if (T) return T; var e = dashjs.Protection; if ("function" != typeof e) return null; var t = e(o).create(); return Pe.default.extend(e.events), Le.default.extend(e.events, { publicOnly: !0 }), we.default.extend(e.errors), N = N || (0, me.default)(o).getInstance(), T = t.createProtectionSystem({ debug: l, errHandler: D, videoModel: F, capabilities: N, eventBus: s, events: Pe.default, BASE64: Ke.default, constants: ue.default }) }

            function ie() { if (!h) throw a; if (I) return I; var e = dashjs.OfflineController; if ("function" != typeof e) return null;
                Pe.default.extend(e.events), Le.default.extend(e.events, { publicOnly: !0 }), we.default.extend(e.errors); var t = ne(),
                    n = (0, ze.default)(o).create(); return n.setConfig({ manifestModel: L, adapter: R, manifestLoader: t, errHandler: D }), I = e(o).create({ debug: l, manifestUpdater: n, baseURLController: M, manifestLoader: t, manifestModel: L, mediaPlayerModel: b, abrController: E, playbackController: O, adapter: R, errHandler: D, dashMetrics: P, timelineConverter: v, schemeLoaderFactory: m, eventBus: s, events: Pe.default, errors: we.default, constants: ue.default, settings: u, dashConstants: le.default, urlUtils: (0, We.default)(o).getInstance() }) }

            function ae(e) { var t = P.getCurrentDVRInfo(); return t ? e + (t.manifestInfo.availableFrom.getTime() / 1e3 + t.range.start) : 0 }

            function oe() { var e;
                I && I.resetRecords(), !p && f && (p = !0, d.info("Streaming Initialized"), e = ne(), C = C || (0, ce.default)(o).getInstance(), y.setConfig({ domStorage: B }), C.setConfig({ capabilities: N, manifestLoader: e, manifestModel: L, mediaPlayerModel: b, protectionController: T, adapter: R, dashMetrics: P, errHandler: D, timelineConverter: v, videoModel: F, playbackController: O, abrController: E, mediaController: y, textController: U, settings: u, baseURLController: M }), w.setConfig({ settings: u, playbackController: O, streamController: C, videoModel: F, timelineConverter: v, adapter: R }), O.setConfig({ streamController: C, dashMetrics: P, mediaPlayerModel: b, adapter: R, videoModel: F, timelineConverter: v, uriFragmentModel: k, settings: u }), E.setConfig({ streamController: C, domStorage: B, mediaPlayerModel: b, dashMetrics: P, adapter: R, videoModel: F, settings: u }), E.createAbrRulesCollection(), U.setConfig({ errHandler: D, manifestModel: L, adapter: R, mediaController: y, streamController: C, videoModel: F }), x.setConfig({ abrController: E, dashMetrics: P, playbackController: O }), C.initialize(_, c), w.initialize(), x.initialize(), "string" == typeof f ? C.load(f) : C.loadWithManifest(f)), !g && j() && (g = !0, d.info("Playback Initialized")) } return n = { initialize: function(e, t, n) { N = N || (0, me.default)(o).getInstance(), D = (0, Ee.default)(o).getInstance(), N.supportsMediaSource() ? h || (h = !0, v = (0, je.default)(o).getInstance(), E || (E = (0, Re.default)(o).getInstance()).setConfig({ settings: u }), m = m || (0, be.default)(o).getInstance(), O = O || (0, fe.default)(o).getInstance(), y = y || (0, pe.default)(o).getInstance(), C = C || (0, ce.default)(o).getInstance(), w = w || (0, he.default)(o).getInstance(), R = (0, Be.default)(o).getInstance(), L = (0, Ae.default)(o).getInstance(), x = (0, Me.default)(o).getInstance(), P = (0, Ge.default)(o).getInstance({ settings: u }), U = (0, Te.default)(o).getInstance(), B = (0, Ne.default)(o).getInstance({ settings: u }), R.setConfig({ constants: ue.default, cea608parser: se.default, errHandler: D, BASE64: Ke.default }), (M = M || (0, ge.default)(o).create()).setConfig({ adapter: R }), (G = (0, ke.default)(o).getInstance({ dashMetrics: P, mediaPlayerModel: b, errHandler: D, baseURLController: M, events: Pe.default, eventBus: s, debug: l, boxParser: (0, Xe.default)(o).getInstance(), requestModifier: (0, ye.default)(o).getInstance(), errors: we.default })).initialize(), W(), z(void 0 === n || n), ie(), e && Z(e), t && J(t), d.info("[dash.js " + Y() + "] MediaPlayer has been initialized")) : D.error(new He.default(we.default.CAPABILITY_MEDIASOURCE_ERROR_CODE, we.default.CAPABILITY_MEDIASOURCE_ERROR_MESSAGE)) }, setConfig: function(e) { e && (e.capabilities && (N = e.capabilities), e.streamController && (C = e.streamController), e.gapController && (w = e.gapController), e.playbackController && (O = e.playbackController), e.mediaPlayerModel && (b = e.mediaPlayerModel), e.abrController && (E = e.abrController), e.schemeLoaderFactory && (m = e.schemeLoaderFactory), e.mediaController && (y = e.mediaController), e.settings && (u = e.settings)) }, on: function(e, t, n) { s.on(e, t, n) }, off: function(e, t, n) { s.off(e, t, n) }, extend: function(e, t, n) { xe.default.extend(e, t, n, o) }, attachView: Z, attachSource: J, isReady: j, preload: function() { if (F.getElement() || p) return !1; if (!f) throw e;
                    oe() }, play: function() { if (!g) throw r;
                    (!_ || K() && g) && O.play() }, isPaused: K, pause: function() { if (!g) throw r;
                    O.pause() }, isSeeking: function() { if (!g) throw r; return O.isSeeking() }, isDynamic: function() { if (!g) throw r; return O.getIsDynamic() }, seek: function(e) { if (!g) throw r; if ((0, Ve.checkParameterType)(e, "number"), isNaN(e)) throw ue.default.BAD_ARGUMENT_ERROR; var t = O.getIsDynamic() ? q(e) : e;
                    O.seek(t) }, setPlaybackRate: function(e) { Q().playbackRate = e }, getPlaybackRate: function() { return Q().playbackRate }, setMute: function(e) {
                    (0, Ve.checkParameterType)(e, "boolean"), Q().muted = e }, isMuted: function() { return Q().muted }, setVolume: function(e) { if ("number" != typeof e || isNaN(e) || e < 0 || 1 < e) throw ue.default.BAD_ARGUMENT_ERROR;
                    Q().volume = e }, getVolume: function() { return Q().volume }, time: H, duration: V, timeAsUTC: function() { if (!g) throw r; return H() < 0 ? NaN : ae(H()) }, durationAsUTC: function() { if (!g) throw r; return ae(V()) }, getActiveStream: ee, getDVRWindowSize: function() { var e = P.getCurrentDVRInfo(); return e ? e.manifestInfo.DVRWindowSize : 0 }, getDVRSeekOffset: q, convertToTimeCode: function(e) { e = Math.max(e, 0); var t = Math.floor(e / 3600),
                        n = Math.floor(e % 3600 / 60),
                        r = Math.floor(e % 3600 % 60); return (0 === t ? "" : t < 10 ? "0" + t.toString() + ":" : t.toString() + ":") + (n < 10 ? "0" + n.toString() : n.toString()) + ":" + (r < 10 ? "0" + r.toString() : r.toString()) }, formatUTC: function(e, t, n) { var r = !(arguments.length <= 3 || void 0 === arguments[3]) && arguments[3],
                        i = new Date(1e3 * e),
                        a = i.toLocaleDateString(t),
                        o = i.toLocaleTimeString(t, { hour12: n }); return r ? o + " " + a : o }, getVersion: Y, getDebug: function() { return l }, getBufferLength: function(e) { var t, n = [ue.default.VIDEO, ue.default.AUDIO, ue.default.FRAGMENTED_TEXT]; return e ? -1 === n.indexOf(e) ? (d.warn("getBufferLength requested for invalid type"), NaN) : (t = P.getCurrentBufferLevel(e)) || NaN : (t = n.map(function(e) { return 0 < $(e).length ? P.getCurrentBufferLevel(e) : Number.MAX_VALUE }).reduce(function(e, t) { return Math.min(e, t) })) === Number.MAX_VALUE ? NaN : t }, getTTMLRenderingDiv: function() { return F ? F.getTTMLRenderingDiv() : null }, getVideoElement: Q, getSource: function() { if (!f) throw e; return f }, getCurrentLiveLatency: function() { if (!h) throw a; return g ? O.getCurrentLiveLatency() : NaN }, getTopBitrateInfoFor: function(e) { if (!p) throw i; return E.getTopBitrateInfoFor(e) }, setAutoPlay: z, getAutoPlay: function() { return _ }, getDashMetrics: X, getQualityFor: function(e) { if (!p) throw i; if (e !== ue.default.IMAGE) return E.getQualityFor(e); var t = ee(); if (!t) return -1; var n = t.getThumbnailController(); return n ? n.getCurrentTrackIndex() : -1 }, setQualityFor: function(e, t) { if (!p) throw i; if (e === ue.default.IMAGE) { var n = ee(); if (!n) return; var r = n.getThumbnailController();
                        r && r.setTrackByIndex(t) }
                    E.setPlaybackQuality(e, C.getActiveStreamInfo(), t) }, updatePortalSize: function() { E.setElementSize(), E.setWindowResizeEventCalled(!0) }, setTextDefaultLanguage: function(e) { d.warn('setTextDefaultLanguage is deprecated and will be removed in version 3.2.0. Please use setInitialMediaSettingsFor("fragmentedText", { lang: lang }) instead'), void 0 === U && (U = (0, Te.default)(o).getInstance()), U.setTextDefaultLanguage(e) }, getTextDefaultLanguage: function() { return d.warn('getTextDefaultLanguage is deprecated and will be removed in version 3.2.0. Please use getInitialMediaSettingsFor("fragmentedText").lang instead'), void 0 === U && (U = (0, Te.default)(o).getInstance()), U.getTextDefaultLanguage() }, setTextDefaultEnabled: function(e) { void 0 === U && (U = (0, Te.default)(o).getInstance()), U.setTextDefaultEnabled(e) }, getTextDefaultEnabled: function() { return void 0 === U && (U = (0, Te.default)(o).getInstance()), U.getTextDefaultEnabled() }, enableText: function(e) { void 0 === U && (U = (0, Te.default)(o).getInstance()), U.enableText(e) }, enableForcedTextStreaming: function(e) { void 0 === U && (U = (0, Te.default)(o).getInstance()), U.enableForcedTextStreaming(e) }, isTextEnabled: function() { return void 0 === U && (U = (0, Te.default)(o).getInstance()), U.isTextEnabled() }, setTextTrack: function(e) { if (!g) throw r;
                    void 0 === U && (U = (0, Te.default)(o).getInstance()), U.setTextTrack(e) }, getBitrateInfoListFor: function(e) { if (!p) throw i; var t = ee(); return t ? t.getBitrateListFor(e) : [] }, getStreamsFromManifest: function(e) { if (!p) throw i; return R.getStreamsInfo(e) }, getTracksFor: $, getTracksForTypeFromManifest: function(e, t, n) { if (!p) throw i; return (n = n || R.getStreamsInfo(t, 1)[0]) ? R.getAllMediaInfoForType(n, e, t) : [] }, getCurrentTrackFor: function(e) { if (!p) throw i; var t = C.getActiveStreamInfo(); return y.getCurrentTrackFor(e, t) }, setInitialMediaSettingsFor: function(e, t) { if (!h) throw a;
                    y.setInitialSettings(e, t), e === ue.default.FRAGMENTED_TEXT && U.setInitialSettings(t) }, getInitialMediaSettingsFor: function(e) { if (!h) throw a; return y.getInitialSettings(e) }, setCurrentTrack: function(e) { if (!p) throw i;
                    y.setTrack(e) }, getTrackSwitchModeFor: function(e) { if (!h) throw a; return y.getSwitchMode(e) }, setTrackSwitchModeFor: function(e, t) { if (!h) throw a;
                    y.setSwitchMode(e, t) }, setSelectionModeForInitialTrack: function(e) { if (!h) throw a;
                    y.setSelectionModeForInitialTrack(e) }, getSelectionModeForInitialTrack: function() { if (!h) throw a; return y.getSelectionModeForInitialTrack() }, addABRCustomRule: function(e, t, n) { b.addABRCustomRule(e, t, n) }, removeABRCustomRule: function(e) { b.removeABRCustomRule(e) }, removeAllABRCustomRule: function() { b.removeABRCustomRule() }, getAverageThroughput: function(e) { var t = E.getThroughputHistory(); return t ? t.getAverageThroughput(e) : 0 }, retrieveManifest: function(e, n) { var r = ne(),
                        i = this;
                    s.on(Pe.default.INTERNAL_MANIFEST_LOADED, function e(t) { t.error ? n(null, t.error) : n(t.manifest), s.off(Pe.default.INTERNAL_MANIFEST_LOADED, e, i), r.reset() }, i), k.initialize(e), r.load(e) }, addUTCTimingSource: function(e, t) { b.addUTCTimingSource(e, t) }, removeUTCTimingSource: function(e, t) { b.removeUTCTimingSource(e, t) }, clearDefaultUTCTimingSources: function() { b.clearDefaultUTCTimingSources() }, restoreDefaultUTCTimingSources: W, setXHRWithCredentialsForType: function(e, t) { b.setXHRWithCredentialsForType(e, t) }, getXHRWithCredentialsForType: function(e) { return b.getXHRWithCredentialsForType(e) }, getProtectionController: re, attachProtectionController: function(e) { T = e }, setProtectionData: function(e) { c = e, C && C.setProtectionData(c) }, displayCaptionsOnTop: function(e) { var t = (0, ve.default)(o).getInstance();
                    t.setConfig({ videoModel: F }), t.initialize(), t.setDisplayCConTop(e) }, attachTTMLRenderingDiv: function(e) { if (!F.getElement()) throw t;
                    F.setTTMLRenderingDiv(e) }, getCurrentTextTrackIndex: function() { var e = NaN; return U && (e = U.getCurrentTrackIdx()), e }, provideThumbnail: function(e, t) { if ("function" == typeof t)
                        if (e < 0) t(null);
                        else { var n = O.getIsDynamic() ? q(e) : e,
                                r = C.getStreamForTime(n); if (null !== r) { var i = r.getThumbnailController(); if (i) { var a = C.getTimeRelativeToStreamId(n, r.getId()); return i.provide(a, t) }
                                t(null) } else t(null) } }, getDashAdapter: function() { return R }, getOfflineController: ie, getSettings: function() { return u.get() }, updateSettings: function(e) { u.update(e) }, resetSettings: function() { u.reset() }, reset: function() { J(null), Z(null), c = null, T && (T.reset(), T = null), S && (S.reset(), S = null), G.reset(), u.reset(), I && (I.reset(), I = null) } }, d = l.getLogger(n), _ = !(p = g = h = !1), G = R = c = I = T = null, Pe.default.extend(Le.default), b = (0, Ie.default)(o).getInstance(), F = (0, De.default)(o).getInstance(), k = (0, Se.default)(o).getInstance(), n }
        i.__dashjs_factory_name = "MediaPlayer"; var a = xe.default.getClassFactory(i);
        a.events = Le.default, a.errors = we.default, xe.default.updateClassFactory(i.__dashjs_factory_name, a), n.default = a, t.exports = n.default }, { 1: 1, 101: 101, 108: 108, 109: 109, 111: 111, 112: 112, 117: 117, 118: 118, 120: 120, 122: 122, 149: 149, 151: 151, 152: 152, 154: 154, 155: 155, 158: 158, 2: 2, 201: 201, 203: 203, 207: 207, 208: 208, 210: 210, 213: 213, 218: 218, 219: 219, 221: 221, 226: 226, 242: 242, 45: 45, 46: 46, 47: 47, 48: 48, 50: 50, 51: 51, 54: 54, 56: 56, 58: 58, 61: 61, 63: 63, 82: 82, 9: 9, 98: 98, 99: 99 }], 101: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(55);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).call(this), this.AST_IN_FUTURE = "astInFuture", this.BUFFER_EMPTY = "bufferStalled", this.BUFFER_LOADED = "bufferLoaded", this.BUFFER_LEVEL_STATE_CHANGED = "bufferStateChanged", this.ERROR = "error", this.FRAGMENT_LOADING_COMPLETED = "fragmentLoadingCompleted", this.FRAGMENT_LOADING_PROGRESS = "fragmentLoadingProgress", this.FRAGMENT_LOADING_STARTED = "fragmentLoadingStarted", this.FRAGMENT_LOADING_ABANDONED = "fragmentLoadingAbandoned", this.LOG = "log", this.MANIFEST_LOADED = "manifestLoaded", this.METRICS_CHANGED = "metricsChanged", this.METRIC_CHANGED = "metricChanged", this.METRIC_ADDED = "metricAdded", this.METRIC_UPDATED = "metricUpdated", this.PERIOD_SWITCH_COMPLETED = "periodSwitchCompleted", this.PERIOD_SWITCH_STARTED = "periodSwitchStarted", this.QUALITY_CHANGE_REQUESTED = "qualityChangeRequested", this.QUALITY_CHANGE_RENDERED = "qualityChangeRendered", this.TRACK_CHANGE_RENDERED = "trackChangeRendered", this.SOURCE_INITIALIZED = "sourceInitialized", this.STREAM_INITIALIZING = "streamInitializing", this.STREAM_UPDATED = "streamUpdated", this.STREAM_INITIALIZED = "streamInitialized", this.STREAM_TEARDOWN_COMPLETE = "streamTeardownComplete", this.TEXT_TRACKS_ADDED = "allTextTracksAdded", this.TEXT_TRACK_ADDED = "textTrackAdded", this.TTML_PARSED = "ttmlParsed", this.TTML_TO_PARSE = "ttmlToParse", this.CAPTION_RENDERED = "captionRendered", this.CAPTION_CONTAINER_RESIZE = "captionContainerResize", this.CAN_PLAY = "canPlay", this.PLAYBACK_ENDED = "playbackEnded", this.PLAYBACK_ERROR = "playbackError", this.PLAYBACK_NOT_ALLOWED = "playbackNotAllowed", this.PLAYBACK_METADATA_LOADED = "playbackMetaDataLoaded", this.PLAYBACK_PAUSED = "playbackPaused", this.PLAYBACK_PLAYING = "playbackPlaying", this.PLAYBACK_PROGRESS = "playbackProgress", this.PLAYBACK_RATE_CHANGED = "playbackRateChanged", this.PLAYBACK_SEEKED = "playbackSeeked", this.PLAYBACK_SEEKING = "playbackSeeking", this.PLAYBACK_SEEK_ASKED = "playbackSeekAsked", this.PLAYBACK_STALLED = "playbackStalled", this.PLAYBACK_STARTED = "playbackStarted", this.PLAYBACK_TIME_UPDATED = "playbackTimeUpdated", this.PLAYBACK_WAITING = "playbackWaiting", this.MANIFEST_VALIDITY_CHANGED = "manifestValidityChanged", this.GAP_CAUSED_SEEK_TO_PERIOD_END = "gapCausedSeekToPeriodEnd" } var s = new(function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(o, ((i = a) && i.__esModule ? i : { default: i }).default), o);
        n.default = s, t.exports = n.default }, { 55: 55 }], 102: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(100),
            a = (r = i) && r.__esModule ? r : { default: r }; var s, o, u = (s = "application/dash+xml", { create: l, createAll: function(e, t) { var n = [];
                e = e || "[data-dashjs-player]"; for (var r = (t = t || document).querySelectorAll(e), i = 0; i < r.length; i++) { var a = l(r[i], null);
                    n.push(a) } for (var o = t.querySelectorAll('source[type="' + s + '"]'), i = 0; i < o.length; i++) a = l(function(e) { for (var t = !0; t;) { var n = e; if (t = !1, /^VIDEO$/i.test(n.nodeName)) return n;
                        e = n.parentNode, t = !0 } }(o[i]), null), n.push(a); return n } });

        function l(e, t, n) { if (!e || !/^VIDEO$/i.test(e.nodeName)) return null; if (e._dashjs_player) return e._dashjs_player; var r = void 0,
                i = e.id || e.name || "video element"; if (!(t = t || [].slice.call(e.querySelectorAll("source")).filter(function(e) { return e.type == s })[0]) && e.src)(t = document.createElement("source")).src = e.src;
            else if (!t && !e.src) return null; return n = n || {}, (r = (0, a.default)(n).create()).initialize(e, t.src, e.autoplay), (o = o || r.getDebug().getLogger()).debug("Converted " + i + " to dash.js player and added content: " + t.src), e._dashjs_player = r } var d = o = void 0; "undefined" != typeof window && window && window.dashjs && window.dashjs.skipAutoCreate || "undefined" == typeof window || !window || !window.addEventListener || ("complete" === window.document.readyState ? window.dashjs ? u.createAll() : d = window.setInterval(function() { window.dashjs && (window.clearInterval(d), u.createAll()) }, 500) : window.addEventListener("load", function e() { window.removeEventListener("load", e), u.createAll() })), n.default = u, t.exports = n.default }, { 100: 100 }], 103: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var u = r(e(45)),
            i = r(e(47));

        function a(e) { var t = this.context,
                n = void 0,
                r = void 0,
                a = void 0,
                o = [],
                i = e;

            function s(t, n) { o = o.filter(function(e) { return !((isNaN(n) || e.start < n) && (isNaN(t) || e.end > t)) }) } return n = { getAllBufferRanges: function() { for (var t = [], e = 0; e < o.length; e++) { var n = o[e];
                        0 === t.length || n.start > t[t.length - 1].end ? t.push({ start: n.start, end: n.end }) : t[t.length - 1].end = n.end } var r = { start: function(e) { return t[e].start }, end: function(e) { return t[e].end } }; return Object.defineProperty(r, "length", { get: function() { return t.length } }), r }, append: function(e) { a = "InitializationSegment" !== e.segmentType ? (o.push(e), o.sort(function(e, t) { return e.start - t.start }), null) : e, r.debug("PreBufferSink appended chunk s: " + e.start + "; e: " + e.end), i && i({ chunk: e }) }, remove: s, abort: function() {}, discharge: function(e, t) { var n, r, i = (n = e, r = t, o.filter(function(e) { return (isNaN(r) || e.start < r) && (isNaN(n) || e.end > n) })); return a && (i.push(a), a = null), s(e, t), i }, reset: function() { o = [], i = a = null }, updateTimestampOffset: function() {}, hasDiscontinuitiesAfter: function() { return !1 }, waitForUpdateEnd: function(e) { e() }, getBuffer: function() { return this } }, r = (0, u.default)(t).getInstance().getLogger(n), n }
        a.__dashjs_factory_name = "PreBufferSink"; var o = i.default.getClassFactory(a);
        n.default = o, t.exports = n.default }, { 45: 45, 47: 47 }], 104: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var S = r(e(45)),
            A = r(e(226)),
            I = r(e(46)),
            R = r(e(54)),
            i = r(e(47)),
            b = r(e(201)),
            D = r(e(51));

        function a(i, r, e, a) { var o = this.context,
                u = (0, I.default)(o).getInstance(),
                s = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                t = [],
                h = [],
                p = e;

            function g() { try { return d.buffered } catch (e) { return l.error("getAllBufferRanges exception: " + e.message), null } }

            function _(n) { d && T(function() { try { var e = i.duration,
                            t = 0;
                        n && !isNaN(n.start) && !isNaN(n.duration) && isFinite(n.duration) && (e = n.start + n.duration), n && !isNaN(n.start) && (t = n.start), d.appendWindowStart = 0, d.appendWindowEnd = e, d.appendWindowStart = t, l.debug("Updated append window for " + r.type + ". Set start to " + d.appendWindowStart + " and end to " + d.appendWindowEnd) } catch (e) { l.warn("Failed to set append window") } }) }

            function E() { var t = this,
                    s = this;
                0 < h.length && function() { f = !0; var a = h[0];
                    h.splice(0, 1);

                    function e() { var e, t, n, r, i = g();
                        e = s, n = i, r = a, (t = o) && 0 < t.length && t.length < n.length && function(e, t) { for (var n = 0; n < e.length; n++) { var r = Math.round(e.start(n)),
                                    i = Math.round(e.end(n)); if (i === t.start || r === t.end || t.start >= r && t.end <= i) return !0 } return !1 }(t, r) && u.trigger(R.default.SOURCEBUFFER_REMOVE_COMPLETED, { buffer: e, from: n.end(n.length - 2), to: n.start(n.length - 1), unintended: !0 }), 0 < h.length ? E.call(this) : (f = !1, p && p({ chunk: a })) } var o = []; try { 0 === a.bytes.length ? e.call(t) : (o = g(), d.appendBuffer ? d.appendBuffer(a.bytes) : d.append(a.bytes, a), T(e.bind(t))) } catch (e) { l.fatal('SourceBuffer append failed "' + e + '"'), 0 < h.length ? E() : f = !1, p && p({ chunk: a, error: new A.default(e.code, e.message) }) } }() }

            function n() { var e;
                0 < t.length && (e = t.shift(), d.updating ? T(e) : (e(), n())) }

            function m() { d.updating || n() }

            function v() { d.updating || n() }

            function y() { l.error("SourceBufferSink error", r.type) }

            function T(e) { t.push(e), d.updating || n() } return s = { getAllBufferRanges: g, getBuffer: function() { return d }, append: function(e) { e ? (h.push(e), f || T(E.bind(this))) : p({ chunk: e, error: new A.default(D.default.APPEND_ERROR_CODE, D.default.APPEND_ERROR_MESSAGE) }) }, remove: function(t, n, e) { var r = this;
                        T(function() { try { 0 <= t && t < n && (e || "ended" !== i.readyState) && d.remove(t, n), T(function() { u.trigger(R.default.SOURCEBUFFER_REMOVE_COMPLETED, { buffer: r, from: t, to: n, unintended: !1 }) }) } catch (e) { u.trigger(R.default.SOURCEBUFFER_REMOVE_COMPLETED, { buffer: r, from: t, to: n, unintended: !1, error: new A.default(e.code, e.message) }) } }) }, abort: function() { try {
                            ("open" === i.readyState || d.setTextTrack && "ended" === i.readyState) && d.abort() } catch (e) { l.error('SourceBuffer append abort failed: "' + e + '"') }
                        h = [] }, reset: function(e) { if (d) { if ("function" == typeof d.removeEventListener && (d.removeEventListener("updateend", v, !1), d.removeEventListener("error", y, !1), d.removeEventListener("abort", y, !1)), clearInterval(c), t = [], !e) { try { d.getClassName && "TextSourceBuffer" === d.getClassName() || (l.debug("Removing sourcebuffer from media source"), i.removeSourceBuffer(d)) } catch (e) { l.error("Failed to remove source buffer from media source.") }
                                d = null }
                            f = !1 }
                        h = [], p = null }, updateTimestampOffset: function(e) { d.timestampOffset === e || isNaN(e) || T(function() { e < 0 && (e += .001), d.timestampOffset = e }) }, hasDiscontinuitiesAfter: function(e) { try { var t = g(); if (t && 1 < t.length)
                                for (var n = 0, r = t.length; n < r; n++)
                                    if (0 < n && e < t.start(n) && t.start(n) > t.end(n - 1) + .1) return !0 } catch (e) { l.error("hasDiscontinuities exception: " + e.message) } return !1 }, waitForUpdateEnd: T, updateAppendWindow: _ },
                function() { l = (0, S.default)(o).getInstance().getLogger(s), f = !1; var t = r.codec; try { if (t.match(/application\/mp4;\s*codecs="(stpp|wvtt).*"/i)) throw new Error("not really supported");
                        (d = a || i.addSourceBuffer(t)).changeType && a && (l.debug("Doing period transition with changeType"), d.changeType(t)), _(); if ("function" == typeof d.addEventListener) try { d.addEventListener("updateend", v, !1), d.addEventListener("error", y, !1), d.addEventListener("abort", y, !1) } catch (e) { c = setInterval(m, 50) } else c = setInterval(m, 50) } catch (e) { if (!r.isText && -1 === t.indexOf('codecs="stpp') && -1 === t.indexOf('codecs="wvtt')) throw e; var n = (0, b.default)(o).getInstance();
                        d = n.getTextSourceBuffer() } }(), s }
        a.__dashjs_factory_name = "SourceBufferSink"; var o = i.default.getClassFactory(a);
        n.default = o, t.exports = n.default }, { 201: 201, 226: 226, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54 }], 105: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var ce = r(e(108)),
            he = r(e(61)),
            pe = r(e(106)),
            ge = r(e(116)),
            _e = r(e(204)),
            Ee = r(e(46)),
            me = r(e(54)),
            ve = r(e(45)),
            ye = r(e(51)),
            i = r(e(47)),
            Te = r(e(226)),
            Se = r(e(207)),
            Ae = r(e(221));

        function a(u) { u = u || {}; var l = this.context,
                s = (0, Ee.default)(l).getInstance(),
                e = (0, Ae.default)(l).getInstance(),
                d = u.manifestModel,
                f = u.mediaPlayerModel,
                a = u.manifestUpdater,
                h = u.adapter,
                i = u.capabilities,
                c = u.errHandler,
                p = u.timelineConverter,
                t = u.dashMetrics,
                g = u.abrController,
                _ = u.playbackController,
                o = u.eventController,
                E = u.mediaController,
                m = u.textController,
                v = u.videoModel,
                y = u.settings,
                r = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0,
                N = void 0,
                C = void 0,
                w = void 0,
                O = void 0,
                P = void 0,
                L = void 0,
                x = void 0,
                n = void 0,
                F = void 0,
                U = void 0,
                k = void 0,
                B = [{ codec: "avc1", compatibleCodecs: ["avc3"] }, { codec: "avc3", compatibleCodecs: ["avc1"] }];

            function G(e) { for (var t = A ? A.length : 0, n = 0; n < t; n++) { A[n].getFragmentModel().removeExecutedRequestsBeforeTime(q() + K()), A[n].reset(!1, e) }
                de(b = R = !(A = [])), s.off(me.default.CURRENT_TRACK_CHANGED, Q, r) }

            function j() { G(), S = null, M = D = I = !1, U = n = C = !(N = {}) }

            function Y() { _ && _.pause(), O && (O.reset(), O = null), j(), s.off(me.default.DATA_UPDATE_COMPLETED, re, r), s.off(me.default.BUFFERING_COMPLETED, ne, r), s.off(me.default.INBAND_EVENTS, ie, r), w && (s.off(me.default.KEY_ERROR, W, r), s.off(me.default.SERVER_CERTIFICATE_UPDATED, W, r), s.off(me.default.LICENSE_REQUEST_COMPLETE, W, r), s.off(me.default.KEY_SYSTEM_SELECTED, W, r), s.off(me.default.KEY_SESSION_CREATED, W, r), s.off(me.default.KEY_STATUSES_CHANGED, W, r)), de(!1) }

            function K() { return S ? S.duration : NaN }

            function q() { return S ? S.start : NaN }

            function H() { return S ? S.id : null }

            function V() { return S }

            function z() { if (!(v && g && g.hasOwnProperty("getBitrateList") && h && h.hasOwnProperty("getAllMediaInfoForType") && h.hasOwnProperty("getEventsFor"))) throw new Error(ce.default.MISSING_CONFIG_ERROR) }

            function W(e) { e.error && (c.error(e.error), T.fatal(e.error.message), Y()) }

            function X(e) { var t, n = e ? e.type : null,
                    r = void 0; if (n === ce.default.MUXED) return r = "Multiplexed representations are intentionally not supported, as they are not compliant with the DASH-AVC/264 guidelines", T.fatal(r), void c.error(new Te.default(ye.default.MANIFEST_ERROR_ID_MULTIPLEXED_CODE, r, d.getValue())); if (n === ce.default.TEXT || n === ce.default.FRAGMENTED_TEXT || n === ce.default.EMBEDDED_TEXT || n === ce.default.IMAGE) return 1; if (t = e.codec, T.debug(n + " codec: " + t), e.contentProtection && !i.supportsEncryptedMedia()) c.error(new Te.default(ye.default.CAPABILITY_MEDIAKEYS_ERROR_CODE, ye.default.CAPABILITY_MEDIAKEYS_ERROR_MESSAGE));
                else if (!i.supportsCodec(t)) return r = n + "Codec (" + t + ") is not supported.", void T.error(r); return 1 }

            function Q(e) { var t, n, r, i;
                S && e.newMediaInfo.streamInfo.id === S.id && (t = e.newMediaInfo, n = d.getValue(), h.setCurrentMediaInfo(S.id, t.type, t), (r = ae(t)) && (i = _.getTime(), T.info("Stream -  Process track changed at current time " + i), T.debug("Stream -  Update stream controller"), n.refreshManifestOnSwitchTrack ? (T.debug("Stream -  Refreshing manifest for switch track"), k = e, a.refreshManifest()) : (r.selectMediaInfo(t), t.type !== ce.default.FRAGMENTED_TEXT ? (g.updateTopQualityIndex(t), r.switchTrackAsked(), r.getFragmentModel().abortRequests()) : (r.getScheduleController().setSeekTarget(i), r.setBufferingTime(i), r.resetIndexHandler())))) }

            function Z(e, t) { var n, r = h.getAllMediaInfoForType(S, e),
                    i = null; if (r && 0 !== r.length) { e === ce.default.VIDEO && (D = !0), e === ce.default.AUDIO && (M = !0); for (var a = 0, o = r.length; a < o; a++)
                        if (i = r[a], e === ce.default.EMBEDDED_TEXT) m.addEmbeddedTrack(i);
                        else { if (!X(i)) continue;
                            E.addTrack(i) }
                    e !== ce.default.EMBEDDED_TEXT && 0 !== E.getTracksFor(e, S).length && (e !== ce.default.IMAGE ? (E.checkInitialMediaSettingsForType(e, S), n = E.getCurrentTrackFor(e, S), s.trigger(me.default.STREAM_INITIALIZING, { streamInfo: S, mediaInfo: i }), function(e, t, n, r) { var i = O.getModel(H(), e ? e.type : null),
                            a = (0, pe.default)(l).create({ streamInfo: S, type: e ? e.type : null, mimeType: e ? e.mimeType : null, timelineConverter: p, adapter: h, manifestModel: d, mediaPlayerModel: f, fragmentModel: i, dashMetrics: u.dashMetrics, baseURLController: u.baseURLController, abrController: g, playbackController: _, mediaController: E, textController: m, errHandler: c, settings: y, boxParser: x }); if (a.initialize(n, D), g.updateTopQualityIndex(e), r ? (a.setBuffer(r.buffer), a.setBufferingTime(r.currentTime), A[r.replaceIdx] = a) : A.push(a), !r || !r.ignoreMediaInfo)
                            if (!e || e.type !== ce.default.TEXT && e.type !== ce.default.FRAGMENTED_TEXT) a.addMediaInfo(e, !0);
                            else { for (var o = void 0, s = 0; s < t.length; s++) t[s].index === e.index && (o = s), a.addMediaInfo(t[s]);
                                a.selectMediaInfo(t[o]) } }(n, r, t)) : P = (0, _e.default)(l).create({ streamInfo: S, adapter: h, baseURLController: u.baseURLController, timelineConverter: u.timelineConverter, debug: F, eventBus: s, events: me.default, dashConstants: he.default })) } else T.info("No " + e + " data.") }

            function $() { var e;
                o && (e = h.getEventsFor(S), o.addInlineEvents(e)) }

            function J(e) { var r = h.getAdaptationForType(S ? S.index : null, e, S);
                r && Array.isArray(r.Representation_asArray) && (r.Representation_asArray = r.Representation_asArray.filter(function(e, t) { if (0 === t) return !0; var n = h.getCodec(r, t, !0); return !!i.supportsCodec(n) || (T.error("[Stream] codec not supported: " + n), !1) })) }

            function ee() { for (var e = A.length, t = !!N.audio || !!N.video ? new Te.default(ye.default.DATA_UPDATE_FAILED_ERROR_CODE, ye.default.DATA_UPDATE_FAILED_ERROR_MESSAGE) : null, n = 0; n < e; n++)
                    if (A[n].isUpdating() || C) return;
                if (b) { if (w)
                        for (n = 0; n < e && A[n]; n++) A[n].getType() !== ce.default.AUDIO && A[n].getType() !== ce.default.VIDEO && A[n].getType() !== ce.default.FRAGMENTED_TEXT || w.initializeForMedia(A[n].getMediaInfo());
                    t ? c.error(t) : I || (I = !0, p.setTimeSyncCompleted(!0), s.trigger(me.default.STREAM_INITIALIZED, { streamInfo: S, liveStartTime: L ? NaN : function() { if (!S.manifestInfo.isDynamic) return NaN; for (var e = 0; e < A.length; e++)
                                if (A[e].getType() === ce.default.AUDIO || A[e].getType() === ce.default.VIDEO) return A[e].getLiveStartTime();
                            return NaN }() })); for (n = 0; n < e && A[n]; n++) A[n].getScheduleController().start() } }

            function te(e) { for (var t = {}, n = 0, r = A.length; n < r; n++) { var i = A[n].createBuffer(e);
                    i && (t[A[n].getType()] = i.getBuffer()) } return t }

            function ne(e) { if (e.streamId === S.id) { var t = oe(),
                        n = t.length; if (0 !== n) { for (var r = 0; r < n; r++)
                            if (!t[r].isBufferingCompleted() && (t[r].getType() === ce.default.AUDIO || t[r].getType() === ce.default.VIDEO)) return void T.warn("onBufferingCompleted - One streamProcessor has finished but", t[r].getType(), "one is not buffering completed");
                        T.debug("onBufferingCompleted - trigger STREAM_BUFFERING_COMPLETED"), s.trigger(me.default.STREAM_BUFFERING_COMPLETED, { streamInfo: S }) } else T.warn("onBufferingCompleted - can't trigger STREAM_BUFFERING_COMPLETED because no streamProcessor is defined") } }

            function re(e) { S && e.sender.getStreamId() === S.id && (N[e.sender.getType()] = e.error, ee()) }

            function ie(e) { var t;
                S && e.sender.getStreamInfo().id === S.id && (t = e.events, o && o.addInbandEvents(t)) }

            function ae(t) { return t ? oe().filter(function(e) { return e.getType() === t.type })[0] : null }

            function oe() { for (var e = [], t = void 0, n = void 0, r = 0; r < A.length; r++)(t = (n = A[r]).getType()) !== ce.default.AUDIO && t !== ce.default.VIDEO && t !== ce.default.FRAGMENTED_TEXT && t !== ce.default.TEXT || e.push(n); return e }

            function se(e, t, n) { var r = arguments.length <= 2 || void 0 === n ? null : n; if (!e) return !1; var i = e.getStreamInfo(),
                    a = r ? r.getStreamInfo() : S; if (!i || !a) return !1; var o = h.getAdaptationForType(i.index, t, i),
                    s = h.getAdaptationForType(a.index, t, a); return o && s ? !(!ue(s) && ue(o)) : !o && !s }

            function ue(e) { return e && (e.ContentProtection || e.Representation && 0 < e.Representation.length && e.Representation[0].ContentProtection) }

            function le(e, t, n) { var r = arguments.length <= 2 || void 0 === n ? null : n; if (!e || !e.hasOwnProperty("getStreamInfo")) return !1; var i = e.getStreamInfo(),
                    a = r ? r.getStreamInfo() : S; if (!i || !a) return !1; var o = h.getAdaptationForType(i.index, t, i),
                    s = h.getAdaptationForType(a.index, t, a); if (!o || !s) return !o && !s; var u = o && s && o.mimeType === s.mimeType,
                    l = s.Representation_asArray.map(function(e) { return e.codecs }),
                    d = o.Representation_asArray.map(function(e) { return e.codecs }),
                    f = d.some(function(e) { return -1 < l.indexOf(e) }),
                    c = d.some(function(t) { return l.some(function(e) { return function(e, t) { for (var n = e.split(".")[0], r = 0 === t.indexOf(n), i = void 0, a = 0; a < B.length; a++)
                                    if (B[a].codec === n) { i = B[a]; break }
                                if (i) return r || i.compatibleCodecs.some(function(e) { return 0 === t.indexOf(e) }); return r }(e, t) }) }); return f || c && u }

            function de(e) { L = e }

            function fe() { return L } return r = { initialize: function(e, t) {
                    (S = e) && O.setStreamId(e.id), (w = t) && (s.on(me.default.KEY_ERROR, W, r), s.on(me.default.SERVER_CERTIFICATE_UPDATED, W, r), s.on(me.default.LICENSE_REQUEST_COMPLETE, W, r), s.on(me.default.KEY_SYSTEM_SELECTED, W, r), s.on(me.default.KEY_SESSION_CREATED, W, r), s.on(me.default.KEY_STATUSES_CHANGED, W, r)), s.trigger(me.default.STREAM_UPDATED, { streamInfo: S }) }, activate: function(e, t) { if (R) return t; var n = void 0; return s.on(me.default.CURRENT_TRACK_CHANGED, Q, r), n = L ? (function() {
                        { var e;
                            C = !0, z(), J(ce.default.VIDEO), J(ce.default.AUDIO), C = !(b = !0), 0 === A.length ? (e = "No streams to play.", c.error(new Te.default(ye.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, e, d.getValue())), T.debug(e)) : ee() } }(), t) : function(e, t) { z(); var n = v.getElement();
                        $(), C = !0, J(ce.default.VIDEO), J(ce.default.AUDIO), (!n || n && /^VIDEO$/i.test(n.nodeName)) && Z(ce.default.VIDEO, e);
                        Z(ce.default.AUDIO, e), Z(ce.default.TEXT, e), Z(ce.default.FRAGMENTED_TEXT, e), Z(ce.default.EMBEDDED_TEXT, e), Z(ce.default.MUXED, e), Z(ce.default.IMAGE, e); var r = te(t); { var i;
                            C = !(b = !0), 0 === A.length ? (i = "No streams to play.", c.error(new Te.default(ye.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, i, d.getValue())), T.fatal(i)) : ee() } return r }(e, t), R = !0, n }, deactivate: G, isActive: function() { return R }, getDuration: K, getStartTime: q, getId: H, getStreamInfo: V, getHasAudioTrack: function() { return M }, getHasVideoTrack: function() { return D }, preload: function(e, t) { if (!L) { $(), Z(ce.default.VIDEO, e), Z(ce.default.AUDIO, e), Z(ce.default.TEXT, e), Z(ce.default.FRAGMENTED_TEXT, e), Z(ce.default.EMBEDDED_TEXT, e), Z(ce.default.MUXED, e), Z(ce.default.IMAGE, e), te(t), s.on(me.default.CURRENT_TRACK_CHANGED, Q, r); for (var n = 0; n < A.length && A[n]; n++) A[n].getScheduleController().start();
                        de(!0) } }, getThumbnailController: function() { return P }, getBitrateListFor: function(e) { if (z(), e === ce.default.IMAGE) return P ? P.getBitrateList() : []; var t = function(e) { for (var t = null, n = 0; n < A.length; n++)
                            if ((t = A[n]).getType() === e) return t.getMediaInfo();
                        return null }(e); return g.getBitrateList(t) }, updateData: function(e) { T.info("Manifest updated... updating data system wide."), C = !(R = !1), S = e, s.trigger(me.default.STREAM_UPDATED, { streamInfo: S }), o && $(), J(ce.default.VIDEO), J(ce.default.AUDIO); for (var t = 0, n = A.length; t < n; t++) { var r = A[t];
                        r.updateStreamInfo(S); var i = h.getMediaInfoForType(S, r.getType());
                        g.updateTopQualityIndex(i), r.addMediaInfo(i, !0) } if (k && (i = k.newMediaInfo).type !== ce.default.FRAGMENTED_TEXT) { var a = ae(k.oldMediaInfo); if (!a) return;
                        a.switchTrackAsked(), k = void 0 }
                    C = !1, ee() }, reset: Y, getProcessors: oe, setMediaSource: function(e) { for (var t = 0; t < A.length;) X(A[t].getMediaInfo()) ? (A[t].setMediaSource(e), t++) : (A[t].reset(), A.splice(t, 1)); for (var n, t = 0; t < A.length; t++) A[t].dischargePreBuffer();
                    0 === A.length && (n = "No streams to play.", c.error(new Te.default(ye.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, n + "nostreams", d.getValue())), T.fatal(n)) }, isMediaCodecCompatible: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; return le(e, ce.default.VIDEO, t) && le(e, ce.default.AUDIO, t) }, isProtectionCompatible: function(e) { var t = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; return se(e, ce.default.VIDEO, t) && se(e, ce.default.AUDIO, t) }, getPreloaded: fe, getPreloadingScheduled: function() { return n }, setPreloadingScheduled: function(e) { n = e }, getIsEndedEventSignaled: function() { return U }, setIsEndedEventSignaled: function(e) { U = e } }, F = (0, ve.default)(l).getInstance(), T = F.getLogger(r), j(), x = (0, Se.default)(l).getInstance(), O = (0, ge.default)(l).create({ mediaPlayerModel: f, dashMetrics: t, errHandler: c, settings: y, boxParser: x, dashConstants: he.default, urlUtils: e }), s.on(me.default.BUFFERING_COMPLETED, ne, r), s.on(me.default.DATA_UPDATE_COMPLETED, re, r), s.on(me.default.INBAND_EVENTS, ie, r), r }
        a.__dashjs_factory_name = "Stream", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 106: 106, 108: 108, 116: 116, 204: 204, 207: 207, 221: 221, 226: 226, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54, 61: 61 }], 106: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var W = r(e(108)),
            X = r(e(61)),
            Q = r(e(109)),
            Z = r(e(150)),
            $ = r(e(114)),
            J = r(e(200)),
            ee = r(e(121)),
            te = r(e(62)),
            ne = r(e(216)),
            i = r(e(47)),
            re = e(219),
            ie = r(e(46)),
            ae = r(e(54)),
            oe = r(e(57)),
            se = r(e(51)),
            ue = r(e(226)),
            le = r(e(45)),
            de = r(e(218)),
            fe = r(e(221)),
            ce = r(e(207)),
            he = r(e(228)),
            pe = e(244);

        function a(n) { n = n || {}; var c = this.context,
                l = (0, ie.default)(c).getInstance(),
                d = n.streamInfo,
                f = n.type,
                r = n.errHandler,
                i = n.mimeType,
                a = n.timelineConverter,
                h = n.adapter,
                o = n.manifestModel,
                s = n.mediaPlayerModel,
                p = n.fragmentModel,
                u = n.abrController,
                g = n.playbackController,
                _ = n.mediaController,
                E = n.textController,
                m = n.dashMetrics,
                v = n.settings,
                y = n.boxParser,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0,
                N = void 0,
                C = void 0,
                w = void 0,
                O = void 0;

            function P() { R = [], I = null, w = 0 }

            function L(e) { e.sender.getType() === f && e.sender.getStreamId() === d.id && (e.error || D.setCurrentRepresentation(h.convertDataToRepresentationInfo(e.currentRepresentation)), e.error && e.error.code !== se.default.SEGMENTS_UPDATE_FAILED_ERROR_CODE || g.getStreamController().getActiveStreamInfo().id === d.id && B()) }

            function x(e) { var t;
                f === e.mediaType && d.id === e.streamInfo.id && (t = Y(e.newQuality), D.setCurrentRepresentation(t), m.pushPlayListTraceMetrics(new Date, pe.PlayListTrace.REPRESENTATION_SWITCH_STOP_REASON), m.createPlaylistTraceMetrics(t.id, 1e3 * g.getTime(), g.getPlaybackRate())) }

            function F(e) { var t;
                e.streamId === d.id && e.mediaType === f && (m.addBufferLevel(f, new Date, 1e3 * e.bufferLevel), t = g.getStreamController().getActiveStreamInfo().id, o.getValue().doNotUpdateDVRWindowOnBufferUpdated || d.id !== t || B()) }

            function U(e) { e.streamId === d.id && e.mediaType === f && (m.addBufferState(f, e.state, D.getBufferTarget()), e.state !== Q.default.BUFFER_EMPTY || g.isSeeking() || m.pushPlayListTraceMetrics(new Date, pe.PlayListTrace.REBUFFERING_REASON)) }

            function k(e) { e.streamId === d.id && e.mediaType === f && (p.syncExecutedRequestsWithBufferedRange(b.getBuffer().getAllBufferRanges(), d.duration), e.from > g.getTime() && (w = e.from, O = !0)) }

            function B() { var e = d.manifestInfo,
                    t = e.isDynamic,
                    n = a.calcSegmentAvailabilityRange(M.getCurrentRepresentation(), t);
                m.addDVRInfo(f, g.getTime(), e, n) }

            function e() { return f }

            function t() { return b ? b.getBuffer() : null }

            function G() { return R }

            function j() { return I }

            function Y(e) { var t = void 0,
                    t = void 0 !== e ? ((0, re.checkInteger)(e), M ? M.getRepresentationForQuality(e) : null) : M ? M.getCurrentRepresentation() : null; return h.convertDataToRepresentationInfo(t) }

            function K(e) { var t;
                e.sender && e.mediaType === f && e.streamId === d.id && (h.getIsTextTrack(i) && !E.isTextEnabled() || b && e.representationId && (b.appendInitSegment(e.representationId) || (t = C ? C.getInitRequest(I, M.getCurrentRepresentation()) : null, D.processInitRequest(t)))) }

            function q(e) { var t;
                e.sender && e.mediaType === f && e.streamId === d.id && (t = void 0, b.getIsPruningInProgress() || (t = function(e, t) { var n = Y(),
                        r = !isNaN(e),
                        i = g.getNormalizedTime(),
                        a = r ? e : w,
                        o = !1,
                        s = void 0; if (isNaN(a) || f === W.default.FRAGMENTED_TEXT && !E.isTextEnabled()) return null; { var u, l;
                        b && (u = b.getRangeAt(a), l = b.getRangeAt(i), null === u && null === l || r || (!u || l && l.start != u.start && l.end != u.end) && b.getBuffer().hasDiscontinuitiesAfter(i) && f !== W.default.FRAGMENTED_TEXT && (p.removeExecutedRequestsAfterTime(l.end), o = !0)) } if (t) a = t.startTime + t.duration / 2, s = z(n, a, { timeThreshold: 0, ignoreIsFinished: !0 });
                    else { var d = r || O || o; for (s = z(n, d ? a : void 0, { keepIdx: !d }), O = !1; s && s.action !== he.default.ACTION_COMPLETE && p.isFragmentLoaded(s);) s = z(n) } return s }(e.seekTarget, e.replacement)) && (D.setSeekTarget(NaN), e.replacement || (isNaN(t.startTime + t.duration) || (w = t.startTime + t.duration), t.delayLoadingTime = (new Date).getTime() + D.getTimeToLoadDelay(), D.setTimeToLoadDelay(0))), D.processMediaRequest(t)) }

            function H(e) { var t, n, r, i, a, o, s, u = e.chunk;
                u.streamId === d.id && u.mediaInfo.type == f && (t = u.bytes, r = Y(n = u.quality), i = M && r ? M.getRepresentationForQuality(r.quality) : null, a = h.getEventsFor(r.mediaInfo), o = h.getEventsFor(r, i), (a && 0 < a.length || o && 0 < o.length) && (s = function(e, t, n, r) { for (var i = Math.max(!t || isNaN(t.startTime) ? 0 : t.startTime, 0), a = [], o = [], s = n.concat(r), u = 0, l = s.length; u < l; u++) a[s[u].schemeIdUri + "/" + s[u].value] = s[u]; for (var d = (0, ce.default)(c).getInstance().parse(e).getBoxes("emsg"), u = 0, l = d.length; u < l; u++) { var f = h.getEvent(d[u], a, i);
                        f && o.push(f) } return o }(t, p.getRequests({ state: Z.default.FRAGMENT_MODEL_EXECUTED, quality: n, index: u.index })[0], a, o), l.trigger(ae.default.INBAND_EVENTS, { sender: T, events: s }))) }

            function V(e) { e.mediaType && e.mediaType !== f || e.streamId !== d.id || (w = e.time, D.setSeekTarget(e.time)) }

            function z(e, t, n) { var r, i = null; return C && (r = M && e ? M.getRepresentationForQuality(e.quality) : null, i = void 0 !== t && void 0 !== n ? C.getSegmentRequestForTime(I, r, t, n) : C.getNextSegmentRequest(I, r)), i } return T = { initialize: function(e, t) { C = (0, oe.default)(c).create({ streamInfo: d, type: f, timelineConverter: a, dashMetrics: m, mediaPlayerModel: s, baseURLController: n.baseURLController, errHandler: r, settings: v, boxParser: y, events: ae.default, eventBus: l, errors: se.default, debug: (0, le.default)(c).getInstance(), requestModifier: (0, de.default)(c).getInstance(), dashConstants: X.default, constants: W.default, urlUtils: (0, fe.default)(c).getInstance() }), (A = d.manifestInfo.isDynamic) && (N = (0, ne.default)(c).create({ timelineConverter: a })), C.initialize(A), u.registerStreamType(f, T), M = (0, te.default)(c).create({ streamId: d.id, type: f, abrController: u, dashMetrics: m, playbackController: g, timelineConverter: a, dashConstants: X.default, events: ae.default, eventBus: l, errors: se.default }), (b = function(e) { var t = null; if (!e) return r.error(new ue.default(se.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, se.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + "not properly defined")), null;
                        t = e === W.default.VIDEO || e === W.default.AUDIO ? (0, $.default)(c).create({ streamInfo: d, type: e, mediaPlayerModel: s, manifestModel: o, fragmentModel: p, errHandler: r, mediaController: _, representationController: M, adapter: h, textController: E, abrController: u, playbackController: g, settings: v }) : (0, J.default)(c).create({ streamInfo: d, type: e, mimeType: i, mediaPlayerModel: s, manifestModel: o, fragmentModel: p, errHandler: r, mediaController: _, representationController: M, adapter: h, textController: E, abrController: u, playbackController: g, settings: v }); return t }(f)) && b.initialize(e), (D = (0, ee.default)(c).create({ streamId: d.id, type: f, mimeType: i, adapter: h, dashMetrics: m, mediaPlayerModel: s, fragmentModel: p, abrController: u, playbackController: g, textController: E, mediaController: _, bufferController: b, settings: v })).initialize(t), w = 0, O = !1 }, isUpdating: function() { return !!M && M.isUpdating() }, getType: e, getBufferController: function() { return b }, getFragmentModel: function() { return p }, getScheduleController: function() { return D }, getRepresentationController: function() { return M }, getRepresentationInfo: Y, getBufferLevel: function() { return b ? b.getBufferLevel() : 0 }, isBufferingCompleted: function() { return !!b && b.getIsBufferingCompleted() }, createBuffer: function(e) { return t() || b ? b.createBuffer(R, e) : null }, updateStreamInfo: function(e) { d = e, v.get().streaming.useAppendWindow && b.updateAppendWindow() }, getStreamInfo: function() { return d }, selectMediaInfo: function(e) { e === I || e && I && e.type !== I.type || (I = e); var t, n, r, i, a, o = h.getRealAdaptation(d, I),
                        s = h.getVoRepresentations(I);
                    M && (t = M.getData(), n = u.getTopQualityIndexFor(f, d.id), r = u.getMinAllowedIndexFor(f), a = void 0, a = (i = null) !== t && t.id == o.id || f === W.default.FRAGMENTED_TEXT ? u.getQualityFor(f) : (i = u.getThroughputHistory().getAverageThroughput(f) || u.getInitialBitrateFor(f), u.getQualityForBitrate(I, i)), void 0 !== r && a < r && (a = r), n < a && (a = n), C.setMimeType(I ? I.mimeType : null), M.updateData(o, s, f, a)) }, addMediaInfo: function(e, t) {-1 === R.indexOf(e) && R.push(e), t && this.selectMediaInfo(e) }, getLiveStartTime: function() { if (!A) return NaN; if (!N) return NaN; var e = NaN,
                        t = Y(),
                        n = N.getLiveEdge(t); if (isNaN(n)) return NaN; var r = function(e, t) { try { var n = null,
                                r = g.getLiveDelay(),
                                i = isNaN(d.manifestInfo.DVRWindowSize) ? r : d.manifestInfo.DVRWindowSize,
                                a = .1 * i,
                                o = void 0; if (!isFinite(i) || z(t, e - i + a, { ignoreIsFinished: !0 }))
                                for (; !n && r <= i;)(n = z(t, o = e - r, { ignoreIsFinished: !0 })) || (r += 1); return n && g.setLiveDelay(r, !0), S.debug("live edge: " + e + ", live delay: " + r + ", live target: " + o), n } catch (e) { return null } }(n, t); return r && (e = !v.get().streaming.lowLatencyEnabled || r.duration < s.getLiveDelay() ? r.startTime : r.startTime + r.duration - s.getLiveDelay()), e }, switchTrackAsked: function() { D.switchTrackAsked() }, getMediaInfoArr: G, getMediaInfo: j, getMediaSource: function() { return b.getMediaSource() }, setMediaSource: function(e) { b.setMediaSource(e, R) }, dischargePreBuffer: function() { b.dischargePreBuffer() }, getBuffer: t, setBuffer: function(e) { b.setBuffer(e) }, setBufferingTime: function(e) { w = e }, resetIndexHandler: function() { C && C.resetIndex() }, getInitRequest: function(e) {
                    (0, re.checkInteger)(e); var t = M ? M.getRepresentationForQuality(e) : null; return C ? C.getInitRequest(I, t) : null }, getFragmentRequest: z, finalisePlayList: function(e, t) { m.pushPlayListTraceMetrics(e, t) }, reset: function(e, t) { C && C.reset(), b && (b.reset(e, t), b = null), D && (D.reset(), D = null), M && (M.reset(), M = null), N && (N.reset(), N = null), u && u.unRegisterStreamType(f), l.off(ae.default.DATA_UPDATE_COMPLETED, L, T), l.off(ae.default.QUALITY_CHANGE_REQUESTED, x, T), l.off(ae.default.INIT_FRAGMENT_NEEDED, K, T), l.off(ae.default.MEDIA_FRAGMENT_NEEDED, q, T), l.off(ae.default.MEDIA_FRAGMENT_LOADED, H, T), l.off(ae.default.BUFFER_LEVEL_UPDATED, F, T), l.off(ae.default.BUFFER_LEVEL_STATE_CHANGED, U, T), l.off(ae.default.BUFFER_CLEARED, k, T), l.off(ae.default.SEEK_TARGET, V, T), P(), d = f = null } }, S = (0, le.default)(c).getInstance().getLogger(T), P(), l.on(ae.default.DATA_UPDATE_COMPLETED, L, T, ie.default.EVENT_PRIORITY_HIGH), l.on(ae.default.QUALITY_CHANGE_REQUESTED, x, T), l.on(ae.default.INIT_FRAGMENT_NEEDED, K, T), l.on(ae.default.MEDIA_FRAGMENT_NEEDED, q, T), l.on(ae.default.MEDIA_FRAGMENT_LOADED, H, T), l.on(ae.default.BUFFER_LEVEL_UPDATED, F, T), l.on(ae.default.BUFFER_LEVEL_STATE_CHANGED, U, T), l.on(ae.default.BUFFER_CLEARED, k, T), l.on(ae.default.SEEK_TARGET, V, T), T }
        a.__dashjs_factory_name = "StreamProcessor", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 114: 114, 121: 121, 150: 150, 200: 200, 207: 207, 216: 216, 218: 218, 219: 219, 221: 221, 226: 226, 228: 228, 244: 244, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54, 57: 57, 61: 61, 62: 62 }], 107: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var u = r(e(226)),
            i = r(e(159)),
            l = e(242),
            d = r(e(233)),
            f = r(e(46)),
            c = r(e(54)),
            a = r(e(47)),
            h = r(e(51));

        function o(e) { e = e || {}; var a = "urn:mpeg:dash:resolve-to-zero:2013",
                t = this.context,
                o = (0, f.default)(t).getInstance(),
                s = (0, i.default)(t).create({ errHandler: e.errHandler, dashMetrics: e.dashMetrics, mediaPlayerModel: e.mediaPlayerModel, requestModifier: e.requestModifier, useFetch: e.settings ? e.settings.get().streaming.lowLatencyEnabled : null, errors: h.default }); return { load: function(n, r, i) {
                    function t(e, t) { r.resolved = !0, r.resolvedContent = e || null, o.trigger(c.default.XLINK_ELEMENT_LOADED, { element: r, resolveObject: i, error: e || t ? null : new u.default(h.default.XLINK_LOADER_LOADING_FAILURE_ERROR_CODE, h.default.XLINK_LOADER_LOADING_FAILURE_ERROR_MESSAGE + n) }) } var e;
                    n === a ? t(null, !0) : (e = new d.default(n, l.HTTPRequest.XLINK_EXPANSION_TYPE), s.load({ request: e, success: function(e) { t(e) }, error: function() { t(null) } })) }, reset: function() { s && (s.abort(), s = null) } } }
        o.__dashjs_factory_name = "XlinkLoader", n.default = a.default.getClassFactory(o), t.exports = n.default }, { 159: 159, 226: 226, 233: 233, 242: 242, 46: 46, 47: 47, 51: 51, 54: 54 }], 108: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.init() }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = new(function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(i, [{ key: "init", value: function() { this.STREAM = "stream", this.VIDEO = "video", this.AUDIO = "audio", this.TEXT = "text", this.FRAGMENTED_TEXT = "fragmentedText", this.EMBEDDED_TEXT = "embeddedText", this.MUXED = "muxed", this.IMAGE = "image", this.STPP = "stpp", this.TTML = "ttml", this.VTT = "vtt", this.WVTT = "wvtt", this.ABR_STRATEGY_DYNAMIC = "abrDynamic", this.ABR_STRATEGY_BOLA = "abrBola", this.ABR_STRATEGY_THROUGHPUT = "abrThroughput", this.MOVING_AVERAGE_SLIDING_WINDOW = "slidingWindow", this.MOVING_AVERAGE_EWMA = "ewma", this.BAD_ARGUMENT_ERROR = "Invalid Arguments", this.MISSING_CONFIG_ERROR = "Missing config parameter(s)", this.LOCATION = "Location", this.INITIALIZE = "initialize", this.TEXT_SHOWING = "showing", this.TEXT_HIDDEN = "hidden", this.CC1 = "CC1", this.CC3 = "CC3", this.UTF8 = "utf-8", this.SCHEME_ID_URI = "schemeIdUri", this.START_TIME = "starttime", this.SERVICE_DESCRIPTION_LL_SCHEME = "urn:dvb:dash:lowlatency:scope:2019", this.SUPPLEMENTAL_PROPERTY_LL_SCHEME = "urn:dvb:dash:lowlatency:critical:2019", this.XML = "XML", this.ARRAY_BUFFER = "ArrayBuffer" } }]), i);
        n.default = a, t.exports = n.default }, {}], 109: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.init() }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = new(function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(i, [{ key: "init", value: function() { this.TCP_CONNECTION = "TcpList", this.HTTP_REQUEST = "HttpList", this.TRACK_SWITCH = "RepSwitchList", this.BUFFER_LEVEL = "BufferLevel", this.BUFFER_LOADED = "bufferLoaded", this.ABANDON_LOAD = "abandonload", this.ALLOW_LOAD = "allowload", this.BUFFER_EMPTY = "bufferStalled", this.BUFFER_STATE = "BufferState", this.DVR_INFO = "DVRInfo", this.DROPPED_FRAMES = "DroppedFrames", this.SCHEDULING_INFO = "SchedulingInfo", this.REQUESTS_QUEUE = "RequestsQueue", this.MANIFEST_UPDATE = "ManifestUpdate", this.MANIFEST_UPDATE_STREAM_INFO = "ManifestUpdatePeriodInfo", this.MANIFEST_UPDATE_TRACK_INFO = "ManifestUpdateRepresentationInfo", this.PLAY_LIST = "PlayList", this.DVB_ERRORS = "DVBErrors" } }]), i);
        n.default = a, t.exports = n.default }, {}], 110: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }

        function i() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, i), this.init() }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = new(function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(i, [{ key: "init", value: function() { this.CLEARKEY_KEYSTEM_STRING = "org.w3.clearkey", this.WIDEVINE_KEYSTEM_STRING = "com.widevine.alpha", this.PLAYREADY_KEYSTEM_STRING = "com.microsoft.playready" } }]), i);
        n.default = a, t.exports = n.default }, {}], 111: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var Y = r(e(190)),
            K = r(e(108)),
            q = r(e(109)),
            H = r(e(225)),
            V = r(e(150)),
            z = r(e(46)),
            W = r(e(54)),
            i = r(e(47)),
            X = r(e(186)),
            Q = r(e(187)),
            Z = r(e(188)),
            $ = r(e(185)),
            J = r(e(189)),
            ee = r(e(45)),
            te = e(242),
            ne = e(219);

        function a() { var f = this.context,
                e = (0, ee.default)(f).getInstance(),
                c = (0, z.default)(f).getInstance(),
                h = void 0,
                p = void 0,
                g = void 0,
                o = void 0,
                s = void 0,
                _ = void 0,
                E = void 0,
                m = void 0,
                u = void 0,
                i = void 0,
                a = void 0,
                l = void 0,
                d = void 0,
                v = void 0,
                y = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0;

            function n() {
                (g = (0, Y.default)(f).create({ dashMetrics: D, mediaPlayerModel: y, settings: M })).initialize() }

            function t() { s = {}, _ = {}, m = {}, E = {}, A = {}, b = {}, void 0 === i && (i = !1), R = I = S = void 0, clearTimeout(u), u = null }

            function r(e) { e.mediaType === K.default.VIDEO && (S = e.oldQuality, I.push(S, v.getPlaybackQuality())) }

            function N(e) { e.metric !== q.default.HTTP_REQUEST || !e.value || e.value.type !== te.HTTPRequest.MEDIA_SEGMENT_TYPE || e.mediaType !== K.default.AUDIO && e.mediaType !== K.default.VIDEO || R.push(e.mediaType, e.value, M.get().streaming.abr.useDeadTimeLatency), e.metric !== q.default.BUFFER_LEVEL || e.mediaType !== K.default.AUDIO && e.mediaType !== K.default.VIDEO || function(e, t) { var n = M.get().streaming.abr.ABRStrategy; { if (n === K.default.ABR_STRATEGY_BOLA) return b[e] = !0; if (n === K.default.ABR_STRATEGY_THROUGHPUT) return b[e] = !1 } var r = y.getStableBufferTime(),
                        i = r,
                        a = .5 * r,
                        o = b[e],
                        s = (o ? a : i) < t;
                    (b[e] = s) !== o && (s ? p.info("[" + e + "] switching from throughput to buffer occupancy ABR rule (buffer: " + t.toFixed(3) + ").") : p.info("[" + e + "] switching from buffer occupancy to throughput ABR rule (buffer: " + t.toFixed(3) + ").")) }(e.mediaType, .001 * e.value.level) }

            function C(e, t) { return s[t] = s[t] || {}, s[t].hasOwnProperty(e) || (s[t][e] = 0),
                    function(e, t) { if (t !== K.default.VIDEO || !M.get().streaming.abr.limitBitrateByPortal || !E[t]) return e;
                        i || G(); var n = d.getAdaptationForType(0, t).Representation,
                            r = e; if (0 < a && 0 < l) { for (; 0 < r && n[r] && a < n[r].width && a - n[r - 1].width < n[r].width - a;) --r; for (; r < n.length - 1 && n[r].width === n[r + 1].width;) r += 1 } return r }(function(e, t, n) { var r = M.get().streaming.abr.maxRepresentationRatio[t]; if (isNaN(r) || 1 <= r || r < 0) return e; return Math.min(e, Math.round(n * r)) }(function(e, t) { var n = e; if (!E[t]) return n; var r = O(t);
                        void 0 !== r && (n = Math.max(e, r)); var i = w(t);
                        void 0 !== i && (n = Math.min(n, i)); return n }(s[t][e], e), e, s[t][e]), e) }

            function w(e) { var t, n = (t = e, M.get().streaming.abr.maxBitrate[t]); return -1 < n ? F(E[e].getMediaInfo(), n) : void 0 }

            function O(e) { var t, n = (t = e, M.get().streaming.abr.minBitrate[t]); if (-1 < n) { var r = E[e].getMediaInfo(),
                        i = U(r),
                        a = F(r, n); return i[a] && a < i.length - 1 && i[a].bitrate < 1e3 * n && a++, a } }

            function P(e, t, n, r) { var i = t.id,
                    a = B(e);
                (0, ne.checkInteger)(n); var o = C(e, i);
                n !== a && 0 <= n && n <= o && L(e, a, n, o, r) }

            function L(e, t, n, r, i) { var a, o, s, u, l, d, f;
                e && E[e] && (o = (a = E[e].getStreamInfo()) ? a.id : null, M.get().debug.logLevel === ee.default.LOG_LEVEL_DEBUG && (s = D.getCurrentBufferLevel(e), p.info("[" + e + "] switch from " + t + " to " + n + "/" + r + " (buffer: " + s + ") " + (i ? JSON.stringify(i) : "."))), l = e, f = n, _[d = o] = _[d] || {}, _[d][l] = f, c.trigger(W.default.QUALITY_CHANGE_REQUESTED, { mediaType: e, streamInfo: a, oldQuality: t, newQuality: n, reason: i }), u = R.getAverageThroughput(e), isNaN(u) || T.setSavedBitrateSettings(e, u)) }

            function x(e, t) { m[e].state = t }

            function F(e, t, n) { var r = e && e.type ? E[e.type].getRepresentationInfo() : null; if (M.get().streaming.abr.useDeadTimeLatency && n && r && r.fragmentDuration) { n /= 1e3; var i = r.fragmentDuration; if (i < n) return 0;
                    t *= 1 - n / i } for (var a = U(e), o = a.length - 1; 0 <= o; o--) { if (1e3 * t >= a[o].bitrate) return o } return 0 }

            function U(e) { var t = []; if (!e || !e.bitrateList) return t; for (var n = e.bitrateList, r = e.type, i = void 0, a = 0, o = n.length; a < o; a++)(i = new H.default).mediaType = r, i.qualityIndex = a, i.bitrate = n[a].bandwidth, i.width = n[a].width, i.height = n[a].height, i.scanType = n[a].scanType, t.push(i); return t }

            function k(e) { return b[e] }

            function B(e) { if (e && E[e]) { var t = E[e].getStreamInfo(),
                        n = t ? t.id : null; if (n) return _[n] = _[n] || {}, _[n].hasOwnProperty(e) || (_[n][e] = 0), _[n][e] } return 0 }

            function G() { var e;
                v && (e = M.get().streaming.abr.usePixelRatioInLimitBitrateByPortal && window.hasOwnProperty("devicePixelRatio") ? window.devicePixelRatio : 1, a = v.getClientWidth() * e, l = v.getClientHeight() * e) }

            function j(e) { var t = e.request.mediaType; if (M.get().streaming.abr.autoSwitchBitrate[t]) { var n = E[t]; if (!n) return; var r, i = (0, X.default)(f).create({ abrController: h, streamProcessor: n, currentRequest: e.request, useBufferOccupancyABR: k(t) }),
                        a = g.shouldAbandonFragment(i);
                    a.quality > Q.default.NO_CHANGE && ((r = n.getFragmentModel()).getRequests({ state: V.default.FRAGMENT_MODEL_LOADING, index: e.request.index })[0] && (r.abortRequests(), x(t, q.default.ABANDON_LOAD), A[t].reset(), A[t].push({ oldValue: B(t), newValue: a.quality, confidence: 1, reason: a.reason }), P(t, o.getActiveStreamInfo(), a.quality, a.reason), clearTimeout(u), u = setTimeout(function() { x(t, q.default.ALLOW_LOAD), u = null }, M.get().streaming.abandonLoadTimeout))) } } return h = { isPlayingAtTopQuality: function(e) { var t = e ? e.id : null,
                        n = B(K.default.AUDIO),
                        r = B(K.default.VIDEO); return n === C(K.default.AUDIO, t) && r === C(K.default.VIDEO, t) }, updateTopQualityIndex: function(e) { if (e) { var t = e.type,
                            n = e.streamInfo.id,
                            r = e.representationCount - 1; return i = t, o = r, s[a = n] = s[a] || {}, s[a][i] = o, r } var i, a, o }, getThroughputHistory: function() { return R }, getBitrateList: U, getQualityForBitrate: F, getTopBitrateInfoFor: function(e) { if (e && E && E[e]) { var t = E[e].getStreamInfo(); if (t && t.id) { var n = C(e, t.id),
                                r = U(E[e].getMediaInfo()); return r[n] ? r[n] : null } } return null }, getMaxAllowedIndexFor: w, getMinAllowedIndexFor: O, getInitialBitrateFor: function(e) { if (! function() { if (!T || !T.hasOwnProperty("getSavedBitrateSettings")) throw new Error(K.default.MISSING_CONFIG_ERROR) }(), e === K.default.TEXT || e === K.default.FRAGMENTED_TEXT) return NaN; var t, n = T.getSavedBitrateSettings(e),
                        r = M.get().streaming.abr.initialBitrate[e],
                        i = M.get().streaming.abr.initialRepresentationRatio[e]; return -1 === r && (r = -1 < i ? (t = d.getAdaptationForType(0, e).Representation, Array.isArray(t) ? t[Math.max(Math.round(t.length * i) - 1, 0)].bandwidth : 0) : isNaN(n) ? e === K.default.VIDEO ? 1e3 : 100 : n), r }, getQualityFor: B, getAbandonmentStateFor: function(e) { return m[e] ? m[e].state : null }, setPlaybackQuality: P, checkPlaybackQuality: function(e) { var t, n, r, i, a, o, s, u, l, d;
                    e && E && E[e] && (n = (t = E[e].getStreamInfo()) ? t.id : null, r = B(e), i = (0, X.default)(f).create({ abrController: h, streamProcessor: E[e], currentValue: r, switchHistory: A[e], droppedFramesHistory: I, useBufferOccupancyABR: k(e) }), !I || (a = v.getPlaybackQuality()) && I.push(S, a), M.get().streaming.abr.autoSwitchBitrate[e] && (o = O(e), s = C(e, n), l = (u = g.getMaxQuality(i)).quality, void 0 !== o && (l > Q.default.NO_CHANGE ? l : r) < o && (l = o), s < l && (l = s), A[e].push({ oldValue: r, newValue: l }), l > Q.default.NO_CHANGE && l != r ? (m[e].state === q.default.ALLOW_LOAD || r < l) && L(e, r, l, s, u.reason) : M.get().debug.logLevel === ee.default.LOG_LEVEL_DEBUG && (d = D.getCurrentBufferLevel(e), p.debug("[" + e + "] stay on " + r + "/" + s + " (buffer: " + d + ")")))) }, getTopQualityIndexFor: C, setElementSize: G, setWindowResizeEventCalled: function(e) { i = e }, createAbrRulesCollection: n, registerStreamType: function(e, t) { A[e] = A[e] || (0, Z.default)(f).create(), E[e] = t, m[e] = m[e] || {}, m[e].state = q.default.ALLOW_LOAD, b[e] = !1, c.on(W.default.LOADING_PROGRESS, j, this), e == K.default.VIDEO && (c.on(W.default.QUALITY_CHANGE_RENDERED, r, this), I = I || (0, $.default)(f).create(), G()), c.on(W.default.METRIC_ADDED, N, this), c.on(W.default.PERIOD_SWITCH_COMPLETED, n, this), R = R || (0, J.default)(f).create({ settings: M }) }, unRegisterStreamType: function(e) { delete E[e] }, setConfig: function(e) { e && (e.streamController && (o = e.streamController), e.domStorage && (T = e.domStorage), e.mediaPlayerModel && (y = e.mediaPlayerModel), e.dashMetrics && (D = e.dashMetrics), e.adapter && (d = e.adapter), e.videoModel && (v = e.videoModel), e.settings && (M = e.settings)) }, reset: function() { t(), c.off(W.default.LOADING_PROGRESS, j, this), c.off(W.default.QUALITY_CHANGE_RENDERED, r, this), c.off(W.default.METRIC_ADDED, N, this), c.off(W.default.PERIOD_SWITCH_COMPLETED, n, this), g && g.reset() } }, p = e.getLogger(h), t(), h }
        a.__dashjs_factory_name = "AbrController"; var o = i.default.getSingletonFactory(a);
        o.QUALITY_DEFAULT = 0, i.default.updateSingletonFactory(a.__dashjs_factory_name, o), n.default = o, t.exports = n.default }, { 108: 108, 109: 109, 150: 150, 185: 185, 186: 186, 187: 187, 188: 188, 189: 189, 190: 190, 219: 219, 225: 225, 242: 242, 45: 45, 46: 46, 47: 47, 54: 54 }], 112: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var u = r(e(148)),
            l = r(e(206)),
            d = r(e(221)),
            f = r(e(85)),
            i = r(e(47)),
            c = r(e(46)),
            h = r(e(54));

        function a() { var e = void 0,
                n = void 0,
                t = this.context,
                r = (0, c.default)(t).getInstance(),
                i = (0, d.default)(t).getInstance(),
                a = void 0,
                o = void 0;

            function s(e) { a.invalidateSelectedIndexes(e.entry) } return e = { reset: function() { a.reset(), o.reset() }, initialize: function(e) { var t;
                    a.setConfig({ adapter: n }), t = e, a.update(t), o.chooseSelector(n.getIsDVB(t)) }, resolve: function(e) { var t = a.getForPath(e).reduce(function(e, t) { var n = o.select(t); return n ? (i.isRelative(n.url) ? e.url = i.resolve(n.url, e.url) : (e.url = n.url, e.serviceLocation = n.serviceLocation), e.availabilityTimeOffset = n.availabilityTimeOffset, e.availabilityTimeComplete = n.availabilityTimeComplete, e) : new f.default }, new f.default); if (!i.isRelative(t.url)) return t }, setConfig: function(e) { e.baseURLTreeModel && (a = e.baseURLTreeModel), e.baseURLSelector && (o = e.baseURLSelector), e.adapter && (n = e.adapter) } }, a = (0, u.default)(t).create(), o = (0, l.default)(t).create(), r.on(h.default.SERVICE_LOCATION_BLACKLIST_CHANGED, s, e), e }
        a.__dashjs_factory_name = "BaseURLController", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 148: 148, 206: 206, 221: 221, 46: 46, 47: 47, 54: 54, 85: 85 }], 113: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            s = r(e(46));

        function a(e) { e = e || {}; var t = [],
                n = (0, s.default)(this.context).getInstance(),
                r = e.updateEventName,
                i = e.addBlacklistEventName;

            function a(e) {-1 === t.indexOf(e) && (t.push(e), n.trigger(r, { entry: e })) }

            function o(e) { a(e.entry) } return function() { i && n.on(i, o, this) }(), { add: a, contains: function(e) { return !!(t.length && e && e.length) && -1 !== t.indexOf(e) }, reset: function() { t = [] } } }
        a.__dashjs_factory_name = "BlackListController", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 46: 46, 47: 47 }], 114: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var pe = r(e(108)),
            ge = r(e(109)),
            _e = r(e(150)),
            Ee = r(e(104)),
            me = r(e(103)),
            ve = r(e(111)),
            ye = r(e(118)),
            Te = r(e(46)),
            Se = r(e(54)),
            i = r(e(47)),
            Ae = r(e(45)),
            Ie = r(e(214)),
            Re = r(e(226)),
            be = r(e(51)),
            De = e(242),
            Me = "BufferController";

        function a(e) { e = e || {}; var r = this.context,
                i = (0, Te.default)(r).getInstance(),
                a = e.errHandler,
                l = e.fragmentModel,
                u = e.representationController,
                n = e.mediaController,
                t = e.adapter,
                o = e.textController,
                s = e.abrController,
                d = e.playbackController,
                f = e.streamInfo,
                c = e.type,
                h = e.settings,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0,
                m = void 0,
                v = void 0,
                y = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0,
                N = void 0,
                C = void 0,
                w = void 0,
                O = void 0,
                P = void 0,
                L = void 0,
                x = void 0;

            function F(e, t) { if (!C || !e) return null; var n = e[0]; if (y) try { A = t && t[c] ? (0, Ee.default)(r).create(y, n, j.bind(this), t[c]) : (0, Ee.default)(r).create(y, n, j.bind(this), null), h.get().streaming.useAppendWindow && A.updateAppendWindow(f), "function" == typeof A.getBuffer().initialize && A.getBuffer().initialize(c, f, e, l) } catch (e) { g.fatal("Caught error on create SourceBuffer: " + e), a.error(new Re.default(be.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, be.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + c)) } else A = (0, me.default)(r).create(j.bind(this)); return re(this.getRepresentationInfo(_)), A }

            function U(e) { e.chunk.streamId === f.id && e.chunk.mediaInfo.type === c && (g.info("Init fragment finished loading saving to", c + "'s init cache"), C.save(e.chunk), g.debug("Append Init fragment", c, " with representationId:", e.chunk.representationId, " and quality:", e.chunk.quality, ", data size:", e.chunk.bytes.byteLength), B(e.chunk)) }

            function k(e) { var t, n = e.chunk;
                n.streamId === f.id && n.mediaInfo.type === c && (L ? (x = n, (t = A && A.getAllBufferRanges()) && 0 < t.length && .5 < d.getTimeToStreamEnd() && (g.debug("Clearing buffer because track changed - " + (t.end(t.length - 1) + .5)), ee([{ start: 0, end: t.end(t.length - 1) + .5, force: !0 }]))) : B(n)) }

            function B(e) { A.append(e), e.mediaInfo.type === pe.default.VIDEO && ce(Se.default.VIDEO_CHUNK_RECEIVED, { chunk: e }) }

            function G(e) { if (e && 0 < e.length)
                    for (var t = 0, n = e.length; t < n; t++) g.debug("Buffered range: " + e.start(t) + " - " + e.end(t) + ", currentTime = ", d.getTime()) }

            function j(e) { var t, n, r, i, a; if (e.error) return 22 === e.error.code && (N = !0, v = .8 * de(), g.warn("Quota exceeded, Critical Buffer: " + v), 0 < v && (t = Math.max(.2 * v, 1), n = v - t, r = Math.min(h.get().streaming.bufferTimeAtTopQuality, .9 * n), i = Math.min(h.get().streaming.bufferTimeAtTopQualityLongForm, .9 * n), a = { streaming: { bufferToKeep: parseFloat(t.toFixed(5)), bufferTimeAtTopQuality: parseFloat(r.toFixed(5)), bufferTimeAtTopQualityLongForm: parseFloat(i.toFixed(5)) } }, h.update(a))), void(22 !== e.error.code && fe() || (g.warn("Clearing playback buffer to overcome quota exceed situation"), ce(Se.default.QUOTA_EXCEEDED, { criticalBufferLevel: v }), ee(J())));
                N = !1, (b = e.chunk) && !isNaN(b.index) && (T = Math.max(b.index, T), Q()); var o, s = A.getAllBufferRanges();
                b.segmentType === De.HTTPRequest.MEDIA_SEGMENT_TYPE ? (G(s), H(), function() { if (c !== pe.default.AUDIO && c !== pe.default.VIDEO) return; if (isNaN(w)) return; var e = d.getTime(),
                        t = W(w, 0); if (e === w && t) return; var n = u.getCurrentRepresentation().segmentDuration; if (!(t = W(w, n))) return;
                    Math.abs(e - w) > n ? w <= t.end && (d.seek(Math.max(w, t.start), !1, !0), w = NaN) : e < t.start && (d.seek(t.start, !1, !0), w = NaN) }()) : L && (o = d.getTime(), g.debug("AppendToBuffer seek target should be " + o), ce(Se.default.SEEK_TARGET, { time: o, mediaType: c, streamId: f.id })), b && ce(b.endFragment ? Se.default.BYTES_APPENDED_END_FRAGMENT : Se.default.BYTES_APPENDED, { quality: b.quality, startTime: b.start, index: b.index, bufferedRanges: s, mediaType: c }) }

            function Y(e) { e.streamInfo.id === f.id && e.mediaType === c && _ !== e.newQuality && (re(this.getRepresentationInfo(e.newQuality)), _ = e.newQuality) }

            function K(e) { w = e.seekTime, E && (E = !(O = !0), S = Number.POSITIVE_INFINITY), c !== pe.default.FRAGMENTED_TEXT ? A.waitForUpdateEnd(function() { var e = function() { var e = [],
                            t = A.getAllBufferRanges(); if (!t || 0 === t.length) return e; var n = d.getTime(),
                            r = t.end(t.length - 1) + .5,
                            i = l.getRequests({ state: _e.default.FRAGMENT_MODEL_EXECUTED, time: n, threshold: .01 })[0]; { var a, o, s, u;
                            i ? (a = { start: 0, end: i.startTime - .5 }, (o = l.getRequests({ state: _e.default.FRAGMENT_MODEL_EXECUTED, time: i.startTime - i.duration / 2, threshold: .01 })[0]) && o.startTime != i.startTime && (a.end = o.startTime), a.start < a.end && a.end > t.start(0) && e.push(a), s = { start: i.startTime + i.duration + .5, end: r }, (u = l.getRequests({ state: _e.default.FRAGMENT_MODEL_EXECUTED, time: i.startTime + i.duration + .5, threshold: .01 })[0]) && u.startTime !== i.startTime && (s.start = u.startTime + u.duration + .5), s.start < s.end && s.start < r && e.push(s)) : (g.debug("getAllRangesWithSafetyFactor - No request found in current time position, removing full buffer 0 -", r), e.push({ start: 0, end: r })) } return e }();
                    e && 0 !== e.length || H(), ee(e) }) : H() }

            function q() { w = NaN }

            function H() {
                (!L || c === pe.default.FRAGMENTED_TEXT && o.isTextEnabled()) && X() }

            function V() { Z() }

            function z() { w = NaN, Z() }

            function W(e, t) { var n = A.getAllBufferRanges(),
                    r = 0,
                    i = 0,
                    a = null,
                    o = null,
                    s = 0,
                    u = void 0,
                    l = void 0,
                    d = isNaN(t) ? .15 : t; if (null != n) { for (l = 0, u = n.length; l < u; l++)
                        if (r = n.start(l), i = n.end(l), null === a) s = Math.abs(r - e), (r <= e && e < i || s <= d) && (a = r, o = i);
                        else { if (!((s = r - o) <= d)) break;
                            o = i }
                    if (null !== a) return { start: a, end: o } } return null }

            function X() { var e, t, n;
                d && (e = (isNaN(w) ? d.getTime() : w) || 0, m = null === (n = W(e, t)) ? 0 : n.end - e, ce(Se.default.BUFFER_LEVEL_UPDATED, { bufferLevel: m }), Z()) }

            function Q() { S - 1 <= T && !E && void 0 === A.discharge && (E = !0, g.debug("checkIfBufferingCompleted trigger BUFFERING_COMPLETED for " + c), ce(Se.default.BUFFERING_COMPLETED)) }

            function Z() { c !== pe.default.AUDIO && c !== pe.default.VIDEO || (O && !E && 0 < m && d && d.getTimeToStreamEnd() - m < .5 && (E = !(O = !1), g.debug("checkIfSufficientBuffer trigger BUFFERING_COMPLETED for type " + c), g.debug("checkIfSufficientBuffer trigger BUFFERING_COMPLETED for type " + c), ce(Se.default.BUFFERING_COMPLETED)), (!h.get().streaming.lowLatencyEnabled && m < .5 || 0 === m) && !E ? $(ge.default.BUFFER_EMPTY) : (E || m >= f.manifestInfo.minBufferTime) && $(ge.default.BUFFER_LOADED)) }

            function $(e) { R === e || e === ge.default.BUFFER_EMPTY && 0 === d.getTime() || c === pe.default.FRAGMENTED_TEXT && !o.isTextEnabled() || (R = e, ce(Se.default.BUFFER_LEVEL_STATE_CHANGED, { state: e }), ce(e === ge.default.BUFFER_LOADED ? Se.default.BUFFER_LOADED : Se.default.BUFFER_EMPTY), g.debug(e === ge.default.BUFFER_LOADED ? "Got enough buffer to start" : "Waiting for more buffer before starting playback")) }

            function J() { var e = [],
                    t = A.getAllBufferRanges(); if (!t || 0 === t.length) return e; var n = d.getTime(),
                    r = Math.max(0, n - h.get().streaming.bufferToKeep),
                    i = l.getRequests({ state: _e.default.FRAGMENT_MODEL_EXECUTED, time: n, threshold: .01 })[0]; if (i) r = Math.min(i.startTime, r);
                else if (0 === n && d.getIsDynamic()) return []; if (t.start(0) <= r) { for (var a = { start: 0, end: r }, o = 0; o < t.length && t.end(o) <= r; o++) a.end = t.end(o);
                    a.start < a.end && e.push(a) } return e }

            function ee(e) { e && A && 0 !== e.length && (P.push.apply(P, e), M || te()) }

            function te() { if (0 === P.length || !A) return g.debug("Nothing to prune, halt pruning"), void(M = !(P = [])); var e = A.getBuffer(); if (!e || !e.buffered || 0 === e.buffered.length) return g.debug("SourceBuffer is empty (or does not exist), halt pruning"), void(M = !(P = [])); var t = P.shift();
                g.debug("Removing buffer from:", t.start, "to", t.end), M = !0, d.getTime() < t.end && (E = !1, T = 0), A.remove(t.start, t.end, t.force) }

            function ne(e) { A === e.buffer && (g.debug("onRemoved buffer from:", e.from, "to", e.to), G(A.getAllBufferRanges()), 0 === P.length && (M = !1), e.unintended && (g.warn("Detected unintended removal from:", e.from, "to", e.to, "setting index handler time to", e.from), ce(Se.default.SEEK_TARGET, { time: e.from, mediaType: c, streamId: f.id })), M ? te() : (L ? (L = !1, x && B(x)) : X(), ce(Se.default.BUFFER_CLEARED, { from: e.from, to: e.to, unintended: e.unintended, hasEnoughSpaceToAppend: fe(), quotaExceeded: N }))) }

            function re(e) { e && void 0 !== e.MSETimeOffset && A && A.updateTimestampOffset && A.updateTimestampOffset(e.MSETimeOffset) }

            function ie(e) { e.sender.getStreamId() === f.id && e.sender.getType() === c && (e.error || E || re(e.currentRepresentation)) }

            function ae(e) { e.request.mediaInfo.streamInfo.id === f.id && e.request.mediaType === c && (S = e.request.index, Q()) }

            function oe(e) { var t;
                e.newMediaInfo.streamInfo.id !== f.id || e.newMediaInfo.type !== c || (t = A && A.getAllBufferRanges()) && (g.info("Track change asked"), n.getSwitchMode(c) === ye.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE && t && 0 < t.length && .5 < d.getTimeToStreamEnd() && (E = !1, S = Number.POSITIVE_INFINITY)) }

            function se() {++D * (h.get().streaming.wallclockTimeUpdateInterval / 1e3) >= h.get().streaming.bufferPruningInterval && (D = 0, A && c !== pe.default.FRAGMENTED_TEXT && (E || ee(J()))) }

            function ue() { Z() }

            function le(e, t) { y = e, A && t && "function" == typeof A.discharge && (I = A, F(t)) }

            function de() { var e, t = A.getAllBufferRanges(),
                    n = 0,
                    r = void 0; if (!t) return n; for (r = 0, e = t.length; r < e; r++) n += t.end(r) - t.start(r); return n }

            function fe() { return de() < v }

            function ce(e, t) { var n = t || {};
                n.sender = p, n.mediaType = c, n.streamId = f.id, i.trigger(e, n) }

            function he(e, t) { v = Number.POSITIVE_INFINITY, R = void 0, _ = ve.default.QUALITY_DEFAULT, S = Number.POSITIVE_INFINITY, b = null, O = N = M = E = !1, D = m = T = 0, P = [], w = NaN, A && (e || A.abort(), A.reset(t), A = null), L = !1 } return p = { getBufferControllerType: function() { return Me }, getRepresentationInfo: function(e) { return t.convertDataToRepresentationInfo(u.getRepresentationForQuality(e)) }, initialize: function(e) { le(e), _ = s.getQualityFor(c), i.on(Se.default.DATA_UPDATE_COMPLETED, ie, this), i.on(Se.default.INIT_FRAGMENT_LOADED, U, this), i.on(Se.default.MEDIA_FRAGMENT_LOADED, k, this), i.on(Se.default.QUALITY_CHANGE_REQUESTED, Y, this), i.on(Se.default.STREAM_COMPLETED, ae, this), i.on(Se.default.PLAYBACK_PLAYING, z, this), i.on(Se.default.PLAYBACK_PROGRESS, H, this), i.on(Se.default.PLAYBACK_TIME_UPDATED, H, this), i.on(Se.default.PLAYBACK_RATE_CHANGED, ue, this), i.on(Se.default.PLAYBACK_SEEKING, K, this), i.on(Se.default.PLAYBACK_SEEKED, q, this), i.on(Se.default.PLAYBACK_STALLED, V, this), i.on(Se.default.WALLCLOCK_TIME_UPDATED, se, this), i.on(Se.default.CURRENT_TRACK_CHANGED, oe, this, Te.default.EVENT_PRIORITY_HIGH), i.on(Se.default.SOURCEBUFFER_REMOVE_COMPLETED, ne, this) }, createBuffer: F, dischargePreBuffer: function() { if (A && I && "function" == typeof I.discharge) { var e = I.getAllBufferRanges(); if (0 < e.length) { for (var t = "Beginning " + c + "PreBuffer discharge, adding buffer for:", n = 0; n < e.length; n++) t += " start: " + e.start(n) + ", end: " + e.end(n) + ";";
                            g.debug(t) } else g.debug("PreBuffer discharge requested, but there were no media segments in the PreBuffer."); for (var r = I.discharge(), i = null, a = 0; a < r.length; a++) { var o = r[a],
                                s = C.extract(o.streamId, o.representationId);
                            s && (i !== s && (A.append(s), i = s), A.append(o)) }
                        I.reset(), I = null } }, getType: function() { return c }, getBuffer: function() { return A }, setBuffer: function(e) { A = e }, getBufferLevel: function() { return m }, getRangeAt: W, setMediaSource: le, getMediaSource: function() { return y }, appendInitSegment: function(e) { var t = C.extract(f.id, e); return !!t && (g.info("Append Init fragment", c, " with representationId:", t.representationId, " and quality:", t.quality, ", data size:", t.bytes.byteLength), B(t), !0) }, replaceBuffer: function() { L = !0 }, getIsBufferingCompleted: function() { return E }, getIsPruningInProgress: function() { return M }, reset: function(e, t) { i.off(Se.default.DATA_UPDATE_COMPLETED, ie, this), i.off(Se.default.INIT_FRAGMENT_LOADED, U, this), i.off(Se.default.MEDIA_FRAGMENT_LOADED, k, this), i.off(Se.default.QUALITY_CHANGE_REQUESTED, Y, this), i.off(Se.default.STREAM_COMPLETED, ae, this), i.off(Se.default.PLAYBACK_PLAYING, z, this), i.off(Se.default.PLAYBACK_PROGRESS, H, this), i.off(Se.default.PLAYBACK_TIME_UPDATED, H, this), i.off(Se.default.PLAYBACK_RATE_CHANGED, ue, this), i.off(Se.default.PLAYBACK_SEEKING, K, this), i.off(Se.default.PLAYBACK_SEEKED, q, this), i.off(Se.default.PLAYBACK_STALLED, V, this), i.off(Se.default.WALLCLOCK_TIME_UPDATED, se, this), i.off(Se.default.CURRENT_TRACK_CHANGED, oe, this), i.off(Se.default.SOURCEBUFFER_REMOVE_COMPLETED, ne, this), he(e, t) }, updateAppendWindow: function() { A && !E && A.updateAppendWindow(f) } }, g = (0, Ae.default)(r).getInstance().getLogger(p), C = (0, Ie.default)(r).getInstance(), he(), p }
        a.__dashjs_factory_name = Me, n.default = i.default.getClassFactory(a), t.exports = n.default }, { 103: 103, 104: 104, 108: 108, 109: 109, 111: 111, 118: 118, 150: 150, 214: 214, 226: 226, 242: 242, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54 }], 115: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            b = r(e(45)),
            D = r(e(46)),
            M = r(e(54)),
            N = r(e(160));

        function a() { var i = "urn:mpeg:dash:event:2012",
                a = 1,
                o = "urn:mpeg:dash:event:callback:2015",
                s = 1,
                e = 100,
                u = 300,
                l = this.context,
                d = (0, D.default)(l).getInstance(),
                t = void 0,
                f = void 0,
                r = void 0,
                c = void 0,
                h = void 0,
                n = void 0,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0,
                m = void 0;

            function v() { if (!g || !_) throw new Error("setConfig function has to be called previously") }

            function y() { m = !1, r = {}, c = {}, n = null, E = !(h = {}), p = Date.now() / 1e3 }

            function T() { try { null !== n && m && (clearInterval(n), n = null, m = !1, function() { try { I(c), I(r) } catch (e) {} }()) } catch (e) { throw e } }

            function S() { try { var e, t;
                    E || (t = (e = _.getTime()) - p, t = 0 < p ? Math.max(0, t) : 0, A(c, t, e), A(r, t, e), function() { try { if (h)
                                for (var e = _.getTime(), t = Object.keys(h), n = 0; n < t.length; n++) { var r = t[n],
                                        i = h[r];
                                    null !== i && (i.duration + i.calculatedPresentationTime) / i.eventStream.timescale < e && (f.debug("Remove Event " + r + " at time " + e), i = null, delete h[r]) } } catch (e) {} }(), p = e), E = !1 } catch (e) { E = !1 } }

            function A(e, t, n) { try { if (e)
                        for (var r = Object.keys(e), i = 0; i < r.length; i++) { var a, o = r[i],
                                s = e[o];
                            void 0 !== s && ((a = s.calculatedPresentationTime / s.eventStream.timescale) <= n && n <= a + t ? R(o, s, e) : (function(e, t, n) { try { return n < e - t } catch (e) { return !1 } }(n, t, a) || function(e) { try { var t = e.eventStream.period.start + e.eventStream.period.duration; return e.calculatedPresentationTime / 1e3 > t } catch (e) { return !1 } }(s)) && (f.debug("Deleting event " + o + " as it is expired or invalid"), delete e[o])) } } catch (e) {} }

            function I(i) { try { var e = function() { var e = Object.keys(i),
                            r = _.getTime(); if (!e || 0 === e.length) return { v: void 0 }; var t = i[e[0]].eventStream && i[e[0]].eventStream.period && !isNaN(i[e[0]].eventStream.period.duration) ? i[e[0]].eventStream.period.duration : NaN,
                            n = i[e[0]].eventStream && i[e[0]].eventStream.period && !isNaN(i[e[0]].eventStream.period.start) ? i[e[0]].eventStream.period.start : NaN; if (isNaN(t) || isNaN(n)) return { v: void 0 };
                        e.forEach(function(e) { var t = i[e],
                                n = t.calculatedPresentationTime / t.eventStream.timescale;
                            Math.abs(n - r) < u && R(e, t, i) }) }(); if ("object" == typeof e) return e.v } catch (e) {} }

            function R(e, t, n) { try { var r = _.getTime();
                    0 < t.duration && (h[e] = t), t.eventStream.schemeIdUri === i && t.eventStream.value == a ? 0 === t.duration && 0 === t.presentationTimeDelta || (f.debug("Starting manifest refresh event " + e + " at " + r), function() { try { v(), g.refreshManifest() } catch (e) {} }()) : t.eventStream.schemeIdUri === o && t.eventStream.value == s ? (f.debug("Starting callback event " + e + " at " + r), function(e) { try {
                            (0, N.default)(l).create({}).load({ method: "get", url: e, request: { responseType: "arraybuffer" } }) } catch (e) { throw e } }(t.messageData)) : (f.debug("Starting event " + e + " at " + r), d.trigger(t.eventStream.schemeIdUri, { event: t })), delete n[e] } catch (e) {} } return t = { addInlineEvents: function(e) { try { if (v(), e)
                            for (var t = 0; t < e.length; t++) { var n = e[t];
                                r[n.id] = n, f.debug("Add inline event with id " + n.id) }
                        f.debug("Added " + e.length + " inline events") } catch (e) { throw e } }, addInbandEvents: function(e) { try { v(); for (var t = 0; t < e.length; t++) { var n = e[t];
                            n.id in c ? f.debug("Repeated event with id " + n.id) : (n.eventStream.schemeIdUri === i && void 0 === c[n.id] && function(e) { try { var t, n, r;
                                    e.eventStream.value == a && (t = e.eventStream.timescale || 1, n = e.calculatedPresentationTime / t, r = void 0, r = 4294967295 == e.calculatedPresentationTime ? NaN : (e.calculatedPresentationTime + e.duration) / t, f.info("Manifest validity changed: Valid until: " + n + "; remaining duration: " + r), d.trigger(M.default.MANIFEST_VALIDITY_CHANGED, { id: e.id, validUntil: n, newDuration: r, newManifestValidAfter: NaN })) } catch (e) {} }(n), c[n.id] = n, f.debug("Add inband event with id " + n.id)) }
                        S() } catch (e) { throw e } }, start: function() { try { v(), f.debug("Start Event Controller"), m || isNaN(e) || (m = !0, n = setInterval(S, e)) } catch (e) { throw e } }, setConfig: function(e) { try { if (!e) return;
                        e.manifestUpdater && (g = e.manifestUpdater), e.playbackController && (_ = e.playbackController) } catch (e) { throw e } }, reset: function() { T(), y() } }, f = (0, b.default)(l).getInstance().getLogger(t), y(), t }
        a.__dashjs_factory_name = "EventController", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 160: 160, 45: 45, 46: 46, 47: 47, 54: 54 }], 116: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var p = r(e(108)),
            g = r(e(227)),
            d = r(e(150)),
            _ = r(e(97)),
            E = r(e(218)),
            m = r(e(46)),
            v = r(e(54)),
            y = r(e(51)),
            i = r(e(47)),
            T = r(e(45));

        function a(r) { r = r || {}; var i = this.context,
                f = (0, m.default)(i).getInstance(),
                a = r.errHandler,
                o = r.mediaPlayerModel,
                s = r.dashMetrics,
                u = (0, T.default)(i).getInstance(),
                e = void 0,
                c = void 0,
                l = void 0,
                h = void 0;

            function t() { for (var e in l) l[e].reset();
                l = {} }

            function n(e) { var t, n, r, i, a, o, s, u, l, d;
                e.sender && (t = e.request, n = e.response, r = t.isInitializationRequest(), (i = t.mediaInfo.streamInfo) && i.id !== h || (e.error && (e.request.mediaType !== p.default.AUDIO && e.request.mediaType !== p.default.VIDEO && e.request.mediaType !== p.default.FRAGMENTED_TEXT || f.trigger(v.default.SERVICE_LOCATION_BLACKLIST_ADD, { entry: e.request.serviceLocation })), n && i ? (o = n, s = t, u = i.id, l = e.type !== v.default.FRAGMENT_LOADING_PROGRESS, (d = new g.default).streamId = u, d.mediaInfo = s.mediaInfo, d.segmentType = s.type, d.start = s.startTime, d.duration = s.duration, d.end = d.start + d.duration, d.bytes = o, d.index = s.index, d.quality = s.quality, d.representationId = s.representationId, d.endFragment = l, a = d, f.trigger(r ? v.default.INIT_FRAGMENT_LOADED : v.default.MEDIA_FRAGMENT_LOADED, { chunk: a, request: t })) : c.warn("No " + t.mediaType + " bytes to push or stream is inactive."))) } return e = { getModel: function(e, t) { var n = l[t]; return n || (n = (0, d.default)(i).create({ streamId: e, dashMetrics: s, fragmentLoader: (0, _.default)(i).create({ dashMetrics: s, mediaPlayerModel: o, errHandler: a, requestModifier: (0, E.default)(i).getInstance(), settings: r.settings, boxParser: r.boxParser, eventBus: f, events: v.default, errors: y.default, dashConstants: r.dashConstants, urlUtils: r.urlUtils }), debug: u, eventBus: f, events: v.default }), l[t] = n), n }, setStreamId: function(e) { h = e }, reset: function() { f.off(v.default.FRAGMENT_LOADING_COMPLETED, n, this), f.off(v.default.FRAGMENT_LOADING_PROGRESS, n, this), t() } }, c = u.getLogger(e), t(), f.on(v.default.FRAGMENT_LOADING_COMPLETED, n, e), f.on(v.default.FRAGMENT_LOADING_PROGRESS, n, e), e }
        a.__dashjs_factory_name = "FragmentController", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 150: 150, 218: 218, 227: 227, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54, 97: 97 }], 117: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            E = r(e(45)),
            m = r(e(54)),
            v = r(e(46));

        function a() { var e = this.context,
                d = (0, v.default)(e).getInstance(),
                t = void 0,
                n = void 0,
                f = void 0,
                r = void 0,
                i = void 0,
                c = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                _ = void 0;

            function a() { _.debug("Stopping the gap controller"), i && (clearInterval(i), i = null),
                    function() { d.off(m.default.WALLCLOCK_TIME_UPDATED, u, this), d.off(m.default.BYTES_APPENDED_END_FRAGMENT, o, this) }(), i = null, c = NaN, r = 0 }

            function o() { i || function() { try { i || (_.debug("Starting the gap controller"), i = setInterval(function() { s() && l(h.getTime()) }, 100)) } catch (e) {} }() }

            function s() { return f.get().streaming.jumpGaps && 0 < p.getActiveStreamProcessors().length && (!h.isSeeking() || p.hasStreamFinishedBuffering(p.getActiveStream())) && !h.isPaused() && !p.getIsStreamSwitchInProgress() && !p.getHasMediaOrIntialisationError() }

            function u() { var e;
                s() && 10 <= ++r && (e = h.getTime(), n === e ? l(e, !0) : (n = e, c = NaN), r = 0) }

            function l(e, t) { var n, r, i = !(arguments.length <= 1 || void 0 === t) && t,
                    a = f.get().streaming.smallGapLimit,
                    o = f.get().streaming.jumpLargeGaps,
                    s = NaN,
                    u = !1;
                (r = function(e) { try { var t = g.getBufferRange(); if (!t || t.length <= 1 && 0 < e) return null; for (var n = null, r = 0; !n && r < t.length;) { var i = 0 < r ? t.end(r - 1) : 0;
                            e < t.start(r) && i - e < .1 && (n = t.start(r)), r += 1 } return n } catch (e) { return null } }(e)) && 0 < r && (0 < (n = r - e) && (n <= a || o) && (s = r)); var l = h.getTimeToStreamEnd();
                isNaN(s) && i && isFinite(l) && !isNaN(l) && (l < a || p.hasStreamFinishedBuffering(p.getActiveStream())) && (s = parseFloat(h.getStreamEndTime().toFixed(5)), u = !0), 0 < s && c !== s && (u ? (_.warn("Jumping to end of stream because of gap from " + e + " to " + s + ". Gap duration: " + (s - e)), d.trigger(m.default.GAP_CAUSED_SEEK_TO_PERIOD_END, { seekTime: s })) : (_.warn("Jumping gap from " + e + " to " + s + ". Gap duration: " + (s - e)), h.seek(s, !0, !0)), c = s) } return t = { reset: a, setConfig: function(e) { e && (e.settings && (f = e.settings), e.playbackController && (h = e.playbackController), e.streamController && (p = e.streamController), e.videoModel && (g = e.videoModel), e.timelineConverter && e.timelineConverter, e.adapter && e.adapter) }, initialize: function() {! function() { d.on(m.default.WALLCLOCK_TIME_UPDATED, u, this), d.on(m.default.BYTES_APPENDED_END_FRAGMENT, o, this) }() } }, _ = (0, E.default)(e).getInstance().getLogger(t), a(), t }
        a.__dashjs_factory_name = "GapController", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 45: 45, 46: 46, 47: 47, 54: 54 }], 118: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var S = r(e(108)),
            A = r(e(54)),
            I = r(e(46)),
            i = r(e(47)),
            R = r(e(45)),
            b = "neverReplace",
            D = "alwaysReplace",
            M = "highestBitrate",
            N = "widestRange",
            C = M;

        function a() { var e = this.context,
                l = (0, I.default)(e).getInstance(),
                t = void 0,
                o = void 0,
                d = void 0,
                n = void 0,
                r = void 0,
                f = void 0,
                c = void 0,
                i = [D, b],
                a = [M, N];

            function s(e, t) { if (!e || !t) return []; var n = t.id; return d[n] && d[n][e] ? d[n][e].list : [] }

            function h(e, t) { return !e || !t || t && !d[t.id] ? null : d[t.id][e].current }

            function u(e, t) { if (e && e.streamInfo) { var n, r, i = e.type,
                        a = e.streamInfo,
                        o = a.id,
                        s = h(i, a); if (d[o] && d[o][i] && !m(e, s))
                        if (d[o][i].current = e, !d[o][i].current || t && i === S.default.FRAGMENTED_TEXT || l.trigger(A.default.CURRENT_TRACK_CHANGED, { oldMediaInfo: s, newMediaInfo: e, switchMode: f[i] }), !t) { var u = (r = { lang: (n = e).lang, viewpoint: n.viewpoint, roles: n.roles, accessibility: n.accessibility, audioChannelConfiguration: n.audioChannelConfiguration }).lang || r.viewpoint || r.role && 0 < r.role.length || r.accessibility && 0 < r.accessibility.length || r.audioChannelConfiguration && 0 < r.audioChannelConfiguration.length ? r : null; if (!u || !d[o][i].storeLastSettings) return;
                            u.roles && (u.role = u.roles[0], delete u.roles), u.accessibility && (u.accessibility = u.accessibility[0]), u.audioChannelConfiguration && (u.audioChannelConfiguration = u.audioChannelConfiguration[0]), c.setSavedMediaSettings(i, u) } } }

            function p(e, t) { e && t && (n[e] = t) }

            function g(e) { return e ? n[e] : null }

            function _() { return r || C }

            function E(e) { return e === S.default.AUDIO || e === S.default.VIDEO || e === S.default.TEXT || e === S.default.FRAGMENTED_TEXT || e === S.default.IMAGE }

            function m(e, t) { if (!e && !t) return !0; if (!e || !t) return !1; var n = e.id === t.id,
                    r = e.viewpoint === t.viewpoint,
                    i = e.lang === t.lang,
                    a = e.roles.toString() === t.roles.toString(),
                    o = e.accessibility.toString() === t.accessibility.toString(),
                    s = e.audioChannelConfiguration.toString() === t.audioChannelConfiguration.toString(); return n && r && i && a && o && s }

            function v() { d = {}, n = { audio: null, video: null, fragmentedText: null }, f = { audio: D, video: b } }

            function y(t, e) { var n = !t.lang || e.lang.match(t.lang),
                    r = !t.viewpoint || t.viewpoint === e.viewpoint,
                    i = !t.role || !!e.roles.filter(function(e) { return e === t.role })[0],
                    a = !t.accessibility || !!e.accessibility.filter(function(e) { return e === t.accessibility })[0],
                    o = !t.audioChannelConfiguration || !!e.audioChannelConfiguration.filter(function(e) { return e === t.audioChannelConfiguration })[0]; return n && r && i && a && o }

            function T(e, t) { if (e === S.default.FRAGMENTED_TEXT) return t[0];

                function n(e) { var t = 0,
                        n = [],
                        r = void 0; return e.forEach(function(e) { r = Math.max.apply(Math, e.bitrateList.map(function(e) { return e.bandwidth })), t < r ? (t = r, n = [e]) : r === t && n.push(e) }), n }

                function r(e) { var t = 0,
                        n = [],
                        r = void 0; return e.forEach(function(e) { r = e.representationCount, t < r ? (t = r, n = [e]) : r === t && n.push(e) }), n } var i = _(),
                    a = []; switch (i) {
                    case M:
                        1 < (a = n(t)).length && (a = r(a)); break;
                    case N:
                        1 < (a = r(t)).length && (a = n(t)); break;
                    default:
                        o.warn("Track selection mode is not supported: " + i) } return a[0] } return t = { checkInitialMediaSettingsForType: function(e, t) { var n = g(e),
                        r = s(e, t),
                        i = [];
                    n || p(e, n = c.getSavedMediaSettings(e)), r && 0 !== r.length && (n && r.forEach(function(e) { y(n, e) && i.push(e) }), 0 === i.length ? u(T(e, r), !0) : 1 < i.length ? u(T(e, i)) : u(i[0])) }, addTrack: function(e) { if (e) { var t = e.type; if (E(t)) { var n = e.streamInfo.id;
                            d[n] || (d[n] = { audio: { list: [], storeLastSettings: !0, current: null }, video: { list: [], storeLastSettings: !0, current: null }, text: { list: [], storeLastSettings: !0, current: null }, fragmentedText: { list: [], storeLastSettings: !0, current: null }, image: { list: [], storeLastSettings: !0, current: null } }); for (var r = d[n][t].list, i = 0, a = r.length; i < a; ++i)
                                if (m(r[i], e)) return;
                            r.push(e); var o = g(t);
                            o && y(o, e) && !h(t, e.streamInfo) && u(e) } } }, getTracksFor: s, getCurrentTrackFor: h, isCurrentTrack: function(e) { if (!e) return !1; var t = e.type,
                        n = e.streamInfo.id; return d[n] && d[n][t] && m(d[n][t].current, e) }, setTrack: u, setInitialSettings: p, getInitialSettings: g, setSwitchMode: function(e, t) {-1 !== i.indexOf(t) ? f[e] = t : o.warn("Track switch mode is not supported: " + t) }, getSwitchMode: function(e) { return f[e] }, setSelectionModeForInitialTrack: function(e) {-1 !== a.indexOf(e) ? r = e : o.warn("Track selection mode is not supported: " + e) }, getSelectionModeForInitialTrack: _, isMultiTrackSupportedByType: E, isTracksEqual: m, matchSettings: y, saveTextSettingsDisabled: function() { c.setSavedMediaSettings(S.default.FRAGMENTED_TEXT, null) }, setConfig: function(e) { e && e.domStorage && (c = e.domStorage) }, reset: v }, o = (0, R.default)(e).getInstance().getLogger(t), v(), t }
        a.__dashjs_factory_name = "MediaController"; var o = i.default.getSingletonFactory(a);
        o.TRACK_SWITCH_MODE_NEVER_REPLACE = b, o.TRACK_SWITCH_MODE_ALWAYS_REPLACE = D, o.TRACK_SELECTION_MODE_HIGHEST_BITRATE = M, o.TRACK_SELECTION_MODE_WIDEST_RANGE = N, o.DEFAULT_INIT_TRACK_SELECTION_MODE = C, i.default.updateSingletonFactory(a.__dashjs_factory_name, o), n.default = o, t.exports = n.default }, { 108: 108, 45: 45, 46: 46, 47: 47, 54: 54 }], 119: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(45));

        function o() { var e = void 0,
                r = void 0,
                t = this.context; return e = { createMediaSource: function() { var e = "WebKitMediaSource" in window; return "MediaSource" in window ? new MediaSource : e ? new WebKitMediaSource : null }, attachMediaSource: function(e, t) { var n = window.URL.createObjectURL(e); return t.setSource(n), n }, detachMediaSource: function(e) { e.setSource(null) }, setDuration: function(e, t) { return e.duration != t && (e.duration = t), e.duration }, setSeekable: function(e, t, n) { e && "function" == typeof e.setLiveSeekableRange && "function" == typeof e.clearLiveSeekableRange && "open" === e.readyState && 0 <= t && t < n && (e.clearLiveSeekableRange(), e.setLiveSeekableRange(t, n)) }, signalEndOfStream: function(e) { if (e && "open" === e.readyState) { for (var t = e.sourceBuffers, n = 0; n < t.length; n++) { if (t[n].updating) return; if (0 === t[n].buffered.length) return }
                        r.info("call to mediaSource endOfStream"), e.endOfStream() } } }, r = (0, a.default)(t).getInstance().getLogger(e), e }
        o.__dashjs_factory_name = "MediaSourceController", n.default = i.default.getSingletonFactory(o), t.exports = n.default }, { 45: 45, 47: 47 }], 120: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var fe = r(e(108)),
            ce = r(e(109)),
            he = r(e(46)),
            pe = r(e(54)),
            i = r(e(47)),
            ge = r(e(45));

        function a() { var e = this.context,
                a = (0, he.default)(e).getInstance(),
                t = void 0,
                s = void 0,
                u = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                n = void 0,
                o = void 0,
                c = void 0,
                r = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0,
                i = void 0,
                m = void 0,
                v = void 0,
                y = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0;

            function R(e) { var t, n, r, i;
                o && isNaN(c) || (t = c, isNaN(t) && (g ? (t = e.liveStartTime, (r = (n = l.getCurrentDVRInfo()) ? n.range : null) && (i = G(p.start, !0), isNaN(i) || (s.info("Start time from URI parameters: " + i), t = Math.max(Math.min(t, i), r.start)))) : (t = p.start, i = G(p.start, !1), !isNaN(i) && i < t + p.duration && (s.info("Start time from URI parameters: " + i), t = Math.max(t, i)))), isNaN(t) || t === f.getTime() || (a.trigger(pe.default.PLAYBACK_SEEKING, { seekTime: t }), O(t, !1, !0))) }

            function b() { return parseFloat((D() - P()).toFixed(5)) }

            function D() { return p.start + p.duration }

            function M() { p && f && f.getElement() ? f.play() : E = !0 }

            function N() { return p && f ? f.isPaused() : null }

            function C() { p && f && f.pause() }

            function w() { return p && f ? f.isSeeking() : null }

            function O(e, t, n) { p && f && e !== (isNaN(v) ? f.getTime() : v) && (!0 === n ? (f.removeEventListener("seeking", Q), s.info("Requesting internal seek to time: " + e)) : (v = e, a.trigger(pe.default.PLAYBACK_SEEK_ASKED), s.info("Requesting seek to time: " + e)), f.setCurrentTime(e, t)) }

            function P() { return p && f ? f.getTime() : null }

            function L() { var e, t = P(); return !g || isNaN(m) || (e = m / 1e3) < t && (t -= e), t }

            function x() { return p && f ? f.getPlaybackRate() : null }

            function F() { return p && f ? f.getEnded() : null }

            function U() { return g }

            function k() { if (!g || isNaN(m)) return NaN; var e = L(); if (isNaN(e) || 0 === e) return 0; var t = (new Date).getTime() + 1e3 * n.getClientTimeOffset(); return Math.max(((t - m - 1e3 * e) / 1e3).toFixed(3), 0) }

            function B() { o = E = !1, m = h = 0, v = c = NaN, f && (a.off(pe.default.STREAM_INITIALIZED, R, this), a.off(pe.default.DATA_UPDATE_COMPLETED, q, this), a.off(pe.default.BUFFER_LEVEL_STATE_CHANGED, ue, this), a.off(pe.default.LOADING_PROGRESS, se, this), a.off(pe.default.PLAYBACK_PROGRESS, ae, this), a.off(pe.default.PLAYBACK_TIME_UPDATED, ae, this), a.off(pe.default.PLAYBACK_ENDED, re, this), a.off(pe.default.STREAM_INITIALIZING, de, this), Y(), f.removeEventListener("canplay", H), f.removeEventListener("play", V), f.removeEventListener("waiting", z), f.removeEventListener("playing", W), f.removeEventListener("pause", X), f.removeEventListener("error", ie), f.removeEventListener("seeking", Q), f.removeEventListener("seeked", Z), f.removeEventListener("timeupdate", $), f.removeEventListener("progress", J), f.removeEventListener("ratechange", ee), f.removeEventListener("loadedmetadata", te), f.removeEventListener("stalled", le), f.removeEventListener("ended", ne)), g = p = f = r = null }

            function G(e, t) { var n = A.getURIFragmentData(); if (!n || !n.t) return NaN; return n.t = n.t.split(",")[0], t && -1 !== n.t.indexOf("posix:") ? parseInt(n.t.substring(6)) : e + parseInt(n.t) }

            function j() { null === r && (r = setInterval(function() { a.trigger(pe.default.WALLCLOCK_TIME_UPDATED, { isDynamic: g, time: new Date }), g && N() && function() { var e = Date.now();
                        (!i || i + 500 < e) && (i = e, $()) }() }, I.get().streaming.wallclockTimeUpdateInterval)) }

            function Y() { clearInterval(r), r = null }

            function K() { var e, t, n, r, i;!N() && g && 0 !== f.getReadyState() && (e = L(), n = e, r = l.getCurrentDVRInfo(), t = (i = r ? r.range : null) ? (s.debug("Checking DVR window for at " + n + " with DVR window range " + i.start + " - " + i.end), n > i.end ? Math.max(i.end - h, i.start) : 0 < n && n + .25 < i.start && Math.abs(n - i.start) < 31536e4 ? i.start : n) : NaN, isNaN(t) || t === e || (s.debug("UpdateCurrentTime: Seek to actual time: " + t + " from currentTime: " + e), O(t))) }

            function q(e) { var t, n;
                e.error || null !== (n = (t = d.convertDataToRepresentationInfo(e.currentRepresentation)) ? t.mediaInfo.streamInfo : null) && p.id === n.id && (p = n, K()) }

            function H() { a.trigger(pe.default.CAN_PLAY) }

            function V() { s.info("Native video element event: play"), K(), j(), a.trigger(pe.default.PLAYBACK_STARTED, { startTime: P() }) }

            function z() { s.info("Native video element event: waiting"), a.trigger(pe.default.PLAYBACK_WAITING, { playingTime: P() }) }

            function W() { s.info("Native video element event: playing"), a.trigger(pe.default.PLAYBACK_PLAYING, { playingTime: P() }) }

            function X() { s.info("Native video element event: pause"), a.trigger(pe.default.PLAYBACK_PAUSED, { ended: F() }) }

            function Q() { var e = P();
                isNaN(v) || v === e || (e = v), v = NaN, s.info("Seeking to: " + e), j(), a.trigger(pe.default.PLAYBACK_SEEKING, { seekTime: e }) }

            function Z() { s.info("Native video element event: seeked"), a.trigger(pe.default.PLAYBACK_SEEKED), f.addEventListener("seeking", Q) }

            function $() { p && a.trigger(pe.default.PLAYBACK_TIME_UPDATED, { timeToEnd: b(), time: P() }) }

            function J() { a.trigger(pe.default.PLAYBACK_PROGRESS) }

            function ee() { var e = x();
                s.info("Native video element event: ratechange: ", e), a.trigger(pe.default.PLAYBACK_RATE_CHANGED, { playbackRate: e }) }

            function te() { s.info("Native video element event: loadedmetadata"), a.trigger(pe.default.PLAYBACK_METADATA_LOADED), j() }

            function ne() { s.info("Native video element event: ended"), C(), Y(), a.trigger(pe.default.PLAYBACK_ENDED, { isLast: u.getActiveStreamInfo().isLast }) }

            function re(e) { var t;
                r && e.isLast && (s.info("onPlaybackEnded -- PLAYBACK_ENDED but native video element didn't fire ended"), t = e.seekTime ? e.seekTime : D(), f.setCurrentTime(t), C(), Y()) }

            function ie(e) { var t = e.target || e.srcElement;
                a.trigger(pe.default.PLAYBACK_ERROR, { error: t.error }) }

            function ae() { var e, t, n;
                g && I.get().streaming.lowLatencyEnabled && 0 < I.get().streaming.liveCatchUpPlaybackRate && !N() && !w() && (e = k(), t = Math.abs(e - _.getLiveDelay()), n = _.getLiveCatchupLatencyThreshold(), (I.get().streaming.lowLatencyEnabled && 0 < I.get().streaming.liveCatchUpPlaybackRate && 0 < P() && t > I.get().streaming.liveCatchUpMinDrift && (isNaN(n) || e <= n) ? function() {
                    { var e, t, n, r, i, a, o;
                        f && (e = I.get().streaming.liveCatchUpPlaybackRate, t = _.getLiveDelay(), n = k() - t, r = 5 * n, i = 2 * e / (1 + Math.pow(Math.E, -r)), a = 1 - e + i, T && (o = function() { var n = null; return u.getActiveStreamProcessors().forEach(function(e) { var t = e.getBufferLevel();
                                n = null === n ? t : Math.min(n, t) }), n }(), t / 2 < o ? T = !1 : 0 < n && (a = 1)), Math.abs(f.getPlaybackRate() - a) > S && f.setPlaybackRate(a), 0 < I.get().streaming.liveCatchUpMaxDrift && !y && n > I.get().streaming.liveCatchUpMaxDrift ? (s.info("Low Latency catchup mechanism. Latency too high, doing a seek to live point"), y = !0, function() { var e = l.getCurrentDVRInfo();
                            O((e ? e.range : null).end - _.getLiveDelay(), !0, !1) }()) : y = !1) } } : oe)()) }

            function oe() { f && f.setPlaybackRate(1) }

            function se(e) { var t, n;!1 !== e.stream || !I.get().streaming.lowLatencyEnabled || isNaN(e.request.duration) || (t = 1.2 * e.request.duration) > _.getLiveDelay() && (s.warn("Browser does not support fetch API with StreamReader. Increasing live delay to be 20% higher than segment duration:", t.toFixed(2)), n = { streaming: { liveDelay: t } }, I.update(n)) }

            function ue(e) { e.streamId === p.id && (I.get().streaming.lowLatencyEnabled ? e.state !== ce.default.BUFFER_EMPTY || w() || T || (T = !0, oe()) : f.setStallState(e.mediaType, e.state === ce.default.BUFFER_EMPTY)) }

            function le(e) { a.trigger(pe.default.PLAYBACK_STALLED, { e: e }) }

            function de(e) {! function(e, t) { if (e && e.manifestInfo && e.manifestInfo.serviceDescriptions) { for (var n = void 0, r = 0; r < e.manifestInfo.serviceDescriptions.length; r++) { var i = e.manifestInfo.serviceDescriptions[r]; if (i.schemeIdUri === fe.default.SERVICE_DESCRIPTION_LL_SCHEME) { n = i; break } }
                        n && t && t.supplementalProperties && "true" === t.supplementalProperties[fe.default.SUPPLEMENTAL_PROPERTY_LL_SCHEME] && (n.latency && 0 < n.latency.target && (s.debug("Apply LL properties coming from service description. Target Latency (ms):", n.latency.target), I.update({ streaming: { lowLatencyEnabled: !0, liveDelay: n.latency.target / 1e3, liveCatchUpMinDrift: n.latency.max > n.latency.target ? (n.latency.max - n.latency.target) / 1e3 : void 0 } })), n.playbackRate && 1 < n.playbackRate.max && (s.debug("Apply LL properties coming from service description. Max PlaybackRate:", n.playbackRate.max), I.update({ streaming: { lowLatencyEnabled: !0, liveCatchUpPlaybackRate: n.playbackRate.max - 1 } }))) } }(e.streamInfo, e.mediaInfo) } return t = { initialize: function(e, t, n) { p = e, f.addEventListener("canplay", H), f.addEventListener("play", V), f.addEventListener("waiting", z), f.addEventListener("playing", W), f.addEventListener("pause", X), f.addEventListener("error", ie), f.addEventListener("seeking", Q), f.addEventListener("seeked", Z), f.addEventListener("timeupdate", $), f.addEventListener("progress", J), f.addEventListener("ratechange", ee), f.addEventListener("loadedmetadata", te), f.addEventListener("stalled", le), f.addEventListener("ended", ne), g = p.manifestInfo.isDynamic, o = !(T = y = !1) === t, c = n; var r = "undefined" != typeof navigator ? navigator.userAgent.toLowerCase() : "",
                        i = /safari/.test(r) && !/chrome/.test(r);
                    S = i ? .25 : .02, a.on(pe.default.STREAM_INITIALIZED, R, this), a.on(pe.default.DATA_UPDATE_COMPLETED, q, this), a.on(pe.default.LOADING_PROGRESS, se, this), a.on(pe.default.BUFFER_LEVEL_STATE_CHANGED, ue, this), a.on(pe.default.PLAYBACK_PROGRESS, ae, this), a.on(pe.default.PLAYBACK_TIME_UPDATED, ae, this), a.on(pe.default.PLAYBACK_ENDED, re, this), a.on(pe.default.STREAM_INITIALIZING, de, this), E && (E = !1, M()) }, setConfig: function(e) { e && (e.streamController && (u = e.streamController), e.dashMetrics && (l = e.dashMetrics), e.mediaPlayerModel && (_ = e.mediaPlayerModel), e.adapter && (d = e.adapter), e.videoModel && (f = e.videoModel), e.timelineConverter && (n = e.timelineConverter), e.uriFragmentModel && (A = e.uriFragmentModel), e.settings && (I = e.settings)) }, getStartTimeFromUriParameters: G, getTimeToStreamEnd: b, getTime: P, getNormalizedTime: L, getPlaybackRate: x, getPlayedRanges: function() { return p && f ? f.getPlayedRanges() : null }, getEnded: F, getIsDynamic: U, getStreamController: function() { return u }, computeAndSetLiveDelay: function(e, t, n) { var r, i, a = void 0,
                        o = void 0,
                        s = !isNaN(e) && isFinite(e) ? e : NaN,
                        u = d.getSuggestedPresentationDelay(),
                        a = I.get().streaming.lowLatencyEnabled ? 0 : _.getLiveDelay() ? _.getLiveDelay() : null === I.get().streaming.liveDelayFragmentCount || isNaN(I.get().streaming.liveDelayFragmentCount) || isNaN(s) ? !0 === I.get().streaming.useSuggestedPresentationDelay && null !== u && !isNaN(u) && 0 < u ? u : isNaN(s) ? isNaN(n) ? 4 * p.manifestInfo.minBufferTime : 4 * n : 4 * s : s * I.get().streaming.liveDelayFragmentCount; return null !== (i = d.getAvailabilityStartTime()) && (m = i), o = 0 < t ? (r = Math.max(t - 10, t / 2), Math.min(a, r)) : a, h = o }, getLiveDelay: function() { return h }, setLiveDelay: function(e) {!(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1] && e < h || (h = e) }, getCurrentLiveLatency: k, play: M, isPaused: N, pause: C, isSeeking: w, getStreamEndTime: D, seek: O, reset: B }, s = (0, ge.default)(e).getInstance().getLogger(t), B(), t }
        a.__dashjs_factory_name = "PlaybackController", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 45: 45, 46: 46, 47: 47, 54: 54 }], 121: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var ae = r(e(108)),
            oe = r(e(109)),
            se = r(e(197)),
            ue = r(e(150)),
            le = r(e(46)),
            de = r(e(54)),
            i = r(e(47)),
            fe = r(e(45)),
            ce = r(e(118));

        function a(e) { e = e || {}; var t = this.context,
                n = (0, le.default)(t).getInstance(),
                l = e.adapter,
                d = e.dashMetrics,
                r = e.mediaPlayerModel,
                f = e.fragmentModel,
                c = e.abrController,
                h = e.playbackController,
                i = e.textController,
                a = e.streamId,
                p = e.type,
                g = e.mimeType,
                _ = e.mediaController,
                E = e.bufferController,
                m = e.settings,
                o = void 0,
                v = void 0,
                y = void 0,
                s = void 0,
                u = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0,
                N = void 0,
                C = void 0,
                w = void 0,
                O = void 0,
                P = void 0,
                L = void 0;

            function x() { return !1 === s }

            function F() { x() || y && !E.getIsBufferingCompleted() && (v.debug("Schedule Controller starts"), s = !1, d.createPlaylistTraceMetrics(y.id, 1e3 * h.getTime(), h.getPlaybackRate()), B(0)) }

            function U() { s || (v.debug("Schedule Controller stops"), v.debug(p + " Schedule Controller stops"), s = !0, clearTimeout(S)) }

            function k() { var e, t;
                s || u || h.isPaused() && !m.get().streaming.scheduleWhilePaused || (p === ae.default.FRAGMENTED_TEXT || p === ae.default.TEXT) && !i.isTextEnabled() || E.getIsBufferingCompleted() ? U() : (function() { var e = h.getTime(),
                        t = 1.5; { var n;
                        isNaN(y.fragmentDuration) && (n = d.getCurrentSchedulingInfo(y.mediaInfo.type), t = n ? 1.5 * n.duration : 1.5) } var r = f.getRequests({ state: ue.default.FRAGMENT_MODEL_EXECUTED, time: e + t, threshold: 0 })[0]; { var i, a, o, s, u;
                        r && -1 === N.indexOf(r) && !l.getIsTextTrack(g) && (i = m.get().streaming.fastSwitchEnabled, a = E.getBufferLevel(), o = c.getAbandonmentStateFor(p), s = !_.isCurrentTrack(r.mediaInfo) && _.getSwitchMode(r.mediaInfo.type) === ce.default.TRACK_SWITCH_MODE_NEVER_REPLACE, u = r.quality < y.quality, i && (s || u) && t <= a && o !== oe.default.ABANDON_LOAD ? (j(r), L = !0, v.debug("Reloading outdated fragment at index: ", r.index)) : r.quality > y.quality && !w && ne(h.getTime() + a)) } }(), e = 0 < N.length, w || isNaN(M) || C || e || function(e, t) { D[t] = D[t] || {}; var n = c.getTopQualityIndexFor(e, t); return D[t][e] != n && (v.info("Top quality " + e + " index has changed from " + D[t][e] + " to " + n), D[t][e] = n, 1) }(p, a) || R.execute(p, y, I) ? (G(!0), !e && P && c.checkPlaybackQuality(p), P = y.quality === M && !C || w ? (t = N.shift()) && t.isInitializationRequest() ? (n.trigger(de.default.INIT_FRAGMENT_NEEDED, { sender: o, streamId: a, mediaType: p, representationId: t.representationId }), !1) : (n.trigger(de.default.MEDIA_FRAGMENT_NEEDED, { sender: o, streamId: a, mediaType: p, seekTarget: A, replacement: t }), !0) : (C ? (v.debug("Switch track for " + p + ", representation id = " + y.id), (w = _.getSwitchMode(p) === ce.default.TRACK_SWITCH_MODE_ALWAYS_REPLACE) && E.replaceBuffer && E.replaceBuffer(), C = !1) : v.debug("Quality has changed, get init request for representationid = " + y.id), n.trigger(de.default.INIT_FRAGMENT_NEEDED, { sender: o, streamId: a, mediaType: p, representationId: y.id }), M = y.quality, !1)) : B(500)) }

            function B(e) { clearTimeout(S), S = setTimeout(k, e) }

            function G(e) { u !== e ? u = e : v.debug("isFragmentProcessingInProgress is already equal to", e) }

            function j(e) { N.push(e) }

            function Y(e) { var t;
                h && f && ((t = f.getRequests({ state: ue.default.FRAGMENT_MODEL_EXECUTED, time: h.getTime(), threshold: 0 })[0]) && h.getTime() >= t.startTime && ((!b.mediaInfo || t.mediaInfo.type === b.mediaInfo.type && t.mediaInfo.id !== b.mediaInfo.id) && e && n.trigger(de.default.TRACK_CHANGE_RENDERED, { mediaType: p, oldMediaInfo: b.mediaInfo, newMediaInfo: t.mediaInfo }), t.quality === b.quality && t.adaptationIndex === b.adaptationIndex || !e || n.trigger(de.default.QUALITY_CHANGE_RENDERED, { mediaType: p, oldQuality: b.quality, newQuality: t.quality }), b = { mediaInfo: t.mediaInfo, quality: t.quality, adaptationIndex: t.adaptationIndex })) }

            function K(e) { e.request.mediaInfo.streamInfo.id === a && e.request.mediaType === p && (U(), G(!1), v.info("Stream " + a + " is complete")) }

            function q(e) { e.request.mediaInfo.streamInfo.id === a && e.request.mediaType === p && (v.info("OnFragmentLoadingCompleted - Url:", e.request ? e.request.url : "undefined", e.request.range ? ", Range:" + e.request.range : ""), l.getIsTextTrack(g) && G(!1), e.error && e.request.serviceLocation && !s && (j(e.request), G(!1), B(0)), w && (O = e.request)) }

            function H() { Y(!0) }

            function V(e) { var t, n, r;
                e.streamId === a && e.mediaType === p && (w && !isNaN(e.startTime) && (w = !1, f.addExecutedRequest(O)), G(!1), L && !isNaN(e.startTime) ? (t = h.getTime(), B((n = e.startTime + y.fragmentDuration) <= t + (r = 1.5 * y.fragmentDuration) ? 0 : 1e3 * (n - (t + r))), L = !1) : B(0)) }

            function z(e) { e.streamId === a && e.mediaType === p && (v.info("onFragmentLoadingAbandoned request: " + e.request.url + " has been aborted"), h.isSeeking() || C || (v.info("onFragmentLoadingAbandoned request: " + e.request.url + " has to be downloaded again, origin is not seeking process or switch track call"), j(e.request)), G(!1), B(0)) }

            function W(e) { e.sender.getType() === p && e.sender.getStreamId() }

            function X(e) { p === e.mediaType && a === e.streamId && U() }

            function Q(e) { e.streamId === a && e.mediaType === p && (w && m.get().streaming.flushBufferAtTrackSwitch && h.seek(h.getTime() + .001, !1, !0), e.hasEnoughSpaceToAppend && e.quotaExceeded && F()) }

            function Z(e) { e.streamId === a && e.mediaType === p && (U(), G(!1)) }

            function $() { f.abortRequests(), U() }

            function J() {!s && m.get().streaming.scheduleWhilePaused || F() }

            function ee(e) { ne(e.seekTime), re(0), s && F(); var t = y.DVRWindow && h ? y.DVRWindow.end - h.getTime() : NaN;
                d.updateManifestUpdateInfo({ latency: t }), u ? f.abortRequests() : B(0) }

            function te(e) { d.updatePlayListTraceMetrics({ playbackspeed: e.playbackRate.toString() }) }

            function ne(e) { A = e }

            function re(e) { T = e }

            function ie() { b = { mediaInfo: void(T = 0), quality: M = A = NaN, adaptationIndex: NaN }, D = {}, N = [], L = w = C = !(s = !(u = !(P = !(O = null)))) } return o = { initialize: function(e) { I = e, R = (0, se.default)(t).create({ abrController: c, dashMetrics: d, mediaPlayerModel: r, textController: i, settings: m }), n.on(de.default.DATA_UPDATE_STARTED, W, this), n.on(de.default.FRAGMENT_LOADING_COMPLETED, q, this), n.on(de.default.STREAM_COMPLETED, K, this), n.on(de.default.BUFFER_CLEARED, Q, this), n.on(de.default.BYTES_APPENDED_END_FRAGMENT, V, this), n.on(de.default.QUOTA_EXCEEDED, Z, this), n.on(de.default.PLAYBACK_SEEKING, ee, this), n.on(de.default.PLAYBACK_STARTED, J, this), n.on(de.default.PLAYBACK_RATE_CHANGED, te, this), n.on(de.default.PLAYBACK_TIME_UPDATED, H, this), n.on(de.default.URL_RESOLUTION_FAILED, $, this), n.on(de.default.FRAGMENT_LOADING_ABANDONED, z, this), n.on(de.default.BUFFERING_COMPLETED, X, this) }, getType: function() { return p }, getStreamId: function() { return a }, setCurrentRepresentation: function(e) { y = e }, setSeekTarget: ne, setTimeToLoadDelay: re, getTimeToLoadDelay: function() { return T }, switchTrackAsked: function() { C = !0 }, isStarted: x, start: F, stop: U, reset: function() { n.off(de.default.DATA_UPDATE_STARTED, W, this), n.off(de.default.FRAGMENT_LOADING_COMPLETED, q, this), n.off(de.default.STREAM_COMPLETED, K, this), n.off(de.default.BUFFER_CLEARED, Q, this), n.off(de.default.BYTES_APPENDED_END_FRAGMENT, V, this), n.off(de.default.QUOTA_EXCEEDED, Z, this), n.off(de.default.PLAYBACK_SEEKING, ee, this), n.off(de.default.PLAYBACK_STARTED, J, this), n.off(de.default.PLAYBACK_RATE_CHANGED, te, this), n.off(de.default.PLAYBACK_TIME_UPDATED, H, this), n.off(de.default.URL_RESOLUTION_FAILED, $, this), n.off(de.default.FRAGMENT_LOADING_ABANDONED, z, this), n.off(de.default.BUFFERING_COMPLETED, X, this), U(), Y(!1), ie() }, getBufferTarget: function() { return R.getBufferTarget(p, y) }, processInitRequest: function(e) { e && (G(!0), f.executeRequest(e)) }, processMediaRequest: function(e) { e ? (v.debug("Next fragment request url is " + e.url), f.executeRequest(e)) : (h.getIsDynamic() && v.debug("Next fragment seems to be at the bleeding live edge and is not available yet. Rescheduling."), G(!1), B(m.get().streaming.lowLatencyEnabled ? 100 : 500)) } }, v = (0, fe.default)(t).getInstance().getLogger(o), ie(), o }
        a.__dashjs_factory_name = "ScheduleController", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 118: 118, 150: 150, 197: 197, 45: 45, 46: 46, 47: 47, 54: 54 }], 122: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var ve = r(e(108)),
            ye = r(e(109)),
            Te = r(e(105)),
            Se = r(e(99)),
            Ae = r(e(46)),
            Ie = r(e(54)),
            i = r(e(47)),
            Re = e(244),
            be = r(e(45)),
            De = r(e(214)),
            Me = r(e(221)),
            Ne = r(e(101)),
            Ce = r(e(123)),
            we = r(e(119)),
            Oe = r(e(226)),
            Pe = r(e(51)),
            Le = r(e(115));

        function a() { var u = this.context,
                l = (0, Ae.default)(u).getInstance(),
                e = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                n = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                o = void 0,
                a = void 0,
                _ = void 0,
                E = void 0,
                m = void 0,
                v = void 0,
                y = void 0,
                r = void 0,
                s = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                i = void 0,
                b = void 0,
                D = void 0,
                M = void 0,
                N = void 0,
                C = void 0,
                w = void 0,
                O = void 0,
                P = void 0,
                t = void 0,
                L = void 0,
                x = void 0,
                F = void 0,
                U = void 0,
                k = void 0,
                B = void 0,
                G = void 0;

            function j() { var e;!ue() || (e = w.getPlaybackQuality()) && g.addDroppedFrames(e) }

            function Y(e) { var t = Z(e.seekTime);
                t === I && k && 0 < k.length && k.forEach(function(e) { e.deactivate(!0) }), t && t !== I ? (de(Re.PlayListTrace.END_OF_PERIOD_STOP_REASON), te(t, I, e.seekTime)) : de(Re.PlayListTrace.USER_REQUEST_STOP_REASON), fe(Re.PlayList.SEEK_START_REASON) }

            function K(e) { var t = ee();
                de(Re.PlayListTrace.END_OF_PERIOD_STOP_REASON), te(t, I, e.seekTime), fe(Re.PlayList.SEEK_START_REASON) }

            function q() { d.debug("[onPlaybackStarted]"), L ? (L = !1, fe(Re.PlayList.INITIAL_PLAYOUT_START_REASON)) : t && (t = !1, fe(Re.PlayList.RESUME_FROM_PAUSE_START_REASON)) }

            function H(e) { d.debug("[onPlaybackPaused]"), e.ended || (t = !0, de(Re.PlayListTrace.USER_REQUEST_STOP_REASON)) }

            function V() { x && (clearInterval(x), x = null) }

            function z() { F = F || setInterval(function() {! function() { if (!I || !W(I)) return;

                        function e() { var e, n, r = i[a],
                                t = 0 === a ? I : i[a - 1];!r.getPreloadingScheduled() && W(t) && C && (e = [ve.default.VIDEO, ve.default.AUDIO], n = !0, e.forEach(function(e) { var t = p.getMediaInfoForType(r.getStreamInfo(), e);
                                p.getVoRepresentations(t).forEach(function(e) { var t = S.calcSegmentAvailabilityRange(e, !0);
                                    t.end < t.start && (n = !1) }) }), n && function(t) { var e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]; { C && !t.getPreloaded() && Q(t, e) && (t.setPreloadingScheduled(!0), d.info("[onStreamCanLoadNext] Preloading next stream with id " + t.getId()), t.preload(C, U), k.push(t), t.getProcessors().forEach(function(e) { e.setBufferingTime(t.getStartTime()) })) } }(r, t)), a += 1 } var i = function(e) { try { var n = e || (I || null); if (n) { var t = function() { var t = n.getStreamInfo().start; return { v: A.filter(function(e) { return e.getStreamInfo().start > t }) } }(); if ("object" == typeof t) return t.v } } catch (e) { return [] } }(I),
                            a = 0; for (; a < i.length;) e() }() }, 500) }

            function W(e) { try { if (!e) return !1; var t = e.getProcessors().filter(function(e) { return e.getType() === ve.default.AUDIO || e.getType() === ve.default.VIDEO }); if (!t || 0 === t.length) return !1; var n = t.filter(function(e) { return !e.isBufferingCompleted() }); return n && 0 === n.length } catch (e) { return !1 } }

            function X() { var e = he().isLast;
                C && e && (d.info("[onStreamBufferingCompleted] calls signalEndOfStream of mediaSourceController."), o.signalEndOfStream(C)) }

            function Q(e, t) { try { return t.isProtectionCompatible(e, t) && (B || t.isMediaCodecCompatible(e, t)) && ! function(e) { try { var t = e.getStreamInfo(),
                                n = p.getAdaptationForType(t.index, ve.default.FRAGMENTED_TEXT, t); return n ? -1 !== n.codecs.indexOf("stpp") || -1 !== n.codecs.indexOf("wvtt") : !1 } catch (e) { return !1 } }(e) } catch (e) { return !1 } }

            function Z(e) { if (isNaN(e)) return null; var t = 0,
                    n = null,
                    r = A.length;
                0 < r && (t += A[0].getStartTime()); for (var i = 0; i < r; i++)
                    if (n = A[i], e < (t = parseFloat((t + n.getDuration()).toFixed(5)))) return n;
                return null }

            function $() { return I ? I.getProcessors() : [] }

            function J(e) { var t;
                I.getIsEndedEventSignaled() || (I.setIsEndedEventSignaled(!0), (t = ee()) ? (d.debug("StreamController onEnded, found next stream with id " + t.getStreamInfo().id), te(t, I, NaN)) : (d.debug("StreamController no next stream found"), I.setIsEndedEventSignaled(!1)), de(t ? Re.PlayListTrace.END_OF_PERIOD_STOP_REASON : Re.PlayListTrace.END_OF_CONTENT_STOP_REASON), 0), e && e.isLast && V() }

            function ee(e) { var t = arguments.length <= 0 || void 0 === e ? null : e,
                    n = t || (I || null); if (n) { for (var r = n.getStreamInfo().start, i = n.getStreamInfo().duration, a = parseFloat((r + i).toFixed(5)), o = 0, s = -1, u = NaN; o < A.length;) { var l = A[o].getStreamInfo().start - a;
                        0 <= l && (isNaN(u) || l < u) && (u = l, s = o), o += 1 } return 0 <= s ? A[s] : null } return null }

            function te(e, t, n) { var r;
                D || !e || t === e && e.isActive() || (D = !0, l.trigger(Ie.default.PERIOD_SWITCH_STARTED, { fromStreamInfo: t ? t.getStreamInfo() : null, toStreamInfo: e.getStreamInfo() }), r = !1, t && (r = Q(e, t), t.deactivate(r)), n = isNaN(n) ? !r && t ? e.getStreamInfo().start : NaN : n, d.info("Switch to stream " + e.getId() + ". Seektime is " + n + ", current playback time is " + O.getTime()), d.info("Seamless period switch is set to " + r), I = e, k = k.filter(function(e) { return e.getId() !== I.getId() }), O.initialize(he(), !!t, n), w.getElement() ? ne(n, null === t, !1, r) : re(n, r), 0) }

            function ne(e, t, n, r) { var i = void 0;

                function a() { C && "open" === C.readyState && (d.debug("MediaSource is open!"), window.URL.revokeObjectURL(i), C.removeEventListener("sourceopen", a), C.removeEventListener("webkitsourceopen", a), ie(), t || l.trigger(Ie.default.SOURCE_INITIALIZED), n ? I.setMediaSource(C) : re(e, r)) }
                C ? r ? (re(e, r), t || l.trigger(Ie.default.SOURCE_INITIALIZED)) : (o.detachMediaSource(w), C.addEventListener("sourceopen", a, !1), C.addEventListener("webkitsourceopen", a, !1), i = o.attachMediaSource(C, w), d.debug("MediaSource attached to element.  Waiting on open...")) : ((C = o.createMediaSource()).addEventListener("sourceopen", a, !1), C.addEventListener("webkitsourceopen", a, !1), i = o.attachMediaSource(C, w), d.debug("MediaSource attached to element.  Waiting on open...")) }

            function re(e, t) { var n;!(U = I.activate(C, t ? U : void 0)) || 0 < (n = Object.keys(U)).length && U[n[0]].changeType && (B = !0), L || isNaN(e) || (e === O.getTime() ? l.trigger(Ie.default.SEEK_TARGET, { time: e, streamId: I.getId() }) : O.seek(e)), !b && L || O.play(), D = !1, l.trigger(Ie.default.PERIOD_SWITCH_COMPLETED, { toStreamInfo: he() }) }

            function ie(e) { var t, n = e || he().manifestInfo.duration;
                n && !isNaN(n) && (t = o.setDuration(C, n), d.debug("Duration successfully set to: " + t)) }

            function ae() { try {! function() { var n = p.getStreamsInfo(); if (0 === n.length) throw new Error("There are no streams");
                        g.updateManifestUpdateInfo({ currentTime: O.getTime(), buffered: w.getBufferRange(), presentationStartTime: n[0].start, clientTimeOffset: S.getClientTimeOffset() }), 0 < A.length && (A = A.filter(function(t) { var e = 0 < n.filter(function(e) { return e.id === t.getId() }).length || t.getId() === I.getId(); return e || d.debug("Removing stream " + t.getId()), e })); for (var e, t, r, i = 0, a = n.length; i < a; i++) { var o = n[i],
                                s = function(e) { for (var t = 0, n = A.length; t < n; t++)
                                        if (A[t].getId() === e.id) return A[t];
                                    return null }(o);
                            s ? s.updateData(o) : (s = (0, Te.default)(u).create({ manifestModel: h, mediaPlayerModel: P, dashMetrics: g, manifestUpdater: c, adapter: p, timelineConverter: S, capabilities: f, errHandler: T, baseURLController: _, abrController: E, playbackController: O, eventController: v, mediaController: m, textController: y, videoModel: w, settings: G }), A.push(s), s.initialize(o, R)), g.addManifestUpdateStreamInfo(o) }
                        I || (p.getIsDynamic() && A.length && (e = n[0].manifestInfo, t = function(t, e) { try { var n = NaN; return e && !isNaN(e.maxFragmentDuration) && isFinite(e.maxFragmentDuration) ? e.maxFragmentDuration : (t && 1 === t.length && function() { var r = t[0],
                                        e = [ve.default.VIDEO, ve.default.AUDIO, ve.default.FRAGMENTED_TEXT].reduce(function(e, t) { var n = p.getMediaInfoForType(r, t); return n && e.push(n), e }, []).reduce(function(t, e) { var n = p.getVoRepresentations(e); return n && 0 < n.length && n.forEach(function(e) { e && t.push(e) }), t }, []).reduce(function(e, t) { var n = p.convertDataToRepresentationInfo(t); return n && n.fragmentDuration && !isNaN(n.fragmentDuration) && e.push(n.fragmentDuration), e }, []);
                                    n = Math.max.apply(Math, function(e) { if (Array.isArray(e)) { for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]; return n } return Array.from(e) }(e)) }(), isFinite(n) ? n : NaN) } catch (e) { return NaN } }(n, e), O.computeAndSetLiveDelay(t, e.DVRWindowSize, e.minBufferTime)), r = null, !(r = Z(O.getStartTimeFromUriParameters(n[0].start, p.getIsDynamic()))) && p.getIsDynamic() && A.length && (d.debug("Dynamic stream: Trying to find the correct starting period"), r = function() { try { var e = S.calcPresentationTimeFromWallTime(new Date, p.getRegularPeriods()[0]),
                                    t = O.getLiveDelay(); return Z(e - t) } catch (e) { return null } }()), te(null !== r ? r : A[0], null, NaN), x = x || setInterval(function() {!D && O.getTimeToStreamEnd() <= 0 && l.trigger(Ie.default.PLAYBACK_ENDED, { isLast: he().isLast }) }, 200), z()), l.trigger(Ie.default.STREAMS_COMPOSED) }() } catch (e) { T.error(new Oe.default(Pe.default.MANIFEST_ERROR_ID_NOSTREAMS_CODE, e.message + "nostreamscomposed", h.getValue())), N = !0, Ee() } }

            function oe() { var e = h.getValue();
                R && (l.trigger(Ie.default.PROTECTION_CREATED, { controller: R, manifest: e }), R.setMediaElement(w.getElement()), i && R.setProtectionData(i)), ae() }

            function se(i) { i.error ? (N = !0, Ee()) : function() { var e = i.manifest;
                    p.updatePeriods(e); var t = p.getUTCTimingSources(),
                        n = p.getIsDynamic() ? t.concat(P.getUTCTimingSources()) : t,
                        r = s.isHTTPS(i.manifest.url);
                    n.forEach(function(e) { e.value.replace(/.*?:\/\//g, "") === P.getDefaultUtcTimingSource().value.replace(/.*?:\/\//g, "") && (e.value = e.value.replace(r ? new RegExp(/^(http:)?\/\//i) : new RegExp(/^(https:)?\/\//i), r ? "https://" : "http://"), d.debug("Matching default timing source protocol to manifest protocol: ", e.value)) }), _.initialize(e), a.setConfig({ dashMetrics: g, baseURLController: _ }), a.initialize(n, G.get().streaming.useManifestDateHeaderTimeSource) }() }

            function ue() { return !!I && I.getHasVideoTrack() }

            function le() { return !!I && I.getHasAudioTrack() }

            function de(t, n) { n = n || new Date, $().forEach(function(e) { e.finalisePlayList(n, t) }), g.addPlayList() }

            function fe(e) { g.createPlaylistMetrics(1e3 * O.getTime(), e) }

            function ce(e) { if (e.error) { var t = ""; switch (e.error.code) {
                        case 1:
                            t = "MEDIA_ERR_ABORTED"; break;
                        case 2:
                            t = "MEDIA_ERR_NETWORK"; break;
                        case 3:
                            t = "MEDIA_ERR_DECODE"; break;
                        case 4:
                            t = "MEDIA_ERR_SRC_NOT_SUPPORTED"; break;
                        case 5:
                            t = "MEDIA_ERR_ENCRYPTED"; break;
                        default:
                            t = "UNKNOWN" }
                    M = !0, e.error.message && (t += " (" + e.error.message + ")"), e.error.msExtendedCode && (t += " (0x" + (e.error.msExtendedCode >>> 0).toString(16).toUpperCase() + ")"), d.fatal("Video Element Error: " + t), e.error && d.fatal(e.error), T.error(new Oe.default(e.error.code, t)), Ee() } }

            function he() { return I ? I.getStreamInfo() : null }

            function pe() { if (!(n && n.hasOwnProperty("load") && S && S.hasOwnProperty("initialize") && S.hasOwnProperty("reset") && S.hasOwnProperty("getClientTimeOffset") && h && T && g && O)) throw new Error(ve.default.MISSING_CONFIG_ERROR) }

            function ge(e) { isNaN(e.newDuration) || ie(e.newDuration) }

            function _e() { F = x = I = R = null, b = !(t = !(L = !(N = M = D = !(A = [])))), k = [] }

            function Ee() { pe(), a.reset(), de(M || N ? Re.PlayListTrace.FAILURE_STOP_REASON : Re.PlayListTrace.USER_REQUEST_STOP_REASON); for (var e = 0, t = A ? A.length : 0; e < t; e++) { A[e].reset(M) }! function() { l.off(Ie.default.PLAYBACK_TIME_UPDATED, j, this), l.off(Ie.default.PLAYBACK_SEEKING, Y, this), l.off(Ie.default.GAP_CAUSED_SEEK_TO_PERIOD_END, K, this), l.off(Ie.default.PLAYBACK_ERROR, ce, this), l.off(Ie.default.PLAYBACK_STARTED, q, this), l.off(Ie.default.PLAYBACK_PAUSED, H, this), l.off(Ie.default.PLAYBACK_ENDED, J, this), l.off(Ie.default.MANIFEST_UPDATED, se, this), l.off(Ie.default.STREAM_BUFFERING_COMPLETED, X, this), l.off(Ie.default.MANIFEST_VALIDITY_CHANGED, ge, this), l.off(Ie.default.TIME_SYNCHRONIZATION_COMPLETED, oe, this), l.off(Ne.default.METRIC_ADDED, me, this) }(), _.reset(), c.reset(), v.reset(), g.clearAllCurrentMetrics(), h.setValue(null), n.reset(), S.reset(), r.reset(), C && (o.detachMediaSource(w), C = null), w = null, R && (R.setMediaElement(null), i = R = null, h.getValue() && l.trigger(Ie.default.PROTECTION_DESTROYED, { data: h.getValue().url })), V(), clearInterval(F), F = null, l.trigger(Ie.default.STREAM_TEARDOWN_COMPLETE), _e() }

            function me(e) { var t;
                e.metric === ye.default.DVR_INFO && (t = le() ? ve.default.AUDIO : ve.default.VIDEO, e.mediaType === t && o.setSeekable(C, e.value.range.start, e.value.range.end)) } return e = { initialize: function(e, t) { pe(), b = e, i = t, S.initialize(), (c = (0, Se.default)(u).create()).setConfig({ manifestModel: h, adapter: p, manifestLoader: n, errHandler: T, settings: G }), c.initialize(), (v = (0, Le.default)(u).getInstance()).setConfig({ manifestUpdater: c, playbackController: O }), v.start(),
                        function() { l.on(Ie.default.PLAYBACK_TIME_UPDATED, j, this), l.on(Ie.default.PLAYBACK_SEEKING, Y, this), l.on(Ie.default.GAP_CAUSED_SEEK_TO_PERIOD_END, K, this), l.on(Ie.default.PLAYBACK_ERROR, ce, this), l.on(Ie.default.PLAYBACK_STARTED, q, this), l.on(Ie.default.PLAYBACK_PAUSED, H, this), l.on(Ie.default.PLAYBACK_ENDED, J, this), l.on(Ie.default.MANIFEST_UPDATED, se, this), l.on(Ie.default.STREAM_BUFFERING_COMPLETED, X, this), l.on(Ie.default.MANIFEST_VALIDITY_CHANGED, ge, this), l.on(Ie.default.TIME_SYNCHRONIZATION_COMPLETED, oe, this), l.on(Ne.default.METRIC_ADDED, me, this) }() }, getActiveStreamInfo: he, hasVideoTrack: ue, hasAudioTrack: le, switchToVideoElement: function(e) { I && (O.initialize(he()), ne(e, !1, !0, !1)) }, getStreamById: function(t) { return A.filter(function(e) { return e.getId() === t })[0] }, getStreamForTime: Z, getTimeRelativeToStreamId: function(e, t) { for (var n = null, r = 0, i = 0, a = null, o = 0; o < A.length; o++) { if (i = (n = A[o]).getStartTime(), a = n.getDuration(), Number.isFinite(i) && (r = i), n.getId() === t) return e - r;
                        Number.isFinite(a) && (r += a) } return null }, load: function(e) { pe(), n.load(e) }, loadWithManifest: function(e) {! function() { if (!c || !c.hasOwnProperty("setManifest")) throw new Error("initialize function has to be called previously") }(), c.setManifest(e) }, getActiveStreamProcessors: $, setConfig: function(e) { e && (e.capabilities && (f = e.capabilities), e.manifestLoader && (n = e.manifestLoader), e.manifestModel && (h = e.manifestModel), e.mediaPlayerModel && (P = e.mediaPlayerModel), e.protectionController && (R = e.protectionController), e.adapter && (p = e.adapter), e.dashMetrics && (g = e.dashMetrics), e.errHandler && (T = e.errHandler), e.timelineConverter && (S = e.timelineConverter), e.videoModel && (w = e.videoModel), e.playbackController && (O = e.playbackController), e.abrController && (E = e.abrController), e.mediaController && (m = e.mediaController), e.textController && (y = e.textController), e.settings && (G = e.settings), e.baseURLController && (_ = e.baseURLController)) }, setProtectionData: function(e) { i = e }, getIsStreamSwitchInProgress: function() { return D }, getHasMediaOrIntialisationError: function() { return M || N }, hasStreamFinishedBuffering: W, getStreams: function() { return A }, getActiveStream: function() { return I }, reset: Ee }, d = (0, be.default)(u).getInstance().getLogger(e), a = (0, Ce.default)(u).getInstance(), o = (0, we.default)(u).getInstance(), r = (0, De.default)(u).getInstance(), s = (0, Me.default)(u).getInstance(), _e(), e }
        a.__dashjs_factory_name = "StreamController", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 101: 101, 105: 105, 108: 108, 109: 109, 115: 115, 119: 119, 123: 123, 214: 214, 221: 221, 226: 226, 244: 244, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54, 99: 99 }], 123: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var S = r(e(226)),
            A = e(242),
            I = r(e(46)),
            R = r(e(54)),
            b = r(e(51)),
            i = r(e(47)),
            D = r(e(45)),
            M = r(e(221));

        function a() { var e = this.context,
                r = (0, I.default)(e).getInstance(),
                c = (0, M.default)(e).getInstance(),
                t = void 0,
                o = void 0,
                n = void 0,
                i = void 0,
                s = void 0,
                u = void 0,
                a = void 0,
                h = void 0;

            function l(e) { i = e }

            function d(e) { n = e }

            function f(e) { var t, n, r, i = Date.parse(e); return isNaN(i) && (n = t = void 0, r = /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})(?::([0-9]*)(\.[0-9]*)?)?(?:([+\-])([0-9]{2})([0-9]{2}))?/.exec(e), t = Date.UTC(parseInt(r[1], 10), parseInt(r[2], 10) - 1, parseInt(r[3], 10), parseInt(r[4], 10), parseInt(r[5], 10), r[6] && (parseInt(r[6], 10) || 0), r[7] && 1e3 * parseFloat(r[7]) || 0), r[9] && r[10] && (n = 60 * parseInt(r[9], 10) + parseInt(r[10], 10), t += ("+" === r[8] ? -1 : 1) * n * 60 * 1e3), i = new Date(t).getTime()), i }

            function p(e) { return Date.parse(e) }

            function g(e) { return Date.parse(e) }

            function _(e, t, n) { n() }

            function E(e, t, n) { var r = f(e);
                isNaN(r) ? n() : t(r) }

            function m(n, e, r, t, i) { var a, o, s, u = !1,
                    l = new XMLHttpRequest,
                    d = i ? A.HTTPRequest.HEAD : A.HTTPRequest.GET,
                    f = e.match(/\S+/g);
                e = f.shift(), a = function() { u || (u = !0, f.length ? m(n, f.join(" "), r, t, i) : t()) }, o = function() { var e = void 0,
                        t = void 0;
                    200 === l.status && (e = i ? l.getResponseHeader("Date") : l.response, t = n(e), isNaN(t) || (r(t), u = !0)) }, !c.isRelative(e) || (s = h.resolve()) && (e = c.resolve(e, s.url)), l.open(d, e), l.timeout = 5e3, l.onload = o, l.onloadend = a, l.send() }

            function v(e, t, n) { m(g, e, t, n, !0) }

            function y() { var e = a.getLatestMPDRequestHeaderValueByID("Date"),
                    t = null !== e ? new Date(e).getTime() : Number.NaN;
                isNaN(t) ? T(!0) : (d(t - (new Date).getTime()), T(!1, t / 1e3, n)) }

            function T(e, t, n) { l(!1), r.trigger(R.default.TIME_SYNCHRONIZATION_COMPLETED, { time: t, offset: n, error: e ? new S.default(b.default.TIME_SYNC_FAILED_ERROR_CODE, b.default.TIME_SYNC_FAILED_ERROR_MESSAGE) : null }) } return t = { initialize: function(e, t) { s = t, n = 0, i = !1, u = { "urn:mpeg:dash:utc:http-head:2014": v, "urn:mpeg:dash:utc:http-xsdate:2014": m.bind(null, f), "urn:mpeg:dash:utc:http-iso:2014": m.bind(null, p), "urn:mpeg:dash:utc:direct:2014": E, "urn:mpeg:dash:utc:http-head:2012": v, "urn:mpeg:dash:utc:http-xsdate:2012": m.bind(null, f), "urn:mpeg:dash:utc:http-iso:2012": m.bind(null, p), "urn:mpeg:dash:utc:direct:2012": E, "urn:mpeg:dash:utc:http-ntp:2014": _, "urn:mpeg:dash:utc:ntp:2014": _, "urn:mpeg:dash:utc:sntp:2014": _ }, i || function e(t, n) { var r = n || 0; var i = t[r]; var a = function(e, t) { var n = !e || !t;
                            n && s ? y() : T(n, e, t) };
                        l(!0);
                        i ? u.hasOwnProperty(i.schemeIdUri) ? u[i.schemeIdUri](i.value, function(e) { var t = (new Date).getTime(),
                                n = e - t;
                            d(n), o.info("Local time: " + new Date(t)), o.info("Server time: " + new Date(e)), o.info("Server Time - Local Time (ms): " + n), a(e, n) }, function() { e(t, r + 1) }) : e(t, r + 1) : (d(0), a()) }(e) }, getOffsetToDeviceTimeMs: function() { return n }, setConfig: function(e) { e && (e.dashMetrics && (a = e.dashMetrics), e.baseURLController && (h = e.baseURLController)) }, reset: function() { l(!1) } }, o = (0, D.default)(e).getInstance().getLogger(t), t }
        a.__dashjs_factory_name = "TimeSyncController"; var o = i.default.getSingletonFactory(a);
        o.HTTP_TIMEOUT_MS = 5e3, i.default.updateSingletonFactory(a.__dashjs_factory_name, o), n.default = o, t.exports = n.default }, { 221: 221, 226: 226, 242: 242, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54 }], 124: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var p = r(e(107)),
            g = r(e(46)),
            _ = r(e(54)),
            i = r(e(47)),
            E = r(e(3)),
            m = r(e(221)),
            v = r(e(61)),
            y = "onLoad";

        function a(e) { e = e || {}; var t = this.context,
                i = (0, g.default)(t).getInstance(),
                s = (0, m.default)(t).getInstance(),
                n = void 0,
                r = void 0,
                u = void 0,
                l = void 0,
                a = void 0,
                d = void 0;

            function o(e, t, n) { var r = {},
                    i = void 0,
                    a = void 0;
                r.elements = e, r.type = t, r.resolveType = n, 0 === r.elements.length && c(r); for (var o = 0; o < r.elements.length; o++) i = r.elements[o], a = s.isHTTPURL(i.url) ? i.url : i.originalContent.BaseURL + i.url, d.load(a, i, r) }

            function f(e) { var t, n = void 0,
                    r = "",
                    n = e.element,
                    i = e.resolveObject;
                n.resolvedContent && ((t = 0) === n.resolvedContent.indexOf("<?xml") && (t = n.resolvedContent.indexOf("?>") + 2), r = n.resolvedContent.substr(0, t) + "<response>" + n.resolvedContent.substr(t) + "</response>", n.resolvedContent = a.xml_str2json(r)),
                    function(e) { var t = void 0; for (t = 0; t < e.elements.length; t++)
                            if (!1 === e.elements[t].resolved) return !1;
                        return !0 }(i) && c(i) }

            function c(e) { var t = [],
                    n = void 0,
                    r = void 0; if (! function(e) { var t = [],
                            n = void 0,
                            r = void 0,
                            i = void 0,
                            a = void 0,
                            o = void 0,
                            s = void 0; for (a = e.elements.length - 1; 0 <= a; a--) { if (n = e.elements[a], r = n.type + "_asArray", n.resolvedContent) { if (n.resolvedContent)
                                    for (o = 0; o < n.resolvedContent[r].length; o++) i = n.resolvedContent[r][o], t.push(i) } else delete n.originalContent["xlink:actuate"], delete n.originalContent["xlink:href"], t.push(n.originalContent); for (n.parentElement[r].splice(n.index, 1), s = 0; s < t.length; s++) n.parentElement[r].splice(n.index + s, 0, t[s]);
                            t = [] }
                        0 < e.elements.length && u.run(l) }(e), "onActuate" === e.resolveType && i.trigger(_.default.XLINK_READY, { manifest: l }), e.resolveType === y) switch (e.type) {
                    case v.default.PERIOD:
                        for (n = 0; n < l[v.default.PERIOD + "_asArray"].length; n++)(r = l[v.default.PERIOD + "_asArray"][n]).hasOwnProperty(v.default.ADAPTATION_SET + "_asArray") && (t = t.concat(h(r[v.default.ADAPTATION_SET + "_asArray"], r, v.default.ADAPTATION_SET, y))), r.hasOwnProperty(v.default.EVENT_STREAM + "_asArray") && (t = t.concat(h(r[v.default.EVENT_STREAM + "_asArray"], r, v.default.EVENT_STREAM, y)));
                        o(t, v.default.ADAPTATION_SET, y); break;
                    case v.default.ADAPTATION_SET:
                        i.trigger(_.default.XLINK_READY, { manifest: l }) } }

            function h(e, t, n, r) { for (var i = [], a = void 0, o = void 0, s = void 0, o = e.length - 1; 0 <= o; o--)(a = e[o]).hasOwnProperty("xlink:href") && "urn:mpeg:dash:resolve-to-zero:2013" === a["xlink:href"] && e.splice(o, 1); for (o = 0; o < e.length; o++)(a = e[o]).hasOwnProperty("xlink:href") && a.hasOwnProperty("xlink:actuate") && a["xlink:actuate"] === r && (s = { url: a["xlink:href"], parentElement: t, type: n, index: o, resolveType: r, originalContent: a, resolvedContent: null, resolved: !1 }, i.push(s)); return i } return n = { resolveManifestOnLoad: function(e) { a = new E.default({ escapeMode: !1, attributePrefix: "", arrayAccessForm: "property", emptyNodeForm: "object", stripWhitespaces: !1, enableToStringFunc: !1, ignoreRoot: !0, matchers: r }), o(h((l = e).Period_asArray, l, v.default.PERIOD, y), v.default.PERIOD, y) }, setMatchers: function(e) { e && (r = e) }, setIron: function(e) { e && (u = e) }, reset: function() { i.off(_.default.XLINK_ELEMENT_LOADED, f, n), d && (d.reset(), d = null) } }, i.on(_.default.XLINK_ELEMENT_LOADED, f, n), d = (0, p.default)(t).create({ errHandler: e.errHandler, dashMetrics: e.dashMetrics, mediaPlayerModel: e.mediaPlayerModel, requestModifier: e.requestModifier, settings: e.settings }), n }
        a.__dashjs_factory_name = "XlinkController", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 107: 107, 221: 221, 3: 3, 46: 46, 47: 47, 54: 54, 61: 61 }], 125: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(139)),
            a = r(e(126)),
            o = r(e(127)),
            s = r(e(132)),
            u = r(e(137));

        function l() { var t = this.context; return { createMetricsReporting: function(e) { return (0, i.default)(t).getInstance({ eventBus: e.eventBus, dashMetrics: e.dashMetrics, metricsConstants: e.metricsConstants, events: e.events }), (0, o.default)(t).create(e) }, getReportingFactory: function() { return (0, u.default)(t).getInstance() }, getMetricsHandlerFactory: function() { return (0, s.default)(t).getInstance() } } }
        l.__dashjs_factory_name = "MetricsReporting"; var d = dashjs.FactoryMaker.getClassFactory(l);
        d.events = a.default, dashjs.FactoryMaker.updateClassFactory(l.__dashjs_factory_name, d), n.default = d, t.exports = n.default }, { 126: 126, 127: 127, 132: 132, 137: 137, 139: 139 }], 126: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(55);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).call(this), this.METRICS_INITIALISATION_COMPLETE = "internal_metricsReportingInitialized", this.BECAME_REPORTING_PLAYER = "internal_becameReportingPlayer" } var s = new(function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(o, ((i = a) && i.__esModule ? i : { default: i }).default), o);
        n.default = s, t.exports = n.default }, { 55: 55 }], 127: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var s = r(e(128)),
            u = r(e(141)),
            l = r(e(126));

        function i(i) { i = i || {}; var a = {},
                o = this.context,
                t = i.eventBus,
                e = i.events;

            function n(e) { var r;
                e.error || (r = Object.keys(a), (0, u.default)(o).getInstance({ adapter: i.adapter, constants: i.constants }).getMetrics(e.manifest).forEach(function(e) { var t = JSON.stringify(e); if (a.hasOwnProperty(t)) r.splice(t, 1);
                    else try { var n = (0, s.default)(o).create(i);
                        n.initialize(e), a[t] = n } catch (e) {} }), r.forEach(function(e) { a[e].reset(), delete a[e] }), t.trigger(l.default.METRICS_INITIALISATION_COMPLETE)) }

            function r() { Object.keys(a).forEach(function(e) { a[e].reset() }), a = {} } return t.on(e.MANIFEST_UPDATED, n), t.on(e.STREAM_TEARDOWN_COMPLETE, r), { reset: function() { t.off(e.MANIFEST_UPDATED, n), t.off(e.STREAM_TEARDOWN_COMPLETE, r) } } }
        i.__dashjs_factory_name = "MetricsCollectionController", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 126: 126, 128: 128, 141: 141 }], 128: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var s = r(e(130)),
            u = r(e(131)),
            l = r(e(129));

        function i(t) { t = t || {}; var n = void 0,
                r = void 0,
                i = void 0,
                a = this.context;

            function o() { n && n.reset(), r && r.reset(), i && i.reset() } return { initialize: function(e) { try {
                        (i = (0, s.default)(a).create({ mediaElement: t.mediaElement })).initialize(e.Range), (r = (0, u.default)(a).create({ debug: t.debug, metricsConstants: t.metricsConstants })).initialize(e.Reporting, i), (n = (0, l.default)(a).create({ debug: t.debug, eventBus: t.eventBus, metricsConstants: t.metricsConstants, events: t.events })).initialize(e.metrics, r) } catch (e) { throw o(), e } }, reset: o } }
        i.__dashjs_factory_name = "MetricsController", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 129: 129, 130: 130, 131: 131 }], 129: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(132),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { e = e || {}; var o = [],
                t = void 0,
                n = this.context,
                r = e.eventBus,
                i = e.events,
                s = (0, a.default)(n).getInstance({ debug: e.debug, eventBus: e.eventBus, metricsConstants: e.metricsConstants });

            function u(t) { o.forEach(function(e) { e.handleNewMetric(t.metric, t.value, t.mediaType) }) } return t = { initialize: function(e, a) { e.split(",").forEach(function(e, t, n) { var r, i; - 1 === e.indexOf("(") || -1 !== e.indexOf(")") || (i = n[t + 1]) && -1 === i.indexOf("(") && -1 !== i.indexOf(")") && (e += "," + i, delete n[t + 1]), (r = s.create(e, a)) && o.push(r) }), r.on(i.METRIC_ADDED, u, t), r.on(i.METRIC_UPDATED, u, t) }, reset: function() { r.off(i.METRIC_ADDED, u, t), r.off(i.METRIC_UPDATED, u, t), o.forEach(function(e) { return e.reset() }), o = [] } } }
        o.__dashjs_factory_name = "MetricsHandlersController", n.default = dashjs.FactoryMaker.getClassFactory(o), t.exports = n.default }, { 132: 132 }], 130: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(209),
            u = (r = i) && r.__esModule ? r : { default: r };

        function a(e) { e = e || {}; var t, a = !1,
                n = this.context,
                o = void 0,
                s = e.mediaElement; return t = { initialize: function(e) { e && e.length && (e.forEach(function(e) { var t = e.starttime,
                            n = t + e.duration;
                        o.add(t, n) }), a = !!e[0]._useWallClockTime) }, reset: function() { o.clear() }, isEnabled: function() { var e, t = o.length; if (!t) return !0;
                    e = a ? (new Date).getTime() / 1e3 : s.currentTime; for (var n = 0; n < t; n += 1) { var r = o.start(n),
                            i = o.end(n); if (r <= e && e < i) return !0 } return !1 } }, o = (0, u.default)(n).create(), t }
        a.__dashjs_factory_name = "RangeController", n.default = dashjs.FactoryMaker.getClassFactory(a), t.exports = n.default }, { 209: 209 }], 131: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(137),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var r = [],
                i = (0, a.default)(this.context).getInstance(e); return { initialize: function(e, n) { e.some(function(e) { var t = i.create(e, n); if (t) return r.push(t), !0 }) }, reset: function() { r.forEach(function(e) { return e.reset() }), r = [] }, report: function(t, n) { r.forEach(function(e) { return e.report(t, n) }) } } }
        o.__dashjs_factory_name = "ReportingController", n.default = dashjs.FactoryMaker.getClassFactory(o), t.exports = n.default }, { 137: 137 }], 132: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var l = r(e(133)),
            d = r(e(134)),
            f = r(e(136)),
            c = r(e(135));

        function i(i) { var e = void 0,
                a = (i = i || {}).debug ? i.debug.getLogger(e) : {},
                o = /([a-zA-Z]*)(\(([0-9]*)(\,\s*([a-zA-Z]*))?\))?/,
                s = this.context,
                u = { BufferLevel: l.default, DVBErrors: d.default, HttpList: f.default, PlayList: c.default, RepSwitchList: c.default, TcpList: c.default }; return e = { create: function(e, t) { var n, r = e.match(o); if (r) { try {
                            (n = u[r[1]](s).create({ eventBus: i.eventBus, metricsConstants: i.metricsConstants })).initialize(r[1], t, r[3], r[5]) } catch (e) { n = null, a.error("MetricsHandlerFactory: Could not create handler for type " + r[1] + " with args " + r[3] + ", " + r[5] + " (" + e.message + ")") } return n } }, register: function(e, t) { u[e] = t }, unregister: function(e) { delete u[e] } } }
        i.__dashjs_factory_name = "MetricsHandlerFactory", n.default = dashjs.FactoryMaker.getSingletonFactory(i), t.exports = n.default }, { 133: 133, 134: 134, 135: 135, 136: 136 }], 133: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(140),
            f = (r = i) && r.__esModule ? r : { default: r };

        function a(e) { e = e || {}; var r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                t = void 0,
                n = this.context,
                s = (0, f.default)(n).getInstance(),
                u = [],
                l = e.metricsConstants;

            function d() { var e = function() { try { return Object.keys(u).map(function(e) { return u[e] }).reduce(function(e, t) { return e.level < t.level ? e : t }) } catch (e) { return } }();
                e && t !== e.t && (t = e.t, r.report(a, e)) } return { initialize: function(e, t, n) { t && (i = s.validateN(n), r = t, a = s.reconstructFullMetricName(e, n), o = setInterval(d, i)) }, reset: function() { clearInterval(o), i = 0, t = r = o = null }, handleNewMetric: function(e, t, n) { e === l.BUFFER_LEVEL && (u[n] = t) } } }
        a.__dashjs_factory_name = "BufferLevelHandler", n.default = dashjs.FactoryMaker.getClassFactory(a), t.exports = n.default }, { 140: 140 }], 134: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(126),
            o = (r = i) && r.__esModule ? r : { default: r };
        n.default = dashjs.FactoryMaker.getClassFactory(function(e) { var n = void 0,
                r = (e = e || {}).eventBus,
                i = e.metricsConstants;

            function a() { r.off(o.default.METRICS_INITIALISATION_COMPLETE, a, this), r.trigger(o.default.BECAME_REPORTING_PLAYER) } return { initialize: function(e, t) { t && (n = t, r.on(o.default.METRICS_INITIALISATION_COMPLETE, a, this)) }, reset: function() { n = null }, handleNewMetric: function(e, t) { e === i.DVB_ERRORS && n && n.report(e, t) } } }), t.exports = n.default }, { 126: 126 }], 135: [function(e, t, n) { "use strict";

        function r() { var n = void 0,
                r = void 0; return { initialize: function(e, t) { n = e, r = t }, reset: function() { r = null, n = void 0 }, handleNewMetric: function(e, t) { e === n && r && r.report(n, t) } } }
        Object.defineProperty(n, "__esModule", { value: !0 }), r.__dashjs_factory_name = "GenericMetricHandler", n.default = dashjs.FactoryMaker.getClassFactory(r), t.exports = n.default }, {}], 136: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(140),
            f = (r = i) && r.__esModule ? r : { default: r };

        function a(e) { e = e || {}; var i = void 0,
                a = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                n = [],
                l = (0, f.default)(this.context).getInstance(),
                r = e.metricsConstants;

            function d() { n.length && i && i.report(s, n), n = [] } return { initialize: function(e, t, n, r) { t && (a = l.validateN(n), i = t, r && r.length && (o = r), s = l.reconstructFullMetricName(e, n, r), u = setInterval(d, a)) }, reset: function() { clearInterval(u), n = [], i = o = a = u = null }, handleNewMetric: function(e, t) { e === r.HTTP_REQUEST && (o && o !== t.type || n.push(t)) } } }
        a.__dashjs_factory_name = "HttpListHandler", n.default = dashjs.FactoryMaker.getClassFactory(a), t.exports = n.default }, { 140: 140 }], 137: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(138),
            s = (r = i) && r.__esModule ? r : { default: r };

        function a(e) { e = e || {}; var r = { "urn:dvb:dash:reporting:2014": s.default },
                i = this.context,
                t = void 0,
                a = e.debug ? e.debug.getLogger(t) : {},
                o = e.metricsConstants; return t = { create: function(t, e) { var n = void 0; try {
                        (n = r[t.schemeIdUri](i).create({ metricsConstants: o })).initialize(t, e) } catch (e) { n = null, a.error("ReportingFactory: could not create Reporting with schemeIdUri " + t.schemeIdUri + " (" + e.message + ")") } return n }, register: function(e, t) { r[e] = t }, unregister: function(e) { delete r[e] } } }
        a.__dashjs_factory_name = "ReportingFactory", n.default = dashjs.FactoryMaker.getSingletonFactory(a), t.exports = n.default }, { 138: 138 }], 138: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var h = r(e(142)),
            p = r(e(143));

        function i(e) { e = e || {}; var t, n = this.context,
                r = void 0,
                i = void 0,
                a = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                l = [],
                d = e.metricsConstants;

            function f(e, t, n) {
                function r() { var e = l.indexOf(i); - 1 !== e && (l.splice(e, 1), 200 <= i.status && i.status < 300 ? t && t() : n && n()) } var i = new XMLHttpRequest;
                l.push(i); try { i.open("GET", e), i.onloadend = r, i.onerror = r, i.send() } catch (e) { i.onerror() } }

            function c() { o = a = !1, u = s = null } return t = { report: function(n, e) { Array.isArray(e) || (e = [e]), o && u.isEnabled() && e.forEach(function(e) { var t = r.serialise(e);
                        n !== d.DVB_ERRORS && (t = "metricname=" + n + "&" + t), f(t = s + "?" + t, null, function() { o = !1 }) }) }, initialize: function(e, t) { var n = void 0; if (u = t, !(s = e["dvb:reportingUrl"])) throw new Error("required parameter missing (dvb:reportingUrl)");
                    a || ((n = e["dvb:probability"] || e["dvb:priority"] || 0) && (1e3 === n || n / 1e3 >= i.random()) && (o = !0), a = !0) }, reset: function() { c() } }, r = (0, h.default)(n).getInstance(), i = (0, p.default)(n).getInstance(), c(), t }
        i.__dashjs_factory_name = "DVBReporting", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 142: 142, 143: 143 }], 139: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var p = r(e(144)),
            g = r(e(126));

        function i(e) { var t = void 0,
                r = void 0,
                n = (e = e || {}).eventBus,
                i = e.dashMetrics,
                a = e.metricsConstants,
                o = e.events;

            function s(e) { var t = new p.default; if (r) { for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
                    t.mpdurl || (t.mpdurl = r.originalUrl || r.url), t.terror || (t.terror = new Date), i.addDVBErrors(t) } }

            function u(e) { e.error || (r = e.manifest) }

            function l(e) { s({ errorcode: p.default.BASE_URL_CHANGED, servicelocation: e.entry }) }

            function d() { s({ errorcode: p.default.BECAME_REPORTER }) }

            function f(e) { switch (e.metric) {
                    case a.HTTP_REQUEST:
                        (0 === (t = e.value).responsecode || 400 <= t.responsecode || t.responsecode < 100 || 600 <= t.responsecode) && s({ errorcode: t.responsecode || p.default.CONNECTION_ERROR, url: t.url, terror: t.tresponse, servicelocation: t._serviceLocation }) } var t }

            function c(e) { var t = void 0; switch (e.error ? e.error.code : 0) {
                    case MediaError.MEDIA_ERR_NETWORK:
                        t = p.default.CONNECTION_ERROR; break;
                    case MediaError.MEDIA_ERR_DECODE:
                        t = p.default.CORRUPT_MEDIA_OTHER; break;
                    default:
                        return }
                s({ errorcode: t }) }

            function h() { n.on(o.MANIFEST_UPDATED, u, t), n.on(o.SERVICE_LOCATION_BLACKLIST_CHANGED, l, t), n.on(o.METRIC_ADDED, f, t), n.on(o.METRIC_UPDATED, f, t), n.on(o.PLAYBACK_ERROR, c, t), n.on(g.default.BECAME_REPORTING_PLAYER, d, t) } return t = { initialise: h, reset: function() { n.off(o.MANIFEST_UPDATED, u, t), n.off(o.SERVICE_LOCATION_BLACKLIST_CHANGED, l, t), n.off(o.METRIC_ADDED, f, t), n.off(o.METRIC_UPDATED, f, t), n.off(o.PLAYBACK_ERROR, c, t), n.off(g.default.BECAME_REPORTING_PLAYER, d, t) } }, h(), t }
        i.__dashjs_factory_name = "DVBErrorsTranslator", n.default = dashjs.FactoryMaker.getSingletonFactory(i), t.exports = n.default }, { 126: 126, 144: 144 }], 140: [function(e, t, n) { "use strict";

        function r() { return { reconstructFullMetricName: function(e, t, n) { var r = e; return t && (r += "(" + t, n && n.length && (r += "," + n), r += ")"), r }, validateN: function(e) { if (!e) throw new Error("missing n"); if (isNaN(e)) throw new Error("n is NaN"); if (e < 0) throw new Error("n must be positive"); return e } } }
        Object.defineProperty(n, "__esModule", { value: !0 }), r.__dashjs_factory_name = "HandlerHelpers", n.default = dashjs.FactoryMaker.getSingletonFactory(r), t.exports = n.default }, {}], 141: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(145)),
            c = r(e(146)),
            a = r(e(147));

        function o(e) { var d = (e = e || {}).adapter,
                f = e.constants; return { getMetrics: function(l) { var t = []; return l && l.Metrics_asArray && l.Metrics_asArray.forEach(function(e) { var s = new i.default,
                            u = d.getIsDynamic(l);
                        e.hasOwnProperty("metrics") && (s.metrics = e.metrics, e.Range_asArray && e.Range_asArray.forEach(function(e) { var t, n, r, i, a, o = new c.default;
                            o.starttime = (t = l, n = e, i = r = void 0, a = 0, u ? a = d.getAvailabilityStartTime(t) / 1e3 : (r = d.getRegularPeriods(t)).length && (a = r[0].start), i = a, n && n.hasOwnProperty(f.START_TIME) && (i += n.starttime), i), e.hasOwnProperty("duration") ? o.duration = e.duration : o.duration = d.getDuration(l), o._useWallClockTime = u, s.Range.push(o) }), e.Reporting_asArray && (e.Reporting_asArray.forEach(function(e) { var t = new a.default; if (e.hasOwnProperty(f.SCHEME_ID_URI)) { for (var n in t.schemeIdUri = e.schemeIdUri, e) e.hasOwnProperty(n) && (t[n] = e[n]);
                                s.Reporting.push(t) } }), t.push(s))) }), t } } }
        o.__dashjs_factory_name = "ManifestParsing", n.default = dashjs.FactoryMaker.getSingletonFactory(o), t.exports = n.default }, { 145: 145, 146: 146, 147: 147 }], 142: [function(e, t, n) { "use strict";

        function r() { return { serialise: function n(e) { var t = [],
                        r = [],
                        i = void 0,
                        a = void 0; for (i in e)
                        if (e.hasOwnProperty(i) && 0 !== i.indexOf("_")) { if (null == (a = e[i]) && (a = ""), Array.isArray(a)) { if (!a.length) continue;
                                r = [], a.forEach(function(e) { var t = "Object" !== Object.prototype.toString.call(e).slice(8, -1);
                                    r.push(t ? e : n(e)) }), a = r.map(encodeURIComponent).join(",") } else "string" == typeof a ? a = encodeURIComponent(a) : a instanceof Date ? a = a.toISOString() : "number" == typeof a && (a = Math.round(a));
                            t.push(i + "=" + a) }
                    return t.join("&") } } }
        Object.defineProperty(n, "__esModule", { value: !0 }), r.__dashjs_factory_name = "MetricSerialiser", n.default = dashjs.FactoryMaker.getSingletonFactory(r), t.exports = n.default }, {}], 143: [function(e, t, n) { "use strict";

        function r() { var e, r = window.crypto || window.msCrypto,
                t = Uint32Array,
                i = Math.pow(2, 8 * t.BYTES_PER_ELEMENT) - 1,
                n = 10,
                a = void 0,
                o = void 0;

            function s() { r && (a = a || new t(n), r.getRandomValues(a), o = 0) } return e = { random: function(e, t) { var n = void 0; return e = e || 0, t = t || 1, r ? (o === a.length && s(), n = a[o] / i, o += 1) : n = Math.random(), n * (t - e) + e } }, s(), e }
        Object.defineProperty(n, "__esModule", { value: !0 }), r.__dashjs_factory_name = "RNG", n.default = dashjs.FactoryMaker.getSingletonFactory(r), t.exports = n.default }, {}], 144: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });

        function r() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, r), this.mpdurl = null, this.errorcode = null, this.terror = null, this.url = null, this.ipaddress = null, this.servicelocation = null }
        r.SSL_CONNECTION_FAILED_PREFIX = "SSL", r.DNS_RESOLUTION_FAILED = "C00", r.HOST_UNREACHABLE = "C01", r.CONNECTION_REFUSED = "C02", r.CONNECTION_ERROR = "C03", r.CORRUPT_MEDIA_ISOBMFF = "M00", r.CORRUPT_MEDIA_OTHER = "M01", r.BASE_URL_CHANGED = "F00", r.BECAME_REPORTER = "S00", n.default = r, t.exports = n.default }, {}], 145: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.metrics = "", this.Range = [], this.Reporting = [] }, t.exports = n.default }, {}], 146: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.starttime = 0, this.duration = 1 / 0, this._useWallClockTime = !1 }, t.exports = n.default }, {}], 147: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.schemeIdUri = "", this.value = "" }, t.exports = n.default }, {}], 148: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 });

        function u(e, t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, u), this.data = { baseUrls: e || null, selectedIdx: t || NaN }, this.children = [] } var l = r(e(217)),
            i = r(e(47));

        function a() { var e, i = void 0,
                a = void 0,
                t = this.context,
                o = (0, l.default)(t).getInstance();

            function s(e, t, n) { var r = a.getBaseURLsFromElement(n);
                e[t] ? o.areEqual(r, e[t].data.baseUrls) || (e[t].data.baseUrls = r, e[t].data.selectedIdx = NaN) : e[t] = new u(r) }

            function n(e) {! function() { if (!a || !a.hasOwnProperty("getBaseURLsFromElement") || !a.hasOwnProperty("getRepresentationSortFunction")) throw new Error("setConfig function has to be called previously") }(); var t = a.getBaseURLsFromElement(e);
                o.areEqual(t, i.data.baseUrls) || (i.data.baseUrls = t, i.data.selectedIdx = NaN), e && e.Period_asArray && e.Period_asArray.forEach(function(e, r) { s(i.children, r, e), e.AdaptationSet_asArray && e.AdaptationSet_asArray.forEach(function(e, n) { s(i.children[r].children, n, e), e.Representation_asArray && e.Representation_asArray.sort(a.getRepresentationSortFunction()).forEach(function(e, t) { s(i.children[r].children[n].children, t, e) }) }) }) }

            function r() { i = new u } return e = { reset: r, update: function(e) { n(e) }, getForPath: function(e) { var t = i,
                        n = [t.data]; return e && e.forEach(function(e) {
                        (t = t.children[e]) && n.push(t.data) }), n.filter(function(e) { return e.baseUrls.length }) }, invalidateSelectedIndexes: function(t) {! function t(n, e) { var r = e || i;
                        n(r.data), r.children && r.children.forEach(function(e) { return t(n, e) }) }(function(e) { isNaN(e.selectedIdx) || t === e.baseUrls[e.selectedIdx].serviceLocation && (e.selectedIdx = NaN) }) }, setConfig: function(e) { e.adapter && (a = e.adapter) } }, r(), e }
        a.__dashjs_factory_name = "BaseURLTreeModel", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 217: 217, 47: 47 }], 149: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var p = r(e(46)),
            g = r(e(101)),
            i = r(e(47)),
            _ = r(e(45)),
            E = r(e(48)),
            m = e(242),
            v = r(e(65)),
            y = r(e(49)),
            a = e(50),
            T = "dash.js-v" + (0, a.getVersionString)(),
            S = null,
            A = 1,
            I = 2,
            R = 3,
            b = 4,
            D = "m",
            M = "a",
            N = "v",
            C = "i",
            w = "c",
            O = "d",
            P = "s",
            L = "v",
            x = "l";

        function o() { var r = void 0,
                e = void 0,
                u = void 0,
                l = void 0,
                d = void 0,
                n = void 0,
                t = this.context,
                i = (0, p.default)(t).getInstance(),
                a = (0, E.default)(t).getInstance();

            function o() { u = { pr: 1, nor: null, st: null, sf: null, sid: "" + y.default.generateUuid(), bs: { audio: A, video: A }, cid: null, did: T } }

            function f() { var e = { v: 1 }; return e.sid = a.get().streaming.cmcd.sid ? a.get().streaming.cmcd.sid : u.sid, e.cid = a.get().streaming.cmcd.cid ? a.get().streaming.cmcd.cid : u.cid, e.did = a.get().streaming.cmcd.did ? a.get().streaming.cmcd.did : u.did, e.sid = '"' + e.sid + '"', e.cid = '"' + e.cid + '"', e.did = '"' + e.did + '"', isNaN(u.pr) || 1 === u.pr || null === u.pr || (e.pr = u.pr), u.st && (e.st = u.st), u.sf && (e.sf = u.sf), e }

            function s(e) { try { u.pr = e.playbackRate } catch (e) {} }

            function c(e) { try { var t = r.getIsDynamic(e.data) ? "" + x : "" + L,
                        n = e.protocol && "MSS" === e.protocol ? "" + P : "" + O;
                    u.st = t, u.sf = n } catch (e) {} }

            function h(e) { try { if (e.state && e.mediaType) { var t = null; switch (e.state) {
                            case g.default.BUFFER_LOADED:
                                t = S; break;
                            case g.default.BUFFER_EMPTY:
                                n.isSeeking() && (t = I), t = b }
                        u.bs[e.mediaType] = t } } catch (e) {} } return e = { getQueryParameter: function(e) { try { return a.get().streaming.cmcd && a.get().streaming.cmcd.enabled ? { key: "Common-Media-Client-Data", value: function(i) { try { var e = function() { if (!i) return { v: null }; var e = Object.keys(i),
                                            r = e.length; return { v: e.reduce(function(e, t, n) { return e += t + "=" + i[t], n < r - 1 && (e += ","), e }, "") } }(); if ("object" == typeof e) return e.v } catch (e) { return null } }(function(e) { try { return e.type === m.HTTPRequest.MPD_TYPE ? (function(e) { try { u.cid = "" + y.default.generateHashCode(e.url) } catch (e) {} }(e), function() { var e = f(); return e.ot = "" + D, e }()) : e.type === m.HTTPRequest.MEDIA_SEGMENT_TYPE ? function(e) { var t = f(),
                                            n = function(e) { try { var t = e.quality,
                                                        n = e.mediaInfo.bitrateList; return parseInt(n[t].bandwidth / 1e3) } catch (e) { return null } }(e),
                                            r = function(e) { try { return isNaN(e.duration) ? null : Math.round(1e3 * e.duration) } catch (e) { return null } }(e),
                                            i = "video" === e.mediaType ? "" + N : "audio" === e.mediaType ? "" + M : "fragmentedText" === e.mediaType ? "" + w : null,
                                            a = function(e) { try { return Math.round(l.getThroughputHistory().getSafeAverageThroughput(e)) } catch (e) { return null } }(e.mediaType),
                                            o = function(e) { try { var t = u.pr,
                                                        n = d.getCurrentBufferLevel(e); return isNaN(t) || isNaN(n) ? null : parseInt(n / t * 1e3) } catch (e) { return null } }(e.mediaType),
                                            s = function(e) { try { var t = e.mediaType; if (null !== u.bs[t]) return u.bs[t]; var n = d.getCurrentBufferLevel(t),
                                                        r = e.duration; return n < r ? R : S } catch (e) {} }(e);
                                        n && (t.br = n);
                                        i && (t.ot = i);
                                        isNaN(r) || (t.d = r);
                                        isNaN(a) || (t.mtp = a);
                                        isNaN(o) || (t.dl = o);
                                        isNaN(s) || null === s || (t.bs = s); return t }(e) : e.type === m.HTTPRequest.INIT_SEGMENT_TYPE ? function() { var e = f(); return e.ot = "" + C, e }() : null } catch (e) { return null } }(e)) } : null } catch (e) { return null } }, setConfig: function(e) { e && (e.abrController && (l = e.abrController), e.dashMetrics && (d = e.dashMetrics), e.playbackController && (n = e.playbackController)) }, reset: function() { i.off(g.default.PLAYBACK_RATE_CHANGED, s, this), i.off(g.default.MANIFEST_LOADED, c, this), i.off(g.default.BUFFER_LEVEL_STATE_CHANGED, h, e), o() }, initialize: function() { i.on(g.default.PLAYBACK_RATE_CHANGED, s, e), i.on(g.default.MANIFEST_LOADED, c, e), i.on(g.default.BUFFER_LEVEL_STATE_CHANGED, h, e) } }, (0, _.default)(t).getInstance().getLogger(e), r = (0, v.default)(t).getInstance(), o(), e }
        o.__dashjs_factory_name = "CmcdModel", n.default = i.default.getSingletonFactory(o), t.exports = n.default }, { 101: 101, 242: 242, 45: 45, 46: 46, 47: 47, 48: 48, 49: 49, 50: 50, 65: 65 }], 150: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            y = r(e(228)),
            T = "loading",
            S = "executed";

        function a(e) { var t, n = (e = e || {}).eventBus,
                r = e.events,
                i = e.dashMetrics,
                a = e.fragmentLoader,
                o = e.debug,
                s = e.streamId,
                u = void 0,
                l = void 0,
                d = void 0;

            function f(s) { var u; return !!s && (u = !1, l.some(function(e) { if (a = s, o = e, !isNaN(a.index) && a.startTime === o.startTime && a.adaptationIndex === o.adaptationIndex && a.type === o.type || (r = s, i = e, isNaN(r.index) && isNaN(i.index) && r.quality === i.quality) || (n = e, (t = s).action === y.default.ACTION_COMPLETE && t.action === n.action)) return u = !0; var t, n, r, i, a, o }), u) }

            function c(e) { return isNaN(e.duration) ? .25 : Math.min(e.duration / 8, .5) }

            function h(n) { l = l.filter(function(e) { var t = c(e); return isNaN(e.startTime) || void 0 !== n && e.startTime >= n - t }) }

            function p(n, r) { r <= n + .5 || (l = l.filter(function(e) { var t = c(e); return isNaN(e.startTime) || e.startTime >= r - t || isNaN(e.duration) || e.startTime + e.duration <= n + t })) }

            function g(e, t) { i.addSchedulingInfo(e, t), i.addRequestsQueue(e.mediaType, d, l) }

            function _(e) { e.sender === a && (d.splice(d.indexOf(e.request), 1), e.response && !e.error && l.push(e.request), g(e.request, e.error ? "failed" : S), n.trigger(r.FRAGMENT_LOADING_COMPLETED, { request: e.request, response: e.response, error: e.error, sender: this })) }

            function E(e) { e.sender === a && n.trigger(r.FRAGMENT_LOADING_PROGRESS, { request: e.request, response: e.response, error: e.error, sender: this }) }

            function m(e) { e.sender === a && n.trigger(r.FRAGMENT_LOADING_ABANDONED, { streamId: s, request: e.request, mediaType: e.mediaType }) }

            function v() { l = [], d = [] } return t = { getRequests: function(n) { var e = n ? n.state instanceof Array ? n.state : [n.state] : [],
                        r = []; return e.forEach(function(e) { var t = function(e) { var t = void 0; switch (e) {
                                case T:
                                    t = d; break;
                                case S:
                                    t = l; break;
                                default:
                                    t = [] } return t }(e);
                        r = r.concat(function(e, n) { if (n.hasOwnProperty("time")) return [function(e, t, n) { for (var r = e.length - 1; 0 <= r; r--) { var i = e[r],
                                        a = i.startTime,
                                        o = a + i.duration; if (n = isNaN(n) ? c(i) : n, !isNaN(a) && !isNaN(o) && a <= t + n && t - n < o || isNaN(a) && isNaN(t)) return i } return null }(e, n.time, n.threshold)]; return e.filter(function(e) { for (var t in n)
                                    if ("state" !== t && n.hasOwnProperty(t) && e[t] != n[t]) return !1;
                                return !0 }) }(t, n)) }), r }, isFragmentLoaded: f, isFragmentLoadedOrPending: function(e) { var t = !1,
                        n = 0,
                        r = void 0; if (!(t = f(e)))
                        for (n = 0; n < d.length; n++) r = d[n], e.url === r.url && e.startTime === r.startTime && (t = !0); return t }, removeExecutedRequestsBeforeTime: h, removeExecutedRequestsAfterTime: function(t) { l = l.filter(function(e) { return isNaN(e.startTime) || void 0 !== t && e.startTime < t }) }, syncExecutedRequestsWithBufferedRange: function(e, t) { if (e && 0 !== e.length) { for (var n = 0, r = 0, i = e.length; r < i; r++) p(n, e.start(r)), n = e.end(r);
                        0 < t && p(n, t) } else h() }, abortRequests: function() { u.debug("abort requests"), a.abort(), d = [] }, executeRequest: function(e) { switch (e.action) {
                        case y.default.ACTION_COMPLETE:
                            l.push(e), g(e, S), u.debug("STREAM_COMPLETED"), n.trigger(r.STREAM_COMPLETED, { request: e }); break;
                        case y.default.ACTION_DOWNLOAD:
                            g(e, T), d.push(e), t = e, n.trigger(r.FRAGMENT_LOADING_STARTED, { streamId: s, request: t }), a.load(t); break;
                        default:
                            u.warn("Unknown request action.") } var t }, reset: function() { n.off(r.LOADING_COMPLETED, _, this), n.off(r.LOADING_DATA_PROGRESS, E, this), n.off(r.LOADING_ABANDONED, m, this), a && a.reset(), v() }, addExecutedRequest: function(e) { l.push(e) } }, u = o.getLogger(t), v(), n.on(r.LOADING_COMPLETED, _, t), n.on(r.LOADING_DATA_PROGRESS, E, t), n.on(r.LOADING_ABANDONED, m, t), t }
        a.__dashjs_factory_name = "FragmentModel"; var o = i.default.getClassFactory(a);
        o.FRAGMENT_MODEL_LOADING = T, o.FRAGMENT_MODEL_EXECUTED = S, o.FRAGMENT_MODEL_CANCELED = "canceled", o.FRAGMENT_MODEL_FAILED = "failed", i.default.updateClassFactory(a.__dashjs_factory_name, o), n.default = o, t.exports = n.default }, { 228: 228, 47: 47 }], 151: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(46)),
            a = r(e(54)),
            o = r(e(47));

        function s() { var e = this.context,
                t = (0, i.default)(e).getInstance(),
                n = void 0; return { getValue: function() { return n }, setValue: function(e) {
                    (n = e) && t.trigger(a.default.MANIFEST_LOADED, { data: e }) } } }
        s.__dashjs_factory_name = "ManifestModel", n.default = o.default.getSingletonFactory(s), t.exports = n.default }, { 46: 46, 47: 47, 54: 54 }], 152: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var f = r(e(96)),
            i = r(e(47)),
            c = r(e(108)),
            h = r(e(190)),
            p = r(e(48)),
            g = e(219);

        function a() { var e, i = void 0,
                r = void 0,
                a = void 0,
                t = { scheme: "urn:mpeg:dash:utc:http-xsdate:2014", value: "http://time.akamai.com/?iso&ms" },
                n = this.context,
                o = (0, p.default)(n).getInstance();

            function s(e) { for (var t = void 0, t = 0; t < a.length; t++)
                    if (a[t].rulename === e) return t;
                return -1 }

            function u() { return o.get().streaming.lowLatencyEnabled ? o.get().streaming.liveDelay || 3 : o.get().streaming.liveDelay }

            function l(e, t) { d(e, t); var n = new f.default;
                n.schemeIdUri = e, n.value = t, i.push(n) }

            function d(n, r) {
                (0, g.checkParameterType)(n, "string"), (0, g.checkParameterType)(r, "string"), i.forEach(function(e, t) { e.schemeIdUri === n && e.value === r && i.splice(t, 1) }) } return e = { getABRCustomRules: function() { return a }, addABRCustomRule: function(e, t, n) { if ("string" != typeof e || e !== h.default.ABANDON_FRAGMENT_RULES && e !== h.default.QUALITY_SWITCH_RULES || "string" != typeof t) throw c.default.BAD_ARGUMENT_ERROR; var r = s(t); - 1 === r ? a.push({ type: e, rulename: t, rule: n }) : (a[r].type = e, a[r].rule = n) }, removeABRCustomRule: function(e) { var t;
                    e ? -1 !== (t = s(e)) && a.splice(t, 1) : a = [] }, getStableBufferTime: function() { if (o.get().streaming.lowLatencyEnabled) return .6 * u(); var e = o.get().streaming.stableBufferTime; return -1 < e ? e : o.get().streaming.fastSwitchEnabled ? 20 : 12 }, getRetryAttemptsForType: function(e) { var t = isNaN(o.get().streaming.retryAttempts.lowLatencyMultiplyFactor) ? 5 : o.get().streaming.retryAttempts.lowLatencyMultiplyFactor; return o.get().streaming.lowLatencyEnabled ? o.get().streaming.retryAttempts[e] * t : o.get().streaming.retryAttempts[e] }, getRetryIntervalsForType: function(e) { var t = isNaN(o.get().streaming.retryIntervals.lowLatencyReductionFactor) ? 10 : o.get().streaming.retryIntervals.lowLatencyReductionFactor; return o.get().streaming.lowLatencyEnabled ? o.get().streaming.retryIntervals[e] / t : o.get().streaming.retryIntervals[e] }, getLiveDelay: u, getLiveCatchupLatencyThreshold: function() { try { var e = o.get().streaming.liveCatchupLatencyThreshold,
                            t = u(); if (null !== e && !isNaN(e)) return Math.max(e, t); var n = o.get().streaming.liveCatchUpMinDrift,
                            r = !isNaN(t) && t ? isNaN(n) ? u() : o.get().streaming.liveCatchUpMinDrift + u() : NaN; return r && !isNaN(r) ? 2 * r : NaN } catch (e) { return NaN } }, addUTCTimingSource: l, removeUTCTimingSource: d, getUTCTimingSources: function() { return i }, clearDefaultUTCTimingSources: function() { i = [] }, restoreDefaultUTCTimingSources: function() { l(t.scheme, t.value) }, setXHRWithCredentialsForType: function t(e, n) { e ? r[e] = !!n : Object.keys(r).forEach(function(e) { t(e, n) }) }, getXHRWithCredentialsForType: function(e) { var t = r[e]; return void 0 === t ? r.default : t }, getDefaultUtcTimingSource: function() { return t }, reset: function() {} }, r = { default: !(i = []) }, a = [], e }
        a.__dashjs_factory_name = "MediaPlayerModel", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 190: 190, 219: 219, 47: 47, 48: 48, 96: 96 }], 153: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var h = r(e(108)),
            m = r(e(109)),
            d = r(e(232)),
            v = e(242),
            p = r(e(245)),
            g = r(e(238)),
            _ = r(e(239)),
            y = r(e(240)),
            T = r(e(241)),
            S = e(243),
            A = r(e(247)),
            I = r(e(46)),
            R = r(e(246)),
            b = r(e(54)),
            i = r(e(47));

        function a(e) { var t, i = (e = e || {}).settings,
                n = this.context,
                r = (0, I.default)(n).getInstance(),
                a = void 0;

            function o() { r.trigger(b.default.METRICS_CHANGED) }

            function s(e) { r.trigger(b.default.METRIC_CHANGED, { mediaType: e }), o() }

            function l(e, t, n) { r.trigger(b.default.METRIC_UPDATED, { mediaType: e, metric: t, value: n }), s(e) }

            function f(e, t, n) { r.trigger(b.default.METRIC_ADDED, { mediaType: e, metric: t, value: n }), s(e) }

            function u(e, t) { var n = null; return e && (a.hasOwnProperty(e) ? n = a[e] : t || (n = new d.default, a[e] = n)), n }

            function c(e, t, n) { var r = u(e);
                null !== r && (r[t].push(n), r[t].length > i.get().streaming.metricsMaxListDepth && r[t].shift()) }

            function E(e, t, n) { c(e, t, n), f(e, t, n) } return t = { clearCurrentMetricsForType: function(e) { delete a[e], s(e) }, clearAllCurrentMetrics: function() { a = {}, o() }, getMetricsFor: u, addHttpRequest: function e(t, n, r, i, a, o, s, u, l, d, f, c, h, p, g) { var _ = new v.HTTPRequest;
                    o && o !== i && (e(t, null, r, i, a, null, null, u, l, null, null, null, h, null, null), _.actualurl = o), _.tcpid = n, _.type = r, _.url = i, _.range = u, _.trequest = l, _.tresponse = d, _.responsecode = c, _._tfinish = f, _._stream = t, _._mediaduration = h, _._quality = a, _._responseHeaders = p, _._serviceLocation = s, g ? g.forEach(function(e) { var t, n, r, i, a;
                        t = _, n = e.s, r = e.d, i = e.b, (a = new v.HTTPRequestTrace).s = n, a.d = r, a.b = i, t.trace.push(a), t.interval || (t.interval = 0), t.interval += r }) : (delete _.interval, delete _.trace), E(t, m.default.HTTP_REQUEST, _) }, addRepresentationSwitch: function(e, t, n, r, i) { var a = new p.default;
                    a.t = t, a.mt = n, a.to = r, i ? a.lto = i : delete a.lto, E(e, m.default.TRACK_SWITCH, a) }, addBufferLevel: function(e, t, n) { var r = new g.default;
                    r.t = t, r.level = n, E(e, m.default.BUFFER_LEVEL, r) }, addBufferState: function(e, t, n) { var r = new _.default;
                    r.target = n, r.state = t, E(e, m.default.BUFFER_STATE, r) }, addDVRInfo: function(e, t, n, r) { var i = new y.default;
                    i.time = t, i.range = r, i.manifestInfo = n, E(e, m.default.DVR_INFO, i) }, addDroppedFrames: function(e, t) { var n = new T.default,
                        r = u(e).DroppedFrames;
                    t && (n.time = t.creationTime, n.droppedFrames = t.droppedVideoFrames, 0 < r.length && r[r.length - 1] == n || E(e, m.default.DROPPED_FRAMES, n)) }, addSchedulingInfo: function(e, t, n, r, i, a, o, s, u) { var l = new A.default;
                    l.mediaType = e, l.t = t, l.type = n, l.startTime = r, l.availabilityStartTime = i, l.duration = a, l.quality = o, l.range = s, l.state = u, E(e, m.default.SCHEDULING_INFO, l) }, addRequestsQueue: function(e, t, n) { var r = new R.default;
                    r.loadingRequests = t, r.executedRequests = n, u(e).RequestsQueue = r, f(e, m.default.REQUESTS_QUEUE, r) }, addManifestUpdate: function(e, t, n, r, i, a, o, s, u, l) { var d = new S.ManifestUpdate;
                    d.mediaType = e, d.type = t, d.requestTime = n, d.fetchTime = r, d.availabilityStartTime = i, d.presentationStartTime = a, d.clientTimeOffset = o, d.currentTime = s, d.buffered = u, d.latency = l, c(h.default.STREAM, m.default.MANIFEST_UPDATE, d), f(e, m.default.MANIFEST_UPDATE, d) }, updateManifestUpdateInfo: function(e, t) { if (e) { for (var n in t) e[n] = t[n];
                        l(e.mediaType, m.default.MANIFEST_UPDATE, e) } }, addManifestUpdateStreamInfo: function(e, t, n, r, i) { var a;
                    e && ((a = new S.ManifestUpdateStreamInfo).id = t, a.index = n, a.start = r, a.duration = i, e.streamInfo.push(a), l(e.mediaType, m.default.MANIFEST_UPDATE_STREAM_INFO, e)) }, addManifestUpdateRepresentationInfo: function(e, t, n, r, i, a, o, s) { var u;
                    e && e.representationInfo && ((u = new S.ManifestUpdateRepresentationInfo).id = t, u.index = n, u.streamIndex = r, u.mediaType = i, u.startNumber = o, u.fragmentInfoType = s, u.presentationTimeOffset = a, e.representationInfo.push(u), l(e.mediaType, m.default.MANIFEST_UPDATE_TRACK_INFO, e)) }, addPlayList: function(e) { e.trace && Array.isArray(e.trace) ? e.trace.forEach(function(e) { e.hasOwnProperty("subreplevel") && !e.subreplevel && delete e.subreplevel }) : delete e.trace, E(h.default.STREAM, m.default.PLAY_LIST, e) }, addDVBErrors: function(e) { E(h.default.STREAM, m.default.DVB_ERRORS, e) } }, a = {}, t }
        a.__dashjs_factory_name = "MetricsModel", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 232: 232, 238: 238, 239: 239, 240: 240, 241: 241, 242: 242, 243: 243, 245: 245, 246: 246, 247: 247, 46: 46, 47: 47, 54: 54 }], 154: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var l = r(e(237)),
            i = r(e(47));

        function a() { var u = void 0; return { initialize: function(e) { if (u = new l.default, !e) return null; var t = e.indexOf("#"); if (-1 !== t)
                        for (var n = e.substr(t + 1).split("&"), r = 0, i = n.length; r < i; ++r) { var a, o = n[r],
                                s = o.indexOf("="); - 1 !== s && (a = o.substring(0, s), u.hasOwnProperty(a) && (u[a] = o.substr(s + 1))) } }, getURIFragmentData: function() { return u } } }
        a.__dashjs_factory_name = "URIFragmentModel", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 237: 237, 47: 47 }], 155: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            g = r(e(46)),
            _ = r(e(54)),
            E = r(e(45));

        function a() { var e = void 0,
                t = void 0,
                o = void 0,
                n = void 0,
                r = void 0,
                i = "element is not video or audio DOM type!",
                a = this.context,
                s = (0, g.default)(a).getInstance(),
                u = [];

            function l() { o && (o.playbackRate = r || 1, o.removeEventListener("canplay", l)) }

            function d(e) { o && (o.readyState <= 2 && 0 < e ? o.addEventListener("canplay", l) : o.playbackRate = e) }

            function f() { return 0 < u.length }

            function c() { var e;
                o && f() && 0 === o.playbackRate && ((e = document.createEvent("Event")).initEvent("waiting", !0, !1), o.dispatchEvent(e)) }

            function h() { return o ? o.buffered : null }

            function p(e, t, n, r, i) { if (o)
                    for (var a = 0; a < o.textTracks.length; a++)
                        if (o.textTracks[a].kind === e && (!t || o.textTracks[a].label == t) && o.textTracks[a].language === n && o.textTracks[a].isTTML === r && o.textTracks[a].isEmbedded === i) return o.textTracks[a];
                return null } return e = { initialize: function() { s.on(_.default.PLAYBACK_PLAYING, c, this) }, setCurrentTime: function(t, e) { if (o) { if (o.currentTime == t) return; try { t = e ? function(e) { var t = h(),
                                    n = e,
                                    r = 9999999999; if (t)
                                    for (var i = 0; i < t.length; i++) { var a = t.start(i),
                                            o = t.end(i),
                                            s = Math.abs(a - e),
                                            u = Math.abs(o - e); if (a <= e && e <= o) return e;
                                        s < r && (r = s, n = a), u < r && (r = u, n = o) }
                                return n }(t) : t, o.currentTime = t } catch (e) { 0 === o.readyState && e.code === e.INVALID_STATE_ERR && setTimeout(function() { o.currentTime = t }, 400) } } }, play: function() { var e;
                    o && (o.autoplay = !0, (e = o.play()) && e.catch && "undefined" != typeof Promise && e.catch(function(e) { "NotAllowedError" === e.name && s.trigger(_.default.PLAYBACK_NOT_ALLOWED), t.warn("Caught pending play exception - continuing (" + e + ")") })) }, isPaused: function() { return o ? o.paused : null }, pause: function() { o && (o.pause(), o.autoplay = !1) }, isStalled: f, isSeeking: function() { return o ? o.seeking : null }, getTime: function() { return o ? o.currentTime : null }, getPlaybackRate: function() { return o ? o.playbackRate : null }, setPlaybackRate: d, getPlayedRanges: function() { return o ? o.played : null }, getEnded: function() { return o ? o.ended : null }, setStallState: function(e, t) {
                    (t ? function(e) { var t = void 0; if (null === e || o.seeking || -1 !== u.indexOf(e)) return;
                        u.push(e), o && 1 === u.length && ((t = document.createEvent("Event")).initEvent("waiting", !0, !1), r = o.playbackRate, d(0), o.dispatchEvent(t)) } : function(e) { var t = u.indexOf(e),
                            n = void 0; if (null === e) return; - 1 !== t && u.splice(t, 1);
                        o && !1 === f() && 0 === o.playbackRate && (d(r || 1), o.paused || ((n = document.createEvent("Event")).initEvent("playing", !0, !1), o.dispatchEvent(n))) })(e) }, getElement: function() { return o }, setElement: function(e) { if (!(null == e || e && /^(VIDEO|AUDIO)$/i.test(e.nodeName))) throw i;
                    (o = e) && (o.preload = "auto") }, setSource: function(e) { o && (e ? o.src = e : (o.removeAttribute("src"), o.load())) }, getSource: function() { return o ? o.src : null }, getTTMLRenderingDiv: function() { return n }, setTTMLRenderingDiv: function(e) {
                    (n = e).style.position = "absolute", n.style.display = "flex", n.style.overflow = "hidden", n.style.pointerEvents = "none", n.style.top = 0, n.style.left = 0 }, getPlaybackQuality: function() { if (!o) return null; var e = "webkitDroppedFrameCount" in o && "webkitDecodedFrameCount" in o,
                        t = null; return "getVideoPlaybackQuality" in o ? t = o.getVideoPlaybackQuality() : e && (t = { droppedVideoFrames: o.webkitDroppedFrameCount, totalVideoFrames: o.webkitDroppedFrameCount + o.webkitDecodedFrameCount, creationTime: new Date }), t }, addEventListener: function(e, t) { o && o.addEventListener(e, t) }, removeEventListener: function(e, t) { o && o.removeEventListener(e, t) }, getReadyState: function() { return o ? o.readyState : NaN }, getBufferRange: h, getClientWidth: function() { return o ? o.clientWidth : NaN }, getClientHeight: function() { return o ? o.clientHeight : NaN }, getTextTracks: function() { return o ? o.textTracks : [] }, getTextTrack: p, addTextTrack: function(e, t, n, r, i) { if (!o) return null; var a = p(e, t, n, r, i); return a || ((a = o.addTextTrack(e, t, n)).isEmbedded = i, a.isTTML = r), a }, appendChild: function(e) { o && (o.appendChild(e), void 0 !== e.isTTML && (o.textTracks[o.textTracks.length - 1].isTTML = e.isTTML, o.textTracks[o.textTracks.length - 1].isEmbedded = e.isEmbedded)) }, removeChild: function(e) { o && o.removeChild(e) }, getVideoWidth: function() { return o ? o.videoWidth : NaN }, getVideoHeight: function() { return o ? o.videoHeight : NaN }, getVideoRelativeOffsetTop: function() { var e = o.parentNode.host || o.parentNode; return e ? o.getBoundingClientRect().top - e.parentNode.getBoundingClientRect().top : NaN }, getVideoRelativeOffsetLeft: function() { var e = o.parentNode.host || o.parentNode; return e ? o.getBoundingClientRect().left - e.getBoundingClientRect().left : NaN }, reset: function() { s.off(_.default.PLAYBACK_PLAYING, c, this) } }, t = (0, E.default)(a).getInstance().getLogger(e), e }
        a.__dashjs_factory_name = "VideoModel", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 45: 45, 46: 46, 47: 47, 54: 54 }], 156: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var a = (e = e || {}).requestModifier,
                g = e.boxParser;

            function _(t, e) { t.reader.read().then(e).catch(function(e) { t.onerror && 200 === t.response.status && t.onerror(e) }) }

            function E(i, t) { if (1 < (i = i.filter(function(e) { return e.bytes > t / 4 / i.length })).length) { var e = (a = 0, o = (i[i.length - 1].ts - i[0].ts) / i.length, i.forEach(function(e, t) { var n, r = i[t + 1];
                        r && (n = r.ts - e.ts, a += n < o ? n : 0) }), { v: a }); if ("object" == typeof e) return e.v } var a, o; return null } return { load: function(p) { var e = new Date,
                        t = p.request,
                        n = new Headers;
                    t.range && n.append("Range", "bytes=" + t.range), t.requestStartDate || (t.requestStartDate = e), a && a.modifyRequestHeader({ setRequestHeader: function(e, t) { n.append(e, t) } }); var r = void 0; "function" == typeof window.AbortController && (r = new AbortController, (p.abortController = r).signal.onabort = p.onabort); var i = { method: p.method, headers: n, credentials: p.withCredentials ? "include" : void 0, signal: r ? r.signal : void 0 };
                    fetch(p.url, i).then(function(e) { p.response || (p.response = {}), p.response.status = e.status, p.response.statusText = e.statusText, p.response.responseURL = e.url, e.ok || p.onerror(); var t = "",
                            n = !0,
                            r = !1,
                            i = void 0; try { for (var a, o = e.headers.keys()[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) { var s = a.value;
                                t += s + ": " + e.headers.get(s) + "\r\n" } } catch (e) { r = !0, i = e } finally { try {!n && o.return && o.return() } finally { if (r) throw i } } if (p.response.responseHeaders = t, !e.body) return e.arrayBuffer().then(function(e) { var t = { loaded: (p.response.response = e).byteLength, total: e.byteLength, stream: !1 };
                            p.progress(t), p.onload(), p.onend() }); var u = parseInt(e.headers.get("Content-Length"), 10),
                            l = 0,
                            d = !1,
                            f = new Uint8Array,
                            c = 0;
                        p.reader = e.body.getReader(); var h = [];
                        _(p, function e(t) { var n, r, i, a = t.value; if (t.done) return f && (p.progress({ loaded: l, total: isNaN(u) ? l : u, lengthComputable: !0, time: E(h, l), stream: !0 }), p.response.response = f.buffer), p.onload(), void p.onend();
                            a && 0 < a.length && (f = function(e, t) { if (0 === e.length) return t; var n = new Uint8Array(e.length + t.length); return n.set(e), n.set(t, e.length), n }(f, a), l += a.length, h.push({ ts: Date.now(), bytes: a.length }), (n = g.findLastTopIsoBoxCompleted(["moov", "mdat"], f, c)).found ? (r = n.lastCompletedOffset + n.size, i = void 0, f = r === f.length ? (i = f, new Uint8Array) : (i = new Uint8Array(f.subarray(0, r)), f.subarray(r)), p.progress({ data: i.buffer, lengthComputable: !1, noTrace: !0 }), c = 0) : (c = n.lastCompletedOffset, d || (p.progress({ lengthComputable: !1, noTrace: !0 }), d = !0))), _(p, e) }) }).catch(function(e) { p.onerror && p.onerror(e) }) }, abort: function(e) { if (e.abortController) e.abortController.abort();
                    else if (e.reader) try { e.reader.cancel(), e.onabort() } catch (e) {} }, calculateDownloadedTime: E } }
        o.__dashjs_factory_name = "FetchLoader"; var s = a.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 47: 47 }], 157: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }

        function i(e, t, n) { return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e }
        Object.defineProperty(n, "__esModule", { value: !0 }); var C = r(e(160)),
            w = r(e(156)),
            O = e(242),
            a = r(e(47)),
            P = r(e(226)),
            o = r(e(149)),
            L = r(e(49));

        function s(e) { e = e || {}; var t, n, E = this.context,
                m = e.errHandler,
                v = e.dashMetrics,
                y = e.mediaPlayerModel,
                T = e.requestModifier,
                S = e.boxParser,
                A = e.useFetch || !1,
                r = e.errors,
                I = void 0,
                R = void 0,
                b = void 0,
                D = void 0,
                M = void 0;

            function N(n, t) { var r = n.request,
                    i = [],
                    a = !0,
                    o = !0,
                    s = new Date,
                    u = s,
                    l = 0,
                    d = void 0; if (!T || !v || !m) throw new Error("config object is not correct or missing");

                function e(e) { o = !1, r.requestStartDate = s, r.requestEndDate = new Date, r.firstByteDate = r.firstByteDate || s, r.checkExistenceOnly || (v.addHttpRequest(r, d.response ? d.response.responseURL : null, d.response ? d.response.status : null, d.response && d.response.getAllResponseHeaders ? d.response.getAllResponseHeaders() : d.response ? d.response.responseHeaders : [], e ? i : null), r.type === O.HTTPRequest.MPD_TYPE && v.addManifestUpdate(r.type, r.requestStartDate, r.requestEndDate)) }

                function f() {-1 !== I.indexOf(d) && (I.splice(I.indexOf(d), 1), o && (e(!1), 0 < t ? function() { t--; var e = { config: n };
                        b.push(e), e.timeout = setTimeout(function() {-1 !== b.indexOf(e) && (b.splice(b.indexOf(e), 1), N(n, t)) }, y.getRetryIntervalsForType(r.type)) }() : (m.error(new P.default(D[r.type], r.url + " is not available", { request: r, response: d.response })), n.error && n.error(r, "error", d.response.statusText), n.complete && n.complete(r, d.response.statusText)))) } var c, h = void 0,
                    h = A && window.fetch && "arraybuffer" === r.responseType && r.type === O.HTTPRequest.MEDIA_SEGMENT_TYPE ? (0, w.default)(E).create({ requestModifier: T, boxParser: S }) : (0, C.default)(E).create({ requestModifier: T }),
                    p = T.modifyRequestURL(r.url),
                    g = function(e) { try { var t = [],
                                n = M.getQueryParameter(e); return n && t.push(n), t } catch (e) { return [] } }(r),
                    d = { url: p = L.default.addAditionalQueryParameterToUrl(p, g), method: r.checkExistenceOnly ? O.HTTPRequest.HEAD : O.HTTPRequest.GET, withCredentials: y.getXHRWithCredentialsForType(r.type), request: r, onload: function() { 200 <= d.response.status && d.response.status <= 299 && (e(!0), n.success && n.success(d.response.response, d.response.statusText, d.response.responseURL), n.complete && n.complete(r, d.response.statusText)) }, onend: f, onerror: f, progress: function(e) { var t = new Date;
                            a && (a = !1, (!e.lengthComputable || e.lengthComputable && e.total !== e.loaded) && (r.firstByteDate = t)), e.lengthComputable && (r.bytesLoaded = e.loaded, r.bytesTotal = e.total), e.noTrace || (i.push({ s: u, d: e.time ? e.time : t.getTime() - u.getTime(), b: [e.loaded ? e.loaded - l : 0] }), u = t, l = e.loaded), n.progress && e && n.progress(e) }, onabort: function() { n.abort && n.abort(r) }, loader: h },
                    _ = (new Date).getTime();
                isNaN(r.delayLoadingTime) || _ >= r.delayLoadingTime ? (I.push(d), h.load(d)) : (c = { httpRequest: d }, R.push(c), c.delayTimeout = setTimeout(function() { if (-1 !== R.indexOf(c)) { R.splice(R.indexOf(c), 1); try { s = new Date, u = s, I.push(c.httpRequest), h.load(c.httpRequest) } catch (e) { c.httpRequest.onerror() } } }, r.delayLoadingTime - _)) } return t = { load: function(e) { e.request ? N(e, y.getRetryAttemptsForType(e.request.type)) : e.error && e.error(e.request, "error") }, abort: function() { b.forEach(function(e) { clearTimeout(e.timeout), e.config.request && e.config.abort && e.config.abort(e.config.request) }), b = [], R.forEach(function(e) { return clearTimeout(e.delayTimeout) }), R = [], I.forEach(function(e) { e.onloadend = e.onerror = e.onprogress = void 0, e.loader.abort(e) }), I = [] } }, I = [], R = [], b = [], M = (0, o.default)(E).getInstance(), i(n = {}, O.HTTPRequest.MPD_TYPE, r.DOWNLOAD_ERROR_ID_MANIFEST_CODE), i(n, O.HTTPRequest.XLINK_EXPANSION_TYPE, r.DOWNLOAD_ERROR_ID_XLINK_CODE), i(n, O.HTTPRequest.INIT_SEGMENT_TYPE, r.DOWNLOAD_ERROR_ID_INITIALIZATION_CODE), i(n, O.HTTPRequest.MEDIA_SEGMENT_TYPE, r.DOWNLOAD_ERROR_ID_CONTENT_CODE), i(n, O.HTTPRequest.INDEX_SEGMENT_TYPE, r.DOWNLOAD_ERROR_ID_CONTENT_CODE), i(n, O.HTTPRequest.BITSTREAM_SWITCHING_SEGMENT_TYPE, r.DOWNLOAD_ERROR_ID_CONTENT_CODE), i(n, O.HTTPRequest.OTHER_TYPE, r.DOWNLOAD_ERROR_ID_CONTENT_CODE), D = n, t }
        s.__dashjs_factory_name = "HTTPLoader"; var u = a.default.getClassFactory(s);
        n.default = u, t.exports = n.default }, { 149: 149, 156: 156, 160: 160, 226: 226, 242: 242, 47: 47, 49: 49 }], 158: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(157));

        function o() { var n = void 0;

            function e() { n = {} }

            function t() { e() } return t(), { getLoader: function(e) { for (var t in n)
                        if (n.hasOwnProperty(t) && e.startsWith(t)) return n[t];
                    return a.default }, registerLoader: function(e, t) { n[e] = t }, unregisterLoader: function(e) { n[e] && delete n[e] }, unregisterAllLoader: e, reset: t } }
        o.__dashjs_factory_name = "SchemeLoaderFactory"; var s = i.default.getSingletonFactory(o);
        n.default = s, t.exports = n.default }, { 157: 157, 47: 47 }], 159: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            o = r(e(158));

        function a(n) { n = n || {}; var r = this.context,
                i = void 0,
                a = void 0; return i = (0, o.default)(r).getInstance(), { load: function(e) { var t = i.getLoader(e && e.request ? e.request.url : null);
                    (a = t(r).create({ errHandler: n.errHandler, mediaPlayerModel: n.mediaPlayerModel, requestModifier: n.requestModifier, useFetch: n.useFetch || null, dashMetrics: n.dashMetrics, boxParser: n.boxParser ? n.boxParser : null, constants: n.constants ? n.constants : null, dashConstants: n.dashConstants ? n.dashConstants : null, urlUtils: n.urlUtils ? n.urlUtils : null, errors: n.errors })).load(e) }, abort: function() { a && a.abort() } } }
        a.__dashjs_factory_name = "URLLoader"; var s = i.default.getClassFactory(a);
        n.default = s, t.exports = n.default }, { 158: 158, 47: 47 }], 160: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var i = (e = e || {}).requestModifier; return { load: function(e) { var t = new Date,
                        n = e.request,
                        r = new XMLHttpRequest;
                    r.open(e.method, e.url, !0), n.responseType && (r.responseType = n.responseType), n.range && r.setRequestHeader("Range", "bytes=" + n.range), n.requestStartDate || (n.requestStartDate = t), i && (r = i.modifyRequestHeader(r)), r.withCredentials = e.withCredentials, r.onload = e.onload, r.onloadend = e.onend, r.onerror = e.onerror, r.onprogress = e.progress, r.onabort = e.onabort, r.send(), e.response = r }, abort: function(e) { var t = e.response;
                    t.onloadend = t.onerror = t.onprogress = void 0, t.abort() } } }
        o.__dashjs_factory_name = "XHRLoader"; var s = a.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 47: 47 }], 161: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, null, [{ key: "findCencContentProtection", value: function(e) { for (var t = null, n = 0; n < e.length; ++n) { var r = e[n]; "urn:mpeg:dash:mp4protection:2011" !== r.schemeIdUri.toLowerCase() || "cenc" !== r.value.toLowerCase() && "cbcs" !== r.value.toLowerCase() || (t = r) } return t } }, { key: "getPSSHData", value: function(e) { var t = 8,
                    n = new DataView(e),
                    r = n.getUint8(t); return t += 20, 0 < r && (t += 4 + 16 * n.getUint32(t)), t += 4, e.slice(t) } }, { key: "getPSSHForKeySystem", value: function(e, t) { var n = a.parsePSSHList(t); return e && n.hasOwnProperty(e.uuid.toLowerCase()) ? n[e.uuid.toLowerCase()] : null } }, { key: "parseInitDataFromContentProtection", value: function(e, t) { return "pssh" in e ? (e.pssh.__text = e.pssh.__text.replace(/\r?\n|\r/g, "").replace(/\s+/g, ""), t.decodeArray(e.pssh.__text).buffer) : null } }, { key: "parsePSSHList", value: function(e) { if (null == e) return []; for (var t = new DataView(e.buffer || e), n = {}, r = 0;;) { var i, a, o = void 0,
                        s = r; if (r >= t.buffer.byteLength) break; if (i = r + t.getUint32(r), r += 4, 1886614376 === t.getUint32(r))
                        if (r += 4, 0 === (a = t.getUint8(r)) || 1 === a) { r++, r += 3, o = ""; for (var u = void 0, l = void 0, u = 0; u < 4; u++) o += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l; for (r += 4, o += "-", u = 0; u < 2; u++) o += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l; for (r += 2, o += "-", u = 0; u < 2; u++) o += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l; for (r += 2, o += "-", u = 0; u < 2; u++) o += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l; for (r += 2, o += "-", u = 0; u < 6; u++) o += 1 === (l = t.getUint8(r + u).toString(16)).length ? "0" + l : l;
                            r += 6, o = o.toLowerCase(), t.getUint32(r), r += 4, n[o] = t.buffer.slice(s, i), r = i } else r = i;
                    else r = i } return n } }]), a);

        function a() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a) }
        n.default = i, t.exports = n.default }, {}], 162: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var h = r(e(164)),
            p = r(e(165)),
            i = r(e(163)),
            a = r(e(170)),
            g = r(e(172)),
            _ = r(e(173)),
            E = r(e(171)),
            m = [{ generateKeyRequest: "generateKeyRequest", addKey: "addKey", cancelKeyRequest: "cancelKeyRequest", needkey: "needkey", keyerror: "keyerror", keyadded: "keyadded", keymessage: "keymessage" }, { generateKeyRequest: "webkitGenerateKeyRequest", addKey: "webkitAddKey", cancelKeyRequest: "webkitCancelKeyRequest", needkey: "webkitneedkey", keyerror: "webkitkeyerror", keyadded: "webkitkeyadded", keymessage: "webkitkeymessage" }],
            v = [{ setMediaKeys: "setMediaKeys", MediaKeys: "MediaKeys", release: "close", needkey: "needkey", error: "keyerror", message: "keymessage", ready: "keyadded", close: "keyclose" }, { setMediaKeys: "msSetMediaKeys", MediaKeys: "MSMediaKeys", release: "close", needkey: "msneedkey", error: "mskeyerror", message: "mskeymessage", ready: "mskeyadded", close: "mskeyclose" }];

        function o() { var d = void 0,
                f = this.context;

            function c(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n]; if ("function" == typeof e[r[Object.keys(r)[0]]]) return r } return null } return d = { createProtectionSystem: function(e) { var t = null,
                        n = (0, p.default)(f).getInstance();
                    n.setConfig({ debug: e.debug, BASE64: e.BASE64 }), n.initialize(); var r, i, a, o, s, u, l = (i = (r = e).debug, a = i.getLogger(d), o = r.eventBus, s = r.errHandler, (u = r.videoModel ? r.videoModel.getElement() : null) && void 0 === u.onencrypted || u && void 0 === u.mediaKeys ? c(u, v) ? (a.info("EME detected on this user agent! (ProtectionModel_3Feb2014)"), (0, _.default)(f).create({ debug: i, eventBus: o, events: r.events, api: c(u, v) })) : c(u, m) ? (a.info("EME detected on this user agent! (ProtectionModel_01b)"), (0, E.default)(f).create({ debug: i, eventBus: o, errHandler: s, events: r.events, api: c(u, m) })) : (a.warn("No supported version of EME detected on this user agent! - Attempts to play encrypted content will fail!"), null) : (a.info("EME detected on this user agent! (ProtectionModel_21Jan2015)"), (0, g.default)(f).create({ debug: i, eventBus: o, events: r.events }))); return !t && l && (t = (0, h.default)(f).create({ protectionModel: l, protectionKeyController: n, eventBus: e.eventBus, debug: e.debug, events: e.events, BASE64: e.BASE64, constants: e.constants }), e.capabilities.setEncryptedMediaSupported(!0)), t } } }
        o.__dashjs_factory_name = "Protection"; var s = dashjs.FactoryMaker.getClassFactory(o);
        s.events = i.default, s.errors = a.default, dashjs.FactoryMaker.updateClassFactory(o.__dashjs_factory_name, s), n.default = s, t.exports = n.default }, { 163: 163, 164: 164, 165: 165, 170: 170, 171: 171, 172: 172, 173: 173 }], 163: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(55);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).call(this), this.INTERNAL_KEY_MESSAGE = "internalKeyMessage", this.INTERNAL_KEY_SYSTEM_SELECTED = "internalKeySystemSelected", this.INTERNAL_KEY_STATUS_CHANGED = "internalkeyStatusChanged", this.KEY_ADDED = "public_keyAdded", this.KEY_ERROR = "public_keyError", this.KEY_MESSAGE = "public_keyMessage", this.KEY_SESSION_CLOSED = "public_keySessionClosed", this.KEY_SESSION_CREATED = "public_keySessionCreated", this.KEY_SESSION_REMOVED = "public_keySessionRemoved", this.KEY_STATUSES_CHANGED = "public_keyStatusesChanged", this.KEY_SYSTEM_ACCESS_COMPLETE = "public_keySystemAccessComplete", this.KEY_SYSTEM_SELECTED = "public_keySystemSelected", this.LICENSE_REQUEST_COMPLETE = "public_licenseRequestComplete", this.NEED_KEY = "needkey", this.PROTECTION_CREATED = "public_protectioncreated", this.PROTECTION_DESTROYED = "public_protectiondestroyed", this.SERVER_CERTIFICATE_UPDATED = "serverCertificateUpdated", this.TEARDOWN_COMPLETE = "protectionTeardownComplete", this.VIDEO_ELEMENT_SELECTED = "videoElementSelected" } var s = new(function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(o, ((i = a) && i.__esModule ? i : { default: i }).default), o);
        n.default = s, t.exports = n.default }, { 55: 55 }], 164: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var C = r(e(161)),
            y = r(e(183)),
            w = r(e(182)),
            O = r(e(170)),
            P = r(e(226));

        function i(e) { var t, T = (e = e || {}).protectionKeyController,
                S = e.protectionModel,
                A = e.eventBus,
                I = e.events,
                n = e.debug,
                d = e.BASE64,
                l = e.constants,
                s = [],
                R = void 0,
                f = void 0,
                b = void 0,
                c = void 0,
                r = void 0,
                h = void 0,
                D = void 0;

            function i() { if (!(A && A.hasOwnProperty("on") && T && T.hasOwnProperty("getSupportedKeySystemsFromContentProtection"))) throw new Error("Missing config parameter(s)") }

            function p(e, t) { var n = C.default.getPSSHForKeySystem(D, e),
                    r = M(D); if (n) { for (var i = S.getAllInitData(), a = 0; a < i.length; a++)
                        if (T.initDataEquals(n, i[a])) return void R.warn("DRM: Ignoring initData because we have already seen it!");
                    try { S.createKeySession(n, r, E(D), t) } catch (e) { A.trigger(I.KEY_SESSION_CREATED, { data: null, error: new P.default(O.default.KEY_SESSION_CREATED_ERROR_CODE, O.default.KEY_SESSION_CREATED_ERROR_MESSAGE + e.message) }) } } else e ? S.createKeySession(e, r, E(D), t) : A.trigger(I.KEY_SESSION_CREATED, { data: null, error: new P.default(O.default.KEY_SESSION_CREATED_ERROR_CODE, O.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Selected key system is " + (D ? D.systemString : null) + ".  needkey/encrypted event contains no initData corresponding to that key system!") }) }

            function g(e, t) { i(), S.loadKeySession(e, t, E(D)) }

            function a(e) { i(), e ? (S.setMediaElement(e), A.on(I.NEED_KEY, v, this)) : null === e && (S.setMediaElement(e), A.off(I.NEED_KEY, v, this)) }

            function M(e) { var t, n = null; return e && (t = e.systemString, c && (n = t in c ? c[t] : null)), n }

            function _(e) { var t = M(e),
                    n = [],
                    r = [],
                    i = t && t.audioRobustness && 0 < t.audioRobustness.length ? t.audioRobustness : h,
                    a = t && t.videoRobustness && 0 < t.videoRobustness.length ? t.videoRobustness : h,
                    o = E(e),
                    s = t && t.distinctiveIdentifier ? t.distinctiveIdentifier : "optional",
                    u = t && t.persistentState ? t.persistentState : "temporary" === o ? "optional" : "required"; return b.forEach(function(e) { e.type === l.AUDIO ? n.push(new y.default(e.codec, i)) : e.type === l.VIDEO && r.push(new y.default(e.codec, a)) }), new w.default(n, r, s, u, [o]) }

            function E(e) { var t = M(e); return t && t.sessionType ? t.sessionType : r }

            function u(i, s) { var u = this,
                    t = [];
                i = i.sort(function(e, t) { return (c && c[e.ks.systemString] && 0 <= c[e.ks.systemString].priority ? c[e.ks.systemString].priority : i.length) - (c && c[t.ks.systemString] && 0 <= c[t.ks.systemString].priority ? c[t.ks.systemString].priority : i.length) }); var n, l = void 0; if (D)
                    for (l = 0; l < i.length; l++) { if (D === i[l].ks)
                            if ("break" === function() { t.push({ ks: i[l].ks, configs: [_(D)] }); return A.on(I.KEY_SYSTEM_ACCESS_COMPLETE, function e(t) { var n, r;
                                        A.off(I.KEY_SYSTEM_ACCESS_COMPLETE, e, u), t.error ? s || A.trigger(I.KEY_SYSTEM_SELECTED, { error: new P.default(O.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, O.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + t.error) }) : (R.info("DRM: KeySystem Access Granted"), A.trigger(I.KEY_SYSTEM_SELECTED, { data: t.data }), n = M(D), T.isClearKey(D) && n && n.hasOwnProperty("clearkeys") && (r = { kids: Object.keys(n.clearkeys) }, i[l].initData = (new TextEncoder).encode(JSON.stringify(r))), i[l].sessionId ? g(i[l].sessionId, i[l].initData) : i[l].initData && p(i[l].initData, i[l].cdmData)) }, u), S.requestKeySystemAccess(t), "break" }()) break } else void 0 === D ? function() { D = null, f.push(i); for (var e = 0; e < i.length; e++) t.push({ ks: i[e].ks, configs: [_(i[e].ks)] });

                        function a(e) { A.off(I.KEY_SYSTEM_ACCESS_COMPLETE, a, u), e.error ? (D = void 0, A.off(I.INTERNAL_KEY_SYSTEM_SELECTED, n, u), s || A.trigger(I.KEY_SYSTEM_SELECTED, { data: null, error: new P.default(O.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, O.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + e.error) })) : (o = e.data, R.info("DRM: KeySystem Access Granted (" + o.keySystem.systemString + ")!  Selecting key system..."), S.selectKeySystem(o)) } var o = void 0;
                        n = function e(t) { if (A.off(I.INTERNAL_KEY_SYSTEM_SELECTED, e, u), A.off(I.KEY_SYSTEM_ACCESS_COMPLETE, a, u), t.error) D = void 0, s || A.trigger(I.KEY_SYSTEM_SELECTED, { data: null, error: new P.default(O.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE, O.default.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE + "Error selecting key system! -- " + t.error) });
                            else { if (!S) return;
                                D = S.getKeySystem(), A.trigger(I.KEY_SYSTEM_SELECTED, { data: o }); var n = M(D);
                                n && n.serverCertificate && 0 < n.serverCertificate.length && S.setServerCertificate(d.decodeArray(n.serverCertificate).buffer); for (var r, i = 0; i < f.length; i++)
                                    for (l = 0; l < f[i].length; l++)
                                        if (D === f[i][l].ks) { T.isClearKey(D) && n && n.hasOwnProperty("clearkeys") && (r = { kids: Object.keys(n.clearkeys) }, f[i][l].initData = (new TextEncoder).encode(JSON.stringify(r))), f[i][l].sessionId ? g(f[i][l].sessionId, f[i][l].initData) : null !== f[i][l].initData && p(f[i][l].initData, f[i][l].cdmData); break } } }, A.on(I.INTERNAL_KEY_SYSTEM_SELECTED, n, u), A.on(I.KEY_SYSTEM_ACCESS_COMPLETE, a, u), S.requestKeySystemAccess(t) }() : f.push(i) }

            function N(e, t) { A.trigger(I.LICENSE_REQUEST_COMPLETE, { data: e, error: t }) }

            function o(e) { e.error ? A.trigger(I.KEY_STATUSES_CHANGED, { data: null, error: e.error }) : R.debug("DRM: key status = " + e.status) }

            function m(e) { R.debug("DRM: onKeyMessage"); var t = e.data;
                A.trigger(I.KEY_MESSAGE, { data: t }); var n = t.messageType ? t.messageType : "license-request",
                    r = t.message,
                    i = t.sessionToken,
                    a = M(D),
                    o = D ? D.systemString : null,
                    s = T.getLicenseServer(D, a, n),
                    u = { sessionToken: i, messageType: n }; if (r && 0 !== r.byteLength) { if (!s) return R.debug("DRM: License server request not required for this message (type = " + e.data.messageType + ").  Session ID = " + i.getSessionID()), void N(u); if (T.isClearKey(D)) { var l = T.processClearKeyLicenseRequest(D, a, r); if (l) return R.debug("DRM: ClearKey license request handled by application!"), N(u), void S.updateKeySession(i, l) } var d, f, c, h, p, g, _, E, m, v, y = null;
                    a && a.serverURL ? "string" == typeof(d = a.serverURL) && "" !== d ? y = d : "object" == typeof d && d.hasOwnProperty(n) && (y = d[n]) : y = a && a.laURL && "" !== a.laURL ? a.laURL : T.isClearKey(D) ? D.getLicenseServerUrlFromMediaInfo(b) : (f = C.default.getPSSHData(i.initData), (y = D.getLicenseServerURLFromInitData(f)) || e.data.laURL), (y = s.getServerURLFromMessage(y, r, n)) ? (h = !(c = {}), p = function(e) { if (e)
                            for (var t in e) "authorization" === t.toLowerCase() && (h = !0), c[t] = e[t] }, a && p(a.httpRequestHeaders), p(D.getRequestHeadersFromMessage(r)), a && "boolean" == typeof a.withCredentials && (h = a.withCredentials), g = function(e, t, n, r) { var i = e.response ? s.getErrorResponse(e.response, n, r) : "NONE";
                        N(t, new P.default(O.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, O.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + n + ' update, XHR complete. status is "' + e.statusText + '" (' + e.status + "), readyState is " + e.readyState + ".  Response is " + i)) }, _ = D.getLicenseRequestFromMessage(r), E = s.getHTTPMethod(n), m = s.getResponseType(o, n), v = a && !isNaN(a.httpTimeout) ? a.httpTimeout : 8e3, function e(t, n, r, i, a, o, s, u, l, d, f) { var c = new XMLHttpRequest;
                        c.open(r, t, !0);
                        c.responseType = i;
                        c.withCredentials = a;
                        0 < u && (c.timeout = u); for (var h in n) c.setRequestHeader(h, n[h]); var p = function() { s--, setTimeout(function() { e(t, n, r, i, a, o, s, u, l, d, f) }, 1e3) };
                        c.onload = function() { 200 === this.status || s <= 0 ? l(this) : (R.warn("License request failed (" + this.status + "). Retrying it... Pending retries: " + s), p()) };
                        c.ontimeout = c.onerror = function() { s <= 0 ? f(this) : (R.warn("License request network request failed . Retrying it... Pending retries: " + s), p()) };
                        c.onabort = function() { d(this) };
                        c.send(o) }(y, c, E, m, h, _, 3, v, function(e) { var t;
                        S && (200 === e.status && null !== (t = s.getLicenseMessage(e.response, o, n)) ? (N(u), S.updateKeySession(i, t)) : g(e, u, o, n)) }, function(e) { N(u, new P.default(O.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, O.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + o + ' update, XHR aborted. status is "' + e.statusText + '" (' + e.status + "), readyState is " + e.readyState)) }, function(e) { N(u, new P.default(O.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE, O.default.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE + o + ' update, XHR error. status is "' + e.statusText + '" (' + e.status + "), readyState is " + e.readyState)) })) : N(u, new P.default(O.default.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE, O.default.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE)) } else N(u, new P.default(O.default.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE, O.default.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE)) }

            function v(e, t) { if (R.debug("DRM: onNeedKey"), "cenc" === e.key.initDataType)
                    if (0 === b.length && (R.warn("DRM: onNeedKey called before initializeForMedia, wait until initialized"), (t = void 0 === t ? 1 : t + 1) < 5)) s.push(setTimeout(function() { v(e, t) }, 500));
                    else { var n = e.key.initData; if (ArrayBuffer.isView(n) && (n = n.buffer), D) { var r = C.default.getPSSHForKeySystem(D, n); if (r)
                                for (var i = S.getAllInitData(), a = 0; a < i.length; a++)
                                    if (T.initDataEquals(r, i[a])) return void R.warn("DRM: Ignoring initData because we have already seen it!") }
                        R.debug("DRM: initData:", String.fromCharCode.apply(null, new Uint8Array(n))); var o = T.getSupportedKeySystems(n, c);
                        0 !== o.length ? u(o, !1) : R.debug("DRM: Received needkey event with initData, but we don't support any of the key systems!") }
                else R.warn("DRM:  Only 'cenc' initData is supported!  Ignoring initData of type: " + e.key.initDataType) } return t = { initializeForMedia: function(e) { if (!e) throw new Error("mediaInfo can not be null or undefined");
                    i(), A.on(I.INTERNAL_KEY_MESSAGE, m, this), A.on(I.INTERNAL_KEY_STATUS_CHANGED, o, this), b.push(e); var t = T.getSupportedKeySystemsFromContentProtection(e.contentProtection);
                    t && 0 < t.length && u(t, !0) }, createKeySession: p, loadKeySession: g, removeKeySession: function(e) { i(), S.removeKeySession(e) }, closeKeySession: function(e) { i(), S.closeKeySession(e) }, setServerCertificate: function(e) { i(), S.setServerCertificate(e) }, setMediaElement: a, setSessionType: function(e) { r = e }, setRobustnessLevel: function(e) { h = e }, setProtectionData: function(e) { c = e, T.setProtectionData(e) }, getSupportedKeySystemsFromContentProtection: function(e) { return i(), T.getSupportedKeySystemsFromContentProtection(e) }, getKeySystems: function() { return T ? T.getKeySystems() : [] }, setKeySystems: function(e) { T && T.setKeySystems(e) }, stop: function() { S && S.stop() }, reset: function() { i(), A.off(I.INTERNAL_KEY_MESSAGE, m, this), A.off(I.INTERNAL_KEY_STATUS_CHANGED, o, this), a(null), D = void 0, S && (S.reset(), S = null), s.forEach(function(e) { return clearTimeout(e) }), s = [], b = [] } }, R = n.getLogger(t), f = [], b = [], r = "temporary", h = "", t }
        i.__dashjs_factory_name = "ProtectionController", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 161: 161, 170: 170, 182: 182, 183: 183, 226: 226 }], 165: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var l = r(e(161)),
            d = r(e(166)),
            f = r(e(168)),
            c = r(e(169)),
            h = r(e(167)),
            p = r(e(175)),
            g = r(e(176)),
            _ = r(e(177)),
            E = r(e(174)),
            m = r(e(110));

        function i() { var i = this.context,
                t = void 0,
                n = void 0,
                r = void 0,
                u = void 0,
                a = void 0,
                o = void 0,
                s = void 0; return t = { initialize: function() { u = []; var e = void 0,
                        e = (0, h.default)(i).getInstance({ BASE64: a });
                    u.push(e), e = (0, c.default)(i).getInstance({ BASE64: a }), u.push(e), e = (0, d.default)(i).getInstance({ BASE64: a }), u.push(e), o = e, e = (0, f.default)(i).getInstance({ BASE64: a, debug: n }), u.push(e), s = e }, setProtectionData: function(e) { for (var t, n, r = 0; r < u.length; r++) { var i = u[r];
                        i.hasOwnProperty("init") && i.init((t = i.systemString, n = void 0, n = null, e && (n = t in e ? e[t] : null), n)) } }, isClearKey: function(e) { return e === o || e === s }, initDataEquals: function(e, t) { if (e.byteLength !== t.byteLength) return !1; for (var n = new Uint8Array(e), r = new Uint8Array(t), i = 0; i < n.length; i++)
                        if (n[i] !== r[i]) return !1;
                    return !0 }, getKeySystems: function() { return u }, setKeySystems: function(e) { u = e }, getKeySystemBySystemString: function(e) { for (var t = 0; t < u.length; t++)
                        if (u[t].systemString === e) return u[t];
                    return null }, getSupportedKeySystemsFromContentProtection: function(e) { var t = void 0,
                        n = void 0,
                        r = void 0,
                        i = void 0,
                        a = []; if (e)
                        for (var o, s = l.default.findCencContentProtection(e), r = 0; r < u.length; ++r)
                            for (n = u[r], i = 0; i < e.length; ++i) {
                                (t = e[i]).schemeIdUri.toLowerCase() === n.schemeIdURI && (o = n.getInitData(t, s), a.push({ ks: u[r], initData: o, cdmData: n.getCDMData(), sessionId: n.getSessionId(t) })) }
                    return a }, getSupportedKeySystems: function(e, t) { for (var n = [], r = l.default.parsePSSHList(e), i = void 0, a = void 0, o = void 0, s = 0; s < u.length; ++s) a = (i = u[s]).systemString, o = !t || a in t, i.uuid in r && o && n.push({ ks: i, initData: r[i.uuid], cdmData: i.getCDMData(), sessionId: i.getSessionId() }); return n }, getLicenseServer: function(e, t, n) { if ("license-release" === n || "individualization-request" === n) return null; var r = null; return t && t.hasOwnProperty("drmtoday") ? r = (0, p.default)(i).getInstance({ BASE64: a }) : e.systemString === m.default.WIDEVINE_KEYSTEM_STRING ? r = (0, _.default)(i).getInstance() : e.systemString === m.default.PLAYREADY_KEYSTEM_STRING ? r = (0, g.default)(i).getInstance() : e.systemString === m.default.CLEARKEY_KEYSTEM_STRING && (r = (0, E.default)(i).getInstance()), r }, processClearKeyLicenseRequest: function(e, t, n) { try { return e.getClearKeysFromProtectionData(t, n) } catch (e) { return r.error("Failed to retrieve clearkeys from ProtectionData"), null } }, setConfig: function(e) { e && (e.debug && (n = e.debug, r = n.getLogger(t)), e.BASE64 && (a = e.BASE64)) } } }
        i.__dashjs_factory_name = "ProtectionKeyController", n.default = dashjs.FactoryMaker.getSingletonFactory(i), t.exports = n.default }, { 110: 110, 161: 161, 166: 166, 167: 167, 168: 168, 169: 169, 174: 174, 175: 175, 176: 176, 177: 177 }], 166: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var u = r(e(180)),
            l = r(e(178)),
            a = r(e(161)),
            i = r(e(110)),
            o = "e2719d58-a985-b3c9-781a-b030af78d30e",
            s = i.default.CLEARKEY_KEYSTEM_STRING,
            c = "urn:uuid:" + o;

        function d(e) { var i = (e = e || {}).BASE64,
                f = { attributes: ["Laurl", "laurl"], prefixes: ["clearkey", "dashif"] }; return { uuid: o, schemeIdURI: c, systemString: s, getInitData: function(e, t) { try { var n, r = a.default.parseInitDataFromContentProtection(e, i); return !r && t && (n = { kids: [function(e) { try { var t = e.replace(/-/g, ""); return (t = btoa(t.match(/\w{2}/g).map(function(e) { return String.fromCharCode(parseInt(e, 16)) }).join(""))).replace(/=/g, "") } catch (e) { return null } }(t["cenc:default_KID"])] }, r = (new TextEncoder).encode(JSON.stringify(n))), r } catch (e) { return null } }, getRequestHeadersFromMessage: function() { return { "Content-Type": "application/json" } }, getLicenseRequestFromMessage: function(e) { return JSON.parse(String.fromCharCode.apply(null, new Uint8Array(e))) }, getLicenseServerURLFromInitData: function() { return null }, getCDMData: function() { return null }, getSessionId: function() { return null }, getLicenseServerUrlFromMediaInfo: function(e) { try { if (!e || 0 === e.length) return null; for (var t = 0, n = null; t < e.length && !n;) { var r = e[t]; if (r && r.contentProtection && 0 < r.contentProtection.length) { var i = r.contentProtection.filter(function(e) { return e.schemeIdUri && e.schemeIdUri === c }); if (i && 0 < i.length)
                                    for (var a = 0; a < i.length && !n;) { for (var o = i[a], s = 0; s < f.attributes.length && !n;) { for (var u = 0, l = f.attributes[s]; u < f.prefixes.length && !n;) { var d = f.prefixes[u];
                                                o[l] && o[l].__prefix && o[l].__prefix === d && o[l].__text && (n = o[l].__text), u += 1 }
                                            s += 1 }
                                        a += 1 } }
                            t += 1 } return n } catch (e) { return null } }, getClearKeysFromProtectionData: function(e, t) { var n = null; if (e) { for (var r = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t))), i = [], a = 0; a < r.kids.length; a++) { var o = r.kids[a],
                                s = e.clearkeys && e.clearkeys.hasOwnProperty(o) ? e.clearkeys[o] : null; if (!s) throw new Error("DRM: ClearKey keyID (" + o + ") is not known!");
                            i.push(new u.default(o, s)) }
                        n = new l.default(i) } return n } } }
        d.__dashjs_factory_name = "KeySystemClearKey", n.default = dashjs.FactoryMaker.getSingletonFactory(d), t.exports = n.default }, { 110: 110, 161: 161, 178: 178, 180: 180 }], 167: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var c = r(e(161)),
            i = r(e(110)),
            a = "9a04f079-9840-4286-ab92-e65be0885f95",
            o = i.default.PLAYREADY_KEYSTEM_STRING,
            s = void 0;

        function u(e) { var l = "utf-16",
                d = (e = e || {}).BASE64;

            function f() { if (!d || !d.hasOwnProperty("decodeArray") || !d.hasOwnProperty("decodeArray")) throw new Error("Missing config parameter(s)") } return { uuid: a, schemeIdURI: "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95", systemString: o, getInitData: function(e) { var t, n, r, i = new Uint8Array([112, 115, 115, 104, 0, 0, 0, 0]),
                        a = new Uint8Array([154, 4, 240, 121, 152, 64, 66, 134, 171, 146, 230, 91, 224, 136, 95, 149]),
                        o = 0,
                        s = null,
                        u = void 0,
                        l = void 0; if (f(), !e) return null; if ("pssh" in e) return c.default.parseInitDataFromContentProtection(e, d); if ("pro" in e) s = d.decodeArray(e.pro.__text);
                    else { if (!("prheader" in e)) return null;
                        s = d.decodeArray(e.prheader.__text) } return t = s.length, n = 4 + i.length + a.length + 4 + t, r = new ArrayBuffer(n), u = new Uint8Array(r), (l = new DataView(r)).setUint32(o, n), o += 4, u.set(i, o), o += i.length, u.set(a, o), o += a.length, l.setUint32(o, t), o += 4, u.set(s, o), o += t, u.buffer }, getRequestHeadersFromMessage: function(e) { for (var t = void 0, n = {}, r = new DOMParser, i = new("utf-16" === l ? Uint16Array : Uint8Array)(e), a = String.fromCharCode.apply(null, i), o = (t = r.parseFromString(a, "application/xml")).getElementsByTagName("name"), s = t.getElementsByTagName("value"), u = 0; u < o.length; u++) n[o[u].childNodes[0].nodeValue] = s[u].childNodes[0].nodeValue; return n.hasOwnProperty("Content") && (n["Content-Type"] = n.Content, delete n.Content), n.hasOwnProperty("Content-Type") || (n["Content-Type"] = "text/xml; charset=utf-8"), n }, getLicenseRequestFromMessage: function(e) { var t = null,
                        n = new DOMParser,
                        r = new("utf-16" === l ? Uint16Array : Uint8Array)(e);
                    f(); var i = String.fromCharCode.apply(null, r),
                        a = n.parseFromString(i, "application/xml"); if (!a.getElementsByTagName("PlayReadyKeyMessage")[0]) return e; var o = a.getElementsByTagName("Challenge")[0].childNodes[0].nodeValue; return o && (t = d.decode(o)), t }, getLicenseServerURLFromInitData: function(e) { if (e)
                        for (var t = new DataView(e), n = t.getUint16(4, !0), r = 6, i = new DOMParser, a = 0; a < n; a++) { var o = t.getUint16(r, !0);
                            r += 2; var s = t.getUint16(r, !0); if (r += 2, 1 === o) { var u = e.slice(r, r + s),
                                    l = String.fromCharCode.apply(null, new Uint16Array(u)),
                                    d = i.parseFromString(l, "application/xml"); if (d.getElementsByTagName("LA_URL")[0]) { var f = d.getElementsByTagName("LA_URL")[0].childNodes[0].nodeValue; if (f) return f } if (d.getElementsByTagName("LUI_URL")[0]) { var c = d.getElementsByTagName("LUI_URL")[0].childNodes[0].nodeValue; if (c) return c } } else r += s }
                    return null }, getCDMData: function() { var e = void 0,
                        t = void 0,
                        n = void 0,
                        r = void 0; if (f(), s && s.cdmData) { for (e = [], r = 0; r < s.cdmData.length; ++r) e.push(s.cdmData.charCodeAt(r)), e.push(0); for (e = String.fromCharCode.apply(null, e), e = d.encode(e), t = '<PlayReadyCDMData type="LicenseAcquisition"><LicenseAcquisition version="1.0" Proactive="false"><CustomData encoding="base64encoded">%CUSTOMDATA%</CustomData></LicenseAcquisition></PlayReadyCDMData>'.replace("%CUSTOMDATA%", e), n = [], r = 0; r < t.length; ++r) n.push(t.charCodeAt(r)), n.push(0); return new Uint8Array(n).buffer } return null }, getSessionId: function(e) { return s && s.sessionId ? s.sessionId : e && e.sessionId ? e.sessionId : null }, setPlayReadyMessageFormat: function(e) { if ("utf-8" !== e && "utf-16" !== e) throw new Error('Specified message format is not one of "utf-8" or "utf-16"');
                    l = e }, init: function(e) { e && (s = e) } } }
        u.__dashjs_factory_name = "KeySystemPlayReady", n.default = dashjs.FactoryMaker.getSingletonFactory(u), t.exports = n.default }, { 110: 110, 161: 161 }], 168: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var l = r(e(180)),
            d = r(e(178)),
            i = r(e(161)),
            a = r(e(110)),
            o = "1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",
            s = a.default.CLEARKEY_KEYSTEM_STRING;

        function u(e) { var t = void 0,
                n = e.BASE64,
                u = e.debug.getLogger(t); return t = { uuid: o, schemeIdURI: "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b", systemString: s, getInitData: function(e) { return i.default.parseInitDataFromContentProtection(e, n) }, getRequestHeadersFromMessage: function() { return null }, getLicenseRequestFromMessage: function(e) { return new Uint8Array(e) }, getLicenseServerURLFromInitData: function() { return null }, getCDMData: function() { return null }, getSessionId: function() { return null }, getClearKeysFromProtectionData: function(e, t) { var n = null; if (e) { for (var r = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(t))), i = [], a = 0; a < r.kids.length; a++) { var o = r.kids[a],
                                s = e.clearkeys && e.clearkeys.hasOwnProperty(o) ? e.clearkeys[o] : null; if (!s) throw new Error("DRM: ClearKey keyID (" + o + ") is not known!");
                            i.push(new l.default(o, s)) }
                        n = new d.default(i), u.warn("ClearKey schemeIdURI is using W3C Common PSSH systemID (1077efec-c0b2-4d02-ace3-3c1e52e2fb4b) in Content Protection. See DASH-IF IOP v4.1 section 7.6.2.4") } return n } } }
        u.__dashjs_factory_name = "KeySystemW3CClearKey", n.default = dashjs.FactoryMaker.getSingletonFactory(u), t.exports = n.default }, { 110: 110, 161: 161, 178: 178, 180: 180 }], 169: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(161)),
            a = r(e(110)),
            o = "edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",
            s = a.default.WIDEVINE_KEYSTEM_STRING;

        function u(e) { var t = null,
                n = (e = e || {}).BASE64; return { uuid: o, schemeIdURI: "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", systemString: s, init: function(e) { e && (t = e) }, getInitData: function(e) { return i.default.parseInitDataFromContentProtection(e, n) }, getRequestHeadersFromMessage: function() { return null }, getLicenseRequestFromMessage: function(e) { return new Uint8Array(e) }, getLicenseServerURLFromInitData: function() { return null }, getCDMData: function() { return null }, getSessionId: function(e) { return t && t.sessionId ? t.sessionId : e && e.sessionId ? e.sessionId : null } } }
        u.__dashjs_factory_name = "KeySystemWidevine", n.default = dashjs.FactoryMaker.getSingletonFactory(u), t.exports = n.default }, { 110: 110, 161: 161 }], 170: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(52);

        function o() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, o), r(Object.getPrototypeOf(o.prototype), "constructor", this).call(this), this.MEDIA_KEYERR_CODE = 100, this.MEDIA_KEYERR_UNKNOWN_CODE = 101, this.MEDIA_KEYERR_CLIENT_CODE = 102, this.MEDIA_KEYERR_SERVICE_CODE = 103, this.MEDIA_KEYERR_OUTPUT_CODE = 104, this.MEDIA_KEYERR_HARDWARECHANGE_CODE = 105, this.MEDIA_KEYERR_DOMAIN_CODE = 106, this.MEDIA_KEY_MESSAGE_ERROR_CODE = 107, this.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_CODE = 108, this.SERVER_CERTIFICATE_UPDATED_ERROR_CODE = 109, this.KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE = 110, this.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_CODE = 111, this.KEY_SYSTEM_ACCESS_DENIED_ERROR_CODE = 112, this.KEY_SESSION_CREATED_ERROR_CODE = 113, this.MEDIA_KEY_MESSAGE_LICENSER_ERROR_CODE = 114, this.MEDIA_KEYERR_UNKNOWN_MESSAGE = "An unspecified error occurred. This value is used for errors that don't match any of the other codes.", this.MEDIA_KEYERR_CLIENT_MESSAGE = "The Key System could not be installed or updated.", this.MEDIA_KEYERR_SERVICE_MESSAGE = "The message passed into update indicated an error from the license service.", this.MEDIA_KEYERR_OUTPUT_MESSAGE = "There is no available output device with the required characteristics for the content protection system.", this.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE = "A hardware configuration change caused a content protection error.", this.MEDIA_KEYERR_DOMAIN_MESSAGE = "An error occurred in a multi-device domain licensing configuration. The most common error is a failure to join the domain.", this.MEDIA_KEY_MESSAGE_ERROR_MESSAGE = "Multiple key sessions were creates with a user-agent that does not support sessionIDs!! Unpredictable behavior ahead!", this.MEDIA_KEY_MESSAGE_NO_CHALLENGE_ERROR_MESSAGE = "DRM: Empty key message from CDM", this.SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE = "Error updating server certificate -- ", this.KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE = "DRM: KeyStatusChange error! -- License has expired", this.MEDIA_KEY_MESSAGE_NO_LICENSE_SERVER_URL_ERROR_MESSAGE = "DRM: No license server URL specified!", this.KEY_SYSTEM_ACCESS_DENIED_ERROR_MESSAGE = "DRM: KeySystem Access Denied! -- ", this.KEY_SESSION_CREATED_ERROR_MESSAGE = "DRM: unable to create session! --", this.MEDIA_KEY_MESSAGE_LICENSER_ERROR_MESSAGE = "DRM: licenser error! --" } var s = new(function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
            e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(o, ((i = a) && i.__esModule ? i : { default: i }).default), o);
        n.default = s, t.exports = n.default }, { 52: 52 }], 171: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var y = r(e(165)),
            T = r(e(184)),
            S = r(e(226)),
            A = r(e(179)),
            I = r(e(182)),
            R = r(e(181)),
            b = r(e(170));

        function i(e) { e = e || {}; var t = this.context,
                h = e.eventBus,
                p = e.events,
                n = e.debug,
                o = e.api,
                s = e.errHandler,
                r = void 0,
                u = void 0,
                g = void 0,
                i = void 0,
                _ = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                a = void 0;

            function c() { g && v(); for (var e = 0; e < d.length; e++) E(d[e]);
                h.trigger(p.TEARDOWN_COMPLETE) }

            function E(t) { try { g[o.cancelKeyRequest](i.systemString, t.sessionID) } catch (e) { h.trigger(p.KEY_SESSION_CLOSED, { data: null, error: "Error closing session (" + t.sessionID + ") " + e.message }) } }

            function m(e, t) { if (t && e) { for (var n = e.length, r = 0; r < n; r++)
                        if (e[r].sessionID == t) return e[r];
                    return null } return null }

            function v() { g.removeEventListener(o.keyerror, a), g.removeEventListener(o.needkey, a), g.removeEventListener(o.keymessage, a), g.removeEventListener(o.keyadded, a) } return r = { getAllInitData: function() { for (var e = [], t = 0; t < l.length; t++) e.push(l[t].initData); for (t = 0; t < d.length; t++) e.push(d[t].initData); return e }, requestKeySystemAccess: function(e) { for (var t = (t = g) || document.createElement("video"), n = !1, r = 0; r < e.length; r++)
                        for (var i = e[r].ks.systemString, a = e[r].configs, o = null, s = null, u = 0; u < a.length; u++) { var l = a[u].videoCapabilities; if (l && 0 !== l.length) { s = []; for (var d = 0; d < l.length; d++) "" !== t.canPlayType(l[d].contentType, i) && s.push(l[d]) } if (s && (!s || 0 !== s.length)) { n = !0; var f = new I.default(o, s),
                                    c = _.getKeySystemBySystemString(i);
                                h.trigger(p.KEY_SYSTEM_ACCESS_COMPLETE, { data: new R.default(c, f) }); break } }
                    n || h.trigger(p.KEY_SYSTEM_ACCESS_COMPLETE, { error: "Key system access denied! -- No valid audio/video content configurations detected!" }) }, getKeySystem: function() { return i }, selectKeySystem: function(e) { i = e.keySystem, h.trigger(p.INTERNAL_KEY_SYSTEM_SELECTED) }, setMediaElement: function(e) { if (g !== e) { if (g) { v(); for (var t = 0; t < d.length; t++) E(d[t]);
                            d = [] }(g = e) && (g.addEventListener(o.keyerror, a), g.addEventListener(o.needkey, a), g.addEventListener(o.keymessage, a), g.addEventListener(o.keyadded, a), h.trigger(p.VIDEO_ELEMENT_SELECTED)) } }, createKeySession: function(e) { if (!i) throw new Error("Can not create sessions until you have selected a key system"); if (f || 0 === d.length) { var t = { sessionID: null, initData: e, getSessionID: function() { return this.sessionID }, getExpirationTime: function() { return NaN }, getSessionType: function() { return "temporary" } }; return l.push(t), g[o.generateKeyRequest](i.systemString, new Uint8Array(e)), t } throw new Error("Multiple sessions not allowed!") }, updateKeySession: function(e, t) { var n = e.sessionID; if (_.isClearKey(i))
                        for (var r = 0; r < t.keyPairs.length; r++) g[o.addKey](i.systemString, t.keyPairs[r].key, t.keyPairs[r].keyID, n);
                    else g[o.addKey](i.systemString, new Uint8Array(t), new Uint8Array(e.initData), n) }, closeKeySession: E, setServerCertificate: function() {}, loadKeySession: function() {}, removeKeySession: function() {}, stop: c, reset: c }, u = n.getLogger(r), l = [], d = [], _ = (i = g = null, y.default)(t).getInstance(), a = { handleEvent: function(e) { var t, n = null; switch (e.type) {
                        case o.needkey:
                            var r = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData;
                            h.trigger(p.NEED_KEY, { key: new T.default(r, "cenc") }); break;
                        case o.keyerror:
                            if (n = (n = m(d, e.sessionId)) || m(l, e.sessionId)) { var i = b.default.MEDIA_KEYERR_CODE,
                                    a = ""; switch (e.errorCode.code) {
                                    case 1:
                                        i = b.default.MEDIA_KEYERR_UNKNOWN_CODE, a += "MEDIA_KEYERR_UNKNOWN - " + b.default.MEDIA_KEYERR_UNKNOWN_MESSAGE; break;
                                    case 2:
                                        i = b.default.MEDIA_KEYERR_CLIENT_CODE, a += "MEDIA_KEYERR_CLIENT - " + b.default.MEDIA_KEYERR_CLIENT_MESSAGE; break;
                                    case 3:
                                        i = b.default.MEDIA_KEYERR_SERVICE_CODE, a += "MEDIA_KEYERR_SERVICE - " + b.default.MEDIA_KEYERR_SERVICE_MESSAGE; break;
                                    case 4:
                                        i = b.default.MEDIA_KEYERR_OUTPUT_CODE, a += "MEDIA_KEYERR_OUTPUT - " + b.default.MEDIA_KEYERR_OUTPUT_MESSAGE; break;
                                    case 5:
                                        i = b.default.MEDIA_KEYERR_HARDWARECHANGE_CODE, a += "MEDIA_KEYERR_HARDWARECHANGE - " + b.default.MEDIA_KEYERR_HARDWARECHANGE_MESSAGE; break;
                                    case 6:
                                        i = b.default.MEDIA_KEYERR_DOMAIN_CODE, a += "MEDIA_KEYERR_DOMAIN - " + b.default.MEDIA_KEYERR_DOMAIN_MESSAGE }
                                a += "  System Code = " + e.systemCode, h.trigger(p.KEY_ERROR, { data: new S.default(i, a, n) }) } else u.error("No session token found for key error"); break;
                        case o.keyadded:
                            (n = (n = m(d, e.sessionId)) || m(l, e.sessionId)) ? (u.debug("DRM: Key added."), h.trigger(p.KEY_ADDED, { data: n })) : u.debug("No session token found for key added"); break;
                        case o.keymessage:
                            (f = null !== e.sessionId && void 0 !== e.sessionId) ? !(n = m(d, e.sessionId)) && 0 < l.length && (n = l.shift(), d.push(n), n.sessionID = e.sessionId, h.trigger(p.KEY_SESSION_CREATED, { data: n })): 0 < l.length && (n = l.shift(), d.push(n), 0 !== l.length && s.error(new S.default(b.default.MEDIA_KEY_MESSAGE_ERROR_CODE, b.default.MEDIA_KEY_MESSAGE_ERROR_MESSAGE))), n ? (t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message, n.keyMessage = t, h.trigger(p.INTERNAL_KEY_MESSAGE, { data: new A.default(n, t, e.defaultURL) })) : u.warn("No session token found for key message") } } }, r }
        i.__dashjs_factory_name = "ProtectionModel_01b", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 165: 165, 170: 170, 179: 179, 181: 181, 182: 182, 184: 184, 226: 226 }], 172: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var E = r(e(165)),
            m = r(e(184)),
            v = r(e(170)),
            y = r(e(226)),
            T = r(e(179)),
            S = r(e(181)),
            A = r(e(110));

        function i(e) { e = e || {}; var t = this.context,
                o = e.eventBus,
                s = e.events,
                n = e.debug,
                r = void 0,
                u = void 0,
                l = void 0,
                i = void 0,
                d = void 0,
                f = void 0,
                a = void 0,
                c = void 0;

            function h(e) { var t = e.session; return t.removeEventListener("keystatuseschange", e), t.removeEventListener("message", e), t.close() }

            function p(e) { for (var t = 0; t < f.length; t++)
                    if (f[t] === e) { f.splice(t, 1); break } }

            function g(e) { var t = void 0,
                    n = void 0; return e && 0 < e.length && (e[0] && ("string" == typeof e[0] ? t = e[0] : n = e[0]), e[1] && ("string" == typeof e[1] ? t = e[1] : n = e[1])), { status: t, keyId: n } }

            function _(t, e, n, r) { var i = { session: t, initData: e, sessionId: r, handleEvent: function(e) { switch (e.type) {
                            case "keystatuseschange":
                                o.trigger(s.KEY_STATUSES_CHANGED, { data: this }), e.target.keyStatuses.forEach(function() { var e = g(arguments); switch (e.status) {
                                        case "expired":
                                            o.trigger(s.INTERNAL_KEY_STATUS_CHANGED, { error: new y.default(v.default.KEY_STATUS_CHANGED_EXPIRED_ERROR_CODE, v.default.KEY_STATUS_CHANGED_EXPIRED_ERROR_MESSAGE) }); break;
                                        default:
                                            o.trigger(s.INTERNAL_KEY_STATUS_CHANGED, e) } }); break;
                            case "message":
                                var t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
                                o.trigger(s.INTERNAL_KEY_MESSAGE, { data: new T.default(this, t, void 0, e.messageType) }) } }, getSessionID: function() { return t.sessionId }, getExpirationTime: function() { return t.expiration }, getKeyStatuses: function() { return t.keyStatuses }, getUsable: function() { var e = !1; return t.keyStatuses.forEach(function() { "usable" === g(arguments).status && (e = !0) }), e }, getSessionType: function() { return n } }; return t.addEventListener("keystatuseschange", i), t.addEventListener("message", i), t.closed.then(function() { p(i), u.debug("DRM: Session closed.  SessionID = " + i.getSessionID()), o.trigger(s.KEY_SESSION_CLOSED, { data: i.getSessionID() }) }), f.push(i), i } return r = { getAllInitData: function() { for (var e = [], t = 0; t < f.length; t++) f[t].initData && e.push(f[t].initData); return e }, requestKeySystemAccess: function(e) {! function i(a, e) { if (void 0 === navigator.requestMediaKeySystemAccess || "function" != typeof navigator.requestMediaKeySystemAccess) return void o.trigger(s.KEY_SYSTEM_ACCESS_COMPLETE, { error: "Insecure origins are not allowed" });! function(t) { var r = a[t].ks,
                                e = a[t].configs,
                                n = r.systemString;
                            n === A.default.PLAYREADY_KEYSTEM_STRING && "required" === e[0].persistentState && (n += ".recommendation"), navigator.requestMediaKeySystemAccess(n, e).then(function(e) { var t = "function" == typeof e.getConfiguration ? e.getConfiguration() : null,
                                    n = new S.default(r, t);
                                n.mksa = e, o.trigger(s.KEY_SYSTEM_ACCESS_COMPLETE, { data: n }) }).catch(function(e) {++t < a.length ? i(a, t) : o.trigger(s.KEY_SYSTEM_ACCESS_COMPLETE, { error: "Key system access denied! " + e.message }) }) }(e) }(e, 0) }, getKeySystem: function() { return l }, selectKeySystem: function(t) { t.mksa.createMediaKeys().then(function(e) { l = t.keySystem, d = e, i ? i.setMediaKeys(d).then(function() { o.trigger(s.INTERNAL_KEY_SYSTEM_SELECTED) }) : o.trigger(s.INTERNAL_KEY_SYSTEM_SELECTED) }).catch(function() { o.trigger(s.INTERNAL_KEY_SYSTEM_SELECTED, { error: "Error selecting keys system (" + t.keySystem.systemString + ")! Could not create MediaKeys -- TODO" }) }) }, setMediaElement: function(e) { i !== e && (i && (i.removeEventListener("encrypted", a), i.setMediaKeys && i.setMediaKeys(null)), (i = e) && (i.addEventListener("encrypted", a), i.setMediaKeys && d && i.setMediaKeys(d))) }, setServerCertificate: function(e) { if (!l || !d) throw new Error("Can not set server certificate until you have selected a key system");
                    d.setServerCertificate(e).then(function() { u.info("DRM: License server certificate successfully updated."), o.trigger(s.SERVER_CERTIFICATE_UPDATED) }).catch(function(e) { o.trigger(s.SERVER_CERTIFICATE_UPDATED, { error: new y.default(v.default.SERVER_CERTIFICATE_UPDATED_ERROR_CODE, v.default.SERVER_CERTIFICATE_UPDATED_ERROR_MESSAGE + e.name) }) }) }, createKeySession: function(e, t, n) { if (!l || !d) throw new Error("Can not create sessions until you have selected a key system"); var r = d.createSession(n),
                        i = _(r, e, n),
                        a = this.getKeySystem().systemString === A.default.CLEARKEY_KEYSTEM_STRING && (e || t && t.clearkeys) ? "keyids" : "cenc";
                    r.generateRequest(a, e).then(function() { u.debug("DRM: Session created.  SessionID = " + i.getSessionID()), o.trigger(s.KEY_SESSION_CREATED, { data: i }) }).catch(function(e) { p(i), o.trigger(s.KEY_SESSION_CREATED, { data: null, error: new y.default(v.default.KEY_SESSION_CREATED_ERROR_CODE, v.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Error generating key request -- " + e.name) }) }) }, updateKeySession: function(t, e) { var n = t.session;
                    c.isClearKey(l) && (e = e.toJWK()), n.update(e).catch(function(e) { o.trigger(s.KEY_ERROR, { data: new y.default(v.default.MEDIA_KEYERR_CODE, "Error sending update() message! " + e.name, t) }) }) }, loadKeySession: function(t, e, n) { if (!l || !d) throw new Error("Can not load sessions until you have selected a key system"); for (var r = 0; r < f.length; r++)
                        if (t === f[r].sessionId) return void u.warn("DRM: Ignoring session ID because we have already seen it!");
                    var i = d.createSession(n),
                        a = _(i, e, n, t);
                    i.load(t).then(function(e) { e ? (u.debug("DRM: Session loaded.  SessionID = " + a.getSessionID()), o.trigger(s.KEY_SESSION_CREATED, { data: a })) : (p(a), o.trigger(s.KEY_SESSION_CREATED, { data: null, error: new y.default(v.default.KEY_SESSION_CREATED_ERROR_CODE, v.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Could not load session! Invalid Session ID (" + t + ")") })) }).catch(function(e) { p(a), o.trigger(s.KEY_SESSION_CREATED, { data: null, error: new y.default(v.default.KEY_SESSION_CREATED_ERROR_CODE, v.default.KEY_SESSION_CREATED_ERROR_MESSAGE + "Could not load session (" + t + ")! " + e.name) }) }) }, removeKeySession: function(t) { t.session.remove().then(function() { u.debug("DRM: Session removed.  SessionID = " + t.getSessionID()), o.trigger(s.KEY_SESSION_REMOVED, { data: t.getSessionID() }) }, function(e) { o.trigger(s.KEY_SESSION_REMOVED, { data: null, error: "Error removing session (" + t.getSessionID() + "). " + e.name }) }) }, closeKeySession: function(t) { h(t).catch(function(e) { p(t), o.trigger(s.KEY_SESSION_CLOSED, { data: null, error: "Error closing session (" + t.getSessionID() + ") " + e.name }) }) }, stop: function() { for (var e = void 0, t = 0; t < f.length; t++)(e = f[t]).getUsable() || h(e).catch(function() { p(e) }) }, reset: function() { var n = f.length,
                        r = void 0;
                    0 !== n ? function() { for (var t = function(e) { p(e), 0 === f.length && (i ? (i.removeEventListener("encrypted", a), i.setMediaKeys(null).then(function() { o.trigger(s.TEARDOWN_COMPLETE) })) : o.trigger(s.TEARDOWN_COMPLETE)) }, e = 0; e < n; e++) ! function(e) { r.session.closed.then(function() { t(e) }), h(r).catch(function() { t(e) }) }(r = f[e]) }() : o.trigger(s.TEARDOWN_COMPLETE) } }, u = n.getLogger(r), f = [], c = (d = i = l = null, E.default)(t).getInstance(), a = { handleEvent: function(e) { switch (e.type) {
                        case "encrypted":
                            var t;
                            e.initData && (t = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData, o.trigger(s.NEED_KEY, { key: new m.default(t, e.initDataType) })) } } }, r }
        i.__dashjs_factory_name = "ProtectionModel_21Jan2015", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 110: 110, 165: 165, 170: 170, 179: 179, 181: 181, 184: 184, 226: 226 }], 173: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var m = r(e(165)),
            v = r(e(184)),
            y = r(e(226)),
            T = r(e(170)),
            S = r(e(179)),
            A = r(e(182)),
            I = r(e(181));

        function i(e) { e = e || {}; var t = this.context,
                p = e.eventBus,
                g = e.events,
                n = e.debug,
                _ = e.api,
                r = void 0,
                u = void 0,
                i = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                a = void 0,
                E = void 0;

            function o() { try { for (var e = 0; e < c.length; e++) s(c[e]);
                    i && i.removeEventListener(_.needkey, a), p.trigger(g.TEARDOWN_COMPLETE) } catch (e) { p.trigger(g.TEARDOWN_COMPLETE, { error: "Error tearing down key sessions and MediaKeys! -- " + e.message }) } }

            function s(e) { var t = e.session;
                t.removeEventListener(_.error, e), t.removeEventListener(_.message, e), t.removeEventListener(_.ready, e), t.removeEventListener(_.close, e); for (var n = 0; n < c.length; n++)
                    if (c[n] === e) { c.splice(n, 1); break }
                t[_.release]() }

            function h() {
                function e() { i.removeEventListener("loadedmetadata", t), i[_.setMediaKeys](d), p.trigger(g.VIDEO_ELEMENT_SELECTED) } var t = null;
                1 <= i.readyState ? e() : (t = e.bind(this), i.addEventListener("loadedmetadata", t)) } return r = { getAllInitData: function() { for (var e = [], t = 0; t < c.length; t++) e.push(c[t].initData); return e }, requestKeySystemAccess: function(e) { for (var t = !1, n = 0; n < e.length; n++)
                        for (var r = e[n].ks.systemString, i = e[n].configs, a = null, o = null, s = 0; s < i.length; s++) { var u = i[s].audioCapabilities,
                                l = i[s].videoCapabilities; if (u && 0 !== u.length) { a = []; for (var d = 0; d < u.length; d++) window[_.MediaKeys].isTypeSupported(r, u[d].contentType) && a.push(u[d]) } if (l && 0 !== l.length) { o = []; for (var f = 0; f < l.length; f++) window[_.MediaKeys].isTypeSupported(r, l[f].contentType) && o.push(l[f]) } if (!(!a && !o || a && 0 === a.length || o && 0 === o.length)) { t = !0; var c = new A.default(a, o),
                                    h = E.getKeySystemBySystemString(r);
                                p.trigger(g.KEY_SYSTEM_ACCESS_COMPLETE, { data: new I.default(h, c) }); break } }
                    t || p.trigger(g.KEY_SYSTEM_ACCESS_COMPLETE, { error: "Key system access denied! -- No valid audio/video content configurations detected!" }) }, getKeySystem: function() { return l }, selectKeySystem: function(e) { try { d = e.mediaKeys = new window[_.MediaKeys](e.keySystem.systemString), l = e.keySystem, f = e, i && h(), p.trigger(g.INTERNAL_KEY_SYSTEM_SELECTED) } catch (e) { p.trigger(g.INTERNAL_KEY_SYSTEM_SELECTED, { error: "Error selecting keys system (" + l.systemString + ")! Could not create MediaKeys -- TODO" }) } }, setMediaElement: function(e) { i !== e && (i && i.removeEventListener(_.needkey, a), (i = e) && (i.addEventListener(_.needkey, a), d && h())) }, createKeySession: function(e, t, n, r) { if (!l || !d || !f) throw new Error("Can not create sessions until you have selected a key system"); var i = null; if (f.ksConfiguration.videoCapabilities && 0 < f.ksConfiguration.videoCapabilities.length && (i = f.ksConfiguration.videoCapabilities[0]), null === i && f.ksConfiguration.audioCapabilities && 0 < f.ksConfiguration.audioCapabilities.length && (i = f.ksConfiguration.audioCapabilities[0]), null === i) throw new Error("Can not create sessions for unknown content types."); var a = i.contentType,
                        o = d.createSession(a, new Uint8Array(e), r ? new Uint8Array(r) : null),
                        s = { session: o, initData: e, getSessionID: function() { return this.session.sessionId }, getExpirationTime: function() { return NaN }, getSessionType: function() { return "temporary" }, handleEvent: function(e) { switch (e.type) {
                                    case _.error:
                                        p.trigger(g.KEY_ERROR, { data: new y.default(T.default.MEDIA_KEYERR_CODE, "KeyError", this) }); break;
                                    case _.message:
                                        var t = ArrayBuffer.isView(e.message) ? e.message.buffer : e.message;
                                        p.trigger(g.INTERNAL_KEY_MESSAGE, { data: new S.default(this, t, e.destinationURL) }); break;
                                    case _.ready:
                                        u.debug("DRM: Key added."), p.trigger(g.KEY_ADDED); break;
                                    case _.close:
                                        u.debug("DRM: Session closed.  SessionID = " + this.getSessionID()), p.trigger(g.KEY_SESSION_CLOSED, { data: this.getSessionID() }) } } };
                    o.addEventListener(_.error, s), o.addEventListener(_.message, s), o.addEventListener(_.ready, s), o.addEventListener(_.close, s), c.push(s), u.debug("DRM: Session created.  SessionID = " + s.getSessionID()), p.trigger(g.KEY_SESSION_CREATED, { data: s }) }, updateKeySession: function(e, t) { var n = e.session;
                    E.isClearKey(l) ? n.update(new Uint8Array(t.toJWK())) : n.update(new Uint8Array(t)) }, closeKeySession: s, setServerCertificate: function() {}, loadKeySession: function() {}, removeKeySession: function() {}, stop: o, reset: o }, u = n.getLogger(r), c = [], E = (f = d = l = i = null, m.default)(t).getInstance(), a = { handleEvent: function(e) { switch (e.type) {
                        case _.needkey:
                            var t;
                            e.initData && (t = ArrayBuffer.isView(e.initData) ? e.initData.buffer : e.initData, p.trigger(g.NEED_KEY, { key: new v.default(t, "cenc") })) } } }, r }
        i.__dashjs_factory_name = "ProtectionModel_3Feb2014", n.default = dashjs.FactoryMaker.getClassFactory(i), t.exports = n.default }, { 165: 165, 170: 170, 179: 179, 181: 181, 182: 182, 184: 184, 226: 226 }], 174: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var o = r(e(180)),
            s = r(e(178));

        function i() { return { getServerURLFromMessage: function(e) { return e }, getHTTPMethod: function() { return "POST" }, getResponseType: function() { return "json" }, getLicenseMessage: function(e) { if (!e.hasOwnProperty("keys")) return null; for (var t = [], n = 0; n < e.keys.length; n++) { var r = e.keys[n],
                            i = r.kid.replace(/=/g, ""),
                            a = r.k.replace(/=/g, "");
                        t.push(new o.default(i, a)) } return new s.default(t) }, getErrorResponse: function(e) { return String.fromCharCode.apply(null, new Uint8Array(e)) } } }
        i.__dashjs_factory_name = "ClearKey", n.default = dashjs.FactoryMaker.getSingletonFactory(i), t.exports = n.default }, { 178: 178, 180: 180 }], 175: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(110),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var n = (e = e || {}).BASE64,
                r = {};
            r[a.default.WIDEVINE_KEYSTEM_STRING] = { responseType: "json", getLicenseMessage: function(e) { return n.decodeArray(e.license) }, getErrorResponse: function(e) { return e } }, r[a.default.PLAYREADY_KEYSTEM_STRING] = { responseType: "arraybuffer", getLicenseMessage: function(e) { return e }, getErrorResponse: function(e) { return String.fromCharCode.apply(null, new Uint8Array(e)) } }; return { getServerURLFromMessage: function(e) { return e }, getHTTPMethod: function() { return "POST" }, getResponseType: function(e) { return r[e].responseType }, getLicenseMessage: function(e, t) { return function() { if (!n || !n.hasOwnProperty("decodeArray")) throw new Error("Missing config parameter(s)") }(), r[t].getLicenseMessage(e) }, getErrorResponse: function(e, t) { return r[t].getErrorResponse(e) } } }
        o.__dashjs_factory_name = "DRMToday", n.default = dashjs.FactoryMaker.getSingletonFactory(o), t.exports = n.default }, { 110: 110 }], 176: [function(e, t, n) { "use strict";

        function r() { var g = "http://schemas.xmlsoap.org/soap/envelope/";

            function _(e) { var t = String.fromCharCode.apply(null, new Uint8Array(e)); return decodeURIComponent(escape(t)) } return { getServerURLFromMessage: function(e) { return e }, getHTTPMethod: function() { return "POST" }, getResponseType: function() { return "arraybuffer" }, getLicenseMessage: function(e) { return function(e) { if (window.DOMParser) { var t = _(e),
                                n = (new window.DOMParser).parseFromString(t, "text/xml"),
                                r = n ? n.getElementsByTagNameNS(g, "Envelope")[0] : null,
                                i = r ? r.getElementsByTagNameNS(g, "Body")[0] : null; if (i ? i.getElementsByTagNameNS(g, "Fault")[0] : null) return null } return e }.call(this, e) }, getErrorResponse: function(e) { return function(e) { var t = "",
                            n = "",
                            r = "",
                            i = -1,
                            a = -1; if (window.DOMParser) { var o = _(e),
                                s = (new window.DOMParser).parseFromString(o, "text/xml"),
                                u = s ? s.getElementsByTagNameNS(g, "Envelope")[0] : null,
                                l = u ? u.getElementsByTagNameNS(g, "Body")[0] : null,
                                d = l ? l.getElementsByTagNameNS(g, "Fault")[0] : null,
                                f = d ? d.getElementsByTagName("detail")[0] : null,
                                c = f ? f.getElementsByTagName("Exception")[0] : null,
                                h = null; if (null === d) return o;
                            t = (h = d.getElementsByTagName("faultstring")[0].firstChild) ? h.nodeValue : null, null !== c && (n = (h = c.getElementsByTagName("StatusCode")[0]) ? h.firstChild.nodeValue : null, i = (r = (h = c.getElementsByTagName("Message")[0]) ? h.firstChild.nodeValue : null) ? r.lastIndexOf("[") + 1 : -1, a = r ? r.indexOf("]") : -1, r = r ? r.substring(i, a) : "") } var p = "code: " + n + ", name: " + t; return r && (p += ", message: " + r), p }.call(this, e) } } }
        Object.defineProperty(n, "__esModule", { value: !0 }), r.__dashjs_factory_name = "PlayReady", n.default = dashjs.FactoryMaker.getSingletonFactory(r), t.exports = n.default }, {}], 177: [function(e, t, n) { "use strict";

        function r() { return { getServerURLFromMessage: function(e) { return e }, getHTTPMethod: function() { return "POST" }, getResponseType: function() { return "arraybuffer" }, getLicenseMessage: function(e) { return e }, getErrorResponse: function(e) { return String.fromCharCode.apply(null, new Uint8Array(e)) } } }
        Object.defineProperty(n, "__esModule", { value: !0 }), r.__dashjs_factory_name = "Widevine", n.default = dashjs.FactoryMaker.getSingletonFactory(r), t.exports = n.default }, {}], 178: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "toJWK", value: function() { for (var e = void 0, t = this.keyPairs.length, n = { keys: [] }, e = 0; e < t; e++) { var r = { kty: "oct", alg: "A128KW", kid: this.keyPairs[e].keyID, k: this.keyPairs[e].key };
                    n.keys.push(r) }
                this.type && (n.type = this.type); var i = JSON.stringify(n),
                    a = i.length,
                    o = new ArrayBuffer(a),
                    s = new Uint8Array(o); for (e = 0; e < a; e++) s[e] = i.charCodeAt(e); return o } }]), a);

        function a(e, t) { if (! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a), t && "persistent" !== t && "temporary" !== t) throw new Error("Invalid ClearKey key set type!  Must be one of 'persistent' or 'temporary'");
            this.keyPairs = e, this.type = t }
        n.default = i, t.exports = n.default }, {}], 179: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n, r, i) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.sessionToken = t, this.message = n, this.defaultURL = r, this.messageType = i || "license-request" }, t.exports = n.default }, {}], 180: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.keyID = t, this.key = n }, t.exports = n.default }, {}], 181: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.keySystem = t, this.ksConfiguration = n }, t.exports = n.default }, {}], 182: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n, r, i, a) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.initDataTypes = ["cenc"], t && t.length && (this.audioCapabilities = t), n && n.length && (this.videoCapabilities = n), this.distinctiveIdentifier = r, this.persistentState = i, this.sessionTypes = a }, t.exports = n.default }, {}], 183: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.contentType = t, this.robustness = n }, t.exports = n.default }, {}], 184: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.initData = t, this.initDataType = n }, t.exports = n.default }, {}], 185: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() { var o = [],
                s = 0,
                u = 0; return { push: function(e, t) { var n = t && t.droppedVideoFrames ? t.droppedVideoFrames : 0,
                        r = t && t.totalVideoFrames ? t.totalVideoFrames : 0,
                        i = n - s;
                    s = n; var a = r - u;
                    u = r, isNaN(e) || (o[e] ? (o[e].droppedVideoFrames += i, o[e].totalVideoFrames += a) : o[e] = { droppedVideoFrames: i, totalVideoFrames: a }) }, getFrameHistory: function() { return o }, reset: function(e) { o = [], s = e.droppedVideoFrames, u = e.totalVideoFrames } } }
        o.__dashjs_factory_name = "DroppedFramesHistory"; var s = a.default.getClassFactory(o);
        n.default = s, t.exports = n.default }, { 47: 47 }], 186: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var t = (e = e || {}).abrController,
                n = e.switchHistory,
                r = e.droppedFramesHistory,
                i = e.currentRequest,
                a = e.useBufferOccupancyABR,
                o = e.streamProcessor ? e.streamProcessor.getScheduleController() : null,
                s = e.streamProcessor ? e.streamProcessor.getRepresentationInfo() : null;

            function u() { return s ? s.mediaInfo : null } return { getMediaType: function() { var e = u(); return e ? e.type : null }, getMediaInfo: u, getDroppedFramesHistory: function() { return r }, getCurrentRequest: function() { return i }, getSwitchHistory: function() { return n }, getStreamInfo: function() { var e = u(); return e ? e.streamInfo : null }, getScheduleController: function() { return o }, getAbrController: function() { return t }, getRepresentationInfo: function() { return s }, useBufferOccupancyABR: function() { return a } } }
        o.__dashjs_factory_name = "RulesContext", n.default = a.default.getClassFactory(o), t.exports = n.default }, { 47: 47 }], 187: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r },
            o = { DEFAULT: .5, STRONG: 1, WEAK: 0 };

        function s(e, t, n) { var r; return { quality: void 0 === e ? -1 : e, reason: void 0 === t ? null : t, priority: (r = n) !== o.DEFAULT && r !== o.STRONG && r !== o.WEAK ? o.DEFAULT : r } }
        s.__dashjs_factory_name = "SwitchRequest"; var u = a.default.getClassFactory(s);
        u.NO_CHANGE = -1, u.PRIORITY = o, a.default.updateClassFactory(s.__dashjs_factory_name, u), n.default = u, t.exports = n.default }, { 47: 47 }], 188: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            u = r(e(187));

        function a() { var o = [],
                s = []; return { push: function(e) { e.newValue === u.default.NO_CHANGE && (e.newValue = e.oldValue), o[e.oldValue] || (o[e.oldValue] = { noDrops: 0, drops: 0, dropSize: 0 }); var t, n = e.newValue - e.oldValue,
                        r = n < 0 ? 1 : 0,
                        i = r ? -n : 0,
                        a = r ? 0 : 1;
                    o[e.oldValue].drops += r, o[e.oldValue].dropSize += i, o[e.oldValue].noDrops += a, s.push({ idx: e.oldValue, noDrop: a, drop: r, dropSize: i }), 8 < s.length && (t = s.shift(), o[t.idx].drops -= t.drop, o[t.idx].dropSize -= t.dropSize, o[t.idx].noDrops -= t.noDrop) }, getSwitchRequests: function() { return o }, reset: function() { o = [], s = [] } } }
        a.__dashjs_factory_name = "SwitchRequestHistory"; var o = i.default.getClassFactory(a);
        n.default = o, t.exports = n.default }, { 187: 187, 47: 47 }], 189: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var y = r(e(108)),
            i = r(e(47));

        function a(e) { var s = 3,
                u = 4,
                l = 4,
                d = 1.3,
                f = 1.3,
                c = (e = e || {}).settings,
                h = void 0,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0;

            function m(e, t, n, r) { var i = Math.pow(.5, n / r.fast);
                e.fastEstimate = (1 - i) * t + i * e.fastEstimate; var a = Math.pow(.5, n / r.slow);
                e.slowEstimate = (1 - a) * t + a * e.slowEstimate, e.totalWeight += n }

            function n(e, t, n) { return c.get().streaming.abr.movingAverageMethod !== y.default.MOVING_AVERAGE_SLIDING_WINDOW ? function(e, t) { var n = e ? E.throughputHalfLife : E.latencyHalfLife,
                        r = e ? g[t] : _[t]; if (!r || r.totalWeight <= 0) return NaN; var i = r.fastEstimate / (1 - Math.pow(.5, r.totalWeight / n.fast)),
                        a = r.slowEstimate / (1 - Math.pow(.5, r.totalWeight / n.slow)); return e ? Math.min(i, a) : Math.max(i, a) }(e, t) : (a = function(e, t, n) { var r = void 0,
                        i = void 0,
                        i = e ? (r = h[t], n ? s : u) : (r = p[t], l); if (r) { if (i >= r.length) i = r.length;
                        else if (e)
                            for (var a = 1; a < i; ++a) { var o = r[r.length - a] / r[r.length - a - 1]; if ((f <= o || o <= 1 / d) && (i += 1) === r.length) break } } else i = 0; return i }(r = e, i = t, n), o = (r ? h : p)[i], 0 !== a && o && 0 !== o.length ? (o = o.slice(-a)).reduce(function(e, t) { return e + t }) / o.length : NaN); var r, i, a, o }

            function r(e, t) { return n(!0, e, t) }

            function v(e) { h[e] = h[e] || [], p[e] = p[e] || [], g[e] = g[e] || { fastEstimate: 0, slowEstimate: 0, totalWeight: 0 }, _[e] = _[e] || { fastEstimate: 0, slowEstimate: 0, totalWeight: 0 } }

            function t() { h = {}, p = {}, g = {}, _ = {} } var i = { push: function(e, t, n) { if (t.trace && t.trace.length) { var r, i, a, o = t.tresponse.getTime() - t.trequest.getTime() || 1,
                            s = t._tfinish.getTime() - t.tresponse.getTime() || 1,
                            u = t.trace.reduce(function(e, t) { return e + t.b[0] }, 0),
                            l = void 0,
                            l = c.get().streaming.lowLatencyEnabled ? t.trace.reduce(function(e, t) { return e + t.d }, 0) : n ? s : o + s,
                            d = Math.round(8 * u / l); if (v(e), a = s, (i = e) === y.default.VIDEO ? a < c.get().streaming.cacheLoadThresholds[y.default.VIDEO] : i === y.default.AUDIO && a < c.get().streaming.cacheLoadThresholds[y.default.AUDIO]) { if (0 < h[e].length && !h[e].hasCachedEntries) return;
                            h[e].hasCachedEntries = !0 } else h[e] && h[e].hasCachedEntries && (delete h[r = e], delete p[r], delete g[r], delete _[r], v(r));
                        h[e].push(d), 20 < h[e].length && h[e].shift(), p[e].push(o), 20 < p[e].length && p[e].shift(), m(g[e], d, .001 * s, E.throughputHalfLife), m(_[e], o, 1, E.latencyHalfLife) } }, getAverageThroughput: r, getSafeAverageThroughput: function(e, t) { var n = r(e, t); return isNaN(n) || (n *= c.get().streaming.abr.bandwidthSafetyFactor), n }, getAverageLatency: function(e) { return n(!1, e) }, reset: t }; return E = { throughputHalfLife: { fast: 3, slow: 8 }, latencyHalfLife: { fast: 1, slow: 2 } }, t(), i }
        a.__dashjs_factory_name = "ThroughputHistory", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 47: 47 }], 190: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var l = r(e(196)),
            d = r(e(194)),
            f = r(e(191)),
            c = r(e(193)),
            h = r(e(195)),
            p = r(e(192)),
            i = r(e(47)),
            g = r(e(187)),
            _ = "qualitySwitchRules",
            E = "abandonFragmentRules";

        function a(e) { e = e || {}; var s = this.context,
                t = e.mediaPlayerModel,
                n = e.dashMetrics,
                r = e.settings,
                i = void 0,
                a = void 0;

            function o(e) { return e.filter(function(e) { return e.quality > g.default.NO_CHANGE }) }

            function u(e) { var t, n = {},
                    r = void 0,
                    i = void 0,
                    a = void 0,
                    o = void 0; if (0 !== e.length) { for (n[g.default.PRIORITY.STRONG] = g.default.NO_CHANGE, n[g.default.PRIORITY.WEAK] = g.default.NO_CHANGE, n[g.default.PRIORITY.DEFAULT] = g.default.NO_CHANGE, r = 0, t = e.length; r < t; r += 1)(i = e[r]).quality !== g.default.NO_CHANGE && (n[i.priority] = n[i.priority] > g.default.NO_CHANGE ? Math.min(n[i.priority], i.quality) : i.quality); return n[g.default.PRIORITY.WEAK] !== g.default.NO_CHANGE && (a = n[g.default.PRIORITY.WEAK]), n[g.default.PRIORITY.DEFAULT] !== g.default.NO_CHANGE && (a = n[g.default.PRIORITY.DEFAULT]), n[g.default.PRIORITY.STRONG] !== g.default.NO_CHANGE && (a = n[g.default.PRIORITY.STRONG]), a !== g.default.NO_CHANGE && (o = a), (0, g.default)(s).create(o) } } return { initialize: function() { i = [], a = [], r.get().streaming.abr.useDefaultABRRules && (i.push((0, p.default)(s).create({ dashMetrics: n, mediaPlayerModel: t, settings: r })), i.push((0, l.default)(s).create({ dashMetrics: n })), i.push((0, d.default)(s).create({ dashMetrics: n })), i.push((0, h.default)(s).create()), i.push((0, c.default)(s).create()), a.push((0, f.default)(s).create({ dashMetrics: n, mediaPlayerModel: t, settings: r }))), t.getABRCustomRules().forEach(function(e) { e.type === _ && i.push(e.rule(s).create()), e.type === E && a.push(e.rule(s).create()) }) }, reset: function() {
                    [i, a].forEach(function(e) { e && e.length && e.forEach(function(e) { return e.reset && e.reset() }) }), i = [], a = [] }, getMaxQuality: function(t) { return u(o(i.map(function(e) { return e.getMaxIndex(t) }))) || (0, g.default)(s).create() }, shouldAbandonFragment: function(t) { return u(o(a.map(function(e) { return e.shouldAbandon(t) }))) || (0, g.default)(s).create() } } }
        a.__dashjs_factory_name = "ABRRulesCollection"; var o = i.default.getClassFactory(a);
        o.QUALITY_SWITCH_RULES = _, o.ABANDON_FRAGMENT_RULES = E, i.default.updateSingletonFactory(a.__dashjs_factory_name, o), n.default = o, t.exports = n.default }, { 187: 187, 191: 191, 192: 192, 193: 193, 194: 194, 195: 195, 196: 196, 47: 47 }], 191: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var R = r(e(187)),
            i = r(e(47)),
            a = r(e(45));

        function b(e) { e = e || {}; var E = this.context,
                m = e.mediaPlayerModel,
                v = e.dashMetrics,
                y = e.settings,
                t = void 0,
                T = void 0,
                S = void 0,
                A = void 0,
                I = void 0;

            function n() { S = {}, A = {}, I = [] } return t = { shouldAbandon: function(e) { var t = (0, R.default)(E).create(R.default.NO_CHANGE, { name: b.__dashjs_factory_name }); if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("getCurrentRequest") && e.hasOwnProperty("getRepresentationInfo") && e.hasOwnProperty("getAbrController"))) return t; var n, r, i, a, o = e.getMediaInfo(),
                        s = e.getMediaType(),
                        u = e.getCurrentRequest(); if (!isNaN(u.index)) { if (i = s, a = u.index, S[i] = S[i] || {}, S[i][a] = S[i][a] || {}, m.getStableBufferTime() < v.getCurrentBufferLevel(s)) return t; var l = S[s][u.index]; if (null === l || null === u.firstByteDate || A.hasOwnProperty(l.id)) return t; if (void 0 === l.firstByteTime && (I[s] = [], l.firstByteTime = u.firstByteDate.getTime(), l.segmentDuration = u.duration, l.bytesTotal = u.bytesTotal, l.id = u.index), l.bytesLoaded = u.bytesLoaded, l.elapsedTime = (new Date).getTime() - l.firstByteTime, 0 < l.bytesLoaded && 0 < l.elapsedTime && (n = s, r = Math.round(8 * l.bytesLoaded / l.elapsedTime), I[n] = I[n] || [], I[n].push(r)), 5 <= I[s].length && 500 < l.elapsedTime && l.bytesLoaded < l.bytesTotal) { var d, f, c, h, p, g, _ = I[s].reduce(function(e, t) { return e + t }, 0); if (l.measuredBandwidthInKbps = Math.round(_ / I[s].length), l.estimatedTimeOfDownload = +(8 * l.bytesTotal / l.measuredBandwidthInKbps / 1e3).toFixed(2), l.estimatedTimeOfDownload < 1.8 * l.segmentDuration || 0 === e.getRepresentationInfo().quality) return t;
                            A.hasOwnProperty(l.id) || (d = e.getAbrController(), f = l.bytesTotal - l.bytesLoaded, c = d.getBitrateList(o), h = d.getQualityForBitrate(o, l.measuredBandwidthInKbps * y.get().streaming.abr.bandwidthSafetyFactor), g = void 0 !== (p = d.getMinAllowedIndexFor(s)) ? Math.max(p, h) : h, l.bytesTotal * c[g].bitrate / c[d.getQualityFor(s)].bitrate < f && (t.quality = g, t.reason.throughput = l.measuredBandwidthInKbps, t.reason.fragmentID = l.id, A[l.id] = l, T.debug("[" + s + "] frag id", l.id, " is asking to abandon and switch to quality to ", g, " measured bandwidth was", l.measuredBandwidthInKbps), delete S[s][l.id])) } else l.bytesLoaded === l.bytesTotal && delete S[s][l.id] } return t }, reset: n }, T = (0, a.default)(E).getInstance().getLogger(t), n(), t }
        b.__dashjs_factory_name = "AbandonRequestsRule", n.default = i.default.getClassFactory(b), t.exports = n.default }, { 187: 187, 45: 45, 47: 47 }], 192: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var h = r(e(109)),
            x = r(e(187)),
            i = r(e(47)),
            p = e(242),
            g = r(e(46)),
            _ = r(e(54)),
            E = r(e(45));

        function a(e) { e = e || {}; var b = this.context,
                D = e.dashMetrics,
                o = e.mediaPlayerModel,
                t = (0, g.default)(b).getInstance(),
                n = void 0,
                M = void 0,
                N = void 0;

            function s(e, t, r) { var n = r.reduce(function(e, t, n) { return t > r[e] ? n : e }, 0); if (0 === n) return null; var i = Math.max(e, 10 + 2 * t.length),
                    a = (r[n] - 1) / (i / 10 - 1); return { gp: a, Vp: 10 / a } }

            function C(e) { var t = {},
                    n = e.getMediaInfo().bitrateList.map(function(e) { return e.bandwidth }),
                    r = (r = n.map(function(e) { return Math.log(e) })).map(function(e) { return e - r[0] + 1 }),
                    i = o.getStableBufferTime(),
                    a = s(i, n, r); return a ? (t.state = 1, t.bitrates = n, t.utilities = r, t.stableBufferTime = i, t.Vp = a.Vp, t.gp = a.gp, t.lastQuality = 0, w(t)) : t.state = 0, t }

            function w(e) { e.placeholderBuffer = 0, e.mostAdvancedSegmentStart = NaN, e.lastSegmentWasReplacement = !1, e.lastSegmentStart = NaN, e.lastSegmentDurationS = NaN, e.lastSegmentRequestTimeMs = NaN, e.lastSegmentFinishTimeMs = NaN }

            function O(e, t) { var n, r, i, a = o.getStableBufferTime();
                e.stableBufferTime !== a && ((n = s(a, e.bitrates, e.utilities)).Vp === e.Vp && n.gp === e.gp || (i = (r = D.getCurrentBufferLevel(t)) + e.placeholderBuffer, i -= 10, i *= n.Vp / e.Vp, i += 10, e.stableBufferTime = a, e.Vp = n.Vp, e.gp = n.gp, e.placeholderBuffer = Math.max(0, i - r))) }

            function P(e, t) { return e.Vp * (e.utilities[t] + e.gp) }

            function L(e, t) { for (var n, r, i, a = e.bitrates[t], o = e.utilities[t], s = 0, u = t - 1; 0 <= u; --u) { e.utilities[u] < e.utilities[t] && (n = e.bitrates[u], r = e.utilities[u], i = e.Vp * (e.gp + (a * r - n * o) / (a - n)), s = Math.max(s, i)) } return s }

            function r() { for (var e in N) N.hasOwnProperty(e) && 2 === N[e].state && (N[e].placeholderBuffer = 0) }

            function i() { for (var e in N) { var t;!N.hasOwnProperty(e) || 0 !== (t = N[e]).state && (t.state = 1, w(t)) } }

            function a(e) { var t, n;
                e && e.chunk && e.chunk.mediaInfo && ((t = N[e.chunk.mediaInfo.type]) && 0 !== t.state && (n = e.chunk.start, isNaN(t.mostAdvancedSegmentStart) || n > t.mostAdvancedSegmentStart ? (t.mostAdvancedSegmentStart = n, t.lastSegmentWasReplacement = !1) : t.lastSegmentWasReplacement = !0, t.lastSegmentStart = n, t.lastSegmentDurationS = e.chunk.duration, t.lastQuality = e.chunk.quality, l(t, e.chunk.mediaInfo.type))) }

            function u(e) { var t;
                e && e.metric === h.default.HTTP_REQUEST && e.value && e.value.type === p.HTTPRequest.MEDIA_SEGMENT_TYPE && e.value.trace && e.value.trace.length && ((t = N[e.mediaType]) && 0 !== t.state && (t.lastSegmentRequestTimeMs = e.value.trequest.getTime(), t.lastSegmentFinishTimeMs = e.value._tfinish.getTime(), l(t, e.mediaType))) }

            function l(e, t) { var n, r, i;
                isNaN(e.lastSegmentStart) || isNaN(e.lastSegmentRequestTimeMs) || isNaN(e.placeholderBuffer) || (e.placeholderBuffer *= .99, isNaN(e.lastSegmentFinishTimeMs) || (n = D.getCurrentBufferLevel(t) + .001 * (e.lastSegmentFinishTimeMs - e.lastSegmentRequestTimeMs), r = P(e, e.lastQuality), i = Math.max(0, r - n), e.placeholderBuffer = Math.min(i, e.placeholderBuffer)), e.lastSegmentWasReplacement && !isNaN(e.lastSegmentDurationS) && (e.placeholderBuffer += e.lastSegmentDurationS), e.lastSegmentStart = NaN, e.lastSegmentRequestTimeMs = NaN) }

            function d(e) { var t;!e || (t = N[e.mediaType]) && 0 !== t.state && (t.abrQuality = e.newQuality) }

            function f(e) { var t, n, r, i;!e || (t = N[e.mediaType]) && 0 !== t.state && (n = D.getCurrentBufferLevel(e.mediaType), r = void 0, r = 0 < t.abrQuality ? L(t, t.abrQuality) : 10, i = Math.max(0, r - n), t.placeholderBuffer = Math.min(t.placeholderBuffer, i)) }

            function c() { N = {} } return n = { getMaxIndex: function(e) { var t = (0, x.default)(b).create(); if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("getScheduleController") && e.hasOwnProperty("getStreamInfo") && e.hasOwnProperty("getAbrController") && e.hasOwnProperty("useBufferOccupancyABR"))) return t; var n = e.getMediaInfo(),
                        r = e.getMediaType(),
                        i = e.getScheduleController(),
                        a = e.getStreamInfo(),
                        o = e.getAbrController(),
                        s = o.getThroughputHistory(),
                        u = a ? a.id : null,
                        l = a && a.manifestInfo && a.manifestInfo.isDynamic,
                        d = e.useBufferOccupancyABR(); if (t.reason = t.reason || {}, !d) return t;
                    i.setTimeToLoadDelay(0); var f, c, h, p = (c = (f = e).getMediaType(), (h = N[c]) ? 0 !== h.state && O(h, c) : (h = C(f), N[c] = h), h); if (0 === p.state) return t; var g, _, E, m, v = D.getCurrentBufferLevel(r),
                        y = s.getAverageThroughput(r, l),
                        T = s.getSafeAverageThroughput(r, l),
                        S = s.getAverageLatency(r),
                        A = void 0; if (t.reason.state = p.state, t.reason.throughput = y, t.reason.latency = S, isNaN(y)) return t; switch (p.state) {
                        case 1:
                            A = o.getQualityForBitrate(n, T, S), t.quality = A, t.reason.throughput = T, p.placeholderBuffer = Math.max(0, L(p, A) - v), p.lastQuality = A, !isNaN(p.lastSegmentDurationS) && v >= p.lastSegmentDurationS && (p.state = 2); break;
                        case 2:
                            g = p, _ = r, m = Date.now(), isNaN(g.lastSegmentFinishTimeMs) ? isNaN(g.lastCallTimeMs) || (E = .001 * (m - g.lastCallTimeMs), g.placeholderBuffer += Math.max(0, E)) : (E = .001 * (m - g.lastSegmentFinishTimeMs), g.placeholderBuffer += Math.max(0, E)), g.lastCallTimeMs = m, g.lastSegmentStart = NaN, g.lastSegmentRequestTimeMs = NaN, g.lastSegmentFinishTimeMs = NaN, O(g, _), A = function(e, t) { for (var n = e.bitrates.length, r = NaN, i = NaN, a = 0; a < n; ++a) { var o = (e.Vp * (e.utilities[a] + e.gp) - t) / e.bitrates[a];
                                    (isNaN(i) || i <= o) && (i = o, r = a) } return r }(p, v + p.placeholderBuffer); var I = o.getQualityForBitrate(n, T, S);
                            A > p.lastQuality && I < A && (A = Math.max(I, p.lastQuality)); var R = Math.max(0, v + p.placeholderBuffer - P(p, A));
                            R <= p.placeholderBuffer ? (p.placeholderBuffer -= R, R = 0) : (R -= p.placeholderBuffer, p.placeholderBuffer = 0, A < o.getTopQualityIndexFor(r, u) ? i.setTimeToLoadDelay(1e3 * R) : R = 0), t.quality = A, t.reason.throughput = y, t.reason.latency = S, t.reason.bufferLevel = v, t.reason.placeholderBuffer = p.placeholderBuffer, t.reason.delay = R, p.lastQuality = A; break;
                        default:
                            M.debug("BOLA ABR rule invoked in bad state."), t.quality = o.getQualityForBitrate(n, T, S), t.reason.state = p.state, t.reason.throughput = T, t.reason.latency = S, p.state = 1, w(p) } return t }, reset: function() { c(), t.off(_.default.BUFFER_EMPTY, r, n), t.off(_.default.PLAYBACK_SEEKING, i, n), t.off(_.default.MEDIA_FRAGMENT_LOADED, a, n), t.off(_.default.METRIC_ADDED, u, n), t.off(_.default.QUALITY_CHANGE_REQUESTED, d, n), t.off(_.default.FRAGMENT_LOADING_ABANDONED, f, n) } }, M = (0, E.default)(b).getInstance().getLogger(n), c(), t.on(_.default.BUFFER_EMPTY, r, n), t.on(_.default.PLAYBACK_SEEKING, i, n), t.on(_.default.MEDIA_FRAGMENT_LOADED, a, n), t.on(_.default.METRIC_ADDED, u, n), t.on(_.default.QUALITY_CHANGE_REQUESTED, d, n), t.on(_.default.FRAGMENT_LOADING_ABANDONED, f, n), n }
        a.__dashjs_factory_name = "BolaRule", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 109: 109, 187: 187, 242: 242, 45: 45, 46: 46, 47: 47, 54: 54 }], 193: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            d = r(e(187)),
            a = r(e(45));

        function o() { var u = this.context,
                e = void 0,
                l = void 0; return e = { getMaxIndex: function(e) { var t = (0, d.default)(u).create(); if (!e || !e.hasOwnProperty("getDroppedFramesHistory")) return t; var n = e.getDroppedFramesHistory(); if (n) { for (var r = n.getFrameHistory(), i = 0, a = 0, o = d.default.NO_CHANGE, s = 1; s < r.length; s++)
                            if (r[s] && (i = r[s].droppedVideoFrames, 375 < (a = r[s].totalVideoFrames) && .15 < i / a)) { o = s - 1, l.debug("index: " + o + " Dropped Frames: " + i + " Total Frames: " + a); break }
                        return (0, d.default)(u).create(o, { droppedFrames: i }) } return t } }, l = (0, a.default)(u).getInstance().getLogger(e), e }
        o.__dashjs_factory_name = "DroppedFramesRule", n.default = i.default.getClassFactory(o), t.exports = n.default }, { 187: 187, 45: 45, 47: 47 }], 194: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var s = r(e(46)),
            u = r(e(54)),
            i = r(e(47)),
            l = r(e(45)),
            E = r(e(187)),
            m = r(e(108)),
            v = r(e(109));

        function a(e) { e = e || {}; var c = .5,
                t = 2,
                h = this.context,
                n = (0, s.default)(h).getInstance(),
                p = e.dashMetrics,
                r = void 0,
                g = void 0,
                _ = void 0;

            function i() {
                (_ = {})[m.default.VIDEO] = { ignoreCount: t }, _[m.default.AUDIO] = { ignoreCount: t } }

            function a() { i() }

            function o(e) { isNaN(e.startTime) || e.mediaType !== m.default.AUDIO && e.mediaType !== m.default.VIDEO || 0 < _[e.mediaType].ignoreCount && _[e.mediaType].ignoreCount-- } return r = { getMaxIndex: function(e) { var t = (0, E.default)(h).create(); if (!e || !e.hasOwnProperty("getMediaType")) return t;! function() { if (!p || !p.hasOwnProperty("getCurrentBufferLevel") || !p.hasOwnProperty("getCurrentBufferState")) throw new Error(m.default.MISSING_CONFIG_ERROR) }(); var n, r, i, a, o, s, u, l = e.getMediaType(),
                        d = p.getCurrentBufferState(l),
                        f = e.getRepresentationInfo().fragmentDuration; return 0 < _[l].ignoreCount || !f || (d && d.state === v.default.BUFFER_EMPTY ? (g.debug("[" + l + "] Switch to index 0; buffer is empty."), t.quality = 0, t.reason = "InsufficientBufferRule: Buffer is empty") : (n = e.getMediaInfo(), i = (r = e.getAbrController()).getThroughputHistory(), a = p.getCurrentBufferLevel(l), o = i.getAverageThroughput(l), s = i.getAverageLatency(l), u = o * (a / f) * c, t.quality = r.getQualityForBitrate(n, u, s), t.reason = "InsufficientBufferRule: being conservative to avoid immediate rebuffering")), t }, reset: function() { i(), n.off(u.default.PLAYBACK_SEEKING, a, r), n.off(u.default.BYTES_APPENDED_END_FRAGMENT, o, r) } }, g = (0, l.default)(h).getInstance().getLogger(r), i(), n.on(u.default.PLAYBACK_SEEKING, a, r), n.on(u.default.BYTES_APPENDED_END_FRAGMENT, o, r), r }
        a.__dashjs_factory_name = "InsufficientBufferRule", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 187: 187, 45: 45, 46: 46, 47: 47, 54: 54 }], 195: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(45)),
            d = r(e(187));

        function o() { var u = this.context,
                e = void 0,
                l = void 0; return e = { getMaxIndex: function(e) { for (var t = e ? e.getSwitchHistory() : null, n = t ? t.getSwitchRequests() : [], r = 0, i = 0, a = 0, o = (0, d.default)(u).create(), s = 0; s < n.length; s++)
                        if (void 0 !== n[s] && (r += n[s].drops, i += n[s].noDrops, a += n[s].dropSize, 6 <= r + i && .075 < r / i)) { o.quality = 0 < s && 0 < n[s].drops ? s - 1 : s, o.reason = { index: o.quality, drops: r, noDrops: i, dropSize: a }, l.debug("Switch history rule index: " + o.quality + " samples: " + (r + i) + " drops: " + r); break }
                    return o } }, l = (0, a.default)(u).getInstance().getLogger(e), e }
        o.__dashjs_factory_name = "SwitchHistoryRule", n.default = i.default.getClassFactory(o), t.exports = n.default }, { 187: 187, 45: 45, 47: 47 }], 196: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(45)),
            _ = r(e(187)),
            E = r(e(108)),
            m = r(e(109));

        function o(e) { e = e || {}; var h = this.context,
                p = e.dashMetrics,
                t = void 0,
                g = void 0; return t = { getMaxIndex: function(e) { var t = (0, _.default)(h).create(); if (!(e && e.hasOwnProperty("getMediaInfo") && e.hasOwnProperty("getMediaType") && e.hasOwnProperty("useBufferOccupancyABR") && e.hasOwnProperty("getAbrController") && e.hasOwnProperty("getScheduleController"))) return t;! function() { if (!p || !p.hasOwnProperty("getCurrentBufferState")) throw new Error(E.default.MISSING_CONFIG_ERROR) }(); var n = e.getMediaInfo(),
                        r = e.getMediaType(),
                        i = p.getCurrentBufferState(r),
                        a = e.getScheduleController(),
                        o = e.getAbrController(),
                        s = e.getStreamInfo(),
                        u = s && s.manifestInfo ? s.manifestInfo.isDynamic : null,
                        l = o.getThroughputHistory(),
                        d = l.getSafeAverageThroughput(r, u),
                        f = l.getAverageLatency(r),
                        c = e.useBufferOccupancyABR(); return isNaN(d) || !i || c || o.getAbandonmentStateFor(r) !== m.default.ABANDON_LOAD && (i.state !== m.default.BUFFER_LOADED && !u || (t.quality = o.getQualityForBitrate(n, d, f), a.setTimeToLoadDelay(0), g.debug("[" + r + "] requesting switch to index: ", t.quality, "Average throughput", Math.round(d), "kbps"), t.reason = { throughput: d, latency: f })), t }, reset: function() {} }, g = (0, a.default)(h).getInstance().getLogger(t), t }
        o.__dashjs_factory_name = "ThroughputRule", n.default = i.default.getClassFactory(o), t.exports = n.default }, { 108: 108, 109: 109, 187: 187, 45: 45, 47: 47 }], 197: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var d = r(e(108)),
            i = r(e(47)),
            f = r(e(109));

        function a(e) { var a = (e = e || {}).dashMetrics,
                o = e.mediaPlayerModel,
                s = e.textController,
                u = e.abrController,
                l = e.settings;

            function n(e, t) { var n, r, i = NaN; return e && t ? i = e === d.default.FRAGMENTED_TEXT ? s.isTextEnabled() ? isNaN(t.fragmentDuration) ? (n = a.getCurrentSchedulingInfo(f.default.SCHEDULING_INFO)) ? n.duration : 0 : t.fragmentDuration : 0 : (r = t.mediaInfo.streamInfo, u.isPlayingAtTopQuality(r) ? r.manifestInfo.duration >= l.get().streaming.longFormContentDurationThreshold ? l.get().streaming.bufferTimeAtTopQualityLongForm : l.get().streaming.bufferTimeAtTopQuality : o.getStableBufferTime()) : i } return { execute: function(e, t) { return !e || !t || a.getCurrentBufferLevel(e) < n(e, t) }, getBufferTarget: n } }
        a.__dashjs_factory_name = "BufferLevelRule", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 108: 108, 109: 109, 47: 47 }], 198: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() { var G = 0;

            function r(e) { return "red" === e ? "rgb(255, 0, 0)" : "green" === e ? "rgb(0, 255, 0)" : "blue" === e ? "rgb(0, 0, 255)" : "cyan" === e ? "rgb(0, 255, 255)" : "magenta" === e ? "rgb(255, 0, 255)" : "yellow" === e ? "rgb(255, 255, 0)" : "white" === e ? "rgb(255, 255, 255)" : "black" === e ? "rgb(0, 0, 0)" : e }

            function j(e, t) { var n = e.videoHeight / 15; return t ? "font-size: " + n + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; color: " + (t.foreground ? r(t.foreground) : "rgb(255, 255, 255)") + "; font-style: " + (t.italics ? "italic" : "normal") + "; text-decoration: " + (t.underline ? "underline" : "none") + "; white-space: pre; background-color: " + (t.background ? r(t.background) : "transparent") + ";" : "font-size: " + n + "px; font-family: Menlo, Consolas, 'Cutive Mono', monospace; justify-content: flex-start; text-align: left; color: rgb(255, 255, 255); font-style: normal; white-space: pre; line-height: normal; font-weight: normal; text-decoration: none; width: 100%; display: flex;" } return { createHTMLCaptionsFromScreen: function(e, t, n, r) { for (var i = null, a = !1, o = -1, s = { start: t, end: n, spans: [] }, u = "style_cea608_white_black", l = {}, d = {}, f = [], c = void 0, h = void 0, c = 0; c < 15; ++c) { var p = r.rows[c],
                            g = "",
                            _ = null; if (!1 === p.isEmpty()) { var E = function(e) { for (var t = "", n = 0; n < e.length; ++n) { t += e[n].uchar } return t.length - t.replace(/^\s+/, "").length }(p.chars);
                            null === i && (i = { x: E, y1: c, y2: c + 1, p: [] }), E !== o && a && (i.p.push(s), s = { start: t, end: n, spans: [] }, i.y2 = c, i.name = "region_" + i.x + "_" + i.y1 + "_" + i.y2, !1 === l.hasOwnProperty(i.name) ? (f.push(i), l[i.name] = i) : l[i.name].p.contat(i.p), i = { x: E, y1: c, y2: c + 1, p: [] }); for (var m = 0; m < p.chars.length; ++m) { var v, y = p.chars[m],
                                    T = y.penState;
                                null !== _ && T.equals(_) || (0 < g.trim().length && (s.spans.push({ name: u, line: g, row: c }), g = ""), v = "style_cea608_" + T.foreground + "_" + T.background, T.underline && (v += "_underline"), T.italics && (v += "_italics"), d.hasOwnProperty(v) || (d[v] = JSON.parse(JSON.stringify(T))), _ = T, u = v), g += y.uchar }
                            0 < g.trim().length && s.spans.push({ name: u, line: g, row: c }), a = !0, o = E } else a = !1, o = -1, i && (i.p.push(s), s = { start: t, end: n, spans: [] }, i.y2 = c, i.name = "region_" + i.x + "_" + i.y1 + "_" + i.y2, !1 === l.hasOwnProperty(i.name) ? (f.push(i), l[i.name] = i) : l[i.name].p.contat(i.p), i = null) }
                    i && (i.p.push(s), i.y2 = c + 1, i.name = "region_" + i.x + "_" + i.y1 + "_" + i.y2, !1 === l.hasOwnProperty(i.name) ? (f.push(i), l[i.name] = i) : l[i.name].p.contat(i.p), i = null); var S, A = []; for (c = 0; c < f.length; ++c) { var I = f[c],
                            R = "sub_cea608_" + G++,
                            b = document.createElement("div");
                        b.id = R; var D = "left: " + 3.125 * (S = I).x + "%; top: " + 6.66 * S.y1 + "%; width: " + (100 - 3.125 * S.x) + "%; height: " + 6.66 * Math.max(S.y2 - 1 - S.y1, 1) + "%; align-items: flex-start; overflow: visible; -webkit-writing-mode: horizontal-tb;";
                        b.style.cssText = "position: absolute; margin: 0; display: flex; box-sizing: border-box; pointer-events: none;" + D; var M = document.createElement("div");
                        M.className = "paragraph bodyStyle", M.style.cssText = j(e); var N = document.createElement("div");
                        N.className = "cueUniWrapper", N.style.cssText = "unicode-bidi: normal; direction: ltr;"; for (var C = 0; C < I.p.length; ++C)
                            for (var w = I.p[C], O = 0, h = 0; h < w.spans.length; ++h) { var P, L, x, F, U = w.spans[h];
                                0 < U.line.length && (0 !== h && O != U.row && ((P = document.createElement("br")).className = "lineBreak", N.appendChild(P)), L = !1, O === U.row && (L = !0), O = U.row, x = d[U.name], (F = document.createElement("span")).className = "spanPadding " + U.name + " customSpanColor", F.style.cssText = j(e, x), 0 !== h && L ? h === w.spans.length - 1 ? F.textContent = U.line.replace(/\s+$/g, "") : F.textContent = U.line : 1 < w.spans.length && h < w.spans.length - 1 && U.row === w.spans[h + 1].row ? F.textContent = U.line.replace(/^\s+/g, "") : F.textContent = U.line.trim(), N.appendChild(F)) }
                        M.appendChild(N), b.appendChild(M); var k = { bodyStyle: ["%", 90] }; for (var B in d) d.hasOwnProperty(B) && (k[B] = ["%", 90]);
                        A.push({ type: "html", start: t, end: n, cueHTMLElement: b, cueID: R, cellResolution: [32, 15], isFromCEA608: !0, fontSize: k, lineHeight: {}, linePadding: {} }) } return A } } }
        o.__dashjs_factory_name = "EmbeddedTextHtmlRender", n.default = a.default.getSingletonFactory(o), t.exports = n.default }, { 47: 47 }], 199: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var m = r(e(108)),
            v = r(e(46)),
            y = r(e(54)),
            i = r(e(47)),
            T = r(e(214)),
            S = r(e(104)),
            A = r(e(201)),
            I = r(e(226)),
            R = r(e(51)),
            b = "NotFragmentedTextBufferController";

        function a(e) { e = e || {}; var r = this.context,
                t = (0, v.default)(r).getInstance(),
                i = (0, A.default)(r).getInstance(),
                a = e.errHandler,
                o = e.streamInfo,
                s = e.type,
                u = e.mimeType,
                l = e.fragmentModel,
                n = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                h = void 0,
                p = void 0;

            function g(e) { c = e }

            function _(e) { e.sender.getStreamId() !== o.id || e.sender.getType() !== s || e.error || null === p.extract(o.id, e.currentRepresentation.id) && (d = !1, t.trigger(y.default.INIT_FRAGMENT_NEEDED, { sender: n, streamId: o.id, mediaType: s, representationId: e.currentRepresentation.id })) }

            function E(e) { e.chunk.streamId === o.id && e.chunk.mediaInfo.type === s && e.chunk.bytes && (p.save(e.chunk), h.append(e.chunk), d = !0, t.trigger(y.default.STREAM_COMPLETED, { request: e.request })) } return n = { getBufferControllerType: function() { return b }, initialize: function(e) { g(e), p = (0, T.default)(r).getInstance() }, createBuffer: function(e) { var t, n = e[0]; try { return h = (0, S.default)(r).create(c, n), f || ((t = h.getBuffer()).hasOwnProperty(m.default.INITIALIZE) && t.initialize(u, o, e, l), f = !0), h } catch (e) { if (n && (n.isText || -1 !== n.codec.indexOf('codecs="stpp') || -1 !== n.codec.indexOf('codecs="wvtt'))) try { h = i.getTextSourceBuffer() } catch (e) { a.error(new I.default(R.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, R.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + s + " : " + e.message)) } else a.error(new I.default(R.default.MEDIASOURCE_TYPE_UNSUPPORTED_CODE, R.default.MEDIASOURCE_TYPE_UNSUPPORTED_MESSAGE + s)) } }, getType: function() { return s }, getBuffer: function() { return h }, getBufferLevel: function() { return 0 }, setMediaSource: g, getMediaSource: function() { return c }, getIsBufferingCompleted: function() { return d }, getIsPruningInProgress: function() { return !1 }, dischargePreBuffer: function() {}, appendInitSegment: function(e) { return null !== p.extract(o.id, e) }, getRangeAt: function() { return null }, reset: function(e) { t.off(y.default.DATA_UPDATE_COMPLETED, _, n), t.off(y.default.INIT_FRAGMENT_LOADED, E, n), !e && h && (h.abort(), h.reset(), h = null) }, updateTimestampOffset: function(e) { h.timestampOffset === e || isNaN(e) || (h.timestampOffset = e) } }, c = null, d = f = !1, t.on(y.default.DATA_UPDATE_COMPLETED, _, n), t.on(y.default.INIT_FRAGMENT_LOADED, E, n), n }
        a.__dashjs_factory_name = b, n.default = i.default.getClassFactory(a), t.exports = n.default }, { 104: 104, 108: 108, 201: 201, 214: 214, 226: 226, 46: 46, 47: 47, 51: 51, 54: 54 }], 200: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var a = r(e(108)),
            i = r(e(47)),
            o = r(e(114)),
            s = r(e(199));

        function u(e) { e = e || {}; var t, n = this.context,
                r = void 0;

            function i() { return r.getBuffer() } return t = { getBufferControllerType: function() { return r.getBufferControllerType() }, initialize: function(e, t) { return r.initialize(e, t) }, createBuffer: function(e, t) { return r.createBuffer(e, t) }, getType: function() { return r.getType() }, getBuffer: i, setBuffer: function(e) { r.setBuffer(e) }, getBufferLevel: function() { return r.getBufferLevel() }, setMediaSource: function(e) { r.setMediaSource(e) }, getMediaSource: function() { return r.getMediaSource() }, getIsBufferingCompleted: function() { return r.getIsBufferingCompleted() }, getIsPruningInProgress: function() { return r.getIsPruningInProgress() }, dischargePreBuffer: function() { return r.dischargePreBuffer() }, appendInitSegment: function(e) { r.appendInitSegment(e) }, getRangeAt: function(e) { return r.getRangeAt(e) }, reset: function(e) { r.reset(e) }, updateTimestampOffset: function(e) { var t = i();
                    t.timestampOffset === e || isNaN(e) || (t.timestampOffset = e) }, updateAppendWindow: function() { r.updateAppendWindow() } }, r = e.type === a.default.FRAGMENTED_TEXT ? (0, o.default)(n).create({ streamInfo: e.streamInfo, type: e.type, mediaPlayerModel: e.mediaPlayerModel, manifestModel: e.manifestModel, fragmentModel: e.fragmentModel, errHandler: e.errHandler, mediaController: e.mediaController, representationController: e.representationController, adapter: e.adapter, textController: e.textController, abrController: e.abrController, playbackController: e.playbackController, settings: e.settings }) : (0, s.default)(n).create({ streamInfo: e.streamInfo, type: e.type, mimeType: e.mimeType, fragmentModel: e.fragmentModel, errHandler: e.errHandler }), t }
        u.__dashjs_factory_name = "TextBufferController", n.default = i.default.getClassFactory(u), t.exports = n.default }, { 108: 108, 114: 114, 199: 199, 47: 47 }], 201: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var N = r(e(108)),
            i = r(e(47)),
            C = r(e(202)),
            w = r(e(203)),
            O = r(e(222)),
            P = r(e(220)),
            L = r(e(46)),
            x = r(e(54)),
            F = e(219);

        function a() { var e = this.context,
                t = void 0,
                h = void 0,
                n = void 0,
                r = void 0,
                i = void 0,
                p = void 0,
                a = void 0,
                g = void 0,
                _ = void 0,
                o = void 0,
                s = void 0,
                u = void 0,
                l = void 0,
                d = void 0,
                f = void 0,
                c = void 0,
                E = void 0,
                m = void 0,
                v = void 0,
                y = void 0,
                T = void 0;

            function S(e) { void 0 === T && null !== e.fromStreamInfo && (T = this.getCurrentTrackIdx()) }

            function A() { void 0 === T && (T = this.getCurrentTrackIdx()) }

            function I() { void 0 !== T && (this.setTextTrack(T), T = void 0) }

            function R(e) { var n = this,
                    t = e.tracks,
                    r = e.index;
                l && t.some(function(e, t) { if (p.matchSettings(l, e)) return n.setTextTrack(t), r = t, !0 }), (!1 === c || void 0 === c && !l || y) && this.setTextTrack(-1), f = r, u.trigger(x.default.TEXT_TRACKS_ADDED, { enabled: D(), index: r, tracks: t }), v = !0 }

            function b(e) { var t;
                d || !e || !e.newMediaInfo || (t = e.newMediaInfo).type === N.default.FRAGMENTED_TEXT && (l = { lang: t.lang, role: t.roles[0], accessibility: t.accessibility[0] }) }

            function D() { return E && !m ? !1 : !0 }

            function M() { y = v = !(E = !0) } return t = { setConfig: function(e) { e && (e.errHandler && (n = e.errHandler), e.adapter && (r = e.adapter), e.manifestModel && (i = e.manifestModel), e.mediaController && (p = e.mediaController), e.videoModel && (a = e.videoModel), e.streamController && (g = e.streamController), e.textTracks && (_ = e.textTracks), e.vttParser && (o = e.vttParser), e.ttmlParser && (s = e.ttmlParser), h.setConfig({ errHandler: n, adapter: r, manifestModel: i, mediaController: p, videoModel: a, streamController: g, textTracks: _, vttParser: o, ttmlParser: s })) }, getTextSourceBuffer: function() { return h }, getAllTracksAreDisabled: function() { return E }, addEmbeddedTrack: function(e) { h.addEmbeddedTrack(e) }, getTextDefaultLanguage: function() { return l && l.lang || "" }, setTextDefaultLanguage: function(e) {
                    (0, F.checkParameterType)(e, "string"), (l = l || {}).lang = e, d = !0 }, setTextDefaultEnabled: function(e) {
                    (0, F.checkParameterType)(e, "boolean"), (c = e) ? E = !1: this.setTextTrack(-1) }, getTextDefaultEnabled: function() { return void 0 !== c && c }, setInitialSettings: function(e) { l = e, d = !0 }, enableText: function(e) {
                    (0, F.checkParameterType)(e, "boolean"), !c && e && (c = !0), D() !== e && (e && this.setTextTrack(f), e || (f = this.getCurrentTrackIdx(), v ? this.setTextTrack(-1) : y = !0)) }, isTextEnabled: D, setTextTrack: function(e) { var t = h.getConfig(),
                        n = t.fragmentModel,
                        r = t.fragmentedTracks,
                        i = t.videoModel,
                        a = void 0,
                        o = void 0;
                    E = -1 === e; var s = _.getCurrentTrackIdx(); if (s !== e) { E && p && p.saveTextSettingsDisabled(), _.setModeForTrackIdx(s, N.default.TEXT_HIDDEN), _.setCurrentTrackIdx(e), _.setModeForTrackIdx(e, N.default.TEXT_SHOWING); var u = _.getCurrentTrackInfo(); if (u && u.isFragmented && !u.isEmbedded)
                            for (var l = 0; l < r.length; l++) { var d = r[l]; if (u.lang === d.lang && u.index === d.index && (d.id ? u.id === d.id : u.id === d.index))
                                    if (d !== p.getCurrentTrackFor(N.default.FRAGMENTED_TEXT, g.getActiveStreamInfo())) n.abortRequests(), n.removeExecutedRequestsBeforeTime(), h.remove(), _.deleteCuesFromTrackIdx(s), p.setTrack(d), h.setCurrentFragmentedTrackIdx(l);
                                    else if (-1 === s) { for (var f = g.getActiveStreamProcessors(), c = 0; c < f.length; c++)
                                        if (f[c].getType() === N.default.FRAGMENTED_TEXT) { o = f[c]; break }
                                    o.setBufferingTime(i.getTime()), o.getScheduleController().start() } } else if (u && !u.isFragmented) { for (f = g.getActiveStreamProcessors(), l = 0; l < f.length; l++)
                                    if (f[l].getType() === N.default.TEXT) { a = (o = f[l]).getMediaInfoArr(); break }
                                if (o && a)
                                    for (l = 0; l < a.length; l++)
                                        if (a[l].index === u.index && a[l].lang === u.lang) { o.selectMediaInfo(a[l]); break } } } }, getCurrentTrackIdx: function() { return _.getCurrentTrackIdx() }, enableForcedTextStreaming: function(e) {
                    (0, F.checkParameterType)(e, "boolean"), m = e }, reset: function() { M(), h.resetEmbedded(), h.reset() } }, l = null, _ = (y = d = v = m = !(f = -1), w.default)(e).getInstance(), o = (0, O.default)(e).getInstance(), s = (0, P.default)(e).getInstance(), h = (0, C.default)(e).getInstance(), u = (0, L.default)(e).getInstance(), _.initialize(), u.on(x.default.TEXT_TRACKS_QUEUE_INITIALIZED, R, t), u.on(x.default.CURRENT_TRACK_CHANGED, b, t), u.on(x.default.PERIOD_SWITCH_STARTED, S, t), u.on(x.default.STREAM_COMPLETED, A, t), u.on(x.default.PERIOD_SWITCH_COMPLETED, I, t), M(), t }
        a.__dashjs_factory_name = "TextController", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 202: 202, 203: 203, 219: 219, 220: 220, 222: 222, 46: 46, 47: 47, 54: 54 }], 202: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var re = r(e(108)),
            ie = e(242),
            m = r(e(234)),
            v = r(e(207)),
            y = r(e(209)),
            i = r(e(47)),
            T = r(e(45)),
            S = r(e(203)),
            A = r(e(198)),
            ae = r(e(9)),
            oe = r(e(2)),
            I = r(e(46)),
            R = r(e(54)),
            se = r(e(226)),
            ue = r(e(51));

        function a() { var s = this.context,
                n = (0, I.default)(s).getInstance(),
                i = !1,
                u = void 0,
                U = void 0,
                k = void 0,
                B = void 0,
                l = void 0,
                G = void 0,
                d = void 0,
                j = void 0,
                r = void 0,
                a = void 0,
                f = void 0,
                Y = void 0,
                K = void 0,
                q = void 0,
                H = void 0,
                c = void 0,
                V = void 0,
                o = void 0,
                z = void 0,
                W = void 0,
                X = void 0,
                Q = void 0,
                Z = void 0,
                $ = void 0,
                J = void 0,
                ee = void 0;

            function e() { H = NaN, z = K = null, q = !(c = []) }

            function t() { e(), f = [], j = null }

            function h(e) { var t = e.chunk;
                t.mediaInfo.embeddedCaptions && _(t.bytes, t) }

            function p() { X = [], (Y = (0, S.default)(s).getInstance()).setConfig({ videoModel: V }), Y.initialize(), k = (0, v.default)(s).getInstance(), $ = [], i = !(Z = W = null), J = (Q = 0, A.default)(s).getInstance(); var e = o.getActiveStreamProcessors(); for (var t in e)
                    if ("video" === e[t].getType()) { ee = e[t].getRepresentationInfo().MSETimeOffset; break }
                n.on(R.default.VIDEO_CHUNK_RECEIVED, h, this), n.on(R.default.BUFFER_CLEARED, E, this) }

            function g(e) { W = e }

            function te(e, t) { var n, r, i = new m.default,
                    a = { subtitle: "subtitles", caption: "captions" };
                i.captionData = e, i.lang = t.lang, i.labels = t.labels, i.id = t.id ? t.id : t.index, i.index = t.index, i.isTTML = (n = !1, t.codec && 0 <= t.codec.search(re.default.STPP) && (n = !0), t.mimeType && 0 <= t.mimeType.search(re.default.TTML) && (n = !0), n), i.defaultTrack = function(e) { var t = !1;
                    1 < X.length && e.isEmbedded ? t = e.id && e.id === re.default.CC1 : 1 === X.length ? e.id && "string" == typeof e.id && "CC" === e.id.substring(0, 2) && (t = !0) : 0 === X.length && (t = e.index === f[0].index); return t }(t), i.isFragmented = !l.getIsTextTrack(t.mimeType), i.isEmbedded = !!t.isEmbedded, i.kind = r = (r = 0 < t.roles.length ? a[t.roles[0]] : a.caption) === a.caption || r === a.subtitle ? r : a.caption, i.roles = t.roles, i.accessibility = t.accessibility; var o = (f ? f.length : 0) + X.length;
                Y.addTextTrack(i, o) }

            function _(e, t) { var n = void 0,
                    r = void 0,
                    i = void 0,
                    a = void 0,
                    o = void 0,
                    s = void 0,
                    u = void 0,
                    l = t.mediaInfo,
                    d = l.type,
                    f = l.mimeType,
                    c = l.codec || f; if (c) { if (d === re.default.FRAGMENTED_TEXT)
                        if (q || "InitializationSegment" !== t.segmentType) { if (!q) return; if (r = (s = k.getSamplesInfo(e)).sampleList, null === z && 0 < r.length && (z = r[0].cts - t.start * H), 0 <= c.search(re.default.STPP))
                                for (j = null !== j ? j : ne(c), i = 0; i < r.length; i++) { var h = (T = r[i]).cts,
                                        p = h - z;
                                    this.buffered.add(p / H, (p + T.duration) / H); for (var g = new DataView(e, T.offset, T.subSizes[0]), u = ae.default.Utils.dataViewToString(g, re.default.UTF8), _ = [], E = T.offset + T.subSizes[0], a = 1; a < T.subSizes.length; a++) { var m = new Uint8Array(e, E, T.subSizes[a]),
                                            v = String.fromCharCode.apply(null, m);
                                        _.push(v), E += T.subSizes[a] } try { var y = G.getValue().ttmlTimeIsRelative ? h / H : 0,
                                            n = j.parse(u, y, h / H, (h + T.duration) / H, _);
                                        Y.addCaptions(W, z / H, n) } catch (e) { K.removeExecutedRequestsBeforeTime(), this.remove(), U.error("TTML parser error: " + e.message) } } else { for (var T, S = [], i = 0; i < r.length; i++) {
                                        (T = r[i]).cts -= z, this.buffered.add(T.cts / H, (T.cts + T.duration) / H); var A = e.slice(T.offset, T.offset + T.size),
                                            I = ae.default.parseBuffer(A); for (a = 0; a < I.boxes.length; a++) { var R = I.boxes[a]; if (U.debug("VTT box1: " + R.type), "vtte" !== R.type && "vttc" === R.type)
                                                for (U.debug("VTT vttc boxes.length = " + R.boxes.length), o = 0; o < R.boxes.length; o++) { var b, D, M, N = R.boxes[o];
                                                    U.debug("VTT box2: " + N.type), "payl" === N.type && (b = N.cue_text, U.debug("VTT cue_text = " + b), D = T.cts / H, M = (T.cts + T.duration) / H, S.push({ start: D, end: M, data: b, styles: {} }), U.debug("VTT " + D + "-" + M + " : " + b)) } } }
                                    0 < S.length && Y.addCaptions(W, 0, S) } } else q = !0, H = k.getMediaTimescaleFromMoov(e);
                    else if (d === re.default.TEXT) { g = new DataView(e, 0, e.byteLength);
                        u = ae.default.Utils.dataViewToString(g, re.default.UTF8); try { n = ne(c).parse(u, 0), Y.addCaptions(Y.getCurrentTrackIdx(), 0, n) } catch (e) { B.error(new se.default(ue.default.TIMED_TEXT_ERROR_ID_PARSE_CODE, ue.default.TIMED_TEXT_ERROR_MESSAGE_PARSE + e.message, u)) } } else if (d === re.default.VIDEO)
                        if (t.segmentType === ie.HTTPRequest.INIT_SEGMENT_TYPE) { if (0 === Q)
                                for (Q = k.getMediaTimescaleFromMoov(e), i = 0; i < X.length; i++) te(null, X[i]) } else { if (0 === Q) return void U.warn("CEA-608: No timescale for embeddedTextTrack yet"); var C = (s = k.getSamplesInfo(e)).lastSequenceNumber; if (!$[0] && !$[1]) { var w = void 0,
                                    O = void 0; for (i = 0; i < X.length; i++) { if (X[i].id === re.default.CC1 ? O = Y.getTrackIdxForId(re.default.CC1) : X[i].id === re.default.CC3 && (O = Y.getTrackIdxForId(re.default.CC3)), -1 === O) return void U.warn("CEA-608: data before track is ready.");
                                    w = function(i) { return function(e, t, n) { var r = null;
                                            (r = V.getTTMLRenderingDiv() ? J.createHTMLCaptionsFromScreen(V.getElement(), e, t, n) : [{ start: e, end: t, data: n.getDisplayText(), styles: {} }]) && Y.addCaptions(i, 0, r) } }(O), $[i] = new oe.default.Cea608Parser(i + 1, { newCue: w }, null) } } if (Q) { if (null !== Z && C !== Z + s.numSequences)
                                    for (i = 0; i < $.length; i++) $[i] && $[i].reset(); for (var P = function(e, t) { if (0 === t.length) return null; for (var n = { splits: [], fields: [
                                                    [],
                                                    []
                                                ] }, r = new DataView(e), i = 0; i < t.length; i++)
                                            for (var a = t[i], o = oe.default.findCea608Nalus(r, a.offset, a.size), s = null, u = 0, l = 0; l < o.length; l++)
                                                for (var d = oe.default.extractCea608DataFromRange(r, o[l]), f = 0; f < 2; f++) 0 < d[f].length && (a.cts !== s ? u = 0 : u += 1, n.fields[f].push([a.cts + ee * Q, d[f], u]), s = a.cts); return n.fields.forEach(function(e) { e.sort(function(e, t) { return e[0] === t[0] ? e[2] - t[2] : e[0] - t[0] }) }), n }(e, s.sampleList), L = 0; L < $.length; L++) { var x = P.fields[L],
                                        F = $[L]; if (F)
                                        for (i = 0; i < x.length; i++) F.addData(x[i][0] / Q, x[i][1]) }
                                Z = C } } } else U.error("No text type defined") }

            function ne(e) { var t = void 0; return 0 <= e.search(re.default.VTT) ? t = r : (0 <= e.search(re.default.TTML) || 0 <= e.search(re.default.STPP)) && (t = a), t }

            function E(n) { X.forEach(function(e) { var t = Y.getTrackIdxForId(e.id);
                    0 <= t && Y.deleteCuesFromTrackIdx(t, n.from, n.to) }) } return u = { initialize: function(e, t, n, r) { i || p(), Y.setConfig({ videoModel: V }), Y.initialize(), k = k || (0, v.default)(s).getInstance(),
                        function(e, t, n, r) { var i = !l.getIsTextTrack(e); if (f = f.concat(n), i) { K = r, u.buffered = (0, y.default)(s).create(), c = d.getTracksFor(re.default.FRAGMENTED_TEXT, t); for (var a = d.getCurrentTrackFor(re.default.FRAGMENTED_TEXT, t), o = 0; o < c.length; o++)
                                    if (c[o] === a) { g(o); break } } for (o = 0; o < f.length; o++) te(null, f[o]) }(e, t, n, r) }, append: _, abort: function() { Y.deleteAllTextTracks(), e(), k = null, f = [] }, addEmbeddedTrack: function(e) { if (i || p(), e)
                        if (e.id === re.default.CC1 || e.id === re.default.CC3) { for (var t = 0; t < X.length; t++)
                                if (X[t].id === e.id) return;
                            X.push(e) } else U.warn("Embedded track " + e.id + " not supported!") }, resetEmbedded: function() { n.off(R.default.VIDEO_CHUNK_RECEIVED, h, this), n.off(R.default.BUFFER_CLEARED, E, this), Y && Y.deleteAllTextTracks(), i = !1, X = [], $ = [null, null], Z = null }, setConfig: function(e) { e && (e.errHandler && (B = e.errHandler), e.adapter && (l = e.adapter), e.manifestModel && (G = e.manifestModel), e.mediaController && (d = e.mediaController), e.videoModel && (V = e.videoModel), e.streamController && (o = e.streamController), e.textTracks && (Y = e.textTracks), e.vttParser && (r = e.vttParser), e.ttmlParser && (a = e.ttmlParser)) }, getConfig: function() { return { fragmentModel: K, fragmentedTracks: c, videoModel: V } }, setCurrentFragmentedTrackIdx: g, remove: function(e, t) { void 0 === e && e === t && (e = this.buffered.start(0), t = this.buffered.end(this.buffered.length - 1)), this.buffered.remove(e, t) }, reset: function() { t(), Y = V = o = null } }, U = (0, T.default)(s).getInstance().getLogger(u), t(), u }
        a.__dashjs_factory_name = "TextSourceBuffer", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 198: 198, 2: 2, 203: 203, 207: 207, 209: 209, 226: 226, 234: 234, 242: 242, 45: 45, 46: 46, 47: 47, 51: 51, 54: 54, 9: 9 }], 203: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var m = r(e(108)),
            v = r(e(46)),
            C = r(e(54)),
            i = r(e(47)),
            w = r(e(45)),
            O = e(17),
            P = e(219);

        function a() { var e = this.context,
                y = (0, v.default)(e).getInstance(),
                t = void 0,
                u = void 0,
                l = void 0,
                T = void 0,
                o = void 0,
                a = void 0,
                d = void 0,
                S = void 0,
                A = void 0,
                I = void 0,
                R = void 0,
                b = void 0,
                r = void 0,
                D = void 0,
                M = void 0,
                n = void 0,
                N = void 0;

            function s(e) { var t = o[e].kind,
                    n = void 0 !== o[e].id ? o[e].id : o[e].lang,
                    r = o[e].lang,
                    i = o[e].isTTML,
                    a = o[e].isEmbedded; return T.addTextTrack(t, n, r, i, a) }

            function f(e, t) { var n = T.getClientWidth(),
                    r = T.getClientHeight(),
                    i = T.getVideoWidth(),
                    a = T.getVideoHeight(),
                    o = T.getVideoRelativeOffsetTop(),
                    s = T.getVideoRelativeOffsetLeft(); if (0 !== i && 0 !== a) { var u = i / a,
                        l = !1;
                    e.isFromCEA608 && (u = 3.5 / 3, l = !0); var d, f = function(e, t, n, r, i, a) { var o = 0,
                                s = 0;
                            n / r < e / t ? o = (s = t) / r * n : s = (o = e) / n * r; var u, l, d = 0,
                                f = 0; return i < o / s ? d = (f = s) * i : f = (d = o) / i, u = (e - d) / 2, l = (t - f) / 2, a ? { x: u + .1 * d, y: l + .1 * f, w: .8 * d, h: .8 * f } : { x: u, y: l, w: d, h: f } }.call(this, n, r, i, a, u, l),
                        c = f.w,
                        h = f.h,
                        p = f.x,
                        g = f.y; if (c != I || h != R || p != S || g != A || t) { S = p + s, A = g + o, I = c, R = h, !b || (d = b.style) && (d.left = S + "px", d.top = A + "px", d.width = I + "px", d.height = R + "px", d.zIndex = D && document[D] || M ? N : null, y.trigger(C.default.CAPTION_CONTAINER_RESIZE, {})); var _ = e.activeCues; if (_)
                            for (var E = _.length, m = 0; m < E; ++m) { var v = _[m];
                                v.scaleCue(v) } } } }

            function c(e) { var t, n = void 0,
                    r = void 0,
                    i = void 0,
                    a = void 0,
                    o = void 0; if (e.cellResolution) { var s = [I / e.cellResolution[0], R / e.cellResolution[1]]; if (e.linePadding)
                        for (n in e.linePadding)
                            if (e.linePadding.hasOwnProperty(n))
                                for (var r = (e.linePadding[n] * s[0]).toString(), u = document.getElementsByClassName("spanPadding"), l = 0; l < u.length; l++) u[l].style.cssText = u[l].style.cssText.replace(/(padding-left\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r), u[l].style.cssText = u[l].style.cssText.replace(/(padding-right\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r);
                    if (e.fontSize) { for (n in e.fontSize)
                            if (e.fontSize.hasOwnProperty(n)) { "%" === e.fontSize[n][0] ? i = e.fontSize[n][1] / 100 : "c" === e.fontSize[n][0] && (i = e.fontSize[n][1]), r = (i * s[1]).toString(), o = "defaultFontSize" !== n ? document.getElementsByClassName(n) : document.getElementsByClassName("paragraph"); for (var d = 0; d < o.length; d++) o[d].style.cssText = o[d].style.cssText.replace(/(font-size\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r) }
                        if (e.lineHeight)
                            for (n in e.lineHeight)
                                if (e.lineHeight.hasOwnProperty(n)) { "%" === e.lineHeight[n][0] ? a = e.lineHeight[n][1] / 100 : "c" === e.fontSize[n][0] && (a = e.lineHeight[n][1]), r = (a * s[1]).toString(), o = document.getElementsByClassName(n); for (var f = 0; f < o.length; f++) o[f].style.cssText = o[f].style.cssText.replace(/(line-height\s*:\s*)[\d.,]+(?=\s*px)/gi, "$1" + r) } } }
                e.isd && ((t = document.getElementById(e.cueID)) && b.removeChild(t), h(e)) }

            function h(a) { var e;
                b && (e = document.createElement("div"), b.appendChild(e), n = (0, O.renderHTML)(a.isd, e, function(e) { var t = /^(urn:)(mpeg:[a-z0-9][a-z0-9-]{0,31}:)(subs:)([0-9]+)$/,
                        n = /^#(.*)$/; if (t.test(e)) { var r = t.exec(e),
                            i = parseInt(r[4], 10) - 1; return "data:image/png;base64," + btoa(a.images[i]) } if (n.test(e)) { i = (r = n.exec(e))[1]; return "data:image/png;base64," + a.embeddedImages[i] } return null }, b.clientHeight, b.clientWidth, !1, function(e) { u.info("renderCaption :", e) }, n, !0), e.id = a.cueID, y.trigger(C.default.CAPTION_RENDERED, { captionDiv: e, currentTrackIdx: d })) }

            function p(e) { return 0 <= e && o[e] ? T.getTextTrack(o[e].kind, o[e].id, o[e].lang, o[e].isTTML, o[e].isEmbedded) : null }

            function g(e) { var t;
                e !== d && (t = p(d = e), function(e) { E.call(this), e && "html" === e.renderingType ? function() { var e = document.getElementById("native-cue-style"); if (e) return;
                        (e = document.createElement("style")).id = "native-cue-style", document.head.appendChild(e); var t = e.sheet,
                            n = T.getElement(); try { n && (n.id ? t.insertRule("#" + n.id + "::cue {background: transparent}", 0) : 0 !== n.classList.length ? t.insertRule("." + n.className + "::cue {background: transparent}", 0) : t.insertRule("video::cue {background: transparent}", 0)) } catch (e) { u.info("" + e.message) } }.call(this) : i.call(this) }.call(this, t), r && (clearInterval(r), r = null), t && "html" === t.renderingType && (f.call(this, t, !0), r = setInterval(f.bind(this, t), 500))) }

            function _(e, t, n) { if (e.cues)
                    for (var r = e.cues, i = r.length - 1; 0 <= i; i--) a = r[i], o = t, s = n, (isNaN(o) || a.startTime >= o) && (isNaN(s) || a.endTime <= s) && e.removeCue(r[i]); var a, o, s }

            function i() { var e = document.getElementById("native-cue-style");
                e && document.head.removeChild(e) }

            function E() { if (b)
                    for (; b.firstChild;) b.removeChild(b.firstChild) } return t = { initialize: function() { "undefined" != typeof window && "undefined" != typeof navigator && (l = window.VTTCue || window.TextTrackCue, o = [], a = [], M = !(d = -1), N = 2147483647, n = r = b = null, void(R = I = A = S = 0) !== document.fullscreenElement ? D = "fullscreenElement" : void 0 !== document.webkitIsFullScreen ? D = "webkitIsFullScreen" : document.msFullscreenElement ? D = "msFullscreenElement" : document.mozFullScreen && (D = "mozFullScreen")) }, setDisplayCConTop: function(e) {
                    (0, P.checkParameterType)(e, "boolean"), M = e, b && !document[D] && (b.style.zIndex = e ? N : null) }, addTextTrack: function(e, t) { var i = this;
                    o.length !== t ? (o.push(e), o.length === t && function() { o.sort(function(e, t) { return e.index - t.index }), b = T.getTTMLRenderingDiv(); for (var n = -1, e = 0; e < o.length; e++) { var t = s.call(i, e);
                            a.push(t), o[e].defaultTrack && (t.default = !0, n = e); var r = p(e);
                            r && (r.mode = m.default.TEXT_SHOWING, b && (o[e].isTTML || o[e].isEmbedded) ? r.renderingType = "html" : r.renderingType = "default"), i.addCaptions(e, 0, o[e].captionData), y.trigger(C.default.TEXT_TRACK_ADDED) }
                        g.call(i, n), 0 <= n && function() { y.on(C.default.PLAYBACK_METADATA_LOADED, function e() { var t = p(n);
                                t && f.call(this, t, !0), y.off(C.default.PLAYBACK_METADATA_LOADED, e, this) }, i); for (var e = 0; e < o.length; e++) { var t = p(e);
                                t && (t.mode = e === n ? m.default.TEXT_SHOWING : m.default.TEXT_HIDDEN) } }(), y.trigger(C.default.TEXT_TRACKS_QUEUE_INITIALIZED, { index: d, tracks: o }) }()) : u.error("Trying to add too many tracks.") }, addCaptions: function(e, t, n) { var r = p(e),
                        i = this; if (r && Array.isArray(n) && 0 !== n.length)
                        for (var a = 0; a < n.length; a++) { var o = void 0,
                                s = n[a];
                            r.cellResolution = s.cellResolution, r.isFromCEA608 = s.isFromCEA608, "html" === s.type && b ? ((o = new l(s.start - t, s.end - t, "")).cueHTMLElement = s.cueHTMLElement, o.isd = s.isd, o.images = s.images, o.embeddedImages = s.embeddedImages, o.cueID = s.cueID, o.scaleCue = c.bind(i), o.cellResolution = s.cellResolution, o.lineHeight = s.lineHeight, o.linePadding = s.linePadding, o.fontSize = s.fontSize, b.style.left = S + "px", b.style.top = A + "px", b.style.width = I + "px", b.style.height = R + "px", o.onenter = function() { r.mode === m.default.TEXT_SHOWING && (this.isd ? (h(this), u.debug("Cue enter id:" + this.cueID)) : (b.appendChild(this.cueHTMLElement), c.call(i, this), y.trigger(C.default.CAPTION_RENDERED, { captionDiv: this.cueHTMLElement, currentTrackIdx: d }))) }, o.onexit = function() { if (b)
                                    for (var e = b.childNodes, t = 0; t < e.length; ++t) e[t].id === this.cueID && (u.debug("Cue exit id:" + e[t].id), b.removeChild(e[t]), --t) }) : s.data && (o = new l(s.start - t, s.end - t, s.data), s.styles && (void 0 !== s.styles.align && "align" in o && (o.align = s.styles.align), void 0 !== s.styles.line && "line" in o && (o.line = s.styles.line), void 0 !== s.styles.position && "position" in o && (o.position = s.styles.position), void 0 !== s.styles.size && "size" in o && (o.size = s.styles.size)), o.onenter = function() { r.mode === m.default.TEXT_SHOWING && y.trigger(C.default.CAPTION_RENDERED, { currentTrackIdx: d }) }); try { o ? r.addCue(o) : u.error("impossible to display subtitles.") } catch (e) { throw _(r), r.addCue(o), e } } }, getCurrentTrackIdx: function() { return d }, setCurrentTrackIdx: g, getTrackIdxForId: function(e) { for (var t = -1, n = 0; n < o.length; n++)
                        if (o[n].id === e) { t = n; break }
                    return t }, getCurrentTrackInfo: function() { return o[d] }, setModeForTrackIdx: function(e, t) { var n = p(e);
                    n && n.mode !== t && (n.mode = t) }, deleteCuesFromTrackIdx: function(e, t, n) { var r = p(e);
                    r && _(r, t, n) }, deleteAllTextTracks: function() { for (var e = a ? a.length : 0, t = 0; t < e; t++) { var n = p(t);
                        n && (_.call(this, n), n.mode = "disabled") }
                    a = [], o = [], r && (clearInterval(r), r = null), d = -1, E.call(this) }, deleteTextTrack: function(e) { T.removeChild(a[e]), a.splice(e, 1) }, setConfig: function(e) { e && e.videoModel && (T = e.videoModel) } }, u = (0, w.default)(e).getInstance().getLogger(t), t }
        a.__dashjs_factory_name = "TextTracks", n.default = i.default.getSingletonFactory(a), t.exports = n.default }, { 108: 108, 17: 17, 219: 219, 45: 45, 46: 46, 47: 47, 54: 54 }], 204: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(108)),
            c = r(e(235)),
            o = r(e(205)),
            s = r(e(225)),
            h = e(80);

        function u(e) { var t, n = this.context,
                f = void 0;

            function r() { f && f.reset() } return t = { provide: function(e, t) { if ("function" == typeof t) { var n, r = f.getCurrentTrack(),
                            i = void 0; if (!r || r.segmentDuration <= 0 || null == e) t(null);
                        else { isNaN(r.segmentDuration) && (i = f.getThumbnailRequestForTime(e)) && (r.segmentDuration = i.duration), n = e % r.segmentDuration; var a, o, s, u, l = Math.floor(n * r.tilesHor * r.tilesVert / r.segmentDuration),
                                d = new c.default; if (d.width = Math.floor(r.widthPerTile), d.height = Math.floor(r.heightPerTile), d.x = Math.floor(l % r.tilesHor) * r.widthPerTile, d.y = Math.floor(l / r.tilesHor) * r.heightPerTile, "readThumbnail" in r) return r.readThumbnail(e, function(e) { d.url = e, t(d) });
                            i ? (d.url = i.url, r.segmentDuration = NaN) : (a = Math.floor(e / r.segmentDuration), d.url = (s = a + (o = r).startNumber, u = (0, h.replaceTokenForTemplate)(o.templateUrl, "Number", s), u = (0, h.replaceTokenForTemplate)(u, "Time", (s - 1) * o.segmentDuration), u = (0, h.replaceTokenForTemplate)(u, "Bandwidth", o.bandwidth), (0, h.unescapeDollarsInTemplate)(u))), t(d) } } }, setTrackByIndex: function(e) { f.setTrackByIndex(e) }, getCurrentTrackIndex: function() { return f.getCurrentTrackIndex() }, getBitrateList: function() { var e = f.getTracks(),
                        n = 0; return e.map(function(e) { var t = new s.default; return t.mediaType = a.default.IMAGE, t.qualityIndex = n++, t.bitrate = e.bitrate, t.width = e.width, t.height = e.height, t }) }, reset: r }, r(), f = (0, o.default)(n).create({ streamInfo: e.streamInfo, adapter: e.adapter, baseURLController: e.baseURLController, timelineConverter: e.timelineConverter, debug: e.debug, eventBus: e.eventBus, events: e.events, dashConstants: e.dashConstants }), t }
        u.__dashjs_factory_name = "ThumbnailController", n.default = i.default.getClassFactory(u), t.exports = n.default }, { 108: 108, 205: 205, 225: 225, 235: 235, 47: 47, 80: 80 }], 205: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var T = r(e(108)),
            S = r(e(61)),
            i = r(e(47)),
            A = r(e(236)),
            I = r(e(221)),
            R = e(80),
            b = r(e(54)),
            D = r(e(207)),
            M = r(e(160)),
            N = r(e(57)),
            C = ["http://dashif.org/thumbnail_tile", "http://dashif.org/guidelines/thumbnail_tile"];

        function a(e) { var t, n = this.context,
                u = e.adapter,
                s = e.baseURLController,
                r = e.streamInfo,
                l = e.timelineConverter,
                i = e.debug,
                a = e.eventBus,
                o = e.events,
                d = e.dashConstants,
                f = (0, I.default)(n).getInstance(),
                c = void 0,
                h = void 0,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0;

            function m() { y(), _ = (0, M.default)(n).create({}), E = (0, D.default)(n).getInstance(), (h = (0, N.default)(n).create({ timelineConverter: l, baseURLController: s, debug: i, eventBus: a, events: o, dashConstants: d, urlUtils: f })).initialize(!!u && u.getIsDynamic()),
                    function() { if (!r || !u) return; if (!(g = u.getMediaInfoForType(r, T.default.IMAGE))) return; var e = u.getVoRepresentations(g);
                        e && 0 < e.length && e.forEach(function(e) {
                            (e.segmentInfoType === S.default.SEGMENT_TEMPLATE && 0 < e.segmentDuration && e.media || e.segmentInfoType === S.default.SEGMENT_TIMELINE) && v(e), e.segmentInfoType === S.default.SEGMENT_BASE && v(e, !0) });
                        0 < c.length && (c.sort(function(e, t) { return e.bitrate - t.bitrate }), p = c.length - 1) }() }

            function v(e, t) { var n, r, i = new A.default;
                i.id = e.id, i.bitrate = e.bandwidth, i.width = e.width, i.height = e.height, i.tilesHor = 1, i.tilesVert = 1, e.essentialProperties && e.essentialProperties.forEach(function(e) { var t;
                    0 <= C.indexOf(e.schemeIdUri) && e.value && (2 !== (t = e.value.split("x")).length || isNaN(t[0]) || isNaN(t[1]) || (i.tilesHor = parseInt(t[0], 10), i.tilesVert = parseInt(t[1], 10))) }), t ? a.trigger(b.default.SEGMENTBASE_SEGMENTSLIST_REQUEST_NEEDED, { mimeType: g.mimeType, mediaType: T.default.IMAGE, representation: e, callback: function(e, r) { var o = [];
                        e = function(e, t) { for (var n = [], r = 0, i = void 0, a = void 0, o = void 0, i = 0, s = e.length; i < s; i++) a = e[i], (o = (0, R.getTimeBasedSegment)(l, u.getIsDynamic(), t, a.startTime, a.duration, a.timescale, a.media, a.mediaRange, r)) && (n.push(o), o = null, r++); return n }(e, r), i.segmentDuration = e[0].duration, i.readThumbnail = function(t, a) { var n = null;
                            o.some(function(e) { if (e.start <= t && e.end > t) return n = e.url, !0 }), n ? a(n) : e.some(function(i) { if (i.mediaStartTime <= t && i.mediaStartTime + i.duration > t) { var e = s.resolve(r.path); return _.load({ method: "get", url: e.url, request: { range: i.mediaRange, responseType: "arraybuffer" }, onload: function(e) { var t = E.getSamplesInfo(e.target.response),
                                                n = new Blob([e.target.response.slice(t.sampleList[0].offset, t.sampleList[0].offset + t.sampleList[0].size)], { type: "image/jpeg" }),
                                                r = window.URL.createObjectURL(n);
                                            o.push({ start: i.mediaStartTime, end: i.mediaStartTime + i.duration, url: r }), a && a(r) } }), !0 } }) } } }) : (i.startNumber = e.startNumber, i.segmentDuration = e.segmentDuration, i.timescale = e.timescale, i.templateUrl = (n = e, (r = f.isRelative(n.media) ? f.resolve(n.media, s.resolve(n.path).url) : n.media) ? (0, R.replaceIDForTemplate)(r, n.id) : "")), 0 < i.tilesHor && 0 < i.tilesVert && (i.widthPerTile = i.width / i.tilesHor, i.heightPerTile = i.height / i.tilesVert, c.push(i)) }

            function y() { c = [], p = -1, g = null } return t = { initialize: m, getTracks: function() { return c }, reset: y, setTrackByIndex: function(e) { c && 0 !== c.length && (e >= c.length && (e = c.length - 1), p = e) }, getCurrentTrack: function() { return p < 0 ? null : c[p] }, getCurrentTrackIndex: function() { return p }, getThumbnailRequestForTime: function(e) { for (var t = void 0, n = u.getVoRepresentations(g), r = 0; r < n.length; r++)
                        if (c[p].id === n[r].id) { t = n[r]; break }
                    return h.getSegmentRequestForTime(g, t, e) } }, m(), t }
        n.THUMBNAILS_SCHEME_ID_URIS = C, a.__dashjs_factory_name = "ThumbnailTracks", n.default = i.default.getClassFactory(a) }, { 108: 108, 160: 160, 207: 207, 221: 221, 236: 236, 47: 47, 54: 54, 57: 57, 61: 61, 80: 80 }], 206: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var u = r(e(51)),
            l = r(e(46)),
            d = r(e(54)),
            f = r(e(113)),
            c = r(e(224)),
            h = r(e(223)),
            i = r(e(47)),
            p = r(e(226)),
            g = e(219);

        function a() { var e, t = this.context,
                i = (0, l.default)(t).getInstance(),
                n = void 0,
                a = void 0,
                r = void 0,
                o = void 0;

            function s() { n.reset() } return e = { chooseSelector: function(e) {
                    (0, g.checkParameterType)(e, "boolean"), o = e ? r : a }, select: function(e) { if (e) { var t = e.baseUrls,
                            n = e.selectedIdx; if (!isNaN(n)) return t[n]; var r = o.select(t); return r ? (e.selectedIdx = t.indexOf(r), r) : (i.trigger(d.default.URL_RESOLUTION_FAILED, { error: new p.default(u.default.URL_RESOLUTION_FAILED_GENERIC_ERROR_CODE, u.default.URL_RESOLUTION_FAILED_GENERIC_ERROR_MESSAGE) }), void(o === a && s())) } }, reset: s, setConfig: function(e) { e.selector && (o = e.selector) } }, n = (0, f.default)(t).create({ updateEventName: d.default.SERVICE_LOCATION_BLACKLIST_CHANGED, addBlacklistEventName: d.default.SERVICE_LOCATION_BLACKLIST_ADD }), a = (0, h.default)(t).create({ blacklistController: n }), r = (0, c.default)(t).create({ blacklistController: n }), o = a, e }
        a.__dashjs_factory_name = "BaseURLSelector", n.default = i.default.getClassFactory(a), t.exports = n.default }, { 113: 113, 219: 219, 223: 223, 224: 224, 226: 226, 46: 46, 47: 47, 51: 51, 54: 54 }], 207: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(45)),
            o = r(e(215)),
            a = r(e(47)),
            s = r(e(9)),
            c = r(e(231));

        function u() { var a = void 0,
                e = void 0,
                r = this.context;

            function P(e) { if (!e) return null;
                void 0 === e.fileStart && (e.fileStart = 0); var t = s.default.parseBuffer(e),
                    n = (0, o.default)(r).create(); return n.setData(t), n } return e = { parse: P, findLastTopIsoBoxCompleted: function(e, t, n) { if (void 0 === n && (n = 0), !t || n + 8 >= t.byteLength) return new c.default(0, !1); for (var r, i, a, o, s = t instanceof ArrayBuffer ? new Uint8Array(t) : t, u = void 0, l = 0; n < s.byteLength;) { var d = (a = s)[(o = n) + 3] >>> 0 | a[o + 2] << 8 >>> 0 | a[o + 1] << 16 >>> 0 | a[o] << 24 >>> 0,
                            f = (r = s, i = n + 4, String.fromCharCode(r[i++]) + String.fromCharCode(r[i++]) + String.fromCharCode(r[i++]) + String.fromCharCode(r[i])); if (0 == d) break;
                        n + d <= s.byteLength && (0 <= e.indexOf(f) ? u = new c.default(n, !0, d) : l = n + d), n += d } return u || new c.default(l, !1) }, getMediaTimescaleFromMoov: function(e) { var t = P(e),
                        n = t ? t.getBox("mdhd") : void 0; return n ? n.timescale : NaN }, getSamplesInfo: function(e) { if (!e || 0 === e.byteLength) return { sampleList: [], lastSequenceNumber: NaN, totalDuration: NaN, numSequences: NaN }; for (var t = P(e), n = t.getBoxes("moof"), r = t.getBoxes("mfhd"), i = void 0, a = void 0, o = void 0, s = void 0, u = void 0, l = void 0, d = void 0, f = void 0, c = void 0, h = void 0, p = void 0, g = void 0, _ = void 0, E = void 0, m = t.getBoxes("moof").length, v = r[r.length - 1].sequence_number, u = [], y = -1, T = -1, h = a = 0; h < n.length; h++)
                        for (var S = n[h], A = S.getChildBoxes("traf"), f = 0; f < A.length; f++) { for (var I = A[f], R = I.getChildBox("tfhd"), b = I.getChildBox("tfdt"), s = b.baseMediaDecodeTime, D = I.getChildBoxes("trun"), M = I.getChildBoxes("subs"), c = 0; c < D.length; c++)
                                for (var N = D[c], a = N.sample_count, _ = (R.base_data_offset || 0) + (N.data_offset || 0), d = 0; d < a; d++) { i = void 0 !== (l = N.samples[d]).sample_duration ? l.sample_duration : R.default_sample_duration, o = void 0 !== l.sample_size ? l.sample_size : R.default_sample_size; var C = { dts: s, cts: s + (void 0 !== l.sample_composition_time_offset ? l.sample_composition_time_offset : 0), duration: i, offset: S.offset + _, size: o, subSizes: [o] }; if (M)
                                        for (p = 0; p < M.length; p++) { var w = M[p]; if (y < w.entry_count - 1 && T < d && (y++, T += w.entries[y].sample_delta), d == T) { C.subSizes = []; for (var O = w.entries[y], g = 0; g < O.subsample_count; g++) C.subSizes.push(O.subsamples[g].subsample_size) } }
                                    u.push(C), _ += o, s += i }
                            E = s - b.baseMediaDecodeTime }
                    return { sampleList: u, lastSequenceNumber: v, totalDuration: E, numSequences: m } }, findInitRange: function(e) { var t = null,
                        n = P(e); if (!n) return t; var r = n.getBox("ftyp"),
                        i = n.getBox("moov"); return a.debug("Searching for initialization."), i && i.isComplete && (t = (r ? r.offset : i.offset) + "-" + (i.offset + i.size - 1), a.debug("Found the initialization.  Range: " + t)), t } }, a = (0, i.default)(r).getInstance().getLogger(e), e }
        u.__dashjs_factory_name = "BoxParser", n.default = a.default.getSingletonFactory(u), t.exports = n.default }, { 215: 215, 231: 231, 45: 45, 47: 47, 9: 9 }], 208: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() { var e, t = void 0; return t = !(e = { supportsMediaSource: function() { var e = "WebKitMediaSource" in window,
                        t = "MediaSource" in window; return e || t }, supportsEncryptedMedia: function() { return t }, supportsCodec: function(e) { return !!("MediaSource" in window && MediaSource.isTypeSupported(e)) || !!("WebKitMediaSource" in window && WebKitMediaSource.isTypeSupported(e)) }, setEncryptedMediaSupported: function(e) { t = e } }), e }
        o.__dashjs_factory_name = "Capabilities", n.default = a.default.getSingletonFactory(o), t.exports = n.default }, { 47: 47 }], 209: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r },
            o = e(219);

        function s() { return { customTimeRangeArray: [], length: 0, add: function(e, t) { for (var n = 0, n = 0; n < this.customTimeRangeArray.length && e > this.customTimeRangeArray[n].start; n++); for (this.customTimeRangeArray.splice(n, 0, { start: e, end: t }), n = 0; n < this.customTimeRangeArray.length - 1; n++) this.mergeRanges(n, n + 1) && n--;
                    this.length = this.customTimeRangeArray.length }, clear: function() { this.customTimeRangeArray = [], this.length = 0 }, remove: function(e, t) { for (var n = 0; n < this.customTimeRangeArray.length; n++)
                        if (e <= this.customTimeRangeArray[n].start && t >= this.customTimeRangeArray[n].end) this.customTimeRangeArray.splice(n, 1), n--;
                        else { if (e > this.customTimeRangeArray[n].start && t < this.customTimeRangeArray[n].end) { this.customTimeRangeArray.splice(n + 1, 0, { start: t, end: this.customTimeRangeArray[n].end }), this.customTimeRangeArray[n].end = e; break }
                            e > this.customTimeRangeArray[n].start && e < this.customTimeRangeArray[n].end ? this.customTimeRangeArray[n].end = e : t > this.customTimeRangeArray[n].start && t < this.customTimeRangeArray[n].end && (this.customTimeRangeArray[n].start = t) }
                    this.length = this.customTimeRangeArray.length }, mergeRanges: function(e, t) { var n = this.customTimeRangeArray[e],
                        r = this.customTimeRangeArray[t]; return n.start <= r.start && r.start <= n.end && n.end <= r.end ? (n.end = r.end, this.customTimeRangeArray.splice(t, 1), !0) : r.start <= n.start && n.start <= r.end && r.end <= n.end ? (n.start = r.start, this.customTimeRangeArray.splice(t, 1), !0) : r.start <= n.start && n.start <= r.end && n.end <= r.end ? (this.customTimeRangeArray.splice(e, 1), !0) : n.start <= r.start && r.start <= n.end && r.end <= n.end && (this.customTimeRangeArray.splice(t, 1), !0) }, start: function(e) { return (0, o.checkInteger)(e), e >= this.customTimeRangeArray.length || e < 0 ? NaN : this.customTimeRangeArray[e].start }, end: function(e) { return (0, o.checkInteger)(e), e >= this.customTimeRangeArray.length || e < 0 ? NaN : this.customTimeRangeArray[e].end } } }
        s.__dashjs_factory_name = "CustomTimeRanges", n.default = a.default.getClassFactory(s), t.exports = n.default }, { 219: 219, 47: 47 }], 210: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            d = r(e(45)),
            f = r(e(108)),
            c = [{ oldKey: "dashjs_vbitrate", newKey: "dashjs_video_bitrate" }, { oldKey: "dashjs_abitrate", newKey: "dashjs_audio_bitrate" }, { oldKey: "dashjs_vsettings", newKey: "dashjs_video_settings" }, { oldKey: "dashjs_asettings", newKey: "dashjs_audio_settings" }],
            h = "dashjs_?_bitrate",
            p = "dashjs_?_settings",
            g = "localStorage",
            _ = "lastBitrate",
            E = "lastMediaSettings";

        function a(e) { e = e || {}; var t = this.context,
                o = e.settings,
                n = void 0,
                s = void 0,
                r = void 0;

            function i(e) { if (void 0 !== r) return r;
                r = !1; var t = void 0; try { "undefined" != typeof window && (t = window[e]) } catch (e) { return s.warn("DOMStorage access denied: " + e.message), r } if (!t || e !== g && "sessionStorage" !== e) return r; try { t.setItem("1", "1"), t.removeItem("1"), r = !0 } catch (e) { s.warn("DOMStorage is supported, but cannot be used: " + e.message) } return r }

            function a() { return 6e5 * Math.round((new Date).getTime() / 6e5) }

            function u(e, t) { return i(e) && o.get().streaming[t + "CachingInfo"].enabled }

            function l() { if (!o) throw new Error(f.default.MISSING_CONFIG_ERROR) } return n = { getSavedBitrateSettings: function(e) { var t = NaN; if (l(), u(g, _)) { var n = h.replace(/\?/, e); try { var r = JSON.parse(localStorage.getItem(n)) || {},
                                i = (new Date).getTime() - parseInt(r.timestamp, 10) >= o.get().streaming.lastBitrateCachingInfo.ttl || !1,
                                a = parseFloat(r.bitrate);
                            isNaN(a) || i ? i && localStorage.removeItem(n) : (t = a, s.debug("Last saved bitrate for " + e + " was " + a)) } catch (e) { return null } } return t }, setSavedBitrateSettings: function(e, t) { if (u(g, _) && t) { var n = h.replace(/\?/, e); try { localStorage.setItem(n, JSON.stringify({ bitrate: t.toFixed(3), timestamp: a() })) } catch (e) { s.error(e.message) } } }, getSavedMediaSettings: function(e) { var t = null; if (l(), u(g, E)) { var n = p.replace(/\?/, e); try { var r = JSON.parse(localStorage.getItem(n)) || {},
                                i = (new Date).getTime() - parseInt(r.timestamp, 10) >= o.get().streaming.lastMediaSettingsCachingInfo.ttl || !1,
                                t = r.settings;
                            i && (localStorage.removeItem(n), t = null) } catch (e) { return null } } return t }, setSavedMediaSettings: function(e, t) { if (u(g, E)) { var n = p.replace(/\?/, e); try { localStorage.setItem(n, JSON.stringify({ settings: t, timestamp: a() })) } catch (e) { s.error(e.message) } } } }, s = (0, d.default)(t).getInstance().getLogger(n), i(g) && c.forEach(function(e) { var t = localStorage.getItem(e.oldKey); if (t) { localStorage.removeItem(e.oldKey); try { localStorage.setItem(e.newKey, t) } catch (e) { s.error(e.message) } } }), n }
        a.__dashjs_factory_name = "DOMStorage"; var o = i.default.getSingletonFactory(a);
        n.default = o, t.exports = n.default }, { 108: 108, 45: 45, 47: 47 }], 211: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() {
            function e(t, e) { try { return new window.URL(t, e).toString() } catch (e) { return t } }

            function t(e, t) { var n = s; if (!t) return e; if (!d(e)) return e;
                f(e) && (n = u), c(e) && (n = l); var r = n(t),
                    i = "/" !== r.charAt(r.length - 1) && "/" !== e.charAt(0) ? "/" : ""; return [r, e].join(i) } var n = void 0,
                r = /^[a-z][a-z0-9+\-_.]*:/i,
                i = /^https?:\/\//i,
                a = /^https:\/\//i,
                o = /^([a-z][a-z0-9+\-_.]*:\/\/[^\/]+)\/?/i;

            function s(e) { var t = e.indexOf("/"),
                    n = e.lastIndexOf("/"); return -1 !== t ? n === t + 1 ? e : (-1 !== e.indexOf("?") && (e = e.substring(0, e.indexOf("?"))), e.substring(0, n + 1)) : "" }

            function u(e) { var t = e.match(o); return t ? t[1] : "" }

            function l(e) { var t = e.match(r); return t ? t[0] : "" }

            function d(e) { return !r.test(e) }

            function f(e) { return d(e) && "/" === e.charAt(0) }

            function c(e) { return 0 === e.indexOf("//") } return function() { try { new window.URL("x", "http://y");
                    n = e } catch (e) {} finally { n = n || t } }(), { parseBaseUrl: s, parseOrigin: u, parseScheme: l, isRelative: d, isPathAbsolute: f, isSchemeRelative: c, isHTTPURL: function(e) { return i.test(e) }, isHTTPS: function(e) { return a.test(e) }, removeHostname: function(e) { return /^(?:\w+\:\/\/)?([^\/]+)(.*)$/.exec(e)[2].substring(1) }, resolve: function(e, t) { return n(e, t) } } }
        o.__dashjs_factory_name = "DefaultURLUtils", n.default = a.default.getSingletonFactory(o), t.exports = n.default }, { 47: 47 }], 212: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { e = e || {}; var n = void 0,
                s = new DataView(e.data),
                u = 0;

            function i(e, t) { var n = !0,
                    r = 0; if (void 0 === t && (t = !1), r = 16777215 < e.tag ? (s.getUint32(u) !== e.tag && (n = !1), 4) : 65535 < e.tag ? (256 * s.getUint16(u) + s.getUint8(u + 2) !== e.tag && (n = !1), 3) : 255 < e.tag ? (s.getUint16(u) !== e.tag && (n = !1), 2) : (s.getUint8(u) !== e.tag && (n = !1), 1), !n && e.required && !t) throw new Error("required tag not found"); return n && (u += r), n }

            function a(e) { for (var t = 1, n = 128, r = -1, i = 0, a = s.getUint8(u), o = 0, o = 0; o < 8; o += 1) { if ((a & n) === n) { i = void 0 === e ? a & ~n : a, r = o; break }
                    n >>= 1 } for (o = 0; o < r; o += 1, t += 1) i = i << 8 | 255 & s.getUint8(u + t); return u += t, i } return n = { getPos: function() { return u }, setPos: function(e) { u = e }, consumeTag: i, consumeTagAndSize: function(e, t) { var n = i(e, t); return n && a(), n }, parseTag: function(e) { var t; return i(e), t = a(), n[e.parse](t) }, skipOverElement: function(e, t) { var n = i(e, t),
                        r = void 0; return n && (r = a(), u += r), n }, getMatroskaCodedNum: a, getMatroskaFloat: function(e) { var t = void 0; switch (e) {
                        case 4:
                            t = s.getFloat32(u), u += 4; break;
                        case 8:
                            t = s.getFloat64(u), u += 8 } return t }, getMatroskaUint: function(e) { for (var t = 0, n = 0; n < e; n += 1) t <<= 8, t |= 255 & s.getUint8(u + n); return u += e, t }, moreData: function() { return u < s.byteLength } } }
        o.__dashjs_factory_name = "EBMLParser", n.default = a.default.getClassFactory(o), t.exports = n.default }, { 47: 47 }], 213: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(46)),
            a = r(e(54)),
            o = r(e(47));

        function s() { var e = this.context,
                t = (0, i.default)(e).getInstance(); return { error: function(e) { t.trigger(a.default.ERROR, { error: e }) } } }
        s.__dashjs_factory_name = "ErrorHandler", n.default = o.default.getSingletonFactory(s), t.exports = n.default }, { 46: 46, 47: 47, 54: 54 }], 214: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() { var r = {}; return { save: function(e) { var t = e.streamId,
                        n = e.representationId;
                    r[t] = r[t] || {}, r[t][n] = e }, extract: function(e, t) { return r && r[e] && r[e][t] ? r[e][t] : null }, reset: function() { r = {} } } }
        o.__dashjs_factory_name = "InitCache", n.default = a.default.getSingletonFactory(o), t.exports = n.default }, { 47: 47 }], 215: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(230)),
            a = r(e(47));

        function o() { var o = void 0;

            function t(e) { var t = []; if (!e || !o || "function" != typeof o.fetchAll) return t; for (var n = o.fetchAll(e), r = void 0, i = 0, a = n.length; i < a; i++)(r = s(n[i])) && t.push(r); return t }

            function s(e) { if (!e) return null; var t = new i.default(e); return e.hasOwnProperty("_incomplete") && (t.isComplete = !e._incomplete), t } return { getBox: function(e) { return e && o && o.boxes && 0 !== o.boxes.length && "function" == typeof o.fetch ? s(o.fetch(e)) : null }, getBoxes: t, setData: function(e) { o = e }, getLastBox: function() { if (!o || !o.boxes || !o.boxes.length) return null; var e = t(o.boxes[o.boxes.length - 1].type); return 0 < e.length ? e[e.length - 1] : null } } }
        o.__dashjs_factory_name = "IsoFile", n.default = a.default.getClassFactory(o), t.exports = n.default }, { 230: 230, 47: 47 }], 216: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(108));

        function o(e) { var t = (e = e || {}).timelineConverter; return { getLiveEdge: function(e) { return function() { if (!t || !t.hasOwnProperty("getExpectedLiveEdge")) throw new Error(a.default.MISSING_CONFIG_ERROR) }(), e.DVRWindow ? e.DVRWindow.end : 0 }, reset: function() { t = null } } }
        o.__dashjs_factory_name = "LiveEdgeFinder", n.default = i.default.getClassFactory(o), t.exports = n.default }, { 108: 108, 47: 47 }], 217: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(12));

        function o() { return { areEqual: function(e, t) { return (0, a.default)(e, t) } } }
        o.__dashjs_factory_name = "ObjectUtils", n.default = i.default.getSingletonFactory(o), t.exports = n.default }, { 12: 12, 47: 47 }], 218: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o() { return { modifyRequestURL: function(e) { return e }, modifyRequestHeader: function(e) { return e } } }
        o.__dashjs_factory_name = "RequestModifier", n.default = a.default.getSingletonFactory(o), t.exports = n.default }, { 47: 47 }], 219: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }), n.checkParameterType = function(e, t) { if (typeof e !== t) throw a.default.BAD_ARGUMENT_ERROR }, n.checkInteger = function(e) { if (null === e || isNaN(e) || e % 1 != 0) throw a.default.BAD_ARGUMENT_ERROR + " : argument is not an integer" }, n.checkRange = function(e, t, n) { if (e < t || n < e) throw a.default.BAD_ARGUMENT_ERROR + " : argument out of range" }, n.checkIsVideoOrAudioType = function(e) { if ("string" != typeof e || e !== a.default.AUDIO && e !== a.default.VIDEO) throw a.default.BAD_ARGUMENT_ERROR }; var r, i = e(108),
            a = (r = i) && r.__esModule ? r : { default: r } }, { 108: 108 }], 220: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(45)),
            o = r(e(46)),
            S = r(e(54)),
            A = e(17);

        function s() { var e = this.context,
                v = (0, o.default)(e).getInstance(),
                t = void 0,
                y = void 0,
                T = 0; return t = { parse: function(e, t, n, r, i) { var a = "",
                        o = [],
                        s = void 0,
                        u = void 0,
                        l = void 0,
                        d = {},
                        f = {},
                        c = "",
                        h = "",
                        p = { onOpenTag: function(e, t, n) { if ("image" === t && ("http://www.smpte-ra.org/schemas/2052-1/2010/smpte-tt" === e || "http://www.smpte-ra.org/schemas/2052-1/2013/smpte-tt" === e)) { if (!n[" imageType"] || "PNG" !== n[" imageType"].value) return void y.warn("smpte-tt imageType != PNG. Discarded");
                                    c = n["http://www.w3.org/XML/1998/namespace id"].value } }, onCloseTag: function() { c && (f[c] = h.trim()), c = h = "" }, onText: function(e) { c && (h += e) } }; if (!e) throw a = "no ttml data to parse", new Error(a);
                    d.data = e, v.trigger(S.default.TTML_TO_PARSE, d); var g = (0, A.fromXML)(d.data, function(e) { a = e }, p);
                    v.trigger(S.default.TTML_PARSED, { ttmlString: d.data, ttmlDoc: g }); for (var _, E = g.getMediaTimeEvents(), l = 0; l < E.length; l++) { var m = (0, A.generateISD)(g, E[l], function(e) { a = e });
                        m.contents.some(function(e) { return e.contents.length }) && (s = E[l] + t < n ? n : E[l] + t) < (u = E[l + 1] + t > r ? r : E[l + 1] + t) && o.push({ start: s, end: u, type: "html", cueID: (_ = "cue_TTML_" + T, T++, _), isd: m, images: i, embeddedImages: f }) } if ("" !== a) throw y.error(a), new Error(a); return o } }, y = (0, a.default)(e).getInstance().getLogger(t), t }
        s.__dashjs_factory_name = "TTMLParser", n.default = i.default.getSingletonFactory(s), t.exports = n.default }, { 17: 17, 45: 45, 46: 46, 47: 47, 54: 54 }], 221: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            o = r(e(211));

        function a() { var i = void 0,
                a = [],
                e = this.context;

            function n(e, t, n) { var r = function(e) { for (var t = void 0, t = 0; t < a.length; t++) { if (a[t].regex.test(e)) return a[t].utils } return i }(n || t); return r && "function" == typeof r[e] ? r[e](t, n) : i[e](t, n) } return i = (0, o.default)(e).getInstance(), { registerUrlRegex: function(e, t) { a.push({ regex: e, utils: t }) }, parseBaseUrl: function(e) { return n("parseBaseUrl", e) }, parseOrigin: function(e) { return n("parseOrigin", e) }, parseScheme: function(e) { return n("parseScheme", e) }, isRelative: function(e) { return n("isRelative", e) }, isPathAbsolute: function(e) { return n("isPathAbsolute", e) }, isSchemeRelative: function(e) { return n("isSchemeRelative", e) }, isHTTPURL: function(e) { return n("isHTTPURL", e) }, isHTTPS: function(e) { return n("isHTTPS", e) }, removeHostname: function(e) { return n("removeHostname", e) }, resolve: function(e, t) { return n("resolve", e, t) } } }
        a.__dashjs_factory_name = "URLUtils"; var s = i.default.getSingletonFactory(a);
        n.default = s, t.exports = n.default }, { 211: 211, 47: 47 }], 222: [function(e, t, n) { "use strict";

        function r(e) { return e && e.__esModule ? e : { default: e } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = r(e(47)),
            a = r(e(45));

        function o() { var e = this.context,
                t = void 0,
                p = void 0,
                g = void 0,
                _ = void 0,
                E = void 0,
                m = void 0;

            function v(e) { var t = e.split(":"),
                    n = t.length - 1; return e = 60 * parseInt(t[n - 1], 10) + parseFloat(t[n]), 2 == n && (e += 3600 * parseInt(t[0], 10)), e } return t = { parse: function(e) { var t, n = [],
                        r = void 0; if (!e) return n;
                    t = (e = e.split(g)).length, r = -1; for (var i, a, o = 0; o < t; o++) { var s, u, l, d, f, c, h = e[o];
                        0 < h.length && "WEBVTT" !== h && h.match(_) && (a = i = void 0, i = h.split(_), (a = i[1].split(m)).shift(), i[1] = a[0], a.shift(), u = (s = { cuePoints: i, styles: function(e) { var n = {}; return e.forEach(function(e) { var t;
                                    1 < e.split(/:/).length && ((t = e.split(/:/)[1]) && -1 != t.search(/%/) && (t = parseInt(t.replace(/%/, ""), 10)), (e.match(/align/) || e.match(/A/)) && (n.align = t), (e.match(/line/) || e.match(/L/)) && (n.line = t), (e.match(/position/) || e.match(/P/)) && (n.position = t), (e.match(/size/) || e.match(/S/)) && (n.size = t)) }), n }(a) }).cuePoints, l = s.styles, d = function(e, t) { var n, r = t,
                                i = "",
                                a = ""; for (;
                                "" !== e[r] && r < e.length;) r++; if (1 < (n = r - t))
                                for (var o = 0; o < n; o++) { if ((a = e[t + o]).match(_)) { i = ""; break }
                                    i += a, o !== n - 1 && (i += "\n") } else(a = e[t]).match(_) || (i = a); return i }(e, o + 1), f = v(u[0].replace(E, "")), c = v(u[1].replace(E, "")), !isNaN(f) && !isNaN(c) && r <= f && f < c ? "" !== d ? (r = f, n.push({ start: f, end: c, data: d, styles: l })) : p.error("Skipping cue due to empty/malformed cue text") : p.error("Skipping cue due to incorrect cue timing")) } return n } }, p = (0, a.default)(e).getInstance().getLogger(t), g = /(?:\r\n|\r|\n)/gm, _ = /-->/, E = /(^[\s]+|[\s]+$)/g, m = /\s\b/g, t }
        o.__dashjs_factory_name = "VTTParser", n.default = i.default.getSingletonFactory(o), t.exports = n.default }, { 45: 45, 47: 47 }], 223: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var r = (e = e || {}).blacklistController; return { select: function(e) { var n = 0,
                        t = void 0; return e && e.some(function(e, t) { return n = t, !r.contains(e.serviceLocation) }) && (t = e[n]), t } } }
        o.__dashjs_factory_name = "BasicSelector", n.default = a.default.getClassFactory(o), t.exports = n.default }, { 47: 47 }], 224: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(47),
            a = (r = i) && r.__esModule ? r : { default: r };

        function o(e) { var n = (e = e || {}).blacklistController; return { select: function(e) { return e && function(e) { var t = 0,
                            n = [],
                            r = 0,
                            i = void 0,
                            a = void 0; if ((a = e.sort(function(e, t) { var n = e.dvb_priority - t.dvb_priority; return isNaN(n) ? 0 : n }).filter(function(e, t, n) { return !t || n[0].dvb_priority && e.dvb_priority && n[0].dvb_priority === e.dvb_priority })).length) return 1 < a.length && (a.forEach(function(e) { t += e.dvb_weight, n.push(t) }), i = Math.floor(Math.random() * (t - 1)), n.every(function(e, t) { return r = t, !(i < e) })), a[r] }((t = [], e.filter(function(e) { return !n.contains(e.serviceLocation) || (e.dvb_priority && t.push(e.dvb_priority), !1) }).filter(function(e) { return !t.length || !e.dvb_priority || -1 === t.indexOf(e.dvb_priority) }))); var t } } }
        o.__dashjs_factory_name = "DVBSelector", n.default = a.default.getClassFactory(o), t.exports = n.default }, { 47: 47 }], 225: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.mediaType = null, this.bitrate = null, this.width = null, this.height = null, this.scanType = null, this.qualityIndex = NaN }, t.exports = n.default }, {}], 226: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n, r) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.code = t || null, this.message = n || null, this.data = r || null }, t.exports = n.default }, {}], 227: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.streamId = null, this.mediaInfo = null, this.segmentType = null, this.quality = NaN, this.index = NaN, this.bytes = null, this.start = NaN, this.end = NaN, this.duration = NaN, this.representationId = null, this.endFragment = null }, t.exports = n.default }, {}], 228: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { return t && i(e.prototype, t), n && i(e, n), e };

        function i(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } } var a = e(242),
            o = (r(s, [{ key: "isInitializationRequest", value: function() { return this.type && this.type === a.HTTPRequest.INIT_SEGMENT_TYPE } }, { key: "setInfo", value: function(e) { this.type = e && e.init ? a.HTTPRequest.INIT_SEGMENT_TYPE : a.HTTPRequest.MEDIA_SEGMENT_TYPE, this.url = e && e.url ? e.url : null, this.range = e && e.range ? e.range.start + "-" + e.range.end : null, this.mediaType = e && e.mediaType ? e.mediaType : null } }]), s);

        function s(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, s), this.action = s.ACTION_DOWNLOAD, this.startTime = NaN, this.mediaType = null, this.mediaInfo = null, this.type = null, this.duration = NaN, this.timescale = NaN, this.range = null, this.url = e || null, this.serviceLocation = null, this.requestStartDate = null, this.firstByteDate = null, this.requestEndDate = null, this.quality = NaN, this.index = NaN, this.availabilityStartTime = null, this.availabilityEndTime = null, this.wallStartTime = null, this.bytesLoaded = NaN, this.bytesTotal = NaN, this.delayLoadingTime = NaN, this.responseType = "arraybuffer", this.representationId = null }
        o.ACTION_DOWNLOAD = "download", o.ACTION_COMPLETE = "complete", n.default = o, t.exports = n.default }, { 242: 242 }], 229: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } }; var i, a = e(228),
            o = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(s, ((i = a) && i.__esModule ? i : { default: i }).default), s);

        function s(e) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, s), r(Object.getPrototypeOf(s.prototype), "constructor", this).call(this, e), this.checkForExistenceOnly = !0 }
        n.default = o, t.exports = n.default }, { 228: 228 }], 230: [function(e, t, n) { "use strict";

        function r(e, t) { for (var n = 0; n < t.length; n++) { var r = t[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r) } }
        Object.defineProperty(n, "__esModule", { value: !0 }); var i = (function(e, t, n) { return t && r(e.prototype, t), n && r(e, n), e }(a, [{ key: "getChildBox", value: function(e) { for (var t = 0; t < this.boxes.length; t++)
                    if (this.boxes[t].type === e) return this.boxes[t] } }, { key: "getChildBoxes", value: function(e) { for (var t = [], n = 0; n < this.boxes.length; n++) this.boxes[n].type === e && t.push(this.boxes[n]); return t } }]), a);

        function a(e) { if (! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, a), this.offset = e._offset, this.type = e.type, this.size = e.size, this.boxes = [], e.boxes)
                for (var t = 0; t < e.boxes.length; t++) this.boxes.push(new a(e.boxes[t])); switch (this.isComplete = !0, e.type) {
                case "sidx":
                    if (this.timescale = e.timescale, this.earliest_presentation_time = e.earliest_presentation_time, this.first_offset = e.first_offset, this.references = e.references, e.references) { this.references = []; for (t = 0; t < e.references.length; t++) { var n = { reference_type: e.references[t].reference_type, referenced_size: e.references[t].referenced_size, subsegment_duration: e.references[t].subsegment_duration };
                            this.references.push(n) } } break;
                case "emsg":
                    this.id = e.id, this.version = 1 === e.version ? 1 : 0, this.value = e.value, this.timescale = e.timescale, this.scheme_id_uri = e.scheme_id_uri, this.presentation_time_delta = 1 === e.version ? e.presentation_time : e.presentation_time_delta, this.event_duration = e.event_duration, this.message_data = e.message_data; break;
                case "mdhd":
                    this.timescale = e.timescale; break;
                case "mfhd":
                    this.sequence_number = e.sequence_number; break;
                case "subs":
                    this.entry_count = e.entry_count, this.entries = e.entries; break;
                case "tfhd":
                    this.base_data_offset = e.base_data_offset, this.sample_description_index = e.sample_description_index, this.default_sample_duration = e.default_sample_duration, this.default_sample_size = e.default_sample_size, this.default_sample_flags = e.default_sample_flags, this.flags = e.flags; break;
                case "tfdt":
                    this.version = e.version, this.baseMediaDecodeTime = e.baseMediaDecodeTime, this.flags = e.flags; break;
                case "trun":
                    if (this.sample_count = e.sample_count, this.first_sample_flags = e.first_sample_flags, this.data_offset = e.data_offset, this.flags = e.flags, this.samples = e.samples, e.samples) { this.samples = []; for (var t = 0, r = e.samples.length; t < r; t++) { var i = { sample_size: e.samples[t].sample_size, sample_duration: e.samples[t].sample_duration, sample_composition_time_offset: e.samples[t].sample_composition_time_offset };
                            this.samples.push(i) } } } }
        n.default = i, t.exports = n.default }, {}], 231: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e(t, n, r) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.lastCompletedOffset = t, this.found = n, this.size = r }, t.exports = n.default }, {}], 232: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.TcpList = [], this.HttpList = [], this.RepSwitchList = [], this.BufferLevel = [], this.BufferState = [], this.PlayList = [], this.DroppedFrames = [], this.SchedulingInfo = [], this.DVRInfo = [], this.ManifestUpdate = [], this.RequestsQueue = null, this.DVBErrors = [] }, t.exports = n.default }, {}], 233: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r = function(e, t, n) { for (var r = !0; r;) { var i = e,
                    a = t,
                    o = n,
                    r = !1;
                null === i && (i = Function.prototype); var s = Object.getOwnPropertyDescriptor(i, a); if (void 0 !== s) { if ("value" in s) return s.value; var u = s.get; if (void 0 === u) return; return u.call(o) } var l = Object.getPrototypeOf(i); if (null === l) return;
                e = l, t = a, n = o, r = !0, s = l = void 0 } };

        function i(e) { return e && e.__esModule ? e : { default: e } } var a = i(e(108)),
            o = (function(e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t) }(s, i(e(228)).default), s);

        function s(e, t) {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, s), r(Object.getPrototypeOf(s.prototype), "constructor", this).call(this), this.url = e || null, this.type = t || null, this.mediaType = a.default.STREAM, this.responseType = "" }
        n.default = o, t.exports = n.default }, { 108: 108, 228: 228 }], 234: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.captionData = null, this.label = null, this.lang = null, this.defaultTrack = !1, this.kind = null, this.isFragmented = !1, this.isEmbedded = !1 }, t.exports = n.default }, {}], 235: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.url = null, this.width = null, this.height = null, this.x = null, this.y = null }, t.exports = n.default }, {}], 236: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.bitrate = 0, this.width = 0, this.height = 0, this.tilesHor = 0, this.tilesVert = 0, this.widthPerTile = 0, this.heightPerTile = 0, this.startNumber = 0, this.segmentDuration = 0, this.timescale = 0, this.templateUrl = "", this.id = "" }, t.exports = n.default }, {}], 237: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.t = null, this.xywh = null, this.track = null, this.id = null, this.s = null, this.r = null }, t.exports = n.default }, {}], 238: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.t = null, this.level = null }, t.exports = n.default }, {}], 239: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 }); var r, i = e(109),
            a = (r = i) && r.__esModule ? r : { default: r };
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.target = null, this.state = a.default.BUFFER_EMPTY }, t.exports = n.default }, { 109: 109 }], 240: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.time = null, this.range = null, this.manifestInfo = null }, t.exports = n.default }, {}], 241: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.time = null, this.droppedFrames = null }, t.exports = n.default }, {}], 242: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(n, "__esModule", { value: !0 });

        function i() { r(this, i), this.tcpid = null, this.type = null, this.url = null, this.actualurl = null, this.range = null, this.trequest = null, this.tresponse = null, this.responsecode = null, this.interval = null, this.trace = [], this._stream = null, this._tfinish = null, this._mediaduration = null, this._quality = null, this._responseHeaders = null, this._serviceLocation = null }
        i.GET = "GET", i.HEAD = "HEAD", i.MPD_TYPE = "MPD", i.XLINK_EXPANSION_TYPE = "XLinkExpansion", i.INIT_SEGMENT_TYPE = "InitializationSegment", i.INDEX_SEGMENT_TYPE = "IndexSegment", i.MEDIA_SEGMENT_TYPE = "MediaSegment", i.BITSTREAM_SWITCHING_SEGMENT_TYPE = "BitstreamSwitchingSegment", i.OTHER_TYPE = "other", n.HTTPRequest = i, n.HTTPRequestTrace = function e() { r(this, e), this.s = null, this.d = null, this.b = [] } }, {}], 243: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.ManifestUpdate = function e() { r(this, e), this.mediaType = null, this.type = null, this.requestTime = null, this.fetchTime = null, this.availabilityStartTime = null, this.presentationStartTime = 0, this.clientTimeOffset = 0, this.currentTime = null, this.buffered = null, this.latency = 0, this.streamInfo = [], this.representationInfo = [] }, n.ManifestUpdateStreamInfo = function e() { r(this, e), this.id = null, this.index = null, this.start = null, this.duration = null }, n.ManifestUpdateRepresentationInfo = function e() { r(this, e), this.id = null, this.index = null, this.mediaType = null, this.streamIndex = null, this.presentationTimeOffset = null, this.startNumber = null, this.fragmentInfoType = null } }, {}], 244: [function(e, t, n) { "use strict";

        function r(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(n, "__esModule", { value: !0 });

        function i() { r(this, i), this.start = null, this.mstart = null, this.starttype = null, this.trace = [] }
        i.INITIAL_PLAYOUT_START_REASON = "initial_playout", i.SEEK_START_REASON = "seek", i.RESUME_FROM_PAUSE_START_REASON = "resume", i.METRICS_COLLECTION_START_REASON = "metrics_collection_start";

        function a() { r(this, a), this.representationid = null, this.subreplevel = null, this.start = null, this.mstart = null, this.duration = null, this.playbackspeed = null, this.stopreason = null }
        a.REPRESENTATION_SWITCH_STOP_REASON = "representation_switch", a.REBUFFERING_REASON = "rebuffering", a.USER_REQUEST_STOP_REASON = "user_request", a.END_OF_PERIOD_STOP_REASON = "end_of_period", a.END_OF_CONTENT_STOP_REASON = "end_of_content", a.METRICS_COLLECTION_STOP_REASON = "metrics_collection_end", a.FAILURE_STOP_REASON = "failure", n.PlayList = i, n.PlayListTrace = a }, {}], 245: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.t = null, this.mt = null, this.to = null, this.lto = null }, t.exports = n.default }, {}], 246: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.loadingRequests = [], this.executedRequests = [] }, t.exports = n.default }, {}], 247: [function(e, t, n) { "use strict";
        Object.defineProperty(n, "__esModule", { value: !0 });
        n.default = function e() {! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e), this.mediaType = null, this.t = null, this.type = null, this.startTime = null, this.availabilityStartTime = null, this.duration = null, this.quality = null, this.range = null, this.state = null }, t.exports = n.default }, {}] }, {}, [4]);
//# sourceMappingURL=dash.all.min.js.map