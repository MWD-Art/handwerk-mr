const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const esbuild = require('esbuild');
const axios = require('axios');

module.exports = function (eleventyConfig) {

  eleventyConfig.on('eleventy.before', async () => {
    await esbuild.build({
      entryPoints: ['src/js/index.js'],
      bundle: true,
      minify: true,
      sourcemap: true,
      outfile: 'public/js/index.js',
    });
  });

  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy('./src/assets');
  eleventyConfig.addWatchTarget('./src/assets');
  eleventyConfig.addWatchTarget('./src/js');

  eleventyConfig.addFilter("excerpt", (post) => {
    const content = post.replace(/(<([^>]+)>)/gi, "");
    return content.substr(0, content.lastIndexOf(" ", 80)) + "...";
  });

  eleventyConfig.addShortcode('year', () => `${new Date().getFullYear()}`);

  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
