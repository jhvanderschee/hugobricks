---
title: Global settings
weight: 1
---

The global settings are stored in the settings.yaml file you can find one level above the language-specific settings.

## Favicon image

A website is not complete without a nice favicon image (shown in the address bar of your browser). Use an SVG image for the best result.

## Color name

You can set the color of the theme by entering a color name here. Currently 'yellow' and 'red' are supported. Note that you can also override this on each page by using the variable `color_name` in the front matter. You can also [manually customize](/docs/customizations/colors/) the colors.

## Sticky header

This boolean lets you enable a sticky header, meaning the header (and navigation) will glue to the top when scrolled/scrolling.

## Custom cursor

You can choose to use a custom cursor by setting this boolean to true or false.

## Intersection observer

You can choose to use the intersection observer to show sections as they scroll into view (desktop only) by setting this boolean to true or false.

## Filter has numbers

The filters at 'services' and 'posts' either show or do not show the amount of posts that matches each tag. This is based on this boolean.

## Page size

The page size is a number that determines how many items are shown before you see a 'load more posts' button. Multiples of 3 work well.

## Show all services

This boolean determines if services should follow the page size, or should just show everything.

## Pre-header

Preheader is defined as the first 'section', at the top of the page body. You can activate it, choose a dark or light style.
