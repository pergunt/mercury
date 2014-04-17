var extend = require("xtend")

var dragEvent = require("./drag-handler.js")
var svg = require("../../index.js").svg
var dist = require("./point.js").dist

var pointDefaults = {
    "stroke": "black",
    "strokeWidth": "2",
    "fill": "blue",
    "r": "5"
}

var segmentDefaults = {
    "stroke": "black",
    "stroke-width": "2"
}

var circleDefaults = {
    "fill": "rgba(255, 0, 0, 0.1)",
    "stroke": "black",
    "stroke-width": "2"
}

module.exports = {
    point: point,
    segment: segment,
    triangle: triangle,
    circle: circle
}


function point(opts) {
    return svg("circle", extend(pointDefaults, opts))
}

function segment(start, end) {
    return svg("line", extend(segmentDefaults, {
        "x1": start[0], "y1": start[1],
        "x2": end[0], "y2": end[1]
    }))
}

function triangle(a, b, c) {
    return svg("g", [
        segment(a, b),
        segment(b, c),
        segment(c, a)
    ])
}

function circle(center, radius) {
    return svg("circle", extend(circleDefaults, {
        "cx": center[0],
        "cy": center[1],
        "r": dist(center, radius)
    }))
}
