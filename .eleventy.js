const
    { EleventyEdgePlugin, EleventyRenderPlugin } = require("@11ty/eleventy"),
    yaml = require("js-yaml"),
    eleventySass = require("eleventy-sass")

/** @param {import("@11ty/eleventy/src/UserConfig")} config */
module.exports = config => {
    config.addPlugin(EleventyEdgePlugin)
    config.addPlugin(EleventyRenderPlugin)
    config.addPlugin(eleventySass)

    config.addDataExtension("yaml", contents => yaml.load(contents))

    return {
        dir: {
            input: "views",
            data: "../data",
            includes: "../includes"
        }
    }
}
