module.exports = function(eleventyConfig) {
  eleventyConfig.setPugOptions({ doctype: 'html' });
  eleventyConfig.addPassthroughCopy('CNAME');

  return {
    dir: {
      output: 'dist'
    }
  }
};
