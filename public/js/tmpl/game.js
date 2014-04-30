define(function () { return function (__fest_context){"use strict";var __fest_self=this,__fest_buf="",__fest_chunks=[],__fest_chunk,__fest_attrs=[],__fest_select,__fest_if,__fest_iterator,__fest_to,__fest_fn,__fest_html="",__fest_blocks={},__fest_params,__fest_element,__fest_debug_file="",__fest_debug_line="",__fest_debug_block="",__fest_htmlchars=/[&<>"]/g,__fest_htmlchars_test=/[&<>"]/,__fest_short_tags = {"area":true,"base":true,"br":true,"col":true,"command":true,"embed":true,"hr":true,"img":true,"input":true,"keygen":true,"link":true,"meta":true,"param":true,"source":true,"wbr":true},__fest_element_stack = [],__fest_htmlhash={"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"},__fest_jschars=/[\\'"\/\n\r\t\b\f<>]/g,__fest_jschars_test=/[\\'"\/\n\r\t\b\f<>]/,__fest_jshash={"\"":"\\\"","\\":"\\\\","/":"\\/","\n":"\\n","\r":"\\r","\t":"\\t","\b":"\\b","\f":"\\f","'":"\\'","<":"\\u003C",">":"\\u003E"},___fest_log_error;if(typeof __fest_error === "undefined"){___fest_log_error = (typeof console !== "undefined" && console.error) ? function(){return Function.prototype.apply.call(console.error, console, arguments)} : function(){};}else{___fest_log_error=__fest_error};function __fest_log_error(msg){___fest_log_error(msg+"\nin block \""+__fest_debug_block+"\" at line: "+__fest_debug_line+"\nfile: "+__fest_debug_file)}function __fest_replaceHTML(chr){return __fest_htmlhash[chr]}function __fest_replaceJS(chr){return __fest_jshash[chr]}function __fest_extend(dest, src){for(var i in src)if(src.hasOwnProperty(i))dest[i]=src[i];}function __fest_param(fn){fn.param=true;return fn}function __fest_call(fn, params,cp){if(cp)for(var i in params)if(typeof params[i]=="function"&&params[i].param)params[i]=params[i]();return fn.call(__fest_self,params)}function __fest_escapeJS(s){if (typeof s==="string") {if (__fest_jschars_test.test(s))return s.replace(__fest_jschars,__fest_replaceJS);} else if (typeof s==="undefined")return "";return s;}function __fest_escapeHTML(s){if (typeof s==="string") {if (__fest_htmlchars_test.test(s))return s.replace(__fest_htmlchars,__fest_replaceHTML);} else if (typeof s==="undefined")return "";return s;}var json=__fest_context;__fest_buf+=("<div id=\"forms\" class=\"form\"><div class=\"gameOverForm\" id=\"formTemplate\"></div></div><div id=\"gameDiv\"><div class=\"header header_game\"><a id=\"backBtn\" href=\"\/#\" class=\"btn_thin game_button\">&#9668 BACK</a><a id=\"pause\" class=\"btn_thin game_button\"></a><a id=\"restart\" class=\"btn_thin game_button\"></a></div><div class=\"info\"><div class=\"info__header\">score: <span id=\"score\">0</span></div><div class=\"info__bullets\"><div class=\"info__header\">bullets</div><div class=\"info__bullets__bullet-type\"><canvas style=\"width: 20px; height:50px;\" id=\"first_bullet\" class=\"info__bullets__img\"></canvas><div class=\"info__text\">∞</div></div><div class=\"info__bullets__bullet-type\"><canvas style=\"width: 20px; height:50px;\" id=\"second_bullet\" class=\"info__bullets__img\"></canvas><div class=\"info__text first-bonus\">0</div></div><div class=\"info__bullets__bullet-type\"><canvas style=\"width: 20px; height:50px;\" id=\"third_bullet\" class=\"info__bullets__img\"></canvas><div class=\"info__text second-bonus\">0</div></div></div><div class=\"info__ship\"><div class=\"info__header \">ship</div><canvas style=\"height: 100px;\" class=\"info__ship__img\" id=\"ship_img\"></canvas><div class=\"info__ship__properties\"><div class=\"info__text\">Size: <span id=\"ship-size\">0</span></div><div class=\"info__text\">hspeed: <span id=\"ship-hspeed\">0</span></div><div class=\"info__text\">vspeed: <span id=\"ship-vspeed\">0</span></div><div class=\"info__text\">multi: <span id=\"ship-multiplier\">0</span></div></div></div><div class=\"info__text\">Level</div><div class=\"info__level\"></div></div><canvas id=\"gameField\" class=\"game-screen\"></canvas></div><div id=\"gameOver\" class=\"form\"></div><div class=\"overlay\"></div>");__fest_to=__fest_chunks.length;if (__fest_to) {__fest_iterator = 0;for (;__fest_iterator<__fest_to;__fest_iterator++) {__fest_chunk=__fest_chunks[__fest_iterator];if (typeof __fest_chunk==="string") {__fest_html+=__fest_chunk;} else {__fest_fn=__fest_blocks[__fest_chunk.name];if (__fest_fn) __fest_html+=__fest_call(__fest_fn,__fest_chunk.params,__fest_chunk.cp);}}return __fest_html+__fest_buf;} else {return __fest_buf;}} ; });