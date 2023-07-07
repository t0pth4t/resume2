// Require the modules
const fs = require("fs");
const marked = require("marked");
const Mustache = require("mustache");

// Define the template file name and the output file name
const templateFile = "template.md";
const outputFile = "output.md";

// Define the variables for the template
const title = "My Markdown File";
const excerpt = "This is a short summary of my markdown file.";
const coverImage = "https://example.com/image.jpg";
const date = new Date().toLocaleDateString();
const ogImage = "https://example.com/og-image.jpg";

// Read the template file
fs.readFile(templateFile, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  // Render the template with the variables
  const rendered = Mustache.render(data, { title, excerpt, coverImage, date, author, ogImage });

  // Convert the markdown to HTML
  const html = marked(rendered);

  // Write the output file
  fs.writeFile(outputFile, html, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("File created successfully!");
  });
});