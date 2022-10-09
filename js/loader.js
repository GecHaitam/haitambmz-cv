colors = 
    [
        p1 = "#d4aee0",
        p2 = "#8975b4",
        p3 = "#64518a",
        p4 = "#565190",

        p5 = "#44abac",
        p6 = "#2ca7d8",
        p7 = "#1482ce",
        p8 = "#05597c",

        p9 = "#b2dd57",
        p10 = "#57c443",
        p11 = "#05b853",
        p12 = "#19962e",

        p13 = "#fdc82e",
        p14 = "#fd9c2e",
        p15 = "#d5385a",
        p16 = "#911750",

        p17 = "#d9d9d9",
        p18 = "#9e9e9e",
        p19 = "#666666",
        p20 = "#2b2b2b",

    ]

/* c_color = "white";

for (i = 1; i < 6; i++) 
    {
        cell = document.getElementsByClassName( "c" + i )[0]
        d = i * 100
        cell.style.animationDelay = d + "ms";
    }

for (i = 0; i < colors.length; i++) 
    {
        cell = document.getElementsByClassName( "ab" )[i]
        cell.style.backgroundColor = colors[i]
    } */

$(document).ready(function()
    {
        $("sec_left").animate(
            {left: '0'}
        )
        
    }
)
