## Color Palette Picker for Contentstack

### Running Locally

Use `npm run dev` to run the component on localhost.

### Minify for adding to a Stack

Use `npm run build` to minify JS and add to one HTML file. The output will be `./dist/index.html`.

### Configuration

In ContentStack, this field extension will read the colors as a configuration with the following schema:

```
{
  "colors": [
    { "name": "name of color", "value": "hex color code"}
  ]
}
```
