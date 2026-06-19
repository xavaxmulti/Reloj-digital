for (let i = 0; i < 10; i++) {
    $("body").append(" <div>"+"</div>")
}




let tl = anime.timeline({
    duration:2000,
    loop:true,
    
})
tl.add({

    targets: "div",
    width:10,
    backgroundColor:"rgb(180, 181, 197)",
    delay:anime.stagger(50)
})
tl.add({

    targets: "div",
    width:100,
    
    backgroundColor:"rgb(39, 42, 120)",
    delay:anime.stagger(50)
})


spring({ bounce: 0.85, duration: 1570 })

