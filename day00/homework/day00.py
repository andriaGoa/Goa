from turtle import *
#we want to paint a house

#step1: darw a square

speed(30)
width(7)
color("purple")
forward(200)
left(90) #gradusi

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

#end of square


#drawing a door
forward(70)
color("yellow")
left(90)
forward(120)
right(90)            #height of the door
forward(60)
right(90)
forward(120)


penup()
goto(200,200)#koordinatebis mixedvit
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

penup()
goto(40,150)
pendown()
color("blue")
begin_fill()
left(120)
forward(30)
left(90)
forward(25)
left(90)
forward(30)
left(90)
forward(25)
end_fill()

penup()
goto(150,150)
pendown()
color("blue")
begin_fill()
left(90)
forward(30)
left(90)
forward(25)
left(90)
forward(30)
left(90)
forward(25)
end_fill()
exitonclick()