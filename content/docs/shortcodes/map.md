---
title: Map
---

![Button](/uploads/map2.png "Map")

Self explanatory: provides a nice  map.
Just style (if needed) it and place it at wish in you website, by means of the following 

(In this case, we just added picture of).

```
{{</* map "" "" */>}}
```

invoking the map. 

In this sample website, you can see it in action in the 'Pages' menu related 'Contact us' page. Feel free to place it in other place.

> NOTE: You can of course link the map to the corresponding coordinates in the 'real map' ( G. Maps, OpenStreemaps, etc...), see below.

```
This approach leads to a 'real geophysical position' in the map :

{{</* map "/uploads/map2.png"
"https://www.google.com/maps/place/52%C2%B022'20.1%22N+4%C2%B054'00.4%22E/@52.372253,4.8991072,18z/data=!3m1!4b1!4m4!3m3!8m2!3d52.372253!4d4.9001?entry=ttu */>}}
```
