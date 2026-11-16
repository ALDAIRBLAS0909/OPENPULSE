const byId = (id) => document.getElementById(id);
const show = (id, value) => { byId(id).textContent = value; };
byId("year").textContent = new Date().getFullYear();

function handleText(id, outputId, fn) {
  byId(id).addEventListener("click", () => {
    try { show(outputId, fn(byId(id.replace("-format","-input").replace("-minify","-input").replace("-encode","-input").replace("-decode","-input")).value)); }
    catch (error) { show(outputId, "Error: " + error.message); }
  });
}
byId("format-json").addEventListener("click", () => {
  try { show("json-output", JSON.stringify(JSON.parse(byId("json-input").value), null, 2)); }
  catch (error) { show("json-output", "Invalid JSON: " + error.message); }
});
byId("minify-json").addEventListener("click", () => {
  try { show("json-output", JSON.stringify(JSON.parse(byId("json-input").value))); }
  catch (error) { show("json-output", "Invalid JSON: " + error.message); }
});
byId("base-encode").addEventListener("click", () => {
  try { show("base-output", btoa(unescape(encodeURIComponent(byId("base-input").value)))); }
  catch (error) { show("base-output", "Could not encode this text."); }
});
byId("base-decode").addEventListener("click", () => {
  try { show("base-output", decodeURIComponent(escape(atob(byId("base-input").value.trim())))); }
  catch (error) { show("base-output", "Invalid Base64 input."); }
});
byId("url-encode").addEventListener("click", () => show("url-output", encodeURIComponent(byId("url-input").value)));
byId("url-decode").addEventListener("click", () => {
  try { show("url-output", decodeURIComponent(byId("url-input").value)); }
  catch (error) { show("url-output", "Invalid encoded URL component."); }
});
byId("text-input").addEventListener("input", (event) => {
  const value = event.target.value;
  show("char-count", value.length);
  show("word-count", value.trim() ? value.trim().split(/\s+/).length : 0);
  show("line-count", value.length ? value.split(/\r\n|\r|\n/).length : 0);
});