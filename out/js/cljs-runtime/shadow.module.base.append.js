
shadow.cljs.devtools.client.env.module_loaded('base');

try { iglu.dev.init(); } catch (e) { console.error("An error occurred when calling (iglu.dev/init)"); throw(e); }