let s = "https://example.com/extra.html"

if (s.startsWith("http://") && s.endsWith(".html")) {
    console.log("Valid");
} else {
    console.log("Invalid");
}